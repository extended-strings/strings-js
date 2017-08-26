const EPSILON = Math.pow(2, -32);

Math.isEqual = function (a, b) {
  return Math.abs(a - b) < EPSILON;
};

Math.isGreaterThan = function (a, b) {
  return a > b && a - b > EPSILON;
};

Math.gcd = function (a, b) {
  return this.isEqual(b, 0) ? a : this.gcd(b, a % b);
};

export default Math;
