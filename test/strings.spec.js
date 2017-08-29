/* global describe, it, before */

import chai from 'chai';
import { Note, Harmonic, Instrument, HarmonicCalculator } from '../src/index';

chai.expect();

const expect = chai.expect;

// @todo work out how to use Chai properly
describe('when I create a Note from name', () => {
  const noteName = 'D/3',
    note = Note.fromName(noteName);

  it('returns the right name when recreated from its frequency', () => {
    expect(Note.fromFrequency(note.getFrequency()).toString()).to.be.equals(noteName);
  });

  it('is correctly notated', () => {
    expect(note.toString()).to.be.equals(noteName);
  });

  it('returns the right number of cents', () => {
    expect(note.cents).to.be.equals(-1000);
  });

  it('returns the right frequency', () => {
    expect(note.getFrequency().toPrecision(5)).to.be.equals('146.83');
  });
});

describe('when I create a Note from cents', () => {
  let note = Note.fromCents(900);

  it('is correctly notated', () => {
    expect(note.toString()).to.be.equals('A/4');
  });
  it('returns the right number of cents', () => {
    expect(note.cents).to.be.equals(900);
  });
  it('returns the right frequency', () => {
    expect(note.getFrequency()).to.be.equals(440.0);
  });
});

describe('when I create a Note from frequency', () => {
  let note = Note.fromFrequency(220.0);

  it('is correctly notated', () => {
    expect(note.toString()).to.be.equals('A/3');
  });
  it('returns the right number of cents', () => {
    expect(note.cents).to.be.equals(-300);
  });
  it('returns the right frequency', () => {
    expect(note.getFrequency()).to.be.equals(220.0);
  });
});

describe('when I create a Harmonic', () => {
  let harmonic = new Harmonic(1 / 3, 1.0, 440.0);

  it('has the right frequency', () => {
    expect(harmonic.frequency).to.be.equals(1320.0);
  });
  it('has the right number', () => {
    expect(harmonic.number).to.be.equals(3);
  });
});

describe('when I create an artificial octave harmonic at 1/3, 2/3', () => {
  let harmonic = new Harmonic(1 / 3, 2 / 3, 220.0);

  it('has the right frequency', () => {
    expect(harmonic.frequency).to.be.equals(660.0);
  });
  it('has the right number', () => {
    expect(harmonic.number).to.be.equals(2);
  });
});

describe('when I create a 6th harmonic', () => {
  let harmonic = new Harmonic(1 / 6, 1, 440.0);

  it('has the right frequency', () => {
    expect(harmonic.frequency).to.be.equals(2640.0);
  });
  it('has the right number', () => {
    expect(harmonic.number).to.be.equals(6);
  });
});

describe('when I use the HarmonicCalculator', () => {
  let calc = new HarmonicCalculator();
  let soundingNote = Note.fromName('A4'),
    instrument = Instrument.fromPreset('cello'),
    result = calc.findHarmonics(soundingNote, instrument);

  it('returns the right number of harmonics', () => {
    expect(result.length).to.be.equals(8);
  });

  it('none of the returned harmonics have invalid harmonic numbers', () => {
    expect(
      result.filter((harmonic) => harmonic.number > 100).length
    ).to.be.equals(0);
  });
});
