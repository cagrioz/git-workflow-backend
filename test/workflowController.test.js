/* eslint-disable node/no-unpublished-require */
const expect = require('chai').expect;
const { response } = require('express');
const {
    getWorkflows, getWorkflowByName, saveWorkflowProgress, updatetSolvedWorkflow, insertSolvedWorkflow, isScoreExist, getWorkflowId
} = require('../controllers/workflowController.js');
describe('unit tests for workflow controller',function(){
    it('should update the score',async function(){
        let msg = { message: 'Success' };
        updatetSolvedWorkflow(1, 1, 5, response).then((data)=>{
            expect(data).to.equal(msg);
        })
    })
    it('should insert new solved workflow',async function(){
        let msg = { message: 'Success' };
        insertSolvedWorkflow(2, 1, 5, response).then((data)=>{
            expect(data).to.equal(msg);
        })
    })
    it('should check whether the score exists',async function(){
        let msg = 1
        isScoreExist(1, 1, response).then((data)=>{
            expect(data).to.equal(msg);
        })
    })
    it('should check whether the score exists',async function(){
        let msg = 1
        getWorkflowId('feature', response).then((data)=>{
            expect(data).to.equal(msg);
        })
    })
    
})
describe('integration tests for workflow controller', function () {
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

