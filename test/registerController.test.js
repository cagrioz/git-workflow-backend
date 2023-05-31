/* eslint-disable node/no-unpublished-require */
const expect = require('chai').expect;
const {
    registerUser,
} = require('../controllers/registerController.js');
describe ('registerUser', function(){
    this.timeout(5000); // Increase timeout value to 5000ms or more if need
    it('should record the user information for  registration', async function(){
        // Create mock request and response objects
        const request = {
            body: {
                username:"testuser1",
                email:"test1@example.com",
                password:"testuser1password",
                firstname:"name1",
                lastname:"lastname1"
            },
        };
        const response = {
            status:function(statusCode){
                //assert that status code 200
                expect(statusCode).to.eql(200);
                return this;
            },
            json:function(data){
                 // Assert that the response data contains the success message
                 expect(data).to.eql({
                    message: 'Succesfully registered',
                    username: 'testuser1', 
                });
            },
        };
        await registerUser(request, response);
    })
})