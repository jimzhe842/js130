let { bar } = require('./bar');

function qux(value) {
  bar(value);
}

module.exports = qux;