const User = require("../src/services/user")
const { expect } = require("chai");

const userName = 'a'
const accountNumber = '11111'
const emailAddress = 'email@email.com'
const identityNumber = 'a121'

async function createDataTest(User) {
    const newUser = await User.createUser({ 
        userName,
        accountNumber,
        emailAddress,
        identityNumber
    })

    return newUser
}

describe("Create User Service Unit Tests", function () {
    it("should successfully add a user", async function () {
         await User.createUser({ 
            userName,
            accountNumber,
            emailAddress,
            identityNumber
        })
    });
    it("should throw an error if accountNumber and identityNumber is duplicated", async function () {
        await User.createUser({ 
            userName,
            accountNumber,
            emailAddress,
            identityNumber
        }).catch(error => {
            expect(error.message).to.equal(`E11000 duplicate key error collection: db_zaen_akbar_betest.users index: accountNumber_1 dup key: { accountNumber: "11111" }`)
        })
        await User.deleteOne({ accountNumber: '11111' })
    });  
});

describe("Get User Service Unit Tests", function () {
    it("should successfully get user by accountNumber", async function () {
        createDataTest(User)
        
        // get one user by account number function
        const getUser = await User.getOneUserByAccount(accountNumber)
        expect(getUser.accountNumber).to.equal(accountNumber)
        
        await User.deleteOne({ accountNumber: '11111' })
    });
    it("should successfully get user by identityNumber", async function () {
        createDataTest(User)

        // get one user by identity number function
        const getUser = await User.getOneUserByIdentity(identityNumber)
        expect(getUser.identityNumber).to.equal(identityNumber)
        
        await User.deleteOne({ identityNumber: 'a121' })
    });  
});