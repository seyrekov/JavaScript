const assert = require('assert');
const tennis = require('./tennis');

describe('tennis', function() {
  it('should return the expected output for the given input', function() {
    const input = ['5', '1400', 'F', 'SF', 'W', 'W', 'SF'];
    const expectedOutput = 'Final points: 8040\nAverage points: 1328\n40.00%';

    // Capture the console output of the function
    const { stdout } = require('test-console');
    const output = stdout.inspectSync(function() {
      tennis(input);
    }).join('\n');

    // Compare the expected and actual output
    assert.strictEqual(output, expectedOutput);
  });
});
