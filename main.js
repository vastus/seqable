const { cons } = require('./lib/seq');


function main() {
  const list = cons(1, cons(2, cons(3, null)));
  console.log('list', list);
}


module.exports = main;
