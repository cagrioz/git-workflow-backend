/* eslint-disable node/no-unpublished-require */
const expect = require('chai').expect;
const {
    registerUser,
    checkUsername,
    recordUserInfo,
} = require('../controllers/registerController.js');
const { response } = require('express');
const { UserInfo } = require('../models/UserInfo.js');
//unit trest
describe('unit test for register controller', function () {
    it('should get number of users represented by entered username', async function () {
        let user = new UserInfo(
            'notuser',
            'e@xample.com',
            '123456789',
            'Serguney',
            'Gumus'
        );
        checkUsername(user, response).then((length) => {
            expect(length).to.equal(0);
        });
    });
    it('should record new user into the database', async function () {
        let user = new UserInfo(
            'testuser',
            'test@xample.com',
            '123456789',
            'Testname',
            'Testlastname'
        );
        recordUserInfo(user, response).then((user) => {
            expect(user).to.be.an.instanceOf(UserInfo);
        });
    });
});
//integration test
describe('integration test for register controller', function () {
    this.timeout(5000); // Increase timeout value to 5000ms or more if need
    it('should record the user information for  registration', async function () {
        // Create mock request and response objects
        const request = {
            body: {
                username: 'testuser1',
                email: 'test1@example.com',
                password: 'testuser1password',
                firstname: 'name1',
                lastname: 'lastname1',
            },
        };
        const response = {
            status: function (statusCode) {
                //assert that status code 200
                expect(statusCode).to.eql(200);
                return this;
            },
            json: function (data) {
                // Assert that the response data contains the success message
                expect(data).to.eql({
                    message: 'Succesfully registered',
                    username: 'testuser1',
                });
            },
        };
        await registerUser(request, response);
    });
});
