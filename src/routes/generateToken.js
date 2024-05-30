const generateTokenController = require("../controllers/generateToken")

module.exports = (express) => {
    const router = express.Router();
    
    router.get('/', generateTokenController);

    return router
}