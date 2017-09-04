import Note from './Note';
import { InvalidArgumentError } from './errors';
import InstrumentString from './InstrumentString';

export const presets = {
  'violin': {
    'names': ['E5', 'A4', 'D4', 'G3'],
    'length': 325,
    'clef': 'treble'
  },
  'viola': {
    'names': ['A4', 'D4', 'G3', 'C3'],
    'length': 410,
    'clef': 'alto'
  },
  'cello': {
    'names': ['A3', 'D3', 'G2', 'C2'],
    'length': 690,
    'clef': 'bass'
  },
  'double bass': {
    'names': ['G2', 'D2', 'A1', 'E1'],
    'length': 1140,
    'clef': 'bass'
  },
  'guitar': {
    'names': ['E4', 'B3', 'G3', 'D3', 'A2', 'E2'],
    'length': 650,
    'clef': 'bass'
  }
};

export default class Instrument {
  constructor(stringFrequencies = [], stringLength = 500, clef = 'treble') {
    const stringNames = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
    this.strings = [];
    for (const index in stringFrequencies) {
      this.strings.push(new InstrumentString(stringNames[index], stringFrequencies[index], stringLength));
    }
    this.clef = clef;
  }

  static fromNames(stringNames, length = 500, clef) {
    let strings = [];
    for (const name of stringNames) {
      strings.push(Note.fromName(name).getFrequency());
    }

    return new this(strings, length, clef);
  }

  static fromPreset(preset) {
    if (presets[preset] === undefined) {
      throw new InvalidArgumentError(`Preset not found: ${preset}`);
    }

    return this.fromNames(presets[preset].names, presets[preset].length, presets[preset].clef);
  }

  getString(number) {
    for (const string of this.strings) {
      if (string.number === number) {
        return string;
      }
    }

    throw new InvalidArgumentError(`String not found: ${number}`);
  }
}
