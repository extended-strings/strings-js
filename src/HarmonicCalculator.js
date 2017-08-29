import Cents from './Cents';
import Harmonic from './Harmonic';
import Math from './Math';

function getPhysicalDistanceBetweenStops(harmonic, instrument) {
  return (harmonic.baseStop - harmonic.halfStop) * instrument.stringLength;
}

function getBowedDistance(harmonic, instrument) {
  return harmonic.halfStop * instrument.stringLength;
}

export default class HarmonicCalculator {

  constructor({
                minStopDistance = 1,
                maxStopDistance = 120,
                minBowedDistance = 20,
                maxSoundingNoteDifference = 50
  } = {}) {
    this.minStopDistance = minStopDistance;
    this.maxStopDistance = maxStopDistance;
    this.minBowedDistance = minBowedDistance;
    this.maxSoundingNoteDifference = maxSoundingNoteDifference;
  }

  findArtificialHarmonics(soundingNote, stringFrequency) {
    let harmonics = [];
    const soundingNoteFrequency = soundingNote.getFrequency();
    for (let number = 2; number <= 6; number++) {
      const fundamental = soundingNoteFrequency / number;
      if (Math.isGreaterThan(fundamental, stringFrequency)) {
        const baseStop = Cents.frequencyToStringLength(fundamental, stringFrequency),
          halfStop = (number - 1) / number * baseStop;

        harmonics.push(new Harmonic(halfStop, baseStop, stringFrequency));
      }
    }

    return harmonics;
  }

  findNaturalHarmonics(soundingNote, stringFrequency) {
    let harmonics = [];
    for (let number = 1; number <= 8; number++) {
      // Convert harmonic number to the sounding frequency.
      const candidateFrequency = Harmonic.getSoundingFrequency(1, 1 / number, stringFrequency);

      // Calculate the difference in cents between the natural harmonic
      // frequency and the desired sounding note.
      const difference = Math.abs(Cents.frequencyToCents(candidateFrequency) - soundingNote.cents);

      if (difference <= this.maxSoundingNoteDifference) {
        for (const stringLength of Harmonic.getStringLengthsFromNumber(number, true)) {
          harmonics.push(new Harmonic(stringLength, 1, stringFrequency));
        }
      }
    }

    return harmonics;
  }

  validatePhysicalDistance(harmonic, instrument) {
    if (!harmonic.isNatural) {
      const distance = getPhysicalDistanceBetweenStops(harmonic, instrument);

      if (distance < this.minStopDistance || distance > this.maxStopDistance) {
        return false;
      }
    }

    return getBowedDistance(harmonic, instrument) >= this.minBowedDistance;
  }

  findHarmonics(soundingNote, instrument) {
    let harmonics = [];
    for (const stringFrequency of instrument.stringFrequencies) {
      harmonics.push(
        ...this.findNaturalHarmonics(soundingNote, stringFrequency),
        ...this.findArtificialHarmonics(soundingNote, stringFrequency)
      );
    }

    harmonics = harmonics.filter((harmonic) => this.validatePhysicalDistance(harmonic, instrument));

    return harmonics;
  }
}
