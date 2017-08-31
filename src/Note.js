import Cents from './Cents';
import { InvalidArgumentError, RuntimeError } from './errors';

export const ACCIDENTALS = {
  none: '',
  natural: '♮',
  sharp: '♯',
  flat: '♭',
  doubleSharp: 'x',
  doubleFlat: '♭♭',
  quarterSharp: '¼♯',
  quarterFlat: '¼♭',
  threeQuarterSharp: '¾♯',
  threeQuarterFlat: '¾♭'
};

const PATTERN_NAME = new RegExp('^ *[a-g]', 'i');
const PATTERN_OCTAVE = new RegExp('[/ ]*([\-]? *[0-9]+)\\b');
const PATTERN_DIFFERENCE = new RegExp('([+-]? *[0-9]+(\.[0-9]+)?) *(c(ent)?s?|¢)', 'iu');

const PATTERN_ACCIDENTAL_SHARP = '([♯s#]|sh(arp)?)';
const PATTERN_ACCIDENTAL_FLAT = '([♭fb]|fl(at)?)';
const PATTERN_ACCIDENTAL_QUARTER = '(q|quarter|¼|1/4)[ -]?';
const PATTERN_ACCIDENTAL_3_QUARTER = '((three|3)[ -]q|quarter|¾|3/4)[ -]?';

const ACCIDENTAL_PATTERNS = {
  [ACCIDENTALS.none]: '',
  [ACCIDENTALS.natural]: '([♮n]|nat(ural)?)',
  [ACCIDENTALS.flat]: PATTERN_ACCIDENTAL_FLAT,
  [ACCIDENTALS.sharp]: PATTERN_ACCIDENTAL_SHARP,
  [ACCIDENTALS.quarterFlat]: '(d|-|' + PATTERN_ACCIDENTAL_QUARTER + PATTERN_ACCIDENTAL_FLAT + ')',
  [ACCIDENTALS.quarterSharp]: '(\\+|' + PATTERN_ACCIDENTAL_QUARTER + PATTERN_ACCIDENTAL_SHARP + ')',
  [ACCIDENTALS.doubleFlat]: '(𝄫|bb|double[ -]' + PATTERN_ACCIDENTAL_FLAT + ')',
  [ACCIDENTALS.doubleSharp]: '(𝄪|♯♯|##|double[ -]' + PATTERN_ACCIDENTAL_SHARP + ')',
  [ACCIDENTALS.threeQuarterFlat]:
    '(db|' + PATTERN_ACCIDENTAL_FLAT + '-|' + PATTERN_ACCIDENTAL_3_QUARTER + PATTERN_ACCIDENTAL_FLAT + ')',
  [ACCIDENTALS.threeQuarterSharp]:
    '(\\+\\+|' + PATTERN_ACCIDENTAL_SHARP + '\\+|' + PATTERN_ACCIDENTAL_3_QUARTER + PATTERN_ACCIDENTAL_SHARP + ')'
};

const normalizeAccidental = function (accidental) {
  accidental = accidental.trim();

  for (const replacement in ACCIDENTAL_PATTERNS) {
    if (accidental === replacement ||
      new RegExp('^' + ACCIDENTAL_PATTERNS[replacement] + '$', 'iu').test(accidental)) {
      return replacement;
    }
  }

  throw new InvalidArgumentError(`Invalid accidental: "${accidental}"`);
};

const accidentalCents = {
  [ACCIDENTALS.none]: 0,
  [ACCIDENTALS.natural]: 0,
  [ACCIDENTALS.flat]: -100,
  [ACCIDENTALS.sharp]: 100,
  [ACCIDENTALS.quarterFlat]: -50,
  [ACCIDENTALS.quarterSharp]: 50,
  [ACCIDENTALS.doubleFlat]: -200,
  [ACCIDENTALS.doubleSharp]: 200,
  [ACCIDENTALS.threeQuarterFlat]: -150,
  [ACCIDENTALS.threeQuarterSharp]: 150
};

const nameCents = {
  'C': 0,
  'D': 200,
  'E': 400,
  'F': 500,
  'G': 700,
  'A': 900,
  'B': 1100
};

const defaultPreferredAccidentals = [
  ACCIDENTALS.none,
  ACCIDENTALS.natural,
  ACCIDENTALS.sharp,
  ACCIDENTALS.flat,
  ACCIDENTALS.quarterSharp,
  ACCIDENTALS.quarterFlat,
  ACCIDENTALS.doubleSharp,
  ACCIDENTALS.doubleFlat,
  ACCIDENTALS.threeQuarterSharp,
  ACCIDENTALS.threeQuarterFlat
];

export default class Note {
  constructor(name, accidental = '', octave = 4, difference = 0) {
    if (octave > 1000) {
      throw new InvalidArgumentError(`Invalid octave: ${octave}`);
    }

    this.name = name;
    this.accidental = accidental;
    this.octave = octave;
    this.difference = difference;
  }

  static fromCents(cents, preferredAccidentals = []) {
    const rounded = Math.toNearest(cents, 50),
      difference = Math.toDecimalPlaces(cents - rounded, 2),
      octave = Math.floor(rounded / 1200) + 4,
      centsWithoutOctave = rounded - ((octave - 4) * 1200),
      names = Object.keys(nameCents);

    // If the preferredAccidentals contains only a natural, also prefer flats.
    if (preferredAccidentals.length === 1 &&
      (preferredAccidentals[0] === ACCIDENTALS.none || preferredAccidentals[0] === ACCIDENTALS.natural)) {
      preferredAccidentals.push(ACCIDENTALS.flat, ACCIDENTALS.quarterFlat);
    }

    for (const accidental of [...preferredAccidentals, ...defaultPreferredAccidentals]) {
      const cents = centsWithoutOctave - accidentalCents[accidental],
        noteName = names.find(key => nameCents[key] === cents);
      if (noteName !== undefined) {
        return new Note(noteName, accidental, octave, difference);
      }
    }

    throw new RuntimeError(`Failed to find note name for cents: ${cents}`);
  }

  static fromFrequency(frequency, a4 = 440, preferredAccidentals = []) {
    return Note.fromCents(Cents.frequencyToCents(frequency, a4), preferredAccidentals);
  }

  static fromName(name, {octave = 4, accidental = ACCIDENTALS.none, difference = 0} = {}) {
    let rest = name;

    // Extract the note name (A-G).
    let matches = rest.match(PATTERN_NAME);
    if (matches === null) {
      throw new InvalidArgumentError(`Invalid note: "${name}" (it should start with a letter, A-G)`);
    }
    const noteName = matches[0].toUpperCase();
    rest = rest.replace(PATTERN_NAME, '').trim();

    const spacesPattern = / +/;

    // Extract the cents difference (e.g. +2c).
    matches = rest.match(PATTERN_DIFFERENCE);
    if (matches !== null) {
      difference = matches[1].replace(spacesPattern, '');
      rest = rest.replace(PATTERN_DIFFERENCE, '').trim();
    }

    // Extract the octave.
    matches = rest.match(PATTERN_OCTAVE);
    if (matches !== null) {
      octave = parseInt(matches[1].replace(spacesPattern, ''), 10);
      rest = rest.replace(PATTERN_OCTAVE, '').trim();
    }

    // The rest of the string (if any) is treated as the accidental.
    accidental = rest || accidental;
    try {
      accidental = normalizeAccidental(accidental);
    } catch (e) {
      if (e instanceof InvalidArgumentError) {
        throw new InvalidArgumentError(`Invalid note: "${name}" (unrecognised: "${accidental}")`);
      }
      throw e;
    }

    // Normalize the octave and cents difference.
    if (difference >= 1200) {
      const diffOctave = Math.round(difference / 1200);
      octave += diffOctave;
      difference -= diffOctave * 1200;
    }

    return new Note(noteName, accidental, octave, Math.toDecimalPlaces(difference, 2));
  }

  toString() {
    let output = this.name + this.accidental + '/' + this.octave;
    if (!Math.isEqual(this.difference, 0)) {
      output += ' ' + (this.difference > 0 ? '+' : '') + this.difference + '¢';
    }

    return output;
  }

  get cents() {
    return nameCents[this.name] +
      accidentalCents[this.accidental] +
      ((this.octave - 4) * 1200) +
      this.difference;
  }

  getFrequency(a4 = 440) {
    return Cents.centsToFrequency(this.cents - 900, a4);
  }
}
