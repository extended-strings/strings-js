export default class InstrumentString {
  constructor(stringNumber, frequency, physicalLength = 500) {
    this.number = stringNumber;
    this.frequency = frequency;
    this.physicalLength = physicalLength;
  }
}
