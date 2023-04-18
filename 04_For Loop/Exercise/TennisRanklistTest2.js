const assert = require('assert');
const tennis = require('./tennis');

describe('tennis', function() {
  it('should return Final points: 6190, Average points: 1360, 50.00% for input 4, 750, SF, W, SF, W', function() {
    const input = ['4', '750', 'SF', 'W', 'SF', 'W'];
    const expectedOutput = 'Final points: 6190\nAverage points: 1360\n50.00%';
    const { stdout } = require('test-console');
    const output = stdout.inspectSync(function() {
      tennis(input);
    }).join('\n');

    assert.strictEqual(output, expectedOutput);
  });
});

