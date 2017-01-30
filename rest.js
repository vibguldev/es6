module.exports = (...args) => {
  var result = 0;
  args.forEach((value) => (result += value));

  return result / args.length;
};