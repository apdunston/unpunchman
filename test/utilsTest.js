var assert = require('assert');
var Utils = require('../src/utils.1')

describe('UtilsTest', () => {
  beforeEach(() => {});

  function doTest(min, max, message) {
    let foundMin = false
    let foundMax = false

    for (let x = 0; x < 1000; x++) {
      let number = Utils.random(min, max)
      console.log(number)
      if (number === min) { foundMin = true }
      if (number === max) { foundMax = true }

      assert(number >= min, message + " Number less than min: " + number + " " + min)
      assert(number <= max, message + " Number greater than max: " + number + " " + max)
    }

    assert(foundMin, message + " Did not find minimum: " + min)
    assert(foundMax, message + " Did not find maximum: " + max)
  }

  describe('#random', () => {
    it('should generate random numbers', function() {
      doTest(0, 9, "0-9")
      doTest(1, 2, "1-2")
      doTest(1000, 1003, "1000-1003")
      doTest(3, 50, "3-50")
    });
  });
});
