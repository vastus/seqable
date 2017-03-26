function cons(value, next) {
  return {
    value,
    next,
  };
}

function empty(seq) {
  return seq === null || seq === undefined;
}

function head(seq) {
  return empty(seq) ? seq : seq.value;
}

function tail(seq) {
  return empty(seq) ? seq : seq.next;
}

function count2(seq, len) {
  return seq ? count2(tail(seq), len + 1) : len;
}

function count(seq) {
  return count2(seq, 0);
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
