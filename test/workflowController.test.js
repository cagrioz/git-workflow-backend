/* eslint-disable node/no-unpublished-require */
const expect = require('chai').expect;
const {
    saveWorkflowProgress,
} = require('../controllers/workflowController.js');

describe('saveWorkflowProgress', function () {
    this.timeout(5000); // Increase timeout value to 5000ms or more if neede

    it('should save workflow progress for a user', async function () {
        // Create mock request and response objects
        const request = {
            body: {
                workflowName: 'your-workflow-name',
                userId: 1,
                score: 10,
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
                expect(data).to.eql({ msg: 'success' });
            },
        };

        await saveWorkflowProgress(request, response);
        // Call the saveWorkflowProgress function
    });
});

