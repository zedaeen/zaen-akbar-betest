const userRoutes = require("./user")
const generateTokenRoutes = require("./generateToken")

module.exports = (express) => {
    const router = express.Router();
    
    
    router.use("/generate-token", generateTokenRoutes(express));
    router.use("/users", userRoutes(express));
    
    return router
}
