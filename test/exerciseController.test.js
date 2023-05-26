/* eslint-disable node/no-unpublished-require */
const expect = require('chai').expect;
const { Exercise } = require('../models/Exercise.js');
const { getExercises } = require('../controllers/exerciseController.js');

describe('getExercises', function () {
    it('should retrieve a list of exercises', function (done) {
        const response = {
            status: function (statusCode) {
                expect(statusCode).to.eql(200);
                return this;
            },
            json: function (data) {
                expect(data).to.be.an('array');
                data.forEach((exercise) => {
                    expect(exercise).to.be.an.instanceOf(Exercise);
                });

                done(); // Call done() to indicate that the test is complete
            },
        };

        getExercises({}, response);
    });
});
