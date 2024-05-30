const User = require("../src/services/user")
const { expect } = require("chai");

const userName = 'a'
const accountNumber = '11111'
const emailAddress = 'email@email.com'
const identityNumber = 'a121'

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