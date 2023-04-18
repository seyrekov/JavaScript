const assert = require('assert');
const tennis = require('./tennis');

describe('tennis', function() {
  it('should return Final points: 11040, Average points: 1405, 42.86% for input 7, 1200, SF, F, W, F, W, SF, W', function() {
    const input = ['7', '1200', 'SF', 'F', 'W', 'F', 'W', 'SF', 'W'];
    const expectedOutput = 'Final points: 11040\nAverage points: 1405\n42.86%';
    const { stdout } = require('test-console');
    const output = stdout.inspectSync(function() {
      tennis(input);
    }).join('\n');

    assert.strictEqual(output, expectedOutput);
  });
});
