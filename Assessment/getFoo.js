let { foo } = require('./bar.js');

function getFoo() {
  return [ ...foo ];
}

module.exports = getFoo;