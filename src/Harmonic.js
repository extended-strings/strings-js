import Cents from './Cents';
import Math from './Math';
import { InvalidArgumentError } from './errors';

export default class Harmonic {
  constructor(halfStop, baseStop, stringFrequency) {
    if (halfStop > baseStop) {
      throw new InvalidArgumentError('The half-stop cannot be lower than the base stop.');
    }

    this.halfStop = halfStop;
    this.baseStop = baseStop;
    this.stringFrequency = stringFrequency;
  }

  get number() {
    const number = Math.round(1 / Math.gcd(1, this.halfStop / this.baseStop));
    Object.defineProperty(this, 'number', {value: number, writable: false});

    return number;
  }

  get isNatural() {
    return Math.isEqual(this.baseStop, 1);
  }

  get isOpenString() {
    return Math.isEqual(this.halfStop, 1) && Math.isEqual(this.baseStop, 1);
  }

  get frequency() {
    const frequency = Harmonic.getSoundingFrequency(this.number, this.baseStop, this.stringFrequency);
    Object.defineProperty(this, 'frequency', {value: frequency, writable: false});

    return frequency;
  }

  static getSoundingFrequency(number, stringLength, stringFrequency) {
    const centsOverString = Cents.frequenciesToCents(stringLength, 1);

    return Cents.centsToFrequency(centsOverString, stringFrequency) * number;
  }

  static getStringLengthsFromNumber(number, exclusive = false) {
    let harmonics = [];
    for (let numerator = number; numerator >= 1; numerator--) {
      if (!exclusive || numerator === 1 || Math.isEqual(Math.gcd(numerator, number), 1)) {
        harmonics.push(numerator / number);
      }
    }

    return harmonics;
  }

}
