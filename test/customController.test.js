/* eslint-disable node/no-unpublished-require */
const expect = require('chai').expect;
const { response } = require('express');
const { createWorkflow, getWorkflowId } = require('../controllers/customController');
//unit test for custom controller
describe('unit test for custom controller', function(){
    it('should get workflow id', async function(){
        var id = 1;
        const data = await getWorkflowId('feature', response);
        expect(data).to.equal(id);
    })
})
//integration test for workflow controller
describe('integration test for custom controller', function () {
    this.timeout(5000); // Increase timeout value to 5000ms or more if needed

    it('should create a new workflow', async function () {
        const request = {
            body: {
                workflowName: 'Test Workflow',
                userId: '123',
                description: 'This is a test workflow',
                exercises: {
                    exercise1: 'Exercise 1 details',
                    exercise2: 'Exercise 2 details',
                    exercise3: 'Exercise 3 details',
                },
            },
        };

        const response = {
            status: function (statusCode) {
                // Assert that the status code is 200
                expect(statusCode).to.eql(200);
                return this;
            },
            json: function (data) {
                // Assert that the response data contains the success message
                expect(data).to.eql({ msg: 'successful' });
            },
        };

        await createWorkflow(request, response);
    });
});
