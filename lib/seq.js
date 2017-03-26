const { truthy } = require('../util');


function cons(value, next) {
  return {
    value,
    next,
  };
}

function head(seq) {
  return truthy(seq) ? seq.value : null;
}

function tail(seq) {
  return truthy(seq) ? seq.next : null;
}

function count2(seq, len) {
  return seq ? count2(tail(seq), len + 1) : len;
}

function count(seq) {
  return count2(seq, 0);
}

function empty(seq) {
  return !truthy(seq);
}

function map(f, seq) {
  return empty(seq) ? null : cons(f(head(seq)), map(f, tail(seq)));
}


module.exports = {
  cons,
  count,
  empty,
  head,
  map,
  tail,
};
