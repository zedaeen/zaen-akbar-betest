const { createClient } = require("redis");
const hash = require("object-hash");
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({path: path.join(__dirname, '../../.env')});

// initialize the Redis client variable
let redisClient = undefined;

(async () => {
    redisClient = createClient({
      socket: {
        port: process.env.REDIS_PORT,
        host: process.env.REDIS_HOST
      }
    });
  
    redisClient.on("error", (error) => console.error(`Error : ${error}`));
  
    await redisClient.connect();
    console.log("Connected to Redis")
})();

function requestToKey(req) {
    const reqDataToHash = {
        query: req.query,
        body: req.body,
    };
    return `${req.path}@${hash.sha1(reqDataToHash)}`;
}

function isRedisWorking() {
    return !!redisClient?.isOpen;
}

async function writeData(key, data, options) {
    if (isRedisWorking()) {
        try {
            await redisClient.set(key, data, options);
        } catch (e) {
            console.error(`Failed to cache data for key=${key}`, e);
        }
    }
}

async function readData(key) {
    let cachedValue = undefined;
    if (isRedisWorking()) {
        return await redisClient.get(key);
    }
    return cachedValue;
}

async function redisCachingMiddleware (req, res, next) {
    const options = { EX: 30 }
    if (isRedisWorking()) {
        const key = requestToKey(req);

        const cachedValue = await readData(key);
        if (cachedValue) {
            try {
                return res.json(JSON.parse(cachedValue));
            } catch {
                return res.send(cachedValue);
            }
        } else {
            const oldSend = res.send;
            res.send = function(data) {
                res.send = oldSend;
                if (res.statusCode.toString().startsWith("2")) {
                    writeData(key, data, options).then();
                }
                return res.send(data);
            };
            next();
        }
    } else {
        next();
    }
};

module.exports = { redisCachingMiddleware };