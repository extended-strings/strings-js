import Cents from './Cents';

const ACCIDENTAL_NATURAL = '';
const ACCIDENTAL_SHARP = '♯';
const ACCIDENTAL_FLAT = '♭';
const ACCIDENTAL_DOUBLE_SHARP = 'x';
const ACCIDENTAL_DOUBLE_FLAT = '♭♭';
const ACCIDENTAL_QUARTER_SHARP = '¼♯';
const ACCIDENTAL_QUARTER_FLAT = '¼♭';
const ACCIDENTAL_THREE_QUARTER_SHARP = '¾♯';
const ACCIDENTAL_THREE_QUARTER_FLAT = '¾♭';

const PATTERN_ACCIDENTAL_SHARP = '([♯s#]|sharp)';
const PATTERN_ACCIDENTAL_FLAT = '([♭fb]|flat)';
const PATTERN_ACCIDENTAL_QUARTER = '(quarter|¼|1/4)[ -]?';
const PATTERN_ACCIDENTAL_3_QUARTER = '((three|3)[ -]quarter|¾|3/4)[ -]?';

const ACCIDENTAL_PATTERNS = {
  ['']: ACCIDENTAL_NATURAL,
  [PATTERN_ACCIDENTAL_FLAT]: ACCIDENTAL_FLAT,
  [PATTERN_ACCIDENTAL_SHARP]: ACCIDENTAL_SHARP,
  ['(-|' + PATTERN_ACCIDENTAL_QUARTER + PATTERN_ACCIDENTAL_FLAT + ')']: ACCIDENTAL_QUARTER_FLAT,
  ['(\\+|' + PATTERN_ACCIDENTAL_QUARTER + PATTERN_ACCIDENTAL_SHARP + ')']: ACCIDENTAL_QUARTER_SHARP,
  ['(𝄫|bb|double[ -]' + PATTERN_ACCIDENTAL_FLAT + ')']: ACCIDENTAL_DOUBLE_FLAT,
  ['(𝄪|♯♯|##|double[ -]' + PATTERN_ACCIDENTAL_SHARP + ')']: ACCIDENTAL_DOUBLE_SHARP,
  [
    '(' + PATTERN_ACCIDENTAL_FLAT + '-|' + PATTERN_ACCIDENTAL_3_QUARTER + PATTERN_ACCIDENTAL_FLAT + ')'
  ]: ACCIDENTAL_THREE_QUARTER_FLAT,
  [
    '(' + PATTERN_ACCIDENTAL_SHARP + '\\+|' + PATTERN_ACCIDENTAL_3_QUARTER + PATTERN_ACCIDENTAL_SHARP + ')'
  ]: ACCIDENTAL_THREE_QUARTER_SHARP
};

const normalizeAccidental = function (accidental) {
  accidental = accidental.trim();

  for (const pattern in ACCIDENTAL_PATTERNS) {
    const replacement = ACCIDENTAL_PATTERNS[pattern];
    if (accidental === replacement || new RegExp('^' + pattern + '$', 'iu').test(accidental)) {
      return replacement;
    }
  }

  throw new Error(`Invalid accidental: ${accidental}`);
};

const accidentalCents = {
  [ACCIDENTAL_NATURAL]: 0,
  [ACCIDENTAL_FLAT]: -100,
  [ACCIDENTAL_SHARP]: -100,
  [ACCIDENTAL_QUARTER_FLAT]: -50,
  [ACCIDENTAL_QUARTER_SHARP]: 50,
  [ACCIDENTAL_DOUBLE_FLAT]: -200,
  [ACCIDENTAL_DOUBLE_SHARP]: 200,
  [ACCIDENTAL_THREE_QUARTER_FLAT]: -150,
  [ACCIDENTAL_THREE_QUARTER_SHARP]: 150
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
  ACCIDENTAL_NATURAL,
  ACCIDENTAL_SHARP,
  ACCIDENTAL_FLAT,
  ACCIDENTAL_QUARTER_SHARP,
  ACCIDENTAL_QUARTER_FLAT,
  ACCIDENTAL_DOUBLE_SHARP,
  ACCIDENTAL_DOUBLE_FLAT,
  ACCIDENTAL_THREE_QUARTER_FLAT,
  ACCIDENTAL_THREE_QUARTER_SHARP
];

export default class Note {
  constructor(name, accidental = '', octave = 4, difference = 0) {
    if (octave > 1000) {
      throw new Error(`Invalid octave: ${octave}`);
    }

    this.name = name;
    this.accidental = accidental;
    this.octave = parseInt(octave, 10);
    this.difference = parseFloat(difference);
  }

  static fromCents(cents, preferredAccidentals = []) {
    const rounded = parseInt(Math.round(cents / 50) * 50, 10),
      difference = cents - rounded,
      octave = Math.floor(rounded / 1200) + 4,
      centsWithoutOctave = rounded - ((octave - 4) * 1200),
      names = Object.keys(nameCents);

    for (const accidental of [...preferredAccidentals, ...defaultPreferredAccidentals]) {
      const cents = centsWithoutOctave - accidentalCents[accidental],
        noteName = names.find(key => nameCents[key] === cents);
      if (noteName !== undefined) {
        return new Note(noteName, accidental, octave, difference);
      }
    }

    throw new Error(`Failed to find note name for cents: ${cents}`);
  }

  static fromFrequency(frequency, a4 = 440.0, preferredAccidentals = []) {
    return Note.fromCents(Cents.frequencyToCents(frequency, a4), preferredAccidentals);
  }

  static fromName(name) {
    let rest = name;
    let matches = rest.match(/^[a-g]/i);
    if (matches === null) {
      throw new Error(`Invalid note name: ${name}`);
    }
    const noteName = matches[0].toUpperCase();
    rest = name.substr(matches[0].length);
    if (rest.match(/^\-[0-9]+$/i)) {
      throw new Error(`Ambiguous note: ${name} (does "-" mean a quarter-flat or a negative?)`);
    }
    matches = rest.match(new RegExp('\/?(\-?[0-9]+)?( ([\+-][0-9]+)[c¢])?$', 'iu'));
    const {
      1: octave = 4,
      3: difference = 0
    } = matches;
    rest = rest.substr(0, rest.length - matches[0].length);
    const accidental = normalizeAccidental(rest);

    return new Note(noteName, accidental, octave, difference);
  }

  toString() {
    let output = this.name + this.accidental + this.octave;
    const differenceRounded = Math.round(this.difference);
    if (differenceRounded !== 0) {
      output += ' ' + (differenceRounded > 0 ? '+' : '') + Math.round(this.difference) + '¢';
    }

    return output;
  }

  get cents() {
    return nameCents[this.name] +
      accidentalCents[this.accidental] +
      ((this.octave - 4) * 1200) +
      this.difference;
  }

  getFrequency(a4 = 440.0) {
    return Cents.centsToFrequency(this.cents - 900, a4);
  }

}
