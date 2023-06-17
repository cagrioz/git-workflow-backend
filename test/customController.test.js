/* eslint-disable node/no-unpublished-require */
const expect = require('chai').expect;
const { response } = require('express');
const {
    createWorkflow,
    getWorkflowId,
} = require('../controllers/customController');
//unit test for custom controller
describe('unit test for custom controller', function () {
    it('should get workflow id', async function () {
        var id = 1;
        const data = await getWorkflowId('feature', response);
        expect(data).to.equal(id);
    });
});


