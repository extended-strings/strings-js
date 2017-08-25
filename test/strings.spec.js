/* global describe, it, before */

import chai from 'chai';
import { Note, Harmonic, Instrument, HarmonicCalculator } from '../dist/strings.js';

chai.expect();

const expect = chai.expect;

// @todo work out how to use Chai properly
describe('when I create a Note from name', () => {
  let note = Note.fromName('A5');

  it('is correctly notated', () => {
    expect(note.toString()).to.be.equals('A5');
  });
  it('returns the right number of cents', () => {
    expect(note.cents).to.be.equals(2100);
  });
  it('returns the right frequency', () => {
    expect(note.getFrequency()).to.be.equals(880.0);
  });
});

describe('when I create a Note from cents', () => {
  let note = Note.fromCents(900);

  it('is correctly notated', () => {
    expect(note.toString()).to.be.equals('A4');
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
    expect(note.toString()).to.be.equals('A3');
  });
  it('returns the right number of cents', () => {
    expect(note.cents).to.be.equals(-300);
  });
  it('returns the right frequency', () => {
    expect(note.getFrequency()).to.be.equals(220.0);
  });
});

describe('when I create a Harmonic', () => {
  let harmonic = new Harmonic(0.5, 1.0, 440.0);

  it('has the right frequency', () => {
    expect(harmonic.frequency).to.be.equals(880.0);
  });
  it('has the right number', () => {
    expect(harmonic.number).to.be.equals(2);
  });
});

describe('when I use the HarmonicCalculator', () => {
  let calc = new HarmonicCalculator();

  it('returns the right number of harmonics', () => {
    let soundingNote = Note.fromName('E5'),
      instrument = Instrument.fromPreset('violin'),
      result = calc.findHarmonics(soundingNote, instrument);
    expect(result.length).to.be.equals(3);

    instrument = Instrument.fromPreset('cello');
    result = calc.findHarmonics(soundingNote, instrument);
    expect(result.length).to.be.equals(12);
  });
});
