var main = require('../index');
var assert = require('assert');
describe('Regular fibonacci value', function() {
    it('should return 120 for Fact(5)', function() {
        assert.strictEqual(main.factorial(5), 120);
      });
});

describe('First two terms', function() {
  it('should return 0 and 1 for first two terms', function() {
      assert.strictEqual(main.factorial(0), 0);
      assert.strictEqual(main.factorial(1), 1);
    });
});

describe('Irregular fibonacci value', function() {
    it('should return undefined for Fact(-1)', function() {
        assert.strictEqual(main.factorial(-1), undefined);
      });
});