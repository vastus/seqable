function truthy(x) {
  if (x === undefined || x === false) {
    return false;
  }
  return x;
}


module.exports = {
  truthy,
};
