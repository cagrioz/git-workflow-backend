/* eslint-disable node/no-unpublished-require */
const expect = require('chai').expect;
const sinon = require('sinon');
const { getWorkflows } = require('../controllers/workflowController.js');

describe('getWorkflows', function () {
    it('should retrieve all workflows', function (done) {
        // Mock the necessary dependencies
        const response = {
            status: sinon.spy(),
            json: sinon.spy(),
        };
        const db = {
            query: sinon.stub(),
        };

        // Set up the mock query function to invoke the callback with sample workflows
        const sampleWorkflows = [
            {
                workflow_id: 1,
                workflow_name: 'Workflow 1',
                workflow_description: 'Description 1',
            },
            {
                workflow_id: 2,
                workflow_name: 'Workflow 2',
                workflow_description: 'Description 2',
            },
        ];
        db.query.callsFake(function (query, callback) {
            callback(null, { rows: sampleWorkflows });
        });

        // Call the getWorkflows function
        getWorkflows({}, response, db, () => {
            // Verify the response
            expect(response.status.calledWith(200)).to.be.true;
            expect(response.json.calledWith(sampleWorkflows)).to.be.true;
            done();
        });
    });

    it('should handle database query error', function (done) {
        // Mock the necessary dependencies
        const response = {
            status: sinon.spy(),
            json: sinon.spy(),
        };
        const db = {
            query: sinon.stub(),
        };

        // Set up the mock query function to simulate a database error
        const mockError = new Error('Database error');
        db.query.callsFake(function (query, callback) {
            callback(mockError);
        });

        // Call the getWorkflows function
        getWorkflows({}, response, db, (error) => {
            // Verify the response
            expect(error).to.equal(mockError);
            expect(response.status.calledWith(400)).to.be.true;
            expect(response.json.calledWith(mockError.message)).to.be.true;
            done();
        });
    });
});
