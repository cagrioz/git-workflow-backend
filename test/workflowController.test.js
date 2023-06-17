/* eslint-disable node/no-unpublished-require */
const chai = require('chai');
const chaiHttp = require('chai-http');

const expect = require('chai').expect;

const { describe, it } = require('mocha');

const { response } = require('express');

const sinon = require('sinon');

const sinonChai = require('sinon-chai');
chai.use(chaiHttp);
chai.use(sinonChai);



const {
    getWorkflows,
    getWorkflowByName,
    saveWorkflowProgress,
    updatetSolvedWorkflow,
    insertSolvedWorkflow,
    isScoreExist,
    getWorkflowId,
} = require('../controllers/workflowController.js');


describe('unit tests for workflow controller', function () {
    it('should update the score', async function () {
        let msg = { message: 'Success' };
        updatetSolvedWorkflow(1, 1, 5, response).then((data) => {
            expect(data).to.equal(msg);
        });
    });
    it('should insert new solved workflow', async function () {
        let msg = { message: 'Success' };
        insertSolvedWorkflow(2, 1, 5, response).then((data) => {
            expect(data).to.equal(msg);
        });
    });
    it('should check whether the score exists', async function () {
        let msg = 1;
        isScoreExist(1, 1, response).then((data) => {
            expect(data).to.equal(msg);
        });
    });
    it('should check whether the score exists', async function () {
        let msg = 1;
        getWorkflowId('feature', response).then((data) => {
            expect(data).to.equal(msg);
        });
    });
});


