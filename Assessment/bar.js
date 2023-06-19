let foo = [];

function square(value) {
  return value * value;
}

function bar(value) {
  foo.push(square(value));
}

module.exports = { bar, foo };