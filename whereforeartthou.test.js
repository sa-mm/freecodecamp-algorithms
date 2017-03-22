const test = require('tape');
const whatIsInAName = require('./whereforeartthou.js');

test('handles source with one kv pair correctly', (assert) => {
  const collection = [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }];
  const source =  { last: "Capulet" };
  const actual = whatIsInAName(collection,source);
  const expected = [{ first: "Tybalt", last: "Capulet" }];
  assert.deepEqual(actual,expected);
  assert.end();
});

test('handles another source with one kv pair correctly', (assert) => {
  const collection = [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }];
  const source =  { "a": 1 };
  const actual = whatIsInAName(collection,source);
  const expected = [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }];
  assert.deepEqual(actual,expected);
  assert.end();
});

test('handles a source with two kv pairs correctly', (assert) => {
  const collection = [{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }];
  const source =  { "a": 1, "b": 2 };
  const actual = whatIsInAName(collection,source);
  const expected = [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }];
  assert.deepEqual(actual,expected);
  assert.end();
});

test('handles another source with two kv pairs correctly', (assert) => {
  const collection = [{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }];
  const source =  { "a": 1, "c": 2 };
  const actual = whatIsInAName(collection,source);
  const expected = [{ "a": 1, "b": 2, "c": 2 }];
  assert.deepEqual(actual,expected);
  assert.end();
});