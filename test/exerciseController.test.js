/* eslint-disable node/no-unpublished-require */
const expect = require('chai').expect;
const { Exercise } = require('../models/Exercise.js');
const { getExercises } = require('../controllers/exerciseController.js');

describe('getExercises', function () {
    it('should retrieve a list of exercises', function (done) {
        const response = {
            status: function (statusCode) {
                // Assert that the status code is 200
                expect(statusCode).to.eql(200);
                return this;
            },
            json: function (data) {
                // Assert that the response data is an array
                expect(data).to.be.an('array');

                // Assert that each item in the array is an instance of Exercise
                data.forEach((exercise) => {
                    expect(exercise).to.be.an.instanceOf(Exercise);
                });

                done();
            },
        };

        getExercises({}, response);
    });
});
