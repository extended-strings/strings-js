import Cents from './Cents';

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

export default class Harmonic {
  constructor(halfStop, baseStop, stringFrequency) {
    if (halfStop > baseStop) {
      throw new Error('The half-stop cannot be lower than the base stop.');
    }

    this.halfStop = parseFloat(halfStop);
    this.baseStop = parseFloat(baseStop);
    this.stringFrequency = stringFrequency;
  }

  get number() {
    let number = Math.round(1 / gcd(1, this.halfStop / this.baseStop));
    Object.defineProperty(this, 'number', {value: number, writable: false});

    return number;
  }

  get isNatural() {
    return this.baseStop === 1.0;
  }

  get frequency() {
    return Harmonic.getSoundingFrequency(this.number, this.baseStop, this.stringFrequency);
  }

  static getSoundingFrequency(number, stringLength, stringFrequency) {
    const centsOverString = Cents.frequenciesToCents(stringLength, 1);

    return Cents.centsToFrequency(centsOverString, stringFrequency) * number;
  }

  static getStringLengthsFromNumber(number, exclusive = false) {
    let harmonics = [];
    for (let numerator = 1; numerator <= number; numerator++) {
      if (!exclusive || numerator === 1 || gcd(numerator, number) === 1) {
        harmonics.push(numerator / number);
      }
    }

    return harmonics;
  }

  static getSeries(limit) {
    let series = [];
    let base = 0;
    for (let denominator = 1; denominator <= limit; denominator++) {
      base = series[denominator] = base + 1 / denominator;
    }

    return series;
  }

}
