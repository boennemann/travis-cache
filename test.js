var test = require('tap').test

var foo = require('./')

test('foo', function (t) {
  t.ok(foo.async)
  t.ok(foo.lodash)
  t.end()
})
