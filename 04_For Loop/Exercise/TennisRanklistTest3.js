const assert = require('assert');
const tennis = require('./16TennisRanklist');

describe('tennis', function() {
  it('should return Final points: 11040, Average points: 1405, 42.86% for input 7, 1200, SF, F, W, F, W, SF, W', function() {
    const input = ['7', '1200', 'SF', 'F', 'W', 'F', 'W', 'SF', 'W'];
    const expectedOutput = 'Final points: 11040\nAverage points: 1405\n42.86%';

    // Call the function and capture the output
    const output = tennis(input);

    // Compare the expected and actual output
    assert.strictEqual(output, expectedOutput);
  });
});
