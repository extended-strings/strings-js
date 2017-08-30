(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("strings", [], factory);
	else if(typeof exports === 'object')
		exports["strings"] = factory();
	else
		root["strings"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cents = function () {
  function Cents() {
    _classCallCheck(this, Cents);
  }

  _createClass(Cents, null, [{
    key: "frequenciesToCents",
    value: function frequenciesToCents(lower, upper) {
      return Math.isEqual(lower, 0) ? 0 : 1200 * (Math.log(upper / lower) / Math.log(2));
    }
  }, {
    key: "frequencyToCents",
    value: function frequencyToCents(frequency) {
      var a4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 440;

      return Cents.frequenciesToCents(a4, frequency) + 900;
    }
  }, {
    key: "centsToFrequency",
    value: function centsToFrequency(cents, base) {
      return base * Math.pow(2, cents / 1200);
    }
  }, {
    key: "centsToStringLength",
    value: function centsToStringLength(cents) {
      return 1 / Math.pow(2, cents / 1200);
    }
  }, {
    key: "frequencyToStringLength",
    value: function frequencyToStringLength(frequency, stringFrequency) {
      if (Math.isEqual(frequency, 0)) {
        throw new Error("Invalid frequency: " + frequency);
      }
      var centsOverString = this.frequenciesToCents(stringFrequency, frequency);

      return this.centsToStringLength(centsOverString);
    }
  }]);

  return Cents;
}();

exports.default = Cents;
;
module.exports = exports["default"];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Note = exports.Instrument = exports.HarmonicCalculator = exports.Harmonic = undefined;

var _Harmonic = __webpack_require__(2);

var _Harmonic2 = _interopRequireDefault(_Harmonic);

var _HarmonicCalculator = __webpack_require__(4);

var _HarmonicCalculator2 = _interopRequireDefault(_HarmonicCalculator);

var _Instrument = __webpack_require__(5);

var _Instrument2 = _interopRequireDefault(_Instrument);

var _Note = __webpack_require__(6);

var _Note2 = _interopRequireDefault(_Note);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Note2.default.ACCIDENTALS = _Note.ACCIDENTALS;

exports.Harmonic = _Harmonic2.default;
exports.HarmonicCalculator = _HarmonicCalculator2.default;
exports.Instrument = _Instrument2.default;
exports.Note = _Note2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Cents = __webpack_require__(0);

var _Cents2 = _interopRequireDefault(_Cents);

var _Math = __webpack_require__(3);

var _Math2 = _interopRequireDefault(_Math);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Harmonic = function () {
  function Harmonic(halfStop, baseStop, stringFrequency) {
    _classCallCheck(this, Harmonic);

    if (halfStop > baseStop) {
      throw new Error('The half-stop cannot be lower than the base stop.');
    }

    this.halfStop = halfStop;
    this.baseStop = baseStop;
    this.stringFrequency = stringFrequency;
  }

  _createClass(Harmonic, [{
    key: 'number',
    get: function get() {
      var number = _Math2.default.round(1 / _Math2.default.gcd(1, this.halfStop / this.baseStop));
      Object.defineProperty(this, 'number', { value: number, writable: false });

      return number;
    }
  }, {
    key: 'isNatural',
    get: function get() {
      return _Math2.default.isEqual(this.baseStop, 1);
    }
  }, {
    key: 'isOpenString',
    get: function get() {
      return _Math2.default.isEqual(this.halfStop, 1) && _Math2.default.isEqual(this.baseStop, 1);
    }
  }, {
    key: 'frequency',
    get: function get() {
      var frequency = Harmonic.getSoundingFrequency(this.number, this.baseStop, this.stringFrequency);
      Object.defineProperty(this, 'frequency', { value: frequency, writable: false });

      return frequency;
    }
  }], [{
    key: 'getSoundingFrequency',
    value: function getSoundingFrequency(number, stringLength, stringFrequency) {
      var centsOverString = _Cents2.default.frequenciesToCents(stringLength, 1);

      return _Cents2.default.centsToFrequency(centsOverString, stringFrequency) * number;
    }
  }, {
    key: 'getStringLengthsFromNumber',
    value: function getStringLengthsFromNumber(number) {
      var exclusive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var harmonics = [];
      for (var numerator = 1; numerator <= number; numerator++) {
        if (!exclusive || numerator === 1 || _Math2.default.isEqual(_Math2.default.gcd(numerator, number), 1)) {
          harmonics.push(numerator / number);
        }
      }

      return harmonics;
    }
  }, {
    key: 'getSeries',
    value: function getSeries(limit) {
      var series = [];
      var base = 0;
      for (var denominator = 1; denominator <= limit; denominator++) {
        base = series[denominator] = base + 1 / denominator;
      }

      return series;
    }
  }]);

  return Harmonic;
}();

exports.default = Harmonic;
module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var EPSILON = Math.pow(2, -32);

Math.isEqual = function (a, b) {
  return Math.abs(a - b) < EPSILON;
};

Math.isGreaterThan = function (a, b) {
  return a > b && a - b > EPSILON;
};

Math.gcd = function (a, b) {
  return this.isEqual(b, 0) ? a : this.gcd(b, a % b);
};

Math.toNearest = function (number) {
  var nearest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  return Math.round(number / nearest) * nearest;
};

Math.toDecimalPlaces = function (number) {
  var dp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if (dp === 0) {
    return Math.round(number);
  }
  var multiplier = this.pow(10, dp);

  return Math.round(number * multiplier) / multiplier;
};

exports.default = Math;
module.exports = exports["default"];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Cents = __webpack_require__(0);

var _Cents2 = _interopRequireDefault(_Cents);

var _Harmonic = __webpack_require__(2);

var _Harmonic2 = _interopRequireDefault(_Harmonic);

var _Math = __webpack_require__(3);

var _Math2 = _interopRequireDefault(_Math);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function getPhysicalDistanceBetweenStops(harmonic, instrument) {
  return (harmonic.baseStop - harmonic.halfStop) * instrument.stringLength;
}

function getBowedDistance(harmonic, instrument) {
  return harmonic.halfStop * instrument.stringLength;
}

var HarmonicCalculator = function () {
  function HarmonicCalculator() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$minStopDistance = _ref.minStopDistance,
        minStopDistance = _ref$minStopDistance === undefined ? 1 : _ref$minStopDistance,
        _ref$maxStopDistance = _ref.maxStopDistance,
        maxStopDistance = _ref$maxStopDistance === undefined ? 120 : _ref$maxStopDistance,
        _ref$minBowedDistance = _ref.minBowedDistance,
        minBowedDistance = _ref$minBowedDistance === undefined ? 20 : _ref$minBowedDistance,
        _ref$maxSoundingNoteD = _ref.maxSoundingNoteDifference,
        maxSoundingNoteDifference = _ref$maxSoundingNoteD === undefined ? 50 : _ref$maxSoundingNoteD;

    _classCallCheck(this, HarmonicCalculator);

    this.minStopDistance = minStopDistance;
    this.maxStopDistance = maxStopDistance;
    this.minBowedDistance = minBowedDistance;
    this.maxSoundingNoteDifference = maxSoundingNoteDifference;
  }

  _createClass(HarmonicCalculator, [{
    key: 'findArtificialHarmonics',
    value: function findArtificialHarmonics(soundingNote, stringFrequency) {
      var harmonics = [];
      var soundingNoteFrequency = soundingNote.getFrequency();
      for (var number = 2; number <= 6; number++) {
        var fundamental = soundingNoteFrequency / number;
        if (_Math2.default.isGreaterThan(fundamental, stringFrequency)) {
          var baseStop = _Cents2.default.frequencyToStringLength(fundamental, stringFrequency),
              halfStop = (number - 1) / number * baseStop;

          harmonics.push(new _Harmonic2.default(halfStop, baseStop, stringFrequency));
        }
      }

      return harmonics;
    }
  }, {
    key: 'findNaturalHarmonics',
    value: function findNaturalHarmonics(soundingNote, stringFrequency) {
      var harmonics = [];
      for (var number = 1; number <= 8; number++) {
        // Convert harmonic number to the sounding frequency.
        var candidateFrequency = _Harmonic2.default.getSoundingFrequency(1, 1 / number, stringFrequency);

        // Calculate the difference in cents between the natural harmonic
        // frequency and the desired sounding note.
        var difference = _Math2.default.abs(_Cents2.default.frequencyToCents(candidateFrequency) - soundingNote.cents);

        if (difference <= this.maxSoundingNoteDifference) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = _Harmonic2.default.getStringLengthsFromNumber(number, true)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var stringLength = _step.value;

              harmonics.push(new _Harmonic2.default(stringLength, 1, stringFrequency));
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }
      }

      return harmonics;
    }
  }, {
    key: 'validatePhysicalDistance',
    value: function validatePhysicalDistance(harmonic, instrument) {
      if (!harmonic.isNatural) {
        var distance = getPhysicalDistanceBetweenStops(harmonic, instrument);

        if (distance < this.minStopDistance || distance > this.maxStopDistance) {
          return false;
        }
      }

      return getBowedDistance(harmonic, instrument) >= this.minBowedDistance;
    }
  }, {
    key: 'findHarmonics',
    value: function findHarmonics(soundingNote, instrument) {
      var _this = this;

      var harmonics = [];
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = instrument.stringFrequencies[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _harmonics;

          var stringFrequency = _step2.value;

          (_harmonics = harmonics).push.apply(_harmonics, _toConsumableArray(this.findNaturalHarmonics(soundingNote, stringFrequency)).concat(_toConsumableArray(this.findArtificialHarmonics(soundingNote, stringFrequency))));
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      harmonics = harmonics.filter(function (harmonic) {
        return _this.validatePhysicalDistance(harmonic, instrument);
      });

      return harmonics;
    }
  }]);

  return HarmonicCalculator;
}();

exports.default = HarmonicCalculator;
module.exports = exports['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.presets = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var presets = exports.presets = {
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

var Instrument = function () {
  function Instrument() {
    var stringFrequencies = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var stringLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

    _classCallCheck(this, Instrument);

    this.stringFrequencies = stringFrequencies;
    this.stringLength = stringLength;
  }

  _createClass(Instrument, null, [{
    key: 'fromNames',
    value: function fromNames(stringNames) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

      var strings = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = stringNames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var name = _step.value;

          strings.push(_index.Note.fromName(name).getFrequency());
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return new this(strings, length);
    }
  }, {
    key: 'fromPreset',
    value: function fromPreset(preset) {
      if (presets[preset] === undefined) {
        throw new Error('Preset not found: ' + preset);
      }

      return this.fromNames(presets[preset].names, presets[preset].length);
    }
  }]);

  return Instrument;
}();

exports.default = Instrument;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ACCIDENTALS = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ACCIDENTAL_PATTERNS, _accidentalCents;

var _Cents = __webpack_require__(0);

var _Cents2 = _interopRequireDefault(_Cents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ACCIDENTALS = exports.ACCIDENTALS = {
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

var PATTERN_ACCIDENTAL_NATURAL = '([♮n]|nat(ural)?)';
var PATTERN_ACCIDENTAL_SHARP = '([♯s#]|sh(arp)?)';
var PATTERN_ACCIDENTAL_FLAT = '([♭fb]|fl(at)?)';
var PATTERN_ACCIDENTAL_QUARTER = '(q|quarter|¼|1/4)[ -]?';
var PATTERN_ACCIDENTAL_3_QUARTER = '((three|3)[ -]q|quarter|¾|3/4)[ -]?';

var PATTERN_NAME = /^ *[a-g]/i;
var PATTERN_OCTAVE = new RegExp('[/ ]? *(\-?[0-9]+)\\b');
var PATTERN_DIFFERENCE = new RegExp('([+-][0-9]+(\.[0-9]+)?) *[c¢]', 'iu');

var ACCIDENTAL_PATTERNS = (_ACCIDENTAL_PATTERNS = {}, _defineProperty(_ACCIDENTAL_PATTERNS, '', ACCIDENTALS.none), _defineProperty(_ACCIDENTAL_PATTERNS, PATTERN_ACCIDENTAL_NATURAL, ACCIDENTALS.natural), _defineProperty(_ACCIDENTAL_PATTERNS, PATTERN_ACCIDENTAL_FLAT, ACCIDENTALS.flat), _defineProperty(_ACCIDENTAL_PATTERNS, PATTERN_ACCIDENTAL_SHARP, ACCIDENTALS.sharp), _defineProperty(_ACCIDENTAL_PATTERNS, '(-|' + PATTERN_ACCIDENTAL_QUARTER + PATTERN_ACCIDENTAL_FLAT + ')', ACCIDENTALS.quarterFlat), _defineProperty(_ACCIDENTAL_PATTERNS, '(\\+|' + PATTERN_ACCIDENTAL_QUARTER + PATTERN_ACCIDENTAL_SHARP + ')', ACCIDENTALS.quarterSharp), _defineProperty(_ACCIDENTAL_PATTERNS, '(𝄫|bb|double[ -]' + PATTERN_ACCIDENTAL_FLAT + ')', ACCIDENTALS.doubleFlat), _defineProperty(_ACCIDENTAL_PATTERNS, '(𝄪|♯♯|##|double[ -]' + PATTERN_ACCIDENTAL_SHARP + ')', ACCIDENTALS.doubleSharp), _defineProperty(_ACCIDENTAL_PATTERNS, '(' + PATTERN_ACCIDENTAL_FLAT + '-|' + PATTERN_ACCIDENTAL_3_QUARTER + PATTERN_ACCIDENTAL_FLAT + ')', ACCIDENTALS.threeQuarterFlat), _defineProperty(_ACCIDENTAL_PATTERNS, '(' + PATTERN_ACCIDENTAL_SHARP + '\\+|' + PATTERN_ACCIDENTAL_3_QUARTER + PATTERN_ACCIDENTAL_SHARP + ')', ACCIDENTALS.threeQuarterSharp), _ACCIDENTAL_PATTERNS);

var normalizeAccidental = function normalizeAccidental(accidental) {
  accidental = accidental.trim();

  for (var pattern in ACCIDENTAL_PATTERNS) {
    var replacement = ACCIDENTAL_PATTERNS[pattern];
    if (accidental === replacement || new RegExp('^' + pattern + '$', 'iu').test(accidental)) {
      return replacement;
    }
  }

  throw new Error('Invalid accidental: ' + accidental);
};

var accidentalCents = (_accidentalCents = {}, _defineProperty(_accidentalCents, ACCIDENTALS.none, 0), _defineProperty(_accidentalCents, ACCIDENTALS.natural, 0), _defineProperty(_accidentalCents, ACCIDENTALS.flat, -100), _defineProperty(_accidentalCents, ACCIDENTALS.sharp, 100), _defineProperty(_accidentalCents, ACCIDENTALS.quarterFlat, -50), _defineProperty(_accidentalCents, ACCIDENTALS.quarterSharp, 50), _defineProperty(_accidentalCents, ACCIDENTALS.doubleFlat, -200), _defineProperty(_accidentalCents, ACCIDENTALS.doubleSharp, 200), _defineProperty(_accidentalCents, ACCIDENTALS.threeQuarterFlat, -150), _defineProperty(_accidentalCents, ACCIDENTALS.threeQuarterSharp, 150), _accidentalCents);

var nameCents = {
  'C': 0,
  'D': 200,
  'E': 400,
  'F': 500,
  'G': 700,
  'A': 900,
  'B': 1100
};

var defaultPreferredAccidentals = [ACCIDENTALS.none, ACCIDENTALS.natural, ACCIDENTALS.sharp, ACCIDENTALS.flat, ACCIDENTALS.quarterSharp, ACCIDENTALS.quarterFlat, ACCIDENTALS.doubleSharp, ACCIDENTALS.doubleFlat, ACCIDENTALS.threeQuarterSharp, ACCIDENTALS.threeQuarterFlat];

var Note = function () {
  function Note(name) {
    var accidental = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var octave = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4;
    var difference = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    _classCallCheck(this, Note);

    if (octave > 1000) {
      throw new Error('Invalid octave: ' + octave);
    }

    this.name = name;
    this.accidental = accidental;
    this.octave = octave;
    this.difference = difference;
  }

  _createClass(Note, [{
    key: 'toString',
    value: function toString() {
      var output = this.name + this.accidental + '/' + this.octave;
      if (!Math.isEqual(this.difference, 0)) {
        output += ' ' + (this.difference > 0 ? '+' : '') + this.difference + '¢';
      }

      return output;
    }
  }, {
    key: 'getFrequency',
    value: function getFrequency() {
      var a4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 440;

      return _Cents2.default.centsToFrequency(this.cents - 900, a4);
    }
  }, {
    key: 'cents',
    get: function get() {
      return nameCents[this.name] + accidentalCents[this.accidental] + (this.octave - 4) * 1200 + this.difference;
    }
  }], [{
    key: 'fromCents',
    value: function fromCents(cents) {
      var preferredAccidentals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      var rounded = Math.toNearest(cents, 50),
          difference = Math.toDecimalPlaces(cents - rounded, 2),
          octave = Math.floor(rounded / 1200) + 4,
          centsWithoutOctave = rounded - (octave - 4) * 1200,
          names = Object.keys(nameCents);

      // If the preferredAccidentals contains only a natural, also prefer flats.
      if (preferredAccidentals.length === 1 && (preferredAccidentals[0] === ACCIDENTALS.none || preferredAccidentals[0] === ACCIDENTALS.natural)) {
        preferredAccidentals.push(ACCIDENTALS.flat, ACCIDENTALS.quarterFlat);
      }

      var _arr = [].concat(_toConsumableArray(preferredAccidentals), defaultPreferredAccidentals);

      var _loop = function _loop() {
        var accidental = _arr[_i];
        var cents = centsWithoutOctave - accidentalCents[accidental],
            noteName = names.find(function (key) {
          return nameCents[key] === cents;
        });
        if (noteName !== undefined) {
          return {
            v: new Note(noteName, accidental, octave, difference)
          };
        }
      };

      for (var _i = 0; _i < _arr.length; _i++) {
        var _ret = _loop();

        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
      }

      throw new Error('Failed to find note name for cents: ' + cents);
    }
  }, {
    key: 'fromFrequency',
    value: function fromFrequency(frequency) {
      var a4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 440;
      var preferredAccidentals = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

      return Note.fromCents(_Cents2.default.frequencyToCents(frequency, a4), preferredAccidentals);
    }
  }, {
    key: 'fromName',
    value: function fromName(name) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$octave = _ref.octave,
          octave = _ref$octave === undefined ? 4 : _ref$octave,
          _ref$accidental = _ref.accidental,
          accidental = _ref$accidental === undefined ? ACCIDENTALS.none : _ref$accidental,
          _ref$difference = _ref.difference,
          difference = _ref$difference === undefined ? 0 : _ref$difference;

      var rest = name;

      // Extract the note name (A-G).
      var matches = rest.match(PATTERN_NAME);
      if (matches === null) {
        throw new Error('Invalid note name: ' + name);
      }
      var noteName = matches[0].toUpperCase();
      rest = rest.replace(PATTERN_NAME, '').trim();

      // Check for ambiguities.
      // @todo this probably can be extended
      matches = rest.match(/^([+-])[0-9]+$/);
      if (matches !== null) {
        throw new Error('Ambiguous note: ' + name + ' (is "' + matches[1] + '" an accidental?)');
      }

      // Extract the cents difference (e.g. +2c).
      matches = rest.match(PATTERN_DIFFERENCE);
      if (matches !== null) {
        difference = matches[1];
        rest = rest.replace(PATTERN_DIFFERENCE, '').trim();
      }

      // Extract the octave.
      matches = rest.match(PATTERN_OCTAVE);
      if (matches !== null) {
        octave = parseInt(matches[1], 10);
        rest = rest.replace(PATTERN_OCTAVE, '').trim();
      }

      // Normalize the octave and cents difference.
      if (difference >= 1200) {
        var diffOctave = Math.round(difference / 1200);
        octave += diffOctave;
        difference -= diffOctave * 1200;
      }

      // The rest of the string (if any) is treated as the accidental.
      accidental = rest ? normalizeAccidental(rest) : normalizeAccidental(accidental);

      return new Note(noteName, accidental, octave, Math.toDecimalPlaces(difference, 2));
    }
  }]);

  return Note;
}();

exports.default = Note;

/***/ })
/******/ ]);
});
//# sourceMappingURL=strings.js.map