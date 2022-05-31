const sayName = require('./a');

module.exports = function () {

  console.log('name:', sayName());

  return {
    name: sayName(),
    author: 'kingx2',
  };
};