import { InvalidArgumentError } from './errors';

export default class Cents {
  static frequenciesToCents(lower, upper) {
    return Math.isEqual(lower, 0) ? 0 : 1200 * (Math.log(upper / lower) / Math.log(2));
  }

  static frequencyToCents(frequency, a4 = 440) {
    return Cents.frequenciesToCents(a4, frequency) + 900;
  }

  static centsToFrequency(cents, base) {
    return base * Math.pow(2, cents / 1200);
  }

  static centsToStringLength(cents) {
    return 1 / Math.pow(2, cents / 1200);
  }

  static frequencyToStringLength(frequency, stringFrequency) {
    if (Math.isEqual(frequency, 0)) {
      throw new InvalidArgumentError(`Invalid (zero) frequency: ${frequency}`);
    }
    const centsOverString = this.frequenciesToCents(stringFrequency, frequency);

    return this.centsToStringLength(centsOverString);
  }
};
