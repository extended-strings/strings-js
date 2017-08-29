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

Math.toNearest = function (number, nearest = 1) {
  return Math.round(number / nearest) * nearest;
};

Math.toDecimalPlaces = function (number, dp = 0) {
  if (dp === 0) {
    return Math.round(number);
  }
  const multiplier = this.pow(10, dp);

  return Math.round(number * multiplier) / multiplier;
};

export default Math;
