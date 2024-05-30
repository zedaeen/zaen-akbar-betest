module.exports = (express) => {
    const router = express.Router();

    router.get('/', (req, res) => {
        res.send("USER")
    });

    return router
}