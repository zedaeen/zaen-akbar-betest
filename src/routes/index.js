const userRoutes = require("./user")
const generateTokenRoutes = require("./generateToken")
const authMiddleware = require("../middlewares/auth")

module.exports = (express) => {
    const router = express.Router();
    
    router.use("/generate-token", generateTokenRoutes(express));
    router.use(authMiddleware)
    router.use("/users", userRoutes(express));
    
    return router
}
