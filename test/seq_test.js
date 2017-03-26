/* global describe:false, it:false */
/* eslint func-names: ["off"]*/
/* eslint prefer-arrow-callback: ["off"] */

const assert = require('assert');

const { identity, keys } = require('ramda');

const { cons, count, empty, head, map, tail } = require('../lib/seq');


describe('cons', function () {
  it('returns an object w/ correct keys', function () {
    assert.deepStrictEqual(keys(cons(1, null)), ['value', 'next']);
  });

  it('returns a valid object', function () {
    assert.deepStrictEqual(cons(42, null), { value: 42, next: null });
  });
});

describe('head', function () {
  it('returns first value of given seq', function () {
    assert.deepEqual(head(cons(69, null)), 69);
  });

  it('returns null when null given', function () {
    assert.deepEqual(head(null), null);
  });
});

describe('tail', function () {
  it('returns next of first seq', function () {
    const actual = tail(cons(1, cons(42, cons(69, null))));
    const expected = { value: 42, next: { value: 69, next: null } };
    assert.deepStrictEqual(actual, expected);
  });

  it('returns null when a singleton seq given', function () {
    assert.deepEqual(tail(cons(1, null)), null);
  });

  it('returns null when null given', function () {
    assert.deepEqual(tail(null), null);
  });

  describe('count', function () {
    it('returns 0 for null seq', function () {
      assert.deepEqual(count(null), 0);
    });

    it('returns 1 for singleton seq', function () {
      assert.deepEqual(count(cons(42, null)), 1);
    });

    it('returns the correct length', function () {
      assert.deepEqual(count(cons(11, cons(22, cons(33, null)))), 3);
    });
  });

  describe('empty', function () {
    it('returns true for null', function () {
      assert.strictEqual(empty(null), true);
    });

    it('returns false for a singleton', function () {
      assert.strictEqual(empty(cons(1, null)), false);
    });

    it('returns false for seq where len is gt 1', function () {
      assert.strictEqual(empty(cons(1, cons(2, null))), false);
    });
  });

  describe('map', function () {
    it('returns a seq with same length', function () {
      const seq = cons(11, cons(22, null));
      assert.deepEqual(count(map(identity, seq)), 2);
    });

    it('returns a new seq', function () {
      const seq = cons(1, cons(2, cons(3, null)));
      assert.notStrictEqual(map(identity, seq), seq);
    });
  });
});
