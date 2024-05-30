module.exports = (express) => {
    const router = express.Router();
    
    const userRoutes = require("./user")
    
    router.use("/users", userRoutes(express));
    
    return router
}
