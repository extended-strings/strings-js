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
      for (var number = 6; number >= 2; number--) {
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

          (_harmonics = harmonics).push.apply(_harmonics, _toConsumableArray(this.findArtificialHarmonics(soundingNote, stringFrequency)).concat(_toConsumableArray(this.findNaturalHarmonics(soundingNote, stringFrequency))));
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

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ACCIDENTAL_PATTERNS, _accidentalCents;

var _Cents = __webpack_require__(0);

var _Cents2 = _interopRequireDefault(_Cents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ACCIDENTAL_NATURAL = '';
var ACCIDENTAL_SHARP = '♯';
var ACCIDENTAL_FLAT = '♭';
var ACCIDENTAL_DOUBLE_SHARP = 'x';
var ACCIDENTAL_DOUBLE_FLAT = '♭♭';
var ACCIDENTAL_QUARTER_SHARP = '¼♯';
var ACCIDENTAL_QUARTER_FLAT = '¼♭';
var ACCIDENTAL_THREE_QUARTER_SHARP = '¾♯';
var ACCIDENTAL_THREE_QUARTER_FLAT = '¾♭';

var PATTERN_ACCIDENTAL_SHARP = '([♯s#]|sharp)';
var PATTERN_ACCIDENTAL_FLAT = '([♭fb]|flat)';
var PATTERN_ACCIDENTAL_QUARTER = '(quarter|¼|1/4)[ -]?';
var PATTERN_ACCIDENTAL_3_QUARTER = '((three|3)[ -]quarter|¾|3/4)[ -]?';

var ACCIDENTAL_PATTERNS = (_ACCIDENTAL_PATTERNS = {}, _defineProperty(_ACCIDENTAL_PATTERNS, '', ACCIDENTAL_NATURAL), _defineProperty(_ACCIDENTAL_PATTERNS, PATTERN_ACCIDENTAL_FLAT, ACCIDENTAL_FLAT), _defineProperty(_ACCIDENTAL_PATTERNS, PATTERN_ACCIDENTAL_SHARP, ACCIDENTAL_SHARP), _defineProperty(_ACCIDENTAL_PATTERNS, '(-|' + PATTERN_ACCIDENTAL_QUARTER + PATTERN_ACCIDENTAL_FLAT + ')', ACCIDENTAL_QUARTER_FLAT), _defineProperty(_ACCIDENTAL_PATTERNS, '(\\+|' + PATTERN_ACCIDENTAL_QUARTER + PATTERN_ACCIDENTAL_SHARP + ')', ACCIDENTAL_QUARTER_SHARP), _defineProperty(_ACCIDENTAL_PATTERNS, '(𝄫|bb|double[ -]' + PATTERN_ACCIDENTAL_FLAT + ')', ACCIDENTAL_DOUBLE_FLAT), _defineProperty(_ACCIDENTAL_PATTERNS, '(𝄪|♯♯|##|double[ -]' + PATTERN_ACCIDENTAL_SHARP + ')', ACCIDENTAL_DOUBLE_SHARP), _defineProperty(_ACCIDENTAL_PATTERNS, '(' + PATTERN_ACCIDENTAL_FLAT + '-|' + PATTERN_ACCIDENTAL_3_QUARTER + PATTERN_ACCIDENTAL_FLAT + ')', ACCIDENTAL_THREE_QUARTER_FLAT), _defineProperty(_ACCIDENTAL_PATTERNS, '(' + PATTERN_ACCIDENTAL_SHARP + '\\+|' + PATTERN_ACCIDENTAL_3_QUARTER + PATTERN_ACCIDENTAL_SHARP + ')', ACCIDENTAL_THREE_QUARTER_SHARP), _ACCIDENTAL_PATTERNS);

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

var accidentalCents = (_accidentalCents = {}, _defineProperty(_accidentalCents, ACCIDENTAL_NATURAL, 0), _defineProperty(_accidentalCents, ACCIDENTAL_FLAT, -100), _defineProperty(_accidentalCents, ACCIDENTAL_SHARP, -100), _defineProperty(_accidentalCents, ACCIDENTAL_QUARTER_FLAT, -50), _defineProperty(_accidentalCents, ACCIDENTAL_QUARTER_SHARP, 50), _defineProperty(_accidentalCents, ACCIDENTAL_DOUBLE_FLAT, -200), _defineProperty(_accidentalCents, ACCIDENTAL_DOUBLE_SHARP, 200), _defineProperty(_accidentalCents, ACCIDENTAL_THREE_QUARTER_FLAT, -150), _defineProperty(_accidentalCents, ACCIDENTAL_THREE_QUARTER_SHARP, 150), _accidentalCents);

var nameCents = {
  'C': 0,
  'D': 200,
  'E': 400,
  'F': 500,
  'G': 700,
  'A': 900,
  'B': 1100
};

var defaultPreferredAccidentals = [ACCIDENTAL_NATURAL, ACCIDENTAL_SHARP, ACCIDENTAL_FLAT, ACCIDENTAL_QUARTER_SHARP, ACCIDENTAL_QUARTER_FLAT, ACCIDENTAL_DOUBLE_SHARP, ACCIDENTAL_DOUBLE_FLAT, ACCIDENTAL_THREE_QUARTER_FLAT, ACCIDENTAL_THREE_QUARTER_SHARP];

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
      var output = this.name + this.accidental + this.octave;
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

      var rounded = Math.round(cents / 50) * 50,
          difference = Math.round((cents - rounded) * 100) / 100,
          octave = Math.floor(rounded / 1200) + 4,
          centsWithoutOctave = rounded - (octave - 4) * 1200,
          names = Object.keys(nameCents);

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
      var rest = name;
      var matches = rest.match(/^[a-g]/i);
      if (matches === null) {
        throw new Error('Invalid note name: ' + name);
      }
      var noteName = matches[0].toUpperCase();
      rest = name.substr(matches[0].length);
      if (rest.match(/^\-[0-9]+$/i)) {
        throw new Error('Ambiguous note: ' + name + ' (does "-" mean a quarter-flat or a negative?)');
      }
      matches = rest.match(new RegExp('\/? *(\-?[0-9]+)?( +([\+-][0-9]+(\.[0-9]+)?) *[c¢])?$', 'iu'));
      var octave = matches[1] !== undefined ? parseInt(matches[1], 10) : 4;
      var difference = matches[3] !== undefined ? Math.round(matches[3] * 100) / 100 : 0;
      rest = rest.substr(0, rest.length - matches[0].length);
      var accidental = normalizeAccidental(rest);

      return new Note(noteName, accidental, octave, difference);
    }
  }]);

  return Note;
}();

exports.default = Note;
module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=strings.js.map