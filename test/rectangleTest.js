var assert = require('assert');
var Rectangle = require('../src/rectangle.1')

describe('RectangleTest', () => {
  beforeEach(() => {});

  describe('#inside', () => {
    it('returns true when it\'s inside', function() {
      let rect1 = new Rectangle({x: 0, y: 0, width: 100, height: 100})
      let rect2 = new Rectangle({x: 10, y: 10, width: 10, height: 10})
      assert(rect2.inside(rect1))
    });

    it('returns false when it\'s outside entirely', function() {
      let rect1 = new Rectangle({x: 0, y: 0, width: 100, height: 100})
      let rect2 = new Rectangle({x: 101, y: 10, width: 10, height: 10})
      assert(!rect2.inside(rect1))
    });

    it('returns false when it\'s overlapping', function() {
      let rect1 = new Rectangle({x: 0, y: 0, width: 100, height: 100})
      let rect2 = new Rectangle({x: 199, y: 10, width: 10, height: 10})
      assert(!rect2.inside(rect1))
    });

    it('returns false when it\'s actually containing', function() {
      let rect1 = new Rectangle({x: 0, y: 0, width: 100, height: 100})
      let rect2 = new Rectangle({x: 10, y: 10, width: 10, height: 10})
      assert(!rect1.inside(rect2))
    });
  });

  describe('#overlapping', () => {
    it('returns true when it\'s inside', function() {
      let rect1 = new Rectangle({x: 0, y: 0, width: 100, height: 100})
      let rect2 = new Rectangle({x: 10, y: 10, width: 10, height: 10})
      assert(rect2.overlapping(rect1))
    });

    it('returns false when it\'s outside entirely', function() {
      let rect1 = new Rectangle({x: 0, y: 0, width: 100, height: 100})
      let rect2 = new Rectangle({x: 101, y: 10, width: 10, height: 10})
      assert(!rect2.overlapping(rect1))
    });

    it('returns true when it\'s overlapping', function() {
      let rect1 = new Rectangle({x: 0, y: 0, width: 100, height: 100})
      let rect2 = new Rectangle({x: 99, y: 10, width: 10, height: 10})
      assert(rect2.overlapping(rect1))
    });

    it('returns true when it\'s actually containing', function() {
      let rect1 = new Rectangle({x: 0, y: 0, width: 100, height: 100})
      let rect2 = new Rectangle({x: 10, y: 10, width: 10, height: 10})
      assert(rect1.overlapping(rect2))
    });
  });
});
