const getUserController = require("../controllers/user/get")

module.exports = (express) => {
    const router = express.Router();

    router.get('/', getUserController);

    return router
}