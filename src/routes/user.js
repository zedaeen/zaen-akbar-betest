const getUserController = require("../controllers/user/get")
const createUserController = require("../controllers/user/create")
const updateUserController = require("../controllers/user/update")
const deleteUserController = require("../controllers/user/delete")

module.exports = (express) => {
    const router = express.Router();

    router.get('/', getUserController.getAll);
    router.get('/account-number/:accountNumber', getUserController.getOneByAccountNumber);
    router.get('/identity-number/:identityNumber', getUserController.getOneByIdentityNumber);

    router.post('/', createUserController)
    router.patch('/:id', updateUserController)
    router.delete('/:id', deleteUserController)

    return router
}