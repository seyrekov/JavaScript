const assert = require('assert');
const tennis = require('./16TennisRanklist');

describe('tennis', function() {
  it('should return Final points: 6190, Average points: 1360, 50.00% for input 4, 750, SF, W, SF, W', function() {
    const input = ['4', '750', 'SF', 'W', 'SF', 'W'];
    const expectedOutput = 'Final points: 6190\nAverage points: 1360\n50.00%';

    // Capture the console output of the function
    const { stdout } = require('test-console');
    const output = stdout.inspectSync(function() {
      console.log(tennis(input));
    }).join('\n');

    // Compare the expected and actual output
    assert.strictEqual(output, expectedOutput);
  });
});

