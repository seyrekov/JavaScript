const assert = require('assert');
const tennis = require('./16TennisRanklist.js');

describe('tennis', function() {
  it('should return the expected output for the given input', function() {
    const input = ['5', '1400', 'F', 'SF', 'W', 'W', 'SF'];
    const expectedOutput = 'Final points: 8040\nAverage points: 1328\n40.00%';

    // Call the function and capture the output
    const output = tennis(input);

    // Compare the expected and actual output
    assert.strictEqual(output, expectedOutput);
  });
});
