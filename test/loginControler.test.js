/* eslint-disable node/no-unpublished-require */
const expect = require('chai').expect;
const { getUserId } = require('../controllers/loginController.js');
describe('integration test for login controller', function () {
    this.timeout(5000); // Increase timeout value to 5000ms or more if need
    it('should login the website', async function () {
        // Create mock request and response objects
        const request = {
            body: {
                username: 'serguney',
                password: '123456789',
            },
        };
        const response = {
            status: function (statusCode) {
                //assert that status code 200
                expect(statusCode).to.eql(200);
                return this;
            },
            json: function (data) {
                // Assert that the response data contains the username and id
                expect(data).to.eql({
                    id: '1',
                    username: 'serguney',
                });
            },
        };
        await getUserId(request, response);
    });
});
