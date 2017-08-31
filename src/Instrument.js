import { Note } from './index';
import { InvalidArgumentError } from './errors';

export const presets = {
  'violin': {
    'names': ['E5', 'A4', 'D4', 'G3'],
    'length': 325
  },
  'viola': {
    'names': ['A4', 'D4', 'G3', 'C3'],
    'length': 410
  },
  'cello': {
    'names': ['A3', 'D3', 'G2', 'C2'],
    'length': 690
  },
  'double bass': {
    'names': ['G2', 'D2', 'A1', 'E1'],
    'length': 1140
  }
};

export default class Instrument {
  constructor(stringFrequencies = [], stringLength = 500) {
    this.stringFrequencies = stringFrequencies;
    this.stringLength = stringLength;
  }

  static fromNames(stringNames, length = 500) {
    let strings = [];
    for (const name of stringNames) {
      strings.push(Note.fromName(name).getFrequency());
    }

    return new this(strings, length);
  }

  static fromPreset(preset) {
    if (presets[preset] === undefined) {
      throw new InvalidArgumentError(`Preset not found: ${preset}`);
    }

    return this.fromNames(presets[preset].names, presets[preset].length);
  }
}
