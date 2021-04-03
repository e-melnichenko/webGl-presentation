/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/add-line-numbers/index.js":
/*!************************************************!*\
  !*** ./node_modules/add-line-numbers/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var padLeft = __webpack_require__(/*! pad-left */ "./node_modules/pad-left/index.js")

module.exports = addLineNumbers
function addLineNumbers (string, start, delim) {
  start = typeof start === 'number' ? start : 1
  delim = delim || ': '

  var lines = string.split(/\r?\n/)
  var totalDigits = String(lines.length + start - 1).length
  return lines.map(function (line, i) {
    var c = i + start
    var digits = String(c).length
    var prefix = padLeft(c, totalDigits - digits)
    return prefix + delim + line
  }).join('\n')
}


/***/ }),

/***/ "./node_modules/atob-lite/atob-browser.js":
/*!************************************************!*\
  !*** ./node_modules/atob-lite/atob-browser.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function _atob(str) {
  return atob(str)
}


/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/bit-twiddle/twiddle.js":
/*!*********************************************!*\
  !*** ./node_modules/bit-twiddle/twiddle.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Bit twiddling hacks for JavaScript.
 *
 * Author: Mikola Lysenko
 *
 * Ported from Stanford bit twiddling hack library:
 *    http://graphics.stanford.edu/~seander/bithacks.html
 */

 "use restrict";

//Number of bits in an integer
var INT_BITS = 32;

//Constants
exports.INT_BITS  = INT_BITS;
exports.INT_MAX   =  0x7fffffff;
exports.INT_MIN   = -1<<(INT_BITS-1);

//Returns -1, 0, +1 depending on sign of x
exports.sign = function(v) {
  return (v > 0) - (v < 0);
}

//Computes absolute value of integer
exports.abs = function(v) {
  var mask = v >> (INT_BITS-1);
  return (v ^ mask) - mask;
}

//Computes minimum of integers x and y
exports.min = function(x, y) {
  return y ^ ((x ^ y) & -(x < y));
}

//Computes maximum of integers x and y
exports.max = function(x, y) {
  return x ^ ((x ^ y) & -(x < y));
}

//Checks if a number is a power of two
exports.isPow2 = function(v) {
  return !(v & (v-1)) && (!!v);
}

//Computes log base 2 of v
exports.log2 = function(v) {
  var r, shift;
  r =     (v > 0xFFFF) << 4; v >>>= r;
  shift = (v > 0xFF  ) << 3; v >>>= shift; r |= shift;
  shift = (v > 0xF   ) << 2; v >>>= shift; r |= shift;
  shift = (v > 0x3   ) << 1; v >>>= shift; r |= shift;
  return r | (v >> 1);
}

//Computes log base 10 of v
exports.log10 = function(v) {
  return  (v >= 1000000000) ? 9 : (v >= 100000000) ? 8 : (v >= 10000000) ? 7 :
          (v >= 1000000) ? 6 : (v >= 100000) ? 5 : (v >= 10000) ? 4 :
          (v >= 1000) ? 3 : (v >= 100) ? 2 : (v >= 10) ? 1 : 0;
}

//Counts number of bits
exports.popCount = function(v) {
  v = v - ((v >>> 1) & 0x55555555);
  v = (v & 0x33333333) + ((v >>> 2) & 0x33333333);
  return ((v + (v >>> 4) & 0xF0F0F0F) * 0x1010101) >>> 24;
}

//Counts number of trailing zeros
function countTrailingZeros(v) {
  var c = 32;
  v &= -v;
  if (v) c--;
  if (v & 0x0000FFFF) c -= 16;
  if (v & 0x00FF00FF) c -= 8;
  if (v & 0x0F0F0F0F) c -= 4;
  if (v & 0x33333333) c -= 2;
  if (v & 0x55555555) c -= 1;
  return c;
}
exports.countTrailingZeros = countTrailingZeros;

//Rounds to next power of 2
exports.nextPow2 = function(v) {
  v += v === 0;
  --v;
  v |= v >>> 1;
  v |= v >>> 2;
  v |= v >>> 4;
  v |= v >>> 8;
  v |= v >>> 16;
  return v + 1;
}

//Rounds down to previous power of 2
exports.prevPow2 = function(v) {
  v |= v >>> 1;
  v |= v >>> 2;
  v |= v >>> 4;
  v |= v >>> 8;
  v |= v >>> 16;
  return v - (v>>>1);
}

//Computes parity of word
exports.parity = function(v) {
  v ^= v >>> 16;
  v ^= v >>> 8;
  v ^= v >>> 4;
  v &= 0xf;
  return (0x6996 >>> v) & 1;
}

var REVERSE_TABLE = new Array(256);

(function(tab) {
  for(var i=0; i<256; ++i) {
    var v = i, r = i, s = 7;
    for (v >>>= 1; v; v >>>= 1) {
      r <<= 1;
      r |= v & 1;
      --s;
    }
    tab[i] = (r << s) & 0xff;
  }
})(REVERSE_TABLE);

//Reverse bits in a 32 bit word
exports.reverse = function(v) {
  return  (REVERSE_TABLE[ v         & 0xff] << 24) |
          (REVERSE_TABLE[(v >>> 8)  & 0xff] << 16) |
          (REVERSE_TABLE[(v >>> 16) & 0xff] << 8)  |
           REVERSE_TABLE[(v >>> 24) & 0xff];
}

//Interleave bits of 2 coordinates with 16 bits.  Useful for fast quadtree codes
exports.interleave2 = function(x, y) {
  x &= 0xFFFF;
  x = (x | (x << 8)) & 0x00FF00FF;
  x = (x | (x << 4)) & 0x0F0F0F0F;
  x = (x | (x << 2)) & 0x33333333;
  x = (x | (x << 1)) & 0x55555555;

  y &= 0xFFFF;
  y = (y | (y << 8)) & 0x00FF00FF;
  y = (y | (y << 4)) & 0x0F0F0F0F;
  y = (y | (y << 2)) & 0x33333333;
  y = (y | (y << 1)) & 0x55555555;

  return x | (y << 1);
}

//Extracts the nth interleaved component
exports.deinterleave2 = function(v, n) {
  v = (v >>> n) & 0x55555555;
  v = (v | (v >>> 1))  & 0x33333333;
  v = (v | (v >>> 2))  & 0x0F0F0F0F;
  v = (v | (v >>> 4))  & 0x00FF00FF;
  v = (v | (v >>> 16)) & 0x000FFFF;
  return (v << 16) >> 16;
}


//Interleave bits of 3 coordinates, each with 10 bits.  Useful for fast octree codes
exports.interleave3 = function(x, y, z) {
  x &= 0x3FF;
  x  = (x | (x<<16)) & 4278190335;
  x  = (x | (x<<8))  & 251719695;
  x  = (x | (x<<4))  & 3272356035;
  x  = (x | (x<<2))  & 1227133513;

  y &= 0x3FF;
  y  = (y | (y<<16)) & 4278190335;
  y  = (y | (y<<8))  & 251719695;
  y  = (y | (y<<4))  & 3272356035;
  y  = (y | (y<<2))  & 1227133513;
  x |= (y << 1);
  
  z &= 0x3FF;
  z  = (z | (z<<16)) & 4278190335;
  z  = (z | (z<<8))  & 251719695;
  z  = (z | (z<<4))  & 3272356035;
  z  = (z | (z<<2))  & 1227133513;
  
  return x | (z << 2);
}

//Extracts nth interleaved component of a 3-tuple
exports.deinterleave3 = function(v, n) {
  v = (v >>> n)       & 1227133513;
  v = (v | (v>>>2))   & 3272356035;
  v = (v | (v>>>4))   & 251719695;
  v = (v | (v>>>8))   & 4278190335;
  v = (v | (v>>>16))  & 0x3FF;
  return (v<<22)>>22;
}

//Computes next combination in colexicographic order (this is mistakenly called nextPermutation on the bit twiddling hacks page)
exports.nextCombination = function(v) {
  var t = v | (v - 1);
  return (t + 1) | (((~t & -~t) - 1) >>> (countTrailingZeros(v) + 1));
}



/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/cwise-compiler/compiler.js":
/*!*************************************************!*\
  !*** ./node_modules/cwise-compiler/compiler.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createThunk = __webpack_require__(/*! ./lib/thunk.js */ "./node_modules/cwise-compiler/lib/thunk.js")

function Procedure() {
  this.argTypes = []
  this.shimArgs = []
  this.arrayArgs = []
  this.arrayBlockIndices = []
  this.scalarArgs = []
  this.offsetArgs = []
  this.offsetArgIndex = []
  this.indexArgs = []
  this.shapeArgs = []
  this.funcName = ""
  this.pre = null
  this.body = null
  this.post = null
  this.debug = false
}

function compileCwise(user_args) {
  //Create procedure
  var proc = new Procedure()
  
  //Parse blocks
  proc.pre    = user_args.pre
  proc.body   = user_args.body
  proc.post   = user_args.post

  //Parse arguments
  var proc_args = user_args.args.slice(0)
  proc.argTypes = proc_args
  for(var i=0; i<proc_args.length; ++i) {
    var arg_type = proc_args[i]
    if(arg_type === "array" || (typeof arg_type === "object" && arg_type.blockIndices)) {
      proc.argTypes[i] = "array"
      proc.arrayArgs.push(i)
      proc.arrayBlockIndices.push(arg_type.blockIndices ? arg_type.blockIndices : 0)
      proc.shimArgs.push("array" + i)
      if(i < proc.pre.args.length && proc.pre.args[i].count>0) {
        throw new Error("cwise: pre() block may not reference array args")
      }
      if(i < proc.post.args.length && proc.post.args[i].count>0) {
        throw new Error("cwise: post() block may not reference array args")
      }
    } else if(arg_type === "scalar") {
      proc.scalarArgs.push(i)
      proc.shimArgs.push("scalar" + i)
    } else if(arg_type === "index") {
      proc.indexArgs.push(i)
      if(i < proc.pre.args.length && proc.pre.args[i].count > 0) {
        throw new Error("cwise: pre() block may not reference array index")
      }
      if(i < proc.body.args.length && proc.body.args[i].lvalue) {
        throw new Error("cwise: body() block may not write to array index")
      }
      if(i < proc.post.args.length && proc.post.args[i].count > 0) {
        throw new Error("cwise: post() block may not reference array index")
      }
    } else if(arg_type === "shape") {
      proc.shapeArgs.push(i)
      if(i < proc.pre.args.length && proc.pre.args[i].lvalue) {
        throw new Error("cwise: pre() block may not write to array shape")
      }
      if(i < proc.body.args.length && proc.body.args[i].lvalue) {
        throw new Error("cwise: body() block may not write to array shape")
      }
      if(i < proc.post.args.length && proc.post.args[i].lvalue) {
        throw new Error("cwise: post() block may not write to array shape")
      }
    } else if(typeof arg_type === "object" && arg_type.offset) {
      proc.argTypes[i] = "offset"
      proc.offsetArgs.push({ array: arg_type.array, offset:arg_type.offset })
      proc.offsetArgIndex.push(i)
    } else {
      throw new Error("cwise: Unknown argument type " + proc_args[i])
    }
  }
  
  //Make sure at least one array argument was specified
  if(proc.arrayArgs.length <= 0) {
    throw new Error("cwise: No array arguments specified")
  }
  
  //Make sure arguments are correct
  if(proc.pre.args.length > proc_args.length) {
    throw new Error("cwise: Too many arguments in pre() block")
  }
  if(proc.body.args.length > proc_args.length) {
    throw new Error("cwise: Too many arguments in body() block")
  }
  if(proc.post.args.length > proc_args.length) {
    throw new Error("cwise: Too many arguments in post() block")
  }

  //Check debug flag
  proc.debug = !!user_args.printCode || !!user_args.debug
  
  //Retrieve name
  proc.funcName = user_args.funcName || "cwise"
  
  //Read in block size
  proc.blockSize = user_args.blockSize || 64

  return createThunk(proc)
}

module.exports = compileCwise


/***/ }),

/***/ "./node_modules/cwise-compiler/lib/compile.js":
/*!****************************************************!*\
  !*** ./node_modules/cwise-compiler/lib/compile.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var uniq = __webpack_require__(/*! uniq */ "./node_modules/uniq/uniq.js")

// This function generates very simple loops analogous to how you typically traverse arrays (the outermost loop corresponds to the slowest changing index, the innermost loop to the fastest changing index)
// TODO: If two arrays have the same strides (and offsets) there is potential for decreasing the number of "pointers" and related variables. The drawback is that the type signature would become more specific and that there would thus be less potential for caching, but it might still be worth it, especially when dealing with large numbers of arguments.
function innerFill(order, proc, body) {
  var dimension = order.length
    , nargs = proc.arrayArgs.length
    , has_index = proc.indexArgs.length>0
    , code = []
    , vars = []
    , idx=0, pidx=0, i, j
  for(i=0; i<dimension; ++i) { // Iteration variables
    vars.push(["i",i,"=0"].join(""))
  }
  //Compute scan deltas
  for(j=0; j<nargs; ++j) {
    for(i=0; i<dimension; ++i) {
      pidx = idx
      idx = order[i]
      if(i === 0) { // The innermost/fastest dimension's delta is simply its stride
        vars.push(["d",j,"s",i,"=t",j,"p",idx].join(""))
      } else { // For other dimensions the delta is basically the stride minus something which essentially "rewinds" the previous (more inner) dimension
        vars.push(["d",j,"s",i,"=(t",j,"p",idx,"-s",pidx,"*t",j,"p",pidx,")"].join(""))
      }
    }
  }
  if (vars.length > 0) {
    code.push("var " + vars.join(","))
  }  
  //Scan loop
  for(i=dimension-1; i>=0; --i) { // Start at largest stride and work your way inwards
    idx = order[i]
    code.push(["for(i",i,"=0;i",i,"<s",idx,";++i",i,"){"].join(""))
  }
  //Push body of inner loop
  code.push(body)
  //Advance scan pointers
  for(i=0; i<dimension; ++i) {
    pidx = idx
    idx = order[i]
    for(j=0; j<nargs; ++j) {
      code.push(["p",j,"+=d",j,"s",i].join(""))
    }
    if(has_index) {
      if(i > 0) {
        code.push(["index[",pidx,"]-=s",pidx].join(""))
      }
      code.push(["++index[",idx,"]"].join(""))
    }
    code.push("}")
  }
  return code.join("\n")
}

// Generate "outer" loops that loop over blocks of data, applying "inner" loops to the blocks by manipulating the local variables in such a way that the inner loop only "sees" the current block.
// TODO: If this is used, then the previous declaration (done by generateCwiseOp) of s* is essentially unnecessary.
//       I believe the s* are not used elsewhere (in particular, I don't think they're used in the pre/post parts and "shape" is defined independently), so it would be possible to make defining the s* dependent on what loop method is being used.
function outerFill(matched, order, proc, body) {
  var dimension = order.length
    , nargs = proc.arrayArgs.length
    , blockSize = proc.blockSize
    , has_index = proc.indexArgs.length > 0
    , code = []
  for(var i=0; i<nargs; ++i) {
    code.push(["var offset",i,"=p",i].join(""))
  }
  //Generate loops for unmatched dimensions
  // The order in which these dimensions are traversed is fairly arbitrary (from small stride to large stride, for the first argument)
  // TODO: It would be nice if the order in which these loops are placed would also be somehow "optimal" (at the very least we should check that it really doesn't hurt us if they're not).
  for(var i=matched; i<dimension; ++i) {
    code.push(["for(var j"+i+"=SS[", order[i], "]|0;j", i, ">0;){"].join("")) // Iterate back to front
    code.push(["if(j",i,"<",blockSize,"){"].join("")) // Either decrease j by blockSize (s = blockSize), or set it to zero (after setting s = j).
    code.push(["s",order[i],"=j",i].join(""))
    code.push(["j",i,"=0"].join(""))
    code.push(["}else{s",order[i],"=",blockSize].join(""))
    code.push(["j",i,"-=",blockSize,"}"].join(""))
    if(has_index) {
      code.push(["index[",order[i],"]=j",i].join(""))
    }
  }
  for(var i=0; i<nargs; ++i) {
    var indexStr = ["offset"+i]
    for(var j=matched; j<dimension; ++j) {
      indexStr.push(["j",j,"*t",i,"p",order[j]].join(""))
    }
    code.push(["p",i,"=(",indexStr.join("+"),")"].join(""))
  }
  code.push(innerFill(order, proc, body))
  for(var i=matched; i<dimension; ++i) {
    code.push("}")
  }
  return code.join("\n")
}

//Count the number of compatible inner orders
// This is the length of the longest common prefix of the arrays in orders.
// Each array in orders lists the dimensions of the correspond ndarray in order of increasing stride.
// This is thus the maximum number of dimensions that can be efficiently traversed by simple nested loops for all arrays.
function countMatches(orders) {
  var matched = 0, dimension = orders[0].length
  while(matched < dimension) {
    for(var j=1; j<orders.length; ++j) {
      if(orders[j][matched] !== orders[0][matched]) {
        return matched
      }
    }
    ++matched
  }
  return matched
}

//Processes a block according to the given data types
// Replaces variable names by different ones, either "local" ones (that are then ferried in and out of the given array) or ones matching the arguments that the function performing the ultimate loop will accept.
function processBlock(block, proc, dtypes) {
  var code = block.body
  var pre = []
  var post = []
  for(var i=0; i<block.args.length; ++i) {
    var carg = block.args[i]
    if(carg.count <= 0) {
      continue
    }
    var re = new RegExp(carg.name, "g")
    var ptrStr = ""
    var arrNum = proc.arrayArgs.indexOf(i)
    switch(proc.argTypes[i]) {
      case "offset":
        var offArgIndex = proc.offsetArgIndex.indexOf(i)
        var offArg = proc.offsetArgs[offArgIndex]
        arrNum = offArg.array
        ptrStr = "+q" + offArgIndex // Adds offset to the "pointer" in the array
      case "array":
        ptrStr = "p" + arrNum + ptrStr
        var localStr = "l" + i
        var arrStr = "a" + arrNum
        if (proc.arrayBlockIndices[arrNum] === 0) { // Argument to body is just a single value from this array
          if(carg.count === 1) { // Argument/array used only once(?)
            if(dtypes[arrNum] === "generic") {
              if(carg.lvalue) {
                pre.push(["var ", localStr, "=", arrStr, ".get(", ptrStr, ")"].join("")) // Is this necessary if the argument is ONLY used as an lvalue? (keep in mind that we can have a += something, so we would actually need to check carg.rvalue)
                code = code.replace(re, localStr)
                post.push([arrStr, ".set(", ptrStr, ",", localStr,")"].join(""))
              } else {
                code = code.replace(re, [arrStr, ".get(", ptrStr, ")"].join(""))
              }
            } else {
              code = code.replace(re, [arrStr, "[", ptrStr, "]"].join(""))
            }
          } else if(dtypes[arrNum] === "generic") {
            pre.push(["var ", localStr, "=", arrStr, ".get(", ptrStr, ")"].join("")) // TODO: Could we optimize by checking for carg.rvalue?
            code = code.replace(re, localStr)
            if(carg.lvalue) {
              post.push([arrStr, ".set(", ptrStr, ",", localStr,")"].join(""))
            }
          } else {
            pre.push(["var ", localStr, "=", arrStr, "[", ptrStr, "]"].join("")) // TODO: Could we optimize by checking for carg.rvalue?
            code = code.replace(re, localStr)
            if(carg.lvalue) {
              post.push([arrStr, "[", ptrStr, "]=", localStr].join(""))
            }
          }
        } else { // Argument to body is a "block"
          var reStrArr = [carg.name], ptrStrArr = [ptrStr]
          for(var j=0; j<Math.abs(proc.arrayBlockIndices[arrNum]); j++) {
            reStrArr.push("\\s*\\[([^\\]]+)\\]")
            ptrStrArr.push("$" + (j+1) + "*t" + arrNum + "b" + j) // Matched index times stride
          }
          re = new RegExp(reStrArr.join(""), "g")
          ptrStr = ptrStrArr.join("+")
          if(dtypes[arrNum] === "generic") {
            /*if(carg.lvalue) {
              pre.push(["var ", localStr, "=", arrStr, ".get(", ptrStr, ")"].join("")) // Is this necessary if the argument is ONLY used as an lvalue? (keep in mind that we can have a += something, so we would actually need to check carg.rvalue)
              code = code.replace(re, localStr)
              post.push([arrStr, ".set(", ptrStr, ",", localStr,")"].join(""))
            } else {
              code = code.replace(re, [arrStr, ".get(", ptrStr, ")"].join(""))
            }*/
            throw new Error("cwise: Generic arrays not supported in combination with blocks!")
          } else {
            // This does not produce any local variables, even if variables are used multiple times. It would be possible to do so, but it would complicate things quite a bit.
            code = code.replace(re, [arrStr, "[", ptrStr, "]"].join(""))
          }
        }
      break
      case "scalar":
        code = code.replace(re, "Y" + proc.scalarArgs.indexOf(i))
      break
      case "index":
        code = code.replace(re, "index")
      break
      case "shape":
        code = code.replace(re, "shape")
      break
    }
  }
  return [pre.join("\n"), code, post.join("\n")].join("\n").trim()
}

function typeSummary(dtypes) {
  var summary = new Array(dtypes.length)
  var allEqual = true
  for(var i=0; i<dtypes.length; ++i) {
    var t = dtypes[i]
    var digits = t.match(/\d+/)
    if(!digits) {
      digits = ""
    } else {
      digits = digits[0]
    }
    if(t.charAt(0) === 0) {
      summary[i] = "u" + t.charAt(1) + digits
    } else {
      summary[i] = t.charAt(0) + digits
    }
    if(i > 0) {
      allEqual = allEqual && summary[i] === summary[i-1]
    }
  }
  if(allEqual) {
    return summary[0]
  }
  return summary.join("")
}

//Generates a cwise operator
function generateCWiseOp(proc, typesig) {

  //Compute dimension
  // Arrays get put first in typesig, and there are two entries per array (dtype and order), so this gets the number of dimensions in the first array arg.
  var dimension = (typesig[1].length - Math.abs(proc.arrayBlockIndices[0]))|0
  var orders = new Array(proc.arrayArgs.length)
  var dtypes = new Array(proc.arrayArgs.length)
  for(var i=0; i<proc.arrayArgs.length; ++i) {
    dtypes[i] = typesig[2*i]
    orders[i] = typesig[2*i+1]
  }
  
  //Determine where block and loop indices start and end
  var blockBegin = [], blockEnd = [] // These indices are exposed as blocks
  var loopBegin = [], loopEnd = [] // These indices are iterated over
  var loopOrders = [] // orders restricted to the loop indices
  for(var i=0; i<proc.arrayArgs.length; ++i) {
    if (proc.arrayBlockIndices[i]<0) {
      loopBegin.push(0)
      loopEnd.push(dimension)
      blockBegin.push(dimension)
      blockEnd.push(dimension+proc.arrayBlockIndices[i])
    } else {
      loopBegin.push(proc.arrayBlockIndices[i]) // Non-negative
      loopEnd.push(proc.arrayBlockIndices[i]+dimension)
      blockBegin.push(0)
      blockEnd.push(proc.arrayBlockIndices[i])
    }
    var newOrder = []
    for(var j=0; j<orders[i].length; j++) {
      if (loopBegin[i]<=orders[i][j] && orders[i][j]<loopEnd[i]) {
        newOrder.push(orders[i][j]-loopBegin[i]) // If this is a loop index, put it in newOrder, subtracting loopBegin, to make sure that all loopOrders are using a common set of indices.
      }
    }
    loopOrders.push(newOrder)
  }

  //First create arguments for procedure
  var arglist = ["SS"] // SS is the overall shape over which we iterate
  var code = ["'use strict'"]
  var vars = []
  
  for(var j=0; j<dimension; ++j) {
    vars.push(["s", j, "=SS[", j, "]"].join("")) // The limits for each dimension.
  }
  for(var i=0; i<proc.arrayArgs.length; ++i) {
    arglist.push("a"+i) // Actual data array
    arglist.push("t"+i) // Strides
    arglist.push("p"+i) // Offset in the array at which the data starts (also used for iterating over the data)
    
    for(var j=0; j<dimension; ++j) { // Unpack the strides into vars for looping
      vars.push(["t",i,"p",j,"=t",i,"[",loopBegin[i]+j,"]"].join(""))
    }
    
    for(var j=0; j<Math.abs(proc.arrayBlockIndices[i]); ++j) { // Unpack the strides into vars for block iteration
      vars.push(["t",i,"b",j,"=t",i,"[",blockBegin[i]+j,"]"].join(""))
    }
  }
  for(var i=0; i<proc.scalarArgs.length; ++i) {
    arglist.push("Y" + i)
  }
  if(proc.shapeArgs.length > 0) {
    vars.push("shape=SS.slice(0)") // Makes the shape over which we iterate available to the user defined functions (so you can use width/height for example)
  }
  if(proc.indexArgs.length > 0) {
    // Prepare an array to keep track of the (logical) indices, initialized to dimension zeroes.
    var zeros = new Array(dimension)
    for(var i=0; i<dimension; ++i) {
      zeros[i] = "0"
    }
    vars.push(["index=[", zeros.join(","), "]"].join(""))
  }
  for(var i=0; i<proc.offsetArgs.length; ++i) { // Offset arguments used for stencil operations
    var off_arg = proc.offsetArgs[i]
    var init_string = []
    for(var j=0; j<off_arg.offset.length; ++j) {
      if(off_arg.offset[j] === 0) {
        continue
      } else if(off_arg.offset[j] === 1) {
        init_string.push(["t", off_arg.array, "p", j].join(""))      
      } else {
        init_string.push([off_arg.offset[j], "*t", off_arg.array, "p", j].join(""))
      }
    }
    if(init_string.length === 0) {
      vars.push("q" + i + "=0")
    } else {
      vars.push(["q", i, "=", init_string.join("+")].join(""))
    }
  }

  //Prepare this variables
  var thisVars = uniq([].concat(proc.pre.thisVars)
                      .concat(proc.body.thisVars)
                      .concat(proc.post.thisVars))
  vars = vars.concat(thisVars)
  if (vars.length > 0) {
    code.push("var " + vars.join(","))
  }
  for(var i=0; i<proc.arrayArgs.length; ++i) {
    code.push("p"+i+"|=0")
  }
  
  //Inline prelude
  if(proc.pre.body.length > 3) {
    code.push(processBlock(proc.pre, proc, dtypes))
  }

  //Process body
  var body = processBlock(proc.body, proc, dtypes)
  var matched = countMatches(loopOrders)
  if(matched < dimension) {
    code.push(outerFill(matched, loopOrders[0], proc, body)) // TODO: Rather than passing loopOrders[0], it might be interesting to look at passing an order that represents the majority of the arguments for example.
  } else {
    code.push(innerFill(loopOrders[0], proc, body))
  }

  //Inline epilog
  if(proc.post.body.length > 3) {
    code.push(processBlock(proc.post, proc, dtypes))
  }
  
  if(proc.debug) {
    console.log("-----Generated cwise routine for ", typesig, ":\n" + code.join("\n") + "\n----------")
  }
  
  var loopName = [(proc.funcName||"unnamed"), "_cwise_loop_", orders[0].join("s"),"m",matched,typeSummary(dtypes)].join("")
  var f = new Function(["function ",loopName,"(", arglist.join(","),"){", code.join("\n"),"} return ", loopName].join(""))
  return f()
}
module.exports = generateCWiseOp


/***/ }),

/***/ "./node_modules/cwise-compiler/lib/thunk.js":
/*!**************************************************!*\
  !*** ./node_modules/cwise-compiler/lib/thunk.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// The function below is called when constructing a cwise function object, and does the following:
// A function object is constructed which accepts as argument a compilation function and returns another function.
// It is this other function that is eventually returned by createThunk, and this function is the one that actually
// checks whether a certain pattern of arguments has already been used before and compiles new loops as needed.
// The compilation passed to the first function object is used for compiling new functions.
// Once this function object is created, it is called with compile as argument, where the first argument of compile
// is bound to "proc" (essentially containing a preprocessed version of the user arguments to cwise).
// So createThunk roughly works like this:
// function createThunk(proc) {
//   var thunk = function(compileBound) {
//     var CACHED = {}
//     return function(arrays and scalars) {
//       if (dtype and order of arrays in CACHED) {
//         var func = CACHED[dtype and order of arrays]
//       } else {
//         var func = CACHED[dtype and order of arrays] = compileBound(dtype and order of arrays)
//       }
//       return func(arrays and scalars)
//     }
//   }
//   return thunk(compile.bind1(proc))
// }

var compile = __webpack_require__(/*! ./compile.js */ "./node_modules/cwise-compiler/lib/compile.js")

function createThunk(proc) {
  var code = ["'use strict'", "var CACHED={}"]
  var vars = []
  var thunkName = proc.funcName + "_cwise_thunk"
  
  //Build thunk
  code.push(["return function ", thunkName, "(", proc.shimArgs.join(","), "){"].join(""))
  var typesig = []
  var string_typesig = []
  var proc_args = [["array",proc.arrayArgs[0],".shape.slice(", // Slice shape so that we only retain the shape over which we iterate (which gets passed to the cwise operator as SS).
                    Math.max(0,proc.arrayBlockIndices[0]),proc.arrayBlockIndices[0]<0?(","+proc.arrayBlockIndices[0]+")"):")"].join("")]
  var shapeLengthConditions = [], shapeConditions = []
  // Process array arguments
  for(var i=0; i<proc.arrayArgs.length; ++i) {
    var j = proc.arrayArgs[i]
    vars.push(["t", j, "=array", j, ".dtype,",
               "r", j, "=array", j, ".order"].join(""))
    typesig.push("t" + j)
    typesig.push("r" + j)
    string_typesig.push("t"+j)
    string_typesig.push("r"+j+".join()")
    proc_args.push("array" + j + ".data")
    proc_args.push("array" + j + ".stride")
    proc_args.push("array" + j + ".offset|0")
    if (i>0) { // Gather conditions to check for shape equality (ignoring block indices)
      shapeLengthConditions.push("array" + proc.arrayArgs[0] + ".shape.length===array" + j + ".shape.length+" + (Math.abs(proc.arrayBlockIndices[0])-Math.abs(proc.arrayBlockIndices[i])))
      shapeConditions.push("array" + proc.arrayArgs[0] + ".shape[shapeIndex+" + Math.max(0,proc.arrayBlockIndices[0]) + "]===array" + j + ".shape[shapeIndex+" + Math.max(0,proc.arrayBlockIndices[i]) + "]")
    }
  }
  // Check for shape equality
  if (proc.arrayArgs.length > 1) {
    code.push("if (!(" + shapeLengthConditions.join(" && ") + ")) throw new Error('cwise: Arrays do not all have the same dimensionality!')")
    code.push("for(var shapeIndex=array" + proc.arrayArgs[0] + ".shape.length-" + Math.abs(proc.arrayBlockIndices[0]) + "; shapeIndex-->0;) {")
    code.push("if (!(" + shapeConditions.join(" && ") + ")) throw new Error('cwise: Arrays do not all have the same shape!')")
    code.push("}")
  }
  // Process scalar arguments
  for(var i=0; i<proc.scalarArgs.length; ++i) {
    proc_args.push("scalar" + proc.scalarArgs[i])
  }
  // Check for cached function (and if not present, generate it)
  vars.push(["type=[", string_typesig.join(","), "].join()"].join(""))
  vars.push("proc=CACHED[type]")
  code.push("var " + vars.join(","))
  
  code.push(["if(!proc){",
             "CACHED[type]=proc=compile([", typesig.join(","), "])}",
             "return proc(", proc_args.join(","), ")}"].join(""))

  if(proc.debug) {
    console.log("-----Generated thunk:\n" + code.join("\n") + "\n----------")
  }
  
  //Compile thunk
  var thunk = new Function("compile", code.join("\n"))
  return thunk(compile.bind(undefined, proc))
}

module.exports = createThunk


/***/ }),

/***/ "./node_modules/dup/dup.js":
/*!*********************************!*\
  !*** ./node_modules/dup/dup.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function dupe_array(count, value, i) {
  var c = count[i]|0
  if(c <= 0) {
    return []
  }
  var result = new Array(c), j
  if(i === count.length-1) {
    for(j=0; j<c; ++j) {
      result[j] = value
    }
  } else {
    for(j=0; j<c; ++j) {
      result[j] = dupe_array(count, value, i+1)
    }
  }
  return result
}

function dupe_number(count, value) {
  var result, i
  result = new Array(count)
  for(i=0; i<count; ++i) {
    result[i] = value
  }
  return result
}

function dupe(count, value) {
  if(typeof value === "undefined") {
    value = 0
  }
  switch(typeof count) {
    case "number":
      if(count > 0) {
        return dupe_number(count|0, value)
      }
    break
    case "object":
      if(typeof (count.length) === "number") {
        return dupe_array(count, value, 0)
      }
    break
  }
  return []
}

module.exports = dupe

/***/ }),

/***/ "./node_modules/gl-constants/1.0/numbers.js":
/*!**************************************************!*\
  !*** ./node_modules/gl-constants/1.0/numbers.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  0: 'NONE',
  1: 'ONE',
  2: 'LINE_LOOP',
  3: 'LINE_STRIP',
  4: 'TRIANGLES',
  5: 'TRIANGLE_STRIP',
  6: 'TRIANGLE_FAN',
  256: 'DEPTH_BUFFER_BIT',
  512: 'NEVER',
  513: 'LESS',
  514: 'EQUAL',
  515: 'LEQUAL',
  516: 'GREATER',
  517: 'NOTEQUAL',
  518: 'GEQUAL',
  519: 'ALWAYS',
  768: 'SRC_COLOR',
  769: 'ONE_MINUS_SRC_COLOR',
  770: 'SRC_ALPHA',
  771: 'ONE_MINUS_SRC_ALPHA',
  772: 'DST_ALPHA',
  773: 'ONE_MINUS_DST_ALPHA',
  774: 'DST_COLOR',
  775: 'ONE_MINUS_DST_COLOR',
  776: 'SRC_ALPHA_SATURATE',
  1024: 'STENCIL_BUFFER_BIT',
  1028: 'FRONT',
  1029: 'BACK',
  1032: 'FRONT_AND_BACK',
  1280: 'INVALID_ENUM',
  1281: 'INVALID_VALUE',
  1282: 'INVALID_OPERATION',
  1285: 'OUT_OF_MEMORY',
  1286: 'INVALID_FRAMEBUFFER_OPERATION',
  2304: 'CW',
  2305: 'CCW',
  2849: 'LINE_WIDTH',
  2884: 'CULL_FACE',
  2885: 'CULL_FACE_MODE',
  2886: 'FRONT_FACE',
  2928: 'DEPTH_RANGE',
  2929: 'DEPTH_TEST',
  2930: 'DEPTH_WRITEMASK',
  2931: 'DEPTH_CLEAR_VALUE',
  2932: 'DEPTH_FUNC',
  2960: 'STENCIL_TEST',
  2961: 'STENCIL_CLEAR_VALUE',
  2962: 'STENCIL_FUNC',
  2963: 'STENCIL_VALUE_MASK',
  2964: 'STENCIL_FAIL',
  2965: 'STENCIL_PASS_DEPTH_FAIL',
  2966: 'STENCIL_PASS_DEPTH_PASS',
  2967: 'STENCIL_REF',
  2968: 'STENCIL_WRITEMASK',
  2978: 'VIEWPORT',
  3024: 'DITHER',
  3042: 'BLEND',
  3088: 'SCISSOR_BOX',
  3089: 'SCISSOR_TEST',
  3106: 'COLOR_CLEAR_VALUE',
  3107: 'COLOR_WRITEMASK',
  3317: 'UNPACK_ALIGNMENT',
  3333: 'PACK_ALIGNMENT',
  3379: 'MAX_TEXTURE_SIZE',
  3386: 'MAX_VIEWPORT_DIMS',
  3408: 'SUBPIXEL_BITS',
  3410: 'RED_BITS',
  3411: 'GREEN_BITS',
  3412: 'BLUE_BITS',
  3413: 'ALPHA_BITS',
  3414: 'DEPTH_BITS',
  3415: 'STENCIL_BITS',
  3553: 'TEXTURE_2D',
  4352: 'DONT_CARE',
  4353: 'FASTEST',
  4354: 'NICEST',
  5120: 'BYTE',
  5121: 'UNSIGNED_BYTE',
  5122: 'SHORT',
  5123: 'UNSIGNED_SHORT',
  5124: 'INT',
  5125: 'UNSIGNED_INT',
  5126: 'FLOAT',
  5386: 'INVERT',
  5890: 'TEXTURE',
  6401: 'STENCIL_INDEX',
  6402: 'DEPTH_COMPONENT',
  6406: 'ALPHA',
  6407: 'RGB',
  6408: 'RGBA',
  6409: 'LUMINANCE',
  6410: 'LUMINANCE_ALPHA',
  7680: 'KEEP',
  7681: 'REPLACE',
  7682: 'INCR',
  7683: 'DECR',
  7936: 'VENDOR',
  7937: 'RENDERER',
  7938: 'VERSION',
  9728: 'NEAREST',
  9729: 'LINEAR',
  9984: 'NEAREST_MIPMAP_NEAREST',
  9985: 'LINEAR_MIPMAP_NEAREST',
  9986: 'NEAREST_MIPMAP_LINEAR',
  9987: 'LINEAR_MIPMAP_LINEAR',
  10240: 'TEXTURE_MAG_FILTER',
  10241: 'TEXTURE_MIN_FILTER',
  10242: 'TEXTURE_WRAP_S',
  10243: 'TEXTURE_WRAP_T',
  10497: 'REPEAT',
  10752: 'POLYGON_OFFSET_UNITS',
  16384: 'COLOR_BUFFER_BIT',
  32769: 'CONSTANT_COLOR',
  32770: 'ONE_MINUS_CONSTANT_COLOR',
  32771: 'CONSTANT_ALPHA',
  32772: 'ONE_MINUS_CONSTANT_ALPHA',
  32773: 'BLEND_COLOR',
  32774: 'FUNC_ADD',
  32777: 'BLEND_EQUATION_RGB',
  32778: 'FUNC_SUBTRACT',
  32779: 'FUNC_REVERSE_SUBTRACT',
  32819: 'UNSIGNED_SHORT_4_4_4_4',
  32820: 'UNSIGNED_SHORT_5_5_5_1',
  32823: 'POLYGON_OFFSET_FILL',
  32824: 'POLYGON_OFFSET_FACTOR',
  32854: 'RGBA4',
  32855: 'RGB5_A1',
  32873: 'TEXTURE_BINDING_2D',
  32926: 'SAMPLE_ALPHA_TO_COVERAGE',
  32928: 'SAMPLE_COVERAGE',
  32936: 'SAMPLE_BUFFERS',
  32937: 'SAMPLES',
  32938: 'SAMPLE_COVERAGE_VALUE',
  32939: 'SAMPLE_COVERAGE_INVERT',
  32968: 'BLEND_DST_RGB',
  32969: 'BLEND_SRC_RGB',
  32970: 'BLEND_DST_ALPHA',
  32971: 'BLEND_SRC_ALPHA',
  33071: 'CLAMP_TO_EDGE',
  33170: 'GENERATE_MIPMAP_HINT',
  33189: 'DEPTH_COMPONENT16',
  33306: 'DEPTH_STENCIL_ATTACHMENT',
  33635: 'UNSIGNED_SHORT_5_6_5',
  33648: 'MIRRORED_REPEAT',
  33901: 'ALIASED_POINT_SIZE_RANGE',
  33902: 'ALIASED_LINE_WIDTH_RANGE',
  33984: 'TEXTURE0',
  33985: 'TEXTURE1',
  33986: 'TEXTURE2',
  33987: 'TEXTURE3',
  33988: 'TEXTURE4',
  33989: 'TEXTURE5',
  33990: 'TEXTURE6',
  33991: 'TEXTURE7',
  33992: 'TEXTURE8',
  33993: 'TEXTURE9',
  33994: 'TEXTURE10',
  33995: 'TEXTURE11',
  33996: 'TEXTURE12',
  33997: 'TEXTURE13',
  33998: 'TEXTURE14',
  33999: 'TEXTURE15',
  34000: 'TEXTURE16',
  34001: 'TEXTURE17',
  34002: 'TEXTURE18',
  34003: 'TEXTURE19',
  34004: 'TEXTURE20',
  34005: 'TEXTURE21',
  34006: 'TEXTURE22',
  34007: 'TEXTURE23',
  34008: 'TEXTURE24',
  34009: 'TEXTURE25',
  34010: 'TEXTURE26',
  34011: 'TEXTURE27',
  34012: 'TEXTURE28',
  34013: 'TEXTURE29',
  34014: 'TEXTURE30',
  34015: 'TEXTURE31',
  34016: 'ACTIVE_TEXTURE',
  34024: 'MAX_RENDERBUFFER_SIZE',
  34041: 'DEPTH_STENCIL',
  34055: 'INCR_WRAP',
  34056: 'DECR_WRAP',
  34067: 'TEXTURE_CUBE_MAP',
  34068: 'TEXTURE_BINDING_CUBE_MAP',
  34069: 'TEXTURE_CUBE_MAP_POSITIVE_X',
  34070: 'TEXTURE_CUBE_MAP_NEGATIVE_X',
  34071: 'TEXTURE_CUBE_MAP_POSITIVE_Y',
  34072: 'TEXTURE_CUBE_MAP_NEGATIVE_Y',
  34073: 'TEXTURE_CUBE_MAP_POSITIVE_Z',
  34074: 'TEXTURE_CUBE_MAP_NEGATIVE_Z',
  34076: 'MAX_CUBE_MAP_TEXTURE_SIZE',
  34338: 'VERTEX_ATTRIB_ARRAY_ENABLED',
  34339: 'VERTEX_ATTRIB_ARRAY_SIZE',
  34340: 'VERTEX_ATTRIB_ARRAY_STRIDE',
  34341: 'VERTEX_ATTRIB_ARRAY_TYPE',
  34342: 'CURRENT_VERTEX_ATTRIB',
  34373: 'VERTEX_ATTRIB_ARRAY_POINTER',
  34466: 'NUM_COMPRESSED_TEXTURE_FORMATS',
  34467: 'COMPRESSED_TEXTURE_FORMATS',
  34660: 'BUFFER_SIZE',
  34661: 'BUFFER_USAGE',
  34816: 'STENCIL_BACK_FUNC',
  34817: 'STENCIL_BACK_FAIL',
  34818: 'STENCIL_BACK_PASS_DEPTH_FAIL',
  34819: 'STENCIL_BACK_PASS_DEPTH_PASS',
  34877: 'BLEND_EQUATION_ALPHA',
  34921: 'MAX_VERTEX_ATTRIBS',
  34922: 'VERTEX_ATTRIB_ARRAY_NORMALIZED',
  34930: 'MAX_TEXTURE_IMAGE_UNITS',
  34962: 'ARRAY_BUFFER',
  34963: 'ELEMENT_ARRAY_BUFFER',
  34964: 'ARRAY_BUFFER_BINDING',
  34965: 'ELEMENT_ARRAY_BUFFER_BINDING',
  34975: 'VERTEX_ATTRIB_ARRAY_BUFFER_BINDING',
  35040: 'STREAM_DRAW',
  35044: 'STATIC_DRAW',
  35048: 'DYNAMIC_DRAW',
  35632: 'FRAGMENT_SHADER',
  35633: 'VERTEX_SHADER',
  35660: 'MAX_VERTEX_TEXTURE_IMAGE_UNITS',
  35661: 'MAX_COMBINED_TEXTURE_IMAGE_UNITS',
  35663: 'SHADER_TYPE',
  35664: 'FLOAT_VEC2',
  35665: 'FLOAT_VEC3',
  35666: 'FLOAT_VEC4',
  35667: 'INT_VEC2',
  35668: 'INT_VEC3',
  35669: 'INT_VEC4',
  35670: 'BOOL',
  35671: 'BOOL_VEC2',
  35672: 'BOOL_VEC3',
  35673: 'BOOL_VEC4',
  35674: 'FLOAT_MAT2',
  35675: 'FLOAT_MAT3',
  35676: 'FLOAT_MAT4',
  35678: 'SAMPLER_2D',
  35680: 'SAMPLER_CUBE',
  35712: 'DELETE_STATUS',
  35713: 'COMPILE_STATUS',
  35714: 'LINK_STATUS',
  35715: 'VALIDATE_STATUS',
  35716: 'INFO_LOG_LENGTH',
  35717: 'ATTACHED_SHADERS',
  35718: 'ACTIVE_UNIFORMS',
  35719: 'ACTIVE_UNIFORM_MAX_LENGTH',
  35720: 'SHADER_SOURCE_LENGTH',
  35721: 'ACTIVE_ATTRIBUTES',
  35722: 'ACTIVE_ATTRIBUTE_MAX_LENGTH',
  35724: 'SHADING_LANGUAGE_VERSION',
  35725: 'CURRENT_PROGRAM',
  36003: 'STENCIL_BACK_REF',
  36004: 'STENCIL_BACK_VALUE_MASK',
  36005: 'STENCIL_BACK_WRITEMASK',
  36006: 'FRAMEBUFFER_BINDING',
  36007: 'RENDERBUFFER_BINDING',
  36048: 'FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE',
  36049: 'FRAMEBUFFER_ATTACHMENT_OBJECT_NAME',
  36050: 'FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL',
  36051: 'FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE',
  36053: 'FRAMEBUFFER_COMPLETE',
  36054: 'FRAMEBUFFER_INCOMPLETE_ATTACHMENT',
  36055: 'FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT',
  36057: 'FRAMEBUFFER_INCOMPLETE_DIMENSIONS',
  36061: 'FRAMEBUFFER_UNSUPPORTED',
  36064: 'COLOR_ATTACHMENT0',
  36096: 'DEPTH_ATTACHMENT',
  36128: 'STENCIL_ATTACHMENT',
  36160: 'FRAMEBUFFER',
  36161: 'RENDERBUFFER',
  36162: 'RENDERBUFFER_WIDTH',
  36163: 'RENDERBUFFER_HEIGHT',
  36164: 'RENDERBUFFER_INTERNAL_FORMAT',
  36168: 'STENCIL_INDEX8',
  36176: 'RENDERBUFFER_RED_SIZE',
  36177: 'RENDERBUFFER_GREEN_SIZE',
  36178: 'RENDERBUFFER_BLUE_SIZE',
  36179: 'RENDERBUFFER_ALPHA_SIZE',
  36180: 'RENDERBUFFER_DEPTH_SIZE',
  36181: 'RENDERBUFFER_STENCIL_SIZE',
  36194: 'RGB565',
  36336: 'LOW_FLOAT',
  36337: 'MEDIUM_FLOAT',
  36338: 'HIGH_FLOAT',
  36339: 'LOW_INT',
  36340: 'MEDIUM_INT',
  36341: 'HIGH_INT',
  36346: 'SHADER_COMPILER',
  36347: 'MAX_VERTEX_UNIFORM_VECTORS',
  36348: 'MAX_VARYING_VECTORS',
  36349: 'MAX_FRAGMENT_UNIFORM_VECTORS',
  37440: 'UNPACK_FLIP_Y_WEBGL',
  37441: 'UNPACK_PREMULTIPLY_ALPHA_WEBGL',
  37442: 'CONTEXT_LOST_WEBGL',
  37443: 'UNPACK_COLORSPACE_CONVERSION_WEBGL',
  37444: 'BROWSER_DEFAULT_WEBGL'
}


/***/ }),

/***/ "./node_modules/gl-constants/lookup.js":
/*!*********************************************!*\
  !*** ./node_modules/gl-constants/lookup.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var gl10 = __webpack_require__(/*! ./1.0/numbers */ "./node_modules/gl-constants/1.0/numbers.js")

module.exports = function lookupConstant (number) {
  return gl10[number]
}


/***/ }),

/***/ "./node_modules/gl-format-compiler-error/index.js":
/*!********************************************************!*\
  !*** ./node_modules/gl-format-compiler-error/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var sprintf = __webpack_require__(/*! sprintf-js */ "./node_modules/sprintf-js/src/sprintf.js").sprintf;
var glConstants = __webpack_require__(/*! gl-constants/lookup */ "./node_modules/gl-constants/lookup.js");
var shaderName = __webpack_require__(/*! glsl-shader-name */ "./node_modules/glsl-shader-name/index.js");
var addLineNumbers = __webpack_require__(/*! add-line-numbers */ "./node_modules/add-line-numbers/index.js");

module.exports = formatCompilerError;

function formatCompilerError(errLog, src, type) {
    "use strict";

    var name = shaderName(src) || 'of unknown name (see npm glsl-shader-name)';

    var typeName = 'unknown type';
    if (type !== undefined) {
        typeName = type === glConstants.FRAGMENT_SHADER ? 'fragment' : 'vertex'
    }

    var longForm = sprintf('Error compiling %s shader %s:\n', typeName, name);
    var shortForm = sprintf("%s%s", longForm, errLog);

    var errorStrings = errLog.split('\n');
    var errors = {};

    for (var i = 0; i < errorStrings.length; i++) {
        var errorString = errorStrings[i];
        if (errorString === '' || errorString === "\0") continue;
        var lineNo = parseInt(errorString.split(':')[2]);
        if (isNaN(lineNo)) {
            throw new Error(sprintf('Could not parse error: %s', errorString));
        }
        errors[lineNo] = errorString;
    }

    var lines = addLineNumbers(src).split('\n');

    for (var i = 0; i < lines.length; i++) {
        if (!errors[i+3] && !errors[i+2] && !errors[i+1]) continue;
        var line = lines[i];
        longForm += line + '\n';
        if (errors[i+1]) {
            var e = errors[i+1];
            e = e.substr(e.split(':', 3).join(':').length + 1).trim();
            longForm += sprintf('^^^ %s\n\n', e);
        }
    }

    return {
        long: longForm.trim(),
        short: shortForm.trim()
    };
}



/***/ }),

/***/ "./node_modules/gl-shader/index.js":
/*!*****************************************!*\
  !*** ./node_modules/gl-shader/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createUniformWrapper   = __webpack_require__(/*! ./lib/create-uniforms */ "./node_modules/gl-shader/lib/create-uniforms.js")
var createAttributeWrapper = __webpack_require__(/*! ./lib/create-attributes */ "./node_modules/gl-shader/lib/create-attributes.js")
var makeReflect            = __webpack_require__(/*! ./lib/reflect */ "./node_modules/gl-shader/lib/reflect.js")
var shaderCache            = __webpack_require__(/*! ./lib/shader-cache */ "./node_modules/gl-shader/lib/shader-cache.js")
var runtime                = __webpack_require__(/*! ./lib/runtime-reflect */ "./node_modules/gl-shader/lib/runtime-reflect.js")
var GLError                = __webpack_require__(/*! ./lib/GLError */ "./node_modules/gl-shader/lib/GLError.js")

//Shader object
function Shader(gl) {
  this.gl         = gl
  this.gl.lastAttribCount = 0  // fixme where else should we store info, safe but not nice on the gl object

  //Default initialize these to null
  this._vref      =
  this._fref      =
  this._relink    =
  this.vertShader =
  this.fragShader =
  this.program    =
  this.attributes =
  this.uniforms   =
  this.types      = null
}

var proto = Shader.prototype

proto.bind = function() {
  if(!this.program) {
    this._relink()
  }

  // ensuring that we have the right number of enabled vertex attributes
  var i
  var newAttribCount = this.gl.getProgramParameter(this.program, this.gl.ACTIVE_ATTRIBUTES) // more robust approach
  //var newAttribCount = Object.keys(this.attributes).length // avoids the probably immaterial introspection slowdown
  var oldAttribCount = this.gl.lastAttribCount
  if(newAttribCount > oldAttribCount) {
    for(i = oldAttribCount; i < newAttribCount; i++) {
      this.gl.enableVertexAttribArray(i)
    }
  } else if(oldAttribCount > newAttribCount) {
    for(i = newAttribCount; i < oldAttribCount; i++) {
      this.gl.disableVertexAttribArray(i)
    }
  }

  this.gl.lastAttribCount = newAttribCount

  this.gl.useProgram(this.program)
}

proto.dispose = function() {

  // disabling vertex attributes so new shader starts with zero
  // and it's also useful if all shaders are disposed but the
  // gl context is reused for subsequent replotting
  var oldAttribCount = this.gl.lastAttribCount
  for (var i = 0; i < oldAttribCount; i++) {
    this.gl.disableVertexAttribArray(i)
  }
  this.gl.lastAttribCount = 0

  if(this._fref) {
    this._fref.dispose()
  }
  if(this._vref) {
    this._vref.dispose()
  }
  this.attributes =
  this.types      =
  this.vertShader =
  this.fragShader =
  this.program    =
  this._relink    =
  this._fref      =
  this._vref      = null
}

function compareAttributes(a, b) {
  if(a.name < b.name) {
    return -1
  }
  return 1
}

//Update export hook for glslify-live
proto.update = function(
    vertSource
  , fragSource
  , uniforms
  , attributes) {

  //If only one object passed, assume glslify style output
  if(!fragSource || arguments.length === 1) {
    var obj = vertSource
    vertSource = obj.vertex
    fragSource = obj.fragment
    uniforms   = obj.uniforms
    attributes = obj.attributes
  }

  var wrapper = this
  var gl      = wrapper.gl

  //Compile vertex and fragment shaders
  var pvref = wrapper._vref
  wrapper._vref = shaderCache.shader(gl, gl.VERTEX_SHADER, vertSource)
  if(pvref) {
    pvref.dispose()
  }
  wrapper.vertShader = wrapper._vref.shader
  var pfref = this._fref
  wrapper._fref = shaderCache.shader(gl, gl.FRAGMENT_SHADER, fragSource)
  if(pfref) {
    pfref.dispose()
  }
  wrapper.fragShader = wrapper._fref.shader

  //If uniforms/attributes is not specified, use RT reflection
  if(!uniforms || !attributes) {

    //Create initial test program
    var testProgram = gl.createProgram()
    gl.attachShader(testProgram, wrapper.fragShader)
    gl.attachShader(testProgram, wrapper.vertShader)
    gl.linkProgram(testProgram)
    if(!gl.getProgramParameter(testProgram, gl.LINK_STATUS)) {
      var errLog = gl.getProgramInfoLog(testProgram)
      throw new GLError(errLog, 'Error linking program:' + errLog)
    }

    //Load data from runtime
    uniforms   = uniforms   || runtime.uniforms(gl, testProgram)
    attributes = attributes || runtime.attributes(gl, testProgram)

    //Release test program
    gl.deleteProgram(testProgram)
  }

  //Sort attributes lexicographically
  // overrides undefined WebGL behavior for attribute locations
  attributes = attributes.slice()
  attributes.sort(compareAttributes)

  //Convert attribute types, read out locations
  var attributeUnpacked  = []
  var attributeNames     = []
  var attributeLocations = []
  var i
  for(i=0; i<attributes.length; ++i) {
    var attr = attributes[i]
    if(attr.type.indexOf('mat') >= 0) {
      var size = attr.type.charAt(attr.type.length-1)|0
      var locVector = new Array(size)
      for(var j=0; j<size; ++j) {
        locVector[j] = attributeLocations.length
        attributeNames.push(attr.name + '[' + j + ']')
        if(typeof attr.location === 'number') {
          attributeLocations.push(attr.location + j)
        } else if(Array.isArray(attr.location) &&
                  attr.location.length === size &&
                  typeof attr.location[j] === 'number') {
          attributeLocations.push(attr.location[j]|0)
        } else {
          attributeLocations.push(-1)
        }
      }
      attributeUnpacked.push({
        name: attr.name,
        type: attr.type,
        locations: locVector
      })
    } else {
      attributeUnpacked.push({
        name: attr.name,
        type: attr.type,
        locations: [ attributeLocations.length ]
      })
      attributeNames.push(attr.name)
      if(typeof attr.location === 'number') {
        attributeLocations.push(attr.location|0)
      } else {
        attributeLocations.push(-1)
      }
    }
  }

  //For all unspecified attributes, assign them lexicographically min attribute
  var curLocation = 0
  for(i=0; i<attributeLocations.length; ++i) {
    if(attributeLocations[i] < 0) {
      while(attributeLocations.indexOf(curLocation) >= 0) {
        curLocation += 1
      }
      attributeLocations[i] = curLocation
    }
  }

  //Rebuild program and recompute all uniform locations
  var uniformLocations = new Array(uniforms.length)
  function relink() {
    wrapper.program = shaderCache.program(
        gl
      , wrapper._vref
      , wrapper._fref
      , attributeNames
      , attributeLocations)

    for(var i=0; i<uniforms.length; ++i) {
      uniformLocations[i] = gl.getUniformLocation(
          wrapper.program
        , uniforms[i].name)
    }
  }

  //Perform initial linking, reuse program used for reflection
  relink()

  //Save relinking procedure, defer until runtime
  wrapper._relink = relink

  //Generate type info
  wrapper.types = {
    uniforms:   makeReflect(uniforms),
    attributes: makeReflect(attributes)
  }

  //Generate attribute wrappers
  wrapper.attributes = createAttributeWrapper(
      gl
    , wrapper
    , attributeUnpacked
    , attributeLocations)

  //Generate uniform wrappers
  Object.defineProperty(wrapper, 'uniforms', createUniformWrapper(
      gl
    , wrapper
    , uniforms
    , uniformLocations))
}

//Compiles and links a shader program with the given attribute and vertex list
function createShader(
    gl
  , vertSource
  , fragSource
  , uniforms
  , attributes) {

  var shader = new Shader(gl)

  shader.update(
      vertSource
    , fragSource
    , uniforms
    , attributes)

  return shader
}

module.exports = createShader


/***/ }),

/***/ "./node_modules/gl-shader/lib/GLError.js":
/*!***********************************************!*\
  !*** ./node_modules/gl-shader/lib/GLError.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function GLError (rawError, shortMessage, longMessage) {
    this.shortMessage = shortMessage || ''
    this.longMessage = longMessage || ''
    this.rawError = rawError || ''
    this.message =
      'gl-shader: ' + (shortMessage || rawError || '') +
      (longMessage ? '\n'+longMessage : '')
    this.stack = (new Error()).stack
}
GLError.prototype = new Error
GLError.prototype.name = 'GLError'
GLError.prototype.constructor = GLError
module.exports = GLError


/***/ }),

/***/ "./node_modules/gl-shader/lib/create-attributes.js":
/*!*********************************************************!*\
  !*** ./node_modules/gl-shader/lib/create-attributes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = createAttributeWrapper

var GLError = __webpack_require__(/*! ./GLError */ "./node_modules/gl-shader/lib/GLError.js")

function ShaderAttribute(
    gl
  , wrapper
  , index
  , locations
  , dimension
  , constFunc) {
  this._gl        = gl
  this._wrapper   = wrapper
  this._index     = index
  this._locations = locations
  this._dimension = dimension
  this._constFunc = constFunc
}

var proto = ShaderAttribute.prototype

proto.pointer = function setAttribPointer(
    type
  , normalized
  , stride
  , offset) {

  var self      = this
  var gl        = self._gl
  var location  = self._locations[self._index]

  gl.vertexAttribPointer(
      location
    , self._dimension
    , type || gl.FLOAT
    , !!normalized
    , stride || 0
    , offset || 0)
  gl.enableVertexAttribArray(location)
}

proto.set = function(x0, x1, x2, x3) {
  return this._constFunc(this._locations[this._index], x0, x1, x2, x3)
}

Object.defineProperty(proto, 'location', {
  get: function() {
    return this._locations[this._index]
  }
  , set: function(v) {
    if(v !== this._locations[this._index]) {
      this._locations[this._index] = v|0
      this._wrapper.program = null
    }
    return v|0
  }
})

//Adds a vector attribute to obj
function addVectorAttribute(
    gl
  , wrapper
  , index
  , locations
  , dimension
  , obj
  , name) {

  //Construct constant function
  var constFuncArgs = [ 'gl', 'v' ]
  var varNames = []
  for(var i=0; i<dimension; ++i) {
    constFuncArgs.push('x'+i)
    varNames.push('x'+i)
  }
  constFuncArgs.push(
    'if(x0.length===void 0){return gl.vertexAttrib' +
    dimension + 'f(v,' +
    varNames.join() +
    ')}else{return gl.vertexAttrib' +
    dimension +
    'fv(v,x0)}')
  var constFunc = Function.apply(null, constFuncArgs)

  //Create attribute wrapper
  var attr = new ShaderAttribute(
      gl
    , wrapper
    , index
    , locations
    , dimension
    , constFunc)

  //Create accessor
  Object.defineProperty(obj, name, {
    set: function(x) {
      gl.disableVertexAttribArray(locations[index])
      constFunc(gl, locations[index], x)
      return x
    }
    , get: function() {
      return attr
    }
    , enumerable: true
  })
}

function addMatrixAttribute(
    gl
  , wrapper
  , index
  , locations
  , dimension
  , obj
  , name) {

  var parts = new Array(dimension)
  var attrs = new Array(dimension)
  for(var i=0; i<dimension; ++i) {
    addVectorAttribute(
        gl
      , wrapper
      , index[i]
      , locations
      , dimension
      , parts
      , i)
    attrs[i] = parts[i]
  }

  Object.defineProperty(parts, 'location', {
    set: function(v) {
      if(Array.isArray(v)) {
        for(var i=0; i<dimension; ++i) {
          attrs[i].location = v[i]
        }
      } else {
        for(var i=0; i<dimension; ++i) {
          attrs[i].location = v + i
        }
      }
      return v
    }
    , get: function() {
      var result = new Array(dimension)
      for(var i=0; i<dimension; ++i) {
        result[i] = locations[index[i]]
      }
      return result
    }
    , enumerable: true
  })

  parts.pointer = function(type, normalized, stride, offset) {
    type       = type || gl.FLOAT
    normalized = !!normalized
    stride     = stride || (dimension * dimension)
    offset     = offset || 0
    for(var i=0; i<dimension; ++i) {
      var location = locations[index[i]]
      gl.vertexAttribPointer(
            location
          , dimension
          , type
          , normalized
          , stride
          , offset + i * dimension)
      gl.enableVertexAttribArray(location)
    }
  }

  var scratch = new Array(dimension)
  var vertexAttrib = gl['vertexAttrib' + dimension + 'fv']

  Object.defineProperty(obj, name, {
    set: function(x) {
      for(var i=0; i<dimension; ++i) {
        var loc = locations[index[i]]
        gl.disableVertexAttribArray(loc)
        if(Array.isArray(x[0])) {
          vertexAttrib.call(gl, loc, x[i])
        } else {
          for(var j=0; j<dimension; ++j) {
            scratch[j] = x[dimension*i + j]
          }
          vertexAttrib.call(gl, loc, scratch)
        }
      }
      return x
    }
    , get: function() {
      return parts
    }
    , enumerable: true
  })
}

//Create shims for attributes
function createAttributeWrapper(
    gl
  , wrapper
  , attributes
  , locations) {

  var obj = {}
  for(var i=0, n=attributes.length; i<n; ++i) {

    var a = attributes[i]
    var name = a.name
    var type = a.type
    var locs = a.locations

    switch(type) {
      case 'bool':
      case 'int':
      case 'float':
        addVectorAttribute(
            gl
          , wrapper
          , locs[0]
          , locations
          , 1
          , obj
          , name)
      break

      default:
        if(type.indexOf('vec') >= 0) {
          var d = type.charCodeAt(type.length-1) - 48
          if(d < 2 || d > 4) {
            throw new GLError('', 'Invalid data type for attribute ' + name + ': ' + type)
          }
          addVectorAttribute(
              gl
            , wrapper
            , locs[0]
            , locations
            , d
            , obj
            , name)
        } else if(type.indexOf('mat') >= 0) {
          var d = type.charCodeAt(type.length-1) - 48
          if(d < 2 || d > 4) {
            throw new GLError('', 'Invalid data type for attribute ' + name + ': ' + type)
          }
          addMatrixAttribute(
              gl
            , wrapper
            , locs
            , locations
            , d
            , obj
            , name)
        } else {
          throw new GLError('', 'Unknown data type for attribute ' + name + ': ' + type)
        }
      break
    }
  }
  return obj
}


/***/ }),

/***/ "./node_modules/gl-shader/lib/create-uniforms.js":
/*!*******************************************************!*\
  !*** ./node_modules/gl-shader/lib/create-uniforms.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var coallesceUniforms = __webpack_require__(/*! ./reflect */ "./node_modules/gl-shader/lib/reflect.js")
var GLError = __webpack_require__(/*! ./GLError */ "./node_modules/gl-shader/lib/GLError.js")

module.exports = createUniformWrapper

//Binds a function and returns a value
function identity(x) {
  var c = new Function('y', 'return function(){return y}')
  return c(x)
}

function makeVector(length, fill) {
  var result = new Array(length)
  for(var i=0; i<length; ++i) {
    result[i] = fill
  }
  return result
}

//Create shims for uniforms
function createUniformWrapper(gl, wrapper, uniforms, locations) {

  function makeGetter(index) {
    var proc = new Function(
        'gl'
      , 'wrapper'
      , 'locations'
      , 'return function(){return gl.getUniform(wrapper.program,locations[' + index + '])}')
    return proc(gl, wrapper, locations)
  }

  function makePropSetter(path, index, type) {
    switch(type) {
      case 'bool':
      case 'int':
      case 'sampler2D':
      case 'samplerCube':
        return 'gl.uniform1i(locations[' + index + '],obj' + path + ')'
      case 'float':
        return 'gl.uniform1f(locations[' + index + '],obj' + path + ')'
      default:
        var vidx = type.indexOf('vec')
        if(0 <= vidx && vidx <= 1 && type.length === 4 + vidx) {
          var d = type.charCodeAt(type.length-1) - 48
          if(d < 2 || d > 4) {
            throw new GLError('', 'Invalid data type')
          }
          switch(type.charAt(0)) {
            case 'b':
            case 'i':
              return 'gl.uniform' + d + 'iv(locations[' + index + '],obj' + path + ')'
            case 'v':
              return 'gl.uniform' + d + 'fv(locations[' + index + '],obj' + path + ')'
            default:
              throw new GLError('', 'Unrecognized data type for vector ' + name + ': ' + type)
          }
        } else if(type.indexOf('mat') === 0 && type.length === 4) {
          var d = type.charCodeAt(type.length-1) - 48
          if(d < 2 || d > 4) {
            throw new GLError('', 'Invalid uniform dimension type for matrix ' + name + ': ' + type)
          }
          return 'gl.uniformMatrix' + d + 'fv(locations[' + index + '],false,obj' + path + ')'
        } else {
          throw new GLError('', 'Unknown uniform data type for ' + name + ': ' + type)
        }
      break
    }
  }

  function enumerateIndices(prefix, type) {
    if(typeof type !== 'object') {
      return [ [prefix, type] ]
    }
    var indices = []
    for(var id in type) {
      var prop = type[id]
      var tprefix = prefix
      if(parseInt(id) + '' === id) {
        tprefix += '[' + id + ']'
      } else {
        tprefix += '.' + id
      }
      if(typeof prop === 'object') {
        indices.push.apply(indices, enumerateIndices(tprefix, prop))
      } else {
        indices.push([tprefix, prop])
      }
    }
    return indices
  }

  function makeSetter(type) {
    var code = [ 'return function updateProperty(obj){' ]
    var indices = enumerateIndices('', type)
    for(var i=0; i<indices.length; ++i) {
      var item = indices[i]
      var path = item[0]
      var idx  = item[1]
      if(locations[idx]) {
        code.push(makePropSetter(path, idx, uniforms[idx].type))
      }
    }
    code.push('return obj}')
    var proc = new Function('gl', 'locations', code.join('\n'))
    return proc(gl, locations)
  }

  function defaultValue(type) {
    switch(type) {
      case 'bool':
        return false
      case 'int':
      case 'sampler2D':
      case 'samplerCube':
        return 0
      case 'float':
        return 0.0
      default:
        var vidx = type.indexOf('vec')
        if(0 <= vidx && vidx <= 1 && type.length === 4 + vidx) {
          var d = type.charCodeAt(type.length-1) - 48
          if(d < 2 || d > 4) {
            throw new GLError('', 'Invalid data type')
          }
          if(type.charAt(0) === 'b') {
            return makeVector(d, false)
          }
          return makeVector(d, 0)
        } else if(type.indexOf('mat') === 0 && type.length === 4) {
          var d = type.charCodeAt(type.length-1) - 48
          if(d < 2 || d > 4) {
            throw new GLError('', 'Invalid uniform dimension type for matrix ' + name + ': ' + type)
          }
          return makeVector(d*d, 0)
        } else {
          throw new GLError('', 'Unknown uniform data type for ' + name + ': ' + type)
        }
      break
    }
  }

  function storeProperty(obj, prop, type) {
    if(typeof type === 'object') {
      var child = processObject(type)
      Object.defineProperty(obj, prop, {
        get: identity(child),
        set: makeSetter(type),
        enumerable: true,
        configurable: false
      })
    } else {
      if(locations[type]) {
        Object.defineProperty(obj, prop, {
          get: makeGetter(type),
          set: makeSetter(type),
          enumerable: true,
          configurable: false
        })
      } else {
        obj[prop] = defaultValue(uniforms[type].type)
      }
    }
  }

  function processObject(obj) {
    var result
    if(Array.isArray(obj)) {
      result = new Array(obj.length)
      for(var i=0; i<obj.length; ++i) {
        storeProperty(result, i, obj[i])
      }
    } else {
      result = {}
      for(var id in obj) {
        storeProperty(result, id, obj[id])
      }
    }
    return result
  }

  //Return data
  var coallesced = coallesceUniforms(uniforms, true)
  return {
    get: identity(processObject(coallesced)),
    set: makeSetter(coallesced),
    enumerable: true,
    configurable: true
  }
}


/***/ }),

/***/ "./node_modules/gl-shader/lib/reflect.js":
/*!***********************************************!*\
  !*** ./node_modules/gl-shader/lib/reflect.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = makeReflectTypes

//Construct type info for reflection.
//
// This iterates over the flattened list of uniform type values and smashes them into a JSON object.
//
// The leaves of the resulting object are either indices or type strings representing primitive glslify types
function makeReflectTypes(uniforms, useIndex) {
  var obj = {}
  for(var i=0; i<uniforms.length; ++i) {
    var n = uniforms[i].name
    var parts = n.split(".")
    var o = obj
    for(var j=0; j<parts.length; ++j) {
      var x = parts[j].split("[")
      if(x.length > 1) {
        if(!(x[0] in o)) {
          o[x[0]] = []
        }
        o = o[x[0]]
        for(var k=1; k<x.length; ++k) {
          var y = parseInt(x[k])
          if(k<x.length-1 || j<parts.length-1) {
            if(!(y in o)) {
              if(k < x.length-1) {
                o[y] = []
              } else {
                o[y] = {}
              }
            }
            o = o[y]
          } else {
            if(useIndex) {
              o[y] = i
            } else {
              o[y] = uniforms[i].type
            }
          }
        }
      } else if(j < parts.length-1) {
        if(!(x[0] in o)) {
          o[x[0]] = {}
        }
        o = o[x[0]]
      } else {
        if(useIndex) {
          o[x[0]] = i
        } else {
          o[x[0]] = uniforms[i].type
        }
      }
    }
  }
  return obj
}

/***/ }),

/***/ "./node_modules/gl-shader/lib/runtime-reflect.js":
/*!*******************************************************!*\
  !*** ./node_modules/gl-shader/lib/runtime-reflect.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.uniforms    = runtimeUniforms
exports.attributes  = runtimeAttributes

var GL_TO_GLSL_TYPES = {
  'FLOAT':       'float',
  'FLOAT_VEC2':  'vec2',
  'FLOAT_VEC3':  'vec3',
  'FLOAT_VEC4':  'vec4',
  'INT':         'int',
  'INT_VEC2':    'ivec2',
  'INT_VEC3':    'ivec3',
  'INT_VEC4':    'ivec4',
  'BOOL':        'bool',
  'BOOL_VEC2':   'bvec2',
  'BOOL_VEC3':   'bvec3',
  'BOOL_VEC4':   'bvec4',
  'FLOAT_MAT2':  'mat2',
  'FLOAT_MAT3':  'mat3',
  'FLOAT_MAT4':  'mat4',
  'SAMPLER_2D':  'sampler2D',
  'SAMPLER_CUBE':'samplerCube'
}

var GL_TABLE = null

function getType(gl, type) {
  if(!GL_TABLE) {
    var typeNames = Object.keys(GL_TO_GLSL_TYPES)
    GL_TABLE = {}
    for(var i=0; i<typeNames.length; ++i) {
      var tn = typeNames[i]
      GL_TABLE[gl[tn]] = GL_TO_GLSL_TYPES[tn]
    }
  }
  return GL_TABLE[type]
}

function runtimeUniforms(gl, program) {
  var numUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS)
  var result = []
  for(var i=0; i<numUniforms; ++i) {
    var info = gl.getActiveUniform(program, i)
    if(info) {
      var type = getType(gl, info.type)
      if(info.size > 1) {
        for(var j=0; j<info.size; ++j) {
          result.push({
            name: info.name.replace('[0]', '[' + j + ']'),
            type: type
          })
        }
      } else {
        result.push({
          name: info.name,
          type: type
        })
      }
    }
  }
  return result
}

function runtimeAttributes(gl, program) {
  var numAttributes = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES)
  var result = []
  for(var i=0; i<numAttributes; ++i) {
    var info = gl.getActiveAttrib(program, i)
    if(info) {
      result.push({
        name: info.name,
        type: getType(gl, info.type)
      })
    }
  }
  return result
}


/***/ }),

/***/ "./node_modules/gl-shader/lib/shader-cache.js":
/*!****************************************************!*\
  !*** ./node_modules/gl-shader/lib/shader-cache.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.shader   = getShaderReference
exports.program  = createProgram

var GLError = __webpack_require__(/*! ./GLError */ "./node_modules/gl-shader/lib/GLError.js")
var formatCompilerError = __webpack_require__(/*! gl-format-compiler-error */ "./node_modules/gl-format-compiler-error/index.js");

var weakMap = typeof WeakMap === 'undefined' ? __webpack_require__(/*! weakmap-shim */ "./node_modules/weakmap-shim/index.js") : WeakMap
var CACHE = new weakMap()

var SHADER_COUNTER = 0

function ShaderReference(id, src, type, shader, programs, count, cache) {
  this.id       = id
  this.src      = src
  this.type     = type
  this.shader   = shader
  this.count    = count
  this.programs = []
  this.cache    = cache
}

ShaderReference.prototype.dispose = function() {
  if(--this.count === 0) {
    var cache    = this.cache
    var gl       = cache.gl

    //Remove program references
    var programs = this.programs
    for(var i=0, n=programs.length; i<n; ++i) {
      var p = cache.programs[programs[i]]
      if(p) {
        delete cache.programs[i]
        gl.deleteProgram(p)
      }
    }

    //Remove shader reference
    gl.deleteShader(this.shader)
    delete cache.shaders[(this.type === gl.FRAGMENT_SHADER)|0][this.src]
  }
}

function ContextCache(gl) {
  this.gl       = gl
  this.shaders  = [{}, {}]
  this.programs = {}
}

var proto = ContextCache.prototype

function compileShader(gl, type, src) {
  var shader = gl.createShader(type)
  gl.shaderSource(shader, src)
  gl.compileShader(shader)
  if(!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    var errLog = gl.getShaderInfoLog(shader)
    try {
        var fmt = formatCompilerError(errLog, src, type);
    } catch (e){
        console.warn('Failed to format compiler error: ' + e);
        throw new GLError(errLog, 'Error compiling shader:\n' + errLog)
    }
    throw new GLError(errLog, fmt.short, fmt.long)
  }
  return shader
}

proto.getShaderReference = function(type, src) {
  var gl      = this.gl
  var shaders = this.shaders[(type === gl.FRAGMENT_SHADER)|0]
  var shader  = shaders[src]
  if(!shader || !gl.isShader(shader.shader)) {
    var shaderObj = compileShader(gl, type, src)
    shader = shaders[src] = new ShaderReference(
      SHADER_COUNTER++,
      src,
      type,
      shaderObj,
      [],
      1,
      this)
  } else {
    shader.count += 1
  }
  return shader
}

function linkProgram(gl, vshader, fshader, attribs, locations) {
  var program = gl.createProgram()
  gl.attachShader(program, vshader)
  gl.attachShader(program, fshader)
  for(var i=0; i<attribs.length; ++i) {
    gl.bindAttribLocation(program, locations[i], attribs[i])
  }
  gl.linkProgram(program)
  if(!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    var errLog = gl.getProgramInfoLog(program)
    throw new GLError(errLog, 'Error linking program: ' + errLog)
  }
  return program
}

proto.getProgram = function(vref, fref, attribs, locations) {
  var token = [vref.id, fref.id, attribs.join(':'), locations.join(':')].join('@')
  var prog  = this.programs[token]
  if(!prog || !this.gl.isProgram(prog)) {
    this.programs[token] = prog = linkProgram(
      this.gl,
      vref.shader,
      fref.shader,
      attribs,
      locations)
    vref.programs.push(token)
    fref.programs.push(token)
  }
  return prog
}

function getCache(gl) {
  var ctxCache = CACHE.get(gl)
  if(!ctxCache) {
    ctxCache = new ContextCache(gl)
    CACHE.set(gl, ctxCache)
  }
  return ctxCache
}

function getShaderReference(gl, type, src) {
  return getCache(gl).getShaderReference(type, src)
}

function createProgram(gl, vref, fref, attribs, locations) {
  return getCache(gl).getProgram(vref, fref, attribs, locations)
}


/***/ }),

/***/ "./node_modules/gl-texture2d/texture.js":
/*!**********************************************!*\
  !*** ./node_modules/gl-texture2d/texture.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ndarray = __webpack_require__(/*! ndarray */ "./node_modules/ndarray/ndarray.js")
var ops     = __webpack_require__(/*! ndarray-ops */ "./node_modules/ndarray-ops/ndarray-ops.js")
var pool    = __webpack_require__(/*! typedarray-pool */ "./node_modules/typedarray-pool/pool.js")

module.exports = createTexture2D

var linearTypes = null
var filterTypes = null
var wrapTypes   = null

function lazyInitLinearTypes(gl) {
  linearTypes = [
    gl.LINEAR,
    gl.NEAREST_MIPMAP_LINEAR,
    gl.LINEAR_MIPMAP_NEAREST,
    gl.LINEAR_MIPMAP_NEAREST
  ]
  filterTypes = [
    gl.NEAREST,
    gl.LINEAR,
    gl.NEAREST_MIPMAP_NEAREST,
    gl.NEAREST_MIPMAP_LINEAR,
    gl.LINEAR_MIPMAP_NEAREST,
    gl.LINEAR_MIPMAP_LINEAR
  ]
  wrapTypes = [
    gl.REPEAT,
    gl.CLAMP_TO_EDGE,
    gl.MIRRORED_REPEAT
  ]
}

function acceptTextureDOM (obj) {
  return (
    ('undefined' != typeof HTMLCanvasElement && obj instanceof HTMLCanvasElement) ||
    ('undefined' != typeof HTMLImageElement && obj instanceof HTMLImageElement) ||
    ('undefined' != typeof HTMLVideoElement && obj instanceof HTMLVideoElement) ||
    ('undefined' != typeof ImageData && obj instanceof ImageData))
}

var convertFloatToUint8 = function(out, inp) {
  ops.muls(out, inp, 255.0)
}

function reshapeTexture(tex, w, h) {
  var gl = tex.gl
  var maxSize = gl.getParameter(gl.MAX_TEXTURE_SIZE)
  if(w < 0 || w > maxSize || h < 0 || h > maxSize) {
    throw new Error('gl-texture2d: Invalid texture size')
  }
  tex._shape = [w, h]
  tex.bind()
  gl.texImage2D(gl.TEXTURE_2D, 0, tex.format, w, h, 0, tex.format, tex.type, null)
  tex._mipLevels = [0]
  return tex
}

function Texture2D(gl, handle, width, height, format, type) {
  this.gl = gl
  this.handle = handle
  this.format = format
  this.type = type
  this._shape = [width, height]
  this._mipLevels = [0]
  this._magFilter = gl.NEAREST
  this._minFilter = gl.NEAREST
  this._wrapS = gl.CLAMP_TO_EDGE
  this._wrapT = gl.CLAMP_TO_EDGE
  this._anisoSamples = 1

  var parent = this
  var wrapVector = [this._wrapS, this._wrapT]
  Object.defineProperties(wrapVector, [
    {
      get: function() {
        return parent._wrapS
      },
      set: function(v) {
        return parent.wrapS = v
      }
    },
    {
      get: function() {
        return parent._wrapT
      },
      set: function(v) {
        return parent.wrapT = v
      }
    }
  ])
  this._wrapVector = wrapVector

  var shapeVector = [this._shape[0], this._shape[1]]
  Object.defineProperties(shapeVector, [
    {
      get: function() {
        return parent._shape[0]
      },
      set: function(v) {
        return parent.width = v
      }
    },
    {
      get: function() {
        return parent._shape[1]
      },
      set: function(v) {
        return parent.height = v
      }
    }
  ])
  this._shapeVector = shapeVector
}

var proto = Texture2D.prototype

Object.defineProperties(proto, {
  minFilter: {
    get: function() {
      return this._minFilter
    },
    set: function(v) {
      this.bind()
      var gl = this.gl
      if(this.type === gl.FLOAT && linearTypes.indexOf(v) >= 0) {
        if(!gl.getExtension('OES_texture_float_linear')) {
          v = gl.NEAREST
        }
      }
      if(filterTypes.indexOf(v) < 0) {
        throw new Error('gl-texture2d: Unknown filter mode ' + v)
      }
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, v)
      return this._minFilter = v
    }
  },
  magFilter: {
    get: function() {
      return this._magFilter
    },
    set: function(v) {
      this.bind()
      var gl = this.gl
      if(this.type === gl.FLOAT && linearTypes.indexOf(v) >= 0) {
        if(!gl.getExtension('OES_texture_float_linear')) {
          v = gl.NEAREST
        }
      }
      if(filterTypes.indexOf(v) < 0) {
        throw new Error('gl-texture2d: Unknown filter mode ' + v)
      }
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, v)
      return this._magFilter = v
    }
  },
  mipSamples: {
    get: function() {
      return this._anisoSamples
    },
    set: function(i) {
      var psamples = this._anisoSamples
      this._anisoSamples = Math.max(i, 1)|0
      if(psamples !== this._anisoSamples) {
        var ext = this.gl.getExtension('EXT_texture_filter_anisotropic')
        if(ext) {
          this.gl.texParameterf(this.gl.TEXTURE_2D, ext.TEXTURE_MAX_ANISOTROPY_EXT, this._anisoSamples)
        }
      }
      return this._anisoSamples
    }
  },
  wrapS: {
    get: function() {
      return this._wrapS
    },
    set: function(v) {
      this.bind()
      if(wrapTypes.indexOf(v) < 0) {
        throw new Error('gl-texture2d: Unknown wrap mode ' + v)
      }
      this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, v)
      return this._wrapS = v
    }
  },
  wrapT: {
    get: function() {
      return this._wrapT
    },
    set: function(v) {
      this.bind()
      if(wrapTypes.indexOf(v) < 0) {
        throw new Error('gl-texture2d: Unknown wrap mode ' + v)
      }
      this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, v)
      return this._wrapT = v
    }
  },
  wrap: {
    get: function() {
      return this._wrapVector
    },
    set: function(v) {
      if(!Array.isArray(v)) {
        v = [v,v]
      }
      if(v.length !== 2) {
        throw new Error('gl-texture2d: Must specify wrap mode for rows and columns')
      }
      for(var i=0; i<2; ++i) {
        if(wrapTypes.indexOf(v[i]) < 0) {
          throw new Error('gl-texture2d: Unknown wrap mode ' + v)
        }
      }
      this._wrapS = v[0]
      this._wrapT = v[1]

      var gl = this.gl
      this.bind()
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, this._wrapS)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, this._wrapT)

      return v
    }
  },
  shape: {
    get: function() {
      return this._shapeVector
    },
    set: function(x) {
      if(!Array.isArray(x)) {
        x = [x|0,x|0]
      } else {
        if(x.length !== 2) {
          throw new Error('gl-texture2d: Invalid texture shape')
        }
      }
      reshapeTexture(this, x[0]|0, x[1]|0)
      return [x[0]|0, x[1]|0]
    }
  },
  width: {
    get: function() {
      return this._shape[0]
    },
    set: function(w) {
      w = w|0
      reshapeTexture(this, w, this._shape[1])
      return w
    }
  },
  height: {
    get: function() {
      return this._shape[1]
    },
    set: function(h) {
      h = h|0
      reshapeTexture(this, this._shape[0], h)
      return h
    }
  }
})

proto.bind = function(unit) {
  var gl = this.gl
  if(unit !== undefined) {
    gl.activeTexture(gl.TEXTURE0 + (unit|0))
  }
  gl.bindTexture(gl.TEXTURE_2D, this.handle)
  if(unit !== undefined) {
    return (unit|0)
  }
  return gl.getParameter(gl.ACTIVE_TEXTURE) - gl.TEXTURE0
}

proto.dispose = function() {
  this.gl.deleteTexture(this.handle)
}

proto.generateMipmap = function() {
  this.bind()
  this.gl.generateMipmap(this.gl.TEXTURE_2D)

  //Update mip levels
  var l = Math.min(this._shape[0], this._shape[1])
  for(var i=0; l>0; ++i, l>>>=1) {
    if(this._mipLevels.indexOf(i) < 0) {
      this._mipLevels.push(i)
    }
  }
}

proto.setPixels = function(data, x_off, y_off, mip_level) {
  var gl = this.gl
  this.bind()
  if(Array.isArray(x_off)) {
    mip_level = y_off
    y_off = x_off[1]|0
    x_off = x_off[0]|0
  } else {
    x_off = x_off || 0
    y_off = y_off || 0
  }
  mip_level = mip_level || 0
  var directData = acceptTextureDOM(data) ? data : data.raw
  if(directData) {
    var needsMip = this._mipLevels.indexOf(mip_level) < 0
    if(needsMip) {
      gl.texImage2D(gl.TEXTURE_2D, 0, this.format, this.format, this.type, directData)
      this._mipLevels.push(mip_level)
    } else {
      gl.texSubImage2D(gl.TEXTURE_2D, mip_level, x_off, y_off, this.format, this.type, directData)
    }
  } else if(data.shape && data.stride && data.data) {
    if(data.shape.length < 2 ||
       x_off + data.shape[1] > this._shape[1]>>>mip_level ||
       y_off + data.shape[0] > this._shape[0]>>>mip_level ||
       x_off < 0 ||
       y_off < 0) {
      throw new Error('gl-texture2d: Texture dimensions are out of bounds')
    }
    texSubImageArray(gl, x_off, y_off, mip_level, this.format, this.type, this._mipLevels, data)
  } else {
    throw new Error('gl-texture2d: Unsupported data type')
  }
}


function isPacked(shape, stride) {
  if(shape.length === 3) {
    return  (stride[2] === 1) &&
            (stride[1] === shape[0]*shape[2]) &&
            (stride[0] === shape[2])
  }
  return  (stride[0] === 1) &&
          (stride[1] === shape[0])
}

function texSubImageArray(gl, x_off, y_off, mip_level, cformat, ctype, mipLevels, array) {
  var dtype = array.dtype
  var shape = array.shape.slice()
  if(shape.length < 2 || shape.length > 3) {
    throw new Error('gl-texture2d: Invalid ndarray, must be 2d or 3d')
  }
  var type = 0, format = 0
  var packed = isPacked(shape, array.stride.slice())
  if(dtype === 'float32') {
    type = gl.FLOAT
  } else if(dtype === 'float64') {
    type = gl.FLOAT
    packed = false
    dtype = 'float32'
  } else if(dtype === 'uint8') {
    type = gl.UNSIGNED_BYTE
  } else {
    type = gl.UNSIGNED_BYTE
    packed = false
    dtype = 'uint8'
  }
  var channels = 1
  if(shape.length === 2) {
    format = gl.LUMINANCE
    shape = [shape[0], shape[1], 1]
    array = ndarray(array.data, shape, [array.stride[0], array.stride[1], 1], array.offset)
  } else if(shape.length === 3) {
    if(shape[2] === 1) {
      format = gl.ALPHA
    } else if(shape[2] === 2) {
      format = gl.LUMINANCE_ALPHA
    } else if(shape[2] === 3) {
      format = gl.RGB
    } else if(shape[2] === 4) {
      format = gl.RGBA
    } else {
      throw new Error('gl-texture2d: Invalid shape for pixel coords')
    }
    channels = shape[2]
  } else {
    throw new Error('gl-texture2d: Invalid shape for texture')
  }
  //For 1-channel textures allow conversion between formats
  if((format  === gl.LUMINANCE || format  === gl.ALPHA) &&
     (cformat === gl.LUMINANCE || cformat === gl.ALPHA)) {
    format = cformat
  }
  if(format !== cformat) {
    throw new Error('gl-texture2d: Incompatible texture format for setPixels')
  }
  var size = array.size
  var needsMip = mipLevels.indexOf(mip_level) < 0
  if(needsMip) {
    mipLevels.push(mip_level)
  }
  if(type === ctype && packed) {
    //Array data types are compatible, can directly copy into texture
    if(array.offset === 0 && array.data.length === size) {
      if(needsMip) {
        gl.texImage2D(gl.TEXTURE_2D, mip_level, cformat, shape[0], shape[1], 0, cformat, ctype, array.data)
      } else {
        gl.texSubImage2D(gl.TEXTURE_2D, mip_level, x_off, y_off, shape[0], shape[1], cformat, ctype, array.data)
      }
    } else {
      if(needsMip) {
        gl.texImage2D(gl.TEXTURE_2D, mip_level, cformat, shape[0], shape[1], 0, cformat, ctype, array.data.subarray(array.offset, array.offset+size))
      } else {
        gl.texSubImage2D(gl.TEXTURE_2D, mip_level, x_off, y_off, shape[0], shape[1], cformat, ctype, array.data.subarray(array.offset, array.offset+size))
      }
    }
  } else {
    //Need to do type conversion to pack data into buffer
    var pack_buffer
    if(ctype === gl.FLOAT) {
      pack_buffer = pool.mallocFloat32(size)
    } else {
      pack_buffer = pool.mallocUint8(size)
    }
    var pack_view = ndarray(pack_buffer, shape, [shape[2], shape[2]*shape[0], 1])
    if(type === gl.FLOAT && ctype === gl.UNSIGNED_BYTE) {
      convertFloatToUint8(pack_view, array)
    } else {
      ops.assign(pack_view, array)
    }
    if(needsMip) {
      gl.texImage2D(gl.TEXTURE_2D, mip_level, cformat, shape[0], shape[1], 0, cformat, ctype, pack_buffer.subarray(0, size))
    } else {
      gl.texSubImage2D(gl.TEXTURE_2D, mip_level, x_off, y_off, shape[0], shape[1], cformat, ctype, pack_buffer.subarray(0, size))
    }
    if(ctype === gl.FLOAT) {
      pool.freeFloat32(pack_buffer)
    } else {
      pool.freeUint8(pack_buffer)
    }
  }
}

function initTexture(gl) {
  var tex = gl.createTexture()
  gl.bindTexture(gl.TEXTURE_2D, tex)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
  return tex
}

function createTextureShape(gl, width, height, format, type) {
  var maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE)
  if(width < 0 || width > maxTextureSize || height < 0 || height  > maxTextureSize) {
    throw new Error('gl-texture2d: Invalid texture shape')
  }
  if(type === gl.FLOAT && !gl.getExtension('OES_texture_float')) {
    throw new Error('gl-texture2d: Floating point textures not supported on this platform')
  }
  var tex = initTexture(gl)
  gl.texImage2D(gl.TEXTURE_2D, 0, format, width, height, 0, format, type, null)
  return new Texture2D(gl, tex, width, height, format, type)
}

function createTextureDOM(gl, directData, width, height, format, type) {
  var tex = initTexture(gl)
  gl.texImage2D(gl.TEXTURE_2D, 0, format, format, type, directData)
  return new Texture2D(gl, tex, width, height, format, type)
}

//Creates a texture from an ndarray
function createTextureArray(gl, array) {
  var dtype = array.dtype
  var shape = array.shape.slice()
  var maxSize = gl.getParameter(gl.MAX_TEXTURE_SIZE)
  if(shape[0] < 0 || shape[0] > maxSize || shape[1] < 0 || shape[1] > maxSize) {
    throw new Error('gl-texture2d: Invalid texture size')
  }
  var packed = isPacked(shape, array.stride.slice())
  var type = 0
  if(dtype === 'float32') {
    type = gl.FLOAT
  } else if(dtype === 'float64') {
    type = gl.FLOAT
    packed = false
    dtype = 'float32'
  } else if(dtype === 'uint8') {
    type = gl.UNSIGNED_BYTE
  } else {
    type = gl.UNSIGNED_BYTE
    packed = false
    dtype = 'uint8'
  }
  var format = 0
  if(shape.length === 2) {
    format = gl.LUMINANCE
    shape = [shape[0], shape[1], 1]
    array = ndarray(array.data, shape, [array.stride[0], array.stride[1], 1], array.offset)
  } else if(shape.length === 3) {
    if(shape[2] === 1) {
      format = gl.ALPHA
    } else if(shape[2] === 2) {
      format = gl.LUMINANCE_ALPHA
    } else if(shape[2] === 3) {
      format = gl.RGB
    } else if(shape[2] === 4) {
      format = gl.RGBA
    } else {
      throw new Error('gl-texture2d: Invalid shape for pixel coords')
    }
  } else {
    throw new Error('gl-texture2d: Invalid shape for texture')
  }
  if(type === gl.FLOAT && !gl.getExtension('OES_texture_float')) {
    type = gl.UNSIGNED_BYTE
    packed = false
  }
  var buffer, buf_store
  var size = array.size
  if(!packed) {
    var stride = [shape[2], shape[2]*shape[0], 1]
    buf_store = pool.malloc(size, dtype)
    var buf_array = ndarray(buf_store, shape, stride, 0)
    if((dtype === 'float32' || dtype === 'float64') && type === gl.UNSIGNED_BYTE) {
      convertFloatToUint8(buf_array, array)
    } else {
      ops.assign(buf_array, array)
    }
    buffer = buf_store.subarray(0, size)
  } else if (array.offset === 0 && array.data.length === size) {
    buffer = array.data
  } else {
    buffer = array.data.subarray(array.offset, array.offset + size)
  }
  var tex = initTexture(gl)
  gl.texImage2D(gl.TEXTURE_2D, 0, format, shape[0], shape[1], 0, format, type, buffer)
  if(!packed) {
    pool.free(buf_store)
  }
  return new Texture2D(gl, tex, shape[0], shape[1], format, type)
}

function createTexture2D(gl) {
  if(arguments.length <= 1) {
    throw new Error('gl-texture2d: Missing arguments for texture2d constructor')
  }
  if(!linearTypes) {
    lazyInitLinearTypes(gl)
  }
  if(typeof arguments[1] === 'number') {
    return createTextureShape(gl, arguments[1], arguments[2], arguments[3]||gl.RGBA, arguments[4]||gl.UNSIGNED_BYTE)
  }
  if(Array.isArray(arguments[1])) {
    return createTextureShape(gl, arguments[1][0]|0, arguments[1][1]|0, arguments[2]||gl.RGBA, arguments[3]||gl.UNSIGNED_BYTE)
  }
  if(typeof arguments[1] === 'object') {
    var obj = arguments[1]
    var directData = acceptTextureDOM(obj) ? obj : obj.raw
    if (directData) {
      return createTextureDOM(gl, directData, obj.width|0, obj.height|0, arguments[2]||gl.RGBA, arguments[3]||gl.UNSIGNED_BYTE)
    } else if(obj.shape && obj.data && obj.stride) {
      return createTextureArray(gl, obj)
    }
  }
  throw new Error('gl-texture2d: Invalid arguments for texture2d constructor')
}


/***/ }),

/***/ "./node_modules/gl-transition/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/gl-transition/lib/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _glShader = __webpack_require__(/*! gl-shader */ "./node_modules/gl-shader/index.js");

var _glShader2 = _interopRequireDefault(_glShader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VERT = "attribute vec2 _p;\nvarying vec2 _uv;\nvoid main() {\ngl_Position = vec4(_p,0.0,1.0);\n_uv = vec2(0.5, 0.5) * (_p+vec2(1.0, 1.0));\n}";

// these functions make a GLSL code that map the texture2D uv to preserve ratio for a given ${r} image ratio.
// there are different modes:
var resizeModes = {
  cover: function cover(r) {
    return ".5+(uv-.5)*vec2(min(ratio/" + r + ",1.),min(" + r + "/ratio,1.))";
  },
  contain: function contain(r) {
    return ".5+(uv-.5)*vec2(max(ratio/" + r + ",1.),max(" + r + "/ratio,1.))";
  },
  stretch: function stretch() {
    return "uv";
  }
};

var makeFrag = function makeFrag(transitionGlsl, resizeMode) {
  var r = resizeModes[resizeMode];
  if (!r) throw new Error("invalid resizeMode=" + resizeMode);
  return "precision highp float;varying vec2 _uv;uniform sampler2D from, to;uniform float progress, ratio, _fromR, _toR;vec4 getFromColor(vec2 uv){return texture2D(from," + r("_fromR") + ");}vec4 getToColor(vec2 uv){return texture2D(to," + r("_toR") + ");}\n" + transitionGlsl + "\nvoid main(){gl_FragColor=transition(_uv);}";
};

exports.default = function (gl, transition) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var _resizeMode$options = _extends({ resizeMode: "cover" }, options),
      resizeMode = _resizeMode$options.resizeMode;

  var shader = (0, _glShader2.default)(gl, VERT, makeFrag(transition.glsl, resizeMode));
  shader.bind();
  shader.attributes._p.pointer();

  return {
    draw: function draw(progress, from, to) {
      var width = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : gl.drawingBufferWidth;
      var height = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : gl.drawingBufferHeight;
      var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

      shader.bind();
      shader.uniforms.ratio = width / height;
      shader.uniforms.progress = progress;
      shader.uniforms.from = from.bind(0);
      shader.uniforms.to = to.bind(1);
      shader.uniforms._fromR = from.shape[0] / from.shape[1];
      shader.uniforms._toR = to.shape[0] / to.shape[1];
      var unit = 2;
      for (var _key in transition.paramsTypes) {
        var value = _key in params ? params[_key] : transition.defaultParams[_key];
        if (transition.paramsTypes[_key] === "sampler2D") {
          if (!value) {
            console.warn("uniform[" + _key + "]: A texture MUST be defined for uniform sampler2D of a texture");
          } else if (typeof value.bind !== "function") {
            throw new Error("uniform[" + _key + "]: A gl-texture2d API-like object was expected");
          } else {
            shader.uniforms[_key] = value.bind(unit++);
          }
        } else {
          shader.uniforms[_key] = value;
        }
      }
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    },
    dispose: function dispose() {
      shader.dispose();
    }
  };
};

/***/ }),

/***/ "./node_modules/gl-transitions/index.js":
/*!**********************************************!*\
  !*** ./node_modules/gl-transitions/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports=
[{"name":"Bounce","paramsTypes":{"shadow_colour":"vec4","shadow_height":"float","bounces":"float"},"defaultParams":{"shadow_colour":[0,0,0,0.6],"shadow_height":0.075,"bounces":3},"glsl":"// Author: Adrian Purser\n// License: MIT\n\nuniform vec4 shadow_colour; // = vec4(0.,0.,0.,.6)\nuniform float shadow_height; // = 0.075\nuniform float bounces; // = 3.0\n\nconst float PI = 3.14159265358;\n\nvec4 transition (vec2 uv) {\n  float time = progress;\n  float stime = sin(time * PI / 2.);\n  float phase = time * PI * bounces;\n  float y = (abs(cos(phase))) * (1.0 - stime);\n  float d = uv.y - y;\n  return mix(\n    mix(\n      getToColor(uv),\n      shadow_colour,\n      step(d, shadow_height) * (1. - mix(\n        ((d / shadow_height) * shadow_colour.a) + (1.0 - shadow_colour.a),\n        1.0,\n        smoothstep(0.95, 1., progress) // fade-out the shadow at the end\n      ))\n    ),\n    getFromColor(vec2(uv.x, uv.y + (1.0 - y))),\n    step(d, 0.0)\n  );\n}\n","author":"Adrian Purser","license":"MIT","createdAt":"Fri, 10 Nov 2017 17:01:45 +0000","updatedAt":"Sat, 11 Nov 2017 08:50:40 +0100"},{"name":"BowTieHorizontal","paramsTypes":{},"defaultParams":{},"glsl":"// Author: huynx\n// License: MIT\n\nvec2 bottom_left = vec2(0.0, 1.0);\nvec2 bottom_right = vec2(1.0, 1.0);\nvec2 top_left = vec2(0.0, 0.0);\nvec2 top_right = vec2(1.0, 0.0);\nvec2 center = vec2(0.5, 0.5);\n\nfloat check(vec2 p1, vec2 p2, vec2 p3)\n{\n  return (p1.x - p3.x) * (p2.y - p3.y) - (p2.x - p3.x) * (p1.y - p3.y);\n}\n\nbool PointInTriangle (vec2 pt, vec2 p1, vec2 p2, vec2 p3)\n{\n    bool b1, b2, b3;\n    b1 = check(pt, p1, p2) < 0.0;\n    b2 = check(pt, p2, p3) < 0.0;\n    b3 = check(pt, p3, p1) < 0.0;\n    return ((b1 == b2) && (b2 == b3));\n}\n\nbool in_left_triangle(vec2 p){\n  vec2 vertex1, vertex2, vertex3;\n  vertex1 = vec2(progress, 0.5);\n  vertex2 = vec2(0.0, 0.5-progress);\n  vertex3 = vec2(0.0, 0.5+progress);\n  if (PointInTriangle(p, vertex1, vertex2, vertex3))\n  {\n    return true;\n  }\n  return false;\n}\n\nbool in_right_triangle(vec2 p){\n  vec2 vertex1, vertex2, vertex3;\n  vertex1 = vec2(1.0-progress, 0.5);\n  vertex2 = vec2(1.0, 0.5-progress);\n  vertex3 = vec2(1.0, 0.5+progress);\n  if (PointInTriangle(p, vertex1, vertex2, vertex3))\n  {\n    return true;\n  }\n  return false;\n}\n\nfloat blur_edge(vec2 bot1, vec2 bot2, vec2 top, vec2 testPt)\n{\n  vec2 lineDir = bot1 - top;\n  vec2 perpDir = vec2(lineDir.y, -lineDir.x);\n  vec2 dirToPt1 = bot1 - testPt;\n  float dist1 = abs(dot(normalize(perpDir), dirToPt1));\n  \n  lineDir = bot2 - top;\n  perpDir = vec2(lineDir.y, -lineDir.x);\n  dirToPt1 = bot2 - testPt;\n  float min_dist = min(abs(dot(normalize(perpDir), dirToPt1)), dist1);\n  \n  if (min_dist < 0.005) {\n    return min_dist / 0.005;\n  }\n  else  {\n    return 1.0;\n  };\n}\n\n\nvec4 transition (vec2 uv) {\n  if (in_left_triangle(uv))\n  {\n    if (progress < 0.1)\n    {\n      return getFromColor(uv);\n    }\n    if (uv.x < 0.5)\n    {\n      vec2 vertex1 = vec2(progress, 0.5);\n      vec2 vertex2 = vec2(0.0, 0.5-progress);\n      vec2 vertex3 = vec2(0.0, 0.5+progress);\n      return mix(\n        getFromColor(uv),\n        getToColor(uv),\n        blur_edge(vertex2, vertex3, vertex1, uv)\n      );\n    }\n    else\n    {\n      if (progress > 0.0)\n      {\n        return getToColor(uv);\n      }\n      else\n      {\n        return getFromColor(uv);\n      }\n    }    \n  }\n  else if (in_right_triangle(uv))\n  {\n    if (uv.x >= 0.5)\n    {\n      vec2 vertex1 = vec2(1.0-progress, 0.5);\n      vec2 vertex2 = vec2(1.0, 0.5-progress);\n      vec2 vertex3 = vec2(1.0, 0.5+progress);\n      return mix(\n        getFromColor(uv),\n        getToColor(uv),\n        blur_edge(vertex2, vertex3, vertex1, uv)\n      );  \n    }\n    else\n    {\n      return getFromColor(uv);\n    }\n  }\n  else {\n    return getFromColor(uv);\n  }\n}","author":"huynx","license":"MIT","createdAt":"Sat, 24 Mar 2018 12:54:26 +0100","updatedAt":"Sat, 24 Mar 2018 12:54:26 +0100"},{"name":"BowTieVertical","paramsTypes":{},"defaultParams":{},"glsl":"// Author: huynx\r\n// License: MIT\r\n\r\nfloat check(vec2 p1, vec2 p2, vec2 p3)\r\n{\r\n  return (p1.x - p3.x) * (p2.y - p3.y) - (p2.x - p3.x) * (p1.y - p3.y);\r\n}\r\n\r\nbool PointInTriangle (vec2 pt, vec2 p1, vec2 p2, vec2 p3)\r\n{\r\n    bool b1, b2, b3;\r\n    b1 = check(pt, p1, p2) < 0.0;\r\n    b2 = check(pt, p2, p3) < 0.0;\r\n    b3 = check(pt, p3, p1) < 0.0;\r\n    return ((b1 == b2) && (b2 == b3));\r\n}\r\n\r\nbool in_top_triangle(vec2 p){\r\n  vec2 vertex1, vertex2, vertex3;\r\n  vertex1 = vec2(0.5, progress);\r\n  vertex2 = vec2(0.5-progress, 0.0);\r\n  vertex3 = vec2(0.5+progress, 0.0);\r\n  if (PointInTriangle(p, vertex1, vertex2, vertex3))\r\n  {\r\n    return true;\r\n  }\r\n  return false;\r\n}\r\n\r\nbool in_bottom_triangle(vec2 p){\r\n  vec2 vertex1, vertex2, vertex3;\r\n  vertex1 = vec2(0.5, 1.0 - progress);\r\n  vertex2 = vec2(0.5-progress, 1.0);\r\n  vertex3 = vec2(0.5+progress, 1.0);\r\n  if (PointInTriangle(p, vertex1, vertex2, vertex3))\r\n  {\r\n    return true;\r\n  }\r\n  return false;\r\n}\r\n\r\nfloat blur_edge(vec2 bot1, vec2 bot2, vec2 top, vec2 testPt)\r\n{\r\n  vec2 lineDir = bot1 - top;\r\n  vec2 perpDir = vec2(lineDir.y, -lineDir.x);\r\n  vec2 dirToPt1 = bot1 - testPt;\r\n  float dist1 = abs(dot(normalize(perpDir), dirToPt1));\r\n  \r\n  lineDir = bot2 - top;\r\n  perpDir = vec2(lineDir.y, -lineDir.x);\r\n  dirToPt1 = bot2 - testPt;\r\n  float min_dist = min(abs(dot(normalize(perpDir), dirToPt1)), dist1);\r\n  \r\n  if (min_dist < 0.005) {\r\n    return min_dist / 0.005;\r\n  }\r\n  else  {\r\n    return 1.0;\r\n  };\r\n}\r\n\r\n\r\nvec4 transition (vec2 uv) {\r\n  if (in_top_triangle(uv))\r\n  {\r\n    if (progress < 0.1)\r\n    {\r\n      return getFromColor(uv);\r\n    }\r\n    if (uv.y < 0.5)\r\n    {\r\n      vec2 vertex1 = vec2(0.5, progress);\r\n      vec2 vertex2 = vec2(0.5-progress, 0.0);\r\n      vec2 vertex3 = vec2(0.5+progress, 0.0);\r\n      return mix(\r\n        getFromColor(uv),\r\n        getToColor(uv),\r\n        blur_edge(vertex2, vertex3, vertex1, uv)\r\n      );\r\n    }\r\n    else\r\n    {\r\n      if (progress > 0.0)\r\n      {\r\n        return getToColor(uv);\r\n      }\r\n      else\r\n      {\r\n        return getFromColor(uv);\r\n      }\r\n    }    \r\n  }\r\n  else if (in_bottom_triangle(uv))\r\n  {\r\n    if (uv.y >= 0.5)\r\n    {\r\n      vec2 vertex1 = vec2(0.5, 1.0-progress);\r\n      vec2 vertex2 = vec2(0.5-progress, 1.0);\r\n      vec2 vertex3 = vec2(0.5+progress, 1.0);\r\n      return mix(\r\n        getFromColor(uv),\r\n        getToColor(uv),\r\n        blur_edge(vertex2, vertex3, vertex1, uv)\r\n      );  \r\n    }\r\n    else\r\n    {\r\n      return getFromColor(uv);\r\n    }\r\n  }\r\n  else {\r\n    return getFromColor(uv);\r\n  }\r\n}","author":"huynx","license":"MIT","createdAt":"Tue, 27 Mar 2018 10:07:54 +0700","updatedAt":"Tue, 27 Mar 2018 10:07:54 +0700"},{"name":"ButterflyWaveScrawler","paramsTypes":{"amplitude":"float","waves":"float","colorSeparation":"float"},"defaultParams":{"amplitude":1,"waves":30,"colorSeparation":0.3},"glsl":"// Author: mandubian\n// License: MIT\nuniform float amplitude; // = 1.0\nuniform float waves; // = 30.0\nuniform float colorSeparation; // = 0.3\nfloat PI = 3.14159265358979323846264;\nfloat compute(vec2 p, float progress, vec2 center) {\nvec2 o = p*sin(progress * amplitude)-center;\n// horizontal vector\nvec2 h = vec2(1., 0.);\n// butterfly polar function (don't ask me why this one :))\nfloat theta = acos(dot(o, h)) * waves;\nreturn (exp(cos(theta)) - 2.*cos(4.*theta) + pow(sin((2.*theta - PI) / 24.), 5.)) / 10.;\n}\nvec4 transition(vec2 uv) {\n  vec2 p = uv.xy / vec2(1.0).xy;\n  float inv = 1. - progress;\n  vec2 dir = p - vec2(.5);\n  float dist = length(dir);\n  float disp = compute(p, progress, vec2(0.5, 0.5)) ;\n  vec4 texTo = getToColor(p + inv*disp);\n  vec4 texFrom = vec4(\n  getFromColor(p + progress*disp*(1.0 - colorSeparation)).r,\n  getFromColor(p + progress*disp).g,\n  getFromColor(p + progress*disp*(1.0 + colorSeparation)).b,\n  1.0);\n  return texTo*progress + texFrom*inv;\n}\n","author":"mandubian","license":"MIT","createdAt":"Thu, 1 Jun 2017 11:47:17 +0200","updatedAt":"Thu, 1 Jun 2017 11:47:17 +0200"},{"name":"CircleCrop","paramsTypes":{"bgcolor":"vec4"},"defaultParams":{"bgcolor":[0,0,0,1]},"glsl":"// License: MIT\n// Author: fkuteken\n// ported by gre from https://gist.github.com/fkuteken/f63e3009c1143950dee9063c3b83fb88\n\nuniform vec4 bgcolor; // = vec4(0.0, 0.0, 0.0, 1.0)\n\nvec2 ratio2 = vec2(1.0, 1.0 / ratio);\nfloat s = pow(2.0 * abs(progress - 0.5), 3.0);\n\nvec4 transition(vec2 p) {\n  float dist = length((vec2(p) - 0.5) * ratio2);\n  return mix(\n    progress < 0.5 ? getFromColor(p) : getToColor(p), // branching is ok here as we statically depend on progress uniform (branching won't change over pixels)\n    bgcolor,\n    step(s, dist)\n  );\n}\n","license":"MIT","author":"fkuteken","createdAt":"Mon, 12 Jun 2017 12:52:34 +0800","updatedAt":"Mon, 12 Jun 2017 12:52:34 +0800"},{"name":"ColourDistance","paramsTypes":{"power":"float"},"defaultParams":{"power":5},"glsl":"// License: MIT\n// Author: P-Seebauer\n// ported by gre from https://gist.github.com/P-Seebauer/2a5fa2f77c883dd661f9\n\nuniform float power; // = 5.0\n\nvec4 transition(vec2 p) {\n  vec4 fTex = getFromColor(p);\n  vec4 tTex = getToColor(p);\n  float m = step(distance(fTex, tTex), progress);\n  return mix(\n    mix(fTex, tTex, m),\n    tTex,\n    pow(progress, power)\n  );\n}\n","license":"MIT","author":"P-Seebauer","createdAt":"Mon, 12 Jun 2017 12:57:42 +0800","updatedAt":"Mon, 12 Jun 2017 12:57:42 +0800"},{"name":"CrazyParametricFun","paramsTypes":{"a":"float","b":"float","amplitude":"float","smoothness":"float"},"defaultParams":{"a":4,"b":1,"amplitude":120,"smoothness":0.1},"glsl":"// Author: mandubian\n// License: MIT\n\nuniform float a; // = 4\nuniform float b; // = 1\nuniform float amplitude; // = 120\nuniform float smoothness; // = 0.1\n\nvec4 transition(vec2 uv) {\n  vec2 p = uv.xy / vec2(1.0).xy;\n  vec2 dir = p - vec2(.5);\n  float dist = length(dir);\n  float x = (a - b) * cos(progress) + b * cos(progress * ((a / b) - 1.) );\n  float y = (a - b) * sin(progress) - b * sin(progress * ((a / b) - 1.));\n  vec2 offset = dir * vec2(sin(progress  * dist * amplitude * x), sin(progress * dist * amplitude * y)) / smoothness;\n  return mix(getFromColor(p + offset), getToColor(p), smoothstep(0.2, 1.0, progress));\n}\n","author":"mandubian","license":"MIT","createdAt":"Thu, 1 Jun 2017 13:03:12 +0200","updatedAt":"Thu, 1 Jun 2017 13:03:12 +0200"},{"name":"CrossZoom","paramsTypes":{"strength":"float"},"defaultParams":{"strength":0.4},"glsl":"// License: MIT\n// Author: rectalogic\n// ported by gre from https://gist.github.com/rectalogic/b86b90161503a0023231\n\n// Converted from https://github.com/rectalogic/rendermix-basic-effects/blob/master/assets/com/rendermix/CrossZoom/CrossZoom.frag\n// Which is based on https://github.com/evanw/glfx.js/blob/master/src/filters/blur/zoomblur.js\n// With additional easing functions from https://github.com/rectalogic/rendermix-basic-effects/blob/master/assets/com/rendermix/Easing/Easing.glsllib\n\nuniform float strength; // = 0.4\n\nconst float PI = 3.141592653589793;\n\nfloat Linear_ease(in float begin, in float change, in float duration, in float time) {\n    return change * time / duration + begin;\n}\n\nfloat Exponential_easeInOut(in float begin, in float change, in float duration, in float time) {\n    if (time == 0.0)\n        return begin;\n    else if (time == duration)\n        return begin + change;\n    time = time / (duration / 2.0);\n    if (time < 1.0)\n        return change / 2.0 * pow(2.0, 10.0 * (time - 1.0)) + begin;\n    return change / 2.0 * (-pow(2.0, -10.0 * (time - 1.0)) + 2.0) + begin;\n}\n\nfloat Sinusoidal_easeInOut(in float begin, in float change, in float duration, in float time) {\n    return -change / 2.0 * (cos(PI * time / duration) - 1.0) + begin;\n}\n\nfloat rand (vec2 co) {\n  return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\n}\n\nvec3 crossFade(in vec2 uv, in float dissolve) {\n    return mix(getFromColor(uv).rgb, getToColor(uv).rgb, dissolve);\n}\n\nvec4 transition(vec2 uv) {\n    vec2 texCoord = uv.xy / vec2(1.0).xy;\n\n    // Linear interpolate center across center half of the image\n    vec2 center = vec2(Linear_ease(0.25, 0.5, 1.0, progress), 0.5);\n    float dissolve = Exponential_easeInOut(0.0, 1.0, 1.0, progress);\n\n    // Mirrored sinusoidal loop. 0->strength then strength->0\n    float strength = Sinusoidal_easeInOut(0.0, strength, 0.5, progress);\n\n    vec3 color = vec3(0.0);\n    float total = 0.0;\n    vec2 toCenter = center - texCoord;\n\n    /* randomize the lookup values to hide the fixed number of samples */\n    float offset = rand(uv);\n\n    for (float t = 0.0; t <= 40.0; t++) {\n        float percent = (t + offset) / 40.0;\n        float weight = 4.0 * (percent - percent * percent);\n        color += crossFade(texCoord + toCenter * percent * strength, dissolve) * weight;\n        total += weight;\n    }\n    return vec4(color / total, 1.0);\n}\n","license":"MIT","author":"rectalogic","createdAt":"Mon, 12 Jun 2017 12:33:07 +0800","updatedAt":"Mon, 12 Jun 2017 12:33:07 +0800"},{"name":"Directional","paramsTypes":{"direction":"vec2"},"defaultParams":{"direction":[0,1]},"glsl":"// Author: Gaëtan Renaudeau\n// License: MIT\n\nuniform vec2 direction; // = vec2(0.0, 1.0)\n\nvec4 transition (vec2 uv) {\n  vec2 p = uv + progress * sign(direction);\n  vec2 f = fract(p);\n  return mix(\n    getToColor(f),\n    getFromColor(f),\n    step(0.0, p.y) * step(p.y, 1.0) * step(0.0, p.x) * step(p.x, 1.0)\n  );\n}\n","author":"Gaëtan Renaudeau","license":"MIT","createdAt":"Thu, 19 Apr 2018 12:20:29 +0200","updatedAt":"Thu, 19 Apr 2018 12:20:29 +0200"},{"name":"DoomScreenTransition","paramsTypes":{"bars":"int","amplitude":"float","noise":"float","frequency":"float","dripScale":"float"},"defaultParams":{"bars":30,"amplitude":2,"noise":0.1,"frequency":0.5,"dripScale":0.5},"glsl":"// Author: Zeh Fernando\n// License: MIT\n\n\n// Transition parameters --------\n\n// Number of total bars/columns\nuniform int bars; // = 30\n\n// Multiplier for speed ratio. 0 = no variation when going down, higher = some elements go much faster\nuniform float amplitude; // = 2\n\n// Further variations in speed. 0 = no noise, 1 = super noisy (ignore frequency)\nuniform float noise; // = 0.1\n\n// Speed variation horizontally. the bigger the value, the shorter the waves\nuniform float frequency; // = 0.5\n\n// How much the bars seem to \"run\" from the middle of the screen first (sticking to the sides). 0 = no drip, 1 = curved drip\nuniform float dripScale; // = 0.5\n\n\n// The code proper --------\n\nfloat rand(int num) {\n  return fract(mod(float(num) * 67123.313, 12.0) * sin(float(num) * 10.3) * cos(float(num)));\n}\n\nfloat wave(int num) {\n  float fn = float(num) * frequency * 0.1 * float(bars);\n  return cos(fn * 0.5) * cos(fn * 0.13) * sin((fn+10.0) * 0.3) / 2.0 + 0.5;\n}\n\nfloat drip(int num) {\n  return sin(float(num) / float(bars - 1) * 3.141592) * dripScale;\n}\n\nfloat pos(int num) {\n  return (noise == 0.0 ? wave(num) : mix(wave(num), rand(num), noise)) + (dripScale == 0.0 ? 0.0 : drip(num));\n}\n\nvec4 transition(vec2 uv) {\n  int bar = int(uv.x * (float(bars)));\n  float scale = 1.0 + pos(bar) * amplitude;\n  float phase = progress * scale;\n  float posY = uv.y / vec2(1.0).y;\n  vec2 p;\n  vec4 c;\n  if (phase + posY < 1.0) {\n    p = vec2(uv.x, uv.y + mix(0.0, vec2(1.0).y, phase)) / vec2(1.0).xy;\n    c = getFromColor(p);\n  } else {\n    p = uv.xy / vec2(1.0).xy;\n    c = getToColor(p);\n  }\n\n  // Finally, apply the color\n  return c;\n}\n","author":"Zeh Fernando","license":"MIT","createdAt":"Tue, 30 May 2017 09:39:09 -0700","updatedAt":"Tue, 30 May 2017 09:39:09 -0700"},{"name":"Dreamy","paramsTypes":{},"defaultParams":{},"glsl":"// Author: mikolalysenko\n// License: MIT\n\nvec2 offset(float progress, float x, float theta) {\n  float phase = progress*progress + progress + theta;\n  float shifty = 0.03*progress*cos(10.0*(progress+x));\n  return vec2(0, shifty);\n}\nvec4 transition(vec2 p) {\n  return mix(getFromColor(p + offset(progress, p.x, 0.0)), getToColor(p + offset(1.0-progress, p.x, 3.14)), progress);\n}\n","author":"mikolalysenko","license":"MIT","createdAt":"Mon, 12 Jun 2017 12:27:38 +0800","updatedAt":"Mon, 12 Jun 2017 12:27:38 +0800"},{"name":"DreamyZoom","paramsTypes":{"rotation":"float","scale":"float"},"defaultParams":{"rotation":6,"scale":1.2},"glsl":"// Author: Zeh Fernando\n// License: MIT\n\n// Definitions --------\n#define DEG2RAD 0.03926990816987241548078304229099 // 1/180*PI\n\n\n// Transition parameters --------\n\n// In degrees\nuniform float rotation; // = 6\n\n// Multiplier\nuniform float scale; // = 1.2\n\n\n// The code proper --------\n\nvec4 transition(vec2 uv) {\n  // Massage parameters\n  float phase = progress < 0.5 ? progress * 2.0 : (progress - 0.5) * 2.0;\n  float angleOffset = progress < 0.5 ? mix(0.0, rotation * DEG2RAD, phase) : mix(-rotation * DEG2RAD, 0.0, phase);\n  float newScale = progress < 0.5 ? mix(1.0, scale, phase) : mix(scale, 1.0, phase);\n  \n  vec2 center = vec2(0, 0);\n\n  // Calculate the source point\n  vec2 assumedCenter = vec2(0.5, 0.5);\n  vec2 p = (uv.xy - vec2(0.5, 0.5)) / newScale * vec2(ratio, 1.0);\n\n  // This can probably be optimized (with distance())\n  float angle = atan(p.y, p.x) + angleOffset;\n  float dist = distance(center, p);\n  p.x = cos(angle) * dist / ratio + 0.5;\n  p.y = sin(angle) * dist + 0.5;\n  vec4 c = progress < 0.5 ? getFromColor(p) : getToColor(p);\n\n  // Finally, apply the color\n  return c + (progress < 0.5 ? mix(0.0, 1.0, phase) : mix(1.0, 0.0, phase));\n}\n","author":"Zeh Fernando","license":"MIT","createdAt":"Tue, 30 May 2017 10:44:06 -0700","updatedAt":"Tue, 30 May 2017 10:44:06 -0700"},{"name":"GlitchDisplace","paramsTypes":{},"defaultParams":{},"glsl":"// Author: Matt DesLauriers\n// License: MIT\n\nhighp float random(vec2 co)\n{\n    highp float a = 12.9898;\n    highp float b = 78.233;\n    highp float c = 43758.5453;\n    highp float dt= dot(co.xy ,vec2(a,b));\n    highp float sn= mod(dt,3.14);\n    return fract(sin(sn) * c);\n}\nfloat voronoi( in vec2 x ) {\n    vec2 p = floor( x );\n    vec2 f = fract( x );\n    float res = 8.0;\n    for( float j=-1.; j<=1.; j++ )\n    for( float i=-1.; i<=1.; i++ ) {\n        vec2  b = vec2( i, j );\n        vec2  r = b - f + random( p + b );\n        float d = dot( r, r );\n        res = min( res, d );\n    }\n    return sqrt( res );\n}\n\nvec2 displace(vec4 tex, vec2 texCoord, float dotDepth, float textureDepth, float strength) {\n    float b = voronoi(.003 * texCoord + 2.0);\n    float g = voronoi(0.2 * texCoord);\n    float r = voronoi(texCoord - 1.0);\n    vec4 dt = tex * 1.0;\n    vec4 dis = dt * dotDepth + 1.0 - tex * textureDepth;\n\n    dis.x = dis.x - 1.0 + textureDepth*dotDepth;\n    dis.y = dis.y - 1.0 + textureDepth*dotDepth;\n    dis.x *= strength;\n    dis.y *= strength;\n    vec2 res_uv = texCoord ;\n    res_uv.x = res_uv.x + dis.x - 0.0;\n    res_uv.y = res_uv.y + dis.y;\n    return res_uv;\n}\n\nfloat ease1(float t) {\n  return t == 0.0 || t == 1.0\n    ? t\n    : t < 0.5\n      ? +0.5 * pow(2.0, (20.0 * t) - 10.0)\n      : -0.5 * pow(2.0, 10.0 - (t * 20.0)) + 1.0;\n}\nfloat ease2(float t) {\n  return t == 1.0 ? t : 1.0 - pow(2.0, -10.0 * t);\n}\n\n\n\nvec4 transition(vec2 uv) {\n  vec2 p = uv.xy / vec2(1.0).xy;\n  vec4 color1 = getFromColor(p);\n  vec4 color2 = getToColor(p);\n  vec2 disp = displace(color1, p, 0.33, 0.7, 1.0-ease1(progress));\n  vec2 disp2 = displace(color2, p, 0.33, 0.5, ease2(progress));\n  vec4 dColor1 = getToColor(disp);\n  vec4 dColor2 = getFromColor(disp2);\n  float val = ease1(progress);\n  vec3 gray = vec3(dot(min(dColor2, dColor1).rgb, vec3(0.299, 0.587, 0.114)));\n  dColor2 = vec4(gray, 1.0);\n  dColor2 *= 2.0;\n  color1 = mix(color1, dColor2, smoothstep(0.0, 0.5, progress));\n  color2 = mix(color2, dColor1, smoothstep(1.0, 0.5, progress));\n  return mix(color1, color2, val);\n  //gl_FragColor = mix(gl_FragColor, dColor, smoothstep(0.0, 0.5, progress));\n  \n   //gl_FragColor = mix(texture2D(from, p), texture2D(to, p), progress);\n}\n","author":"Matt DesLauriers","license":"MIT","createdAt":"Tue, 30 May 2017 14:53:04 -0400","updatedAt":"Tue, 30 May 2017 14:53:04 -0400"},{"name":"GlitchMemories","paramsTypes":{},"defaultParams":{},"glsl":"// author: Gunnar Roth\n// based on work from natewave\n// license: MIT\nvec4 transition(vec2 p) {\n  vec2 block = floor(p.xy / vec2(16));\n  vec2 uv_noise = block / vec2(64);\n  uv_noise += floor(vec2(progress) * vec2(1200.0, 3500.0)) / vec2(64);\n  vec2 dist = progress > 0.0 ? (fract(uv_noise) - 0.5) * 0.3 *(1.0 -progress) : vec2(0.0);\n  vec2 red = p + dist * 0.2;\n  vec2 green = p + dist * .3;\n  vec2 blue = p + dist * .5;\n\n  return vec4(mix(getFromColor(red), getToColor(red), progress).r,mix(getFromColor(green), getToColor(green), progress).g,mix(getFromColor(blue), getToColor(blue), progress).b,1.0);\n}\n\n","author":"Gunnar Roth","license":"MIT","createdAt":"Wed, 21 Feb 2018 00:52:15 +0100","updatedAt":"Wed, 21 Feb 2018 19:32:02 +0100"},{"name":"GridFlip","paramsTypes":{"size":"ivec2","pause":"float","dividerWidth":"float","bgcolor":"vec4","randomness":"float"},"defaultParams":{"size":[4,4],"pause":0.1,"dividerWidth":0.05,"bgcolor":[0,0,0,1],"randomness":0.1},"glsl":"// License: MIT\n// Author: TimDonselaar\n// ported by gre from https://gist.github.com/TimDonselaar/9bcd1c4b5934ba60087bdb55c2ea92e5\n\nuniform ivec2 size; // = ivec2(4)\nuniform float pause; // = 0.1\nuniform float dividerWidth; // = 0.05\nuniform vec4 bgcolor; // = vec4(0.0, 0.0, 0.0, 1.0)\nuniform float randomness; // = 0.1\n \nfloat rand (vec2 co) {\n  return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\n}\n\nfloat getDelta(vec2 p) {\n  vec2 rectanglePos = floor(vec2(size) * p);\n  vec2 rectangleSize = vec2(1.0 / vec2(size).x, 1.0 / vec2(size).y);\n  float top = rectangleSize.y * (rectanglePos.y + 1.0);\n  float bottom = rectangleSize.y * rectanglePos.y;\n  float left = rectangleSize.x * rectanglePos.x;\n  float right = rectangleSize.x * (rectanglePos.x + 1.0);\n  float minX = min(abs(p.x - left), abs(p.x - right));\n  float minY = min(abs(p.y - top), abs(p.y - bottom));\n  return min(minX, minY);\n}\n\nfloat getDividerSize() {\n  vec2 rectangleSize = vec2(1.0 / vec2(size).x, 1.0 / vec2(size).y);\n  return min(rectangleSize.x, rectangleSize.y) * dividerWidth;\n}\n\nvec4 transition(vec2 p) {\n  if(progress < pause) {\n    float currentProg = progress / pause;\n    float a = 1.0;\n    if(getDelta(p) < getDividerSize()) {\n      a = 1.0 - currentProg;\n    }\n    return mix(bgcolor, getFromColor(p), a);\n  }\n  else if(progress < 1.0 - pause){\n    if(getDelta(p) < getDividerSize()) {\n      return bgcolor;\n    } else {\n      float currentProg = (progress - pause) / (1.0 - pause * 2.0);\n      vec2 q = p;\n      vec2 rectanglePos = floor(vec2(size) * q);\n      \n      float r = rand(rectanglePos) - randomness;\n      float cp = smoothstep(0.0, 1.0 - r, currentProg);\n    \n      float rectangleSize = 1.0 / vec2(size).x;\n      float delta = rectanglePos.x * rectangleSize;\n      float offset = rectangleSize / 2.0 + delta;\n      \n      p.x = (p.x - offset)/abs(cp - 0.5)*0.5 + offset;\n      vec4 a = getFromColor(p);\n      vec4 b = getToColor(p);\n      \n      float s = step(abs(vec2(size).x * (q.x - delta) - 0.5), abs(cp - 0.5));\n      return mix(bgcolor, mix(b, a, step(cp, 0.5)), s);\n    }\n  }\n  else {\n    float currentProg = (progress - 1.0 + pause) / pause;\n    float a = 1.0;\n    if(getDelta(p) < getDividerSize()) {\n      a = currentProg;\n    }\n    return mix(bgcolor, getToColor(p), a);\n  }\n}\n","license":"MIT","author":"TimDonselaar","createdAt":"Mon, 12 Jun 2017 11:32:51 +0800","updatedAt":"Mon, 12 Jun 2017 11:32:51 +0800"},{"name":"InvertedPageCurl","paramsTypes":{},"defaultParams":{},"glsl":"// author: Hewlett-Packard\n// license: BSD 3 Clause\n// Adapted by Sergey Kosarevsky from:\n// http://rectalogic.github.io/webvfx/examples_2transition-shader-pagecurl_8html-example.html\n\n/*\nCopyright (c) 2010 Hewlett-Packard Development Company, L.P. All rights reserved.\n\nRedistribution and use in source and binary forms, with or without\nmodification, are permitted provided that the following conditions are\nmet:\n\n   * Redistributions of source code must retain the above copyright\n     notice, this list of conditions and the following disclaimer.\n   * Redistributions in binary form must reproduce the above\n     copyright notice, this list of conditions and the following disclaimer\n     in the documentation and/or other materials provided with the\n     distribution.\n   * Neither the name of Hewlett-Packard nor the names of its\n     contributors may be used to endorse or promote products derived from\n     this software without specific prior written permission.\n\nTHIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n\"AS IS\" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\nLIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\nA PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\nOWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\nSPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\nLIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\nDATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\nTHEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\nOF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\nin vec2 texCoord;\n*/\n\nconst float MIN_AMOUNT = -0.16;\nconst float MAX_AMOUNT = 1.5;\nfloat amount = progress * (MAX_AMOUNT - MIN_AMOUNT) + MIN_AMOUNT;\n\nconst float PI = 3.141592653589793;\n\nconst float scale = 512.0;\nconst float sharpness = 3.0;\n\nfloat cylinderCenter = amount;\n// 360 degrees * amount\nfloat cylinderAngle = 2.0 * PI * amount;\n\nconst float cylinderRadius = 1.0 / PI / 2.0;\n\nvec3 hitPoint(float hitAngle, float yc, vec3 point, mat3 rrotation)\n{\n        float hitPoint = hitAngle / (2.0 * PI);\n        point.y = hitPoint;\n        return rrotation * point;\n}\n\nvec4 antiAlias(vec4 color1, vec4 color2, float distanc)\n{\n        distanc *= scale;\n        if (distanc < 0.0) return color2;\n        if (distanc > 2.0) return color1;\n        float dd = pow(1.0 - distanc / 2.0, sharpness);\n        return ((color2 - color1) * dd) + color1;\n}\n\nfloat distanceToEdge(vec3 point)\n{\n        float dx = abs(point.x > 0.5 ? 1.0 - point.x : point.x);\n        float dy = abs(point.y > 0.5 ? 1.0 - point.y : point.y);\n        if (point.x < 0.0) dx = -point.x;\n        if (point.x > 1.0) dx = point.x - 1.0;\n        if (point.y < 0.0) dy = -point.y;\n        if (point.y > 1.0) dy = point.y - 1.0;\n        if ((point.x < 0.0 || point.x > 1.0) && (point.y < 0.0 || point.y > 1.0)) return sqrt(dx * dx + dy * dy);\n        return min(dx, dy);\n}\n\nvec4 seeThrough(float yc, vec2 p, mat3 rotation, mat3 rrotation)\n{\n        float hitAngle = PI - (acos(yc / cylinderRadius) - cylinderAngle);\n        vec3 point = hitPoint(hitAngle, yc, rotation * vec3(p, 1.0), rrotation);\n        if (yc <= 0.0 && (point.x < 0.0 || point.y < 0.0 || point.x > 1.0 || point.y > 1.0))\n        {\n            return getToColor(p);\n        }\n\n        if (yc > 0.0) return getFromColor(p);\n\n        vec4 color = getFromColor(point.xy);\n        vec4 tcolor = vec4(0.0);\n\n        return antiAlias(color, tcolor, distanceToEdge(point));\n}\n\nvec4 seeThroughWithShadow(float yc, vec2 p, vec3 point, mat3 rotation, mat3 rrotation)\n{\n        float shadow = distanceToEdge(point) * 30.0;\n        shadow = (1.0 - shadow) / 3.0;\n\n        if (shadow < 0.0) shadow = 0.0; else shadow *= amount;\n\n        vec4 shadowColor = seeThrough(yc, p, rotation, rrotation);\n        shadowColor.r -= shadow;\n        shadowColor.g -= shadow;\n        shadowColor.b -= shadow;\n\n        return shadowColor;\n}\n\nvec4 backside(float yc, vec3 point)\n{\n        vec4 color = getFromColor(point.xy);\n        float gray = (color.r + color.b + color.g) / 15.0;\n        gray += (8.0 / 10.0) * (pow(1.0 - abs(yc / cylinderRadius), 2.0 / 10.0) / 2.0 + (5.0 / 10.0));\n        color.rgb = vec3(gray);\n        return color;\n}\n\nvec4 behindSurface(vec2 p, float yc, vec3 point, mat3 rrotation)\n{\n        float shado = (1.0 - ((-cylinderRadius - yc) / amount * 7.0)) / 6.0;\n        shado *= 1.0 - abs(point.x - 0.5);\n\n        yc = (-cylinderRadius - cylinderRadius - yc);\n\n        float hitAngle = (acos(yc / cylinderRadius) + cylinderAngle) - PI;\n        point = hitPoint(hitAngle, yc, point, rrotation);\n\n        if (yc < 0.0 && point.x >= 0.0 && point.y >= 0.0 && point.x <= 1.0 && point.y <= 1.0 && (hitAngle < PI || amount > 0.5))\n        {\n                shado = 1.0 - (sqrt(pow(point.x - 0.5, 2.0) + pow(point.y - 0.5, 2.0)) / (71.0 / 100.0));\n                shado *= pow(-yc / cylinderRadius, 3.0);\n                shado *= 0.5;\n        }\n        else\n        {\n                shado = 0.0;\n        }\n        return vec4(getToColor(p).rgb - shado, 1.0);\n}\n\nvec4 transition(vec2 p) {\n\n  const float angle = 100.0 * PI / 180.0;\n        float c = cos(-angle);\n        float s = sin(-angle);\n\n        mat3 rotation = mat3( c, s, 0,\n                                                                -s, c, 0,\n                                                                -0.801, 0.8900, 1\n                                                                );\n        c = cos(angle);\n        s = sin(angle);\n\n        mat3 rrotation = mat3(\tc, s, 0,\n                                                                        -s, c, 0,\n                                                                        0.98500, 0.985, 1\n                                                                );\n\n        vec3 point = rotation * vec3(p, 1.0);\n\n        float yc = point.y - cylinderCenter;\n\n        if (yc < -cylinderRadius)\n        {\n                // Behind surface\n                return behindSurface(p,yc, point, rrotation);\n        }\n\n        if (yc > cylinderRadius)\n        {\n                // Flat surface\n                return getFromColor(p);\n        }\n\n        float hitAngle = (acos(yc / cylinderRadius) + cylinderAngle) - PI;\n\n        float hitAngleMod = mod(hitAngle, 2.0 * PI);\n        if ((hitAngleMod > PI && amount < 0.5) || (hitAngleMod > PI/2.0 && amount < 0.0))\n        {\n                return seeThrough(yc, p, rotation, rrotation);\n        }\n\n        point = hitPoint(hitAngle, yc, point, rrotation);\n\n        if (point.x < 0.0 || point.y < 0.0 || point.x > 1.0 || point.y > 1.0)\n        {\n                return seeThroughWithShadow(yc, p, point, rotation, rrotation);\n        }\n\n        vec4 color = backside(yc, point);\n\n        vec4 otherColor;\n        if (yc < 0.0)\n        {\n                float shado = 1.0 - (sqrt(pow(point.x - 0.5, 2.0) + pow(point.y - 0.5, 2.0)) / 0.71);\n                shado *= pow(-yc / cylinderRadius, 3.0);\n                shado *= 0.5;\n                otherColor = vec4(0.0, 0.0, 0.0, shado);\n        }\n        else\n        {\n                otherColor = getFromColor(p);\n        }\n\n        color = antiAlias(color, otherColor, cylinderRadius - abs(yc));\n\n        vec4 cl = seeThroughWithShadow(yc, p, point, rotation, rrotation);\n        float dist = distanceToEdge(point);\n\n        return antiAlias(color, cl, dist);\n}\n","author":"Hewlett-Packard","license":"BSD 3 Clause","createdAt":"Wed, 21 Feb 2018 01:13:49 +0100","updatedAt":"Wed, 21 Feb 2018 16:00:02 +0100"},{"name":"LinearBlur","paramsTypes":{"intensity":"float"},"defaultParams":{"intensity":0.1},"glsl":"// author: gre\n// license: MIT\nuniform float intensity; // = 0.1\nconst int passes = 6;\n\nvec4 transition(vec2 uv) {\n    vec4 c1 = vec4(0.0);\n    vec4 c2 = vec4(0.0);\n\n    float disp = intensity*(0.5-distance(0.5, progress));\n    for (int xi=0; xi<passes; xi++)\n    {\n        float x = float(xi) / float(passes) - 0.5;\n        for (int yi=0; yi<passes; yi++)\n        {\n            float y = float(yi) / float(passes) - 0.5;\n            vec2 v = vec2(x,y);\n            float d = disp;\n            c1 += getFromColor( uv + d*v);\n            c2 += getToColor( uv + d*v);\n        }\n    }\n    c1 /= float(passes*passes);\n    c2 /= float(passes*passes);\n    return mix(c1, c2, progress);\n}\n","author":"gre","license":"MIT","createdAt":"Fri, 23 Feb 2018 15:18:22 +0100","updatedAt":"Fri, 23 Feb 2018 15:18:22 +0100"},{"name":"Mosaic","paramsTypes":{"endx":"int","endy":"int"},"defaultParams":{"endx":2,"endy":-1},"glsl":"// License: MIT\n// Author: Xaychru\n// ported by gre from https://gist.github.com/Xaychru/130bb7b7affedbda9df5\n\n#define PI 3.14159265358979323\n#define POW2(X) X*X\n#define POW3(X) X*X*X\nuniform int endx; // = 2\nuniform int endy; // = -1\n\nfloat Rand(vec2 v) {\n  return fract(sin(dot(v.xy ,vec2(12.9898,78.233))) * 43758.5453);\n}\nvec2 Rotate(vec2 v, float a) {\n  mat2 rm = mat2(cos(a), -sin(a),\n                 sin(a), cos(a));\n  return rm*v;\n}\nfloat CosInterpolation(float x) {\n  return -cos(x*PI)/2.+.5;\n}\nvec4 transition(vec2 uv) {\n  vec2 p = uv.xy / vec2(1.0).xy - .5;\n  vec2 rp = p;\n  float rpr = (progress*2.-1.);\n  float z = -(rpr*rpr*2.) + 3.;\n  float az = abs(z);\n  rp *= az;\n  rp += mix(vec2(.5, .5), vec2(float(endx) + .5, float(endy) + .5), POW2(CosInterpolation(progress)));\n  vec2 mrp = mod(rp, 1.);\n  vec2 crp = rp;\n  bool onEnd = int(floor(crp.x))==endx&&int(floor(crp.y))==endy;\n  if(!onEnd) {\n    float ang = float(int(Rand(floor(crp))*4.))*.5*PI;\n    mrp = vec2(.5) + Rotate(mrp-vec2(.5), ang);\n  }\n  if(onEnd || Rand(floor(crp))>.5) {\n    return getToColor(mrp);\n  } else {\n    return getFromColor(mrp);\n  }\n}\n","license":"MIT","author":"Xaychru","createdAt":"Mon, 12 Jun 2017 10:26:51 +0800","updatedAt":"Mon, 12 Jun 2017 10:26:51 +0800"},{"name":"PolkaDotsCurtain","paramsTypes":{"dots":"float","center":"vec2"},"defaultParams":{"dots":20,"center":[0,0]},"glsl":"// author: bobylito\n// license: MIT\nconst float SQRT_2 = 1.414213562373;\nuniform float dots;// = 20.0;\nuniform vec2 center;// = vec2(0, 0);\n\nvec4 transition(vec2 uv) {\n  bool nextImage = distance(fract(uv * dots), vec2(0.5, 0.5)) < ( progress / distance(uv, center));\n  return nextImage ? getToColor(uv) : getFromColor(uv);\n}\n","author":"bobylito","license":"MIT","createdAt":"Tue, 20 Feb 2018 23:41:45 +0100","updatedAt":"Tue, 20 Feb 2018 23:41:45 +0100"},{"name":"Radial","paramsTypes":{"smoothness":"float"},"defaultParams":{"smoothness":1},"glsl":"// License: MIT\n// Author: Xaychru\n// ported by gre from https://gist.github.com/Xaychru/ce1d48f0ce00bb379750\n\nuniform float smoothness; // = 1.0\n\nconst float PI = 3.141592653589;\n\nvec4 transition(vec2 p) {\n  vec2 rp = p*2.-1.;\n  return mix(\n    getToColor(p),\n    getFromColor(p),\n    smoothstep(0., smoothness, atan(rp.y,rp.x) - (progress-.5) * PI * 2.5)\n  );\n}\n","license":"MIT","author":"Xaychru","createdAt":"Mon, 12 Jun 2017 10:36:24 +0800","updatedAt":"Mon, 12 Jun 2017 10:36:24 +0800"},{"name":"SimpleZoom","paramsTypes":{"zoom_quickness":"float"},"defaultParams":{"zoom_quickness":0.8},"glsl":"// Author: 0gust1\n// License: MIT\n\nuniform float zoom_quickness; // = 0.8\nfloat nQuick = clamp(zoom_quickness,0.2,1.0);\n\nvec2 zoom(vec2 uv, float amount) {\n  return 0.5 + ((uv - 0.5) * (1.0-amount));\t\n}\n\nvec4 transition (vec2 uv) {\n  return mix(\n    getFromColor(zoom(uv, smoothstep(0.0, nQuick, progress))),\n    getToColor(uv),\n   smoothstep(nQuick-0.2, 1.0, progress)\n  );\n}","author":"0gust1","license":"MIT","createdAt":"Tue, 6 Mar 2018 00:43:47 +0100","updatedAt":"Tue, 6 Mar 2018 00:43:47 +0100"},{"name":"StereoViewer","paramsTypes":{"zoom":"float","corner_radius":"float"},"defaultParams":{"zoom":0.88,"corner_radius":0.22},"glsl":"// Tunable parameters\n// How much to zoom (out) for the effect ~ 0.5 - 1.0\nuniform float zoom; // = 0.88\n// Corner radius as a fraction of the image height\nuniform float corner_radius;  // = 0.22\n\n// author: Ted Schundler\n// license: BSD 2 Clause\n// Free for use and modification by anyone with credit\n\n// Copyright (c) 2016, Theodore K Schundler\n// All rights reserved.\n\n// Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:\n\n// 1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.\n\n// 2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.\n\n// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS \"AS IS\" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n\n///////////////////////////////////////////////////////////////////////////////\n// Stereo Viewer Toy Transition                                              //\n//                                                                           //\n// Inspired by ViewMaster / Image3D image viewer devices.                    //\n// This effect is similar to what you see when you press the device's lever. //\n// There is a quick zoom in / out to make the transition 'valid' for GLSL.io //\n///////////////////////////////////////////////////////////////////////////////\n\nconst vec4 black = vec4(0.0, 0.0, 0.0, 1.0);\nconst vec2 c00 = vec2(0.0, 0.0); // the four corner points\nconst vec2 c01 = vec2(0.0, 1.0);\nconst vec2 c11 = vec2(1.0, 1.0);\nconst vec2 c10 = vec2(1.0, 0.0);\n\n// Check if a point is within a given corner\nbool in_corner(vec2 p, vec2 corner, vec2 radius) {\n  // determine the direction we want to be filled\n  vec2 axis = (c11 - corner) - corner;\n\n  // warp the point so we are always testing the bottom left point with the\n  // circle centered on the origin\n  p = p - (corner + axis * radius);\n  p *= axis / radius;\n  return (p.x > 0.0 && p.y > -1.0) || (p.y > 0.0 && p.x > -1.0) || dot(p, p) < 1.0;\n}\n\n// Check all four corners\n// return a float for v2 for anti-aliasing?\nbool test_rounded_mask(vec2 p, vec2 corner_size) {\n  return\n      in_corner(p, c00, corner_size) &&\n      in_corner(p, c01, corner_size) &&\n      in_corner(p, c10, corner_size) &&\n      in_corner(p, c11, corner_size);\n}\n\n// Screen blend mode - https://en.wikipedia.org/wiki/Blend_modes\n// This more closely approximates what you see than linear blending\nvec4 screen(vec4 a, vec4 b) {\n  return 1.0 - (1.0 - a) * (1.0 -b);\n}\n\n// Given RGBA, find a value that when screened with itself\n// will yield the original value.\nvec4 unscreen(vec4 c) {\n  return 1.0 - sqrt(1.0 - c);\n}\n\n// Grab a pixel, only if it isn't masked out by the rounded corners\nvec4 sample_with_corners_from(vec2 p, vec2 corner_size) {\n  p = (p - 0.5) / zoom + 0.5;\n  if (!test_rounded_mask(p, corner_size)) {\n    return black;\n  }\n  return unscreen(getFromColor(p));\n}\n\nvec4 sample_with_corners_to(vec2 p, vec2 corner_size) {\n  p = (p - 0.5) / zoom + 0.5;\n  if (!test_rounded_mask(p, corner_size)) {\n    return black;\n  }\n  return unscreen(getToColor(p));\n}\n\n// special sampling used when zooming - extra zoom parameter and don't unscreen\nvec4 simple_sample_with_corners_from(vec2 p, vec2 corner_size, float zoom_amt) {\n  p = (p - 0.5) / (1.0 - zoom_amt + zoom * zoom_amt) + 0.5;\n  if (!test_rounded_mask(p, corner_size)) {\n    return black;\n  }\n  return getFromColor(p);\n}\n\nvec4 simple_sample_with_corners_to(vec2 p, vec2 corner_size, float zoom_amt) {\n  p = (p - 0.5) / (1.0 - zoom_amt + zoom * zoom_amt) + 0.5;\n  if (!test_rounded_mask(p, corner_size)) {\n    return black;\n  }\n  return getToColor(p);\n}\n\n// Basic 2D affine transform matrix helpers\n// These really shouldn't be used in a fragment shader - I should work out the\n// the math for a translate & rotate function as a pair of dot products instead\n\nmat3 rotate2d(float angle, float ratio) {\n  float s = sin(angle);\n  float c = cos(angle);\n  return mat3(\n    c, s ,0.0,\n    -s, c, 0.0,\n    0.0, 0.0, 1.0);\n}\n\nmat3 translate2d(float x, float y) {\n  return mat3(\n    1.0, 0.0, 0,\n    0.0, 1.0, 0,\n    -x, -y, 1.0);\n}\n\nmat3 scale2d(float x, float y) {\n  return mat3(\n    x, 0.0, 0,\n    0.0, y, 0,\n    0, 0, 1.0);\n}\n\n// Split an image and rotate one up and one down along off screen pivot points\nvec4 get_cross_rotated(vec3 p3, float angle, vec2 corner_size, float ratio) {\n  angle = angle * angle; // easing\n  angle /= 2.4; // works out to be a good number of radians\n\n  mat3 center_and_scale = translate2d(-0.5, -0.5) * scale2d(1.0, ratio);\n  mat3 unscale_and_uncenter = scale2d(1.0, 1.0/ratio) * translate2d(0.5,0.5);\n  mat3 slide_left = translate2d(-2.0,0.0);\n  mat3 slide_right = translate2d(2.0,0.0);\n  mat3 rotate = rotate2d(angle, ratio);\n\n  mat3 op_a = center_and_scale * slide_right * rotate * slide_left * unscale_and_uncenter;\n  mat3 op_b = center_and_scale * slide_left * rotate * slide_right * unscale_and_uncenter;\n\n  vec4 a = sample_with_corners_from((op_a * p3).xy, corner_size);\n  vec4 b = sample_with_corners_from((op_b * p3).xy, corner_size);\n\n  return screen(a, b);\n}\n\n// Image stays put, but this time move two masks\nvec4 get_cross_masked(vec3 p3, float angle, vec2 corner_size, float ratio) {\n  angle = 1.0 - angle;\n  angle = angle * angle; // easing\n  angle /= 2.4;\n\n  vec4 img;\n\n  mat3 center_and_scale = translate2d(-0.5, -0.5) * scale2d(1.0, ratio);\n  mat3 unscale_and_uncenter = scale2d(1.0 / zoom, 1.0 / (zoom * ratio)) * translate2d(0.5,0.5);\n  mat3 slide_left = translate2d(-2.0,0.0);\n  mat3 slide_right = translate2d(2.0,0.0);\n  mat3 rotate = rotate2d(angle, ratio);\n\n  mat3 op_a = center_and_scale * slide_right * rotate * slide_left * unscale_and_uncenter;\n  mat3 op_b = center_and_scale * slide_left * rotate * slide_right * unscale_and_uncenter;\n\n  bool mask_a = test_rounded_mask((op_a * p3).xy, corner_size);\n  bool mask_b = test_rounded_mask((op_b * p3).xy, corner_size);\n\n  if (mask_a || mask_b) {\n    img = sample_with_corners_to(p3.xy, corner_size);\n    return screen(mask_a ? img : black, mask_b ? img : black);\n  } else {\n    return black;\n  }\n}\n\nvec4 transition(vec2 uv) {\n  float a;\n  vec2 p=uv.xy/vec2(1.0).xy;\n  vec3 p3 = vec3(p.xy, 1.0); // for 2D matrix transforms\n\n  // corner is warped to represent to size after mapping to 1.0, 1.0\n  vec2 corner_size = vec2(corner_radius / ratio, corner_radius);\n\n  if (progress <= 0.0) {\n    // 0.0: start with the base frame always\n    return getFromColor(p);\n  } else if (progress < 0.1) {\n    // 0.0-0.1: zoom out and add rounded corners\n    a = progress / 0.1;\n    return  simple_sample_with_corners_from(p, corner_size * a, a);\n  } else if (progress < 0.48) {\n    // 0.1-0.48: Split original image apart\n    a = (progress - 0.1)/0.38;\n    return get_cross_rotated(p3, a, corner_size, ratio);\n  } else if (progress < 0.9) {\n    // 0.48-0.52: black\n    // 0.52 - 0.9: unmask new image\n    return get_cross_masked(p3, (progress - 0.52)/0.38, corner_size, ratio);\n  } else if (progress < 1.0) {\n    // zoom out and add rounded corners\n    a = (1.0 - progress) / 0.1;\n    return simple_sample_with_corners_to(p, corner_size * a, a);\n  } else {\n    // 1.0 end with base frame\n    return getToColor(p);\n  }\n}\n","author":"Ted Schundler","license":"BSD 2 Clause","createdAt":"Tue, 20 Feb 2018 23:20:29 +0100","updatedAt":"Wed, 21 Feb 2018 15:42:00 +0100"},{"name":"Swirl","paramsTypes":{},"defaultParams":{},"glsl":"// License: MIT\n// Author: Sergey Kosarevsky\n// ( http://www.linderdaum.com )\n// ported by gre from https://gist.github.com/corporateshark/cacfedb8cca0f5ce3f7c\n\nvec4 transition(vec2 UV)\n{\n\tfloat Radius = 1.0;\n\n\tfloat T = progress;\n\n\tUV -= vec2( 0.5, 0.5 );\n\n\tfloat Dist = length(UV);\n\n\tif ( Dist < Radius )\n\t{\n\t\tfloat Percent = (Radius - Dist) / Radius;\n\t\tfloat A = ( T <= 0.5 ) ? mix( 0.0, 1.0, T/0.5 ) : mix( 1.0, 0.0, (T-0.5)/0.5 );\n\t\tfloat Theta = Percent * Percent * A * 8.0 * 3.14159;\n\t\tfloat S = sin( Theta );\n\t\tfloat C = cos( Theta );\n\t\tUV = vec2( dot(UV, vec2(C, -S)), dot(UV, vec2(S, C)) );\n\t}\n\tUV += vec2( 0.5, 0.5 );\n\n\tvec4 C0 = getFromColor(UV);\n\tvec4 C1 = getToColor(UV);\n\n\treturn mix( C0, C1, T );\n}\n","license":"MIT","author":"Sergey Kosarevsky","createdAt":"Mon, 12 Jun 2017 12:38:27 +0800","updatedAt":"Mon, 12 Jun 2017 12:38:27 +0800"},{"name":"WaterDrop","paramsTypes":{"amplitude":"float","speed":"float"},"defaultParams":{"amplitude":30,"speed":30},"glsl":"// author: Paweł Płóciennik\n// license: MIT\nuniform float amplitude; // = 30\nuniform float speed; // = 30\n\nvec4 transition(vec2 p) {\n  vec2 dir = p - vec2(.5);\n  float dist = length(dir);\n\n  if (dist > progress) {\n    return mix(getFromColor( p), getToColor( p), progress);\n  } else {\n    vec2 offset = dir * sin(dist * amplitude - progress * speed);\n    return mix(getFromColor( p + offset), getToColor( p), progress);\n  }\n}\n","author":"Paweł Płóciennik","license":"MIT","createdAt":"Wed, 21 Feb 2018 19:37:15 +0100","updatedAt":"Wed, 21 Feb 2018 19:37:15 +0100"},{"name":"ZoomInCircles","paramsTypes":{},"defaultParams":{},"glsl":"// License: MIT\n// Author: dycm8009\n// ported by gre from https://gist.github.com/dycm8009/948e99b1800e81ad909a\n\nvec2 zoom(vec2 uv, float amount) {\n  return 0.5 + ((uv - 0.5) * amount);\t\n}\n\nvec2 ratio2 = vec2(1.0, 1.0 / ratio);\n\nvec4 transition(vec2 uv) {\n  // TODO: some timing are hardcoded but should be one or many parameters\n  // TODO: should also be able to configure how much circles\n  // TODO: if() branching should be avoided when possible, prefer use of step() & other functions\n  vec2 r = 2.0 * ((vec2(uv.xy) - 0.5) * ratio2);\n  float pro = progress / 0.8;\n  float z = pro * 0.2;\n  float t = 0.0;\n  if (pro > 1.0) {\n    z = 0.2 + (pro - 1.0) * 5.;\n    t = clamp((progress - 0.8) / 0.07, 0.0, 1.0);\n  }\n  if (length(r) < 0.5+z) {\n    // uv = zoom(uv, 0.9 - 0.1 * pro);\n  }\n  else if (length(r) < 0.8+z*1.5) {\n    uv = zoom(uv, 1.0 - 0.15 * pro);\n    t = t * 0.5;\n  }\n  else if (length(r) < 1.2+z*2.5) {\n    uv = zoom(uv, 1.0 - 0.2 * pro);\n    t = t * 0.2;\n  }\n  else {\n    uv = zoom(uv, 1.0 - 0.25 * pro);\n  }\n  return mix(getFromColor(uv), getToColor(uv), t);\n}\n","license":"MIT","author":"dycm8009","createdAt":"Mon, 12 Jun 2017 11:24:34 +0800","updatedAt":"Mon, 12 Jun 2017 11:24:34 +0800"},{"name":"angular","paramsTypes":{"startingAngle":"float"},"defaultParams":{"startingAngle":90},"glsl":"// Author: Fernando Kuteken\n// License: MIT\n\n#define PI 3.141592653589\n\nuniform float startingAngle; // = 90;\n\nvec4 transition (vec2 uv) {\n  \n  float offset = startingAngle * PI / 180.0;\n  float angle = atan(uv.y - 0.5, uv.x - 0.5) + offset;\n  float normalizedAngle = (angle + PI) / (2.0 * PI);\n  \n  normalizedAngle = normalizedAngle - floor(normalizedAngle);\n\n  return mix(\n    getFromColor(uv),\n    getToColor(uv),\n    step(normalizedAngle, progress)\n    );\n}\n","author":"Fernando Kuteken","license":"MIT","createdAt":"Tue, 30 May 2017 14:26:44 +0200","updatedAt":"Tue, 30 May 2017 14:26:44 +0200"},{"name":"burn","paramsTypes":{"color":"vec3"},"defaultParams":{"color":[0.9,0.4,0.2]},"glsl":"// author: gre\n// License: MIT\nuniform vec3 color /* = vec3(0.9, 0.4, 0.2) */;\nvec4 transition (vec2 uv) {\n  return mix(\n    getFromColor(uv) + vec4(progress*color, 1.0),\n    getToColor(uv) + vec4((1.0-progress)*color, 1.0),\n    progress\n  );\n}\n","author":"gre","license":"MIT","createdAt":"Tue, 30 May 2017 14:26:44 +0200","updatedAt":"Tue, 30 May 2017 14:26:44 +0200"},{"name":"cannabisleaf","paramsTypes":{},"defaultParams":{},"glsl":"// Author: @Flexi23\n// License: MIT\n\n// inspired by http://www.wolframalpha.com/input/?i=cannabis+curve\n\nvec4 transition (vec2 uv) {\n  if(progress == 0.0){\n    return getFromColor(uv);\n  }\n  vec2 leaf_uv = (uv - vec2(0.5))/10./pow(progress,3.5);\n\tleaf_uv.y += 0.35;\n\tfloat r = 0.18;\n\tfloat o = atan(leaf_uv.y, leaf_uv.x);\n  return mix(getFromColor(uv), getToColor(uv), 1.-step(1. - length(leaf_uv)+r*(1.+sin(o))*(1.+0.9 * cos(8.*o))*(1.+0.1*cos(24.*o))*(0.9+0.05*cos(200.*o)), 1.));\n}\n","author":"@Flexi23","license":"MIT","createdAt":"Thu, 1 Jun 2017 15:58:58 +0200","updatedAt":"Thu, 1 Jun 2017 15:58:58 +0200"},{"name":"circle","paramsTypes":{"center":"vec2","backColor":"vec3"},"defaultParams":{"center":[0.5,0.5],"backColor":[0.1,0.1,0.1]},"glsl":"// Author: Fernando Kuteken\n// License: MIT\n\nuniform vec2 center; // = vec2(0.5, 0.5);\nuniform vec3 backColor; // = vec3(0.1, 0.1, 0.1);\n\nvec4 transition (vec2 uv) {\n  \n  float distance = length(uv - center);\n  float radius = sqrt(8.0) * abs(progress - 0.5);\n  \n  if (distance > radius) {\n    return vec4(backColor, 1.0);\n  }\n  else {\n    if (progress < 0.5) return getFromColor(uv);\n    else return getToColor(uv);\n  }\n}\n","author":"Fernando Kuteken","license":"MIT","createdAt":"Tue, 30 May 2017 14:26:44 +0200","updatedAt":"Tue, 30 May 2017 14:26:44 +0200"},{"name":"circleopen","paramsTypes":{"smoothness":"float","opening":"bool"},"defaultParams":{"smoothness":0.3,"opening":true},"glsl":"// author: gre\n// License: MIT\nuniform float smoothness; // = 0.3\nuniform bool opening; // = true\n\nconst vec2 center = vec2(0.5, 0.5);\nconst float SQRT_2 = 1.414213562373;\n\nvec4 transition (vec2 uv) {\n  float x = opening ? progress : 1.-progress;\n  float m = smoothstep(-smoothness, 0.0, SQRT_2*distance(center, uv) - x*(1.+smoothness));\n  return mix(getFromColor(uv), getToColor(uv), opening ? 1.-m : m);\n}\n","author":"gre","license":"MIT","createdAt":"Tue, 30 May 2017 14:26:44 +0200","updatedAt":"Tue, 30 May 2017 14:26:44 +0200"},{"name":"colorphase","paramsTypes":{"fromStep":"vec4","toStep":"vec4"},"defaultParams":{"fromStep":[0,0.2,0.4,0],"toStep":[0.6,0.8,1,1]},"glsl":"// Author: gre\n// License: MIT\n\n// Usage: fromStep and toStep must be in [0.0, 1.0] range \n// and all(fromStep) must be < all(toStep)\n\nuniform vec4 fromStep; // = vec4(0.0, 0.2, 0.4, 0.0)\nuniform vec4 toStep; // = vec4(0.6, 0.8, 1.0, 1.0)\n\nvec4 transition (vec2 uv) {\n  vec4 a = getFromColor(uv);\n  vec4 b = getToColor(uv);\n  return mix(a, b, smoothstep(fromStep, toStep, vec4(progress)));\n}\n","author":"gre","license":"MIT","createdAt":"Tue, 30 May 2017 14:26:44 +0200","updatedAt":"Tue, 30 May 2017 14:26:44 +0200"},{"name":"crosshatch","paramsTypes":{"center":"vec2","threshold":"float","fadeEdge":"float"},"defaultParams":{"center":[0.5,0.5],"threshold":3,"fadeEdge":0.1},"glsl":"// License: MIT\n// Author: pthrasher\n// adapted by gre from https://gist.github.com/pthrasher/04fd9a7de4012cbb03f6\n\nuniform vec2 center; // = vec2(0.5)\nuniform float threshold; // = 3.0\nuniform float fadeEdge; // = 0.1\n\nfloat rand(vec2 co) {\n  return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\n}\nvec4 transition(vec2 p) {\n  float dist = distance(center, p) / threshold;\n  float r = progress - min(rand(vec2(p.y, 0.0)), rand(vec2(0.0, p.x)));\n  return mix(getFromColor(p), getToColor(p), mix(0.0, mix(step(dist, r), 1.0, smoothstep(1.0-fadeEdge, 1.0, progress)), smoothstep(0.0, fadeEdge, progress)));    \n}\n","license":"MIT","author":"pthrasher","createdAt":"Mon, 12 Jun 2017 10:02:12 +0800","updatedAt":"Mon, 12 Jun 2017 10:02:12 +0800"},{"name":"crosswarp","paramsTypes":{},"defaultParams":{},"glsl":"// Author: Eke Péter <peterekepeter@gmail.com>\n// License: MIT\nvec4 transition(vec2 p) {\n  float x = progress;\n  x=smoothstep(.0,1.0,(x*2.0+p.x-1.0));\n  return mix(getFromColor((p-.5)*(1.-x)+.5), getToColor((p-.5)*x+.5), x);\n}\n","author":"Eke Péter <peterekepeter@gmail.com>","license":"MIT","createdAt":"Tue, 30 May 2017 14:26:44 +0200","updatedAt":"Tue, 30 May 2017 14:26:44 +0200"},{"name":"cube","paramsTypes":{"persp":"float","unzoom":"float","reflection":"float","floating":"float"},"defaultParams":{"persp":0.7,"unzoom":0.3,"reflection":0.4,"floating":3},"glsl":"// Author: gre\n// License: MIT\nuniform float persp; // = 0.7\nuniform float unzoom; // = 0.3\nuniform float reflection; // = 0.4\nuniform float floating; // = 3.0\n\nvec2 project (vec2 p) {\n  return p * vec2(1.0, -1.2) + vec2(0.0, -floating/100.);\n}\n\nbool inBounds (vec2 p) {\n  return all(lessThan(vec2(0.0), p)) && all(lessThan(p, vec2(1.0)));\n}\n\nvec4 bgColor (vec2 p, vec2 pfr, vec2 pto) {\n  vec4 c = vec4(0.0, 0.0, 0.0, 1.0);\n  pfr = project(pfr);\n  // FIXME avoid branching might help perf!\n  if (inBounds(pfr)) {\n    c += mix(vec4(0.0), getFromColor(pfr), reflection * mix(1.0, 0.0, pfr.y));\n  }\n  pto = project(pto);\n  if (inBounds(pto)) {\n    c += mix(vec4(0.0), getToColor(pto), reflection * mix(1.0, 0.0, pto.y));\n  }\n  return c;\n}\n\n// p : the position\n// persp : the perspective in [ 0, 1 ]\n// center : the xcenter in [0, 1] \\ 0.5 excluded\nvec2 xskew (vec2 p, float persp, float center) {\n  float x = mix(p.x, 1.0-p.x, center);\n  return (\n    (\n      vec2( x, (p.y - 0.5*(1.0-persp) * x) / (1.0+(persp-1.0)*x) )\n      - vec2(0.5-distance(center, 0.5), 0.0)\n    )\n    * vec2(0.5 / distance(center, 0.5) * (center<0.5 ? 1.0 : -1.0), 1.0)\n    + vec2(center<0.5 ? 0.0 : 1.0, 0.0)\n  );\n}\n\nvec4 transition(vec2 op) {\n  float uz = unzoom * 2.0*(0.5-distance(0.5, progress));\n  vec2 p = -uz*0.5+(1.0+uz) * op;\n  vec2 fromP = xskew(\n    (p - vec2(progress, 0.0)) / vec2(1.0-progress, 1.0),\n    1.0-mix(progress, 0.0, persp),\n    0.0\n  );\n  vec2 toP = xskew(\n    p / vec2(progress, 1.0),\n    mix(pow(progress, 2.0), 1.0, persp),\n    1.0\n  );\n  // FIXME avoid branching might help perf!\n  if (inBounds(fromP)) {\n    return getFromColor(fromP);\n  }\n  else if (inBounds(toP)) {\n    return getToColor(toP);\n  }\n  return bgColor(op, fromP, toP);\n}\n","author":"gre","license":"MIT","createdAt":"Tue, 30 May 2017 14:26:44 +0200","updatedAt":"Tue, 30 May 2017 14:26:44 +0200"},{"name":"directionalwarp","paramsTypes":{"direction":"vec2"},"defaultParams":{"direction":[-1,1]},"glsl":"// Author: pschroen\n// License: MIT\n\nuniform vec2 direction; // = vec2(-1.0, 1.0)\n\nconst float smoothness = 0.5;\nconst vec2 center = vec2(0.5, 0.5);\n\nvec4 transition (vec2 uv) {\n  vec2 v = normalize(direction);\n  v /= abs(v.x) + abs(v.y);\n  float d = v.x * center.x + v.y * center.y;\n  float m = 1.0 - smoothstep(-smoothness, 0.0, v.x * uv.x + v.y * uv.y - (d - 0.5 + progress * (1.0 + smoothness)));\n  return mix(getFromColor((uv - 0.5) * (1.0 - m) + 0.5), getToColor((uv - 0.5) * m + 0.5), m);\n}\n","author":"pschroen","license":"MIT","createdAt":"Wed, 13 Dec 2017 12:08:49 -0500","updatedAt":"Wed, 13 Dec 2017 12:08:49 -0500"},{"name":"directionalwipe","paramsTypes":{"direction":"vec2","smoothness":"float"},"defaultParams":{"direction":[1,-1],"smoothness":0.5},"glsl":"// Author: gre\n// License: MIT\n\nuniform vec2 direction; // = vec2(1.0, -1.0)\nuniform float smoothness; // = 0.5\n \nconst vec2 center = vec2(0.5, 0.5);\n \nvec4 transition (vec2 uv) {\n  vec2 v = normalize(direction);\n  v /= abs(v.x)+abs(v.y);\n  float d = v.x * center.x + v.y * center.y;\n  float m =\n    (1.0-step(progress, 0.0)) * // there is something wrong with our formula that makes m not equals 0.0 with progress is 0.0\n    (1.0 - smoothstep(-smoothness, 0.0, v.x * uv.x + v.y * uv.y - (d-0.5+progress*(1.+smoothness))));\n  return mix(getFromColor(uv), getToColor(uv), m);\n}\n","author":"gre","license":"MIT","createdAt":"Tue, 30 May 2017 14:26:44 +0200","updatedAt":"Tue, 30 May 2017 14:26:44 +0200"},{"name":"displacement","paramsTypes":{"displacementMap":"sampler2D","strength":"float"},"defaultParams":{"displacementMap":null,"strength":0.5},"glsl":"// Author: Travis Fischer\n// License: MIT\n//\n// Adapted from a Codrops article by Robin Delaporte\n// https://tympanus.net/Development/DistortionHoverEffect\n\nuniform sampler2D displacementMap;\n\nuniform float strength; // = 0.5\n\nvec4 transition (vec2 uv) {\n  float displacement = texture2D(displacementMap, uv).r * strength;\n\n  vec2 uvFrom = vec2(uv.x + progress * displacement, uv.y);\n  vec2 uvTo = vec2(uv.x - (1.0 - progress) * displacement, uv.y);\n\n  return mix(\n    getFromColor(uvFrom),\n    getToColor(uvTo),\n    progress\n  );\n}\n","author":"Travis Fischer","license":"MIT","createdAt":"Tue, 10 Apr 2018 23:03:38 -0400","updatedAt":"Tue, 10 Apr 2018 23:03:38 -0400"},{"name":"doorway","paramsTypes":{"reflection":"float","perspective":"float","depth":"float"},"defaultParams":{"reflection":0.4,"perspective":0.4,"depth":3},"glsl":"// author: gre\n// License: MIT \nuniform float reflection; // = 0.4\nuniform float perspective; // = 0.4\nuniform float depth; // = 3\n\nconst vec4 black = vec4(0.0, 0.0, 0.0, 1.0);\nconst vec2 boundMin = vec2(0.0, 0.0);\nconst vec2 boundMax = vec2(1.0, 1.0);\n\nbool inBounds (vec2 p) {\n  return all(lessThan(boundMin, p)) && all(lessThan(p, boundMax));\n}\n\nvec2 project (vec2 p) {\n  return p * vec2(1.0, -1.2) + vec2(0.0, -0.02);\n}\n\nvec4 bgColor (vec2 p, vec2 pto) {\n  vec4 c = black;\n  pto = project(pto);\n  if (inBounds(pto)) {\n    c += mix(black, getToColor(pto), reflection * mix(1.0, 0.0, pto.y));\n  }\n  return c;\n}\n\n\nvec4 transition (vec2 p) {\n  vec2 pfr = vec2(-1.), pto = vec2(-1.);\n  float middleSlit = 2.0 * abs(p.x-0.5) - progress;\n  if (middleSlit > 0.0) {\n    pfr = p + (p.x > 0.5 ? -1.0 : 1.0) * vec2(0.5*progress, 0.0);\n    float d = 1.0/(1.0+perspective*progress*(1.0-middleSlit));\n    pfr.y -= d/2.;\n    pfr.y *= d;\n    pfr.y += d/2.;\n  }\n  float size = mix(1.0, depth, 1.-progress);\n  pto = (p + vec2(-0.5, -0.5)) * vec2(size, size) + vec2(0.5, 0.5);\n  if (inBounds(pfr)) {\n    return getFromColor(pfr);\n  }\n  else if (inBounds(pto)) {\n    return getToColor(pto);\n  }\n  else {\n    return bgColor(p, pto);\n  }\n}\n","author":"gre","license":"MIT","createdAt":"Tue, 30 May 2017 14:26:44 +0200","updatedAt":"Tue, 30 May 2017 14:26:44 +0200"},{"name":"fade","paramsTypes":{},"defaultParams":{},"glsl":"// author: gre\n// license: MIT\n\nvec4 transition (vec2 uv) {\n  return mix(\n    getFromColor(uv),\n    getToColor(uv),\n    progress\n  );\n}\n","author":"gre","license":"MIT","createdAt":"Tue, 30 May 2017 14:26:44 +0200","updatedAt":"Tue, 30 May 2017 14:26:44 +0200"},{"name":"fadecolor","paramsTypes":{"color":"vec3","colorPhase":"float"},"defaultParams":{"color":[0,0,0],"colorPhase":0.4},"glsl":"// author: gre\n// License: MIT\nuniform vec3 color;// = vec3(0.0)\nuniform float colorPhase/* = 0.4 */; // if 0.0, there is no black phase, if 0.9, the black phase is very important\nvec4 transition (vec2 uv) {\n  return mix(\n    mix(vec4(color, 1.0), getFromColor(uv), smoothstep(1.0-colorPhase, 0.0, progress)),\n    mix(vec4(color, 1.0), getToColor(uv), smoothstep(    colorPhase, 1.0, progress)),\n    progress);\n}\n","author":"gre","license":"MIT","createdAt":"Tue, 30 May 2017 14:26:44 +0200","updatedAt":"Tue, 30 May 2017 14:26:44 +0200"},{"name":"fadegrayscale","paramsTypes":{"intensity":"float"},"defaultParams":{"intensity":0.3},"glsl":"// Author: gre\n// License: MIT\n\nuniform float intensity; // = 0.3; // if 0.0, the image directly turn grayscale, if 0.9, the grayscale transition phase is very important\n \nvec3 grayscale (vec3 color) {\n  return vec3(0.2126*color.r + 0.7152*color.g + 0.0722*color.b);\n}\n \nvec4 transition (vec2 uv) {\n  vec4 fc = getFromColor(uv);\n  vec4 tc = getToColor(uv);\n  return mix(\n    mix(vec4(grayscale(fc.rgb), 1.0), fc, smoothstep(1.0-intensity, 0.0, progress)),\n    mix(vec4(grayscale(tc.rgb), 1.0), tc, smoothstep(    intensity, 1.0, progress)),\n    progress);\n}\n","author":"gre","license":"MIT","createdAt":"Tue, 30 May 2017 14:26:44 +0200","updatedAt":"Tue, 30 May 2017 14:26:44 +0200"},{"name":"flyeye","paramsTypes":{"size":"float","zoom":"float","colorSeparation":"float"},"defaultParams":{"size":0.04,"zoom":50,"colorSeparation":0.3},"glsl":"// Author: gre\n// License: MIT\nuniform float size; // = 0.04\nuniform float zoom; // = 50.0\nuniform float colorSeparation; // = 0.3\n\nvec4 transition(vec2 p) {\n  float inv = 1. - progress;\n  vec2 disp = size*vec2(cos(zoom*p.x), sin(zoom*p.y));\n  vec4 texTo = getToColor(p + inv*disp);\n  vec4 texFrom = vec4(\n    getFromColor(p + progress*disp*(1.0 - colorSeparation)).r,\n    getFromColor(p + progress*disp).g,\n    getFromColor(p + progress*disp*(1.0 + colorSeparation)).b,\n    1.0);\n  return texTo*progress + texFrom*inv;\n}\n","author":"gre","license":"MIT","createdAt":"Tue, 30 May 2017 14:26:44 +0200","updatedAt":"Tue, 30 May 2017 14:26:44 +0200"},{"name":"heart","paramsTypes":{},"defaultParams":{},"glsl":"// Author: gre\n// License: MIT\n\nfloat inHeart (vec2 p, vec2 center, float size) {\n  if (size==0.0) return 0.0;\n  vec2 o = (p-center)/(1.6*size);\n  float a = o.x*o.x+o.y*o.y-0.3;\n  return step(a*a*a, o.x*o.x*o.y*o.y*o.y);\n}\nvec4 transition (vec2 uv) {\n  return mix(\n    getFromColor(uv),\n    getToColor(uv),\n    inHeart(uv, vec2(0.5, 0.4), progress)\n  );\n}\n","author":"gre","license":"MIT","createdAt":"Tue, 30 May 2017 14:26:44 +0200","updatedAt":"Tue, 30 May 2017 14:26:44 +0200"},{"name":"hexagonalize","paramsTypes":{"steps":"int","horizontalHexagons":"float"},"defaultParams":{"steps":50,"horizontalHexagons":20},"glsl":"// Author: Fernando Kuteken\n// License: MIT\n// Hexagonal math from: http://www.redblobgames.com/grids/hexagons/\n\nuniform int steps; // = 50;\nuniform float horizontalHexagons; //= 20;\n\nstruct Hexagon {\n  float q;\n  float r;\n  float s;\n};\n\nHexagon createHexagon(float q, float r){\n  Hexagon hex;\n  hex.q = q;\n  hex.r = r;\n  hex.s = -q - r;\n  return hex;\n}\n\nHexagon roundHexagon(Hexagon hex){\n  \n  float q = floor(hex.q + 0.5);\n  float r = floor(hex.r + 0.5);\n  float s = floor(hex.s + 0.5);\n\n  float deltaQ = abs(q - hex.q);\n  float deltaR = abs(r - hex.r);\n  float deltaS = abs(s - hex.s);\n\n  if (deltaQ > deltaR && deltaQ > deltaS)\n    q = -r - s;\n  else if (deltaR > deltaS)\n    r = -q - s;\n  else\n    s = -q - r;\n\n  return createHexagon(q, r);\n}\n\nHexagon hexagonFromPoint(vec2 point, float size) {\n  \n  point.y /= ratio;\n  point = (point - 0.5) / size;\n  \n  float q = (sqrt(3.0) / 3.0) * point.x + (-1.0 / 3.0) * point.y;\n  float r = 0.0 * point.x + 2.0 / 3.0 * point.y;\n\n  Hexagon hex = createHexagon(q, r);\n  return roundHexagon(hex);\n  \n}\n\nvec2 pointFromHexagon(Hexagon hex, float size) {\n  \n  float x = (sqrt(3.0) * hex.q + (sqrt(3.0) / 2.0) * hex.r) * size + 0.5;\n  float y = (0.0 * hex.q + (3.0 / 2.0) * hex.r) * size + 0.5;\n  \n  return vec2(x, y * ratio);\n}\n\nvec4 transition (vec2 uv) {\n  \n  float dist = 2.0 * min(progress, 1.0 - progress);\n  dist = steps > 0 ? ceil(dist * float(steps)) / float(steps) : dist;\n  \n  float size = (sqrt(3.0) / 3.0) * dist / horizontalHexagons;\n  \n  vec2 point = dist > 0.0 ? pointFromHexagon(hexagonFromPoint(uv, size), size) : uv;\n\n  return mix(getFromColor(point), getToColor(point), progress);\n  \n}\n","author":"Fernando Kuteken","license":"MIT","createdAt":"Tue, 30 May 2017 21:55:47 -0300","updatedAt":"Tue, 30 May 2017 21:55:47 -0300"},{"name":"kaleidoscope","paramsTypes":{"speed":"float","angle":"float","power":"float"},"defaultParams":{"speed":1,"angle":1,"power":1.5},"glsl":"// Author: nwoeanhinnogaehr\n// License: MIT\n\nuniform float speed; // = 1.0;\nuniform float angle; // = 1.0;\nuniform float power; // = 1.5;\n\nvec4 transition(vec2 uv) {\n  vec2 p = uv.xy / vec2(1.0).xy;\n  vec2 q = p;\n  float t = pow(progress, power)*speed;\n  p = p -0.5;\n  for (int i = 0; i < 7; i++) {\n    p = vec2(sin(t)*p.x + cos(t)*p.y, sin(t)*p.y - cos(t)*p.x);\n    t += angle;\n    p = abs(mod(p, 2.0) - 1.0);\n  }\n  abs(mod(p, 1.0));\n  return mix(\n    mix(getFromColor(q), getToColor(q), progress),\n    mix(getFromColor(p), getToColor(p), progress), 1.0 - 2.0*abs(progress - 0.5));\n}\n","author":"nwoeanhinnogaehr","license":"MIT","createdAt":"Wed, 31 May 2017 21:48:26 -0400","updatedAt":"Wed, 31 May 2017 21:48:26 -0400"},{"name":"luma","paramsTypes":{"luma":"sampler2D"},"defaultParams":{"luma":null},"glsl":"// Author: gre\n// License: MIT\n\nuniform sampler2D luma;\n\nvec4 transition(vec2 uv) {\n  return mix(\n    getToColor(uv),\n    getFromColor(uv),\n    step(progress, texture2D(luma, uv).r)\n  );\n}\n","author":"gre","license":"MIT","createdAt":"Tue, 30 May 2017 14:26:44 +0200","updatedAt":"Tue, 30 May 2017 14:26:44 +0200"},{"name":"luminance_melt","paramsTypes":{"direction":"bool","l_threshold":"float","above":"bool"},"defaultParams":{"direction":true,"l_threshold":0.8,"above":false},"glsl":"// Author: 0gust1\n// License: MIT\n//My own first transition — based on crosshatch code (from pthrasher), using  simplex noise formula (copied and pasted)\n//-> cooler with high contrasted images (isolated dark subject on light background f.e.)\n//TODO : try to rebase it on DoomTransition (from zeh)?\n//optimizations :\n//luminance (see http://stackoverflow.com/questions/596216/formula-to-determine-brightness-of-rgb-color#answer-596241)\n// Y = (R+R+B+G+G+G)/6\n//or Y = (R+R+R+B+G+G+G+G)>>3 \n\n\n//direction of movement :  0 : up, 1, down\nuniform bool direction; // = 1 \n//luminance threshold\nuniform float l_threshold; // = 0.8 \n//does the movement takes effect above or below luminance threshold ?\nuniform bool above; // = false \n\n\n//Random function borrowed from everywhere\nfloat rand(vec2 co){\n  return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\n}\n\n\n// Simplex noise :\n// Description : Array and textureless GLSL 2D simplex noise function.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : MIT  \n//               2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n// \n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec2 mod289(vec2 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec3 permute(vec3 x) {\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nfloat snoise(vec2 v)\n  {\n  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0\n                      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)\n                     -0.577350269189626,  // -1.0 + 2.0 * C.x\n                      0.024390243902439); // 1.0 / 41.0\n// First corner\n  vec2 i  = floor(v + dot(v, C.yy) );\n  vec2 x0 = v -   i + dot(i, C.xx);\n\n// Other corners\n  vec2 i1;\n  //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0\n  //i1.y = 1.0 - i1.x;\n  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n  // x0 = x0 - 0.0 + 0.0 * C.xx ;\n  // x1 = x0 - i1 + 1.0 * C.xx ;\n  // x2 = x0 - 1.0 + 2.0 * C.xx ;\n  vec4 x12 = x0.xyxy + C.xxzz;\n  x12.xy -= i1;\n\n// Permutations\n  i = mod289(i); // Avoid truncation effects in permutation\n  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))\n\t\t+ i.x + vec3(0.0, i1.x, 1.0 ));\n\n  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);\n  m = m*m ;\n  m = m*m ;\n\n// Gradients: 41 points uniformly over a line, mapped onto a diamond.\n// The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)\n\n  vec3 x = 2.0 * fract(p * C.www) - 1.0;\n  vec3 h = abs(x) - 0.5;\n  vec3 ox = floor(x + 0.5);\n  vec3 a0 = x - ox;\n\n// Normalise gradients implicitly by scaling m\n// Approximation of: m *= inversesqrt( a0*a0 + h*h );\n  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\n\n// Compute final noise value at P\n  vec3 g;\n  g.x  = a0.x  * x0.x  + h.x  * x0.y;\n  g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n  return 130.0 * dot(m, g);\n}\n\n// Simplex noise -- end\n\nfloat luminance(vec4 color){\n  //(0.299*R + 0.587*G + 0.114*B)\n  return color.r*0.299+color.g*0.587+color.b*0.114;\n}\n\nvec2 center = vec2(1.0, direction);\n\nvec4 transition(vec2 uv) {\n  vec2 p = uv.xy / vec2(1.0).xy;\n  if (progress == 0.0) {\n    return getFromColor(p);\n  } else if (progress == 1.0) {\n    return getToColor(p);\n  } else {\n    float x = progress;\n    float dist = distance(center, p)- progress*exp(snoise(vec2(p.x, 0.0)));\n    float r = x - rand(vec2(p.x, 0.1));\n    float m;\n    if(above){\n     m = dist <= r && luminance(getFromColor(p))>l_threshold ? 1.0 : (progress*progress*progress);\n    }\n    else{\n     m = dist <= r && luminance(getFromColor(p))<l_threshold ? 1.0 : (progress*progress*progress);  \n    }\n    return mix(getFromColor(p), getToColor(p), m);    \n  }\n}\n","author":"0gust1","license":"MIT","createdAt":"Wed, 24 Jan 2018 19:02:32 +0100","updatedAt":"Wed, 24 Jan 2018 19:02:32 +0100"},{"name":"morph","paramsTypes":{"strength":"float"},"defaultParams":{"strength":0.1},"glsl":"// Author: paniq\n// License: MIT\nuniform float strength; // = 0.1\n\nvec4 transition(vec2 p) {\n  vec4 ca = getFromColor(p);\n  vec4 cb = getToColor(p);\n  \n  vec2 oa = (((ca.rg+ca.b)*0.5)*2.0-1.0);\n  vec2 ob = (((cb.rg+cb.b)*0.5)*2.0-1.0);\n  vec2 oc = mix(oa,ob,0.5)*strength;\n  \n  float w0 = progress;\n  float w1 = 1.0-w0;\n  return mix(getFromColor(p+oc*w0), getToColor(p-oc*w1), progress);\n}\n","author":"paniq","license":"MIT","createdAt":"Thu, 10 Aug 2017 00:27:36 +0200","updatedAt":"Thu, 10 Aug 2017 00:32:01 +0200"},{"name":"multiply_blend","paramsTypes":{},"defaultParams":{},"glsl":"// Author: Fernando Kuteken\n// License: MIT\n\nvec4 blend(vec4 a, vec4 b) {\n  return a * b;\n}\n\nvec4 transition (vec2 uv) {\n  \n  vec4 blended = blend(getFromColor(uv), getToColor(uv));\n  \n  if (progress < 0.5)\n    return mix(getFromColor(uv), blended, 2.0 * progress);\n  else\n    return mix(blended, getToColor(uv), 2.0 * progress - 1.0);\n}\n\n","author":"Fernando Kuteken","license":"MIT","createdAt":"Tue, 30 May 2017 14:26:44 +0200","updatedAt":"Tue, 30 May 2017 14:26:44 +0200"},{"name":"perlin","paramsTypes":{"scale":"float","smoothness":"float","seed":"float"},"defaultParams":{"scale":4,"smoothness":0.01,"seed":12.9898},"glsl":"// Author: Rich Harris\n// License: MIT\n\n#ifdef GL_ES\nprecision mediump float;\n#endif\n\nuniform float scale; // = 4.0\nuniform float smoothness; // = 0.01\n\nuniform float seed; // = 12.9898\n\n// http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/\nfloat random(vec2 co)\n{\n    highp float a = seed;\n    highp float b = 78.233;\n    highp float c = 43758.5453;\n    highp float dt= dot(co.xy ,vec2(a,b));\n    highp float sn= mod(dt,3.14);\n    return fract(sin(sn) * c);\n}\n\n// 2D Noise based on Morgan McGuire @morgan3d\n// https://www.shadertoy.com/view/4dS3Wd\nfloat noise (in vec2 st) {\n    vec2 i = floor(st);\n    vec2 f = fract(st);\n\n    // Four corners in 2D of a tile\n    float a = random(i);\n    float b = random(i + vec2(1.0, 0.0));\n    float c = random(i + vec2(0.0, 1.0));\n    float d = random(i + vec2(1.0, 1.0));\n\n    // Smooth Interpolation\n\n    // Cubic Hermine Curve.  Same as SmoothStep()\n    vec2 u = f*f*(3.0-2.0*f);\n    // u = smoothstep(0.,1.,f);\n\n    // Mix 4 coorners porcentages\n    return mix(a, b, u.x) +\n            (c - a)* u.y * (1.0 - u.x) +\n            (d - b) * u.x * u.y;\n}\n\nvec4 transition (vec2 uv) {\n  vec4 from = getFromColor(uv);\n  vec4 to = getToColor(uv);\n  float n = noise(uv * scale);\n  \n  float p = mix(-smoothness, 1.0 + smoothness, progress);\n  float lower = p - smoothness;\n  float higher = p + smoothness;\n  \n  float q = smoothstep(lower, higher, n);\n  \n  return mix(\n    from,\n    to,\n    1.0 - q\n  );\n}\n","author":"Rich Harris","license":"MIT","createdAt":"Tue, 23 Jan 2018 21:35:10 -0500","updatedAt":"Wed, 24 Jan 2018 07:35:04 -0500"},{"name":"pinwheel","paramsTypes":{"speed":"float"},"defaultParams":{"speed":2},"glsl":"// Author: Mr Speaker\n// License: MIT\n\nuniform float speed; // = 2.0;\n\nvec4 transition(vec2 uv) {\n  \n  vec2 p = uv.xy / vec2(1.0).xy;\n  \n  float circPos = atan(p.y - 0.5, p.x - 0.5) + progress * speed;\n  float modPos = mod(circPos, 3.1415 / 4.);\n  float signed = sign(progress - modPos);\n  \n  return mix(getToColor(p), getFromColor(p), step(signed, 0.5));\n  \n}\n","author":"Mr Speaker","license":"MIT","createdAt":"Tue, 30 May 2017 09:04:31 -0400","updatedAt":"Tue, 30 May 2017 09:04:31 -0400"},{"name":"pixelize","paramsTypes":{"squaresMin":"ivec2","steps":"int"},"defaultParams":{"squaresMin":[20,20],"steps":50},"glsl":"// Author: gre\n// License: MIT\n// forked from https://gist.github.com/benraziel/c528607361d90a072e98\n\nuniform ivec2 squaresMin/* = ivec2(20) */; // minimum number of squares (when the effect is at its higher level)\nuniform int steps /* = 50 */; // zero disable the stepping\n\nfloat d = min(progress, 1.0 - progress);\nfloat dist = steps>0 ? ceil(d * float(steps)) / float(steps) : d;\nvec2 squareSize = 2.0 * dist / vec2(squaresMin);\n\nvec4 transition(vec2 uv) {\n  vec2 p = dist>0.0 ? (floor(uv / squareSize) + 0.5) * squareSize : uv;\n  return mix(getFromColor(p), getToColor(p), progress);\n}\n","author":"gre","license":"MIT","createdAt":"Tue, 30 May 2017 14:26:44 +0200","updatedAt":"Wed, 31 May 2017 10:58:26 +0200"},{"name":"polar_function","paramsTypes":{"segments":"int"},"defaultParams":{"segments":5},"glsl":"// Author: Fernando Kuteken\n// License: MIT\n\n#define PI 3.14159265359\n\nuniform int segments; // = 5;\n\nvec4 transition (vec2 uv) {\n  \n  float angle = atan(uv.y - 0.5, uv.x - 0.5) - 0.5 * PI;\n  float normalized = (angle + 1.5 * PI) * (2.0 * PI);\n  \n  float radius = (cos(float(segments) * angle) + 4.0) / 4.0;\n  float difference = length(uv - vec2(0.5, 0.5));\n  \n  if (difference > radius * progress)\n    return getFromColor(uv);\n  else\n    return getToColor(uv);\n}\n","author":"Fernando Kuteken","license":"MIT","createdAt":"Tue, 30 May 2017 14:26:44 +0200","updatedAt":"Tue, 30 May 2017 14:26:44 +0200"},{"name":"randomsquares","paramsTypes":{"size":"ivec2","smoothness":"float"},"defaultParams":{"size":[10,10],"smoothness":0.5},"glsl":"// Author: gre\n// License: MIT\n\nuniform ivec2 size; // = ivec2(10, 10)\nuniform float smoothness; // = 0.5\n \nfloat rand (vec2 co) {\n  return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\n}\n\nvec4 transition(vec2 p) {\n  float r = rand(floor(vec2(size) * p));\n  float m = smoothstep(0.0, -smoothness, r - (progress * (1.0 + smoothness)));\n  return mix(getFromColor(p), getToColor(p), m);\n}\n","author":"gre","license":"MIT","createdAt":"Tue, 30 May 2017 14:26:44 +0200","updatedAt":"Tue, 30 May 2017 14:26:44 +0200"},{"name":"ripple","paramsTypes":{"amplitude":"float","speed":"float"},"defaultParams":{"amplitude":100,"speed":50},"glsl":"// Author: gre\n// License: MIT\nuniform float amplitude; // = 100.0\nuniform float speed; // = 50.0\n\nvec4 transition (vec2 uv) {\n  vec2 dir = uv - vec2(.5);\n  float dist = length(dir);\n  vec2 offset = dir * (sin(progress * dist * amplitude - progress * speed) + .5) / 30.;\n  return mix(\n    getFromColor(uv + offset),\n    getToColor(uv),\n    smoothstep(0.2, 1.0, progress)\n  );\n}\n","author":"gre","license":"MIT","createdAt":"Tue, 30 May 2017 15:15:27 +0200","updatedAt":"Tue, 30 May 2017 15:15:27 +0200"},{"name":"rotate_scale_fade","paramsTypes":{"center":"vec2","rotations":"float","scale":"float","backColor":"vec4"},"defaultParams":{"center":[0.5,0.5],"rotations":1,"scale":8,"backColor":[0.15,0.15,0.15,1]},"glsl":"// Author: Fernando Kuteken\n// License: MIT\n\n#define PI 3.14159265359\n\nuniform vec2 center; // = vec2(0.5, 0.5);\nuniform float rotations; // = 1;\nuniform float scale; // = 8;\nuniform vec4 backColor; // = vec4(0.15, 0.15, 0.15, 1.0);\n\nvec4 transition (vec2 uv) {\n  \n  vec2 difference = uv - center;\n  vec2 dir = normalize(difference);\n  float dist = length(difference);\n  \n  float angle = 2.0 * PI * rotations * progress;\n  \n  float c = cos(angle);\n  float s = sin(angle);\n  \n  float currentScale = mix(scale, 1.0, 2.0 * abs(progress - 0.5));\n  \n  vec2 rotatedDir = vec2(dir.x  * c - dir.y * s, dir.x * s + dir.y * c);\n  vec2 rotatedUv = center + rotatedDir * dist / currentScale;\n  \n  if (rotatedUv.x < 0.0 || rotatedUv.x > 1.0 ||\n      rotatedUv.y < 0.0 || rotatedUv.y > 1.0)\n    return backColor;\n    \n  return mix(getFromColor(rotatedUv), getToColor(rotatedUv), progress);\n}\n","author":"Fernando Kuteken","license":"MIT","createdAt":"Tue, 30 May 2017 14:26:44 +0200","updatedAt":"Tue, 30 May 2017 14:26:44 +0200"},{"name":"squareswire","paramsTypes":{"squares":"ivec2","direction":"vec2","smoothness":"float"},"defaultParams":{"squares":[10,10],"direction":[1,-0.5],"smoothness":1.6},"glsl":"// Author: gre\n// License: MIT\n \nuniform ivec2 squares;// = ivec2(10,10)\nuniform vec2 direction;// = vec2(1.0, -0.5)\nuniform float smoothness; // = 1.6\n\nconst vec2 center = vec2(0.5, 0.5);\nvec4 transition (vec2 p) {\n  vec2 v = normalize(direction);\n  v /= abs(v.x)+abs(v.y);\n  float d = v.x * center.x + v.y * center.y;\n  float offset = smoothness;\n  float pr = smoothstep(-offset, 0.0, v.x * p.x + v.y * p.y - (d-0.5+progress*(1.+offset)));\n  vec2 squarep = fract(p*vec2(squares));\n  vec2 squaremin = vec2(pr/2.0);\n  vec2 squaremax = vec2(1.0 - pr/2.0);\n  float a = (1.0 - step(progress, 0.0)) * step(squaremin.x, squarep.x) * step(squaremin.y, squarep.y) * step(squarep.x, squaremax.x) * step(squarep.y, squaremax.y);\n  return mix(getFromColor(p), getToColor(p), a);\n}\n","author":"gre","license":"MIT","createdAt":"Tue, 30 May 2017 14:26:44 +0200","updatedAt":"Tue, 30 May 2017 14:26:44 +0200"},{"name":"squeeze","paramsTypes":{"colorSeparation":"float"},"defaultParams":{"colorSeparation":0.04},"glsl":"// Author: gre\n// License: MIT\n \nuniform float colorSeparation; // = 0.04\n \nvec4 transition (vec2 uv) {\n  float y = 0.5 + (uv.y-0.5) / (1.0-progress);\n  if (y < 0.0 || y > 1.0) {\n     return getToColor(uv);\n  }\n  else {\n    vec2 fp = vec2(uv.x, y);\n    vec2 off = progress * vec2(0.0, colorSeparation);\n    vec4 c = getFromColor(fp);\n    vec4 cn = getFromColor(fp - off);\n    vec4 cp = getFromColor(fp + off);\n    return vec4(cn.r, c.g, cp.b, c.a);\n  }\n}\n","author":"gre","license":"MIT","createdAt":"Tue, 30 May 2017 14:26:44 +0200","updatedAt":"Tue, 30 May 2017 14:26:44 +0200"},{"name":"swap","paramsTypes":{"reflection":"float","perspective":"float","depth":"float"},"defaultParams":{"reflection":0.4,"perspective":0.2,"depth":3},"glsl":"// Author: gre\n// License: MIT\n// General parameters\nuniform float reflection; // = 0.4\nuniform float perspective; // = 0.2\nuniform float depth; // = 3.0\n \nconst vec4 black = vec4(0.0, 0.0, 0.0, 1.0);\nconst vec2 boundMin = vec2(0.0, 0.0);\nconst vec2 boundMax = vec2(1.0, 1.0);\n \nbool inBounds (vec2 p) {\n  return all(lessThan(boundMin, p)) && all(lessThan(p, boundMax));\n}\n \nvec2 project (vec2 p) {\n  return p * vec2(1.0, -1.2) + vec2(0.0, -0.02);\n}\n \nvec4 bgColor (vec2 p, vec2 pfr, vec2 pto) {\n  vec4 c = black;\n  pfr = project(pfr);\n  if (inBounds(pfr)) {\n    c += mix(black, getFromColor(pfr), reflection * mix(1.0, 0.0, pfr.y));\n  }\n  pto = project(pto);\n  if (inBounds(pto)) {\n    c += mix(black, getToColor(pto), reflection * mix(1.0, 0.0, pto.y));\n  }\n  return c;\n}\n \nvec4 transition(vec2 p) {\n  vec2 pfr, pto = vec2(-1.);\n \n  float size = mix(1.0, depth, progress);\n  float persp = perspective * progress;\n  pfr = (p + vec2(-0.0, -0.5)) * vec2(size/(1.0-perspective*progress), size/(1.0-size*persp*p.x)) + vec2(0.0, 0.5);\n \n  size = mix(1.0, depth, 1.-progress);\n  persp = perspective * (1.-progress);\n  pto = (p + vec2(-1.0, -0.5)) * vec2(size/(1.0-perspective*(1.0-progress)), size/(1.0-size*persp*(0.5-p.x))) + vec2(1.0, 0.5);\n\n  if (progress < 0.5) {\n    if (inBounds(pfr)) {\n      return getFromColor(pfr);\n    }\n    if (inBounds(pto)) {\n      return getToColor(pto);\n    }  \n  }\n  if (inBounds(pto)) {\n    return getToColor(pto);\n  }\n  if (inBounds(pfr)) {\n    return getFromColor(pfr);\n  }\n  return bgColor(p, pfr, pto);\n}\n","author":"gre","license":"MIT","createdAt":"Tue, 30 May 2017 14:26:44 +0200","updatedAt":"Sun, 18 Feb 2018 17:45:50 +0100"},{"name":"undulatingBurnOut","paramsTypes":{"smoothness":"float","center":"vec2","color":"vec3"},"defaultParams":{"smoothness":0.03,"center":[0.5,0.5],"color":[0,0,0]},"glsl":"// License: MIT\n// Author: pthrasher\n// adapted by gre from https://gist.github.com/pthrasher/8e6226b215548ba12734\n\nuniform float smoothness; // = 0.03\nuniform vec2 center; // = vec2(0.5)\nuniform vec3 color; // = vec3(0.0)\n\nconst float M_PI = 3.14159265358979323846;\n\nfloat quadraticInOut(float t) {\n  float p = 2.0 * t * t;\n  return t < 0.5 ? p : -p + (4.0 * t) - 1.0;\n}\n\nfloat getGradient(float r, float dist) {\n  float d = r - dist;\n  return mix(\n    smoothstep(-smoothness, 0.0, r - dist * (1.0 + smoothness)),\n    -1.0 - step(0.005, d),\n    step(-0.005, d) * step(d, 0.01)\n  );\n}\n\nfloat getWave(vec2 p){\n  vec2 _p = p - center; // offset from center\n  float rads = atan(_p.y, _p.x);\n  float degs = degrees(rads) + 180.0;\n  vec2 range = vec2(0.0, M_PI * 30.0);\n  vec2 domain = vec2(0.0, 360.0);\n  float ratio = (M_PI * 30.0) / 360.0;\n  degs = degs * ratio;\n  float x = progress;\n  float magnitude = mix(0.02, 0.09, smoothstep(0.0, 1.0, x));\n  float offset = mix(40.0, 30.0, smoothstep(0.0, 1.0, x));\n  float ease_degs = quadraticInOut(sin(degs));\n  float deg_wave_pos = (ease_degs * magnitude) * sin(x * offset);\n  return x + deg_wave_pos;\n}\n\nvec4 transition(vec2 p) {\n  float dist = distance(center, p);\n  float m = getGradient(getWave(p), dist);\n  vec4 cfrom = getFromColor(p);\n  vec4 cto = getToColor(p);\n  return mix(mix(cfrom, cto, m), mix(cfrom, vec4(color, 1.0), 0.75), step(m, -2.0));\n}\n","license":"MIT","author":"pthrasher","createdAt":"Mon, 12 Jun 2017 10:23:37 +0800","updatedAt":"Mon, 12 Jun 2017 10:23:37 +0800"},{"name":"wind","paramsTypes":{"size":"float"},"defaultParams":{"size":0.2},"glsl":"// Author: gre\n// License: MIT\n\n// Custom parameters\nuniform float size; // = 0.2\n\nfloat rand (vec2 co) {\n  return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\n}\n\nvec4 transition (vec2 uv) {\n  float r = rand(vec2(0, uv.y));\n  float m = smoothstep(0.0, -size, uv.x*(1.0-size) + size*r - (progress * (1.0 + size)));\n  return mix(\n    getFromColor(uv),\n    getToColor(uv),\n    m\n  );\n}\n","author":"gre","license":"MIT","createdAt":"Tue, 30 May 2017 14:26:44 +0200","updatedAt":"Tue, 30 May 2017 14:26:44 +0200"},{"name":"windowblinds","paramsTypes":{},"defaultParams":{},"glsl":"// Author: Fabien Benetou\n// License: MIT\n\nvec4 transition (vec2 uv) {\n  float t = progress;\n  \n  if (mod(floor(uv.y*100.*progress),2.)==0.)\n    t*=2.-.5;\n  \n  return mix(\n    getFromColor(uv),\n    getToColor(uv),\n    mix(t, progress, smoothstep(0.8, 1.0, progress))\n  );\n}\n","author":"Fabien Benetou","license":"MIT","createdAt":"Wed, 31 May 2017 14:11:48 +0200","updatedAt":"Wed, 31 May 2017 14:11:48 +0200"},{"name":"windowslice","paramsTypes":{"count":"float","smoothness":"float"},"defaultParams":{"count":10,"smoothness":0.5},"glsl":"// Author: gre\n// License: MIT\n\nuniform float count; // = 10.0\nuniform float smoothness; // = 0.5\n\nvec4 transition (vec2 p) {\n  float pr = smoothstep(-smoothness, 0.0, p.x - progress * (1.0 + smoothness));\n  float s = step(pr, fract(count * p.x));\n  return mix(getFromColor(p), getToColor(p), s);\n}\n","author":"gre","license":"MIT","createdAt":"Wed, 28 Mar 2018 17:23:26 +0200","updatedAt":"Wed, 28 Mar 2018 17:23:26 +0200"},{"name":"wipeDown","paramsTypes":{},"defaultParams":{},"glsl":"// Author: Jake Nelson\n// License: MIT\n\nvec4 transition(vec2 uv) {\n  vec2 p=uv.xy/vec2(1.0).xy;\n  vec4 a=getFromColor(p);\n  vec4 b=getToColor(p);\n  return mix(a, b, step(1.0-p.y,progress));\n}\n","author":"Jake Nelson","license":"MIT","createdAt":"Wed, 1 Nov 2017 15:26:01 -0500","updatedAt":"Thu, 2 Nov 2017 18:39:26 -0500"},{"name":"wipeLeft","paramsTypes":{},"defaultParams":{},"glsl":"// Author: Jake Nelson\n// License: MIT\n\nvec4 transition(vec2 uv) {\n  vec2 p=uv.xy/vec2(1.0).xy;\n  vec4 a=getFromColor(p);\n  vec4 b=getToColor(p);\n  return mix(a, b, step(1.0-p.x,progress));\n}\n","author":"Jake Nelson","license":"MIT","createdAt":"Wed, 1 Nov 2017 15:26:28 -0500","updatedAt":"Fri, 3 Nov 2017 18:03:50 +0100"},{"name":"wipeRight","paramsTypes":{},"defaultParams":{},"glsl":"// Author: Jake Nelson\n// License: MIT\n\nvec4 transition(vec2 uv) {\n  vec2 p=uv.xy/vec2(1.0).xy;\n  vec4 a=getFromColor(p);\n  vec4 b=getToColor(p);\n  return mix(a, b, step(0.0+p.x,progress));\n}\n","author":"Jake Nelson","license":"MIT","createdAt":"Wed, 1 Nov 2017 15:27:02 -0500","updatedAt":"Thu, 2 Nov 2017 18:40:22 -0500"},{"name":"wipeUp","paramsTypes":{},"defaultParams":{},"glsl":"// Author: Jake Nelson\n// License: MIT\n\nvec4 transition(vec2 uv) {\n  vec2 p=uv.xy/vec2(1.0).xy;\n  vec4 a=getFromColor(p);\n  vec4 b=getToColor(p);\n  return mix(a, b, step(0.0+p.y,progress));\n}\n","author":"Jake Nelson","license":"MIT","createdAt":"Wed, 1 Nov 2017 15:24:36 -0500","updatedAt":"Thu, 2 Nov 2017 18:37:42 -0500"}]

/***/ }),

/***/ "./node_modules/glsl-shader-name/index.js":
/*!************************************************!*\
  !*** ./node_modules/glsl-shader-name/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var tokenize = __webpack_require__(/*! glsl-tokenizer */ "./node_modules/glsl-tokenizer/string.js")
var atob     = __webpack_require__(/*! atob-lite */ "./node_modules/atob-lite/atob-browser.js")

module.exports = getName

function getName(src) {
  var tokens = Array.isArray(src)
    ? src
    : tokenize(src)

  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]
    if (token.type !== 'preprocessor') continue
    var match = token.data.match(/\#define\s+SHADER_NAME(_B64)?\s+(.+)$/)
    if (!match) continue
    if (!match[2]) continue

    var b64  = match[1]
    var name = match[2]

    return (b64 ? atob(name) : name).trim()
  }
}


/***/ }),

/***/ "./node_modules/glsl-tokenizer/index.js":
/*!**********************************************!*\
  !*** ./node_modules/glsl-tokenizer/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = tokenize

var literals100 = __webpack_require__(/*! ./lib/literals */ "./node_modules/glsl-tokenizer/lib/literals.js")
  , operators = __webpack_require__(/*! ./lib/operators */ "./node_modules/glsl-tokenizer/lib/operators.js")
  , builtins100 = __webpack_require__(/*! ./lib/builtins */ "./node_modules/glsl-tokenizer/lib/builtins.js")
  , literals300es = __webpack_require__(/*! ./lib/literals-300es */ "./node_modules/glsl-tokenizer/lib/literals-300es.js")
  , builtins300es = __webpack_require__(/*! ./lib/builtins-300es */ "./node_modules/glsl-tokenizer/lib/builtins-300es.js")

var NORMAL = 999          // <-- never emitted
  , TOKEN = 9999          // <-- never emitted
  , BLOCK_COMMENT = 0
  , LINE_COMMENT = 1
  , PREPROCESSOR = 2
  , OPERATOR = 3
  , INTEGER = 4
  , FLOAT = 5
  , IDENT = 6
  , BUILTIN = 7
  , KEYWORD = 8
  , WHITESPACE = 9
  , EOF = 10
  , HEX = 11

var map = [
    'block-comment'
  , 'line-comment'
  , 'preprocessor'
  , 'operator'
  , 'integer'
  , 'float'
  , 'ident'
  , 'builtin'
  , 'keyword'
  , 'whitespace'
  , 'eof'
  , 'integer'
]

function tokenize(opt) {
  var i = 0
    , total = 0
    , mode = NORMAL
    , c
    , last
    , content = []
    , tokens = []
    , token_idx = 0
    , token_offs = 0
    , line = 1
    , col = 0
    , start = 0
    , isnum = false
    , isoperator = false
    , input = ''
    , len

  opt = opt || {}
  var allBuiltins = builtins100
  var allLiterals = literals100
  if (opt.version === '300 es') {
    allBuiltins = builtins300es
    allLiterals = literals300es
  }

  // cache by name
  var builtinsDict = {}, literalsDict = {}
  for (var i = 0; i < allBuiltins.length; i++) {
    builtinsDict[allBuiltins[i]] = true
  }
  for (var i = 0; i < allLiterals.length; i++) {
    literalsDict[allLiterals[i]] = true
  }

  return function(data) {
    tokens = []
    if (data !== null) return write(data)
    return end()
  }

  function token(data) {
    if (data.length) {
      tokens.push({
        type: map[mode]
      , data: data
      , position: start
      , line: line
      , column: col
      })
    }
  }

  function write(chunk) {
    i = 0

    if (chunk.toString) chunk = chunk.toString()

    input += chunk.replace(/\r\n/g, '\n')
    len = input.length


    var last

    while(c = input[i], i < len) {
      last = i

      switch(mode) {
        case BLOCK_COMMENT: i = block_comment(); break
        case LINE_COMMENT: i = line_comment(); break
        case PREPROCESSOR: i = preprocessor(); break
        case OPERATOR: i = operator(); break
        case INTEGER: i = integer(); break
        case HEX: i = hex(); break
        case FLOAT: i = decimal(); break
        case TOKEN: i = readtoken(); break
        case WHITESPACE: i = whitespace(); break
        case NORMAL: i = normal(); break
      }

      if(last !== i) {
        switch(input[last]) {
          case '\n': col = 0; ++line; break
          default: ++col; break
        }
      }
    }

    total += i
    input = input.slice(i)
    return tokens
  }

  function end(chunk) {
    if(content.length) {
      token(content.join(''))
    }

    mode = EOF
    token('(eof)')
    return tokens
  }

  function normal() {
    content = content.length ? [] : content

    if(last === '/' && c === '*') {
      start = total + i - 1
      mode = BLOCK_COMMENT
      last = c
      return i + 1
    }

    if(last === '/' && c === '/') {
      start = total + i - 1
      mode = LINE_COMMENT
      last = c
      return i + 1
    }

    if(c === '#') {
      mode = PREPROCESSOR
      start = total + i
      return i
    }

    if(/\s/.test(c)) {
      mode = WHITESPACE
      start = total + i
      return i
    }

    isnum = /\d/.test(c)
    isoperator = /[^\w_]/.test(c)

    start = total + i
    mode = isnum ? INTEGER : isoperator ? OPERATOR : TOKEN
    return i
  }

  function whitespace() {
    if(/[^\s]/g.test(c)) {
      token(content.join(''))
      mode = NORMAL
      return i
    }
    content.push(c)
    last = c
    return i + 1
  }

  function preprocessor() {
    if((c === '\r' || c === '\n') && last !== '\\') {
      token(content.join(''))
      mode = NORMAL
      return i
    }
    content.push(c)
    last = c
    return i + 1
  }

  function line_comment() {
    return preprocessor()
  }

  function block_comment() {
    if(c === '/' && last === '*') {
      content.push(c)
      token(content.join(''))
      mode = NORMAL
      return i + 1
    }

    content.push(c)
    last = c
    return i + 1
  }

  function operator() {
    if(last === '.' && /\d/.test(c)) {
      mode = FLOAT
      return i
    }

    if(last === '/' && c === '*') {
      mode = BLOCK_COMMENT
      return i
    }

    if(last === '/' && c === '/') {
      mode = LINE_COMMENT
      return i
    }

    if(c === '.' && content.length) {
      while(determine_operator(content));

      mode = FLOAT
      return i
    }

    if(c === ';' || c === ')' || c === '(') {
      if(content.length) while(determine_operator(content));
      token(c)
      mode = NORMAL
      return i + 1
    }

    var is_composite_operator = content.length === 2 && c !== '='
    if(/[\w_\d\s]/.test(c) || is_composite_operator) {
      while(determine_operator(content));
      mode = NORMAL
      return i
    }

    content.push(c)
    last = c
    return i + 1
  }

  function determine_operator(buf) {
    var j = 0
      , idx
      , res

    do {
      idx = operators.indexOf(buf.slice(0, buf.length + j).join(''))
      res = operators[idx]

      if(idx === -1) {
        if(j-- + buf.length > 0) continue
        res = buf.slice(0, 1).join('')
      }

      token(res)

      start += res.length
      content = content.slice(res.length)
      return content.length
    } while(1)
  }

  function hex() {
    if(/[^a-fA-F0-9]/.test(c)) {
      token(content.join(''))
      mode = NORMAL
      return i
    }

    content.push(c)
    last = c
    return i + 1
  }

  function integer() {
    if(c === '.') {
      content.push(c)
      mode = FLOAT
      last = c
      return i + 1
    }

    if(/[eE]/.test(c)) {
      content.push(c)
      mode = FLOAT
      last = c
      return i + 1
    }

    if(c === 'x' && content.length === 1 && content[0] === '0') {
      mode = HEX
      content.push(c)
      last = c
      return i + 1
    }

    if(/[^\d]/.test(c)) {
      token(content.join(''))
      mode = NORMAL
      return i
    }

    content.push(c)
    last = c
    return i + 1
  }

  function decimal() {
    if(c === 'f') {
      content.push(c)
      last = c
      i += 1
    }

    if(/[eE]/.test(c)) {
      content.push(c)
      last = c
      return i + 1
    }

    if ((c === '-' || c === '+') && /[eE]/.test(last)) {
      content.push(c)
      last = c
      return i + 1
    }

    if(/[^\d]/.test(c)) {
      token(content.join(''))
      mode = NORMAL
      return i
    }

    content.push(c)
    last = c
    return i + 1
  }

  function readtoken() {
    if(/[^\d\w_]/.test(c)) {
      var contentstr = content.join('')
      if(literalsDict[contentstr]) {
        mode = KEYWORD
      } else if(builtinsDict[contentstr]) {
        mode = BUILTIN
      } else {
        mode = IDENT
      }
      token(content.join(''))
      mode = NORMAL
      return i
    }
    content.push(c)
    last = c
    return i + 1
  }
}


/***/ }),

/***/ "./node_modules/glsl-tokenizer/lib/builtins-300es.js":
/*!***********************************************************!*\
  !*** ./node_modules/glsl-tokenizer/lib/builtins-300es.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 300es builtins/reserved words that were previously valid in v100
var v100 = __webpack_require__(/*! ./builtins */ "./node_modules/glsl-tokenizer/lib/builtins.js")

// The texture2D|Cube functions have been removed
// And the gl_ features are updated
v100 = v100.slice().filter(function (b) {
  return !/^(gl\_|texture)/.test(b)
})

module.exports = v100.concat([
  // the updated gl_ constants
    'gl_VertexID'
  , 'gl_InstanceID'
  , 'gl_Position'
  , 'gl_PointSize'
  , 'gl_FragCoord'
  , 'gl_FrontFacing'
  , 'gl_FragDepth'
  , 'gl_PointCoord'
  , 'gl_MaxVertexAttribs'
  , 'gl_MaxVertexUniformVectors'
  , 'gl_MaxVertexOutputVectors'
  , 'gl_MaxFragmentInputVectors'
  , 'gl_MaxVertexTextureImageUnits'
  , 'gl_MaxCombinedTextureImageUnits'
  , 'gl_MaxTextureImageUnits'
  , 'gl_MaxFragmentUniformVectors'
  , 'gl_MaxDrawBuffers'
  , 'gl_MinProgramTexelOffset'
  , 'gl_MaxProgramTexelOffset'
  , 'gl_DepthRangeParameters'
  , 'gl_DepthRange'

  // other builtins
  , 'trunc'
  , 'round'
  , 'roundEven'
  , 'isnan'
  , 'isinf'
  , 'floatBitsToInt'
  , 'floatBitsToUint'
  , 'intBitsToFloat'
  , 'uintBitsToFloat'
  , 'packSnorm2x16'
  , 'unpackSnorm2x16'
  , 'packUnorm2x16'
  , 'unpackUnorm2x16'
  , 'packHalf2x16'
  , 'unpackHalf2x16'
  , 'outerProduct'
  , 'transpose'
  , 'determinant'
  , 'inverse'
  , 'texture'
  , 'textureSize'
  , 'textureProj'
  , 'textureLod'
  , 'textureOffset'
  , 'texelFetch'
  , 'texelFetchOffset'
  , 'textureProjOffset'
  , 'textureLodOffset'
  , 'textureProjLod'
  , 'textureProjLodOffset'
  , 'textureGrad'
  , 'textureGradOffset'
  , 'textureProjGrad'
  , 'textureProjGradOffset'
])


/***/ }),

/***/ "./node_modules/glsl-tokenizer/lib/builtins.js":
/*!*****************************************************!*\
  !*** ./node_modules/glsl-tokenizer/lib/builtins.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [
  // Keep this list sorted
  'abs'
  , 'acos'
  , 'all'
  , 'any'
  , 'asin'
  , 'atan'
  , 'ceil'
  , 'clamp'
  , 'cos'
  , 'cross'
  , 'dFdx'
  , 'dFdy'
  , 'degrees'
  , 'distance'
  , 'dot'
  , 'equal'
  , 'exp'
  , 'exp2'
  , 'faceforward'
  , 'floor'
  , 'fract'
  , 'gl_BackColor'
  , 'gl_BackLightModelProduct'
  , 'gl_BackLightProduct'
  , 'gl_BackMaterial'
  , 'gl_BackSecondaryColor'
  , 'gl_ClipPlane'
  , 'gl_ClipVertex'
  , 'gl_Color'
  , 'gl_DepthRange'
  , 'gl_DepthRangeParameters'
  , 'gl_EyePlaneQ'
  , 'gl_EyePlaneR'
  , 'gl_EyePlaneS'
  , 'gl_EyePlaneT'
  , 'gl_Fog'
  , 'gl_FogCoord'
  , 'gl_FogFragCoord'
  , 'gl_FogParameters'
  , 'gl_FragColor'
  , 'gl_FragCoord'
  , 'gl_FragData'
  , 'gl_FragDepth'
  , 'gl_FragDepthEXT'
  , 'gl_FrontColor'
  , 'gl_FrontFacing'
  , 'gl_FrontLightModelProduct'
  , 'gl_FrontLightProduct'
  , 'gl_FrontMaterial'
  , 'gl_FrontSecondaryColor'
  , 'gl_LightModel'
  , 'gl_LightModelParameters'
  , 'gl_LightModelProducts'
  , 'gl_LightProducts'
  , 'gl_LightSource'
  , 'gl_LightSourceParameters'
  , 'gl_MaterialParameters'
  , 'gl_MaxClipPlanes'
  , 'gl_MaxCombinedTextureImageUnits'
  , 'gl_MaxDrawBuffers'
  , 'gl_MaxFragmentUniformComponents'
  , 'gl_MaxLights'
  , 'gl_MaxTextureCoords'
  , 'gl_MaxTextureImageUnits'
  , 'gl_MaxTextureUnits'
  , 'gl_MaxVaryingFloats'
  , 'gl_MaxVertexAttribs'
  , 'gl_MaxVertexTextureImageUnits'
  , 'gl_MaxVertexUniformComponents'
  , 'gl_ModelViewMatrix'
  , 'gl_ModelViewMatrixInverse'
  , 'gl_ModelViewMatrixInverseTranspose'
  , 'gl_ModelViewMatrixTranspose'
  , 'gl_ModelViewProjectionMatrix'
  , 'gl_ModelViewProjectionMatrixInverse'
  , 'gl_ModelViewProjectionMatrixInverseTranspose'
  , 'gl_ModelViewProjectionMatrixTranspose'
  , 'gl_MultiTexCoord0'
  , 'gl_MultiTexCoord1'
  , 'gl_MultiTexCoord2'
  , 'gl_MultiTexCoord3'
  , 'gl_MultiTexCoord4'
  , 'gl_MultiTexCoord5'
  , 'gl_MultiTexCoord6'
  , 'gl_MultiTexCoord7'
  , 'gl_Normal'
  , 'gl_NormalMatrix'
  , 'gl_NormalScale'
  , 'gl_ObjectPlaneQ'
  , 'gl_ObjectPlaneR'
  , 'gl_ObjectPlaneS'
  , 'gl_ObjectPlaneT'
  , 'gl_Point'
  , 'gl_PointCoord'
  , 'gl_PointParameters'
  , 'gl_PointSize'
  , 'gl_Position'
  , 'gl_ProjectionMatrix'
  , 'gl_ProjectionMatrixInverse'
  , 'gl_ProjectionMatrixInverseTranspose'
  , 'gl_ProjectionMatrixTranspose'
  , 'gl_SecondaryColor'
  , 'gl_TexCoord'
  , 'gl_TextureEnvColor'
  , 'gl_TextureMatrix'
  , 'gl_TextureMatrixInverse'
  , 'gl_TextureMatrixInverseTranspose'
  , 'gl_TextureMatrixTranspose'
  , 'gl_Vertex'
  , 'greaterThan'
  , 'greaterThanEqual'
  , 'inversesqrt'
  , 'length'
  , 'lessThan'
  , 'lessThanEqual'
  , 'log'
  , 'log2'
  , 'matrixCompMult'
  , 'max'
  , 'min'
  , 'mix'
  , 'mod'
  , 'normalize'
  , 'not'
  , 'notEqual'
  , 'pow'
  , 'radians'
  , 'reflect'
  , 'refract'
  , 'sign'
  , 'sin'
  , 'smoothstep'
  , 'sqrt'
  , 'step'
  , 'tan'
  , 'texture2D'
  , 'texture2DLod'
  , 'texture2DProj'
  , 'texture2DProjLod'
  , 'textureCube'
  , 'textureCubeLod'
  , 'texture2DLodEXT'
  , 'texture2DProjLodEXT'
  , 'textureCubeLodEXT'
  , 'texture2DGradEXT'
  , 'texture2DProjGradEXT'
  , 'textureCubeGradEXT'
]


/***/ }),

/***/ "./node_modules/glsl-tokenizer/lib/literals-300es.js":
/*!***********************************************************!*\
  !*** ./node_modules/glsl-tokenizer/lib/literals-300es.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var v100 = __webpack_require__(/*! ./literals */ "./node_modules/glsl-tokenizer/lib/literals.js")

module.exports = v100.slice().concat([
   'layout'
  , 'centroid'
  , 'smooth'
  , 'case'
  , 'mat2x2'
  , 'mat2x3'
  , 'mat2x4'
  , 'mat3x2'
  , 'mat3x3'
  , 'mat3x4'
  , 'mat4x2'
  , 'mat4x3'
  , 'mat4x4'
  , 'uvec2'
  , 'uvec3'
  , 'uvec4'
  , 'samplerCubeShadow'
  , 'sampler2DArray'
  , 'sampler2DArrayShadow'
  , 'isampler2D'
  , 'isampler3D'
  , 'isamplerCube'
  , 'isampler2DArray'
  , 'usampler2D'
  , 'usampler3D'
  , 'usamplerCube'
  , 'usampler2DArray'
  , 'coherent'
  , 'restrict'
  , 'readonly'
  , 'writeonly'
  , 'resource'
  , 'atomic_uint'
  , 'noperspective'
  , 'patch'
  , 'sample'
  , 'subroutine'
  , 'common'
  , 'partition'
  , 'active'
  , 'filter'
  , 'image1D'
  , 'image2D'
  , 'image3D'
  , 'imageCube'
  , 'iimage1D'
  , 'iimage2D'
  , 'iimage3D'
  , 'iimageCube'
  , 'uimage1D'
  , 'uimage2D'
  , 'uimage3D'
  , 'uimageCube'
  , 'image1DArray'
  , 'image2DArray'
  , 'iimage1DArray'
  , 'iimage2DArray'
  , 'uimage1DArray'
  , 'uimage2DArray'
  , 'image1DShadow'
  , 'image2DShadow'
  , 'image1DArrayShadow'
  , 'image2DArrayShadow'
  , 'imageBuffer'
  , 'iimageBuffer'
  , 'uimageBuffer'
  , 'sampler1DArray'
  , 'sampler1DArrayShadow'
  , 'isampler1D'
  , 'isampler1DArray'
  , 'usampler1D'
  , 'usampler1DArray'
  , 'isampler2DRect'
  , 'usampler2DRect'
  , 'samplerBuffer'
  , 'isamplerBuffer'
  , 'usamplerBuffer'
  , 'sampler2DMS'
  , 'isampler2DMS'
  , 'usampler2DMS'
  , 'sampler2DMSArray'
  , 'isampler2DMSArray'
  , 'usampler2DMSArray'
])


/***/ }),

/***/ "./node_modules/glsl-tokenizer/lib/literals.js":
/*!*****************************************************!*\
  !*** ./node_modules/glsl-tokenizer/lib/literals.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [
  // current
    'precision'
  , 'highp'
  , 'mediump'
  , 'lowp'
  , 'attribute'
  , 'const'
  , 'uniform'
  , 'varying'
  , 'break'
  , 'continue'
  , 'do'
  , 'for'
  , 'while'
  , 'if'
  , 'else'
  , 'in'
  , 'out'
  , 'inout'
  , 'float'
  , 'int'
  , 'uint'
  , 'void'
  , 'bool'
  , 'true'
  , 'false'
  , 'discard'
  , 'return'
  , 'mat2'
  , 'mat3'
  , 'mat4'
  , 'vec2'
  , 'vec3'
  , 'vec4'
  , 'ivec2'
  , 'ivec3'
  , 'ivec4'
  , 'bvec2'
  , 'bvec3'
  , 'bvec4'
  , 'sampler1D'
  , 'sampler2D'
  , 'sampler3D'
  , 'samplerCube'
  , 'sampler1DShadow'
  , 'sampler2DShadow'
  , 'struct'

  // future
  , 'asm'
  , 'class'
  , 'union'
  , 'enum'
  , 'typedef'
  , 'template'
  , 'this'
  , 'packed'
  , 'goto'
  , 'switch'
  , 'default'
  , 'inline'
  , 'noinline'
  , 'volatile'
  , 'public'
  , 'static'
  , 'extern'
  , 'external'
  , 'interface'
  , 'long'
  , 'short'
  , 'double'
  , 'half'
  , 'fixed'
  , 'unsigned'
  , 'input'
  , 'output'
  , 'hvec2'
  , 'hvec3'
  , 'hvec4'
  , 'dvec2'
  , 'dvec3'
  , 'dvec4'
  , 'fvec2'
  , 'fvec3'
  , 'fvec4'
  , 'sampler2DRect'
  , 'sampler3DRect'
  , 'sampler2DRectShadow'
  , 'sizeof'
  , 'cast'
  , 'namespace'
  , 'using'
]


/***/ }),

/***/ "./node_modules/glsl-tokenizer/lib/operators.js":
/*!******************************************************!*\
  !*** ./node_modules/glsl-tokenizer/lib/operators.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [
    '<<='
  , '>>='
  , '++'
  , '--'
  , '<<'
  , '>>'
  , '<='
  , '>='
  , '=='
  , '!='
  , '&&'
  , '||'
  , '+='
  , '-='
  , '*='
  , '/='
  , '%='
  , '&='
  , '^^'
  , '^='
  , '|='
  , '('
  , ')'
  , '['
  , ']'
  , '.'
  , '!'
  , '~'
  , '*'
  , '/'
  , '%'
  , '+'
  , '-'
  , '<'
  , '>'
  , '&'
  , '^'
  , '|'
  , '?'
  , ':'
  , '='
  , ','
  , ';'
  , '{'
  , '}'
]


/***/ }),

/***/ "./node_modules/glsl-tokenizer/string.js":
/*!***********************************************!*\
  !*** ./node_modules/glsl-tokenizer/string.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var tokenize = __webpack_require__(/*! ./index */ "./node_modules/glsl-tokenizer/index.js")

module.exports = tokenizeString

function tokenizeString(str, opt) {
  var generator = tokenize(opt)
  var tokens = []

  tokens = tokens.concat(generator(str))
  tokens = tokens.concat(generator(null))

  return tokens
}


/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/iota-array/iota.js":
/*!*****************************************!*\
  !*** ./node_modules/iota-array/iota.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function iota(n) {
  var result = new Array(n)
  for(var i=0; i<n; ++i) {
    result[i] = i
  }
  return result
}

module.exports = iota

/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/ndarray-ops/ndarray-ops.js":
/*!*************************************************!*\
  !*** ./node_modules/ndarray-ops/ndarray-ops.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var compile = __webpack_require__(/*! cwise-compiler */ "./node_modules/cwise-compiler/compiler.js")

var EmptyProc = {
  body: "",
  args: [],
  thisVars: [],
  localVars: []
}

function fixup(x) {
  if(!x) {
    return EmptyProc
  }
  for(var i=0; i<x.args.length; ++i) {
    var a = x.args[i]
    if(i === 0) {
      x.args[i] = {name: a, lvalue:true, rvalue: !!x.rvalue, count:x.count||1 }
    } else {
      x.args[i] = {name: a, lvalue:false, rvalue:true, count: 1}
    }
  }
  if(!x.thisVars) {
    x.thisVars = []
  }
  if(!x.localVars) {
    x.localVars = []
  }
  return x
}

function pcompile(user_args) {
  return compile({
    args:     user_args.args,
    pre:      fixup(user_args.pre),
    body:     fixup(user_args.body),
    post:     fixup(user_args.proc),
    funcName: user_args.funcName
  })
}

function makeOp(user_args) {
  var args = []
  for(var i=0; i<user_args.args.length; ++i) {
    args.push("a"+i)
  }
  var wrapper = new Function("P", [
    "return function ", user_args.funcName, "_ndarrayops(", args.join(","), ") {P(", args.join(","), ");return a0}"
  ].join(""))
  return wrapper(pcompile(user_args))
}

var assign_ops = {
  add:  "+",
  sub:  "-",
  mul:  "*",
  div:  "/",
  mod:  "%",
  band: "&",
  bor:  "|",
  bxor: "^",
  lshift: "<<",
  rshift: ">>",
  rrshift: ">>>"
}
;(function(){
  for(var id in assign_ops) {
    var op = assign_ops[id]
    exports[id] = makeOp({
      args: ["array","array","array"],
      body: {args:["a","b","c"],
             body: "a=b"+op+"c"},
      funcName: id
    })
    exports[id+"eq"] = makeOp({
      args: ["array","array"],
      body: {args:["a","b"],
             body:"a"+op+"=b"},
      rvalue: true,
      funcName: id+"eq"
    })
    exports[id+"s"] = makeOp({
      args: ["array", "array", "scalar"],
      body: {args:["a","b","s"],
             body:"a=b"+op+"s"},
      funcName: id+"s"
    })
    exports[id+"seq"] = makeOp({
      args: ["array","scalar"],
      body: {args:["a","s"],
             body:"a"+op+"=s"},
      rvalue: true,
      funcName: id+"seq"
    })
  }
})();

var unary_ops = {
  not: "!",
  bnot: "~",
  neg: "-",
  recip: "1.0/"
}
;(function(){
  for(var id in unary_ops) {
    var op = unary_ops[id]
    exports[id] = makeOp({
      args: ["array", "array"],
      body: {args:["a","b"],
             body:"a="+op+"b"},
      funcName: id
    })
    exports[id+"eq"] = makeOp({
      args: ["array"],
      body: {args:["a"],
             body:"a="+op+"a"},
      rvalue: true,
      count: 2,
      funcName: id+"eq"
    })
  }
})();

var binary_ops = {
  and: "&&",
  or: "||",
  eq: "===",
  neq: "!==",
  lt: "<",
  gt: ">",
  leq: "<=",
  geq: ">="
}
;(function() {
  for(var id in binary_ops) {
    var op = binary_ops[id]
    exports[id] = makeOp({
      args: ["array","array","array"],
      body: {args:["a", "b", "c"],
             body:"a=b"+op+"c"},
      funcName: id
    })
    exports[id+"s"] = makeOp({
      args: ["array","array","scalar"],
      body: {args:["a", "b", "s"],
             body:"a=b"+op+"s"},
      funcName: id+"s"
    })
    exports[id+"eq"] = makeOp({
      args: ["array", "array"],
      body: {args:["a", "b"],
             body:"a=a"+op+"b"},
      rvalue:true,
      count:2,
      funcName: id+"eq"
    })
    exports[id+"seq"] = makeOp({
      args: ["array", "scalar"],
      body: {args:["a","s"],
             body:"a=a"+op+"s"},
      rvalue:true,
      count:2,
      funcName: id+"seq"
    })
  }
})();

var math_unary = [
  "abs",
  "acos",
  "asin",
  "atan",
  "ceil",
  "cos",
  "exp",
  "floor",
  "log",
  "round",
  "sin",
  "sqrt",
  "tan"
]
;(function() {
  for(var i=0; i<math_unary.length; ++i) {
    var f = math_unary[i]
    exports[f] = makeOp({
                    args: ["array", "array"],
                    pre: {args:[], body:"this_f=Math."+f, thisVars:["this_f"]},
                    body: {args:["a","b"], body:"a=this_f(b)", thisVars:["this_f"]},
                    funcName: f
                  })
    exports[f+"eq"] = makeOp({
                      args: ["array"],
                      pre: {args:[], body:"this_f=Math."+f, thisVars:["this_f"]},
                      body: {args: ["a"], body:"a=this_f(a)", thisVars:["this_f"]},
                      rvalue: true,
                      count: 2,
                      funcName: f+"eq"
                    })
  }
})();

var math_comm = [
  "max",
  "min",
  "atan2",
  "pow"
]
;(function(){
  for(var i=0; i<math_comm.length; ++i) {
    var f= math_comm[i]
    exports[f] = makeOp({
                  args:["array", "array", "array"],
                  pre: {args:[], body:"this_f=Math."+f, thisVars:["this_f"]},
                  body: {args:["a","b","c"], body:"a=this_f(b,c)", thisVars:["this_f"]},
                  funcName: f
                })
    exports[f+"s"] = makeOp({
                  args:["array", "array", "scalar"],
                  pre: {args:[], body:"this_f=Math."+f, thisVars:["this_f"]},
                  body: {args:["a","b","c"], body:"a=this_f(b,c)", thisVars:["this_f"]},
                  funcName: f+"s"
                  })
    exports[f+"eq"] = makeOp({ args:["array", "array"],
                  pre: {args:[], body:"this_f=Math."+f, thisVars:["this_f"]},
                  body: {args:["a","b"], body:"a=this_f(a,b)", thisVars:["this_f"]},
                  rvalue: true,
                  count: 2,
                  funcName: f+"eq"
                  })
    exports[f+"seq"] = makeOp({ args:["array", "scalar"],
                  pre: {args:[], body:"this_f=Math."+f, thisVars:["this_f"]},
                  body: {args:["a","b"], body:"a=this_f(a,b)", thisVars:["this_f"]},
                  rvalue:true,
                  count:2,
                  funcName: f+"seq"
                  })
  }
})();

var math_noncomm = [
  "atan2",
  "pow"
]
;(function(){
  for(var i=0; i<math_noncomm.length; ++i) {
    var f= math_noncomm[i]
    exports[f+"op"] = makeOp({
                  args:["array", "array", "array"],
                  pre: {args:[], body:"this_f=Math."+f, thisVars:["this_f"]},
                  body: {args:["a","b","c"], body:"a=this_f(c,b)", thisVars:["this_f"]},
                  funcName: f+"op"
                })
    exports[f+"ops"] = makeOp({
                  args:["array", "array", "scalar"],
                  pre: {args:[], body:"this_f=Math."+f, thisVars:["this_f"]},
                  body: {args:["a","b","c"], body:"a=this_f(c,b)", thisVars:["this_f"]},
                  funcName: f+"ops"
                  })
    exports[f+"opeq"] = makeOp({ args:["array", "array"],
                  pre: {args:[], body:"this_f=Math."+f, thisVars:["this_f"]},
                  body: {args:["a","b"], body:"a=this_f(b,a)", thisVars:["this_f"]},
                  rvalue: true,
                  count: 2,
                  funcName: f+"opeq"
                  })
    exports[f+"opseq"] = makeOp({ args:["array", "scalar"],
                  pre: {args:[], body:"this_f=Math."+f, thisVars:["this_f"]},
                  body: {args:["a","b"], body:"a=this_f(b,a)", thisVars:["this_f"]},
                  rvalue:true,
                  count:2,
                  funcName: f+"opseq"
                  })
  }
})();

exports.any = compile({
  args:["array"],
  pre: EmptyProc,
  body: {args:[{name:"a", lvalue:false, rvalue:true, count:1}], body: "if(a){return true}", localVars: [], thisVars: []},
  post: {args:[], localVars:[], thisVars:[], body:"return false"},
  funcName: "any"
})

exports.all = compile({
  args:["array"],
  pre: EmptyProc,
  body: {args:[{name:"x", lvalue:false, rvalue:true, count:1}], body: "if(!x){return false}", localVars: [], thisVars: []},
  post: {args:[], localVars:[], thisVars:[], body:"return true"},
  funcName: "all"
})

exports.sum = compile({
  args:["array"],
  pre: {args:[], localVars:[], thisVars:["this_s"], body:"this_s=0"},
  body: {args:[{name:"a", lvalue:false, rvalue:true, count:1}], body: "this_s+=a", localVars: [], thisVars: ["this_s"]},
  post: {args:[], localVars:[], thisVars:["this_s"], body:"return this_s"},
  funcName: "sum"
})

exports.prod = compile({
  args:["array"],
  pre: {args:[], localVars:[], thisVars:["this_s"], body:"this_s=1"},
  body: {args:[{name:"a", lvalue:false, rvalue:true, count:1}], body: "this_s*=a", localVars: [], thisVars: ["this_s"]},
  post: {args:[], localVars:[], thisVars:["this_s"], body:"return this_s"},
  funcName: "prod"
})

exports.norm2squared = compile({
  args:["array"],
  pre: {args:[], localVars:[], thisVars:["this_s"], body:"this_s=0"},
  body: {args:[{name:"a", lvalue:false, rvalue:true, count:2}], body: "this_s+=a*a", localVars: [], thisVars: ["this_s"]},
  post: {args:[], localVars:[], thisVars:["this_s"], body:"return this_s"},
  funcName: "norm2squared"
})
  
exports.norm2 = compile({
  args:["array"],
  pre: {args:[], localVars:[], thisVars:["this_s"], body:"this_s=0"},
  body: {args:[{name:"a", lvalue:false, rvalue:true, count:2}], body: "this_s+=a*a", localVars: [], thisVars: ["this_s"]},
  post: {args:[], localVars:[], thisVars:["this_s"], body:"return Math.sqrt(this_s)"},
  funcName: "norm2"
})
  

exports.norminf = compile({
  args:["array"],
  pre: {args:[], localVars:[], thisVars:["this_s"], body:"this_s=0"},
  body: {args:[{name:"a", lvalue:false, rvalue:true, count:4}], body:"if(-a>this_s){this_s=-a}else if(a>this_s){this_s=a}", localVars: [], thisVars: ["this_s"]},
  post: {args:[], localVars:[], thisVars:["this_s"], body:"return this_s"},
  funcName: "norminf"
})

exports.norm1 = compile({
  args:["array"],
  pre: {args:[], localVars:[], thisVars:["this_s"], body:"this_s=0"},
  body: {args:[{name:"a", lvalue:false, rvalue:true, count:3}], body: "this_s+=a<0?-a:a", localVars: [], thisVars: ["this_s"]},
  post: {args:[], localVars:[], thisVars:["this_s"], body:"return this_s"},
  funcName: "norm1"
})

exports.sup = compile({
  args: [ "array" ],
  pre:
   { body: "this_h=-Infinity",
     args: [],
     thisVars: [ "this_h" ],
     localVars: [] },
  body:
   { body: "if(_inline_1_arg0_>this_h)this_h=_inline_1_arg0_",
     args: [{"name":"_inline_1_arg0_","lvalue":false,"rvalue":true,"count":2} ],
     thisVars: [ "this_h" ],
     localVars: [] },
  post:
   { body: "return this_h",
     args: [],
     thisVars: [ "this_h" ],
     localVars: [] }
 })

exports.inf = compile({
  args: [ "array" ],
  pre:
   { body: "this_h=Infinity",
     args: [],
     thisVars: [ "this_h" ],
     localVars: [] },
  body:
   { body: "if(_inline_1_arg0_<this_h)this_h=_inline_1_arg0_",
     args: [{"name":"_inline_1_arg0_","lvalue":false,"rvalue":true,"count":2} ],
     thisVars: [ "this_h" ],
     localVars: [] },
  post:
   { body: "return this_h",
     args: [],
     thisVars: [ "this_h" ],
     localVars: [] }
 })

exports.argmin = compile({
  args:["index","array","shape"],
  pre:{
    body:"{this_v=Infinity;this_i=_inline_0_arg2_.slice(0)}",
    args:[
      {name:"_inline_0_arg0_",lvalue:false,rvalue:false,count:0},
      {name:"_inline_0_arg1_",lvalue:false,rvalue:false,count:0},
      {name:"_inline_0_arg2_",lvalue:false,rvalue:true,count:1}
      ],
    thisVars:["this_i","this_v"],
    localVars:[]},
  body:{
    body:"{if(_inline_1_arg1_<this_v){this_v=_inline_1_arg1_;for(var _inline_1_k=0;_inline_1_k<_inline_1_arg0_.length;++_inline_1_k){this_i[_inline_1_k]=_inline_1_arg0_[_inline_1_k]}}}",
    args:[
      {name:"_inline_1_arg0_",lvalue:false,rvalue:true,count:2},
      {name:"_inline_1_arg1_",lvalue:false,rvalue:true,count:2}],
    thisVars:["this_i","this_v"],
    localVars:["_inline_1_k"]},
  post:{
    body:"{return this_i}",
    args:[],
    thisVars:["this_i"],
    localVars:[]}
})

exports.argmax = compile({
  args:["index","array","shape"],
  pre:{
    body:"{this_v=-Infinity;this_i=_inline_0_arg2_.slice(0)}",
    args:[
      {name:"_inline_0_arg0_",lvalue:false,rvalue:false,count:0},
      {name:"_inline_0_arg1_",lvalue:false,rvalue:false,count:0},
      {name:"_inline_0_arg2_",lvalue:false,rvalue:true,count:1}
      ],
    thisVars:["this_i","this_v"],
    localVars:[]},
  body:{
    body:"{if(_inline_1_arg1_>this_v){this_v=_inline_1_arg1_;for(var _inline_1_k=0;_inline_1_k<_inline_1_arg0_.length;++_inline_1_k){this_i[_inline_1_k]=_inline_1_arg0_[_inline_1_k]}}}",
    args:[
      {name:"_inline_1_arg0_",lvalue:false,rvalue:true,count:2},
      {name:"_inline_1_arg1_",lvalue:false,rvalue:true,count:2}],
    thisVars:["this_i","this_v"],
    localVars:["_inline_1_k"]},
  post:{
    body:"{return this_i}",
    args:[],
    thisVars:["this_i"],
    localVars:[]}
})  

exports.random = makeOp({
  args: ["array"],
  pre: {args:[], body:"this_f=Math.random", thisVars:["this_f"]},
  body: {args: ["a"], body:"a=this_f()", thisVars:["this_f"]},
  funcName: "random"
})

exports.assign = makeOp({
  args:["array", "array"],
  body: {args:["a", "b"], body:"a=b"},
  funcName: "assign" })

exports.assigns = makeOp({
  args:["array", "scalar"],
  body: {args:["a", "b"], body:"a=b"},
  funcName: "assigns" })


exports.equals = compile({
  args:["array", "array"],
  pre: EmptyProc,
  body: {args:[{name:"x", lvalue:false, rvalue:true, count:1},
               {name:"y", lvalue:false, rvalue:true, count:1}], 
        body: "if(x!==y){return false}", 
        localVars: [], 
        thisVars: []},
  post: {args:[], localVars:[], thisVars:[], body:"return true"},
  funcName: "equals"
})




/***/ }),

/***/ "./node_modules/ndarray/ndarray.js":
/*!*****************************************!*\
  !*** ./node_modules/ndarray/ndarray.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var iota = __webpack_require__(/*! iota-array */ "./node_modules/iota-array/iota.js")
var isBuffer = __webpack_require__(/*! is-buffer */ "./node_modules/is-buffer/index.js")

var hasTypedArrays  = ((typeof Float64Array) !== "undefined")

function compare1st(a, b) {
  return a[0] - b[0]
}

function order() {
  var stride = this.stride
  var terms = new Array(stride.length)
  var i
  for(i=0; i<terms.length; ++i) {
    terms[i] = [Math.abs(stride[i]), i]
  }
  terms.sort(compare1st)
  var result = new Array(terms.length)
  for(i=0; i<result.length; ++i) {
    result[i] = terms[i][1]
  }
  return result
}

function compileConstructor(dtype, dimension) {
  var className = ["View", dimension, "d", dtype].join("")
  if(dimension < 0) {
    className = "View_Nil" + dtype
  }
  var useGetters = (dtype === "generic")

  if(dimension === -1) {
    //Special case for trivial arrays
    var code =
      "function "+className+"(a){this.data=a;};\
var proto="+className+".prototype;\
proto.dtype='"+dtype+"';\
proto.index=function(){return -1};\
proto.size=0;\
proto.dimension=-1;\
proto.shape=proto.stride=proto.order=[];\
proto.lo=proto.hi=proto.transpose=proto.step=\
function(){return new "+className+"(this.data);};\
proto.get=proto.set=function(){};\
proto.pick=function(){return null};\
return function construct_"+className+"(a){return new "+className+"(a);}"
    var procedure = new Function(code)
    return procedure()
  } else if(dimension === 0) {
    //Special case for 0d arrays
    var code =
      "function "+className+"(a,d) {\
this.data = a;\
this.offset = d\
};\
var proto="+className+".prototype;\
proto.dtype='"+dtype+"';\
proto.index=function(){return this.offset};\
proto.dimension=0;\
proto.size=1;\
proto.shape=\
proto.stride=\
proto.order=[];\
proto.lo=\
proto.hi=\
proto.transpose=\
proto.step=function "+className+"_copy() {\
return new "+className+"(this.data,this.offset)\
};\
proto.pick=function "+className+"_pick(){\
return TrivialArray(this.data);\
};\
proto.valueOf=proto.get=function "+className+"_get(){\
return "+(useGetters ? "this.data.get(this.offset)" : "this.data[this.offset]")+
"};\
proto.set=function "+className+"_set(v){\
return "+(useGetters ? "this.data.set(this.offset,v)" : "this.data[this.offset]=v")+"\
};\
return function construct_"+className+"(a,b,c,d){return new "+className+"(a,d)}"
    var procedure = new Function("TrivialArray", code)
    return procedure(CACHED_CONSTRUCTORS[dtype][0])
  }

  var code = ["'use strict'"]

  //Create constructor for view
  var indices = iota(dimension)
  var args = indices.map(function(i) { return "i"+i })
  var index_str = "this.offset+" + indices.map(function(i) {
        return "this.stride[" + i + "]*i" + i
      }).join("+")
  var shapeArg = indices.map(function(i) {
      return "b"+i
    }).join(",")
  var strideArg = indices.map(function(i) {
      return "c"+i
    }).join(",")
  code.push(
    "function "+className+"(a," + shapeArg + "," + strideArg + ",d){this.data=a",
      "this.shape=[" + shapeArg + "]",
      "this.stride=[" + strideArg + "]",
      "this.offset=d|0}",
    "var proto="+className+".prototype",
    "proto.dtype='"+dtype+"'",
    "proto.dimension="+dimension)

  //view.size:
  code.push("Object.defineProperty(proto,'size',{get:function "+className+"_size(){\
return "+indices.map(function(i) { return "this.shape["+i+"]" }).join("*"),
"}})")

  //view.order:
  if(dimension === 1) {
    code.push("proto.order=[0]")
  } else {
    code.push("Object.defineProperty(proto,'order',{get:")
    if(dimension < 4) {
      code.push("function "+className+"_order(){")
      if(dimension === 2) {
        code.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})")
      } else if(dimension === 3) {
        code.push(
"var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);\
if(s0>s1){\
if(s1>s2){\
return [2,1,0];\
}else if(s0>s2){\
return [1,2,0];\
}else{\
return [1,0,2];\
}\
}else if(s0>s2){\
return [2,0,1];\
}else if(s2>s1){\
return [0,1,2];\
}else{\
return [0,2,1];\
}}})")
      }
    } else {
      code.push("ORDER})")
    }
  }

  //view.set(i0, ..., v):
  code.push(
"proto.set=function "+className+"_set("+args.join(",")+",v){")
  if(useGetters) {
    code.push("return this.data.set("+index_str+",v)}")
  } else {
    code.push("return this.data["+index_str+"]=v}")
  }

  //view.get(i0, ...):
  code.push("proto.get=function "+className+"_get("+args.join(",")+"){")
  if(useGetters) {
    code.push("return this.data.get("+index_str+")}")
  } else {
    code.push("return this.data["+index_str+"]}")
  }

  //view.index:
  code.push(
    "proto.index=function "+className+"_index(", args.join(), "){return "+index_str+"}")

  //view.hi():
  code.push("proto.hi=function "+className+"_hi("+args.join(",")+"){return new "+className+"(this.data,"+
    indices.map(function(i) {
      return ["(typeof i",i,"!=='number'||i",i,"<0)?this.shape[", i, "]:i", i,"|0"].join("")
    }).join(",")+","+
    indices.map(function(i) {
      return "this.stride["+i + "]"
    }).join(",")+",this.offset)}")

  //view.lo():
  var a_vars = indices.map(function(i) { return "a"+i+"=this.shape["+i+"]" })
  var c_vars = indices.map(function(i) { return "c"+i+"=this.stride["+i+"]" })
  code.push("proto.lo=function "+className+"_lo("+args.join(",")+"){var b=this.offset,d=0,"+a_vars.join(",")+","+c_vars.join(","))
  for(var i=0; i<dimension; ++i) {
    code.push(
"if(typeof i"+i+"==='number'&&i"+i+">=0){\
d=i"+i+"|0;\
b+=c"+i+"*d;\
a"+i+"-=d}")
  }
  code.push("return new "+className+"(this.data,"+
    indices.map(function(i) {
      return "a"+i
    }).join(",")+","+
    indices.map(function(i) {
      return "c"+i
    }).join(",")+",b)}")

  //view.step():
  code.push("proto.step=function "+className+"_step("+args.join(",")+"){var "+
    indices.map(function(i) {
      return "a"+i+"=this.shape["+i+"]"
    }).join(",")+","+
    indices.map(function(i) {
      return "b"+i+"=this.stride["+i+"]"
    }).join(",")+",c=this.offset,d=0,ceil=Math.ceil")
  for(var i=0; i<dimension; ++i) {
    code.push(
"if(typeof i"+i+"==='number'){\
d=i"+i+"|0;\
if(d<0){\
c+=b"+i+"*(a"+i+"-1);\
a"+i+"=ceil(-a"+i+"/d)\
}else{\
a"+i+"=ceil(a"+i+"/d)\
}\
b"+i+"*=d\
}")
  }
  code.push("return new "+className+"(this.data,"+
    indices.map(function(i) {
      return "a" + i
    }).join(",")+","+
    indices.map(function(i) {
      return "b" + i
    }).join(",")+",c)}")

  //view.transpose():
  var tShape = new Array(dimension)
  var tStride = new Array(dimension)
  for(var i=0; i<dimension; ++i) {
    tShape[i] = "a[i"+i+"]"
    tStride[i] = "b[i"+i+"]"
  }
  code.push("proto.transpose=function "+className+"_transpose("+args+"){"+
    args.map(function(n,idx) { return n + "=(" + n + "===undefined?" + idx + ":" + n + "|0)"}).join(";"),
    "var a=this.shape,b=this.stride;return new "+className+"(this.data,"+tShape.join(",")+","+tStride.join(",")+",this.offset)}")

  //view.pick():
  code.push("proto.pick=function "+className+"_pick("+args+"){var a=[],b=[],c=this.offset")
  for(var i=0; i<dimension; ++i) {
    code.push("if(typeof i"+i+"==='number'&&i"+i+">=0){c=(c+this.stride["+i+"]*i"+i+")|0}else{a.push(this.shape["+i+"]);b.push(this.stride["+i+"])}")
  }
  code.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}")

  //Add return statement
  code.push("return function construct_"+className+"(data,shape,stride,offset){return new "+className+"(data,"+
    indices.map(function(i) {
      return "shape["+i+"]"
    }).join(",")+","+
    indices.map(function(i) {
      return "stride["+i+"]"
    }).join(",")+",offset)}")

  //Compile procedure
  var procedure = new Function("CTOR_LIST", "ORDER", code.join("\n"))
  return procedure(CACHED_CONSTRUCTORS[dtype], order)
}

function arrayDType(data) {
  if(isBuffer(data)) {
    return "buffer"
  }
  if(hasTypedArrays) {
    switch(Object.prototype.toString.call(data)) {
      case "[object Float64Array]":
        return "float64"
      case "[object Float32Array]":
        return "float32"
      case "[object Int8Array]":
        return "int8"
      case "[object Int16Array]":
        return "int16"
      case "[object Int32Array]":
        return "int32"
      case "[object Uint8Array]":
        return "uint8"
      case "[object Uint16Array]":
        return "uint16"
      case "[object Uint32Array]":
        return "uint32"
      case "[object Uint8ClampedArray]":
        return "uint8_clamped"
      case "[object BigInt64Array]":
        return "bigint64"
      case "[object BigUint64Array]":
        return "biguint64"
    }
  }
  if(Array.isArray(data)) {
    return "array"
  }
  return "generic"
}

var CACHED_CONSTRUCTORS = {
  "float32":[],
  "float64":[],
  "int8":[],
  "int16":[],
  "int32":[],
  "uint8":[],
  "uint16":[],
  "uint32":[],
  "array":[],
  "uint8_clamped":[],
  "bigint64": [],
  "biguint64": [],
  "buffer":[],
  "generic":[]
}

;(function() {
  for(var id in CACHED_CONSTRUCTORS) {
    CACHED_CONSTRUCTORS[id].push(compileConstructor(id, -1))
  }
});

function wrappedNDArrayCtor(data, shape, stride, offset) {
  if(data === undefined) {
    var ctor = CACHED_CONSTRUCTORS.array[0]
    return ctor([])
  } else if(typeof data === "number") {
    data = [data]
  }
  if(shape === undefined) {
    shape = [ data.length ]
  }
  var d = shape.length
  if(stride === undefined) {
    stride = new Array(d)
    for(var i=d-1, sz=1; i>=0; --i) {
      stride[i] = sz
      sz *= shape[i]
    }
  }
  if(offset === undefined) {
    offset = 0
    for(var i=0; i<d; ++i) {
      if(stride[i] < 0) {
        offset -= (shape[i]-1)*stride[i]
      }
    }
  }
  var dtype = arrayDType(data)
  var ctor_list = CACHED_CONSTRUCTORS[dtype]
  while(ctor_list.length <= d+1) {
    ctor_list.push(compileConstructor(dtype, ctor_list.length-1))
  }
  var ctor = ctor_list[d+1]
  return ctor(data, shape, stride, offset)
}

module.exports = wrappedNDArrayCtor


/***/ }),

/***/ "./node_modules/pad-left/index.js":
/*!****************************************!*\
  !*** ./node_modules/pad-left/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * pad-left <https://github.com/jonschlinkert/pad-left>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT license.
 */



var repeat = __webpack_require__(/*! repeat-string */ "./node_modules/repeat-string/index.js");

module.exports = function padLeft(str, num, ch) {
  ch = typeof ch !== 'undefined' ? (ch + '') : ' ';
  return repeat(ch, num) + str;
};

/***/ }),

/***/ "./node_modules/repeat-string/index.js":
/*!*********************************************!*\
  !*** ./node_modules/repeat-string/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * repeat-string <https://github.com/jonschlinkert/repeat-string>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



/**
 * Results cache
 */

var res = '';
var cache;

/**
 * Expose `repeat`
 */

module.exports = repeat;

/**
 * Repeat the given `string` the specified `number`
 * of times.
 *
 * **Example:**
 *
 * ```js
 * var repeat = require('repeat-string');
 * repeat('A', 5);
 * //=> AAAAA
 * ```
 *
 * @param {String} `string` The string to repeat
 * @param {Number} `number` The number of times to repeat the string
 * @return {String} Repeated string
 * @api public
 */

function repeat(str, num) {
  if (typeof str !== 'string') {
    throw new TypeError('expected a string');
  }

  // cover common, quick use cases
  if (num === 1) return str;
  if (num === 2) return str + str;

  var max = str.length * num;
  if (cache !== str || typeof cache === 'undefined') {
    cache = str;
    res = '';
  } else if (res.length >= max) {
    return res.substr(0, max);
  }

  while (max > res.length && num > 1) {
    if (num & 1) {
      res += str;
    }

    num >>= 1;
    str += str;
  }

  res += str;
  res = res.substr(0, max);
  return res;
}


/***/ }),

/***/ "./node_modules/sprintf-js/src/sprintf.js":
/*!************************************************!*\
  !*** ./node_modules/sprintf-js/src/sprintf.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/* global window, exports, define */

!function() {
    'use strict'

    var re = {
        not_string: /[^s]/,
        not_bool: /[^t]/,
        not_type: /[^T]/,
        not_primitive: /[^v]/,
        number: /[diefg]/,
        numeric_arg: /[bcdiefguxX]/,
        json: /[j]/,
        not_json: /[^j]/,
        text: /^[^\x25]+/,
        modulo: /^\x25{2}/,
        placeholder: /^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,
        key: /^([a-z_][a-z_\d]*)/i,
        key_access: /^\.([a-z_][a-z_\d]*)/i,
        index_access: /^\[(\d+)\]/,
        sign: /^[+-]/
    }

    function sprintf(key) {
        // `arguments` is not an array, but should be fine for this call
        return sprintf_format(sprintf_parse(key), arguments)
    }

    function vsprintf(fmt, argv) {
        return sprintf.apply(null, [fmt].concat(argv || []))
    }

    function sprintf_format(parse_tree, argv) {
        var cursor = 1, tree_length = parse_tree.length, arg, output = '', i, k, ph, pad, pad_character, pad_length, is_positive, sign
        for (i = 0; i < tree_length; i++) {
            if (typeof parse_tree[i] === 'string') {
                output += parse_tree[i]
            }
            else if (typeof parse_tree[i] === 'object') {
                ph = parse_tree[i] // convenience purposes only
                if (ph.keys) { // keyword argument
                    arg = argv[cursor]
                    for (k = 0; k < ph.keys.length; k++) {
                        if (arg == undefined) {
                            throw new Error(sprintf('[sprintf] Cannot access property "%s" of undefined value "%s"', ph.keys[k], ph.keys[k-1]))
                        }
                        arg = arg[ph.keys[k]]
                    }
                }
                else if (ph.param_no) { // positional argument (explicit)
                    arg = argv[ph.param_no]
                }
                else { // positional argument (implicit)
                    arg = argv[cursor++]
                }

                if (re.not_type.test(ph.type) && re.not_primitive.test(ph.type) && arg instanceof Function) {
                    arg = arg()
                }

                if (re.numeric_arg.test(ph.type) && (typeof arg !== 'number' && isNaN(arg))) {
                    throw new TypeError(sprintf('[sprintf] expecting number but found %T', arg))
                }

                if (re.number.test(ph.type)) {
                    is_positive = arg >= 0
                }

                switch (ph.type) {
                    case 'b':
                        arg = parseInt(arg, 10).toString(2)
                        break
                    case 'c':
                        arg = String.fromCharCode(parseInt(arg, 10))
                        break
                    case 'd':
                    case 'i':
                        arg = parseInt(arg, 10)
                        break
                    case 'j':
                        arg = JSON.stringify(arg, null, ph.width ? parseInt(ph.width) : 0)
                        break
                    case 'e':
                        arg = ph.precision ? parseFloat(arg).toExponential(ph.precision) : parseFloat(arg).toExponential()
                        break
                    case 'f':
                        arg = ph.precision ? parseFloat(arg).toFixed(ph.precision) : parseFloat(arg)
                        break
                    case 'g':
                        arg = ph.precision ? String(Number(arg.toPrecision(ph.precision))) : parseFloat(arg)
                        break
                    case 'o':
                        arg = (parseInt(arg, 10) >>> 0).toString(8)
                        break
                    case 's':
                        arg = String(arg)
                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg)
                        break
                    case 't':
                        arg = String(!!arg)
                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg)
                        break
                    case 'T':
                        arg = Object.prototype.toString.call(arg).slice(8, -1).toLowerCase()
                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg)
                        break
                    case 'u':
                        arg = parseInt(arg, 10) >>> 0
                        break
                    case 'v':
                        arg = arg.valueOf()
                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg)
                        break
                    case 'x':
                        arg = (parseInt(arg, 10) >>> 0).toString(16)
                        break
                    case 'X':
                        arg = (parseInt(arg, 10) >>> 0).toString(16).toUpperCase()
                        break
                }
                if (re.json.test(ph.type)) {
                    output += arg
                }
                else {
                    if (re.number.test(ph.type) && (!is_positive || ph.sign)) {
                        sign = is_positive ? '+' : '-'
                        arg = arg.toString().replace(re.sign, '')
                    }
                    else {
                        sign = ''
                    }
                    pad_character = ph.pad_char ? ph.pad_char === '0' ? '0' : ph.pad_char.charAt(1) : ' '
                    pad_length = ph.width - (sign + arg).length
                    pad = ph.width ? (pad_length > 0 ? pad_character.repeat(pad_length) : '') : ''
                    output += ph.align ? sign + arg + pad : (pad_character === '0' ? sign + pad + arg : pad + sign + arg)
                }
            }
        }
        return output
    }

    var sprintf_cache = Object.create(null)

    function sprintf_parse(fmt) {
        if (sprintf_cache[fmt]) {
            return sprintf_cache[fmt]
        }

        var _fmt = fmt, match, parse_tree = [], arg_names = 0
        while (_fmt) {
            if ((match = re.text.exec(_fmt)) !== null) {
                parse_tree.push(match[0])
            }
            else if ((match = re.modulo.exec(_fmt)) !== null) {
                parse_tree.push('%')
            }
            else if ((match = re.placeholder.exec(_fmt)) !== null) {
                if (match[2]) {
                    arg_names |= 1
                    var field_list = [], replacement_field = match[2], field_match = []
                    if ((field_match = re.key.exec(replacement_field)) !== null) {
                        field_list.push(field_match[1])
                        while ((replacement_field = replacement_field.substring(field_match[0].length)) !== '') {
                            if ((field_match = re.key_access.exec(replacement_field)) !== null) {
                                field_list.push(field_match[1])
                            }
                            else if ((field_match = re.index_access.exec(replacement_field)) !== null) {
                                field_list.push(field_match[1])
                            }
                            else {
                                throw new SyntaxError('[sprintf] failed to parse named argument key')
                            }
                        }
                    }
                    else {
                        throw new SyntaxError('[sprintf] failed to parse named argument key')
                    }
                    match[2] = field_list
                }
                else {
                    arg_names |= 2
                }
                if (arg_names === 3) {
                    throw new Error('[sprintf] mixing positional and named placeholders is not (yet) supported')
                }

                parse_tree.push(
                    {
                        placeholder: match[0],
                        param_no:    match[1],
                        keys:        match[2],
                        sign:        match[3],
                        pad_char:    match[4],
                        align:       match[5],
                        width:       match[6],
                        precision:   match[7],
                        type:        match[8]
                    }
                )
            }
            else {
                throw new SyntaxError('[sprintf] unexpected placeholder')
            }
            _fmt = _fmt.substring(match[0].length)
        }
        return sprintf_cache[fmt] = parse_tree
    }

    /**
     * export to either browser or node.js
     */
    /* eslint-disable quote-props */
    if (true) {
        exports['sprintf'] = sprintf
        exports['vsprintf'] = vsprintf
    }
    if (typeof window !== 'undefined') {
        window['sprintf'] = sprintf
        window['vsprintf'] = vsprintf

        if (true) {
            !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
                return {
                    'sprintf': sprintf,
                    'vsprintf': vsprintf
                }
            }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
        }
    }
    /* eslint-enable quote-props */
}(); // eslint-disable-line


/***/ }),

/***/ "./node_modules/typedarray-pool/pool.js":
/*!**********************************************!*\
  !*** ./node_modules/typedarray-pool/pool.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var bits = __webpack_require__(/*! bit-twiddle */ "./node_modules/bit-twiddle/twiddle.js")
var dup = __webpack_require__(/*! dup */ "./node_modules/dup/dup.js")
var Buffer = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js").Buffer

//Legacy pool support
if(!global.__TYPEDARRAY_POOL) {
  global.__TYPEDARRAY_POOL = {
      UINT8     : dup([32, 0])
    , UINT16    : dup([32, 0])
    , UINT32    : dup([32, 0])
    , BIGUINT64 : dup([32, 0])
    , INT8      : dup([32, 0])
    , INT16     : dup([32, 0])
    , INT32     : dup([32, 0])
    , BIGINT64  : dup([32, 0])
    , FLOAT     : dup([32, 0])
    , DOUBLE    : dup([32, 0])
    , DATA      : dup([32, 0])
    , UINT8C    : dup([32, 0])
    , BUFFER    : dup([32, 0])
  }
}

var hasUint8C = (typeof Uint8ClampedArray) !== 'undefined'
var hasBigUint64 = (typeof BigUint64Array) !== 'undefined'
var hasBigInt64 = (typeof BigInt64Array) !== 'undefined'
var POOL = global.__TYPEDARRAY_POOL

//Upgrade pool
if(!POOL.UINT8C) {
  POOL.UINT8C = dup([32, 0])
}
if(!POOL.BIGUINT64) {
  POOL.BIGUINT64 = dup([32, 0])
}
if(!POOL.BIGINT64) {
  POOL.BIGINT64 = dup([32, 0])
}
if(!POOL.BUFFER) {
  POOL.BUFFER = dup([32, 0])
}

//New technique: Only allocate from ArrayBufferView and Buffer
var DATA    = POOL.DATA
  , BUFFER  = POOL.BUFFER

exports.free = function free(array) {
  if(Buffer.isBuffer(array)) {
    BUFFER[bits.log2(array.length)].push(array)
  } else {
    if(Object.prototype.toString.call(array) !== '[object ArrayBuffer]') {
      array = array.buffer
    }
    if(!array) {
      return
    }
    var n = array.length || array.byteLength
    var log_n = bits.log2(n)|0
    DATA[log_n].push(array)
  }
}

function freeArrayBuffer(buffer) {
  if(!buffer) {
    return
  }
  var n = buffer.length || buffer.byteLength
  var log_n = bits.log2(n)
  DATA[log_n].push(buffer)
}

function freeTypedArray(array) {
  freeArrayBuffer(array.buffer)
}

exports.freeUint8 =
exports.freeUint16 =
exports.freeUint32 =
exports.freeBigUint64 =
exports.freeInt8 =
exports.freeInt16 =
exports.freeInt32 =
exports.freeBigInt64 =
exports.freeFloat32 = 
exports.freeFloat =
exports.freeFloat64 = 
exports.freeDouble = 
exports.freeUint8Clamped = 
exports.freeDataView = freeTypedArray

exports.freeArrayBuffer = freeArrayBuffer

exports.freeBuffer = function freeBuffer(array) {
  BUFFER[bits.log2(array.length)].push(array)
}

exports.malloc = function malloc(n, dtype) {
  if(dtype === undefined || dtype === 'arraybuffer') {
    return mallocArrayBuffer(n)
  } else {
    switch(dtype) {
      case 'uint8':
        return mallocUint8(n)
      case 'uint16':
        return mallocUint16(n)
      case 'uint32':
        return mallocUint32(n)
      case 'int8':
        return mallocInt8(n)
      case 'int16':
        return mallocInt16(n)
      case 'int32':
        return mallocInt32(n)
      case 'float':
      case 'float32':
        return mallocFloat(n)
      case 'double':
      case 'float64':
        return mallocDouble(n)
      case 'uint8_clamped':
        return mallocUint8Clamped(n)
      case 'bigint64':
        return mallocBigInt64(n)
      case 'biguint64':
        return mallocBigUint64(n)
      case 'buffer':
        return mallocBuffer(n)
      case 'data':
      case 'dataview':
        return mallocDataView(n)

      default:
        return null
    }
  }
  return null
}

function mallocArrayBuffer(n) {
  var n = bits.nextPow2(n)
  var log_n = bits.log2(n)
  var d = DATA[log_n]
  if(d.length > 0) {
    return d.pop()
  }
  return new ArrayBuffer(n)
}
exports.mallocArrayBuffer = mallocArrayBuffer

function mallocUint8(n) {
  return new Uint8Array(mallocArrayBuffer(n), 0, n)
}
exports.mallocUint8 = mallocUint8

function mallocUint16(n) {
  return new Uint16Array(mallocArrayBuffer(2*n), 0, n)
}
exports.mallocUint16 = mallocUint16

function mallocUint32(n) {
  return new Uint32Array(mallocArrayBuffer(4*n), 0, n)
}
exports.mallocUint32 = mallocUint32

function mallocInt8(n) {
  return new Int8Array(mallocArrayBuffer(n), 0, n)
}
exports.mallocInt8 = mallocInt8

function mallocInt16(n) {
  return new Int16Array(mallocArrayBuffer(2*n), 0, n)
}
exports.mallocInt16 = mallocInt16

function mallocInt32(n) {
  return new Int32Array(mallocArrayBuffer(4*n), 0, n)
}
exports.mallocInt32 = mallocInt32

function mallocFloat(n) {
  return new Float32Array(mallocArrayBuffer(4*n), 0, n)
}
exports.mallocFloat32 = exports.mallocFloat = mallocFloat

function mallocDouble(n) {
  return new Float64Array(mallocArrayBuffer(8*n), 0, n)
}
exports.mallocFloat64 = exports.mallocDouble = mallocDouble

function mallocUint8Clamped(n) {
  if(hasUint8C) {
    return new Uint8ClampedArray(mallocArrayBuffer(n), 0, n)
  } else {
    return mallocUint8(n)
  }
}
exports.mallocUint8Clamped = mallocUint8Clamped

function mallocBigUint64(n) {
  if(hasBigUint64) {
    return new BigUint64Array(mallocArrayBuffer(8*n), 0, n)
  } else {
    return null;
  }
}
exports.mallocBigUint64 = mallocBigUint64

function mallocBigInt64(n) {
  if (hasBigInt64) {
    return new BigInt64Array(mallocArrayBuffer(8*n), 0, n)
  } else {
    return null;
  }
}
exports.mallocBigInt64 = mallocBigInt64

function mallocDataView(n) {
  return new DataView(mallocArrayBuffer(n), 0, n)
}
exports.mallocDataView = mallocDataView

function mallocBuffer(n) {
  n = bits.nextPow2(n)
  var log_n = bits.log2(n)
  var cache = BUFFER[log_n]
  if(cache.length > 0) {
    return cache.pop()
  }
  return new Buffer(n)
}
exports.mallocBuffer = mallocBuffer

exports.clearCache = function clearCache() {
  for(var i=0; i<32; ++i) {
    POOL.UINT8[i].length = 0
    POOL.UINT16[i].length = 0
    POOL.UINT32[i].length = 0
    POOL.INT8[i].length = 0
    POOL.INT16[i].length = 0
    POOL.INT32[i].length = 0
    POOL.FLOAT[i].length = 0
    POOL.DOUBLE[i].length = 0
    POOL.BIGUINT64[i].length = 0
    POOL.BIGINT64[i].length = 0
    POOL.UINT8C[i].length = 0
    DATA[i].length = 0
    BUFFER[i].length = 0
  }
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/uniq/uniq.js":
/*!***********************************!*\
  !*** ./node_modules/uniq/uniq.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function unique_pred(list, compare) {
  var ptr = 1
    , len = list.length
    , a=list[0], b=list[0]
  for(var i=1; i<len; ++i) {
    b = a
    a = list[i]
    if(compare(a, b)) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique_eq(list) {
  var ptr = 1
    , len = list.length
    , a=list[0], b = list[0]
  for(var i=1; i<len; ++i, b=a) {
    b = a
    a = list[i]
    if(a !== b) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique(list, compare, sorted) {
  if(list.length === 0) {
    return list
  }
  if(compare) {
    if(!sorted) {
      list.sort(compare)
    }
    return unique_pred(list, compare)
  }
  if(!sorted) {
    list.sort()
  }
  return unique_eq(list)
}

module.exports = unique


/***/ }),

/***/ "./node_modules/weakmap-shim/create-store.js":
/*!***************************************************!*\
  !*** ./node_modules/weakmap-shim/create-store.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hiddenStore = __webpack_require__(/*! ./hidden-store.js */ "./node_modules/weakmap-shim/hidden-store.js");

module.exports = createStore;

function createStore() {
    var key = {};

    return function (obj) {
        if ((typeof obj !== 'object' || obj === null) &&
            typeof obj !== 'function'
        ) {
            throw new Error('Weakmap-shim: Key must be object')
        }

        var store = obj.valueOf(key);
        return store && store.identity === key ?
            store : hiddenStore(obj, key);
    };
}


/***/ }),

/***/ "./node_modules/weakmap-shim/hidden-store.js":
/*!***************************************************!*\
  !*** ./node_modules/weakmap-shim/hidden-store.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = hiddenStore;

function hiddenStore(obj, key) {
    var store = { identity: key };
    var valueOf = obj.valueOf;

    Object.defineProperty(obj, "valueOf", {
        value: function (value) {
            return value !== key ?
                valueOf.apply(this, arguments) : store;
        },
        writable: true
    });

    return store;
}


/***/ }),

/***/ "./node_modules/weakmap-shim/index.js":
/*!********************************************!*\
  !*** ./node_modules/weakmap-shim/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Original - @Gozola.
// https://gist.github.com/Gozala/1269991
// This is a reimplemented version (with a few bug fixes).

var createStore = __webpack_require__(/*! ./create-store.js */ "./node_modules/weakmap-shim/create-store.js");

module.exports = weakMap;

function weakMap() {
    var privates = createStore();

    return {
        'get': function (key, fallback) {
            var store = privates(key)
            return store.hasOwnProperty('value') ?
                store.value : fallback
        },
        'set': function (key, value) {
            privates(key).value = value;
            return this;
        },
        'has': function(key) {
            return 'value' in privates(key);
        },
        'delete': function (key) {
            return delete privates(key).value;
        }
    }
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gl_transitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gl-transitions */ "./node_modules/gl-transitions/index.js");
/* harmony import */ var gl_transitions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gl_transitions__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gl_transition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gl-transition */ "./node_modules/gl-transition/lib/index.js");
/* harmony import */ var gl_transition__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gl_transition__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gl_texture2d__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gl-texture2d */ "./node_modules/gl-texture2d/texture.js");
/* harmony import */ var gl_texture2d__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gl_texture2d__WEBPACK_IMPORTED_MODULE_2__);




async function render() {
  const imageFrom = await loadImage("img1.jpg");
  const imageTo = await loadImage("img2.jpg");
  // ^ NB: we just assumed you have these 2 imageFrom and imageTo Image objects that have the image loaded and ready
  const canvas = document.querySelector("canvas");
  // document.body.appendChild(canvas);
  canvas.width = imageFrom.width;
  canvas.height = imageTo.height;

  const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, -1, 4, 4, -1]), // see a-big-triangle
    gl.STATIC_DRAW
);
gl.viewport(0, 0, canvas.width, canvas.height);


let transitionNum = 0;

const img1 = gl_texture2d__WEBPACK_IMPORTED_MODULE_2___default()(gl, imageFrom);
img1.minFilter = gl.LINEAR;
img1.magFilter = gl.LINEAR;

const img2 = gl_texture2d__WEBPACK_IMPORTED_MODULE_2___default()(gl, imageTo);
img2.minFilter = gl.LINEAR;
img2.magFilter = gl.LINEAR;

let transition = gl_transition__WEBPACK_IMPORTED_MODULE_1___default()(gl, gl_transitions__WEBPACK_IMPORTED_MODULE_0___default.a[transitionNum]); // https://github.com/gl-transitions/gl-transitions/blob/master/transitions/cube.glsl

// animates forever!
const fps = 60;
const frameDuration = 1000 / fps;
let time = 0;
let lastTime = 0;
let progress = 100;
let firstFrame = true;
let from = img1;
let to = img2;
function render_(elapsed) {
  let delta
  if(firstFrame) {
    delta = 0;
    firstFrame = false;
  } else {
    delta = elapsed - lastTime
  }

  lastTime = elapsed;
  const step = delta / frameDuration;
  time += step;
  const currentProgress = (time/100)%1;

  if(currentProgress > progress || progress === 0) {
    transition.draw(progress, from, to, canvas.width, canvas.height);
    progress = currentProgress
    requestAnimationFrame(render_);
  } else {
    transition.draw(1, from, to, canvas.width, canvas.height);
    transitionNum++;
    if(transitionNum % 2) {
      from = img2;
      to = img1
    } else {
      from = img1;
      to = img2;
    }
    firstFrame = true;
    if(transitionNum === gl_transitions__WEBPACK_IMPORTED_MODULE_0___default.a.length-1) transitionNum = 0;
    transition = gl_transition__WEBPACK_IMPORTED_MODULE_1___default()(gl, gl_transitions__WEBPACK_IMPORTED_MODULE_0___default.a[transitionNum]);     
    progress = 0;

    setTimeout(() => {
      requestAnimationFrame(render_);
    }, 1000)

  }
  
}

requestAnimationFrame(render_);


// let progress = 0;
// let isEnded = false;
// const loop = (t) => {
//   const currentProgress = (t/1000)%1;
//   // if( currentProgress > progress) {
//     requestAnimationFrame(loop);
//     progress = currentProgress
//     transition.draw((t/1000)%1, from, to, canvas.width, canvas.height);
//   // } else {
//   //   transition.draw(1, from, to, canvas.width, canvas.height);
//   //   transitionNum++
//   //   if(transitionNum = transitions.length-1) transitionNum = 0;
//   //   transition = createTransition(gl, transitions[transitionNum]); 
//   // }
//   console.log(t);
// }


// requestAnimationFrame(loop);

async function loadImage(url) {
    return new Promise(res => {
        const img = document.createElement('img');
        img.src = url;
        img.onload = () => res(img);
    })
}
}

render();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FkZC1saW5lLW51bWJlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F0b2ItbGl0ZS9hdG9iLWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Jhc2U2NC1qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYml0LXR3aWRkbGUvdHdpZGRsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYnVmZmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jd2lzZS1jb21waWxlci9jb21waWxlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3dpc2UtY29tcGlsZXIvbGliL2NvbXBpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2N3aXNlLWNvbXBpbGVyL2xpYi90aHVuay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZHVwL2R1cC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2wtY29uc3RhbnRzLzEuMC9udW1iZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nbC1jb25zdGFudHMvbG9va3VwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nbC1mb3JtYXQtY29tcGlsZXItZXJyb3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dsLXNoYWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2wtc2hhZGVyL2xpYi9HTEVycm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nbC1zaGFkZXIvbGliL2NyZWF0ZS1hdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nbC1zaGFkZXIvbGliL2NyZWF0ZS11bmlmb3Jtcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2wtc2hhZGVyL2xpYi9yZWZsZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nbC1zaGFkZXIvbGliL3J1bnRpbWUtcmVmbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2wtc2hhZGVyL2xpYi9zaGFkZXItY2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dsLXRleHR1cmUyZC90ZXh0dXJlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nbC10cmFuc2l0aW9uL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2wtdHJhbnNpdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dsc2wtc2hhZGVyLW5hbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dsc2wtdG9rZW5pemVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nbHNsLXRva2VuaXplci9saWIvYnVpbHRpbnMtMzAwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dsc2wtdG9rZW5pemVyL2xpYi9idWlsdGlucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2xzbC10b2tlbml6ZXIvbGliL2xpdGVyYWxzLTMwMGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nbHNsLXRva2VuaXplci9saWIvbGl0ZXJhbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dsc2wtdG9rZW5pemVyL2xpYi9vcGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dsc2wtdG9rZW5pemVyL3N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaWVlZTc1NC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW90YS1hcnJheS9pb3RhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pcy1idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzYXJyYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25kYXJyYXktb3BzL25kYXJyYXktb3BzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZGFycmF5L25kYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BhZC1sZWZ0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZXBlYXQtc3RyaW5nL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zcHJpbnRmLWpzL3NyYy9zcHJpbnRmLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90eXBlZGFycmF5LXBvb2wvcG9vbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5pcS91bmlxLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy93ZWFrbWFwLXNoaW0vY3JlYXRlLXN0b3JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy93ZWFrbWFwLXNoaW0vaGlkZGVuLXN0b3JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy93ZWFrbWFwLXNoaW0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLGNBQWMsbUJBQU8sQ0FBQyxrREFBVTs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0ZZOztBQUVaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0MsU0FBUztBQUMzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQTBDLFVBQVU7QUFDcEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3JKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsNEJBQTRCLGNBQWM7QUFDMUMsNEJBQTRCLGNBQWM7QUFDMUMsNEJBQTRCLGNBQWM7QUFDMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxjQUFjLE9BQU87QUFDckI7QUFDQSxrQkFBa0IsR0FBRztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDMU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVZOztBQUVaLGFBQWEsbUJBQU8sQ0FBQyxvREFBVztBQUNoQyxjQUFjLG1CQUFPLENBQUMsZ0RBQVM7QUFDL0IsY0FBYyxtQkFBTyxDQUFDLGdEQUFTOztBQUUvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG1EQUFtRDtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFVBQVU7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFlBQVk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSx1Q0FBdUMsU0FBUztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlCQUFpQjtBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsaUJBQWlCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxFQUFFO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixlQUFlO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDO0FBQ0EscUJBQXFCLGVBQWU7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFlBQVk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsU0FBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsU0FBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxtQkFBbUIsY0FBYztBQUNqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELE9BQU87QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxPQUFPO0FBQzlEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQjtBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQixRQUFRO0FBQzdCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFD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QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUI7Ozs7Ozs7Ozs7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxxQkFBcUI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsUUFBUTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVSw2QkFBNkI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixtQkFBbUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUN2UUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLEtBQUs7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWMsS0FBSztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDaGpC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QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdFhBO0FBQ0EsV0FBVyxtQkFBTyxDQUFDLGlFQUFZOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3BFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3JKQSxXQUFXLG1CQUFPLENBQUMsaUVBQVk7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN0RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDN0ZB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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjLE1BQU07QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzFQWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ3hEQSxrQkFBa0IsbUJBQU8sQ0FBQyxzRUFBbUI7O0FBRTdDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xCQTs7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixtQkFBTyxDQUFDLHNFQUFtQjs7QUFFN0M7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzVCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFDSTtBQUNKOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQSxhQUFhLG1EQUFhO0FBQzFCO0FBQ0E7O0FBRUEsYUFBYSxtREFBYTtBQUMxQjtBQUNBOztBQUVBLGlCQUFpQixvREFBZ0IsS0FBSyxxREFBVyxpQkFBaUI7O0FBRWxFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHFEQUFXO0FBQ3BDLGlCQUFpQixvREFBZ0IsS0FBSyxxREFBVyxpQjtBQUNqRDs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSx3RTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsInZhciBwYWRMZWZ0ID0gcmVxdWlyZSgncGFkLWxlZnQnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFkZExpbmVOdW1iZXJzXG5mdW5jdGlvbiBhZGRMaW5lTnVtYmVycyAoc3RyaW5nLCBzdGFydCwgZGVsaW0pIHtcbiAgc3RhcnQgPSB0eXBlb2Ygc3RhcnQgPT09ICdudW1iZXInID8gc3RhcnQgOiAxXG4gIGRlbGltID0gZGVsaW0gfHwgJzogJ1xuXG4gIHZhciBsaW5lcyA9IHN0cmluZy5zcGxpdCgvXFxyP1xcbi8pXG4gIHZhciB0b3RhbERpZ2l0cyA9IFN0cmluZyhsaW5lcy5sZW5ndGggKyBzdGFydCAtIDEpLmxlbmd0aFxuICByZXR1cm4gbGluZXMubWFwKGZ1bmN0aW9uIChsaW5lLCBpKSB7XG4gICAgdmFyIGMgPSBpICsgc3RhcnRcbiAgICB2YXIgZGlnaXRzID0gU3RyaW5nKGMpLmxlbmd0aFxuICAgIHZhciBwcmVmaXggPSBwYWRMZWZ0KGMsIHRvdGFsRGlnaXRzIC0gZGlnaXRzKVxuICAgIHJldHVybiBwcmVmaXggKyBkZWxpbSArIGxpbmVcbiAgfSkuam9pbignXFxuJylcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gX2F0b2Ioc3RyKSB7XG4gIHJldHVybiBhdG9iKHN0cilcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5leHBvcnRzLmJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoXG5leHBvcnRzLnRvQnl0ZUFycmF5ID0gdG9CeXRlQXJyYXlcbmV4cG9ydHMuZnJvbUJ5dGVBcnJheSA9IGZyb21CeXRlQXJyYXlcblxudmFyIGxvb2t1cCA9IFtdXG52YXIgcmV2TG9va3VwID0gW11cbnZhciBBcnIgPSB0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcgPyBVaW50OEFycmF5IDogQXJyYXlcblxudmFyIGNvZGUgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLydcbmZvciAodmFyIGkgPSAwLCBsZW4gPSBjb2RlLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gIGxvb2t1cFtpXSA9IGNvZGVbaV1cbiAgcmV2TG9va3VwW2NvZGUuY2hhckNvZGVBdChpKV0gPSBpXG59XG5cbi8vIFN1cHBvcnQgZGVjb2RpbmcgVVJMLXNhZmUgYmFzZTY0IHN0cmluZ3MsIGFzIE5vZGUuanMgZG9lcy5cbi8vIFNlZTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQmFzZTY0I1VSTF9hcHBsaWNhdGlvbnNcbnJldkxvb2t1cFsnLScuY2hhckNvZGVBdCgwKV0gPSA2MlxucmV2TG9va3VwWydfJy5jaGFyQ29kZUF0KDApXSA9IDYzXG5cbmZ1bmN0aW9uIGdldExlbnMgKGI2NCkge1xuICB2YXIgbGVuID0gYjY0Lmxlbmd0aFxuXG4gIGlmIChsZW4gJSA0ID4gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzdHJpbmcuIExlbmd0aCBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNCcpXG4gIH1cblxuICAvLyBUcmltIG9mZiBleHRyYSBieXRlcyBhZnRlciBwbGFjZWhvbGRlciBieXRlcyBhcmUgZm91bmRcbiAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vYmVhdGdhbW1pdC9iYXNlNjQtanMvaXNzdWVzLzQyXG4gIHZhciB2YWxpZExlbiA9IGI2NC5pbmRleE9mKCc9JylcbiAgaWYgKHZhbGlkTGVuID09PSAtMSkgdmFsaWRMZW4gPSBsZW5cblxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gdmFsaWRMZW4gPT09IGxlblxuICAgID8gMFxuICAgIDogNCAtICh2YWxpZExlbiAlIDQpXG5cbiAgcmV0dXJuIFt2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuXVxufVxuXG4vLyBiYXNlNjQgaXMgNC8zICsgdXAgdG8gdHdvIGNoYXJhY3RlcnMgb2YgdGhlIG9yaWdpbmFsIGRhdGFcbmZ1bmN0aW9uIGJ5dGVMZW5ndGggKGI2NCkge1xuICB2YXIgbGVucyA9IGdldExlbnMoYjY0KVxuICB2YXIgdmFsaWRMZW4gPSBsZW5zWzBdXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSBsZW5zWzFdXG4gIHJldHVybiAoKHZhbGlkTGVuICsgcGxhY2VIb2xkZXJzTGVuKSAqIDMgLyA0KSAtIHBsYWNlSG9sZGVyc0xlblxufVxuXG5mdW5jdGlvbiBfYnl0ZUxlbmd0aCAoYjY0LCB2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuKSB7XG4gIHJldHVybiAoKHZhbGlkTGVuICsgcGxhY2VIb2xkZXJzTGVuKSAqIDMgLyA0KSAtIHBsYWNlSG9sZGVyc0xlblxufVxuXG5mdW5jdGlvbiB0b0J5dGVBcnJheSAoYjY0KSB7XG4gIHZhciB0bXBcbiAgdmFyIGxlbnMgPSBnZXRMZW5zKGI2NClcbiAgdmFyIHZhbGlkTGVuID0gbGVuc1swXVxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gbGVuc1sxXVxuXG4gIHZhciBhcnIgPSBuZXcgQXJyKF9ieXRlTGVuZ3RoKGI2NCwgdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbikpXG5cbiAgdmFyIGN1ckJ5dGUgPSAwXG5cbiAgLy8gaWYgdGhlcmUgYXJlIHBsYWNlaG9sZGVycywgb25seSBnZXQgdXAgdG8gdGhlIGxhc3QgY29tcGxldGUgNCBjaGFyc1xuICB2YXIgbGVuID0gcGxhY2VIb2xkZXJzTGVuID4gMFxuICAgID8gdmFsaWRMZW4gLSA0XG4gICAgOiB2YWxpZExlblxuXG4gIHZhciBpXG4gIGZvciAoaSA9IDA7IGkgPCBsZW47IGkgKz0gNCkge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxOCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldIDw8IDEyKSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAyKV0gPDwgNikgfFxuICAgICAgcmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAzKV1cbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gMTYpICYgMHhGRlxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiA4KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIGlmIChwbGFjZUhvbGRlcnNMZW4gPT09IDIpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMikgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldID4+IDQpXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICBpZiAocGxhY2VIb2xkZXJzTGVuID09PSAxKSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDEwKSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPDwgNCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMildID4+IDIpXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDgpICYgMHhGRlxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIGFyclxufVxuXG5mdW5jdGlvbiB0cmlwbGV0VG9CYXNlNjQgKG51bSkge1xuICByZXR1cm4gbG9va3VwW251bSA+PiAxOCAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtID4+IDEyICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gPj4gNiAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtICYgMHgzRl1cbn1cblxuZnVuY3Rpb24gZW5jb2RlQ2h1bmsgKHVpbnQ4LCBzdGFydCwgZW5kKSB7XG4gIHZhciB0bXBcbiAgdmFyIG91dHB1dCA9IFtdXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSArPSAzKSB7XG4gICAgdG1wID1cbiAgICAgICgodWludDhbaV0gPDwgMTYpICYgMHhGRjAwMDApICtcbiAgICAgICgodWludDhbaSArIDFdIDw8IDgpICYgMHhGRjAwKSArXG4gICAgICAodWludDhbaSArIDJdICYgMHhGRilcbiAgICBvdXRwdXQucHVzaCh0cmlwbGV0VG9CYXNlNjQodG1wKSlcbiAgfVxuICByZXR1cm4gb3V0cHV0LmpvaW4oJycpXG59XG5cbmZ1bmN0aW9uIGZyb21CeXRlQXJyYXkgKHVpbnQ4KSB7XG4gIHZhciB0bXBcbiAgdmFyIGxlbiA9IHVpbnQ4Lmxlbmd0aFxuICB2YXIgZXh0cmFCeXRlcyA9IGxlbiAlIDMgLy8gaWYgd2UgaGF2ZSAxIGJ5dGUgbGVmdCwgcGFkIDIgYnl0ZXNcbiAgdmFyIHBhcnRzID0gW11cbiAgdmFyIG1heENodW5rTGVuZ3RoID0gMTYzODMgLy8gbXVzdCBiZSBtdWx0aXBsZSBvZiAzXG5cbiAgLy8gZ28gdGhyb3VnaCB0aGUgYXJyYXkgZXZlcnkgdGhyZWUgYnl0ZXMsIHdlJ2xsIGRlYWwgd2l0aCB0cmFpbGluZyBzdHVmZiBsYXRlclxuICBmb3IgKHZhciBpID0gMCwgbGVuMiA9IGxlbiAtIGV4dHJhQnl0ZXM7IGkgPCBsZW4yOyBpICs9IG1heENodW5rTGVuZ3RoKSB7XG4gICAgcGFydHMucHVzaChlbmNvZGVDaHVuayh1aW50OCwgaSwgKGkgKyBtYXhDaHVua0xlbmd0aCkgPiBsZW4yID8gbGVuMiA6IChpICsgbWF4Q2h1bmtMZW5ndGgpKSlcbiAgfVxuXG4gIC8vIHBhZCB0aGUgZW5kIHdpdGggemVyb3MsIGJ1dCBtYWtlIHN1cmUgdG8gbm90IGZvcmdldCB0aGUgZXh0cmEgYnl0ZXNcbiAgaWYgKGV4dHJhQnl0ZXMgPT09IDEpIHtcbiAgICB0bXAgPSB1aW50OFtsZW4gLSAxXVxuICAgIHBhcnRzLnB1c2goXG4gICAgICBsb29rdXBbdG1wID4+IDJdICtcbiAgICAgIGxvb2t1cFsodG1wIDw8IDQpICYgMHgzRl0gK1xuICAgICAgJz09J1xuICAgIClcbiAgfSBlbHNlIGlmIChleHRyYUJ5dGVzID09PSAyKSB7XG4gICAgdG1wID0gKHVpbnQ4W2xlbiAtIDJdIDw8IDgpICsgdWludDhbbGVuIC0gMV1cbiAgICBwYXJ0cy5wdXNoKFxuICAgICAgbG9va3VwW3RtcCA+PiAxMF0gK1xuICAgICAgbG9va3VwWyh0bXAgPj4gNCkgJiAweDNGXSArXG4gICAgICBsb29rdXBbKHRtcCA8PCAyKSAmIDB4M0ZdICtcbiAgICAgICc9J1xuICAgIClcbiAgfVxuXG4gIHJldHVybiBwYXJ0cy5qb2luKCcnKVxufVxuIiwiLyoqXG4gKiBCaXQgdHdpZGRsaW5nIGhhY2tzIGZvciBKYXZhU2NyaXB0LlxuICpcbiAqIEF1dGhvcjogTWlrb2xhIEx5c2Vua29cbiAqXG4gKiBQb3J0ZWQgZnJvbSBTdGFuZm9yZCBiaXQgdHdpZGRsaW5nIGhhY2sgbGlicmFyeTpcbiAqICAgIGh0dHA6Ly9ncmFwaGljcy5zdGFuZm9yZC5lZHUvfnNlYW5kZXIvYml0aGFja3MuaHRtbFxuICovXG5cblwidXNlIHN0cmljdFwiOyBcInVzZSByZXN0cmljdFwiO1xuXG4vL051bWJlciBvZiBiaXRzIGluIGFuIGludGVnZXJcbnZhciBJTlRfQklUUyA9IDMyO1xuXG4vL0NvbnN0YW50c1xuZXhwb3J0cy5JTlRfQklUUyAgPSBJTlRfQklUUztcbmV4cG9ydHMuSU5UX01BWCAgID0gIDB4N2ZmZmZmZmY7XG5leHBvcnRzLklOVF9NSU4gICA9IC0xPDwoSU5UX0JJVFMtMSk7XG5cbi8vUmV0dXJucyAtMSwgMCwgKzEgZGVwZW5kaW5nIG9uIHNpZ24gb2YgeFxuZXhwb3J0cy5zaWduID0gZnVuY3Rpb24odikge1xuICByZXR1cm4gKHYgPiAwKSAtICh2IDwgMCk7XG59XG5cbi8vQ29tcHV0ZXMgYWJzb2x1dGUgdmFsdWUgb2YgaW50ZWdlclxuZXhwb3J0cy5hYnMgPSBmdW5jdGlvbih2KSB7XG4gIHZhciBtYXNrID0gdiA+PiAoSU5UX0JJVFMtMSk7XG4gIHJldHVybiAodiBeIG1hc2spIC0gbWFzaztcbn1cblxuLy9Db21wdXRlcyBtaW5pbXVtIG9mIGludGVnZXJzIHggYW5kIHlcbmV4cG9ydHMubWluID0gZnVuY3Rpb24oeCwgeSkge1xuICByZXR1cm4geSBeICgoeCBeIHkpICYgLSh4IDwgeSkpO1xufVxuXG4vL0NvbXB1dGVzIG1heGltdW0gb2YgaW50ZWdlcnMgeCBhbmQgeVxuZXhwb3J0cy5tYXggPSBmdW5jdGlvbih4LCB5KSB7XG4gIHJldHVybiB4IF4gKCh4IF4geSkgJiAtKHggPCB5KSk7XG59XG5cbi8vQ2hlY2tzIGlmIGEgbnVtYmVyIGlzIGEgcG93ZXIgb2YgdHdvXG5leHBvcnRzLmlzUG93MiA9IGZ1bmN0aW9uKHYpIHtcbiAgcmV0dXJuICEodiAmICh2LTEpKSAmJiAoISF2KTtcbn1cblxuLy9Db21wdXRlcyBsb2cgYmFzZSAyIG9mIHZcbmV4cG9ydHMubG9nMiA9IGZ1bmN0aW9uKHYpIHtcbiAgdmFyIHIsIHNoaWZ0O1xuICByID0gICAgICh2ID4gMHhGRkZGKSA8PCA0OyB2ID4+Pj0gcjtcbiAgc2hpZnQgPSAodiA+IDB4RkYgICkgPDwgMzsgdiA+Pj49IHNoaWZ0OyByIHw9IHNoaWZ0O1xuICBzaGlmdCA9ICh2ID4gMHhGICAgKSA8PCAyOyB2ID4+Pj0gc2hpZnQ7IHIgfD0gc2hpZnQ7XG4gIHNoaWZ0ID0gKHYgPiAweDMgICApIDw8IDE7IHYgPj4+PSBzaGlmdDsgciB8PSBzaGlmdDtcbiAgcmV0dXJuIHIgfCAodiA+PiAxKTtcbn1cblxuLy9Db21wdXRlcyBsb2cgYmFzZSAxMCBvZiB2XG5leHBvcnRzLmxvZzEwID0gZnVuY3Rpb24odikge1xuICByZXR1cm4gICh2ID49IDEwMDAwMDAwMDApID8gOSA6ICh2ID49IDEwMDAwMDAwMCkgPyA4IDogKHYgPj0gMTAwMDAwMDApID8gNyA6XG4gICAgICAgICAgKHYgPj0gMTAwMDAwMCkgPyA2IDogKHYgPj0gMTAwMDAwKSA/IDUgOiAodiA+PSAxMDAwMCkgPyA0IDpcbiAgICAgICAgICAodiA+PSAxMDAwKSA/IDMgOiAodiA+PSAxMDApID8gMiA6ICh2ID49IDEwKSA/IDEgOiAwO1xufVxuXG4vL0NvdW50cyBudW1iZXIgb2YgYml0c1xuZXhwb3J0cy5wb3BDb3VudCA9IGZ1bmN0aW9uKHYpIHtcbiAgdiA9IHYgLSAoKHYgPj4+IDEpICYgMHg1NTU1NTU1NSk7XG4gIHYgPSAodiAmIDB4MzMzMzMzMzMpICsgKCh2ID4+PiAyKSAmIDB4MzMzMzMzMzMpO1xuICByZXR1cm4gKCh2ICsgKHYgPj4+IDQpICYgMHhGMEYwRjBGKSAqIDB4MTAxMDEwMSkgPj4+IDI0O1xufVxuXG4vL0NvdW50cyBudW1iZXIgb2YgdHJhaWxpbmcgemVyb3NcbmZ1bmN0aW9uIGNvdW50VHJhaWxpbmdaZXJvcyh2KSB7XG4gIHZhciBjID0gMzI7XG4gIHYgJj0gLXY7XG4gIGlmICh2KSBjLS07XG4gIGlmICh2ICYgMHgwMDAwRkZGRikgYyAtPSAxNjtcbiAgaWYgKHYgJiAweDAwRkYwMEZGKSBjIC09IDg7XG4gIGlmICh2ICYgMHgwRjBGMEYwRikgYyAtPSA0O1xuICBpZiAodiAmIDB4MzMzMzMzMzMpIGMgLT0gMjtcbiAgaWYgKHYgJiAweDU1NTU1NTU1KSBjIC09IDE7XG4gIHJldHVybiBjO1xufVxuZXhwb3J0cy5jb3VudFRyYWlsaW5nWmVyb3MgPSBjb3VudFRyYWlsaW5nWmVyb3M7XG5cbi8vUm91bmRzIHRvIG5leHQgcG93ZXIgb2YgMlxuZXhwb3J0cy5uZXh0UG93MiA9IGZ1bmN0aW9uKHYpIHtcbiAgdiArPSB2ID09PSAwO1xuICAtLXY7XG4gIHYgfD0gdiA+Pj4gMTtcbiAgdiB8PSB2ID4+PiAyO1xuICB2IHw9IHYgPj4+IDQ7XG4gIHYgfD0gdiA+Pj4gODtcbiAgdiB8PSB2ID4+PiAxNjtcbiAgcmV0dXJuIHYgKyAxO1xufVxuXG4vL1JvdW5kcyBkb3duIHRvIHByZXZpb3VzIHBvd2VyIG9mIDJcbmV4cG9ydHMucHJldlBvdzIgPSBmdW5jdGlvbih2KSB7XG4gIHYgfD0gdiA+Pj4gMTtcbiAgdiB8PSB2ID4+PiAyO1xuICB2IHw9IHYgPj4+IDQ7XG4gIHYgfD0gdiA+Pj4gODtcbiAgdiB8PSB2ID4+PiAxNjtcbiAgcmV0dXJuIHYgLSAodj4+PjEpO1xufVxuXG4vL0NvbXB1dGVzIHBhcml0eSBvZiB3b3JkXG5leHBvcnRzLnBhcml0eSA9IGZ1bmN0aW9uKHYpIHtcbiAgdiBePSB2ID4+PiAxNjtcbiAgdiBePSB2ID4+PiA4O1xuICB2IF49IHYgPj4+IDQ7XG4gIHYgJj0gMHhmO1xuICByZXR1cm4gKDB4Njk5NiA+Pj4gdikgJiAxO1xufVxuXG52YXIgUkVWRVJTRV9UQUJMRSA9IG5ldyBBcnJheSgyNTYpO1xuXG4oZnVuY3Rpb24odGFiKSB7XG4gIGZvcih2YXIgaT0wOyBpPDI1NjsgKytpKSB7XG4gICAgdmFyIHYgPSBpLCByID0gaSwgcyA9IDc7XG4gICAgZm9yICh2ID4+Pj0gMTsgdjsgdiA+Pj49IDEpIHtcbiAgICAgIHIgPDw9IDE7XG4gICAgICByIHw9IHYgJiAxO1xuICAgICAgLS1zO1xuICAgIH1cbiAgICB0YWJbaV0gPSAociA8PCBzKSAmIDB4ZmY7XG4gIH1cbn0pKFJFVkVSU0VfVEFCTEUpO1xuXG4vL1JldmVyc2UgYml0cyBpbiBhIDMyIGJpdCB3b3JkXG5leHBvcnRzLnJldmVyc2UgPSBmdW5jdGlvbih2KSB7XG4gIHJldHVybiAgKFJFVkVSU0VfVEFCTEVbIHYgICAgICAgICAmIDB4ZmZdIDw8IDI0KSB8XG4gICAgICAgICAgKFJFVkVSU0VfVEFCTEVbKHYgPj4+IDgpICAmIDB4ZmZdIDw8IDE2KSB8XG4gICAgICAgICAgKFJFVkVSU0VfVEFCTEVbKHYgPj4+IDE2KSAmIDB4ZmZdIDw8IDgpICB8XG4gICAgICAgICAgIFJFVkVSU0VfVEFCTEVbKHYgPj4+IDI0KSAmIDB4ZmZdO1xufVxuXG4vL0ludGVybGVhdmUgYml0cyBvZiAyIGNvb3JkaW5hdGVzIHdpdGggMTYgYml0cy4gIFVzZWZ1bCBmb3IgZmFzdCBxdWFkdHJlZSBjb2Rlc1xuZXhwb3J0cy5pbnRlcmxlYXZlMiA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgeCAmPSAweEZGRkY7XG4gIHggPSAoeCB8ICh4IDw8IDgpKSAmIDB4MDBGRjAwRkY7XG4gIHggPSAoeCB8ICh4IDw8IDQpKSAmIDB4MEYwRjBGMEY7XG4gIHggPSAoeCB8ICh4IDw8IDIpKSAmIDB4MzMzMzMzMzM7XG4gIHggPSAoeCB8ICh4IDw8IDEpKSAmIDB4NTU1NTU1NTU7XG5cbiAgeSAmPSAweEZGRkY7XG4gIHkgPSAoeSB8ICh5IDw8IDgpKSAmIDB4MDBGRjAwRkY7XG4gIHkgPSAoeSB8ICh5IDw8IDQpKSAmIDB4MEYwRjBGMEY7XG4gIHkgPSAoeSB8ICh5IDw8IDIpKSAmIDB4MzMzMzMzMzM7XG4gIHkgPSAoeSB8ICh5IDw8IDEpKSAmIDB4NTU1NTU1NTU7XG5cbiAgcmV0dXJuIHggfCAoeSA8PCAxKTtcbn1cblxuLy9FeHRyYWN0cyB0aGUgbnRoIGludGVybGVhdmVkIGNvbXBvbmVudFxuZXhwb3J0cy5kZWludGVybGVhdmUyID0gZnVuY3Rpb24odiwgbikge1xuICB2ID0gKHYgPj4+IG4pICYgMHg1NTU1NTU1NTtcbiAgdiA9ICh2IHwgKHYgPj4+IDEpKSAgJiAweDMzMzMzMzMzO1xuICB2ID0gKHYgfCAodiA+Pj4gMikpICAmIDB4MEYwRjBGMEY7XG4gIHYgPSAodiB8ICh2ID4+PiA0KSkgICYgMHgwMEZGMDBGRjtcbiAgdiA9ICh2IHwgKHYgPj4+IDE2KSkgJiAweDAwMEZGRkY7XG4gIHJldHVybiAodiA8PCAxNikgPj4gMTY7XG59XG5cblxuLy9JbnRlcmxlYXZlIGJpdHMgb2YgMyBjb29yZGluYXRlcywgZWFjaCB3aXRoIDEwIGJpdHMuICBVc2VmdWwgZm9yIGZhc3Qgb2N0cmVlIGNvZGVzXG5leHBvcnRzLmludGVybGVhdmUzID0gZnVuY3Rpb24oeCwgeSwgeikge1xuICB4ICY9IDB4M0ZGO1xuICB4ICA9ICh4IHwgKHg8PDE2KSkgJiA0Mjc4MTkwMzM1O1xuICB4ICA9ICh4IHwgKHg8PDgpKSAgJiAyNTE3MTk2OTU7XG4gIHggID0gKHggfCAoeDw8NCkpICAmIDMyNzIzNTYwMzU7XG4gIHggID0gKHggfCAoeDw8MikpICAmIDEyMjcxMzM1MTM7XG5cbiAgeSAmPSAweDNGRjtcbiAgeSAgPSAoeSB8ICh5PDwxNikpICYgNDI3ODE5MDMzNTtcbiAgeSAgPSAoeSB8ICh5PDw4KSkgICYgMjUxNzE5Njk1O1xuICB5ICA9ICh5IHwgKHk8PDQpKSAgJiAzMjcyMzU2MDM1O1xuICB5ICA9ICh5IHwgKHk8PDIpKSAgJiAxMjI3MTMzNTEzO1xuICB4IHw9ICh5IDw8IDEpO1xuICBcbiAgeiAmPSAweDNGRjtcbiAgeiAgPSAoeiB8ICh6PDwxNikpICYgNDI3ODE5MDMzNTtcbiAgeiAgPSAoeiB8ICh6PDw4KSkgICYgMjUxNzE5Njk1O1xuICB6ICA9ICh6IHwgKHo8PDQpKSAgJiAzMjcyMzU2MDM1O1xuICB6ICA9ICh6IHwgKHo8PDIpKSAgJiAxMjI3MTMzNTEzO1xuICBcbiAgcmV0dXJuIHggfCAoeiA8PCAyKTtcbn1cblxuLy9FeHRyYWN0cyBudGggaW50ZXJsZWF2ZWQgY29tcG9uZW50IG9mIGEgMy10dXBsZVxuZXhwb3J0cy5kZWludGVybGVhdmUzID0gZnVuY3Rpb24odiwgbikge1xuICB2ID0gKHYgPj4+IG4pICAgICAgICYgMTIyNzEzMzUxMztcbiAgdiA9ICh2IHwgKHY+Pj4yKSkgICAmIDMyNzIzNTYwMzU7XG4gIHYgPSAodiB8ICh2Pj4+NCkpICAgJiAyNTE3MTk2OTU7XG4gIHYgPSAodiB8ICh2Pj4+OCkpICAgJiA0Mjc4MTkwMzM1O1xuICB2ID0gKHYgfCAodj4+PjE2KSkgICYgMHgzRkY7XG4gIHJldHVybiAodjw8MjIpPj4yMjtcbn1cblxuLy9Db21wdXRlcyBuZXh0IGNvbWJpbmF0aW9uIGluIGNvbGV4aWNvZ3JhcGhpYyBvcmRlciAodGhpcyBpcyBtaXN0YWtlbmx5IGNhbGxlZCBuZXh0UGVybXV0YXRpb24gb24gdGhlIGJpdCB0d2lkZGxpbmcgaGFja3MgcGFnZSlcbmV4cG9ydHMubmV4dENvbWJpbmF0aW9uID0gZnVuY3Rpb24odikge1xuICB2YXIgdCA9IHYgfCAodiAtIDEpO1xuICByZXR1cm4gKHQgKyAxKSB8ICgoKH50ICYgLX50KSAtIDEpID4+PiAoY291bnRUcmFpbGluZ1plcm9zKHYpICsgMSkpO1xufVxuXG4iLCIvKiFcbiAqIFRoZSBidWZmZXIgbW9kdWxlIGZyb20gbm9kZS5qcywgZm9yIHRoZSBicm93c2VyLlxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbnZhciBiYXNlNjQgPSByZXF1aXJlKCdiYXNlNjQtanMnKVxudmFyIGllZWU3NTQgPSByZXF1aXJlKCdpZWVlNzU0JylcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnaXNhcnJheScpXG5cbmV4cG9ydHMuQnVmZmVyID0gQnVmZmVyXG5leHBvcnRzLlNsb3dCdWZmZXIgPSBTbG93QnVmZmVyXG5leHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTID0gNTBcblxuLyoqXG4gKiBJZiBgQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRgOlxuICogICA9PT0gdHJ1ZSAgICBVc2UgVWludDhBcnJheSBpbXBsZW1lbnRhdGlvbiAoZmFzdGVzdClcbiAqICAgPT09IGZhbHNlICAgVXNlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiAobW9zdCBjb21wYXRpYmxlLCBldmVuIElFNilcbiAqXG4gKiBCcm93c2VycyB0aGF0IHN1cHBvcnQgdHlwZWQgYXJyYXlzIGFyZSBJRSAxMCssIEZpcmVmb3ggNCssIENocm9tZSA3KywgU2FmYXJpIDUuMSssXG4gKiBPcGVyYSAxMS42KywgaU9TIDQuMisuXG4gKlxuICogRHVlIHRvIHZhcmlvdXMgYnJvd3NlciBidWdzLCBzb21ldGltZXMgdGhlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiB3aWxsIGJlIHVzZWQgZXZlblxuICogd2hlbiB0aGUgYnJvd3NlciBzdXBwb3J0cyB0eXBlZCBhcnJheXMuXG4gKlxuICogTm90ZTpcbiAqXG4gKiAgIC0gRmlyZWZveCA0LTI5IGxhY2tzIHN1cHBvcnQgZm9yIGFkZGluZyBuZXcgcHJvcGVydGllcyB0byBgVWludDhBcnJheWAgaW5zdGFuY2VzLFxuICogICAgIFNlZTogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Njk1NDM4LlxuICpcbiAqICAgLSBDaHJvbWUgOS0xMCBpcyBtaXNzaW5nIHRoZSBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uLlxuICpcbiAqICAgLSBJRTEwIGhhcyBhIGJyb2tlbiBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYXJyYXlzIG9mXG4gKiAgICAgaW5jb3JyZWN0IGxlbmd0aCBpbiBzb21lIHNpdHVhdGlvbnMuXG5cbiAqIFdlIGRldGVjdCB0aGVzZSBidWdneSBicm93c2VycyBhbmQgc2V0IGBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVGAgdG8gYGZhbHNlYCBzbyB0aGV5XG4gKiBnZXQgdGhlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiwgd2hpY2ggaXMgc2xvd2VyIGJ1dCBiZWhhdmVzIGNvcnJlY3RseS5cbiAqL1xuQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgPSBnbG9iYWwuVFlQRURfQVJSQVlfU1VQUE9SVCAhPT0gdW5kZWZpbmVkXG4gID8gZ2xvYmFsLlRZUEVEX0FSUkFZX1NVUFBPUlRcbiAgOiB0eXBlZEFycmF5U3VwcG9ydCgpXG5cbi8qXG4gKiBFeHBvcnQga01heExlbmd0aCBhZnRlciB0eXBlZCBhcnJheSBzdXBwb3J0IGlzIGRldGVybWluZWQuXG4gKi9cbmV4cG9ydHMua01heExlbmd0aCA9IGtNYXhMZW5ndGgoKVxuXG5mdW5jdGlvbiB0eXBlZEFycmF5U3VwcG9ydCAoKSB7XG4gIHRyeSB7XG4gICAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KDEpXG4gICAgYXJyLl9fcHJvdG9fXyA9IHtfX3Byb3RvX186IFVpbnQ4QXJyYXkucHJvdG90eXBlLCBmb286IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDQyIH19XG4gICAgcmV0dXJuIGFyci5mb28oKSA9PT0gNDIgJiYgLy8gdHlwZWQgYXJyYXkgaW5zdGFuY2VzIGNhbiBiZSBhdWdtZW50ZWRcbiAgICAgICAgdHlwZW9mIGFyci5zdWJhcnJheSA9PT0gJ2Z1bmN0aW9uJyAmJiAvLyBjaHJvbWUgOS0xMCBsYWNrIGBzdWJhcnJheWBcbiAgICAgICAgYXJyLnN1YmFycmF5KDEsIDEpLmJ5dGVMZW5ndGggPT09IDAgLy8gaWUxMCBoYXMgYnJva2VuIGBzdWJhcnJheWBcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmZ1bmN0aW9uIGtNYXhMZW5ndGggKCkge1xuICByZXR1cm4gQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRcbiAgICA/IDB4N2ZmZmZmZmZcbiAgICA6IDB4M2ZmZmZmZmZcbn1cblxuZnVuY3Rpb24gY3JlYXRlQnVmZmVyICh0aGF0LCBsZW5ndGgpIHtcbiAgaWYgKGtNYXhMZW5ndGgoKSA8IGxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHR5cGVkIGFycmF5IGxlbmd0aCcpXG4gIH1cbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UsIGZvciBiZXN0IHBlcmZvcm1hbmNlXG4gICAgdGhhdCA9IG5ldyBVaW50OEFycmF5KGxlbmd0aClcbiAgICB0aGF0Ll9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjazogUmV0dXJuIGFuIG9iamVjdCBpbnN0YW5jZSBvZiB0aGUgQnVmZmVyIGNsYXNzXG4gICAgaWYgKHRoYXQgPT09IG51bGwpIHtcbiAgICAgIHRoYXQgPSBuZXcgQnVmZmVyKGxlbmd0aClcbiAgICB9XG4gICAgdGhhdC5sZW5ndGggPSBsZW5ndGhcbiAgfVxuXG4gIHJldHVybiB0aGF0XG59XG5cbi8qKlxuICogVGhlIEJ1ZmZlciBjb25zdHJ1Y3RvciByZXR1cm5zIGluc3RhbmNlcyBvZiBgVWludDhBcnJheWAgdGhhdCBoYXZlIHRoZWlyXG4gKiBwcm90b3R5cGUgY2hhbmdlZCB0byBgQnVmZmVyLnByb3RvdHlwZWAuIEZ1cnRoZXJtb3JlLCBgQnVmZmVyYCBpcyBhIHN1YmNsYXNzIG9mXG4gKiBgVWludDhBcnJheWAsIHNvIHRoZSByZXR1cm5lZCBpbnN0YW5jZXMgd2lsbCBoYXZlIGFsbCB0aGUgbm9kZSBgQnVmZmVyYCBtZXRob2RzXG4gKiBhbmQgdGhlIGBVaW50OEFycmF5YCBtZXRob2RzLiBTcXVhcmUgYnJhY2tldCBub3RhdGlvbiB3b3JrcyBhcyBleHBlY3RlZCAtLSBpdFxuICogcmV0dXJucyBhIHNpbmdsZSBvY3RldC5cbiAqXG4gKiBUaGUgYFVpbnQ4QXJyYXlgIHByb3RvdHlwZSByZW1haW5zIHVubW9kaWZpZWQuXG4gKi9cblxuZnVuY3Rpb24gQnVmZmVyIChhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUICYmICEodGhpcyBpbnN0YW5jZW9mIEJ1ZmZlcikpIHtcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcihhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIC8vIENvbW1vbiBjYXNlLlxuICBpZiAodHlwZW9mIGFyZyA9PT0gJ251bWJlcicpIHtcbiAgICBpZiAodHlwZW9mIGVuY29kaW5nT3JPZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdJZiBlbmNvZGluZyBpcyBzcGVjaWZpZWQgdGhlbiB0aGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZydcbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIGFsbG9jVW5zYWZlKHRoaXMsIGFyZylcbiAgfVxuICByZXR1cm4gZnJvbSh0aGlzLCBhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbn1cblxuQnVmZmVyLnBvb2xTaXplID0gODE5MiAvLyBub3QgdXNlZCBieSB0aGlzIGltcGxlbWVudGF0aW9uXG5cbi8vIFRPRE86IExlZ2FjeSwgbm90IG5lZWRlZCBhbnltb3JlLiBSZW1vdmUgaW4gbmV4dCBtYWpvciB2ZXJzaW9uLlxuQnVmZmVyLl9hdWdtZW50ID0gZnVuY3Rpb24gKGFycikge1xuICBhcnIuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICByZXR1cm4gYXJyXG59XG5cbmZ1bmN0aW9uIGZyb20gKHRoYXQsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInZhbHVlXCIgYXJndW1lbnQgbXVzdCBub3QgYmUgYSBudW1iZXInKVxuICB9XG5cbiAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgIHJldHVybiBmcm9tQXJyYXlCdWZmZXIodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGZyb21TdHJpbmcodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQpXG4gIH1cblxuICByZXR1cm4gZnJvbU9iamVjdCh0aGF0LCB2YWx1ZSlcbn1cblxuLyoqXG4gKiBGdW5jdGlvbmFsbHkgZXF1aXZhbGVudCB0byBCdWZmZXIoYXJnLCBlbmNvZGluZykgYnV0IHRocm93cyBhIFR5cGVFcnJvclxuICogaWYgdmFsdWUgaXMgYSBudW1iZXIuXG4gKiBCdWZmZXIuZnJvbShzdHJbLCBlbmNvZGluZ10pXG4gKiBCdWZmZXIuZnJvbShhcnJheSlcbiAqIEJ1ZmZlci5mcm9tKGJ1ZmZlcilcbiAqIEJ1ZmZlci5mcm9tKGFycmF5QnVmZmVyWywgYnl0ZU9mZnNldFssIGxlbmd0aF1dKVxuICoqL1xuQnVmZmVyLmZyb20gPSBmdW5jdGlvbiAodmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gZnJvbShudWxsLCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG5pZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgQnVmZmVyLnByb3RvdHlwZS5fX3Byb3RvX18gPSBVaW50OEFycmF5LnByb3RvdHlwZVxuICBCdWZmZXIuX19wcm90b19fID0gVWludDhBcnJheVxuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnNwZWNpZXMgJiZcbiAgICAgIEJ1ZmZlcltTeW1ib2wuc3BlY2llc10gPT09IEJ1ZmZlcikge1xuICAgIC8vIEZpeCBzdWJhcnJheSgpIGluIEVTMjAxNi4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2J1ZmZlci9wdWxsLzk3XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1ZmZlciwgU3ltYm9sLnNwZWNpZXMsIHtcbiAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBhc3NlcnRTaXplIChzaXplKSB7XG4gIGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInNpemVcIiBhcmd1bWVudCBtdXN0IGJlIGEgbnVtYmVyJylcbiAgfSBlbHNlIGlmIChzaXplIDwgMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcInNpemVcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBuZWdhdGl2ZScpXG4gIH1cbn1cblxuZnVuY3Rpb24gYWxsb2MgKHRoYXQsIHNpemUsIGZpbGwsIGVuY29kaW5nKSB7XG4gIGFzc2VydFNpemUoc2l6ZSlcbiAgaWYgKHNpemUgPD0gMCkge1xuICAgIHJldHVybiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSlcbiAgfVxuICBpZiAoZmlsbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gT25seSBwYXkgYXR0ZW50aW9uIHRvIGVuY29kaW5nIGlmIGl0J3MgYSBzdHJpbmcuIFRoaXNcbiAgICAvLyBwcmV2ZW50cyBhY2NpZGVudGFsbHkgc2VuZGluZyBpbiBhIG51bWJlciB0aGF0IHdvdWxkXG4gICAgLy8gYmUgaW50ZXJwcmV0dGVkIGFzIGEgc3RhcnQgb2Zmc2V0LlxuICAgIHJldHVybiB0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnXG4gICAgICA/IGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKS5maWxsKGZpbGwsIGVuY29kaW5nKVxuICAgICAgOiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSkuZmlsbChmaWxsKVxuICB9XG4gIHJldHVybiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSlcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKiBhbGxvYyhzaXplWywgZmlsbFssIGVuY29kaW5nXV0pXG4gKiovXG5CdWZmZXIuYWxsb2MgPSBmdW5jdGlvbiAoc2l6ZSwgZmlsbCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGFsbG9jKG51bGwsIHNpemUsIGZpbGwsIGVuY29kaW5nKVxufVxuXG5mdW5jdGlvbiBhbGxvY1Vuc2FmZSAodGhhdCwgc2l6ZSkge1xuICBhc3NlcnRTaXplKHNpemUpXG4gIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSA8IDAgPyAwIDogY2hlY2tlZChzaXplKSB8IDApXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgdGhhdFtpXSA9IDBcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIEJ1ZmZlcihudW0pLCBieSBkZWZhdWx0IGNyZWF0ZXMgYSBub24temVyby1maWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICogKi9cbkJ1ZmZlci5hbGxvY1Vuc2FmZSA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiBhbGxvY1Vuc2FmZShudWxsLCBzaXplKVxufVxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIFNsb3dCdWZmZXIobnVtKSwgYnkgZGVmYXVsdCBjcmVhdGVzIGEgbm9uLXplcm8tZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqL1xuQnVmZmVyLmFsbG9jVW5zYWZlU2xvdyA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiBhbGxvY1Vuc2FmZShudWxsLCBzaXplKVxufVxuXG5mdW5jdGlvbiBmcm9tU3RyaW5nICh0aGF0LCBzdHJpbmcsIGVuY29kaW5nKSB7XG4gIGlmICh0eXBlb2YgZW5jb2RpbmcgIT09ICdzdHJpbmcnIHx8IGVuY29kaW5nID09PSAnJykge1xuICAgIGVuY29kaW5nID0gJ3V0ZjgnXG4gIH1cblxuICBpZiAoIUJ1ZmZlci5pc0VuY29kaW5nKGVuY29kaW5nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiZW5jb2RpbmdcIiBtdXN0IGJlIGEgdmFsaWQgc3RyaW5nIGVuY29kaW5nJylcbiAgfVxuXG4gIHZhciBsZW5ndGggPSBieXRlTGVuZ3RoKHN0cmluZywgZW5jb2RpbmcpIHwgMFxuICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbmd0aClcblxuICB2YXIgYWN0dWFsID0gdGhhdC53cml0ZShzdHJpbmcsIGVuY29kaW5nKVxuXG4gIGlmIChhY3R1YWwgIT09IGxlbmd0aCkge1xuICAgIC8vIFdyaXRpbmcgYSBoZXggc3RyaW5nLCBmb3IgZXhhbXBsZSwgdGhhdCBjb250YWlucyBpbnZhbGlkIGNoYXJhY3RlcnMgd2lsbFxuICAgIC8vIGNhdXNlIGV2ZXJ5dGhpbmcgYWZ0ZXIgdGhlIGZpcnN0IGludmFsaWQgY2hhcmFjdGVyIHRvIGJlIGlnbm9yZWQuIChlLmcuXG4gICAgLy8gJ2FieHhjZCcgd2lsbCBiZSB0cmVhdGVkIGFzICdhYicpXG4gICAgdGhhdCA9IHRoYXQuc2xpY2UoMCwgYWN0dWFsKVxuICB9XG5cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5TGlrZSAodGhhdCwgYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCA8IDAgPyAwIDogY2hlY2tlZChhcnJheS5sZW5ndGgpIHwgMFxuICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbmd0aClcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgIHRoYXRbaV0gPSBhcnJheVtpXSAmIDI1NVxuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheUJ1ZmZlciAodGhhdCwgYXJyYXksIGJ5dGVPZmZzZXQsIGxlbmd0aCkge1xuICBhcnJheS5ieXRlTGVuZ3RoIC8vIHRoaXMgdGhyb3dzIGlmIGBhcnJheWAgaXMgbm90IGEgdmFsaWQgQXJyYXlCdWZmZXJcblxuICBpZiAoYnl0ZU9mZnNldCA8IDAgfHwgYXJyYXkuYnl0ZUxlbmd0aCA8IGJ5dGVPZmZzZXQpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXFwnb2Zmc2V0XFwnIGlzIG91dCBvZiBib3VuZHMnKVxuICB9XG5cbiAgaWYgKGFycmF5LmJ5dGVMZW5ndGggPCBieXRlT2Zmc2V0ICsgKGxlbmd0aCB8fCAwKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcXCdsZW5ndGhcXCcgaXMgb3V0IG9mIGJvdW5kcycpXG4gIH1cblxuICBpZiAoYnl0ZU9mZnNldCA9PT0gdW5kZWZpbmVkICYmIGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSlcbiAgfSBlbHNlIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXksIGJ5dGVPZmZzZXQpXG4gIH0gZWxzZSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSwgYnl0ZU9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UsIGZvciBiZXN0IHBlcmZvcm1hbmNlXG4gICAgdGhhdCA9IGFycmF5XG4gICAgdGhhdC5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2s6IFJldHVybiBhbiBvYmplY3QgaW5zdGFuY2Ugb2YgdGhlIEJ1ZmZlciBjbGFzc1xuICAgIHRoYXQgPSBmcm9tQXJyYXlMaWtlKHRoYXQsIGFycmF5KVxuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21PYmplY3QgKHRoYXQsIG9iaikge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKG9iaikpIHtcbiAgICB2YXIgbGVuID0gY2hlY2tlZChvYmoubGVuZ3RoKSB8IDBcbiAgICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbilcblxuICAgIGlmICh0aGF0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoYXRcbiAgICB9XG5cbiAgICBvYmouY29weSh0aGF0LCAwLCAwLCBsZW4pXG4gICAgcmV0dXJuIHRoYXRcbiAgfVxuXG4gIGlmIChvYmopIHtcbiAgICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgb2JqLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB8fCAnbGVuZ3RoJyBpbiBvYmopIHtcbiAgICAgIGlmICh0eXBlb2Ygb2JqLmxlbmd0aCAhPT0gJ251bWJlcicgfHwgaXNuYW4ob2JqLmxlbmd0aCkpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcih0aGF0LCAwKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZyb21BcnJheUxpa2UodGhhdCwgb2JqKVxuICAgIH1cblxuICAgIGlmIChvYmoudHlwZSA9PT0gJ0J1ZmZlcicgJiYgaXNBcnJheShvYmouZGF0YSkpIHtcbiAgICAgIHJldHVybiBmcm9tQXJyYXlMaWtlKHRoYXQsIG9iai5kYXRhKVxuICAgIH1cbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmcsIEJ1ZmZlciwgQXJyYXlCdWZmZXIsIEFycmF5LCBvciBhcnJheS1saWtlIG9iamVjdC4nKVxufVxuXG5mdW5jdGlvbiBjaGVja2VkIChsZW5ndGgpIHtcbiAgLy8gTm90ZTogY2Fubm90IHVzZSBgbGVuZ3RoIDwga01heExlbmd0aCgpYCBoZXJlIGJlY2F1c2UgdGhhdCBmYWlscyB3aGVuXG4gIC8vIGxlbmd0aCBpcyBOYU4gKHdoaWNoIGlzIG90aGVyd2lzZSBjb2VyY2VkIHRvIHplcm8uKVxuICBpZiAobGVuZ3RoID49IGtNYXhMZW5ndGgoKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBdHRlbXB0IHRvIGFsbG9jYXRlIEJ1ZmZlciBsYXJnZXIgdGhhbiBtYXhpbXVtICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICdzaXplOiAweCcgKyBrTWF4TGVuZ3RoKCkudG9TdHJpbmcoMTYpICsgJyBieXRlcycpXG4gIH1cbiAgcmV0dXJuIGxlbmd0aCB8IDBcbn1cblxuZnVuY3Rpb24gU2xvd0J1ZmZlciAobGVuZ3RoKSB7XG4gIGlmICgrbGVuZ3RoICE9IGxlbmd0aCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGVxZXFlcVxuICAgIGxlbmd0aCA9IDBcbiAgfVxuICByZXR1cm4gQnVmZmVyLmFsbG9jKCtsZW5ndGgpXG59XG5cbkJ1ZmZlci5pc0J1ZmZlciA9IGZ1bmN0aW9uIGlzQnVmZmVyIChiKSB7XG4gIHJldHVybiAhIShiICE9IG51bGwgJiYgYi5faXNCdWZmZXIpXG59XG5cbkJ1ZmZlci5jb21wYXJlID0gZnVuY3Rpb24gY29tcGFyZSAoYSwgYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihhKSB8fCAhQnVmZmVyLmlzQnVmZmVyKGIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIG11c3QgYmUgQnVmZmVycycpXG4gIH1cblxuICBpZiAoYSA9PT0gYikgcmV0dXJuIDBcblxuICB2YXIgeCA9IGEubGVuZ3RoXG4gIHZhciB5ID0gYi5sZW5ndGhcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gTWF0aC5taW4oeCwgeSk7IGkgPCBsZW47ICsraSkge1xuICAgIGlmIChhW2ldICE9PSBiW2ldKSB7XG4gICAgICB4ID0gYVtpXVxuICAgICAgeSA9IGJbaV1cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgaWYgKHggPCB5KSByZXR1cm4gLTFcbiAgaWYgKHkgPCB4KSByZXR1cm4gMVxuICByZXR1cm4gMFxufVxuXG5CdWZmZXIuaXNFbmNvZGluZyA9IGZ1bmN0aW9uIGlzRW5jb2RpbmcgKGVuY29kaW5nKSB7XG4gIHN3aXRjaCAoU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgY2FzZSAnYXNjaWknOlxuICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5CdWZmZXIuY29uY2F0ID0gZnVuY3Rpb24gY29uY2F0IChsaXN0LCBsZW5ndGgpIHtcbiAgaWYgKCFpc0FycmF5KGxpc3QpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJsaXN0XCIgYXJndW1lbnQgbXVzdCBiZSBhbiBBcnJheSBvZiBCdWZmZXJzJylcbiAgfVxuXG4gIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBCdWZmZXIuYWxsb2MoMClcbiAgfVxuXG4gIHZhciBpXG4gIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGxlbmd0aCA9IDBcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7ICsraSkge1xuICAgICAgbGVuZ3RoICs9IGxpc3RbaV0ubGVuZ3RoXG4gICAgfVxuICB9XG5cbiAgdmFyIGJ1ZmZlciA9IEJ1ZmZlci5hbGxvY1Vuc2FmZShsZW5ndGgpXG4gIHZhciBwb3MgPSAwXG4gIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGJ1ZiA9IGxpc3RbaV1cbiAgICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWYpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImxpc3RcIiBhcmd1bWVudCBtdXN0IGJlIGFuIEFycmF5IG9mIEJ1ZmZlcnMnKVxuICAgIH1cbiAgICBidWYuY29weShidWZmZXIsIHBvcylcbiAgICBwb3MgKz0gYnVmLmxlbmd0aFxuICB9XG4gIHJldHVybiBidWZmZXJcbn1cblxuZnVuY3Rpb24gYnl0ZUxlbmd0aCAoc3RyaW5nLCBlbmNvZGluZykge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKHN0cmluZykpIHtcbiAgICByZXR1cm4gc3RyaW5nLmxlbmd0aFxuICB9XG4gIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBBcnJheUJ1ZmZlci5pc1ZpZXcgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgIChBcnJheUJ1ZmZlci5pc1ZpZXcoc3RyaW5nKSB8fCBzdHJpbmcgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikpIHtcbiAgICByZXR1cm4gc3RyaW5nLmJ5dGVMZW5ndGhcbiAgfVxuICBpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcbiAgICBzdHJpbmcgPSAnJyArIHN0cmluZ1xuICB9XG5cbiAgdmFyIGxlbiA9IHN0cmluZy5sZW5ndGhcbiAgaWYgKGxlbiA9PT0gMCkgcmV0dXJuIDBcblxuICAvLyBVc2UgYSBmb3IgbG9vcCB0byBhdm9pZCByZWN1cnNpb25cbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcbiAgZm9yICg7Oykge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGVuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIGNhc2UgdW5kZWZpbmVkOlxuICAgICAgICByZXR1cm4gdXRmOFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGhcbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiBsZW4gKiAyXG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gbGVuID4+PiAxXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICByZXR1cm4gYmFzZTY0VG9CeXRlcyhzdHJpbmcpLmxlbmd0aFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSByZXR1cm4gdXRmOFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGggLy8gYXNzdW1lIHV0ZjhcbiAgICAgICAgZW5jb2RpbmcgPSAoJycgKyBlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cbkJ1ZmZlci5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aFxuXG5mdW5jdGlvbiBzbG93VG9TdHJpbmcgKGVuY29kaW5nLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG5cbiAgLy8gTm8gbmVlZCB0byB2ZXJpZnkgdGhhdCBcInRoaXMubGVuZ3RoIDw9IE1BWF9VSU5UMzJcIiBzaW5jZSBpdCdzIGEgcmVhZC1vbmx5XG4gIC8vIHByb3BlcnR5IG9mIGEgdHlwZWQgYXJyYXkuXG5cbiAgLy8gVGhpcyBiZWhhdmVzIG5laXRoZXIgbGlrZSBTdHJpbmcgbm9yIFVpbnQ4QXJyYXkgaW4gdGhhdCB3ZSBzZXQgc3RhcnQvZW5kXG4gIC8vIHRvIHRoZWlyIHVwcGVyL2xvd2VyIGJvdW5kcyBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIG91dCBvZiByYW5nZS5cbiAgLy8gdW5kZWZpbmVkIGlzIGhhbmRsZWQgc3BlY2lhbGx5IGFzIHBlciBFQ01BLTI2MiA2dGggRWRpdGlvbixcbiAgLy8gU2VjdGlvbiAxMy4zLjMuNyBSdW50aW1lIFNlbWFudGljczogS2V5ZWRCaW5kaW5nSW5pdGlhbGl6YXRpb24uXG4gIGlmIChzdGFydCA9PT0gdW5kZWZpbmVkIHx8IHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ID0gMFxuICB9XG4gIC8vIFJldHVybiBlYXJseSBpZiBzdGFydCA+IHRoaXMubGVuZ3RoLiBEb25lIGhlcmUgdG8gcHJldmVudCBwb3RlbnRpYWwgdWludDMyXG4gIC8vIGNvZXJjaW9uIGZhaWwgYmVsb3cuXG4gIGlmIChzdGFydCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBpZiAoZW5kID09PSB1bmRlZmluZWQgfHwgZW5kID4gdGhpcy5sZW5ndGgpIHtcbiAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICB9XG5cbiAgaWYgKGVuZCA8PSAwKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICAvLyBGb3JjZSBjb2Vyc2lvbiB0byB1aW50MzIuIFRoaXMgd2lsbCBhbHNvIGNvZXJjZSBmYWxzZXkvTmFOIHZhbHVlcyB0byAwLlxuICBlbmQgPj4+PSAwXG4gIHN0YXJ0ID4+Pj0gMFxuXG4gIGlmIChlbmQgPD0gc3RhcnQpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGlmICghZW5jb2RpbmcpIGVuY29kaW5nID0gJ3V0ZjgnXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gaGV4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgICByZXR1cm4gYXNjaWlTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxhdGluMVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIHJldHVybiBiYXNlNjRTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gdXRmMTZsZVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgICAgICBlbmNvZGluZyA9IChlbmNvZGluZyArICcnKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuXG4vLyBUaGUgcHJvcGVydHkgaXMgdXNlZCBieSBgQnVmZmVyLmlzQnVmZmVyYCBhbmQgYGlzLWJ1ZmZlcmAgKGluIFNhZmFyaSA1LTcpIHRvIGRldGVjdFxuLy8gQnVmZmVyIGluc3RhbmNlcy5cbkJ1ZmZlci5wcm90b3R5cGUuX2lzQnVmZmVyID0gdHJ1ZVxuXG5mdW5jdGlvbiBzd2FwIChiLCBuLCBtKSB7XG4gIHZhciBpID0gYltuXVxuICBiW25dID0gYlttXVxuICBiW21dID0gaVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXAxNiA9IGZ1bmN0aW9uIHN3YXAxNiAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgMiAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgMTYtYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gMikge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDEpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwMzIgPSBmdW5jdGlvbiBzd2FwMzIgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDQgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDMyLWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyAzKVxuICAgIHN3YXAodGhpcywgaSArIDEsIGkgKyAyKVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDY0ID0gZnVuY3Rpb24gc3dhcDY0ICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSA4ICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA2NC1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSA4KSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgNylcbiAgICBzd2FwKHRoaXMsIGkgKyAxLCBpICsgNilcbiAgICBzd2FwKHRoaXMsIGkgKyAyLCBpICsgNSlcbiAgICBzd2FwKHRoaXMsIGkgKyAzLCBpICsgNClcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcgKCkge1xuICB2YXIgbGVuZ3RoID0gdGhpcy5sZW5ndGggfCAwXG4gIGlmIChsZW5ndGggPT09IDApIHJldHVybiAnJ1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHV0ZjhTbGljZSh0aGlzLCAwLCBsZW5ndGgpXG4gIHJldHVybiBzbG93VG9TdHJpbmcuYXBwbHkodGhpcywgYXJndW1lbnRzKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uIGVxdWFscyAoYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIGlmICh0aGlzID09PSBiKSByZXR1cm4gdHJ1ZVxuICByZXR1cm4gQnVmZmVyLmNvbXBhcmUodGhpcywgYikgPT09IDBcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbnNwZWN0ID0gZnVuY3Rpb24gaW5zcGVjdCAoKSB7XG4gIHZhciBzdHIgPSAnJ1xuICB2YXIgbWF4ID0gZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFU1xuICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgc3RyID0gdGhpcy50b1N0cmluZygnaGV4JywgMCwgbWF4KS5tYXRjaCgvLnsyfS9nKS5qb2luKCcgJylcbiAgICBpZiAodGhpcy5sZW5ndGggPiBtYXgpIHN0ciArPSAnIC4uLiAnXG4gIH1cbiAgcmV0dXJuICc8QnVmZmVyICcgKyBzdHIgKyAnPidcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24gY29tcGFyZSAodGFyZ2V0LCBzdGFydCwgZW5kLCB0aGlzU3RhcnQsIHRoaXNFbmQpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIodGFyZ2V0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXInKVxuICB9XG5cbiAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICBzdGFydCA9IDBcbiAgfVxuICBpZiAoZW5kID09PSB1bmRlZmluZWQpIHtcbiAgICBlbmQgPSB0YXJnZXQgPyB0YXJnZXQubGVuZ3RoIDogMFxuICB9XG4gIGlmICh0aGlzU3RhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXNTdGFydCA9IDBcbiAgfVxuICBpZiAodGhpc0VuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpc0VuZCA9IHRoaXMubGVuZ3RoXG4gIH1cblxuICBpZiAoc3RhcnQgPCAwIHx8IGVuZCA+IHRhcmdldC5sZW5ndGggfHwgdGhpc1N0YXJ0IDwgMCB8fCB0aGlzRW5kID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignb3V0IG9mIHJhbmdlIGluZGV4JylcbiAgfVxuXG4gIGlmICh0aGlzU3RhcnQgPj0gdGhpc0VuZCAmJiBzdGFydCA+PSBlbmQpIHtcbiAgICByZXR1cm4gMFxuICB9XG4gIGlmICh0aGlzU3RhcnQgPj0gdGhpc0VuZCkge1xuICAgIHJldHVybiAtMVxuICB9XG4gIGlmIChzdGFydCA+PSBlbmQpIHtcbiAgICByZXR1cm4gMVxuICB9XG5cbiAgc3RhcnQgPj4+PSAwXG4gIGVuZCA+Pj49IDBcbiAgdGhpc1N0YXJ0ID4+Pj0gMFxuICB0aGlzRW5kID4+Pj0gMFxuXG4gIGlmICh0aGlzID09PSB0YXJnZXQpIHJldHVybiAwXG5cbiAgdmFyIHggPSB0aGlzRW5kIC0gdGhpc1N0YXJ0XG4gIHZhciB5ID0gZW5kIC0gc3RhcnRcbiAgdmFyIGxlbiA9IE1hdGgubWluKHgsIHkpXG5cbiAgdmFyIHRoaXNDb3B5ID0gdGhpcy5zbGljZSh0aGlzU3RhcnQsIHRoaXNFbmQpXG4gIHZhciB0YXJnZXRDb3B5ID0gdGFyZ2V0LnNsaWNlKHN0YXJ0LCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgIGlmICh0aGlzQ29weVtpXSAhPT0gdGFyZ2V0Q29weVtpXSkge1xuICAgICAgeCA9IHRoaXNDb3B5W2ldXG4gICAgICB5ID0gdGFyZ2V0Q29weVtpXVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoeCA8IHkpIHJldHVybiAtMVxuICBpZiAoeSA8IHgpIHJldHVybiAxXG4gIHJldHVybiAwXG59XG5cbi8vIEZpbmRzIGVpdGhlciB0aGUgZmlyc3QgaW5kZXggb2YgYHZhbGAgaW4gYGJ1ZmZlcmAgYXQgb2Zmc2V0ID49IGBieXRlT2Zmc2V0YCxcbi8vIE9SIHRoZSBsYXN0IGluZGV4IG9mIGB2YWxgIGluIGBidWZmZXJgIGF0IG9mZnNldCA8PSBgYnl0ZU9mZnNldGAuXG4vL1xuLy8gQXJndW1lbnRzOlxuLy8gLSBidWZmZXIgLSBhIEJ1ZmZlciB0byBzZWFyY2hcbi8vIC0gdmFsIC0gYSBzdHJpbmcsIEJ1ZmZlciwgb3IgbnVtYmVyXG4vLyAtIGJ5dGVPZmZzZXQgLSBhbiBpbmRleCBpbnRvIGBidWZmZXJgOyB3aWxsIGJlIGNsYW1wZWQgdG8gYW4gaW50MzJcbi8vIC0gZW5jb2RpbmcgLSBhbiBvcHRpb25hbCBlbmNvZGluZywgcmVsZXZhbnQgaXMgdmFsIGlzIGEgc3RyaW5nXG4vLyAtIGRpciAtIHRydWUgZm9yIGluZGV4T2YsIGZhbHNlIGZvciBsYXN0SW5kZXhPZlxuZnVuY3Rpb24gYmlkaXJlY3Rpb25hbEluZGV4T2YgKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKSB7XG4gIC8vIEVtcHR5IGJ1ZmZlciBtZWFucyBubyBtYXRjaFxuICBpZiAoYnVmZmVyLmxlbmd0aCA9PT0gMCkgcmV0dXJuIC0xXG5cbiAgLy8gTm9ybWFsaXplIGJ5dGVPZmZzZXRcbiAgaWYgKHR5cGVvZiBieXRlT2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgIGVuY29kaW5nID0gYnl0ZU9mZnNldFxuICAgIGJ5dGVPZmZzZXQgPSAwXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA+IDB4N2ZmZmZmZmYpIHtcbiAgICBieXRlT2Zmc2V0ID0gMHg3ZmZmZmZmZlxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPCAtMHg4MDAwMDAwMCkge1xuICAgIGJ5dGVPZmZzZXQgPSAtMHg4MDAwMDAwMFxuICB9XG4gIGJ5dGVPZmZzZXQgPSArYnl0ZU9mZnNldCAgLy8gQ29lcmNlIHRvIE51bWJlci5cbiAgaWYgKGlzTmFOKGJ5dGVPZmZzZXQpKSB7XG4gICAgLy8gYnl0ZU9mZnNldDogaXQgaXQncyB1bmRlZmluZWQsIG51bGwsIE5hTiwgXCJmb29cIiwgZXRjLCBzZWFyY2ggd2hvbGUgYnVmZmVyXG4gICAgYnl0ZU9mZnNldCA9IGRpciA/IDAgOiAoYnVmZmVyLmxlbmd0aCAtIDEpXG4gIH1cblxuICAvLyBOb3JtYWxpemUgYnl0ZU9mZnNldDogbmVnYXRpdmUgb2Zmc2V0cyBzdGFydCBmcm9tIHRoZSBlbmQgb2YgdGhlIGJ1ZmZlclxuICBpZiAoYnl0ZU9mZnNldCA8IDApIGJ5dGVPZmZzZXQgPSBidWZmZXIubGVuZ3RoICsgYnl0ZU9mZnNldFxuICBpZiAoYnl0ZU9mZnNldCA+PSBidWZmZXIubGVuZ3RoKSB7XG4gICAgaWYgKGRpcikgcmV0dXJuIC0xXG4gICAgZWxzZSBieXRlT2Zmc2V0ID0gYnVmZmVyLmxlbmd0aCAtIDFcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0IDwgMCkge1xuICAgIGlmIChkaXIpIGJ5dGVPZmZzZXQgPSAwXG4gICAgZWxzZSByZXR1cm4gLTFcbiAgfVxuXG4gIC8vIE5vcm1hbGl6ZSB2YWxcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFsID0gQnVmZmVyLmZyb20odmFsLCBlbmNvZGluZylcbiAgfVxuXG4gIC8vIEZpbmFsbHksIHNlYXJjaCBlaXRoZXIgaW5kZXhPZiAoaWYgZGlyIGlzIHRydWUpIG9yIGxhc3RJbmRleE9mXG4gIGlmIChCdWZmZXIuaXNCdWZmZXIodmFsKSkge1xuICAgIC8vIFNwZWNpYWwgY2FzZTogbG9va2luZyBmb3IgZW1wdHkgc3RyaW5nL2J1ZmZlciBhbHdheXMgZmFpbHNcbiAgICBpZiAodmFsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICAgIHJldHVybiBhcnJheUluZGV4T2YoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpXG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICB2YWwgPSB2YWwgJiAweEZGIC8vIFNlYXJjaCBmb3IgYSBieXRlIHZhbHVlIFswLTI1NV1cbiAgICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgJiZcbiAgICAgICAgdHlwZW9mIFVpbnQ4QXJyYXkucHJvdG90eXBlLmluZGV4T2YgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlmIChkaXIpIHtcbiAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBVaW50OEFycmF5LnByb3RvdHlwZS5sYXN0SW5kZXhPZi5jYWxsKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0KVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJyYXlJbmRleE9mKGJ1ZmZlciwgWyB2YWwgXSwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcilcbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ3ZhbCBtdXN0IGJlIHN0cmluZywgbnVtYmVyIG9yIEJ1ZmZlcicpXG59XG5cbmZ1bmN0aW9uIGFycmF5SW5kZXhPZiAoYXJyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpIHtcbiAgdmFyIGluZGV4U2l6ZSA9IDFcbiAgdmFyIGFyckxlbmd0aCA9IGFyci5sZW5ndGhcbiAgdmFyIHZhbExlbmd0aCA9IHZhbC5sZW5ndGhcblxuICBpZiAoZW5jb2RpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgIGVuY29kaW5nID0gU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgaWYgKGVuY29kaW5nID09PSAndWNzMicgfHwgZW5jb2RpbmcgPT09ICd1Y3MtMicgfHxcbiAgICAgICAgZW5jb2RpbmcgPT09ICd1dGYxNmxlJyB8fCBlbmNvZGluZyA9PT0gJ3V0Zi0xNmxlJykge1xuICAgICAgaWYgKGFyci5sZW5ndGggPCAyIHx8IHZhbC5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybiAtMVxuICAgICAgfVxuICAgICAgaW5kZXhTaXplID0gMlxuICAgICAgYXJyTGVuZ3RoIC89IDJcbiAgICAgIHZhbExlbmd0aCAvPSAyXG4gICAgICBieXRlT2Zmc2V0IC89IDJcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWFkIChidWYsIGkpIHtcbiAgICBpZiAoaW5kZXhTaXplID09PSAxKSB7XG4gICAgICByZXR1cm4gYnVmW2ldXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBidWYucmVhZFVJbnQxNkJFKGkgKiBpbmRleFNpemUpXG4gICAgfVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKGRpcikge1xuICAgIHZhciBmb3VuZEluZGV4ID0gLTFcbiAgICBmb3IgKGkgPSBieXRlT2Zmc2V0OyBpIDwgYXJyTGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChyZWFkKGFyciwgaSkgPT09IHJlYWQodmFsLCBmb3VuZEluZGV4ID09PSAtMSA/IDAgOiBpIC0gZm91bmRJbmRleCkpIHtcbiAgICAgICAgaWYgKGZvdW5kSW5kZXggPT09IC0xKSBmb3VuZEluZGV4ID0gaVxuICAgICAgICBpZiAoaSAtIGZvdW5kSW5kZXggKyAxID09PSB2YWxMZW5ndGgpIHJldHVybiBmb3VuZEluZGV4ICogaW5kZXhTaXplXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZm91bmRJbmRleCAhPT0gLTEpIGkgLT0gaSAtIGZvdW5kSW5kZXhcbiAgICAgICAgZm91bmRJbmRleCA9IC0xXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChieXRlT2Zmc2V0ICsgdmFsTGVuZ3RoID4gYXJyTGVuZ3RoKSBieXRlT2Zmc2V0ID0gYXJyTGVuZ3RoIC0gdmFsTGVuZ3RoXG4gICAgZm9yIChpID0gYnl0ZU9mZnNldDsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHZhciBmb3VuZCA9IHRydWVcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsTGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKHJlYWQoYXJyLCBpICsgaikgIT09IHJlYWQodmFsLCBqKSkge1xuICAgICAgICAgIGZvdW5kID0gZmFsc2VcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZm91bmQpIHJldHVybiBpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIC0xXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5jbHVkZXMgPSBmdW5jdGlvbiBpbmNsdWRlcyAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gdGhpcy5pbmRleE9mKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpICE9PSAtMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbiBpbmRleE9mICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiBiaWRpcmVjdGlvbmFsSW5kZXhPZih0aGlzLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCB0cnVlKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmxhc3RJbmRleE9mID0gZnVuY3Rpb24gbGFzdEluZGV4T2YgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGJpZGlyZWN0aW9uYWxJbmRleE9mKHRoaXMsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGZhbHNlKVxufVxuXG5mdW5jdGlvbiBoZXhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcbiAgdmFyIHJlbWFpbmluZyA9IGJ1Zi5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKVxuICAgIGlmIChsZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICAgIH1cbiAgfVxuXG4gIC8vIG11c3QgYmUgYW4gZXZlbiBudW1iZXIgb2YgZGlnaXRzXG4gIHZhciBzdHJMZW4gPSBzdHJpbmcubGVuZ3RoXG4gIGlmIChzdHJMZW4gJSAyICE9PSAwKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGhleCBzdHJpbmcnKVxuXG4gIGlmIChsZW5ndGggPiBzdHJMZW4gLyAyKSB7XG4gICAgbGVuZ3RoID0gc3RyTGVuIC8gMlxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgcGFyc2VkID0gcGFyc2VJbnQoc3RyaW5nLnN1YnN0cihpICogMiwgMiksIDE2KVxuICAgIGlmIChpc05hTihwYXJzZWQpKSByZXR1cm4gaVxuICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHBhcnNlZFxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIHV0ZjhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKHV0ZjhUb0J5dGVzKHN0cmluZywgYnVmLmxlbmd0aCAtIG9mZnNldCksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGFzY2lpV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcihhc2NpaVRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gbGF0aW4xV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYXNjaWlXcml0ZShidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGJhc2U2NFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIoYmFzZTY0VG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiB1Y3MyV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcih1dGYxNmxlVG9CeXRlcyhzdHJpbmcsIGJ1Zi5sZW5ndGggLSBvZmZzZXQpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gd3JpdGUgKHN0cmluZywgb2Zmc2V0LCBsZW5ndGgsIGVuY29kaW5nKSB7XG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcpXG4gIGlmIChvZmZzZXQgPT09IHVuZGVmaW5lZCkge1xuICAgIGVuY29kaW5nID0gJ3V0ZjgnXG4gICAgbGVuZ3RoID0gdGhpcy5sZW5ndGhcbiAgICBvZmZzZXQgPSAwXG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcsIGVuY29kaW5nKVxuICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkICYmIHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgZW5jb2RpbmcgPSBvZmZzZXRcbiAgICBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICAgIG9mZnNldCA9IDBcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZywgb2Zmc2V0WywgbGVuZ3RoXVssIGVuY29kaW5nXSlcbiAgfSBlbHNlIGlmIChpc0Zpbml0ZShvZmZzZXQpKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICAgIGlmIChpc0Zpbml0ZShsZW5ndGgpKSB7XG4gICAgICBsZW5ndGggPSBsZW5ndGggfCAwXG4gICAgICBpZiAoZW5jb2RpbmcgPT09IHVuZGVmaW5lZCkgZW5jb2RpbmcgPSAndXRmOCdcbiAgICB9IGVsc2Uge1xuICAgICAgZW5jb2RpbmcgPSBsZW5ndGhcbiAgICAgIGxlbmd0aCA9IHVuZGVmaW5lZFxuICAgIH1cbiAgLy8gbGVnYWN5IHdyaXRlKHN0cmluZywgZW5jb2RpbmcsIG9mZnNldCwgbGVuZ3RoKSAtIHJlbW92ZSBpbiB2MC4xM1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdCdWZmZXIud3JpdGUoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0WywgbGVuZ3RoXSkgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZCdcbiAgICApXG4gIH1cblxuICB2YXIgcmVtYWluaW5nID0gdGhpcy5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkIHx8IGxlbmd0aCA+IHJlbWFpbmluZykgbGVuZ3RoID0gcmVtYWluaW5nXG5cbiAgaWYgKChzdHJpbmcubGVuZ3RoID4gMCAmJiAobGVuZ3RoIDwgMCB8fCBvZmZzZXQgPCAwKSkgfHwgb2Zmc2V0ID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQXR0ZW1wdCB0byB3cml0ZSBvdXRzaWRlIGJ1ZmZlciBib3VuZHMnKVxuICB9XG5cbiAgaWYgKCFlbmNvZGluZykgZW5jb2RpbmcgPSAndXRmOCdcblxuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuICBmb3IgKDs7KSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGhleFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgICAgcmV0dXJuIGFzY2lpV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsYXRpbjFXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICAvLyBXYXJuaW5nOiBtYXhMZW5ndGggbm90IHRha2VuIGludG8gYWNjb3VudCBpbiBiYXNlNjRXcml0ZVxuICAgICAgICByZXR1cm4gYmFzZTY0V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIHVjczJXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICAgICAgZW5jb2RpbmcgPSAoJycgKyBlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04gKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdCdWZmZXInLFxuICAgIGRhdGE6IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuX2FyciB8fCB0aGlzLCAwKVxuICB9XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKHN0YXJ0ID09PSAwICYmIGVuZCA9PT0gYnVmLmxlbmd0aCkge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1Zi5zbGljZShzdGFydCwgZW5kKSlcbiAgfVxufVxuXG5mdW5jdGlvbiB1dGY4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG4gIHZhciByZXMgPSBbXVxuXG4gIHZhciBpID0gc3RhcnRcbiAgd2hpbGUgKGkgPCBlbmQpIHtcbiAgICB2YXIgZmlyc3RCeXRlID0gYnVmW2ldXG4gICAgdmFyIGNvZGVQb2ludCA9IG51bGxcbiAgICB2YXIgYnl0ZXNQZXJTZXF1ZW5jZSA9IChmaXJzdEJ5dGUgPiAweEVGKSA/IDRcbiAgICAgIDogKGZpcnN0Qnl0ZSA+IDB4REYpID8gM1xuICAgICAgOiAoZmlyc3RCeXRlID4gMHhCRikgPyAyXG4gICAgICA6IDFcblxuICAgIGlmIChpICsgYnl0ZXNQZXJTZXF1ZW5jZSA8PSBlbmQpIHtcbiAgICAgIHZhciBzZWNvbmRCeXRlLCB0aGlyZEJ5dGUsIGZvdXJ0aEJ5dGUsIHRlbXBDb2RlUG9pbnRcblxuICAgICAgc3dpdGNoIChieXRlc1BlclNlcXVlbmNlKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpZiAoZmlyc3RCeXRlIDwgMHg4MCkge1xuICAgICAgICAgICAgY29kZVBvaW50ID0gZmlyc3RCeXRlXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4MUYpIDw8IDB4NiB8IChzZWNvbmRCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHg3Rikge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIHRoaXJkQnl0ZSA9IGJ1ZltpICsgMl1cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAodGhpcmRCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHhGKSA8PCAweEMgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpIDw8IDB4NiB8ICh0aGlyZEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweDdGRiAmJiAodGVtcENvZGVQb2ludCA8IDB4RDgwMCB8fCB0ZW1wQ29kZVBvaW50ID4gMHhERkZGKSkge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIHRoaXJkQnl0ZSA9IGJ1ZltpICsgMl1cbiAgICAgICAgICBmb3VydGhCeXRlID0gYnVmW2kgKyAzXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwICYmICh0aGlyZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAoZm91cnRoQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4RikgPDwgMHgxMiB8IChzZWNvbmRCeXRlICYgMHgzRikgPDwgMHhDIHwgKHRoaXJkQnl0ZSAmIDB4M0YpIDw8IDB4NiB8IChmb3VydGhCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHhGRkZGICYmIHRlbXBDb2RlUG9pbnQgPCAweDExMDAwMCkge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb2RlUG9pbnQgPT09IG51bGwpIHtcbiAgICAgIC8vIHdlIGRpZCBub3QgZ2VuZXJhdGUgYSB2YWxpZCBjb2RlUG9pbnQgc28gaW5zZXJ0IGFcbiAgICAgIC8vIHJlcGxhY2VtZW50IGNoYXIgKFUrRkZGRCkgYW5kIGFkdmFuY2Ugb25seSAxIGJ5dGVcbiAgICAgIGNvZGVQb2ludCA9IDB4RkZGRFxuICAgICAgYnl0ZXNQZXJTZXF1ZW5jZSA9IDFcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA+IDB4RkZGRikge1xuICAgICAgLy8gZW5jb2RlIHRvIHV0ZjE2IChzdXJyb2dhdGUgcGFpciBkYW5jZSlcbiAgICAgIGNvZGVQb2ludCAtPSAweDEwMDAwXG4gICAgICByZXMucHVzaChjb2RlUG9pbnQgPj4+IDEwICYgMHgzRkYgfCAweEQ4MDApXG4gICAgICBjb2RlUG9pbnQgPSAweERDMDAgfCBjb2RlUG9pbnQgJiAweDNGRlxuICAgIH1cblxuICAgIHJlcy5wdXNoKGNvZGVQb2ludClcbiAgICBpICs9IGJ5dGVzUGVyU2VxdWVuY2VcbiAgfVxuXG4gIHJldHVybiBkZWNvZGVDb2RlUG9pbnRzQXJyYXkocmVzKVxufVxuXG4vLyBCYXNlZCBvbiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMjc0NzI3Mi82ODA3NDIsIHRoZSBicm93c2VyIHdpdGhcbi8vIHRoZSBsb3dlc3QgbGltaXQgaXMgQ2hyb21lLCB3aXRoIDB4MTAwMDAgYXJncy5cbi8vIFdlIGdvIDEgbWFnbml0dWRlIGxlc3MsIGZvciBzYWZldHlcbnZhciBNQVhfQVJHVU1FTlRTX0xFTkdUSCA9IDB4MTAwMFxuXG5mdW5jdGlvbiBkZWNvZGVDb2RlUG9pbnRzQXJyYXkgKGNvZGVQb2ludHMpIHtcbiAgdmFyIGxlbiA9IGNvZGVQb2ludHMubGVuZ3RoXG4gIGlmIChsZW4gPD0gTUFYX0FSR1VNRU5UU19MRU5HVEgpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIGNvZGVQb2ludHMpIC8vIGF2b2lkIGV4dHJhIHNsaWNlKClcbiAgfVxuXG4gIC8vIERlY29kZSBpbiBjaHVua3MgdG8gYXZvaWQgXCJjYWxsIHN0YWNrIHNpemUgZXhjZWVkZWRcIi5cbiAgdmFyIHJlcyA9ICcnXG4gIHZhciBpID0gMFxuICB3aGlsZSAoaSA8IGxlbikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFxuICAgICAgU3RyaW5nLFxuICAgICAgY29kZVBvaW50cy5zbGljZShpLCBpICs9IE1BWF9BUkdVTUVOVFNfTEVOR1RIKVxuICAgIClcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIGFzY2lpU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldICYgMHg3RilcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGxhdGluMVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGhleFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcblxuICBpZiAoIXN0YXJ0IHx8IHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIGlmICghZW5kIHx8IGVuZCA8IDAgfHwgZW5kID4gbGVuKSBlbmQgPSBsZW5cblxuICB2YXIgb3V0ID0gJydcbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICBvdXQgKz0gdG9IZXgoYnVmW2ldKVxuICB9XG4gIHJldHVybiBvdXRcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGJ5dGVzID0gYnVmLnNsaWNlKHN0YXJ0LCBlbmQpXG4gIHZhciByZXMgPSAnJ1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0gKyBieXRlc1tpICsgMV0gKiAyNTYpXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24gc2xpY2UgKHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIHN0YXJ0ID0gfn5zdGFydFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbiA6IH5+ZW5kXG5cbiAgaWYgKHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ICs9IGxlblxuICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gMFxuICB9IGVsc2UgaWYgKHN0YXJ0ID4gbGVuKSB7XG4gICAgc3RhcnQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCAwKSB7XG4gICAgZW5kICs9IGxlblxuICAgIGlmIChlbmQgPCAwKSBlbmQgPSAwXG4gIH0gZWxzZSBpZiAoZW5kID4gbGVuKSB7XG4gICAgZW5kID0gbGVuXG4gIH1cblxuICBpZiAoZW5kIDwgc3RhcnQpIGVuZCA9IHN0YXJ0XG5cbiAgdmFyIG5ld0J1ZlxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICBuZXdCdWYgPSB0aGlzLnN1YmFycmF5KHN0YXJ0LCBlbmQpXG4gICAgbmV3QnVmLl9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICB2YXIgc2xpY2VMZW4gPSBlbmQgLSBzdGFydFxuICAgIG5ld0J1ZiA9IG5ldyBCdWZmZXIoc2xpY2VMZW4sIHVuZGVmaW5lZClcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWNlTGVuOyArK2kpIHtcbiAgICAgIG5ld0J1ZltpXSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdCdWZcbn1cblxuLypcbiAqIE5lZWQgdG8gbWFrZSBzdXJlIHRoYXQgYnVmZmVyIGlzbid0IHRyeWluZyB0byB3cml0ZSBvdXQgb2YgYm91bmRzLlxuICovXG5mdW5jdGlvbiBjaGVja09mZnNldCAob2Zmc2V0LCBleHQsIGxlbmd0aCkge1xuICBpZiAoKG9mZnNldCAlIDEpICE9PSAwIHx8IG9mZnNldCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdvZmZzZXQgaXMgbm90IHVpbnQnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gbGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVHJ5aW5nIHRvIGFjY2VzcyBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnRMRSA9IGZ1bmN0aW9uIHJlYWRVSW50TEUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIGldICogbXVsXG4gIH1cblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnRCRSA9IGZ1bmN0aW9uIHJlYWRVSW50QkUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG4gIH1cblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAtLWJ5dGVMZW5ndGhdXG4gIHZhciBtdWwgPSAxXG4gIHdoaWxlIChieXRlTGVuZ3RoID4gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIC0tYnl0ZUxlbmd0aF0gKiBtdWxcbiAgfVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDggPSBmdW5jdGlvbiByZWFkVUludDggKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZMRSA9IGZ1bmN0aW9uIHJlYWRVSW50MTZMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2QkUgPSBmdW5jdGlvbiByZWFkVUludDE2QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgOCkgfCB0aGlzW29mZnNldCArIDFdXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkxFID0gZnVuY3Rpb24gcmVhZFVJbnQzMkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICgodGhpc1tvZmZzZXRdKSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikpICtcbiAgICAgICh0aGlzW29mZnNldCArIDNdICogMHgxMDAwMDAwKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJCRSA9IGZ1bmN0aW9uIHJlYWRVSW50MzJCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdICogMHgxMDAwMDAwKSArXG4gICAgKCh0aGlzW29mZnNldCArIDFdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgOCkgfFxuICAgIHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludExFID0gZnVuY3Rpb24gcmVhZEludExFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XVxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyBpXSAqIG11bFxuICB9XG4gIG11bCAqPSAweDgwXG5cbiAgaWYgKHZhbCA+PSBtdWwpIHZhbCAtPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aClcblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludEJFID0gZnVuY3Rpb24gcmVhZEludEJFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoXG4gIHZhciBtdWwgPSAxXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIC0taV1cbiAgd2hpbGUgKGkgPiAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgLS1pXSAqIG11bFxuICB9XG4gIG11bCAqPSAweDgwXG5cbiAgaWYgKHZhbCA+PSBtdWwpIHZhbCAtPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aClcblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDggPSBmdW5jdGlvbiByZWFkSW50OCAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDEsIHRoaXMubGVuZ3RoKVxuICBpZiAoISh0aGlzW29mZnNldF0gJiAweDgwKSkgcmV0dXJuICh0aGlzW29mZnNldF0pXG4gIHJldHVybiAoKDB4ZmYgLSB0aGlzW29mZnNldF0gKyAxKSAqIC0xKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkxFID0gZnVuY3Rpb24gcmVhZEludDE2TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpXG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZCRSA9IGZ1bmN0aW9uIHJlYWRJbnQxNkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIDFdIHwgKHRoaXNbb2Zmc2V0XSA8PCA4KVxuICByZXR1cm4gKHZhbCAmIDB4ODAwMCkgPyB2YWwgfCAweEZGRkYwMDAwIDogdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyTEUgPSBmdW5jdGlvbiByZWFkSW50MzJMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdKSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOCkgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgM10gPDwgMjQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyQkUgPSBmdW5jdGlvbiByZWFkSW50MzJCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdIDw8IDI0KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0TEUgPSBmdW5jdGlvbiByZWFkRmxvYXRMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0QkUgPSBmdW5jdGlvbiByZWFkRmxvYXRCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgZmFsc2UsIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVMRSA9IGZ1bmN0aW9uIHJlYWREb3VibGVMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgNTIsIDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUJFID0gZnVuY3Rpb24gcmVhZERvdWJsZUJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgNTIsIDgpXG59XG5cbmZ1bmN0aW9uIGNoZWNrSW50IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYnVmKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJidWZmZXJcIiBhcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyIGluc3RhbmNlJylcbiAgaWYgKHZhbHVlID4gbWF4IHx8IHZhbHVlIDwgbWluKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCJ2YWx1ZVwiIGFyZ3VtZW50IGlzIG91dCBvZiBib3VuZHMnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnRMRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBtYXhCeXRlcyA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKSAtIDFcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBtYXhCeXRlcywgMClcbiAgfVxuXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB0aGlzW29mZnNldF0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKHZhbHVlIC8gbXVsKSAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50QkUgPSBmdW5jdGlvbiB3cml0ZVVJbnRCRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBtYXhCeXRlcyA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKSAtIDFcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBtYXhCeXRlcywgMClcbiAgfVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aCAtIDFcbiAgdmFyIG11bCA9IDFcbiAgdGhpc1tvZmZzZXQgKyBpXSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoLS1pID49IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKHZhbHVlIC8gbXVsKSAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50OCA9IGZ1bmN0aW9uIHdyaXRlVUludDggKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMSwgMHhmZiwgMClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5mdW5jdGlvbiBvYmplY3RXcml0ZVVJbnQxNiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmYgKyB2YWx1ZSArIDFcbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihidWYubGVuZ3RoIC0gb2Zmc2V0LCAyKTsgaSA8IGo7ICsraSkge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9ICh2YWx1ZSAmICgweGZmIDw8ICg4ICogKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkpKSkgPj4+XG4gICAgICAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSAqIDhcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnQxNkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkJFID0gZnVuY3Rpb24gd3JpdGVVSW50MTZCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5mdW5jdGlvbiBvYmplY3RXcml0ZVVJbnQzMiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmZmZmZmICsgdmFsdWUgKyAxXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4oYnVmLmxlbmd0aCAtIG9mZnNldCwgNCk7IGkgPCBqOyArK2kpIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSAodmFsdWUgPj4+IChsaXR0bGVFbmRpYW4gPyBpIDogMyAtIGkpICogOCkgJiAweGZmXG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkxFID0gZnVuY3Rpb24gd3JpdGVVSW50MzJMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyQkUgPSBmdW5jdGlvbiB3cml0ZVVJbnQzMkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50TEUgPSBmdW5jdGlvbiB3cml0ZUludExFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbGltaXQgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCAtIDEpXG5cbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBsaW1pdCAtIDEsIC1saW1pdClcbiAgfVxuXG4gIHZhciBpID0gMFxuICB2YXIgbXVsID0gMVxuICB2YXIgc3ViID0gMFxuICB0aGlzW29mZnNldF0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICBpZiAodmFsdWUgPCAwICYmIHN1YiA9PT0gMCAmJiB0aGlzW29mZnNldCArIGkgLSAxXSAhPT0gMCkge1xuICAgICAgc3ViID0gMVxuICAgIH1cbiAgICB0aGlzW29mZnNldCArIGldID0gKCh2YWx1ZSAvIG11bCkgPj4gMCkgLSBzdWIgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50QkUgPSBmdW5jdGlvbiB3cml0ZUludEJFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbGltaXQgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCAtIDEpXG5cbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBsaW1pdCAtIDEsIC1saW1pdClcbiAgfVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aCAtIDFcbiAgdmFyIG11bCA9IDFcbiAgdmFyIHN1YiA9IDBcbiAgdGhpc1tvZmZzZXQgKyBpXSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoLS1pID49IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICBpZiAodmFsdWUgPCAwICYmIHN1YiA9PT0gMCAmJiB0aGlzW29mZnNldCArIGkgKyAxXSAhPT0gMCkge1xuICAgICAgc3ViID0gMVxuICAgIH1cbiAgICB0aGlzW29mZnNldCArIGldID0gKCh2YWx1ZSAvIG11bCkgPj4gMCkgLSBzdWIgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50OCA9IGZ1bmN0aW9uIHdyaXRlSW50OCAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweDdmLCAtMHg4MClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKVxuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmYgKyB2YWx1ZSArIDFcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2TEUgPSBmdW5jdGlvbiB3cml0ZUludDE2TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHg3ZmZmLCAtMHg4MDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZCRSA9IGZ1bmN0aW9uIHdyaXRlSW50MTZCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJMRSA9IGZ1bmN0aW9uIHdyaXRlSW50MzJMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyQkUgPSBmdW5jdGlvbiB3cml0ZUludDMyQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmZmZmZiArIHZhbHVlICsgMVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuZnVuY3Rpb24gY2hlY2tJRUVFNzU0IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxuICBpZiAob2Zmc2V0IDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRmxvYXQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgNCwgMy40MDI4MjM0NjYzODUyODg2ZSszOCwgLTMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgpXG4gIH1cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgMjMsIDQpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdExFID0gZnVuY3Rpb24gd3JpdGVGbG9hdExFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0QkUgPSBmdW5jdGlvbiB3cml0ZUZsb2F0QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gd3JpdGVEb3VibGUgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgOCwgMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgsIC0xLjc5NzY5MzEzNDg2MjMxNTdFKzMwOClcbiAgfVxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCA1MiwgOClcbiAgcmV0dXJuIG9mZnNldCArIDhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUxFID0gZnVuY3Rpb24gd3JpdGVEb3VibGVMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlQkUgPSBmdW5jdGlvbiB3cml0ZURvdWJsZUJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG4vLyBjb3B5KHRhcmdldEJ1ZmZlciwgdGFyZ2V0U3RhcnQ9MCwgc291cmNlU3RhcnQ9MCwgc291cmNlRW5kPWJ1ZmZlci5sZW5ndGgpXG5CdWZmZXIucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiBjb3B5ICh0YXJnZXQsIHRhcmdldFN0YXJ0LCBzdGFydCwgZW5kKSB7XG4gIGlmICghc3RhcnQpIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCAmJiBlbmQgIT09IDApIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXRTdGFydCA+PSB0YXJnZXQubGVuZ3RoKSB0YXJnZXRTdGFydCA9IHRhcmdldC5sZW5ndGhcbiAgaWYgKCF0YXJnZXRTdGFydCkgdGFyZ2V0U3RhcnQgPSAwXG4gIGlmIChlbmQgPiAwICYmIGVuZCA8IHN0YXJ0KSBlbmQgPSBzdGFydFxuXG4gIC8vIENvcHkgMCBieXRlczsgd2UncmUgZG9uZVxuICBpZiAoZW5kID09PSBzdGFydCkgcmV0dXJuIDBcbiAgaWYgKHRhcmdldC5sZW5ndGggPT09IDAgfHwgdGhpcy5sZW5ndGggPT09IDApIHJldHVybiAwXG5cbiAgLy8gRmF0YWwgZXJyb3IgY29uZGl0aW9uc1xuICBpZiAodGFyZ2V0U3RhcnQgPCAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3RhcmdldFN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICB9XG4gIGlmIChzdGFydCA8IDAgfHwgc3RhcnQgPj0gdGhpcy5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdzb3VyY2VTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgaWYgKGVuZCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdzb3VyY2VFbmQgb3V0IG9mIGJvdW5kcycpXG5cbiAgLy8gQXJlIHdlIG9vYj9cbiAgaWYgKGVuZCA+IHRoaXMubGVuZ3RoKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0Lmxlbmd0aCAtIHRhcmdldFN0YXJ0IDwgZW5kIC0gc3RhcnQpIHtcbiAgICBlbmQgPSB0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0U3RhcnQgKyBzdGFydFxuICB9XG5cbiAgdmFyIGxlbiA9IGVuZCAtIHN0YXJ0XG4gIHZhciBpXG5cbiAgaWYgKHRoaXMgPT09IHRhcmdldCAmJiBzdGFydCA8IHRhcmdldFN0YXJ0ICYmIHRhcmdldFN0YXJ0IDwgZW5kKSB7XG4gICAgLy8gZGVzY2VuZGluZyBjb3B5IGZyb20gZW5kXG4gICAgZm9yIChpID0gbGVuIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgIHRhcmdldFtpICsgdGFyZ2V0U3RhcnRdID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9IGVsc2UgaWYgKGxlbiA8IDEwMDAgfHwgIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gYXNjZW5kaW5nIGNvcHkgZnJvbSBzdGFydFxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgdGFyZ2V0W2kgKyB0YXJnZXRTdGFydF0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgVWludDhBcnJheS5wcm90b3R5cGUuc2V0LmNhbGwoXG4gICAgICB0YXJnZXQsXG4gICAgICB0aGlzLnN1YmFycmF5KHN0YXJ0LCBzdGFydCArIGxlbiksXG4gICAgICB0YXJnZXRTdGFydFxuICAgIClcbiAgfVxuXG4gIHJldHVybiBsZW5cbn1cblxuLy8gVXNhZ2U6XG4vLyAgICBidWZmZXIuZmlsbChudW1iZXJbLCBvZmZzZXRbLCBlbmRdXSlcbi8vICAgIGJ1ZmZlci5maWxsKGJ1ZmZlclssIG9mZnNldFssIGVuZF1dKVxuLy8gICAgYnVmZmVyLmZpbGwoc3RyaW5nWywgb2Zmc2V0WywgZW5kXV1bLCBlbmNvZGluZ10pXG5CdWZmZXIucHJvdG90eXBlLmZpbGwgPSBmdW5jdGlvbiBmaWxsICh2YWwsIHN0YXJ0LCBlbmQsIGVuY29kaW5nKSB7XG4gIC8vIEhhbmRsZSBzdHJpbmcgY2FzZXM6XG4gIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgIGlmICh0eXBlb2Ygc3RhcnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbmNvZGluZyA9IHN0YXJ0XG4gICAgICBzdGFydCA9IDBcbiAgICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZW5kID09PSAnc3RyaW5nJykge1xuICAgICAgZW5jb2RpbmcgPSBlbmRcbiAgICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gICAgfVxuICAgIGlmICh2YWwubGVuZ3RoID09PSAxKSB7XG4gICAgICB2YXIgY29kZSA9IHZhbC5jaGFyQ29kZUF0KDApXG4gICAgICBpZiAoY29kZSA8IDI1Nikge1xuICAgICAgICB2YWwgPSBjb2RlXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlbmNvZGluZyAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBlbmNvZGluZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2VuY29kaW5nIG11c3QgYmUgYSBzdHJpbmcnKVxuICAgIH1cbiAgICBpZiAodHlwZW9mIGVuY29kaW5nID09PSAnc3RyaW5nJyAmJiAhQnVmZmVyLmlzRW5jb2RpbmcoZW5jb2RpbmcpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgdmFsID0gdmFsICYgMjU1XG4gIH1cblxuICAvLyBJbnZhbGlkIHJhbmdlcyBhcmUgbm90IHNldCB0byBhIGRlZmF1bHQsIHNvIGNhbiByYW5nZSBjaGVjayBlYXJseS5cbiAgaWYgKHN0YXJ0IDwgMCB8fCB0aGlzLmxlbmd0aCA8IHN0YXJ0IHx8IHRoaXMubGVuZ3RoIDwgZW5kKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ091dCBvZiByYW5nZSBpbmRleCcpXG4gIH1cblxuICBpZiAoZW5kIDw9IHN0YXJ0KSB7XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHN0YXJ0ID0gc3RhcnQgPj4+IDBcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyB0aGlzLmxlbmd0aCA6IGVuZCA+Pj4gMFxuXG4gIGlmICghdmFsKSB2YWwgPSAwXG5cbiAgdmFyIGlcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgZm9yIChpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgICAgdGhpc1tpXSA9IHZhbFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgYnl0ZXMgPSBCdWZmZXIuaXNCdWZmZXIodmFsKVxuICAgICAgPyB2YWxcbiAgICAgIDogdXRmOFRvQnl0ZXMobmV3IEJ1ZmZlcih2YWwsIGVuY29kaW5nKS50b1N0cmluZygpKVxuICAgIHZhciBsZW4gPSBieXRlcy5sZW5ndGhcbiAgICBmb3IgKGkgPSAwOyBpIDwgZW5kIC0gc3RhcnQ7ICsraSkge1xuICAgICAgdGhpc1tpICsgc3RhcnRdID0gYnl0ZXNbaSAlIGxlbl1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpc1xufVxuXG4vLyBIRUxQRVIgRlVOQ1RJT05TXG4vLyA9PT09PT09PT09PT09PT09XG5cbnZhciBJTlZBTElEX0JBU0U2NF9SRSA9IC9bXitcXC8wLTlBLVphLXotX10vZ1xuXG5mdW5jdGlvbiBiYXNlNjRjbGVhbiAoc3RyKSB7XG4gIC8vIE5vZGUgc3RyaXBzIG91dCBpbnZhbGlkIGNoYXJhY3RlcnMgbGlrZSBcXG4gYW5kIFxcdCBmcm9tIHRoZSBzdHJpbmcsIGJhc2U2NC1qcyBkb2VzIG5vdFxuICBzdHIgPSBzdHJpbmd0cmltKHN0cikucmVwbGFjZShJTlZBTElEX0JBU0U2NF9SRSwgJycpXG4gIC8vIE5vZGUgY29udmVydHMgc3RyaW5ncyB3aXRoIGxlbmd0aCA8IDIgdG8gJydcbiAgaWYgKHN0ci5sZW5ndGggPCAyKSByZXR1cm4gJydcbiAgLy8gTm9kZSBhbGxvd3MgZm9yIG5vbi1wYWRkZWQgYmFzZTY0IHN0cmluZ3MgKG1pc3NpbmcgdHJhaWxpbmcgPT09KSwgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHdoaWxlIChzdHIubGVuZ3RoICUgNCAhPT0gMCkge1xuICAgIHN0ciA9IHN0ciArICc9J1xuICB9XG4gIHJldHVybiBzdHJcbn1cblxuZnVuY3Rpb24gc3RyaW5ndHJpbSAoc3RyKSB7XG4gIGlmIChzdHIudHJpbSkgcmV0dXJuIHN0ci50cmltKClcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJylcbn1cblxuZnVuY3Rpb24gdG9IZXggKG4pIHtcbiAgaWYgKG4gPCAxNikgcmV0dXJuICcwJyArIG4udG9TdHJpbmcoMTYpXG4gIHJldHVybiBuLnRvU3RyaW5nKDE2KVxufVxuXG5mdW5jdGlvbiB1dGY4VG9CeXRlcyAoc3RyaW5nLCB1bml0cykge1xuICB1bml0cyA9IHVuaXRzIHx8IEluZmluaXR5XG4gIHZhciBjb2RlUG9pbnRcbiAgdmFyIGxlbmd0aCA9IHN0cmluZy5sZW5ndGhcbiAgdmFyIGxlYWRTdXJyb2dhdGUgPSBudWxsXG4gIHZhciBieXRlcyA9IFtdXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGNvZGVQb2ludCA9IHN0cmluZy5jaGFyQ29kZUF0KGkpXG5cbiAgICAvLyBpcyBzdXJyb2dhdGUgY29tcG9uZW50XG4gICAgaWYgKGNvZGVQb2ludCA+IDB4RDdGRiAmJiBjb2RlUG9pbnQgPCAweEUwMDApIHtcbiAgICAgIC8vIGxhc3QgY2hhciB3YXMgYSBsZWFkXG4gICAgICBpZiAoIWxlYWRTdXJyb2dhdGUpIHtcbiAgICAgICAgLy8gbm8gbGVhZCB5ZXRcbiAgICAgICAgaWYgKGNvZGVQb2ludCA+IDB4REJGRikge1xuICAgICAgICAgIC8vIHVuZXhwZWN0ZWQgdHJhaWxcbiAgICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9IGVsc2UgaWYgKGkgKyAxID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAvLyB1bnBhaXJlZCBsZWFkXG4gICAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHZhbGlkIGxlYWRcbiAgICAgICAgbGVhZFN1cnJvZ2F0ZSA9IGNvZGVQb2ludFxuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIDIgbGVhZHMgaW4gYSByb3dcbiAgICAgIGlmIChjb2RlUG9pbnQgPCAweERDMDApIHtcbiAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgIGxlYWRTdXJyb2dhdGUgPSBjb2RlUG9pbnRcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gdmFsaWQgc3Vycm9nYXRlIHBhaXJcbiAgICAgIGNvZGVQb2ludCA9IChsZWFkU3Vycm9nYXRlIC0gMHhEODAwIDw8IDEwIHwgY29kZVBvaW50IC0gMHhEQzAwKSArIDB4MTAwMDBcbiAgICB9IGVsc2UgaWYgKGxlYWRTdXJyb2dhdGUpIHtcbiAgICAgIC8vIHZhbGlkIGJtcCBjaGFyLCBidXQgbGFzdCBjaGFyIHdhcyBhIGxlYWRcbiAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgIH1cblxuICAgIGxlYWRTdXJyb2dhdGUgPSBudWxsXG5cbiAgICAvLyBlbmNvZGUgdXRmOFxuICAgIGlmIChjb2RlUG9pbnQgPCAweDgwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDEpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goY29kZVBvaW50KVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHg4MDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMikgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiB8IDB4QzAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDEwMDAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDMpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweEMgfCAweEUwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2ICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDExMDAwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSA0KSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHgxMiB8IDB4RjAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweEMgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY29kZSBwb2ludCcpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVzXG59XG5cbmZ1bmN0aW9uIGFzY2lpVG9CeXRlcyAoc3RyKSB7XG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIC8vIE5vZGUncyBjb2RlIHNlZW1zIHRvIGJlIGRvaW5nIHRoaXMgYW5kIG5vdCAmIDB4N0YuLlxuICAgIGJ5dGVBcnJheS5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpICYgMHhGRilcbiAgfVxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVUb0J5dGVzIChzdHIsIHVuaXRzKSB7XG4gIHZhciBjLCBoaSwgbG9cbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKCh1bml0cyAtPSAyKSA8IDApIGJyZWFrXG5cbiAgICBjID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBoaSA9IGMgPj4gOFxuICAgIGxvID0gYyAlIDI1NlxuICAgIGJ5dGVBcnJheS5wdXNoKGxvKVxuICAgIGJ5dGVBcnJheS5wdXNoKGhpKVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiBiYXNlNjRUb0J5dGVzIChzdHIpIHtcbiAgcmV0dXJuIGJhc2U2NC50b0J5dGVBcnJheShiYXNlNjRjbGVhbihzdHIpKVxufVxuXG5mdW5jdGlvbiBibGl0QnVmZmVyIChzcmMsIGRzdCwgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGlmICgoaSArIG9mZnNldCA+PSBkc3QubGVuZ3RoKSB8fCAoaSA+PSBzcmMubGVuZ3RoKSkgYnJlYWtcbiAgICBkc3RbaSArIG9mZnNldF0gPSBzcmNbaV1cbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiBpc25hbiAodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IHZhbCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNlbGYtY29tcGFyZVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxudmFyIGNyZWF0ZVRodW5rID0gcmVxdWlyZShcIi4vbGliL3RodW5rLmpzXCIpXG5cbmZ1bmN0aW9uIFByb2NlZHVyZSgpIHtcbiAgdGhpcy5hcmdUeXBlcyA9IFtdXG4gIHRoaXMuc2hpbUFyZ3MgPSBbXVxuICB0aGlzLmFycmF5QXJncyA9IFtdXG4gIHRoaXMuYXJyYXlCbG9ja0luZGljZXMgPSBbXVxuICB0aGlzLnNjYWxhckFyZ3MgPSBbXVxuICB0aGlzLm9mZnNldEFyZ3MgPSBbXVxuICB0aGlzLm9mZnNldEFyZ0luZGV4ID0gW11cbiAgdGhpcy5pbmRleEFyZ3MgPSBbXVxuICB0aGlzLnNoYXBlQXJncyA9IFtdXG4gIHRoaXMuZnVuY05hbWUgPSBcIlwiXG4gIHRoaXMucHJlID0gbnVsbFxuICB0aGlzLmJvZHkgPSBudWxsXG4gIHRoaXMucG9zdCA9IG51bGxcbiAgdGhpcy5kZWJ1ZyA9IGZhbHNlXG59XG5cbmZ1bmN0aW9uIGNvbXBpbGVDd2lzZSh1c2VyX2FyZ3MpIHtcbiAgLy9DcmVhdGUgcHJvY2VkdXJlXG4gIHZhciBwcm9jID0gbmV3IFByb2NlZHVyZSgpXG4gIFxuICAvL1BhcnNlIGJsb2Nrc1xuICBwcm9jLnByZSAgICA9IHVzZXJfYXJncy5wcmVcbiAgcHJvYy5ib2R5ICAgPSB1c2VyX2FyZ3MuYm9keVxuICBwcm9jLnBvc3QgICA9IHVzZXJfYXJncy5wb3N0XG5cbiAgLy9QYXJzZSBhcmd1bWVudHNcbiAgdmFyIHByb2NfYXJncyA9IHVzZXJfYXJncy5hcmdzLnNsaWNlKDApXG4gIHByb2MuYXJnVHlwZXMgPSBwcm9jX2FyZ3NcbiAgZm9yKHZhciBpPTA7IGk8cHJvY19hcmdzLmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGFyZ190eXBlID0gcHJvY19hcmdzW2ldXG4gICAgaWYoYXJnX3R5cGUgPT09IFwiYXJyYXlcIiB8fCAodHlwZW9mIGFyZ190eXBlID09PSBcIm9iamVjdFwiICYmIGFyZ190eXBlLmJsb2NrSW5kaWNlcykpIHtcbiAgICAgIHByb2MuYXJnVHlwZXNbaV0gPSBcImFycmF5XCJcbiAgICAgIHByb2MuYXJyYXlBcmdzLnB1c2goaSlcbiAgICAgIHByb2MuYXJyYXlCbG9ja0luZGljZXMucHVzaChhcmdfdHlwZS5ibG9ja0luZGljZXMgPyBhcmdfdHlwZS5ibG9ja0luZGljZXMgOiAwKVxuICAgICAgcHJvYy5zaGltQXJncy5wdXNoKFwiYXJyYXlcIiArIGkpXG4gICAgICBpZihpIDwgcHJvYy5wcmUuYXJncy5sZW5ndGggJiYgcHJvYy5wcmUuYXJnc1tpXS5jb3VudD4wKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImN3aXNlOiBwcmUoKSBibG9jayBtYXkgbm90IHJlZmVyZW5jZSBhcnJheSBhcmdzXCIpXG4gICAgICB9XG4gICAgICBpZihpIDwgcHJvYy5wb3N0LmFyZ3MubGVuZ3RoICYmIHByb2MucG9zdC5hcmdzW2ldLmNvdW50PjApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY3dpc2U6IHBvc3QoKSBibG9jayBtYXkgbm90IHJlZmVyZW5jZSBhcnJheSBhcmdzXCIpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmKGFyZ190eXBlID09PSBcInNjYWxhclwiKSB7XG4gICAgICBwcm9jLnNjYWxhckFyZ3MucHVzaChpKVxuICAgICAgcHJvYy5zaGltQXJncy5wdXNoKFwic2NhbGFyXCIgKyBpKVxuICAgIH0gZWxzZSBpZihhcmdfdHlwZSA9PT0gXCJpbmRleFwiKSB7XG4gICAgICBwcm9jLmluZGV4QXJncy5wdXNoKGkpXG4gICAgICBpZihpIDwgcHJvYy5wcmUuYXJncy5sZW5ndGggJiYgcHJvYy5wcmUuYXJnc1tpXS5jb3VudCA+IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY3dpc2U6IHByZSgpIGJsb2NrIG1heSBub3QgcmVmZXJlbmNlIGFycmF5IGluZGV4XCIpXG4gICAgICB9XG4gICAgICBpZihpIDwgcHJvYy5ib2R5LmFyZ3MubGVuZ3RoICYmIHByb2MuYm9keS5hcmdzW2ldLmx2YWx1ZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjd2lzZTogYm9keSgpIGJsb2NrIG1heSBub3Qgd3JpdGUgdG8gYXJyYXkgaW5kZXhcIilcbiAgICAgIH1cbiAgICAgIGlmKGkgPCBwcm9jLnBvc3QuYXJncy5sZW5ndGggJiYgcHJvYy5wb3N0LmFyZ3NbaV0uY291bnQgPiAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImN3aXNlOiBwb3N0KCkgYmxvY2sgbWF5IG5vdCByZWZlcmVuY2UgYXJyYXkgaW5kZXhcIilcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYoYXJnX3R5cGUgPT09IFwic2hhcGVcIikge1xuICAgICAgcHJvYy5zaGFwZUFyZ3MucHVzaChpKVxuICAgICAgaWYoaSA8IHByb2MucHJlLmFyZ3MubGVuZ3RoICYmIHByb2MucHJlLmFyZ3NbaV0ubHZhbHVlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImN3aXNlOiBwcmUoKSBibG9jayBtYXkgbm90IHdyaXRlIHRvIGFycmF5IHNoYXBlXCIpXG4gICAgICB9XG4gICAgICBpZihpIDwgcHJvYy5ib2R5LmFyZ3MubGVuZ3RoICYmIHByb2MuYm9keS5hcmdzW2ldLmx2YWx1ZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjd2lzZTogYm9keSgpIGJsb2NrIG1heSBub3Qgd3JpdGUgdG8gYXJyYXkgc2hhcGVcIilcbiAgICAgIH1cbiAgICAgIGlmKGkgPCBwcm9jLnBvc3QuYXJncy5sZW5ndGggJiYgcHJvYy5wb3N0LmFyZ3NbaV0ubHZhbHVlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImN3aXNlOiBwb3N0KCkgYmxvY2sgbWF5IG5vdCB3cml0ZSB0byBhcnJheSBzaGFwZVwiKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZih0eXBlb2YgYXJnX3R5cGUgPT09IFwib2JqZWN0XCIgJiYgYXJnX3R5cGUub2Zmc2V0KSB7XG4gICAgICBwcm9jLmFyZ1R5cGVzW2ldID0gXCJvZmZzZXRcIlxuICAgICAgcHJvYy5vZmZzZXRBcmdzLnB1c2goeyBhcnJheTogYXJnX3R5cGUuYXJyYXksIG9mZnNldDphcmdfdHlwZS5vZmZzZXQgfSlcbiAgICAgIHByb2Mub2Zmc2V0QXJnSW5kZXgucHVzaChpKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjd2lzZTogVW5rbm93biBhcmd1bWVudCB0eXBlIFwiICsgcHJvY19hcmdzW2ldKVxuICAgIH1cbiAgfVxuICBcbiAgLy9NYWtlIHN1cmUgYXQgbGVhc3Qgb25lIGFycmF5IGFyZ3VtZW50IHdhcyBzcGVjaWZpZWRcbiAgaWYocHJvYy5hcnJheUFyZ3MubGVuZ3RoIDw9IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJjd2lzZTogTm8gYXJyYXkgYXJndW1lbnRzIHNwZWNpZmllZFwiKVxuICB9XG4gIFxuICAvL01ha2Ugc3VyZSBhcmd1bWVudHMgYXJlIGNvcnJlY3RcbiAgaWYocHJvYy5wcmUuYXJncy5sZW5ndGggPiBwcm9jX2FyZ3MubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiY3dpc2U6IFRvbyBtYW55IGFyZ3VtZW50cyBpbiBwcmUoKSBibG9ja1wiKVxuICB9XG4gIGlmKHByb2MuYm9keS5hcmdzLmxlbmd0aCA+IHByb2NfYXJncy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJjd2lzZTogVG9vIG1hbnkgYXJndW1lbnRzIGluIGJvZHkoKSBibG9ja1wiKVxuICB9XG4gIGlmKHByb2MucG9zdC5hcmdzLmxlbmd0aCA+IHByb2NfYXJncy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJjd2lzZTogVG9vIG1hbnkgYXJndW1lbnRzIGluIHBvc3QoKSBibG9ja1wiKVxuICB9XG5cbiAgLy9DaGVjayBkZWJ1ZyBmbGFnXG4gIHByb2MuZGVidWcgPSAhIXVzZXJfYXJncy5wcmludENvZGUgfHwgISF1c2VyX2FyZ3MuZGVidWdcbiAgXG4gIC8vUmV0cmlldmUgbmFtZVxuICBwcm9jLmZ1bmNOYW1lID0gdXNlcl9hcmdzLmZ1bmNOYW1lIHx8IFwiY3dpc2VcIlxuICBcbiAgLy9SZWFkIGluIGJsb2NrIHNpemVcbiAgcHJvYy5ibG9ja1NpemUgPSB1c2VyX2FyZ3MuYmxvY2tTaXplIHx8IDY0XG5cbiAgcmV0dXJuIGNyZWF0ZVRodW5rKHByb2MpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29tcGlsZUN3aXNlXG4iLCJcInVzZSBzdHJpY3RcIlxuXG52YXIgdW5pcSA9IHJlcXVpcmUoXCJ1bmlxXCIpXG5cbi8vIFRoaXMgZnVuY3Rpb24gZ2VuZXJhdGVzIHZlcnkgc2ltcGxlIGxvb3BzIGFuYWxvZ291cyB0byBob3cgeW91IHR5cGljYWxseSB0cmF2ZXJzZSBhcnJheXMgKHRoZSBvdXRlcm1vc3QgbG9vcCBjb3JyZXNwb25kcyB0byB0aGUgc2xvd2VzdCBjaGFuZ2luZyBpbmRleCwgdGhlIGlubmVybW9zdCBsb29wIHRvIHRoZSBmYXN0ZXN0IGNoYW5naW5nIGluZGV4KVxuLy8gVE9ETzogSWYgdHdvIGFycmF5cyBoYXZlIHRoZSBzYW1lIHN0cmlkZXMgKGFuZCBvZmZzZXRzKSB0aGVyZSBpcyBwb3RlbnRpYWwgZm9yIGRlY3JlYXNpbmcgdGhlIG51bWJlciBvZiBcInBvaW50ZXJzXCIgYW5kIHJlbGF0ZWQgdmFyaWFibGVzLiBUaGUgZHJhd2JhY2sgaXMgdGhhdCB0aGUgdHlwZSBzaWduYXR1cmUgd291bGQgYmVjb21lIG1vcmUgc3BlY2lmaWMgYW5kIHRoYXQgdGhlcmUgd291bGQgdGh1cyBiZSBsZXNzIHBvdGVudGlhbCBmb3IgY2FjaGluZywgYnV0IGl0IG1pZ2h0IHN0aWxsIGJlIHdvcnRoIGl0LCBlc3BlY2lhbGx5IHdoZW4gZGVhbGluZyB3aXRoIGxhcmdlIG51bWJlcnMgb2YgYXJndW1lbnRzLlxuZnVuY3Rpb24gaW5uZXJGaWxsKG9yZGVyLCBwcm9jLCBib2R5KSB7XG4gIHZhciBkaW1lbnNpb24gPSBvcmRlci5sZW5ndGhcbiAgICAsIG5hcmdzID0gcHJvYy5hcnJheUFyZ3MubGVuZ3RoXG4gICAgLCBoYXNfaW5kZXggPSBwcm9jLmluZGV4QXJncy5sZW5ndGg+MFxuICAgICwgY29kZSA9IFtdXG4gICAgLCB2YXJzID0gW11cbiAgICAsIGlkeD0wLCBwaWR4PTAsIGksIGpcbiAgZm9yKGk9MDsgaTxkaW1lbnNpb247ICsraSkgeyAvLyBJdGVyYXRpb24gdmFyaWFibGVzXG4gICAgdmFycy5wdXNoKFtcImlcIixpLFwiPTBcIl0uam9pbihcIlwiKSlcbiAgfVxuICAvL0NvbXB1dGUgc2NhbiBkZWx0YXNcbiAgZm9yKGo9MDsgajxuYXJnczsgKytqKSB7XG4gICAgZm9yKGk9MDsgaTxkaW1lbnNpb247ICsraSkge1xuICAgICAgcGlkeCA9IGlkeFxuICAgICAgaWR4ID0gb3JkZXJbaV1cbiAgICAgIGlmKGkgPT09IDApIHsgLy8gVGhlIGlubmVybW9zdC9mYXN0ZXN0IGRpbWVuc2lvbidzIGRlbHRhIGlzIHNpbXBseSBpdHMgc3RyaWRlXG4gICAgICAgIHZhcnMucHVzaChbXCJkXCIsaixcInNcIixpLFwiPXRcIixqLFwicFwiLGlkeF0uam9pbihcIlwiKSlcbiAgICAgIH0gZWxzZSB7IC8vIEZvciBvdGhlciBkaW1lbnNpb25zIHRoZSBkZWx0YSBpcyBiYXNpY2FsbHkgdGhlIHN0cmlkZSBtaW51cyBzb21ldGhpbmcgd2hpY2ggZXNzZW50aWFsbHkgXCJyZXdpbmRzXCIgdGhlIHByZXZpb3VzIChtb3JlIGlubmVyKSBkaW1lbnNpb25cbiAgICAgICAgdmFycy5wdXNoKFtcImRcIixqLFwic1wiLGksXCI9KHRcIixqLFwicFwiLGlkeCxcIi1zXCIscGlkeCxcIip0XCIsaixcInBcIixwaWR4LFwiKVwiXS5qb2luKFwiXCIpKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAodmFycy5sZW5ndGggPiAwKSB7XG4gICAgY29kZS5wdXNoKFwidmFyIFwiICsgdmFycy5qb2luKFwiLFwiKSlcbiAgfSAgXG4gIC8vU2NhbiBsb29wXG4gIGZvcihpPWRpbWVuc2lvbi0xOyBpPj0wOyAtLWkpIHsgLy8gU3RhcnQgYXQgbGFyZ2VzdCBzdHJpZGUgYW5kIHdvcmsgeW91ciB3YXkgaW53YXJkc1xuICAgIGlkeCA9IG9yZGVyW2ldXG4gICAgY29kZS5wdXNoKFtcImZvcihpXCIsaSxcIj0wO2lcIixpLFwiPHNcIixpZHgsXCI7KytpXCIsaSxcIil7XCJdLmpvaW4oXCJcIikpXG4gIH1cbiAgLy9QdXNoIGJvZHkgb2YgaW5uZXIgbG9vcFxuICBjb2RlLnB1c2goYm9keSlcbiAgLy9BZHZhbmNlIHNjYW4gcG9pbnRlcnNcbiAgZm9yKGk9MDsgaTxkaW1lbnNpb247ICsraSkge1xuICAgIHBpZHggPSBpZHhcbiAgICBpZHggPSBvcmRlcltpXVxuICAgIGZvcihqPTA7IGo8bmFyZ3M7ICsraikge1xuICAgICAgY29kZS5wdXNoKFtcInBcIixqLFwiKz1kXCIsaixcInNcIixpXS5qb2luKFwiXCIpKVxuICAgIH1cbiAgICBpZihoYXNfaW5kZXgpIHtcbiAgICAgIGlmKGkgPiAwKSB7XG4gICAgICAgIGNvZGUucHVzaChbXCJpbmRleFtcIixwaWR4LFwiXS09c1wiLHBpZHhdLmpvaW4oXCJcIikpXG4gICAgICB9XG4gICAgICBjb2RlLnB1c2goW1wiKytpbmRleFtcIixpZHgsXCJdXCJdLmpvaW4oXCJcIikpXG4gICAgfVxuICAgIGNvZGUucHVzaChcIn1cIilcbiAgfVxuICByZXR1cm4gY29kZS5qb2luKFwiXFxuXCIpXG59XG5cbi8vIEdlbmVyYXRlIFwib3V0ZXJcIiBsb29wcyB0aGF0IGxvb3Agb3ZlciBibG9ja3Mgb2YgZGF0YSwgYXBwbHlpbmcgXCJpbm5lclwiIGxvb3BzIHRvIHRoZSBibG9ja3MgYnkgbWFuaXB1bGF0aW5nIHRoZSBsb2NhbCB2YXJpYWJsZXMgaW4gc3VjaCBhIHdheSB0aGF0IHRoZSBpbm5lciBsb29wIG9ubHkgXCJzZWVzXCIgdGhlIGN1cnJlbnQgYmxvY2suXG4vLyBUT0RPOiBJZiB0aGlzIGlzIHVzZWQsIHRoZW4gdGhlIHByZXZpb3VzIGRlY2xhcmF0aW9uIChkb25lIGJ5IGdlbmVyYXRlQ3dpc2VPcCkgb2YgcyogaXMgZXNzZW50aWFsbHkgdW5uZWNlc3NhcnkuXG4vLyAgICAgICBJIGJlbGlldmUgdGhlIHMqIGFyZSBub3QgdXNlZCBlbHNld2hlcmUgKGluIHBhcnRpY3VsYXIsIEkgZG9uJ3QgdGhpbmsgdGhleSdyZSB1c2VkIGluIHRoZSBwcmUvcG9zdCBwYXJ0cyBhbmQgXCJzaGFwZVwiIGlzIGRlZmluZWQgaW5kZXBlbmRlbnRseSksIHNvIGl0IHdvdWxkIGJlIHBvc3NpYmxlIHRvIG1ha2UgZGVmaW5pbmcgdGhlIHMqIGRlcGVuZGVudCBvbiB3aGF0IGxvb3AgbWV0aG9kIGlzIGJlaW5nIHVzZWQuXG5mdW5jdGlvbiBvdXRlckZpbGwobWF0Y2hlZCwgb3JkZXIsIHByb2MsIGJvZHkpIHtcbiAgdmFyIGRpbWVuc2lvbiA9IG9yZGVyLmxlbmd0aFxuICAgICwgbmFyZ3MgPSBwcm9jLmFycmF5QXJncy5sZW5ndGhcbiAgICAsIGJsb2NrU2l6ZSA9IHByb2MuYmxvY2tTaXplXG4gICAgLCBoYXNfaW5kZXggPSBwcm9jLmluZGV4QXJncy5sZW5ndGggPiAwXG4gICAgLCBjb2RlID0gW11cbiAgZm9yKHZhciBpPTA7IGk8bmFyZ3M7ICsraSkge1xuICAgIGNvZGUucHVzaChbXCJ2YXIgb2Zmc2V0XCIsaSxcIj1wXCIsaV0uam9pbihcIlwiKSlcbiAgfVxuICAvL0dlbmVyYXRlIGxvb3BzIGZvciB1bm1hdGNoZWQgZGltZW5zaW9uc1xuICAvLyBUaGUgb3JkZXIgaW4gd2hpY2ggdGhlc2UgZGltZW5zaW9ucyBhcmUgdHJhdmVyc2VkIGlzIGZhaXJseSBhcmJpdHJhcnkgKGZyb20gc21hbGwgc3RyaWRlIHRvIGxhcmdlIHN0cmlkZSwgZm9yIHRoZSBmaXJzdCBhcmd1bWVudClcbiAgLy8gVE9ETzogSXQgd291bGQgYmUgbmljZSBpZiB0aGUgb3JkZXIgaW4gd2hpY2ggdGhlc2UgbG9vcHMgYXJlIHBsYWNlZCB3b3VsZCBhbHNvIGJlIHNvbWVob3cgXCJvcHRpbWFsXCIgKGF0IHRoZSB2ZXJ5IGxlYXN0IHdlIHNob3VsZCBjaGVjayB0aGF0IGl0IHJlYWxseSBkb2Vzbid0IGh1cnQgdXMgaWYgdGhleSdyZSBub3QpLlxuICBmb3IodmFyIGk9bWF0Y2hlZDsgaTxkaW1lbnNpb247ICsraSkge1xuICAgIGNvZGUucHVzaChbXCJmb3IodmFyIGpcIitpK1wiPVNTW1wiLCBvcmRlcltpXSwgXCJdfDA7alwiLCBpLCBcIj4wOyl7XCJdLmpvaW4oXCJcIikpIC8vIEl0ZXJhdGUgYmFjayB0byBmcm9udFxuICAgIGNvZGUucHVzaChbXCJpZihqXCIsaSxcIjxcIixibG9ja1NpemUsXCIpe1wiXS5qb2luKFwiXCIpKSAvLyBFaXRoZXIgZGVjcmVhc2UgaiBieSBibG9ja1NpemUgKHMgPSBibG9ja1NpemUpLCBvciBzZXQgaXQgdG8gemVybyAoYWZ0ZXIgc2V0dGluZyBzID0gaikuXG4gICAgY29kZS5wdXNoKFtcInNcIixvcmRlcltpXSxcIj1qXCIsaV0uam9pbihcIlwiKSlcbiAgICBjb2RlLnB1c2goW1wialwiLGksXCI9MFwiXS5qb2luKFwiXCIpKVxuICAgIGNvZGUucHVzaChbXCJ9ZWxzZXtzXCIsb3JkZXJbaV0sXCI9XCIsYmxvY2tTaXplXS5qb2luKFwiXCIpKVxuICAgIGNvZGUucHVzaChbXCJqXCIsaSxcIi09XCIsYmxvY2tTaXplLFwifVwiXS5qb2luKFwiXCIpKVxuICAgIGlmKGhhc19pbmRleCkge1xuICAgICAgY29kZS5wdXNoKFtcImluZGV4W1wiLG9yZGVyW2ldLFwiXT1qXCIsaV0uam9pbihcIlwiKSlcbiAgICB9XG4gIH1cbiAgZm9yKHZhciBpPTA7IGk8bmFyZ3M7ICsraSkge1xuICAgIHZhciBpbmRleFN0ciA9IFtcIm9mZnNldFwiK2ldXG4gICAgZm9yKHZhciBqPW1hdGNoZWQ7IGo8ZGltZW5zaW9uOyArK2opIHtcbiAgICAgIGluZGV4U3RyLnB1c2goW1wialwiLGosXCIqdFwiLGksXCJwXCIsb3JkZXJbal1dLmpvaW4oXCJcIikpXG4gICAgfVxuICAgIGNvZGUucHVzaChbXCJwXCIsaSxcIj0oXCIsaW5kZXhTdHIuam9pbihcIitcIiksXCIpXCJdLmpvaW4oXCJcIikpXG4gIH1cbiAgY29kZS5wdXNoKGlubmVyRmlsbChvcmRlciwgcHJvYywgYm9keSkpXG4gIGZvcih2YXIgaT1tYXRjaGVkOyBpPGRpbWVuc2lvbjsgKytpKSB7XG4gICAgY29kZS5wdXNoKFwifVwiKVxuICB9XG4gIHJldHVybiBjb2RlLmpvaW4oXCJcXG5cIilcbn1cblxuLy9Db3VudCB0aGUgbnVtYmVyIG9mIGNvbXBhdGlibGUgaW5uZXIgb3JkZXJzXG4vLyBUaGlzIGlzIHRoZSBsZW5ndGggb2YgdGhlIGxvbmdlc3QgY29tbW9uIHByZWZpeCBvZiB0aGUgYXJyYXlzIGluIG9yZGVycy5cbi8vIEVhY2ggYXJyYXkgaW4gb3JkZXJzIGxpc3RzIHRoZSBkaW1lbnNpb25zIG9mIHRoZSBjb3JyZXNwb25kIG5kYXJyYXkgaW4gb3JkZXIgb2YgaW5jcmVhc2luZyBzdHJpZGUuXG4vLyBUaGlzIGlzIHRodXMgdGhlIG1heGltdW0gbnVtYmVyIG9mIGRpbWVuc2lvbnMgdGhhdCBjYW4gYmUgZWZmaWNpZW50bHkgdHJhdmVyc2VkIGJ5IHNpbXBsZSBuZXN0ZWQgbG9vcHMgZm9yIGFsbCBhcnJheXMuXG5mdW5jdGlvbiBjb3VudE1hdGNoZXMob3JkZXJzKSB7XG4gIHZhciBtYXRjaGVkID0gMCwgZGltZW5zaW9uID0gb3JkZXJzWzBdLmxlbmd0aFxuICB3aGlsZShtYXRjaGVkIDwgZGltZW5zaW9uKSB7XG4gICAgZm9yKHZhciBqPTE7IGo8b3JkZXJzLmxlbmd0aDsgKytqKSB7XG4gICAgICBpZihvcmRlcnNbal1bbWF0Y2hlZF0gIT09IG9yZGVyc1swXVttYXRjaGVkXSkge1xuICAgICAgICByZXR1cm4gbWF0Y2hlZFxuICAgICAgfVxuICAgIH1cbiAgICArK21hdGNoZWRcbiAgfVxuICByZXR1cm4gbWF0Y2hlZFxufVxuXG4vL1Byb2Nlc3NlcyBhIGJsb2NrIGFjY29yZGluZyB0byB0aGUgZ2l2ZW4gZGF0YSB0eXBlc1xuLy8gUmVwbGFjZXMgdmFyaWFibGUgbmFtZXMgYnkgZGlmZmVyZW50IG9uZXMsIGVpdGhlciBcImxvY2FsXCIgb25lcyAodGhhdCBhcmUgdGhlbiBmZXJyaWVkIGluIGFuZCBvdXQgb2YgdGhlIGdpdmVuIGFycmF5KSBvciBvbmVzIG1hdGNoaW5nIHRoZSBhcmd1bWVudHMgdGhhdCB0aGUgZnVuY3Rpb24gcGVyZm9ybWluZyB0aGUgdWx0aW1hdGUgbG9vcCB3aWxsIGFjY2VwdC5cbmZ1bmN0aW9uIHByb2Nlc3NCbG9jayhibG9jaywgcHJvYywgZHR5cGVzKSB7XG4gIHZhciBjb2RlID0gYmxvY2suYm9keVxuICB2YXIgcHJlID0gW11cbiAgdmFyIHBvc3QgPSBbXVxuICBmb3IodmFyIGk9MDsgaTxibG9jay5hcmdzLmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGNhcmcgPSBibG9jay5hcmdzW2ldXG4gICAgaWYoY2FyZy5jb3VudCA8PSAwKSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICB2YXIgcmUgPSBuZXcgUmVnRXhwKGNhcmcubmFtZSwgXCJnXCIpXG4gICAgdmFyIHB0clN0ciA9IFwiXCJcbiAgICB2YXIgYXJyTnVtID0gcHJvYy5hcnJheUFyZ3MuaW5kZXhPZihpKVxuICAgIHN3aXRjaChwcm9jLmFyZ1R5cGVzW2ldKSB7XG4gICAgICBjYXNlIFwib2Zmc2V0XCI6XG4gICAgICAgIHZhciBvZmZBcmdJbmRleCA9IHByb2Mub2Zmc2V0QXJnSW5kZXguaW5kZXhPZihpKVxuICAgICAgICB2YXIgb2ZmQXJnID0gcHJvYy5vZmZzZXRBcmdzW29mZkFyZ0luZGV4XVxuICAgICAgICBhcnJOdW0gPSBvZmZBcmcuYXJyYXlcbiAgICAgICAgcHRyU3RyID0gXCIrcVwiICsgb2ZmQXJnSW5kZXggLy8gQWRkcyBvZmZzZXQgdG8gdGhlIFwicG9pbnRlclwiIGluIHRoZSBhcnJheVxuICAgICAgY2FzZSBcImFycmF5XCI6XG4gICAgICAgIHB0clN0ciA9IFwicFwiICsgYXJyTnVtICsgcHRyU3RyXG4gICAgICAgIHZhciBsb2NhbFN0ciA9IFwibFwiICsgaVxuICAgICAgICB2YXIgYXJyU3RyID0gXCJhXCIgKyBhcnJOdW1cbiAgICAgICAgaWYgKHByb2MuYXJyYXlCbG9ja0luZGljZXNbYXJyTnVtXSA9PT0gMCkgeyAvLyBBcmd1bWVudCB0byBib2R5IGlzIGp1c3QgYSBzaW5nbGUgdmFsdWUgZnJvbSB0aGlzIGFycmF5XG4gICAgICAgICAgaWYoY2FyZy5jb3VudCA9PT0gMSkgeyAvLyBBcmd1bWVudC9hcnJheSB1c2VkIG9ubHkgb25jZSg/KVxuICAgICAgICAgICAgaWYoZHR5cGVzW2Fyck51bV0gPT09IFwiZ2VuZXJpY1wiKSB7XG4gICAgICAgICAgICAgIGlmKGNhcmcubHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcHJlLnB1c2goW1widmFyIFwiLCBsb2NhbFN0ciwgXCI9XCIsIGFyclN0ciwgXCIuZ2V0KFwiLCBwdHJTdHIsIFwiKVwiXS5qb2luKFwiXCIpKSAvLyBJcyB0aGlzIG5lY2Vzc2FyeSBpZiB0aGUgYXJndW1lbnQgaXMgT05MWSB1c2VkIGFzIGFuIGx2YWx1ZT8gKGtlZXAgaW4gbWluZCB0aGF0IHdlIGNhbiBoYXZlIGEgKz0gc29tZXRoaW5nLCBzbyB3ZSB3b3VsZCBhY3R1YWxseSBuZWVkIHRvIGNoZWNrIGNhcmcucnZhbHVlKVxuICAgICAgICAgICAgICAgIGNvZGUgPSBjb2RlLnJlcGxhY2UocmUsIGxvY2FsU3RyKVxuICAgICAgICAgICAgICAgIHBvc3QucHVzaChbYXJyU3RyLCBcIi5zZXQoXCIsIHB0clN0ciwgXCIsXCIsIGxvY2FsU3RyLFwiKVwiXS5qb2luKFwiXCIpKVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvZGUgPSBjb2RlLnJlcGxhY2UocmUsIFthcnJTdHIsIFwiLmdldChcIiwgcHRyU3RyLCBcIilcIl0uam9pbihcIlwiKSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29kZSA9IGNvZGUucmVwbGFjZShyZSwgW2FyclN0ciwgXCJbXCIsIHB0clN0ciwgXCJdXCJdLmpvaW4oXCJcIikpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmKGR0eXBlc1thcnJOdW1dID09PSBcImdlbmVyaWNcIikge1xuICAgICAgICAgICAgcHJlLnB1c2goW1widmFyIFwiLCBsb2NhbFN0ciwgXCI9XCIsIGFyclN0ciwgXCIuZ2V0KFwiLCBwdHJTdHIsIFwiKVwiXS5qb2luKFwiXCIpKSAvLyBUT0RPOiBDb3VsZCB3ZSBvcHRpbWl6ZSBieSBjaGVja2luZyBmb3IgY2FyZy5ydmFsdWU/XG4gICAgICAgICAgICBjb2RlID0gY29kZS5yZXBsYWNlKHJlLCBsb2NhbFN0cilcbiAgICAgICAgICAgIGlmKGNhcmcubHZhbHVlKSB7XG4gICAgICAgICAgICAgIHBvc3QucHVzaChbYXJyU3RyLCBcIi5zZXQoXCIsIHB0clN0ciwgXCIsXCIsIGxvY2FsU3RyLFwiKVwiXS5qb2luKFwiXCIpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcmUucHVzaChbXCJ2YXIgXCIsIGxvY2FsU3RyLCBcIj1cIiwgYXJyU3RyLCBcIltcIiwgcHRyU3RyLCBcIl1cIl0uam9pbihcIlwiKSkgLy8gVE9ETzogQ291bGQgd2Ugb3B0aW1pemUgYnkgY2hlY2tpbmcgZm9yIGNhcmcucnZhbHVlP1xuICAgICAgICAgICAgY29kZSA9IGNvZGUucmVwbGFjZShyZSwgbG9jYWxTdHIpXG4gICAgICAgICAgICBpZihjYXJnLmx2YWx1ZSkge1xuICAgICAgICAgICAgICBwb3N0LnB1c2goW2FyclN0ciwgXCJbXCIsIHB0clN0ciwgXCJdPVwiLCBsb2NhbFN0cl0uam9pbihcIlwiKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7IC8vIEFyZ3VtZW50IHRvIGJvZHkgaXMgYSBcImJsb2NrXCJcbiAgICAgICAgICB2YXIgcmVTdHJBcnIgPSBbY2FyZy5uYW1lXSwgcHRyU3RyQXJyID0gW3B0clN0cl1cbiAgICAgICAgICBmb3IodmFyIGo9MDsgajxNYXRoLmFicyhwcm9jLmFycmF5QmxvY2tJbmRpY2VzW2Fyck51bV0pOyBqKyspIHtcbiAgICAgICAgICAgIHJlU3RyQXJyLnB1c2goXCJcXFxccypcXFxcWyhbXlxcXFxdXSspXFxcXF1cIilcbiAgICAgICAgICAgIHB0clN0ckFyci5wdXNoKFwiJFwiICsgKGorMSkgKyBcIip0XCIgKyBhcnJOdW0gKyBcImJcIiArIGopIC8vIE1hdGNoZWQgaW5kZXggdGltZXMgc3RyaWRlXG4gICAgICAgICAgfVxuICAgICAgICAgIHJlID0gbmV3IFJlZ0V4cChyZVN0ckFyci5qb2luKFwiXCIpLCBcImdcIilcbiAgICAgICAgICBwdHJTdHIgPSBwdHJTdHJBcnIuam9pbihcIitcIilcbiAgICAgICAgICBpZihkdHlwZXNbYXJyTnVtXSA9PT0gXCJnZW5lcmljXCIpIHtcbiAgICAgICAgICAgIC8qaWYoY2FyZy5sdmFsdWUpIHtcbiAgICAgICAgICAgICAgcHJlLnB1c2goW1widmFyIFwiLCBsb2NhbFN0ciwgXCI9XCIsIGFyclN0ciwgXCIuZ2V0KFwiLCBwdHJTdHIsIFwiKVwiXS5qb2luKFwiXCIpKSAvLyBJcyB0aGlzIG5lY2Vzc2FyeSBpZiB0aGUgYXJndW1lbnQgaXMgT05MWSB1c2VkIGFzIGFuIGx2YWx1ZT8gKGtlZXAgaW4gbWluZCB0aGF0IHdlIGNhbiBoYXZlIGEgKz0gc29tZXRoaW5nLCBzbyB3ZSB3b3VsZCBhY3R1YWxseSBuZWVkIHRvIGNoZWNrIGNhcmcucnZhbHVlKVxuICAgICAgICAgICAgICBjb2RlID0gY29kZS5yZXBsYWNlKHJlLCBsb2NhbFN0cilcbiAgICAgICAgICAgICAgcG9zdC5wdXNoKFthcnJTdHIsIFwiLnNldChcIiwgcHRyU3RyLCBcIixcIiwgbG9jYWxTdHIsXCIpXCJdLmpvaW4oXCJcIikpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb2RlID0gY29kZS5yZXBsYWNlKHJlLCBbYXJyU3RyLCBcIi5nZXQoXCIsIHB0clN0ciwgXCIpXCJdLmpvaW4oXCJcIikpXG4gICAgICAgICAgICB9Ki9cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImN3aXNlOiBHZW5lcmljIGFycmF5cyBub3Qgc3VwcG9ydGVkIGluIGNvbWJpbmF0aW9uIHdpdGggYmxvY2tzIVwiKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBUaGlzIGRvZXMgbm90IHByb2R1Y2UgYW55IGxvY2FsIHZhcmlhYmxlcywgZXZlbiBpZiB2YXJpYWJsZXMgYXJlIHVzZWQgbXVsdGlwbGUgdGltZXMuIEl0IHdvdWxkIGJlIHBvc3NpYmxlIHRvIGRvIHNvLCBidXQgaXQgd291bGQgY29tcGxpY2F0ZSB0aGluZ3MgcXVpdGUgYSBiaXQuXG4gICAgICAgICAgICBjb2RlID0gY29kZS5yZXBsYWNlKHJlLCBbYXJyU3RyLCBcIltcIiwgcHRyU3RyLCBcIl1cIl0uam9pbihcIlwiKSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGJyZWFrXG4gICAgICBjYXNlIFwic2NhbGFyXCI6XG4gICAgICAgIGNvZGUgPSBjb2RlLnJlcGxhY2UocmUsIFwiWVwiICsgcHJvYy5zY2FsYXJBcmdzLmluZGV4T2YoaSkpXG4gICAgICBicmVha1xuICAgICAgY2FzZSBcImluZGV4XCI6XG4gICAgICAgIGNvZGUgPSBjb2RlLnJlcGxhY2UocmUsIFwiaW5kZXhcIilcbiAgICAgIGJyZWFrXG4gICAgICBjYXNlIFwic2hhcGVcIjpcbiAgICAgICAgY29kZSA9IGNvZGUucmVwbGFjZShyZSwgXCJzaGFwZVwiKVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIFtwcmUuam9pbihcIlxcblwiKSwgY29kZSwgcG9zdC5qb2luKFwiXFxuXCIpXS5qb2luKFwiXFxuXCIpLnRyaW0oKVxufVxuXG5mdW5jdGlvbiB0eXBlU3VtbWFyeShkdHlwZXMpIHtcbiAgdmFyIHN1bW1hcnkgPSBuZXcgQXJyYXkoZHR5cGVzLmxlbmd0aClcbiAgdmFyIGFsbEVxdWFsID0gdHJ1ZVxuICBmb3IodmFyIGk9MDsgaTxkdHlwZXMubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgdCA9IGR0eXBlc1tpXVxuICAgIHZhciBkaWdpdHMgPSB0Lm1hdGNoKC9cXGQrLylcbiAgICBpZighZGlnaXRzKSB7XG4gICAgICBkaWdpdHMgPSBcIlwiXG4gICAgfSBlbHNlIHtcbiAgICAgIGRpZ2l0cyA9IGRpZ2l0c1swXVxuICAgIH1cbiAgICBpZih0LmNoYXJBdCgwKSA9PT0gMCkge1xuICAgICAgc3VtbWFyeVtpXSA9IFwidVwiICsgdC5jaGFyQXQoMSkgKyBkaWdpdHNcbiAgICB9IGVsc2Uge1xuICAgICAgc3VtbWFyeVtpXSA9IHQuY2hhckF0KDApICsgZGlnaXRzXG4gICAgfVxuICAgIGlmKGkgPiAwKSB7XG4gICAgICBhbGxFcXVhbCA9IGFsbEVxdWFsICYmIHN1bW1hcnlbaV0gPT09IHN1bW1hcnlbaS0xXVxuICAgIH1cbiAgfVxuICBpZihhbGxFcXVhbCkge1xuICAgIHJldHVybiBzdW1tYXJ5WzBdXG4gIH1cbiAgcmV0dXJuIHN1bW1hcnkuam9pbihcIlwiKVxufVxuXG4vL0dlbmVyYXRlcyBhIGN3aXNlIG9wZXJhdG9yXG5mdW5jdGlvbiBnZW5lcmF0ZUNXaXNlT3AocHJvYywgdHlwZXNpZykge1xuXG4gIC8vQ29tcHV0ZSBkaW1lbnNpb25cbiAgLy8gQXJyYXlzIGdldCBwdXQgZmlyc3QgaW4gdHlwZXNpZywgYW5kIHRoZXJlIGFyZSB0d28gZW50cmllcyBwZXIgYXJyYXkgKGR0eXBlIGFuZCBvcmRlciksIHNvIHRoaXMgZ2V0cyB0aGUgbnVtYmVyIG9mIGRpbWVuc2lvbnMgaW4gdGhlIGZpcnN0IGFycmF5IGFyZy5cbiAgdmFyIGRpbWVuc2lvbiA9ICh0eXBlc2lnWzFdLmxlbmd0aCAtIE1hdGguYWJzKHByb2MuYXJyYXlCbG9ja0luZGljZXNbMF0pKXwwXG4gIHZhciBvcmRlcnMgPSBuZXcgQXJyYXkocHJvYy5hcnJheUFyZ3MubGVuZ3RoKVxuICB2YXIgZHR5cGVzID0gbmV3IEFycmF5KHByb2MuYXJyYXlBcmdzLmxlbmd0aClcbiAgZm9yKHZhciBpPTA7IGk8cHJvYy5hcnJheUFyZ3MubGVuZ3RoOyArK2kpIHtcbiAgICBkdHlwZXNbaV0gPSB0eXBlc2lnWzIqaV1cbiAgICBvcmRlcnNbaV0gPSB0eXBlc2lnWzIqaSsxXVxuICB9XG4gIFxuICAvL0RldGVybWluZSB3aGVyZSBibG9jayBhbmQgbG9vcCBpbmRpY2VzIHN0YXJ0IGFuZCBlbmRcbiAgdmFyIGJsb2NrQmVnaW4gPSBbXSwgYmxvY2tFbmQgPSBbXSAvLyBUaGVzZSBpbmRpY2VzIGFyZSBleHBvc2VkIGFzIGJsb2Nrc1xuICB2YXIgbG9vcEJlZ2luID0gW10sIGxvb3BFbmQgPSBbXSAvLyBUaGVzZSBpbmRpY2VzIGFyZSBpdGVyYXRlZCBvdmVyXG4gIHZhciBsb29wT3JkZXJzID0gW10gLy8gb3JkZXJzIHJlc3RyaWN0ZWQgdG8gdGhlIGxvb3AgaW5kaWNlc1xuICBmb3IodmFyIGk9MDsgaTxwcm9jLmFycmF5QXJncy5sZW5ndGg7ICsraSkge1xuICAgIGlmIChwcm9jLmFycmF5QmxvY2tJbmRpY2VzW2ldPDApIHtcbiAgICAgIGxvb3BCZWdpbi5wdXNoKDApXG4gICAgICBsb29wRW5kLnB1c2goZGltZW5zaW9uKVxuICAgICAgYmxvY2tCZWdpbi5wdXNoKGRpbWVuc2lvbilcbiAgICAgIGJsb2NrRW5kLnB1c2goZGltZW5zaW9uK3Byb2MuYXJyYXlCbG9ja0luZGljZXNbaV0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGxvb3BCZWdpbi5wdXNoKHByb2MuYXJyYXlCbG9ja0luZGljZXNbaV0pIC8vIE5vbi1uZWdhdGl2ZVxuICAgICAgbG9vcEVuZC5wdXNoKHByb2MuYXJyYXlCbG9ja0luZGljZXNbaV0rZGltZW5zaW9uKVxuICAgICAgYmxvY2tCZWdpbi5wdXNoKDApXG4gICAgICBibG9ja0VuZC5wdXNoKHByb2MuYXJyYXlCbG9ja0luZGljZXNbaV0pXG4gICAgfVxuICAgIHZhciBuZXdPcmRlciA9IFtdXG4gICAgZm9yKHZhciBqPTA7IGo8b3JkZXJzW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICBpZiAobG9vcEJlZ2luW2ldPD1vcmRlcnNbaV1bal0gJiYgb3JkZXJzW2ldW2pdPGxvb3BFbmRbaV0pIHtcbiAgICAgICAgbmV3T3JkZXIucHVzaChvcmRlcnNbaV1bal0tbG9vcEJlZ2luW2ldKSAvLyBJZiB0aGlzIGlzIGEgbG9vcCBpbmRleCwgcHV0IGl0IGluIG5ld09yZGVyLCBzdWJ0cmFjdGluZyBsb29wQmVnaW4sIHRvIG1ha2Ugc3VyZSB0aGF0IGFsbCBsb29wT3JkZXJzIGFyZSB1c2luZyBhIGNvbW1vbiBzZXQgb2YgaW5kaWNlcy5cbiAgICAgIH1cbiAgICB9XG4gICAgbG9vcE9yZGVycy5wdXNoKG5ld09yZGVyKVxuICB9XG5cbiAgLy9GaXJzdCBjcmVhdGUgYXJndW1lbnRzIGZvciBwcm9jZWR1cmVcbiAgdmFyIGFyZ2xpc3QgPSBbXCJTU1wiXSAvLyBTUyBpcyB0aGUgb3ZlcmFsbCBzaGFwZSBvdmVyIHdoaWNoIHdlIGl0ZXJhdGVcbiAgdmFyIGNvZGUgPSBbXCIndXNlIHN0cmljdCdcIl1cbiAgdmFyIHZhcnMgPSBbXVxuICBcbiAgZm9yKHZhciBqPTA7IGo8ZGltZW5zaW9uOyArK2opIHtcbiAgICB2YXJzLnB1c2goW1wic1wiLCBqLCBcIj1TU1tcIiwgaiwgXCJdXCJdLmpvaW4oXCJcIikpIC8vIFRoZSBsaW1pdHMgZm9yIGVhY2ggZGltZW5zaW9uLlxuICB9XG4gIGZvcih2YXIgaT0wOyBpPHByb2MuYXJyYXlBcmdzLmxlbmd0aDsgKytpKSB7XG4gICAgYXJnbGlzdC5wdXNoKFwiYVwiK2kpIC8vIEFjdHVhbCBkYXRhIGFycmF5XG4gICAgYXJnbGlzdC5wdXNoKFwidFwiK2kpIC8vIFN0cmlkZXNcbiAgICBhcmdsaXN0LnB1c2goXCJwXCIraSkgLy8gT2Zmc2V0IGluIHRoZSBhcnJheSBhdCB3aGljaCB0aGUgZGF0YSBzdGFydHMgKGFsc28gdXNlZCBmb3IgaXRlcmF0aW5nIG92ZXIgdGhlIGRhdGEpXG4gICAgXG4gICAgZm9yKHZhciBqPTA7IGo8ZGltZW5zaW9uOyArK2opIHsgLy8gVW5wYWNrIHRoZSBzdHJpZGVzIGludG8gdmFycyBmb3IgbG9vcGluZ1xuICAgICAgdmFycy5wdXNoKFtcInRcIixpLFwicFwiLGosXCI9dFwiLGksXCJbXCIsbG9vcEJlZ2luW2ldK2osXCJdXCJdLmpvaW4oXCJcIikpXG4gICAgfVxuICAgIFxuICAgIGZvcih2YXIgaj0wOyBqPE1hdGguYWJzKHByb2MuYXJyYXlCbG9ja0luZGljZXNbaV0pOyArK2opIHsgLy8gVW5wYWNrIHRoZSBzdHJpZGVzIGludG8gdmFycyBmb3IgYmxvY2sgaXRlcmF0aW9uXG4gICAgICB2YXJzLnB1c2goW1widFwiLGksXCJiXCIsaixcIj10XCIsaSxcIltcIixibG9ja0JlZ2luW2ldK2osXCJdXCJdLmpvaW4oXCJcIikpXG4gICAgfVxuICB9XG4gIGZvcih2YXIgaT0wOyBpPHByb2Muc2NhbGFyQXJncy5sZW5ndGg7ICsraSkge1xuICAgIGFyZ2xpc3QucHVzaChcIllcIiArIGkpXG4gIH1cbiAgaWYocHJvYy5zaGFwZUFyZ3MubGVuZ3RoID4gMCkge1xuICAgIHZhcnMucHVzaChcInNoYXBlPVNTLnNsaWNlKDApXCIpIC8vIE1ha2VzIHRoZSBzaGFwZSBvdmVyIHdoaWNoIHdlIGl0ZXJhdGUgYXZhaWxhYmxlIHRvIHRoZSB1c2VyIGRlZmluZWQgZnVuY3Rpb25zIChzbyB5b3UgY2FuIHVzZSB3aWR0aC9oZWlnaHQgZm9yIGV4YW1wbGUpXG4gIH1cbiAgaWYocHJvYy5pbmRleEFyZ3MubGVuZ3RoID4gMCkge1xuICAgIC8vIFByZXBhcmUgYW4gYXJyYXkgdG8ga2VlcCB0cmFjayBvZiB0aGUgKGxvZ2ljYWwpIGluZGljZXMsIGluaXRpYWxpemVkIHRvIGRpbWVuc2lvbiB6ZXJvZXMuXG4gICAgdmFyIHplcm9zID0gbmV3IEFycmF5KGRpbWVuc2lvbilcbiAgICBmb3IodmFyIGk9MDsgaTxkaW1lbnNpb247ICsraSkge1xuICAgICAgemVyb3NbaV0gPSBcIjBcIlxuICAgIH1cbiAgICB2YXJzLnB1c2goW1wiaW5kZXg9W1wiLCB6ZXJvcy5qb2luKFwiLFwiKSwgXCJdXCJdLmpvaW4oXCJcIikpXG4gIH1cbiAgZm9yKHZhciBpPTA7IGk8cHJvYy5vZmZzZXRBcmdzLmxlbmd0aDsgKytpKSB7IC8vIE9mZnNldCBhcmd1bWVudHMgdXNlZCBmb3Igc3RlbmNpbCBvcGVyYXRpb25zXG4gICAgdmFyIG9mZl9hcmcgPSBwcm9jLm9mZnNldEFyZ3NbaV1cbiAgICB2YXIgaW5pdF9zdHJpbmcgPSBbXVxuICAgIGZvcih2YXIgaj0wOyBqPG9mZl9hcmcub2Zmc2V0Lmxlbmd0aDsgKytqKSB7XG4gICAgICBpZihvZmZfYXJnLm9mZnNldFtqXSA9PT0gMCkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfSBlbHNlIGlmKG9mZl9hcmcub2Zmc2V0W2pdID09PSAxKSB7XG4gICAgICAgIGluaXRfc3RyaW5nLnB1c2goW1widFwiLCBvZmZfYXJnLmFycmF5LCBcInBcIiwgal0uam9pbihcIlwiKSkgICAgICBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluaXRfc3RyaW5nLnB1c2goW29mZl9hcmcub2Zmc2V0W2pdLCBcIip0XCIsIG9mZl9hcmcuYXJyYXksIFwicFwiLCBqXS5qb2luKFwiXCIpKVxuICAgICAgfVxuICAgIH1cbiAgICBpZihpbml0X3N0cmluZy5sZW5ndGggPT09IDApIHtcbiAgICAgIHZhcnMucHVzaChcInFcIiArIGkgKyBcIj0wXCIpXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhcnMucHVzaChbXCJxXCIsIGksIFwiPVwiLCBpbml0X3N0cmluZy5qb2luKFwiK1wiKV0uam9pbihcIlwiKSlcbiAgICB9XG4gIH1cblxuICAvL1ByZXBhcmUgdGhpcyB2YXJpYWJsZXNcbiAgdmFyIHRoaXNWYXJzID0gdW5pcShbXS5jb25jYXQocHJvYy5wcmUudGhpc1ZhcnMpXG4gICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdChwcm9jLmJvZHkudGhpc1ZhcnMpXG4gICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdChwcm9jLnBvc3QudGhpc1ZhcnMpKVxuICB2YXJzID0gdmFycy5jb25jYXQodGhpc1ZhcnMpXG4gIGlmICh2YXJzLmxlbmd0aCA+IDApIHtcbiAgICBjb2RlLnB1c2goXCJ2YXIgXCIgKyB2YXJzLmpvaW4oXCIsXCIpKVxuICB9XG4gIGZvcih2YXIgaT0wOyBpPHByb2MuYXJyYXlBcmdzLmxlbmd0aDsgKytpKSB7XG4gICAgY29kZS5wdXNoKFwicFwiK2krXCJ8PTBcIilcbiAgfVxuICBcbiAgLy9JbmxpbmUgcHJlbHVkZVxuICBpZihwcm9jLnByZS5ib2R5Lmxlbmd0aCA+IDMpIHtcbiAgICBjb2RlLnB1c2gocHJvY2Vzc0Jsb2NrKHByb2MucHJlLCBwcm9jLCBkdHlwZXMpKVxuICB9XG5cbiAgLy9Qcm9jZXNzIGJvZHlcbiAgdmFyIGJvZHkgPSBwcm9jZXNzQmxvY2socHJvYy5ib2R5LCBwcm9jLCBkdHlwZXMpXG4gIHZhciBtYXRjaGVkID0gY291bnRNYXRjaGVzKGxvb3BPcmRlcnMpXG4gIGlmKG1hdGNoZWQgPCBkaW1lbnNpb24pIHtcbiAgICBjb2RlLnB1c2gob3V0ZXJGaWxsKG1hdGNoZWQsIGxvb3BPcmRlcnNbMF0sIHByb2MsIGJvZHkpKSAvLyBUT0RPOiBSYXRoZXIgdGhhbiBwYXNzaW5nIGxvb3BPcmRlcnNbMF0sIGl0IG1pZ2h0IGJlIGludGVyZXN0aW5nIHRvIGxvb2sgYXQgcGFzc2luZyBhbiBvcmRlciB0aGF0IHJlcHJlc2VudHMgdGhlIG1ham9yaXR5IG9mIHRoZSBhcmd1bWVudHMgZm9yIGV4YW1wbGUuXG4gIH0gZWxzZSB7XG4gICAgY29kZS5wdXNoKGlubmVyRmlsbChsb29wT3JkZXJzWzBdLCBwcm9jLCBib2R5KSlcbiAgfVxuXG4gIC8vSW5saW5lIGVwaWxvZ1xuICBpZihwcm9jLnBvc3QuYm9keS5sZW5ndGggPiAzKSB7XG4gICAgY29kZS5wdXNoKHByb2Nlc3NCbG9jayhwcm9jLnBvc3QsIHByb2MsIGR0eXBlcykpXG4gIH1cbiAgXG4gIGlmKHByb2MuZGVidWcpIHtcbiAgICBjb25zb2xlLmxvZyhcIi0tLS0tR2VuZXJhdGVkIGN3aXNlIHJvdXRpbmUgZm9yIFwiLCB0eXBlc2lnLCBcIjpcXG5cIiArIGNvZGUuam9pbihcIlxcblwiKSArIFwiXFxuLS0tLS0tLS0tLVwiKVxuICB9XG4gIFxuICB2YXIgbG9vcE5hbWUgPSBbKHByb2MuZnVuY05hbWV8fFwidW5uYW1lZFwiKSwgXCJfY3dpc2VfbG9vcF9cIiwgb3JkZXJzWzBdLmpvaW4oXCJzXCIpLFwibVwiLG1hdGNoZWQsdHlwZVN1bW1hcnkoZHR5cGVzKV0uam9pbihcIlwiKVxuICB2YXIgZiA9IG5ldyBGdW5jdGlvbihbXCJmdW5jdGlvbiBcIixsb29wTmFtZSxcIihcIiwgYXJnbGlzdC5qb2luKFwiLFwiKSxcIil7XCIsIGNvZGUuam9pbihcIlxcblwiKSxcIn0gcmV0dXJuIFwiLCBsb29wTmFtZV0uam9pbihcIlwiKSlcbiAgcmV0dXJuIGYoKVxufVxubW9kdWxlLmV4cG9ydHMgPSBnZW5lcmF0ZUNXaXNlT3BcbiIsIlwidXNlIHN0cmljdFwiXG5cbi8vIFRoZSBmdW5jdGlvbiBiZWxvdyBpcyBjYWxsZWQgd2hlbiBjb25zdHJ1Y3RpbmcgYSBjd2lzZSBmdW5jdGlvbiBvYmplY3QsIGFuZCBkb2VzIHRoZSBmb2xsb3dpbmc6XG4vLyBBIGZ1bmN0aW9uIG9iamVjdCBpcyBjb25zdHJ1Y3RlZCB3aGljaCBhY2NlcHRzIGFzIGFyZ3VtZW50IGEgY29tcGlsYXRpb24gZnVuY3Rpb24gYW5kIHJldHVybnMgYW5vdGhlciBmdW5jdGlvbi5cbi8vIEl0IGlzIHRoaXMgb3RoZXIgZnVuY3Rpb24gdGhhdCBpcyBldmVudHVhbGx5IHJldHVybmVkIGJ5IGNyZWF0ZVRodW5rLCBhbmQgdGhpcyBmdW5jdGlvbiBpcyB0aGUgb25lIHRoYXQgYWN0dWFsbHlcbi8vIGNoZWNrcyB3aGV0aGVyIGEgY2VydGFpbiBwYXR0ZXJuIG9mIGFyZ3VtZW50cyBoYXMgYWxyZWFkeSBiZWVuIHVzZWQgYmVmb3JlIGFuZCBjb21waWxlcyBuZXcgbG9vcHMgYXMgbmVlZGVkLlxuLy8gVGhlIGNvbXBpbGF0aW9uIHBhc3NlZCB0byB0aGUgZmlyc3QgZnVuY3Rpb24gb2JqZWN0IGlzIHVzZWQgZm9yIGNvbXBpbGluZyBuZXcgZnVuY3Rpb25zLlxuLy8gT25jZSB0aGlzIGZ1bmN0aW9uIG9iamVjdCBpcyBjcmVhdGVkLCBpdCBpcyBjYWxsZWQgd2l0aCBjb21waWxlIGFzIGFyZ3VtZW50LCB3aGVyZSB0aGUgZmlyc3QgYXJndW1lbnQgb2YgY29tcGlsZVxuLy8gaXMgYm91bmQgdG8gXCJwcm9jXCIgKGVzc2VudGlhbGx5IGNvbnRhaW5pbmcgYSBwcmVwcm9jZXNzZWQgdmVyc2lvbiBvZiB0aGUgdXNlciBhcmd1bWVudHMgdG8gY3dpc2UpLlxuLy8gU28gY3JlYXRlVGh1bmsgcm91Z2hseSB3b3JrcyBsaWtlIHRoaXM6XG4vLyBmdW5jdGlvbiBjcmVhdGVUaHVuayhwcm9jKSB7XG4vLyAgIHZhciB0aHVuayA9IGZ1bmN0aW9uKGNvbXBpbGVCb3VuZCkge1xuLy8gICAgIHZhciBDQUNIRUQgPSB7fVxuLy8gICAgIHJldHVybiBmdW5jdGlvbihhcnJheXMgYW5kIHNjYWxhcnMpIHtcbi8vICAgICAgIGlmIChkdHlwZSBhbmQgb3JkZXIgb2YgYXJyYXlzIGluIENBQ0hFRCkge1xuLy8gICAgICAgICB2YXIgZnVuYyA9IENBQ0hFRFtkdHlwZSBhbmQgb3JkZXIgb2YgYXJyYXlzXVxuLy8gICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgdmFyIGZ1bmMgPSBDQUNIRURbZHR5cGUgYW5kIG9yZGVyIG9mIGFycmF5c10gPSBjb21waWxlQm91bmQoZHR5cGUgYW5kIG9yZGVyIG9mIGFycmF5cylcbi8vICAgICAgIH1cbi8vICAgICAgIHJldHVybiBmdW5jKGFycmF5cyBhbmQgc2NhbGFycylcbi8vICAgICB9XG4vLyAgIH1cbi8vICAgcmV0dXJuIHRodW5rKGNvbXBpbGUuYmluZDEocHJvYykpXG4vLyB9XG5cbnZhciBjb21waWxlID0gcmVxdWlyZShcIi4vY29tcGlsZS5qc1wiKVxuXG5mdW5jdGlvbiBjcmVhdGVUaHVuayhwcm9jKSB7XG4gIHZhciBjb2RlID0gW1wiJ3VzZSBzdHJpY3QnXCIsIFwidmFyIENBQ0hFRD17fVwiXVxuICB2YXIgdmFycyA9IFtdXG4gIHZhciB0aHVua05hbWUgPSBwcm9jLmZ1bmNOYW1lICsgXCJfY3dpc2VfdGh1bmtcIlxuICBcbiAgLy9CdWlsZCB0aHVua1xuICBjb2RlLnB1c2goW1wicmV0dXJuIGZ1bmN0aW9uIFwiLCB0aHVua05hbWUsIFwiKFwiLCBwcm9jLnNoaW1BcmdzLmpvaW4oXCIsXCIpLCBcIil7XCJdLmpvaW4oXCJcIikpXG4gIHZhciB0eXBlc2lnID0gW11cbiAgdmFyIHN0cmluZ190eXBlc2lnID0gW11cbiAgdmFyIHByb2NfYXJncyA9IFtbXCJhcnJheVwiLHByb2MuYXJyYXlBcmdzWzBdLFwiLnNoYXBlLnNsaWNlKFwiLCAvLyBTbGljZSBzaGFwZSBzbyB0aGF0IHdlIG9ubHkgcmV0YWluIHRoZSBzaGFwZSBvdmVyIHdoaWNoIHdlIGl0ZXJhdGUgKHdoaWNoIGdldHMgcGFzc2VkIHRvIHRoZSBjd2lzZSBvcGVyYXRvciBhcyBTUykuXG4gICAgICAgICAgICAgICAgICAgIE1hdGgubWF4KDAscHJvYy5hcnJheUJsb2NrSW5kaWNlc1swXSkscHJvYy5hcnJheUJsb2NrSW5kaWNlc1swXTwwPyhcIixcIitwcm9jLmFycmF5QmxvY2tJbmRpY2VzWzBdK1wiKVwiKTpcIilcIl0uam9pbihcIlwiKV1cbiAgdmFyIHNoYXBlTGVuZ3RoQ29uZGl0aW9ucyA9IFtdLCBzaGFwZUNvbmRpdGlvbnMgPSBbXVxuICAvLyBQcm9jZXNzIGFycmF5IGFyZ3VtZW50c1xuICBmb3IodmFyIGk9MDsgaTxwcm9jLmFycmF5QXJncy5sZW5ndGg7ICsraSkge1xuICAgIHZhciBqID0gcHJvYy5hcnJheUFyZ3NbaV1cbiAgICB2YXJzLnB1c2goW1widFwiLCBqLCBcIj1hcnJheVwiLCBqLCBcIi5kdHlwZSxcIixcbiAgICAgICAgICAgICAgIFwiclwiLCBqLCBcIj1hcnJheVwiLCBqLCBcIi5vcmRlclwiXS5qb2luKFwiXCIpKVxuICAgIHR5cGVzaWcucHVzaChcInRcIiArIGopXG4gICAgdHlwZXNpZy5wdXNoKFwiclwiICsgailcbiAgICBzdHJpbmdfdHlwZXNpZy5wdXNoKFwidFwiK2opXG4gICAgc3RyaW5nX3R5cGVzaWcucHVzaChcInJcIitqK1wiLmpvaW4oKVwiKVxuICAgIHByb2NfYXJncy5wdXNoKFwiYXJyYXlcIiArIGogKyBcIi5kYXRhXCIpXG4gICAgcHJvY19hcmdzLnB1c2goXCJhcnJheVwiICsgaiArIFwiLnN0cmlkZVwiKVxuICAgIHByb2NfYXJncy5wdXNoKFwiYXJyYXlcIiArIGogKyBcIi5vZmZzZXR8MFwiKVxuICAgIGlmIChpPjApIHsgLy8gR2F0aGVyIGNvbmRpdGlvbnMgdG8gY2hlY2sgZm9yIHNoYXBlIGVxdWFsaXR5IChpZ25vcmluZyBibG9jayBpbmRpY2VzKVxuICAgICAgc2hhcGVMZW5ndGhDb25kaXRpb25zLnB1c2goXCJhcnJheVwiICsgcHJvYy5hcnJheUFyZ3NbMF0gKyBcIi5zaGFwZS5sZW5ndGg9PT1hcnJheVwiICsgaiArIFwiLnNoYXBlLmxlbmd0aCtcIiArIChNYXRoLmFicyhwcm9jLmFycmF5QmxvY2tJbmRpY2VzWzBdKS1NYXRoLmFicyhwcm9jLmFycmF5QmxvY2tJbmRpY2VzW2ldKSkpXG4gICAgICBzaGFwZUNvbmRpdGlvbnMucHVzaChcImFycmF5XCIgKyBwcm9jLmFycmF5QXJnc1swXSArIFwiLnNoYXBlW3NoYXBlSW5kZXgrXCIgKyBNYXRoLm1heCgwLHByb2MuYXJyYXlCbG9ja0luZGljZXNbMF0pICsgXCJdPT09YXJyYXlcIiArIGogKyBcIi5zaGFwZVtzaGFwZUluZGV4K1wiICsgTWF0aC5tYXgoMCxwcm9jLmFycmF5QmxvY2tJbmRpY2VzW2ldKSArIFwiXVwiKVxuICAgIH1cbiAgfVxuICAvLyBDaGVjayBmb3Igc2hhcGUgZXF1YWxpdHlcbiAgaWYgKHByb2MuYXJyYXlBcmdzLmxlbmd0aCA+IDEpIHtcbiAgICBjb2RlLnB1c2goXCJpZiAoIShcIiArIHNoYXBlTGVuZ3RoQ29uZGl0aW9ucy5qb2luKFwiICYmIFwiKSArIFwiKSkgdGhyb3cgbmV3IEVycm9yKCdjd2lzZTogQXJyYXlzIGRvIG5vdCBhbGwgaGF2ZSB0aGUgc2FtZSBkaW1lbnNpb25hbGl0eSEnKVwiKVxuICAgIGNvZGUucHVzaChcImZvcih2YXIgc2hhcGVJbmRleD1hcnJheVwiICsgcHJvYy5hcnJheUFyZ3NbMF0gKyBcIi5zaGFwZS5sZW5ndGgtXCIgKyBNYXRoLmFicyhwcm9jLmFycmF5QmxvY2tJbmRpY2VzWzBdKSArIFwiOyBzaGFwZUluZGV4LS0+MDspIHtcIilcbiAgICBjb2RlLnB1c2goXCJpZiAoIShcIiArIHNoYXBlQ29uZGl0aW9ucy5qb2luKFwiICYmIFwiKSArIFwiKSkgdGhyb3cgbmV3IEVycm9yKCdjd2lzZTogQXJyYXlzIGRvIG5vdCBhbGwgaGF2ZSB0aGUgc2FtZSBzaGFwZSEnKVwiKVxuICAgIGNvZGUucHVzaChcIn1cIilcbiAgfVxuICAvLyBQcm9jZXNzIHNjYWxhciBhcmd1bWVudHNcbiAgZm9yKHZhciBpPTA7IGk8cHJvYy5zY2FsYXJBcmdzLmxlbmd0aDsgKytpKSB7XG4gICAgcHJvY19hcmdzLnB1c2goXCJzY2FsYXJcIiArIHByb2Muc2NhbGFyQXJnc1tpXSlcbiAgfVxuICAvLyBDaGVjayBmb3IgY2FjaGVkIGZ1bmN0aW9uIChhbmQgaWYgbm90IHByZXNlbnQsIGdlbmVyYXRlIGl0KVxuICB2YXJzLnB1c2goW1widHlwZT1bXCIsIHN0cmluZ190eXBlc2lnLmpvaW4oXCIsXCIpLCBcIl0uam9pbigpXCJdLmpvaW4oXCJcIikpXG4gIHZhcnMucHVzaChcInByb2M9Q0FDSEVEW3R5cGVdXCIpXG4gIGNvZGUucHVzaChcInZhciBcIiArIHZhcnMuam9pbihcIixcIikpXG4gIFxuICBjb2RlLnB1c2goW1wiaWYoIXByb2Mpe1wiLFxuICAgICAgICAgICAgIFwiQ0FDSEVEW3R5cGVdPXByb2M9Y29tcGlsZShbXCIsIHR5cGVzaWcuam9pbihcIixcIiksIFwiXSl9XCIsXG4gICAgICAgICAgICAgXCJyZXR1cm4gcHJvYyhcIiwgcHJvY19hcmdzLmpvaW4oXCIsXCIpLCBcIil9XCJdLmpvaW4oXCJcIikpXG5cbiAgaWYocHJvYy5kZWJ1Zykge1xuICAgIGNvbnNvbGUubG9nKFwiLS0tLS1HZW5lcmF0ZWQgdGh1bms6XFxuXCIgKyBjb2RlLmpvaW4oXCJcXG5cIikgKyBcIlxcbi0tLS0tLS0tLS1cIilcbiAgfVxuICBcbiAgLy9Db21waWxlIHRodW5rXG4gIHZhciB0aHVuayA9IG5ldyBGdW5jdGlvbihcImNvbXBpbGVcIiwgY29kZS5qb2luKFwiXFxuXCIpKVxuICByZXR1cm4gdGh1bmsoY29tcGlsZS5iaW5kKHVuZGVmaW5lZCwgcHJvYykpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlVGh1bmtcbiIsIlwidXNlIHN0cmljdFwiXG5cbmZ1bmN0aW9uIGR1cGVfYXJyYXkoY291bnQsIHZhbHVlLCBpKSB7XG4gIHZhciBjID0gY291bnRbaV18MFxuICBpZihjIDw9IDApIHtcbiAgICByZXR1cm4gW11cbiAgfVxuICB2YXIgcmVzdWx0ID0gbmV3IEFycmF5KGMpLCBqXG4gIGlmKGkgPT09IGNvdW50Lmxlbmd0aC0xKSB7XG4gICAgZm9yKGo9MDsgajxjOyArK2opIHtcbiAgICAgIHJlc3VsdFtqXSA9IHZhbHVlXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvcihqPTA7IGo8YzsgKytqKSB7XG4gICAgICByZXN1bHRbal0gPSBkdXBlX2FycmF5KGNvdW50LCB2YWx1ZSwgaSsxKVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmZ1bmN0aW9uIGR1cGVfbnVtYmVyKGNvdW50LCB2YWx1ZSkge1xuICB2YXIgcmVzdWx0LCBpXG4gIHJlc3VsdCA9IG5ldyBBcnJheShjb3VudClcbiAgZm9yKGk9MDsgaTxjb3VudDsgKytpKSB7XG4gICAgcmVzdWx0W2ldID0gdmFsdWVcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmZ1bmN0aW9uIGR1cGUoY291bnQsIHZhbHVlKSB7XG4gIGlmKHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhbHVlID0gMFxuICB9XG4gIHN3aXRjaCh0eXBlb2YgY291bnQpIHtcbiAgICBjYXNlIFwibnVtYmVyXCI6XG4gICAgICBpZihjb3VudCA+IDApIHtcbiAgICAgICAgcmV0dXJuIGR1cGVfbnVtYmVyKGNvdW50fDAsIHZhbHVlKVxuICAgICAgfVxuICAgIGJyZWFrXG4gICAgY2FzZSBcIm9iamVjdFwiOlxuICAgICAgaWYodHlwZW9mIChjb3VudC5sZW5ndGgpID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHJldHVybiBkdXBlX2FycmF5KGNvdW50LCB2YWx1ZSwgMClcbiAgICAgIH1cbiAgICBicmVha1xuICB9XG4gIHJldHVybiBbXVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGR1cGUiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgMDogJ05PTkUnLFxuICAxOiAnT05FJyxcbiAgMjogJ0xJTkVfTE9PUCcsXG4gIDM6ICdMSU5FX1NUUklQJyxcbiAgNDogJ1RSSUFOR0xFUycsXG4gIDU6ICdUUklBTkdMRV9TVFJJUCcsXG4gIDY6ICdUUklBTkdMRV9GQU4nLFxuICAyNTY6ICdERVBUSF9CVUZGRVJfQklUJyxcbiAgNTEyOiAnTkVWRVInLFxuICA1MTM6ICdMRVNTJyxcbiAgNTE0OiAnRVFVQUwnLFxuICA1MTU6ICdMRVFVQUwnLFxuICA1MTY6ICdHUkVBVEVSJyxcbiAgNTE3OiAnTk9URVFVQUwnLFxuICA1MTg6ICdHRVFVQUwnLFxuICA1MTk6ICdBTFdBWVMnLFxuICA3Njg6ICdTUkNfQ09MT1InLFxuICA3Njk6ICdPTkVfTUlOVVNfU1JDX0NPTE9SJyxcbiAgNzcwOiAnU1JDX0FMUEhBJyxcbiAgNzcxOiAnT05FX01JTlVTX1NSQ19BTFBIQScsXG4gIDc3MjogJ0RTVF9BTFBIQScsXG4gIDc3MzogJ09ORV9NSU5VU19EU1RfQUxQSEEnLFxuICA3NzQ6ICdEU1RfQ09MT1InLFxuICA3NzU6ICdPTkVfTUlOVVNfRFNUX0NPTE9SJyxcbiAgNzc2OiAnU1JDX0FMUEhBX1NBVFVSQVRFJyxcbiAgMTAyNDogJ1NURU5DSUxfQlVGRkVSX0JJVCcsXG4gIDEwMjg6ICdGUk9OVCcsXG4gIDEwMjk6ICdCQUNLJyxcbiAgMTAzMjogJ0ZST05UX0FORF9CQUNLJyxcbiAgMTI4MDogJ0lOVkFMSURfRU5VTScsXG4gIDEyODE6ICdJTlZBTElEX1ZBTFVFJyxcbiAgMTI4MjogJ0lOVkFMSURfT1BFUkFUSU9OJyxcbiAgMTI4NTogJ09VVF9PRl9NRU1PUlknLFxuICAxMjg2OiAnSU5WQUxJRF9GUkFNRUJVRkZFUl9PUEVSQVRJT04nLFxuICAyMzA0OiAnQ1cnLFxuICAyMzA1OiAnQ0NXJyxcbiAgMjg0OTogJ0xJTkVfV0lEVEgnLFxuICAyODg0OiAnQ1VMTF9GQUNFJyxcbiAgMjg4NTogJ0NVTExfRkFDRV9NT0RFJyxcbiAgMjg4NjogJ0ZST05UX0ZBQ0UnLFxuICAyOTI4OiAnREVQVEhfUkFOR0UnLFxuICAyOTI5OiAnREVQVEhfVEVTVCcsXG4gIDI5MzA6ICdERVBUSF9XUklURU1BU0snLFxuICAyOTMxOiAnREVQVEhfQ0xFQVJfVkFMVUUnLFxuICAyOTMyOiAnREVQVEhfRlVOQycsXG4gIDI5NjA6ICdTVEVOQ0lMX1RFU1QnLFxuICAyOTYxOiAnU1RFTkNJTF9DTEVBUl9WQUxVRScsXG4gIDI5NjI6ICdTVEVOQ0lMX0ZVTkMnLFxuICAyOTYzOiAnU1RFTkNJTF9WQUxVRV9NQVNLJyxcbiAgMjk2NDogJ1NURU5DSUxfRkFJTCcsXG4gIDI5NjU6ICdTVEVOQ0lMX1BBU1NfREVQVEhfRkFJTCcsXG4gIDI5NjY6ICdTVEVOQ0lMX1BBU1NfREVQVEhfUEFTUycsXG4gIDI5Njc6ICdTVEVOQ0lMX1JFRicsXG4gIDI5Njg6ICdTVEVOQ0lMX1dSSVRFTUFTSycsXG4gIDI5Nzg6ICdWSUVXUE9SVCcsXG4gIDMwMjQ6ICdESVRIRVInLFxuICAzMDQyOiAnQkxFTkQnLFxuICAzMDg4OiAnU0NJU1NPUl9CT1gnLFxuICAzMDg5OiAnU0NJU1NPUl9URVNUJyxcbiAgMzEwNjogJ0NPTE9SX0NMRUFSX1ZBTFVFJyxcbiAgMzEwNzogJ0NPTE9SX1dSSVRFTUFTSycsXG4gIDMzMTc6ICdVTlBBQ0tfQUxJR05NRU5UJyxcbiAgMzMzMzogJ1BBQ0tfQUxJR05NRU5UJyxcbiAgMzM3OTogJ01BWF9URVhUVVJFX1NJWkUnLFxuICAzMzg2OiAnTUFYX1ZJRVdQT1JUX0RJTVMnLFxuICAzNDA4OiAnU1VCUElYRUxfQklUUycsXG4gIDM0MTA6ICdSRURfQklUUycsXG4gIDM0MTE6ICdHUkVFTl9CSVRTJyxcbiAgMzQxMjogJ0JMVUVfQklUUycsXG4gIDM0MTM6ICdBTFBIQV9CSVRTJyxcbiAgMzQxNDogJ0RFUFRIX0JJVFMnLFxuICAzNDE1OiAnU1RFTkNJTF9CSVRTJyxcbiAgMzU1MzogJ1RFWFRVUkVfMkQnLFxuICA0MzUyOiAnRE9OVF9DQVJFJyxcbiAgNDM1MzogJ0ZBU1RFU1QnLFxuICA0MzU0OiAnTklDRVNUJyxcbiAgNTEyMDogJ0JZVEUnLFxuICA1MTIxOiAnVU5TSUdORURfQllURScsXG4gIDUxMjI6ICdTSE9SVCcsXG4gIDUxMjM6ICdVTlNJR05FRF9TSE9SVCcsXG4gIDUxMjQ6ICdJTlQnLFxuICA1MTI1OiAnVU5TSUdORURfSU5UJyxcbiAgNTEyNjogJ0ZMT0FUJyxcbiAgNTM4NjogJ0lOVkVSVCcsXG4gIDU4OTA6ICdURVhUVVJFJyxcbiAgNjQwMTogJ1NURU5DSUxfSU5ERVgnLFxuICA2NDAyOiAnREVQVEhfQ09NUE9ORU5UJyxcbiAgNjQwNjogJ0FMUEhBJyxcbiAgNjQwNzogJ1JHQicsXG4gIDY0MDg6ICdSR0JBJyxcbiAgNjQwOTogJ0xVTUlOQU5DRScsXG4gIDY0MTA6ICdMVU1JTkFOQ0VfQUxQSEEnLFxuICA3NjgwOiAnS0VFUCcsXG4gIDc2ODE6ICdSRVBMQUNFJyxcbiAgNzY4MjogJ0lOQ1InLFxuICA3NjgzOiAnREVDUicsXG4gIDc5MzY6ICdWRU5ET1InLFxuICA3OTM3OiAnUkVOREVSRVInLFxuICA3OTM4OiAnVkVSU0lPTicsXG4gIDk3Mjg6ICdORUFSRVNUJyxcbiAgOTcyOTogJ0xJTkVBUicsXG4gIDk5ODQ6ICdORUFSRVNUX01JUE1BUF9ORUFSRVNUJyxcbiAgOTk4NTogJ0xJTkVBUl9NSVBNQVBfTkVBUkVTVCcsXG4gIDk5ODY6ICdORUFSRVNUX01JUE1BUF9MSU5FQVInLFxuICA5OTg3OiAnTElORUFSX01JUE1BUF9MSU5FQVInLFxuICAxMDI0MDogJ1RFWFRVUkVfTUFHX0ZJTFRFUicsXG4gIDEwMjQxOiAnVEVYVFVSRV9NSU5fRklMVEVSJyxcbiAgMTAyNDI6ICdURVhUVVJFX1dSQVBfUycsXG4gIDEwMjQzOiAnVEVYVFVSRV9XUkFQX1QnLFxuICAxMDQ5NzogJ1JFUEVBVCcsXG4gIDEwNzUyOiAnUE9MWUdPTl9PRkZTRVRfVU5JVFMnLFxuICAxNjM4NDogJ0NPTE9SX0JVRkZFUl9CSVQnLFxuICAzMjc2OTogJ0NPTlNUQU5UX0NPTE9SJyxcbiAgMzI3NzA6ICdPTkVfTUlOVVNfQ09OU1RBTlRfQ09MT1InLFxuICAzMjc3MTogJ0NPTlNUQU5UX0FMUEhBJyxcbiAgMzI3NzI6ICdPTkVfTUlOVVNfQ09OU1RBTlRfQUxQSEEnLFxuICAzMjc3MzogJ0JMRU5EX0NPTE9SJyxcbiAgMzI3NzQ6ICdGVU5DX0FERCcsXG4gIDMyNzc3OiAnQkxFTkRfRVFVQVRJT05fUkdCJyxcbiAgMzI3Nzg6ICdGVU5DX1NVQlRSQUNUJyxcbiAgMzI3Nzk6ICdGVU5DX1JFVkVSU0VfU1VCVFJBQ1QnLFxuICAzMjgxOTogJ1VOU0lHTkVEX1NIT1JUXzRfNF80XzQnLFxuICAzMjgyMDogJ1VOU0lHTkVEX1NIT1JUXzVfNV81XzEnLFxuICAzMjgyMzogJ1BPTFlHT05fT0ZGU0VUX0ZJTEwnLFxuICAzMjgyNDogJ1BPTFlHT05fT0ZGU0VUX0ZBQ1RPUicsXG4gIDMyODU0OiAnUkdCQTQnLFxuICAzMjg1NTogJ1JHQjVfQTEnLFxuICAzMjg3MzogJ1RFWFRVUkVfQklORElOR18yRCcsXG4gIDMyOTI2OiAnU0FNUExFX0FMUEhBX1RPX0NPVkVSQUdFJyxcbiAgMzI5Mjg6ICdTQU1QTEVfQ09WRVJBR0UnLFxuICAzMjkzNjogJ1NBTVBMRV9CVUZGRVJTJyxcbiAgMzI5Mzc6ICdTQU1QTEVTJyxcbiAgMzI5Mzg6ICdTQU1QTEVfQ09WRVJBR0VfVkFMVUUnLFxuICAzMjkzOTogJ1NBTVBMRV9DT1ZFUkFHRV9JTlZFUlQnLFxuICAzMjk2ODogJ0JMRU5EX0RTVF9SR0InLFxuICAzMjk2OTogJ0JMRU5EX1NSQ19SR0InLFxuICAzMjk3MDogJ0JMRU5EX0RTVF9BTFBIQScsXG4gIDMyOTcxOiAnQkxFTkRfU1JDX0FMUEhBJyxcbiAgMzMwNzE6ICdDTEFNUF9UT19FREdFJyxcbiAgMzMxNzA6ICdHRU5FUkFURV9NSVBNQVBfSElOVCcsXG4gIDMzMTg5OiAnREVQVEhfQ09NUE9ORU5UMTYnLFxuICAzMzMwNjogJ0RFUFRIX1NURU5DSUxfQVRUQUNITUVOVCcsXG4gIDMzNjM1OiAnVU5TSUdORURfU0hPUlRfNV82XzUnLFxuICAzMzY0ODogJ01JUlJPUkVEX1JFUEVBVCcsXG4gIDMzOTAxOiAnQUxJQVNFRF9QT0lOVF9TSVpFX1JBTkdFJyxcbiAgMzM5MDI6ICdBTElBU0VEX0xJTkVfV0lEVEhfUkFOR0UnLFxuICAzMzk4NDogJ1RFWFRVUkUwJyxcbiAgMzM5ODU6ICdURVhUVVJFMScsXG4gIDMzOTg2OiAnVEVYVFVSRTInLFxuICAzMzk4NzogJ1RFWFRVUkUzJyxcbiAgMzM5ODg6ICdURVhUVVJFNCcsXG4gIDMzOTg5OiAnVEVYVFVSRTUnLFxuICAzMzk5MDogJ1RFWFRVUkU2JyxcbiAgMzM5OTE6ICdURVhUVVJFNycsXG4gIDMzOTkyOiAnVEVYVFVSRTgnLFxuICAzMzk5MzogJ1RFWFRVUkU5JyxcbiAgMzM5OTQ6ICdURVhUVVJFMTAnLFxuICAzMzk5NTogJ1RFWFRVUkUxMScsXG4gIDMzOTk2OiAnVEVYVFVSRTEyJyxcbiAgMzM5OTc6ICdURVhUVVJFMTMnLFxuICAzMzk5ODogJ1RFWFRVUkUxNCcsXG4gIDMzOTk5OiAnVEVYVFVSRTE1JyxcbiAgMzQwMDA6ICdURVhUVVJFMTYnLFxuICAzNDAwMTogJ1RFWFRVUkUxNycsXG4gIDM0MDAyOiAnVEVYVFVSRTE4JyxcbiAgMzQwMDM6ICdURVhUVVJFMTknLFxuICAzNDAwNDogJ1RFWFRVUkUyMCcsXG4gIDM0MDA1OiAnVEVYVFVSRTIxJyxcbiAgMzQwMDY6ICdURVhUVVJFMjInLFxuICAzNDAwNzogJ1RFWFRVUkUyMycsXG4gIDM0MDA4OiAnVEVYVFVSRTI0JyxcbiAgMzQwMDk6ICdURVhUVVJFMjUnLFxuICAzNDAxMDogJ1RFWFRVUkUyNicsXG4gIDM0MDExOiAnVEVYVFVSRTI3JyxcbiAgMzQwMTI6ICdURVhUVVJFMjgnLFxuICAzNDAxMzogJ1RFWFRVUkUyOScsXG4gIDM0MDE0OiAnVEVYVFVSRTMwJyxcbiAgMzQwMTU6ICdURVhUVVJFMzEnLFxuICAzNDAxNjogJ0FDVElWRV9URVhUVVJFJyxcbiAgMzQwMjQ6ICdNQVhfUkVOREVSQlVGRkVSX1NJWkUnLFxuICAzNDA0MTogJ0RFUFRIX1NURU5DSUwnLFxuICAzNDA1NTogJ0lOQ1JfV1JBUCcsXG4gIDM0MDU2OiAnREVDUl9XUkFQJyxcbiAgMzQwNjc6ICdURVhUVVJFX0NVQkVfTUFQJyxcbiAgMzQwNjg6ICdURVhUVVJFX0JJTkRJTkdfQ1VCRV9NQVAnLFxuICAzNDA2OTogJ1RFWFRVUkVfQ1VCRV9NQVBfUE9TSVRJVkVfWCcsXG4gIDM0MDcwOiAnVEVYVFVSRV9DVUJFX01BUF9ORUdBVElWRV9YJyxcbiAgMzQwNzE6ICdURVhUVVJFX0NVQkVfTUFQX1BPU0lUSVZFX1knLFxuICAzNDA3MjogJ1RFWFRVUkVfQ1VCRV9NQVBfTkVHQVRJVkVfWScsXG4gIDM0MDczOiAnVEVYVFVSRV9DVUJFX01BUF9QT1NJVElWRV9aJyxcbiAgMzQwNzQ6ICdURVhUVVJFX0NVQkVfTUFQX05FR0FUSVZFX1onLFxuICAzNDA3NjogJ01BWF9DVUJFX01BUF9URVhUVVJFX1NJWkUnLFxuICAzNDMzODogJ1ZFUlRFWF9BVFRSSUJfQVJSQVlfRU5BQkxFRCcsXG4gIDM0MzM5OiAnVkVSVEVYX0FUVFJJQl9BUlJBWV9TSVpFJyxcbiAgMzQzNDA6ICdWRVJURVhfQVRUUklCX0FSUkFZX1NUUklERScsXG4gIDM0MzQxOiAnVkVSVEVYX0FUVFJJQl9BUlJBWV9UWVBFJyxcbiAgMzQzNDI6ICdDVVJSRU5UX1ZFUlRFWF9BVFRSSUInLFxuICAzNDM3MzogJ1ZFUlRFWF9BVFRSSUJfQVJSQVlfUE9JTlRFUicsXG4gIDM0NDY2OiAnTlVNX0NPTVBSRVNTRURfVEVYVFVSRV9GT1JNQVRTJyxcbiAgMzQ0Njc6ICdDT01QUkVTU0VEX1RFWFRVUkVfRk9STUFUUycsXG4gIDM0NjYwOiAnQlVGRkVSX1NJWkUnLFxuICAzNDY2MTogJ0JVRkZFUl9VU0FHRScsXG4gIDM0ODE2OiAnU1RFTkNJTF9CQUNLX0ZVTkMnLFxuICAzNDgxNzogJ1NURU5DSUxfQkFDS19GQUlMJyxcbiAgMzQ4MTg6ICdTVEVOQ0lMX0JBQ0tfUEFTU19ERVBUSF9GQUlMJyxcbiAgMzQ4MTk6ICdTVEVOQ0lMX0JBQ0tfUEFTU19ERVBUSF9QQVNTJyxcbiAgMzQ4Nzc6ICdCTEVORF9FUVVBVElPTl9BTFBIQScsXG4gIDM0OTIxOiAnTUFYX1ZFUlRFWF9BVFRSSUJTJyxcbiAgMzQ5MjI6ICdWRVJURVhfQVRUUklCX0FSUkFZX05PUk1BTElaRUQnLFxuICAzNDkzMDogJ01BWF9URVhUVVJFX0lNQUdFX1VOSVRTJyxcbiAgMzQ5NjI6ICdBUlJBWV9CVUZGRVInLFxuICAzNDk2MzogJ0VMRU1FTlRfQVJSQVlfQlVGRkVSJyxcbiAgMzQ5NjQ6ICdBUlJBWV9CVUZGRVJfQklORElORycsXG4gIDM0OTY1OiAnRUxFTUVOVF9BUlJBWV9CVUZGRVJfQklORElORycsXG4gIDM0OTc1OiAnVkVSVEVYX0FUVFJJQl9BUlJBWV9CVUZGRVJfQklORElORycsXG4gIDM1MDQwOiAnU1RSRUFNX0RSQVcnLFxuICAzNTA0NDogJ1NUQVRJQ19EUkFXJyxcbiAgMzUwNDg6ICdEWU5BTUlDX0RSQVcnLFxuICAzNTYzMjogJ0ZSQUdNRU5UX1NIQURFUicsXG4gIDM1NjMzOiAnVkVSVEVYX1NIQURFUicsXG4gIDM1NjYwOiAnTUFYX1ZFUlRFWF9URVhUVVJFX0lNQUdFX1VOSVRTJyxcbiAgMzU2NjE6ICdNQVhfQ09NQklORURfVEVYVFVSRV9JTUFHRV9VTklUUycsXG4gIDM1NjYzOiAnU0hBREVSX1RZUEUnLFxuICAzNTY2NDogJ0ZMT0FUX1ZFQzInLFxuICAzNTY2NTogJ0ZMT0FUX1ZFQzMnLFxuICAzNTY2NjogJ0ZMT0FUX1ZFQzQnLFxuICAzNTY2NzogJ0lOVF9WRUMyJyxcbiAgMzU2Njg6ICdJTlRfVkVDMycsXG4gIDM1NjY5OiAnSU5UX1ZFQzQnLFxuICAzNTY3MDogJ0JPT0wnLFxuICAzNTY3MTogJ0JPT0xfVkVDMicsXG4gIDM1NjcyOiAnQk9PTF9WRUMzJyxcbiAgMzU2NzM6ICdCT09MX1ZFQzQnLFxuICAzNTY3NDogJ0ZMT0FUX01BVDInLFxuICAzNTY3NTogJ0ZMT0FUX01BVDMnLFxuICAzNTY3NjogJ0ZMT0FUX01BVDQnLFxuICAzNTY3ODogJ1NBTVBMRVJfMkQnLFxuICAzNTY4MDogJ1NBTVBMRVJfQ1VCRScsXG4gIDM1NzEyOiAnREVMRVRFX1NUQVRVUycsXG4gIDM1NzEzOiAnQ09NUElMRV9TVEFUVVMnLFxuICAzNTcxNDogJ0xJTktfU1RBVFVTJyxcbiAgMzU3MTU6ICdWQUxJREFURV9TVEFUVVMnLFxuICAzNTcxNjogJ0lORk9fTE9HX0xFTkdUSCcsXG4gIDM1NzE3OiAnQVRUQUNIRURfU0hBREVSUycsXG4gIDM1NzE4OiAnQUNUSVZFX1VOSUZPUk1TJyxcbiAgMzU3MTk6ICdBQ1RJVkVfVU5JRk9STV9NQVhfTEVOR1RIJyxcbiAgMzU3MjA6ICdTSEFERVJfU09VUkNFX0xFTkdUSCcsXG4gIDM1NzIxOiAnQUNUSVZFX0FUVFJJQlVURVMnLFxuICAzNTcyMjogJ0FDVElWRV9BVFRSSUJVVEVfTUFYX0xFTkdUSCcsXG4gIDM1NzI0OiAnU0hBRElOR19MQU5HVUFHRV9WRVJTSU9OJyxcbiAgMzU3MjU6ICdDVVJSRU5UX1BST0dSQU0nLFxuICAzNjAwMzogJ1NURU5DSUxfQkFDS19SRUYnLFxuICAzNjAwNDogJ1NURU5DSUxfQkFDS19WQUxVRV9NQVNLJyxcbiAgMzYwMDU6ICdTVEVOQ0lMX0JBQ0tfV1JJVEVNQVNLJyxcbiAgMzYwMDY6ICdGUkFNRUJVRkZFUl9CSU5ESU5HJyxcbiAgMzYwMDc6ICdSRU5ERVJCVUZGRVJfQklORElORycsXG4gIDM2MDQ4OiAnRlJBTUVCVUZGRVJfQVRUQUNITUVOVF9PQkpFQ1RfVFlQRScsXG4gIDM2MDQ5OiAnRlJBTUVCVUZGRVJfQVRUQUNITUVOVF9PQkpFQ1RfTkFNRScsXG4gIDM2MDUwOiAnRlJBTUVCVUZGRVJfQVRUQUNITUVOVF9URVhUVVJFX0xFVkVMJyxcbiAgMzYwNTE6ICdGUkFNRUJVRkZFUl9BVFRBQ0hNRU5UX1RFWFRVUkVfQ1VCRV9NQVBfRkFDRScsXG4gIDM2MDUzOiAnRlJBTUVCVUZGRVJfQ09NUExFVEUnLFxuICAzNjA1NDogJ0ZSQU1FQlVGRkVSX0lOQ09NUExFVEVfQVRUQUNITUVOVCcsXG4gIDM2MDU1OiAnRlJBTUVCVUZGRVJfSU5DT01QTEVURV9NSVNTSU5HX0FUVEFDSE1FTlQnLFxuICAzNjA1NzogJ0ZSQU1FQlVGRkVSX0lOQ09NUExFVEVfRElNRU5TSU9OUycsXG4gIDM2MDYxOiAnRlJBTUVCVUZGRVJfVU5TVVBQT1JURUQnLFxuICAzNjA2NDogJ0NPTE9SX0FUVEFDSE1FTlQwJyxcbiAgMzYwOTY6ICdERVBUSF9BVFRBQ0hNRU5UJyxcbiAgMzYxMjg6ICdTVEVOQ0lMX0FUVEFDSE1FTlQnLFxuICAzNjE2MDogJ0ZSQU1FQlVGRkVSJyxcbiAgMzYxNjE6ICdSRU5ERVJCVUZGRVInLFxuICAzNjE2MjogJ1JFTkRFUkJVRkZFUl9XSURUSCcsXG4gIDM2MTYzOiAnUkVOREVSQlVGRkVSX0hFSUdIVCcsXG4gIDM2MTY0OiAnUkVOREVSQlVGRkVSX0lOVEVSTkFMX0ZPUk1BVCcsXG4gIDM2MTY4OiAnU1RFTkNJTF9JTkRFWDgnLFxuICAzNjE3NjogJ1JFTkRFUkJVRkZFUl9SRURfU0laRScsXG4gIDM2MTc3OiAnUkVOREVSQlVGRkVSX0dSRUVOX1NJWkUnLFxuICAzNjE3ODogJ1JFTkRFUkJVRkZFUl9CTFVFX1NJWkUnLFxuICAzNjE3OTogJ1JFTkRFUkJVRkZFUl9BTFBIQV9TSVpFJyxcbiAgMzYxODA6ICdSRU5ERVJCVUZGRVJfREVQVEhfU0laRScsXG4gIDM2MTgxOiAnUkVOREVSQlVGRkVSX1NURU5DSUxfU0laRScsXG4gIDM2MTk0OiAnUkdCNTY1JyxcbiAgMzYzMzY6ICdMT1dfRkxPQVQnLFxuICAzNjMzNzogJ01FRElVTV9GTE9BVCcsXG4gIDM2MzM4OiAnSElHSF9GTE9BVCcsXG4gIDM2MzM5OiAnTE9XX0lOVCcsXG4gIDM2MzQwOiAnTUVESVVNX0lOVCcsXG4gIDM2MzQxOiAnSElHSF9JTlQnLFxuICAzNjM0NjogJ1NIQURFUl9DT01QSUxFUicsXG4gIDM2MzQ3OiAnTUFYX1ZFUlRFWF9VTklGT1JNX1ZFQ1RPUlMnLFxuICAzNjM0ODogJ01BWF9WQVJZSU5HX1ZFQ1RPUlMnLFxuICAzNjM0OTogJ01BWF9GUkFHTUVOVF9VTklGT1JNX1ZFQ1RPUlMnLFxuICAzNzQ0MDogJ1VOUEFDS19GTElQX1lfV0VCR0wnLFxuICAzNzQ0MTogJ1VOUEFDS19QUkVNVUxUSVBMWV9BTFBIQV9XRUJHTCcsXG4gIDM3NDQyOiAnQ09OVEVYVF9MT1NUX1dFQkdMJyxcbiAgMzc0NDM6ICdVTlBBQ0tfQ09MT1JTUEFDRV9DT05WRVJTSU9OX1dFQkdMJyxcbiAgMzc0NDQ6ICdCUk9XU0VSX0RFRkFVTFRfV0VCR0wnXG59XG4iLCJ2YXIgZ2wxMCA9IHJlcXVpcmUoJy4vMS4wL251bWJlcnMnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGxvb2t1cENvbnN0YW50IChudW1iZXIpIHtcbiAgcmV0dXJuIGdsMTBbbnVtYmVyXVxufVxuIiwiXG52YXIgc3ByaW50ZiA9IHJlcXVpcmUoJ3NwcmludGYtanMnKS5zcHJpbnRmO1xudmFyIGdsQ29uc3RhbnRzID0gcmVxdWlyZSgnZ2wtY29uc3RhbnRzL2xvb2t1cCcpO1xudmFyIHNoYWRlck5hbWUgPSByZXF1aXJlKCdnbHNsLXNoYWRlci1uYW1lJyk7XG52YXIgYWRkTGluZU51bWJlcnMgPSByZXF1aXJlKCdhZGQtbGluZS1udW1iZXJzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZm9ybWF0Q29tcGlsZXJFcnJvcjtcblxuZnVuY3Rpb24gZm9ybWF0Q29tcGlsZXJFcnJvcihlcnJMb2csIHNyYywgdHlwZSkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgdmFyIG5hbWUgPSBzaGFkZXJOYW1lKHNyYykgfHwgJ29mIHVua25vd24gbmFtZSAoc2VlIG5wbSBnbHNsLXNoYWRlci1uYW1lKSc7XG5cbiAgICB2YXIgdHlwZU5hbWUgPSAndW5rbm93biB0eXBlJztcbiAgICBpZiAodHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHR5cGVOYW1lID0gdHlwZSA9PT0gZ2xDb25zdGFudHMuRlJBR01FTlRfU0hBREVSID8gJ2ZyYWdtZW50JyA6ICd2ZXJ0ZXgnXG4gICAgfVxuXG4gICAgdmFyIGxvbmdGb3JtID0gc3ByaW50ZignRXJyb3IgY29tcGlsaW5nICVzIHNoYWRlciAlczpcXG4nLCB0eXBlTmFtZSwgbmFtZSk7XG4gICAgdmFyIHNob3J0Rm9ybSA9IHNwcmludGYoXCIlcyVzXCIsIGxvbmdGb3JtLCBlcnJMb2cpO1xuXG4gICAgdmFyIGVycm9yU3RyaW5ncyA9IGVyckxvZy5zcGxpdCgnXFxuJyk7XG4gICAgdmFyIGVycm9ycyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlcnJvclN0cmluZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGVycm9yU3RyaW5nID0gZXJyb3JTdHJpbmdzW2ldO1xuICAgICAgICBpZiAoZXJyb3JTdHJpbmcgPT09ICcnIHx8IGVycm9yU3RyaW5nID09PSBcIlxcMFwiKSBjb250aW51ZTtcbiAgICAgICAgdmFyIGxpbmVObyA9IHBhcnNlSW50KGVycm9yU3RyaW5nLnNwbGl0KCc6JylbMl0pO1xuICAgICAgICBpZiAoaXNOYU4obGluZU5vKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHNwcmludGYoJ0NvdWxkIG5vdCBwYXJzZSBlcnJvcjogJXMnLCBlcnJvclN0cmluZykpO1xuICAgICAgICB9XG4gICAgICAgIGVycm9yc1tsaW5lTm9dID0gZXJyb3JTdHJpbmc7XG4gICAgfVxuXG4gICAgdmFyIGxpbmVzID0gYWRkTGluZU51bWJlcnMoc3JjKS5zcGxpdCgnXFxuJyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICghZXJyb3JzW2krM10gJiYgIWVycm9yc1tpKzJdICYmICFlcnJvcnNbaSsxXSkgY29udGludWU7XG4gICAgICAgIHZhciBsaW5lID0gbGluZXNbaV07XG4gICAgICAgIGxvbmdGb3JtICs9IGxpbmUgKyAnXFxuJztcbiAgICAgICAgaWYgKGVycm9yc1tpKzFdKSB7XG4gICAgICAgICAgICB2YXIgZSA9IGVycm9yc1tpKzFdO1xuICAgICAgICAgICAgZSA9IGUuc3Vic3RyKGUuc3BsaXQoJzonLCAzKS5qb2luKCc6JykubGVuZ3RoICsgMSkudHJpbSgpO1xuICAgICAgICAgICAgbG9uZ0Zvcm0gKz0gc3ByaW50ZignXl5eICVzXFxuXFxuJywgZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBsb25nOiBsb25nRm9ybS50cmltKCksXG4gICAgICAgIHNob3J0OiBzaG9ydEZvcm0udHJpbSgpXG4gICAgfTtcbn1cblxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBjcmVhdGVVbmlmb3JtV3JhcHBlciAgID0gcmVxdWlyZSgnLi9saWIvY3JlYXRlLXVuaWZvcm1zJylcbnZhciBjcmVhdGVBdHRyaWJ1dGVXcmFwcGVyID0gcmVxdWlyZSgnLi9saWIvY3JlYXRlLWF0dHJpYnV0ZXMnKVxudmFyIG1ha2VSZWZsZWN0ICAgICAgICAgICAgPSByZXF1aXJlKCcuL2xpYi9yZWZsZWN0JylcbnZhciBzaGFkZXJDYWNoZSAgICAgICAgICAgID0gcmVxdWlyZSgnLi9saWIvc2hhZGVyLWNhY2hlJylcbnZhciBydW50aW1lICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9saWIvcnVudGltZS1yZWZsZWN0JylcbnZhciBHTEVycm9yICAgICAgICAgICAgICAgID0gcmVxdWlyZShcIi4vbGliL0dMRXJyb3JcIilcblxuLy9TaGFkZXIgb2JqZWN0XG5mdW5jdGlvbiBTaGFkZXIoZ2wpIHtcbiAgdGhpcy5nbCAgICAgICAgID0gZ2xcbiAgdGhpcy5nbC5sYXN0QXR0cmliQ291bnQgPSAwICAvLyBmaXhtZSB3aGVyZSBlbHNlIHNob3VsZCB3ZSBzdG9yZSBpbmZvLCBzYWZlIGJ1dCBub3QgbmljZSBvbiB0aGUgZ2wgb2JqZWN0XG5cbiAgLy9EZWZhdWx0IGluaXRpYWxpemUgdGhlc2UgdG8gbnVsbFxuICB0aGlzLl92cmVmICAgICAgPVxuICB0aGlzLl9mcmVmICAgICAgPVxuICB0aGlzLl9yZWxpbmsgICAgPVxuICB0aGlzLnZlcnRTaGFkZXIgPVxuICB0aGlzLmZyYWdTaGFkZXIgPVxuICB0aGlzLnByb2dyYW0gICAgPVxuICB0aGlzLmF0dHJpYnV0ZXMgPVxuICB0aGlzLnVuaWZvcm1zICAgPVxuICB0aGlzLnR5cGVzICAgICAgPSBudWxsXG59XG5cbnZhciBwcm90byA9IFNoYWRlci5wcm90b3R5cGVcblxucHJvdG8uYmluZCA9IGZ1bmN0aW9uKCkge1xuICBpZighdGhpcy5wcm9ncmFtKSB7XG4gICAgdGhpcy5fcmVsaW5rKClcbiAgfVxuXG4gIC8vIGVuc3VyaW5nIHRoYXQgd2UgaGF2ZSB0aGUgcmlnaHQgbnVtYmVyIG9mIGVuYWJsZWQgdmVydGV4IGF0dHJpYnV0ZXNcbiAgdmFyIGlcbiAgdmFyIG5ld0F0dHJpYkNvdW50ID0gdGhpcy5nbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHRoaXMucHJvZ3JhbSwgdGhpcy5nbC5BQ1RJVkVfQVRUUklCVVRFUykgLy8gbW9yZSByb2J1c3QgYXBwcm9hY2hcbiAgLy92YXIgbmV3QXR0cmliQ291bnQgPSBPYmplY3Qua2V5cyh0aGlzLmF0dHJpYnV0ZXMpLmxlbmd0aCAvLyBhdm9pZHMgdGhlIHByb2JhYmx5IGltbWF0ZXJpYWwgaW50cm9zcGVjdGlvbiBzbG93ZG93blxuICB2YXIgb2xkQXR0cmliQ291bnQgPSB0aGlzLmdsLmxhc3RBdHRyaWJDb3VudFxuICBpZihuZXdBdHRyaWJDb3VudCA+IG9sZEF0dHJpYkNvdW50KSB7XG4gICAgZm9yKGkgPSBvbGRBdHRyaWJDb3VudDsgaSA8IG5ld0F0dHJpYkNvdW50OyBpKyspIHtcbiAgICAgIHRoaXMuZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoaSlcbiAgICB9XG4gIH0gZWxzZSBpZihvbGRBdHRyaWJDb3VudCA+IG5ld0F0dHJpYkNvdW50KSB7XG4gICAgZm9yKGkgPSBuZXdBdHRyaWJDb3VudDsgaSA8IG9sZEF0dHJpYkNvdW50OyBpKyspIHtcbiAgICAgIHRoaXMuZ2wuZGlzYWJsZVZlcnRleEF0dHJpYkFycmF5KGkpXG4gICAgfVxuICB9XG5cbiAgdGhpcy5nbC5sYXN0QXR0cmliQ291bnQgPSBuZXdBdHRyaWJDb3VudFxuXG4gIHRoaXMuZ2wudXNlUHJvZ3JhbSh0aGlzLnByb2dyYW0pXG59XG5cbnByb3RvLmRpc3Bvc2UgPSBmdW5jdGlvbigpIHtcblxuICAvLyBkaXNhYmxpbmcgdmVydGV4IGF0dHJpYnV0ZXMgc28gbmV3IHNoYWRlciBzdGFydHMgd2l0aCB6ZXJvXG4gIC8vIGFuZCBpdCdzIGFsc28gdXNlZnVsIGlmIGFsbCBzaGFkZXJzIGFyZSBkaXNwb3NlZCBidXQgdGhlXG4gIC8vIGdsIGNvbnRleHQgaXMgcmV1c2VkIGZvciBzdWJzZXF1ZW50IHJlcGxvdHRpbmdcbiAgdmFyIG9sZEF0dHJpYkNvdW50ID0gdGhpcy5nbC5sYXN0QXR0cmliQ291bnRcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBvbGRBdHRyaWJDb3VudDsgaSsrKSB7XG4gICAgdGhpcy5nbC5kaXNhYmxlVmVydGV4QXR0cmliQXJyYXkoaSlcbiAgfVxuICB0aGlzLmdsLmxhc3RBdHRyaWJDb3VudCA9IDBcblxuICBpZih0aGlzLl9mcmVmKSB7XG4gICAgdGhpcy5fZnJlZi5kaXNwb3NlKClcbiAgfVxuICBpZih0aGlzLl92cmVmKSB7XG4gICAgdGhpcy5fdnJlZi5kaXNwb3NlKClcbiAgfVxuICB0aGlzLmF0dHJpYnV0ZXMgPVxuICB0aGlzLnR5cGVzICAgICAgPVxuICB0aGlzLnZlcnRTaGFkZXIgPVxuICB0aGlzLmZyYWdTaGFkZXIgPVxuICB0aGlzLnByb2dyYW0gICAgPVxuICB0aGlzLl9yZWxpbmsgICAgPVxuICB0aGlzLl9mcmVmICAgICAgPVxuICB0aGlzLl92cmVmICAgICAgPSBudWxsXG59XG5cbmZ1bmN0aW9uIGNvbXBhcmVBdHRyaWJ1dGVzKGEsIGIpIHtcbiAgaWYoYS5uYW1lIDwgYi5uYW1lKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgcmV0dXJuIDFcbn1cblxuLy9VcGRhdGUgZXhwb3J0IGhvb2sgZm9yIGdsc2xpZnktbGl2ZVxucHJvdG8udXBkYXRlID0gZnVuY3Rpb24oXG4gICAgdmVydFNvdXJjZVxuICAsIGZyYWdTb3VyY2VcbiAgLCB1bmlmb3Jtc1xuICAsIGF0dHJpYnV0ZXMpIHtcblxuICAvL0lmIG9ubHkgb25lIG9iamVjdCBwYXNzZWQsIGFzc3VtZSBnbHNsaWZ5IHN0eWxlIG91dHB1dFxuICBpZighZnJhZ1NvdXJjZSB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgdmFyIG9iaiA9IHZlcnRTb3VyY2VcbiAgICB2ZXJ0U291cmNlID0gb2JqLnZlcnRleFxuICAgIGZyYWdTb3VyY2UgPSBvYmouZnJhZ21lbnRcbiAgICB1bmlmb3JtcyAgID0gb2JqLnVuaWZvcm1zXG4gICAgYXR0cmlidXRlcyA9IG9iai5hdHRyaWJ1dGVzXG4gIH1cblxuICB2YXIgd3JhcHBlciA9IHRoaXNcbiAgdmFyIGdsICAgICAgPSB3cmFwcGVyLmdsXG5cbiAgLy9Db21waWxlIHZlcnRleCBhbmQgZnJhZ21lbnQgc2hhZGVyc1xuICB2YXIgcHZyZWYgPSB3cmFwcGVyLl92cmVmXG4gIHdyYXBwZXIuX3ZyZWYgPSBzaGFkZXJDYWNoZS5zaGFkZXIoZ2wsIGdsLlZFUlRFWF9TSEFERVIsIHZlcnRTb3VyY2UpXG4gIGlmKHB2cmVmKSB7XG4gICAgcHZyZWYuZGlzcG9zZSgpXG4gIH1cbiAgd3JhcHBlci52ZXJ0U2hhZGVyID0gd3JhcHBlci5fdnJlZi5zaGFkZXJcbiAgdmFyIHBmcmVmID0gdGhpcy5fZnJlZlxuICB3cmFwcGVyLl9mcmVmID0gc2hhZGVyQ2FjaGUuc2hhZGVyKGdsLCBnbC5GUkFHTUVOVF9TSEFERVIsIGZyYWdTb3VyY2UpXG4gIGlmKHBmcmVmKSB7XG4gICAgcGZyZWYuZGlzcG9zZSgpXG4gIH1cbiAgd3JhcHBlci5mcmFnU2hhZGVyID0gd3JhcHBlci5fZnJlZi5zaGFkZXJcblxuICAvL0lmIHVuaWZvcm1zL2F0dHJpYnV0ZXMgaXMgbm90IHNwZWNpZmllZCwgdXNlIFJUIHJlZmxlY3Rpb25cbiAgaWYoIXVuaWZvcm1zIHx8ICFhdHRyaWJ1dGVzKSB7XG5cbiAgICAvL0NyZWF0ZSBpbml0aWFsIHRlc3QgcHJvZ3JhbVxuICAgIHZhciB0ZXN0UHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKVxuICAgIGdsLmF0dGFjaFNoYWRlcih0ZXN0UHJvZ3JhbSwgd3JhcHBlci5mcmFnU2hhZGVyKVxuICAgIGdsLmF0dGFjaFNoYWRlcih0ZXN0UHJvZ3JhbSwgd3JhcHBlci52ZXJ0U2hhZGVyKVxuICAgIGdsLmxpbmtQcm9ncmFtKHRlc3RQcm9ncmFtKVxuICAgIGlmKCFnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHRlc3RQcm9ncmFtLCBnbC5MSU5LX1NUQVRVUykpIHtcbiAgICAgIHZhciBlcnJMb2cgPSBnbC5nZXRQcm9ncmFtSW5mb0xvZyh0ZXN0UHJvZ3JhbSlcbiAgICAgIHRocm93IG5ldyBHTEVycm9yKGVyckxvZywgJ0Vycm9yIGxpbmtpbmcgcHJvZ3JhbTonICsgZXJyTG9nKVxuICAgIH1cblxuICAgIC8vTG9hZCBkYXRhIGZyb20gcnVudGltZVxuICAgIHVuaWZvcm1zICAgPSB1bmlmb3JtcyAgIHx8IHJ1bnRpbWUudW5pZm9ybXMoZ2wsIHRlc3RQcm9ncmFtKVxuICAgIGF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzIHx8IHJ1bnRpbWUuYXR0cmlidXRlcyhnbCwgdGVzdFByb2dyYW0pXG5cbiAgICAvL1JlbGVhc2UgdGVzdCBwcm9ncmFtXG4gICAgZ2wuZGVsZXRlUHJvZ3JhbSh0ZXN0UHJvZ3JhbSlcbiAgfVxuXG4gIC8vU29ydCBhdHRyaWJ1dGVzIGxleGljb2dyYXBoaWNhbGx5XG4gIC8vIG92ZXJyaWRlcyB1bmRlZmluZWQgV2ViR0wgYmVoYXZpb3IgZm9yIGF0dHJpYnV0ZSBsb2NhdGlvbnNcbiAgYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXMuc2xpY2UoKVxuICBhdHRyaWJ1dGVzLnNvcnQoY29tcGFyZUF0dHJpYnV0ZXMpXG5cbiAgLy9Db252ZXJ0IGF0dHJpYnV0ZSB0eXBlcywgcmVhZCBvdXQgbG9jYXRpb25zXG4gIHZhciBhdHRyaWJ1dGVVbnBhY2tlZCAgPSBbXVxuICB2YXIgYXR0cmlidXRlTmFtZXMgICAgID0gW11cbiAgdmFyIGF0dHJpYnV0ZUxvY2F0aW9ucyA9IFtdXG4gIHZhciBpXG4gIGZvcihpPTA7IGk8YXR0cmlidXRlcy5sZW5ndGg7ICsraSkge1xuICAgIHZhciBhdHRyID0gYXR0cmlidXRlc1tpXVxuICAgIGlmKGF0dHIudHlwZS5pbmRleE9mKCdtYXQnKSA+PSAwKSB7XG4gICAgICB2YXIgc2l6ZSA9IGF0dHIudHlwZS5jaGFyQXQoYXR0ci50eXBlLmxlbmd0aC0xKXwwXG4gICAgICB2YXIgbG9jVmVjdG9yID0gbmV3IEFycmF5KHNpemUpXG4gICAgICBmb3IodmFyIGo9MDsgajxzaXplOyArK2opIHtcbiAgICAgICAgbG9jVmVjdG9yW2pdID0gYXR0cmlidXRlTG9jYXRpb25zLmxlbmd0aFxuICAgICAgICBhdHRyaWJ1dGVOYW1lcy5wdXNoKGF0dHIubmFtZSArICdbJyArIGogKyAnXScpXG4gICAgICAgIGlmKHR5cGVvZiBhdHRyLmxvY2F0aW9uID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIGF0dHJpYnV0ZUxvY2F0aW9ucy5wdXNoKGF0dHIubG9jYXRpb24gKyBqKVxuICAgICAgICB9IGVsc2UgaWYoQXJyYXkuaXNBcnJheShhdHRyLmxvY2F0aW9uKSAmJlxuICAgICAgICAgICAgICAgICAgYXR0ci5sb2NhdGlvbi5sZW5ndGggPT09IHNpemUgJiZcbiAgICAgICAgICAgICAgICAgIHR5cGVvZiBhdHRyLmxvY2F0aW9uW2pdID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIGF0dHJpYnV0ZUxvY2F0aW9ucy5wdXNoKGF0dHIubG9jYXRpb25bal18MClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhdHRyaWJ1dGVMb2NhdGlvbnMucHVzaCgtMSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYXR0cmlidXRlVW5wYWNrZWQucHVzaCh7XG4gICAgICAgIG5hbWU6IGF0dHIubmFtZSxcbiAgICAgICAgdHlwZTogYXR0ci50eXBlLFxuICAgICAgICBsb2NhdGlvbnM6IGxvY1ZlY3RvclxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgYXR0cmlidXRlVW5wYWNrZWQucHVzaCh7XG4gICAgICAgIG5hbWU6IGF0dHIubmFtZSxcbiAgICAgICAgdHlwZTogYXR0ci50eXBlLFxuICAgICAgICBsb2NhdGlvbnM6IFsgYXR0cmlidXRlTG9jYXRpb25zLmxlbmd0aCBdXG4gICAgICB9KVxuICAgICAgYXR0cmlidXRlTmFtZXMucHVzaChhdHRyLm5hbWUpXG4gICAgICBpZih0eXBlb2YgYXR0ci5sb2NhdGlvbiA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgYXR0cmlidXRlTG9jYXRpb25zLnB1c2goYXR0ci5sb2NhdGlvbnwwKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXR0cmlidXRlTG9jYXRpb25zLnB1c2goLTEpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy9Gb3IgYWxsIHVuc3BlY2lmaWVkIGF0dHJpYnV0ZXMsIGFzc2lnbiB0aGVtIGxleGljb2dyYXBoaWNhbGx5IG1pbiBhdHRyaWJ1dGVcbiAgdmFyIGN1ckxvY2F0aW9uID0gMFxuICBmb3IoaT0wOyBpPGF0dHJpYnV0ZUxvY2F0aW9ucy5sZW5ndGg7ICsraSkge1xuICAgIGlmKGF0dHJpYnV0ZUxvY2F0aW9uc1tpXSA8IDApIHtcbiAgICAgIHdoaWxlKGF0dHJpYnV0ZUxvY2F0aW9ucy5pbmRleE9mKGN1ckxvY2F0aW9uKSA+PSAwKSB7XG4gICAgICAgIGN1ckxvY2F0aW9uICs9IDFcbiAgICAgIH1cbiAgICAgIGF0dHJpYnV0ZUxvY2F0aW9uc1tpXSA9IGN1ckxvY2F0aW9uXG4gICAgfVxuICB9XG5cbiAgLy9SZWJ1aWxkIHByb2dyYW0gYW5kIHJlY29tcHV0ZSBhbGwgdW5pZm9ybSBsb2NhdGlvbnNcbiAgdmFyIHVuaWZvcm1Mb2NhdGlvbnMgPSBuZXcgQXJyYXkodW5pZm9ybXMubGVuZ3RoKVxuICBmdW5jdGlvbiByZWxpbmsoKSB7XG4gICAgd3JhcHBlci5wcm9ncmFtID0gc2hhZGVyQ2FjaGUucHJvZ3JhbShcbiAgICAgICAgZ2xcbiAgICAgICwgd3JhcHBlci5fdnJlZlxuICAgICAgLCB3cmFwcGVyLl9mcmVmXG4gICAgICAsIGF0dHJpYnV0ZU5hbWVzXG4gICAgICAsIGF0dHJpYnV0ZUxvY2F0aW9ucylcblxuICAgIGZvcih2YXIgaT0wOyBpPHVuaWZvcm1zLmxlbmd0aDsgKytpKSB7XG4gICAgICB1bmlmb3JtTG9jYXRpb25zW2ldID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKFxuICAgICAgICAgIHdyYXBwZXIucHJvZ3JhbVxuICAgICAgICAsIHVuaWZvcm1zW2ldLm5hbWUpXG4gICAgfVxuICB9XG5cbiAgLy9QZXJmb3JtIGluaXRpYWwgbGlua2luZywgcmV1c2UgcHJvZ3JhbSB1c2VkIGZvciByZWZsZWN0aW9uXG4gIHJlbGluaygpXG5cbiAgLy9TYXZlIHJlbGlua2luZyBwcm9jZWR1cmUsIGRlZmVyIHVudGlsIHJ1bnRpbWVcbiAgd3JhcHBlci5fcmVsaW5rID0gcmVsaW5rXG5cbiAgLy9HZW5lcmF0ZSB0eXBlIGluZm9cbiAgd3JhcHBlci50eXBlcyA9IHtcbiAgICB1bmlmb3JtczogICBtYWtlUmVmbGVjdCh1bmlmb3JtcyksXG4gICAgYXR0cmlidXRlczogbWFrZVJlZmxlY3QoYXR0cmlidXRlcylcbiAgfVxuXG4gIC8vR2VuZXJhdGUgYXR0cmlidXRlIHdyYXBwZXJzXG4gIHdyYXBwZXIuYXR0cmlidXRlcyA9IGNyZWF0ZUF0dHJpYnV0ZVdyYXBwZXIoXG4gICAgICBnbFxuICAgICwgd3JhcHBlclxuICAgICwgYXR0cmlidXRlVW5wYWNrZWRcbiAgICAsIGF0dHJpYnV0ZUxvY2F0aW9ucylcblxuICAvL0dlbmVyYXRlIHVuaWZvcm0gd3JhcHBlcnNcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHdyYXBwZXIsICd1bmlmb3JtcycsIGNyZWF0ZVVuaWZvcm1XcmFwcGVyKFxuICAgICAgZ2xcbiAgICAsIHdyYXBwZXJcbiAgICAsIHVuaWZvcm1zXG4gICAgLCB1bmlmb3JtTG9jYXRpb25zKSlcbn1cblxuLy9Db21waWxlcyBhbmQgbGlua3MgYSBzaGFkZXIgcHJvZ3JhbSB3aXRoIHRoZSBnaXZlbiBhdHRyaWJ1dGUgYW5kIHZlcnRleCBsaXN0XG5mdW5jdGlvbiBjcmVhdGVTaGFkZXIoXG4gICAgZ2xcbiAgLCB2ZXJ0U291cmNlXG4gICwgZnJhZ1NvdXJjZVxuICAsIHVuaWZvcm1zXG4gICwgYXR0cmlidXRlcykge1xuXG4gIHZhciBzaGFkZXIgPSBuZXcgU2hhZGVyKGdsKVxuXG4gIHNoYWRlci51cGRhdGUoXG4gICAgICB2ZXJ0U291cmNlXG4gICAgLCBmcmFnU291cmNlXG4gICAgLCB1bmlmb3Jtc1xuICAgICwgYXR0cmlidXRlcylcblxuICByZXR1cm4gc2hhZGVyXG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlU2hhZGVyXG4iLCJmdW5jdGlvbiBHTEVycm9yIChyYXdFcnJvciwgc2hvcnRNZXNzYWdlLCBsb25nTWVzc2FnZSkge1xuICAgIHRoaXMuc2hvcnRNZXNzYWdlID0gc2hvcnRNZXNzYWdlIHx8ICcnXG4gICAgdGhpcy5sb25nTWVzc2FnZSA9IGxvbmdNZXNzYWdlIHx8ICcnXG4gICAgdGhpcy5yYXdFcnJvciA9IHJhd0Vycm9yIHx8ICcnXG4gICAgdGhpcy5tZXNzYWdlID1cbiAgICAgICdnbC1zaGFkZXI6ICcgKyAoc2hvcnRNZXNzYWdlIHx8IHJhd0Vycm9yIHx8ICcnKSArXG4gICAgICAobG9uZ01lc3NhZ2UgPyAnXFxuJytsb25nTWVzc2FnZSA6ICcnKVxuICAgIHRoaXMuc3RhY2sgPSAobmV3IEVycm9yKCkpLnN0YWNrXG59XG5HTEVycm9yLnByb3RvdHlwZSA9IG5ldyBFcnJvclxuR0xFcnJvci5wcm90b3R5cGUubmFtZSA9ICdHTEVycm9yJ1xuR0xFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBHTEVycm9yXG5tb2R1bGUuZXhwb3J0cyA9IEdMRXJyb3JcbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUF0dHJpYnV0ZVdyYXBwZXJcblxudmFyIEdMRXJyb3IgPSByZXF1aXJlKFwiLi9HTEVycm9yXCIpXG5cbmZ1bmN0aW9uIFNoYWRlckF0dHJpYnV0ZShcbiAgICBnbFxuICAsIHdyYXBwZXJcbiAgLCBpbmRleFxuICAsIGxvY2F0aW9uc1xuICAsIGRpbWVuc2lvblxuICAsIGNvbnN0RnVuYykge1xuICB0aGlzLl9nbCAgICAgICAgPSBnbFxuICB0aGlzLl93cmFwcGVyICAgPSB3cmFwcGVyXG4gIHRoaXMuX2luZGV4ICAgICA9IGluZGV4XG4gIHRoaXMuX2xvY2F0aW9ucyA9IGxvY2F0aW9uc1xuICB0aGlzLl9kaW1lbnNpb24gPSBkaW1lbnNpb25cbiAgdGhpcy5fY29uc3RGdW5jID0gY29uc3RGdW5jXG59XG5cbnZhciBwcm90byA9IFNoYWRlckF0dHJpYnV0ZS5wcm90b3R5cGVcblxucHJvdG8ucG9pbnRlciA9IGZ1bmN0aW9uIHNldEF0dHJpYlBvaW50ZXIoXG4gICAgdHlwZVxuICAsIG5vcm1hbGl6ZWRcbiAgLCBzdHJpZGVcbiAgLCBvZmZzZXQpIHtcblxuICB2YXIgc2VsZiAgICAgID0gdGhpc1xuICB2YXIgZ2wgICAgICAgID0gc2VsZi5fZ2xcbiAgdmFyIGxvY2F0aW9uICA9IHNlbGYuX2xvY2F0aW9uc1tzZWxmLl9pbmRleF1cblxuICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKFxuICAgICAgbG9jYXRpb25cbiAgICAsIHNlbGYuX2RpbWVuc2lvblxuICAgICwgdHlwZSB8fCBnbC5GTE9BVFxuICAgICwgISFub3JtYWxpemVkXG4gICAgLCBzdHJpZGUgfHwgMFxuICAgICwgb2Zmc2V0IHx8IDApXG4gIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGxvY2F0aW9uKVxufVxuXG5wcm90by5zZXQgPSBmdW5jdGlvbih4MCwgeDEsIHgyLCB4Mykge1xuICByZXR1cm4gdGhpcy5fY29uc3RGdW5jKHRoaXMuX2xvY2F0aW9uc1t0aGlzLl9pbmRleF0sIHgwLCB4MSwgeDIsIHgzKVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sICdsb2NhdGlvbicsIHtcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9jYXRpb25zW3RoaXMuX2luZGV4XVxuICB9XG4gICwgc2V0OiBmdW5jdGlvbih2KSB7XG4gICAgaWYodiAhPT0gdGhpcy5fbG9jYXRpb25zW3RoaXMuX2luZGV4XSkge1xuICAgICAgdGhpcy5fbG9jYXRpb25zW3RoaXMuX2luZGV4XSA9IHZ8MFxuICAgICAgdGhpcy5fd3JhcHBlci5wcm9ncmFtID0gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gdnwwXG4gIH1cbn0pXG5cbi8vQWRkcyBhIHZlY3RvciBhdHRyaWJ1dGUgdG8gb2JqXG5mdW5jdGlvbiBhZGRWZWN0b3JBdHRyaWJ1dGUoXG4gICAgZ2xcbiAgLCB3cmFwcGVyXG4gICwgaW5kZXhcbiAgLCBsb2NhdGlvbnNcbiAgLCBkaW1lbnNpb25cbiAgLCBvYmpcbiAgLCBuYW1lKSB7XG5cbiAgLy9Db25zdHJ1Y3QgY29uc3RhbnQgZnVuY3Rpb25cbiAgdmFyIGNvbnN0RnVuY0FyZ3MgPSBbICdnbCcsICd2JyBdXG4gIHZhciB2YXJOYW1lcyA9IFtdXG4gIGZvcih2YXIgaT0wOyBpPGRpbWVuc2lvbjsgKytpKSB7XG4gICAgY29uc3RGdW5jQXJncy5wdXNoKCd4JytpKVxuICAgIHZhck5hbWVzLnB1c2goJ3gnK2kpXG4gIH1cbiAgY29uc3RGdW5jQXJncy5wdXNoKFxuICAgICdpZih4MC5sZW5ndGg9PT12b2lkIDApe3JldHVybiBnbC52ZXJ0ZXhBdHRyaWInICtcbiAgICBkaW1lbnNpb24gKyAnZih2LCcgK1xuICAgIHZhck5hbWVzLmpvaW4oKSArXG4gICAgJyl9ZWxzZXtyZXR1cm4gZ2wudmVydGV4QXR0cmliJyArXG4gICAgZGltZW5zaW9uICtcbiAgICAnZnYodix4MCl9JylcbiAgdmFyIGNvbnN0RnVuYyA9IEZ1bmN0aW9uLmFwcGx5KG51bGwsIGNvbnN0RnVuY0FyZ3MpXG5cbiAgLy9DcmVhdGUgYXR0cmlidXRlIHdyYXBwZXJcbiAgdmFyIGF0dHIgPSBuZXcgU2hhZGVyQXR0cmlidXRlKFxuICAgICAgZ2xcbiAgICAsIHdyYXBwZXJcbiAgICAsIGluZGV4XG4gICAgLCBsb2NhdGlvbnNcbiAgICAsIGRpbWVuc2lvblxuICAgICwgY29uc3RGdW5jKVxuXG4gIC8vQ3JlYXRlIGFjY2Vzc29yXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIG5hbWUsIHtcbiAgICBzZXQ6IGZ1bmN0aW9uKHgpIHtcbiAgICAgIGdsLmRpc2FibGVWZXJ0ZXhBdHRyaWJBcnJheShsb2NhdGlvbnNbaW5kZXhdKVxuICAgICAgY29uc3RGdW5jKGdsLCBsb2NhdGlvbnNbaW5kZXhdLCB4KVxuICAgICAgcmV0dXJuIHhcbiAgICB9XG4gICAgLCBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGF0dHJcbiAgICB9XG4gICAgLCBlbnVtZXJhYmxlOiB0cnVlXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZE1hdHJpeEF0dHJpYnV0ZShcbiAgICBnbFxuICAsIHdyYXBwZXJcbiAgLCBpbmRleFxuICAsIGxvY2F0aW9uc1xuICAsIGRpbWVuc2lvblxuICAsIG9ialxuICAsIG5hbWUpIHtcblxuICB2YXIgcGFydHMgPSBuZXcgQXJyYXkoZGltZW5zaW9uKVxuICB2YXIgYXR0cnMgPSBuZXcgQXJyYXkoZGltZW5zaW9uKVxuICBmb3IodmFyIGk9MDsgaTxkaW1lbnNpb247ICsraSkge1xuICAgIGFkZFZlY3RvckF0dHJpYnV0ZShcbiAgICAgICAgZ2xcbiAgICAgICwgd3JhcHBlclxuICAgICAgLCBpbmRleFtpXVxuICAgICAgLCBsb2NhdGlvbnNcbiAgICAgICwgZGltZW5zaW9uXG4gICAgICAsIHBhcnRzXG4gICAgICAsIGkpXG4gICAgYXR0cnNbaV0gPSBwYXJ0c1tpXVxuICB9XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHBhcnRzLCAnbG9jYXRpb24nLCB7XG4gICAgc2V0OiBmdW5jdGlvbih2KSB7XG4gICAgICBpZihBcnJheS5pc0FycmF5KHYpKSB7XG4gICAgICAgIGZvcih2YXIgaT0wOyBpPGRpbWVuc2lvbjsgKytpKSB7XG4gICAgICAgICAgYXR0cnNbaV0ubG9jYXRpb24gPSB2W2ldXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvcih2YXIgaT0wOyBpPGRpbWVuc2lvbjsgKytpKSB7XG4gICAgICAgICAgYXR0cnNbaV0ubG9jYXRpb24gPSB2ICsgaVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdlxuICAgIH1cbiAgICAsIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gbmV3IEFycmF5KGRpbWVuc2lvbilcbiAgICAgIGZvcih2YXIgaT0wOyBpPGRpbWVuc2lvbjsgKytpKSB7XG4gICAgICAgIHJlc3VsdFtpXSA9IGxvY2F0aW9uc1tpbmRleFtpXV1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG4gICAgLCBlbnVtZXJhYmxlOiB0cnVlXG4gIH0pXG5cbiAgcGFydHMucG9pbnRlciA9IGZ1bmN0aW9uKHR5cGUsIG5vcm1hbGl6ZWQsIHN0cmlkZSwgb2Zmc2V0KSB7XG4gICAgdHlwZSAgICAgICA9IHR5cGUgfHwgZ2wuRkxPQVRcbiAgICBub3JtYWxpemVkID0gISFub3JtYWxpemVkXG4gICAgc3RyaWRlICAgICA9IHN0cmlkZSB8fCAoZGltZW5zaW9uICogZGltZW5zaW9uKVxuICAgIG9mZnNldCAgICAgPSBvZmZzZXQgfHwgMFxuICAgIGZvcih2YXIgaT0wOyBpPGRpbWVuc2lvbjsgKytpKSB7XG4gICAgICB2YXIgbG9jYXRpb24gPSBsb2NhdGlvbnNbaW5kZXhbaV1dXG4gICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKFxuICAgICAgICAgICAgbG9jYXRpb25cbiAgICAgICAgICAsIGRpbWVuc2lvblxuICAgICAgICAgICwgdHlwZVxuICAgICAgICAgICwgbm9ybWFsaXplZFxuICAgICAgICAgICwgc3RyaWRlXG4gICAgICAgICAgLCBvZmZzZXQgKyBpICogZGltZW5zaW9uKVxuICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkobG9jYXRpb24pXG4gICAgfVxuICB9XG5cbiAgdmFyIHNjcmF0Y2ggPSBuZXcgQXJyYXkoZGltZW5zaW9uKVxuICB2YXIgdmVydGV4QXR0cmliID0gZ2xbJ3ZlcnRleEF0dHJpYicgKyBkaW1lbnNpb24gKyAnZnYnXVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIG5hbWUsIHtcbiAgICBzZXQ6IGZ1bmN0aW9uKHgpIHtcbiAgICAgIGZvcih2YXIgaT0wOyBpPGRpbWVuc2lvbjsgKytpKSB7XG4gICAgICAgIHZhciBsb2MgPSBsb2NhdGlvbnNbaW5kZXhbaV1dXG4gICAgICAgIGdsLmRpc2FibGVWZXJ0ZXhBdHRyaWJBcnJheShsb2MpXG4gICAgICAgIGlmKEFycmF5LmlzQXJyYXkoeFswXSkpIHtcbiAgICAgICAgICB2ZXJ0ZXhBdHRyaWIuY2FsbChnbCwgbG9jLCB4W2ldKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvcih2YXIgaj0wOyBqPGRpbWVuc2lvbjsgKytqKSB7XG4gICAgICAgICAgICBzY3JhdGNoW2pdID0geFtkaW1lbnNpb24qaSArIGpdXG4gICAgICAgICAgfVxuICAgICAgICAgIHZlcnRleEF0dHJpYi5jYWxsKGdsLCBsb2MsIHNjcmF0Y2gpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB4XG4gICAgfVxuICAgICwgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBwYXJ0c1xuICAgIH1cbiAgICAsIGVudW1lcmFibGU6IHRydWVcbiAgfSlcbn1cblxuLy9DcmVhdGUgc2hpbXMgZm9yIGF0dHJpYnV0ZXNcbmZ1bmN0aW9uIGNyZWF0ZUF0dHJpYnV0ZVdyYXBwZXIoXG4gICAgZ2xcbiAgLCB3cmFwcGVyXG4gICwgYXR0cmlidXRlc1xuICAsIGxvY2F0aW9ucykge1xuXG4gIHZhciBvYmogPSB7fVxuICBmb3IodmFyIGk9MCwgbj1hdHRyaWJ1dGVzLmxlbmd0aDsgaTxuOyArK2kpIHtcblxuICAgIHZhciBhID0gYXR0cmlidXRlc1tpXVxuICAgIHZhciBuYW1lID0gYS5uYW1lXG4gICAgdmFyIHR5cGUgPSBhLnR5cGVcbiAgICB2YXIgbG9jcyA9IGEubG9jYXRpb25zXG5cbiAgICBzd2l0Y2godHlwZSkge1xuICAgICAgY2FzZSAnYm9vbCc6XG4gICAgICBjYXNlICdpbnQnOlxuICAgICAgY2FzZSAnZmxvYXQnOlxuICAgICAgICBhZGRWZWN0b3JBdHRyaWJ1dGUoXG4gICAgICAgICAgICBnbFxuICAgICAgICAgICwgd3JhcHBlclxuICAgICAgICAgICwgbG9jc1swXVxuICAgICAgICAgICwgbG9jYXRpb25zXG4gICAgICAgICAgLCAxXG4gICAgICAgICAgLCBvYmpcbiAgICAgICAgICAsIG5hbWUpXG4gICAgICBicmVha1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZih0eXBlLmluZGV4T2YoJ3ZlYycpID49IDApIHtcbiAgICAgICAgICB2YXIgZCA9IHR5cGUuY2hhckNvZGVBdCh0eXBlLmxlbmd0aC0xKSAtIDQ4XG4gICAgICAgICAgaWYoZCA8IDIgfHwgZCA+IDQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBHTEVycm9yKCcnLCAnSW52YWxpZCBkYXRhIHR5cGUgZm9yIGF0dHJpYnV0ZSAnICsgbmFtZSArICc6ICcgKyB0eXBlKVxuICAgICAgICAgIH1cbiAgICAgICAgICBhZGRWZWN0b3JBdHRyaWJ1dGUoXG4gICAgICAgICAgICAgIGdsXG4gICAgICAgICAgICAsIHdyYXBwZXJcbiAgICAgICAgICAgICwgbG9jc1swXVxuICAgICAgICAgICAgLCBsb2NhdGlvbnNcbiAgICAgICAgICAgICwgZFxuICAgICAgICAgICAgLCBvYmpcbiAgICAgICAgICAgICwgbmFtZSlcbiAgICAgICAgfSBlbHNlIGlmKHR5cGUuaW5kZXhPZignbWF0JykgPj0gMCkge1xuICAgICAgICAgIHZhciBkID0gdHlwZS5jaGFyQ29kZUF0KHR5cGUubGVuZ3RoLTEpIC0gNDhcbiAgICAgICAgICBpZihkIDwgMiB8fCBkID4gNCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEdMRXJyb3IoJycsICdJbnZhbGlkIGRhdGEgdHlwZSBmb3IgYXR0cmlidXRlICcgKyBuYW1lICsgJzogJyArIHR5cGUpXG4gICAgICAgICAgfVxuICAgICAgICAgIGFkZE1hdHJpeEF0dHJpYnV0ZShcbiAgICAgICAgICAgICAgZ2xcbiAgICAgICAgICAgICwgd3JhcHBlclxuICAgICAgICAgICAgLCBsb2NzXG4gICAgICAgICAgICAsIGxvY2F0aW9uc1xuICAgICAgICAgICAgLCBkXG4gICAgICAgICAgICAsIG9ialxuICAgICAgICAgICAgLCBuYW1lKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBHTEVycm9yKCcnLCAnVW5rbm93biBkYXRhIHR5cGUgZm9yIGF0dHJpYnV0ZSAnICsgbmFtZSArICc6ICcgKyB0eXBlKVxuICAgICAgICB9XG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGNvYWxsZXNjZVVuaWZvcm1zID0gcmVxdWlyZSgnLi9yZWZsZWN0JylcbnZhciBHTEVycm9yID0gcmVxdWlyZShcIi4vR0xFcnJvclwiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVVuaWZvcm1XcmFwcGVyXG5cbi8vQmluZHMgYSBmdW5jdGlvbiBhbmQgcmV0dXJucyBhIHZhbHVlXG5mdW5jdGlvbiBpZGVudGl0eSh4KSB7XG4gIHZhciBjID0gbmV3IEZ1bmN0aW9uKCd5JywgJ3JldHVybiBmdW5jdGlvbigpe3JldHVybiB5fScpXG4gIHJldHVybiBjKHgpXG59XG5cbmZ1bmN0aW9uIG1ha2VWZWN0b3IobGVuZ3RoLCBmaWxsKSB7XG4gIHZhciByZXN1bHQgPSBuZXcgQXJyYXkobGVuZ3RoKVxuICBmb3IodmFyIGk9MDsgaTxsZW5ndGg7ICsraSkge1xuICAgIHJlc3VsdFtpXSA9IGZpbGxcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbi8vQ3JlYXRlIHNoaW1zIGZvciB1bmlmb3Jtc1xuZnVuY3Rpb24gY3JlYXRlVW5pZm9ybVdyYXBwZXIoZ2wsIHdyYXBwZXIsIHVuaWZvcm1zLCBsb2NhdGlvbnMpIHtcblxuICBmdW5jdGlvbiBtYWtlR2V0dGVyKGluZGV4KSB7XG4gICAgdmFyIHByb2MgPSBuZXcgRnVuY3Rpb24oXG4gICAgICAgICdnbCdcbiAgICAgICwgJ3dyYXBwZXInXG4gICAgICAsICdsb2NhdGlvbnMnXG4gICAgICAsICdyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gZ2wuZ2V0VW5pZm9ybSh3cmFwcGVyLnByb2dyYW0sbG9jYXRpb25zWycgKyBpbmRleCArICddKX0nKVxuICAgIHJldHVybiBwcm9jKGdsLCB3cmFwcGVyLCBsb2NhdGlvbnMpXG4gIH1cblxuICBmdW5jdGlvbiBtYWtlUHJvcFNldHRlcihwYXRoLCBpbmRleCwgdHlwZSkge1xuICAgIHN3aXRjaCh0eXBlKSB7XG4gICAgICBjYXNlICdib29sJzpcbiAgICAgIGNhc2UgJ2ludCc6XG4gICAgICBjYXNlICdzYW1wbGVyMkQnOlxuICAgICAgY2FzZSAnc2FtcGxlckN1YmUnOlxuICAgICAgICByZXR1cm4gJ2dsLnVuaWZvcm0xaShsb2NhdGlvbnNbJyArIGluZGV4ICsgJ10sb2JqJyArIHBhdGggKyAnKSdcbiAgICAgIGNhc2UgJ2Zsb2F0JzpcbiAgICAgICAgcmV0dXJuICdnbC51bmlmb3JtMWYobG9jYXRpb25zWycgKyBpbmRleCArICddLG9iaicgKyBwYXRoICsgJyknXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB2YXIgdmlkeCA9IHR5cGUuaW5kZXhPZigndmVjJylcbiAgICAgICAgaWYoMCA8PSB2aWR4ICYmIHZpZHggPD0gMSAmJiB0eXBlLmxlbmd0aCA9PT0gNCArIHZpZHgpIHtcbiAgICAgICAgICB2YXIgZCA9IHR5cGUuY2hhckNvZGVBdCh0eXBlLmxlbmd0aC0xKSAtIDQ4XG4gICAgICAgICAgaWYoZCA8IDIgfHwgZCA+IDQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBHTEVycm9yKCcnLCAnSW52YWxpZCBkYXRhIHR5cGUnKVxuICAgICAgICAgIH1cbiAgICAgICAgICBzd2l0Y2godHlwZS5jaGFyQXQoMCkpIHtcbiAgICAgICAgICAgIGNhc2UgJ2InOlxuICAgICAgICAgICAgY2FzZSAnaSc6XG4gICAgICAgICAgICAgIHJldHVybiAnZ2wudW5pZm9ybScgKyBkICsgJ2l2KGxvY2F0aW9uc1snICsgaW5kZXggKyAnXSxvYmonICsgcGF0aCArICcpJ1xuICAgICAgICAgICAgY2FzZSAndic6XG4gICAgICAgICAgICAgIHJldHVybiAnZ2wudW5pZm9ybScgKyBkICsgJ2Z2KGxvY2F0aW9uc1snICsgaW5kZXggKyAnXSxvYmonICsgcGF0aCArICcpJ1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEdMRXJyb3IoJycsICdVbnJlY29nbml6ZWQgZGF0YSB0eXBlIGZvciB2ZWN0b3IgJyArIG5hbWUgKyAnOiAnICsgdHlwZSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZih0eXBlLmluZGV4T2YoJ21hdCcpID09PSAwICYmIHR5cGUubGVuZ3RoID09PSA0KSB7XG4gICAgICAgICAgdmFyIGQgPSB0eXBlLmNoYXJDb2RlQXQodHlwZS5sZW5ndGgtMSkgLSA0OFxuICAgICAgICAgIGlmKGQgPCAyIHx8IGQgPiA0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgR0xFcnJvcignJywgJ0ludmFsaWQgdW5pZm9ybSBkaW1lbnNpb24gdHlwZSBmb3IgbWF0cml4ICcgKyBuYW1lICsgJzogJyArIHR5cGUpXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAnZ2wudW5pZm9ybU1hdHJpeCcgKyBkICsgJ2Z2KGxvY2F0aW9uc1snICsgaW5kZXggKyAnXSxmYWxzZSxvYmonICsgcGF0aCArICcpJ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBHTEVycm9yKCcnLCAnVW5rbm93biB1bmlmb3JtIGRhdGEgdHlwZSBmb3IgJyArIG5hbWUgKyAnOiAnICsgdHlwZSlcbiAgICAgICAgfVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBlbnVtZXJhdGVJbmRpY2VzKHByZWZpeCwgdHlwZSkge1xuICAgIGlmKHR5cGVvZiB0eXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIFsgW3ByZWZpeCwgdHlwZV0gXVxuICAgIH1cbiAgICB2YXIgaW5kaWNlcyA9IFtdXG4gICAgZm9yKHZhciBpZCBpbiB0eXBlKSB7XG4gICAgICB2YXIgcHJvcCA9IHR5cGVbaWRdXG4gICAgICB2YXIgdHByZWZpeCA9IHByZWZpeFxuICAgICAgaWYocGFyc2VJbnQoaWQpICsgJycgPT09IGlkKSB7XG4gICAgICAgIHRwcmVmaXggKz0gJ1snICsgaWQgKyAnXSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRwcmVmaXggKz0gJy4nICsgaWRcbiAgICAgIH1cbiAgICAgIGlmKHR5cGVvZiBwcm9wID09PSAnb2JqZWN0Jykge1xuICAgICAgICBpbmRpY2VzLnB1c2guYXBwbHkoaW5kaWNlcywgZW51bWVyYXRlSW5kaWNlcyh0cHJlZml4LCBwcm9wKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZGljZXMucHVzaChbdHByZWZpeCwgcHJvcF0pXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpbmRpY2VzXG4gIH1cblxuICBmdW5jdGlvbiBtYWtlU2V0dGVyKHR5cGUpIHtcbiAgICB2YXIgY29kZSA9IFsgJ3JldHVybiBmdW5jdGlvbiB1cGRhdGVQcm9wZXJ0eShvYmopeycgXVxuICAgIHZhciBpbmRpY2VzID0gZW51bWVyYXRlSW5kaWNlcygnJywgdHlwZSlcbiAgICBmb3IodmFyIGk9MDsgaTxpbmRpY2VzLmxlbmd0aDsgKytpKSB7XG4gICAgICB2YXIgaXRlbSA9IGluZGljZXNbaV1cbiAgICAgIHZhciBwYXRoID0gaXRlbVswXVxuICAgICAgdmFyIGlkeCAgPSBpdGVtWzFdXG4gICAgICBpZihsb2NhdGlvbnNbaWR4XSkge1xuICAgICAgICBjb2RlLnB1c2gobWFrZVByb3BTZXR0ZXIocGF0aCwgaWR4LCB1bmlmb3Jtc1tpZHhdLnR5cGUpKVxuICAgICAgfVxuICAgIH1cbiAgICBjb2RlLnB1c2goJ3JldHVybiBvYmp9JylcbiAgICB2YXIgcHJvYyA9IG5ldyBGdW5jdGlvbignZ2wnLCAnbG9jYXRpb25zJywgY29kZS5qb2luKCdcXG4nKSlcbiAgICByZXR1cm4gcHJvYyhnbCwgbG9jYXRpb25zKVxuICB9XG5cbiAgZnVuY3Rpb24gZGVmYXVsdFZhbHVlKHR5cGUpIHtcbiAgICBzd2l0Y2godHlwZSkge1xuICAgICAgY2FzZSAnYm9vbCc6XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgY2FzZSAnaW50JzpcbiAgICAgIGNhc2UgJ3NhbXBsZXIyRCc6XG4gICAgICBjYXNlICdzYW1wbGVyQ3ViZSc6XG4gICAgICAgIHJldHVybiAwXG4gICAgICBjYXNlICdmbG9hdCc6XG4gICAgICAgIHJldHVybiAwLjBcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHZhciB2aWR4ID0gdHlwZS5pbmRleE9mKCd2ZWMnKVxuICAgICAgICBpZigwIDw9IHZpZHggJiYgdmlkeCA8PSAxICYmIHR5cGUubGVuZ3RoID09PSA0ICsgdmlkeCkge1xuICAgICAgICAgIHZhciBkID0gdHlwZS5jaGFyQ29kZUF0KHR5cGUubGVuZ3RoLTEpIC0gNDhcbiAgICAgICAgICBpZihkIDwgMiB8fCBkID4gNCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEdMRXJyb3IoJycsICdJbnZhbGlkIGRhdGEgdHlwZScpXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKHR5cGUuY2hhckF0KDApID09PSAnYicpIHtcbiAgICAgICAgICAgIHJldHVybiBtYWtlVmVjdG9yKGQsIGZhbHNlKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbWFrZVZlY3RvcihkLCAwKVxuICAgICAgICB9IGVsc2UgaWYodHlwZS5pbmRleE9mKCdtYXQnKSA9PT0gMCAmJiB0eXBlLmxlbmd0aCA9PT0gNCkge1xuICAgICAgICAgIHZhciBkID0gdHlwZS5jaGFyQ29kZUF0KHR5cGUubGVuZ3RoLTEpIC0gNDhcbiAgICAgICAgICBpZihkIDwgMiB8fCBkID4gNCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEdMRXJyb3IoJycsICdJbnZhbGlkIHVuaWZvcm0gZGltZW5zaW9uIHR5cGUgZm9yIG1hdHJpeCAnICsgbmFtZSArICc6ICcgKyB0eXBlKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbWFrZVZlY3RvcihkKmQsIDApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEdMRXJyb3IoJycsICdVbmtub3duIHVuaWZvcm0gZGF0YSB0eXBlIGZvciAnICsgbmFtZSArICc6ICcgKyB0eXBlKVxuICAgICAgICB9XG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHN0b3JlUHJvcGVydHkob2JqLCBwcm9wLCB0eXBlKSB7XG4gICAgaWYodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICB2YXIgY2hpbGQgPSBwcm9jZXNzT2JqZWN0KHR5cGUpXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCB7XG4gICAgICAgIGdldDogaWRlbnRpdHkoY2hpbGQpLFxuICAgICAgICBzZXQ6IG1ha2VTZXR0ZXIodHlwZSksXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2VcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKGxvY2F0aW9uc1t0eXBlXSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCB7XG4gICAgICAgICAgZ2V0OiBtYWtlR2V0dGVyKHR5cGUpLFxuICAgICAgICAgIHNldDogbWFrZVNldHRlcih0eXBlKSxcbiAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2VcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9ialtwcm9wXSA9IGRlZmF1bHRWYWx1ZSh1bmlmb3Jtc1t0eXBlXS50eXBlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NPYmplY3Qob2JqKSB7XG4gICAgdmFyIHJlc3VsdFxuICAgIGlmKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgICAgcmVzdWx0ID0gbmV3IEFycmF5KG9iai5sZW5ndGgpXG4gICAgICBmb3IodmFyIGk9MDsgaTxvYmoubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgc3RvcmVQcm9wZXJ0eShyZXN1bHQsIGksIG9ialtpXSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0ge31cbiAgICAgIGZvcih2YXIgaWQgaW4gb2JqKSB7XG4gICAgICAgIHN0b3JlUHJvcGVydHkocmVzdWx0LCBpZCwgb2JqW2lkXSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgLy9SZXR1cm4gZGF0YVxuICB2YXIgY29hbGxlc2NlZCA9IGNvYWxsZXNjZVVuaWZvcm1zKHVuaWZvcm1zLCB0cnVlKVxuICByZXR1cm4ge1xuICAgIGdldDogaWRlbnRpdHkocHJvY2Vzc09iamVjdChjb2FsbGVzY2VkKSksXG4gICAgc2V0OiBtYWtlU2V0dGVyKGNvYWxsZXNjZWQpLFxuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1ha2VSZWZsZWN0VHlwZXNcblxuLy9Db25zdHJ1Y3QgdHlwZSBpbmZvIGZvciByZWZsZWN0aW9uLlxuLy9cbi8vIFRoaXMgaXRlcmF0ZXMgb3ZlciB0aGUgZmxhdHRlbmVkIGxpc3Qgb2YgdW5pZm9ybSB0eXBlIHZhbHVlcyBhbmQgc21hc2hlcyB0aGVtIGludG8gYSBKU09OIG9iamVjdC5cbi8vXG4vLyBUaGUgbGVhdmVzIG9mIHRoZSByZXN1bHRpbmcgb2JqZWN0IGFyZSBlaXRoZXIgaW5kaWNlcyBvciB0eXBlIHN0cmluZ3MgcmVwcmVzZW50aW5nIHByaW1pdGl2ZSBnbHNsaWZ5IHR5cGVzXG5mdW5jdGlvbiBtYWtlUmVmbGVjdFR5cGVzKHVuaWZvcm1zLCB1c2VJbmRleCkge1xuICB2YXIgb2JqID0ge31cbiAgZm9yKHZhciBpPTA7IGk8dW5pZm9ybXMubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgbiA9IHVuaWZvcm1zW2ldLm5hbWVcbiAgICB2YXIgcGFydHMgPSBuLnNwbGl0KFwiLlwiKVxuICAgIHZhciBvID0gb2JqXG4gICAgZm9yKHZhciBqPTA7IGo8cGFydHMubGVuZ3RoOyArK2opIHtcbiAgICAgIHZhciB4ID0gcGFydHNbal0uc3BsaXQoXCJbXCIpXG4gICAgICBpZih4Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgaWYoISh4WzBdIGluIG8pKSB7XG4gICAgICAgICAgb1t4WzBdXSA9IFtdXG4gICAgICAgIH1cbiAgICAgICAgbyA9IG9beFswXV1cbiAgICAgICAgZm9yKHZhciBrPTE7IGs8eC5sZW5ndGg7ICsraykge1xuICAgICAgICAgIHZhciB5ID0gcGFyc2VJbnQoeFtrXSlcbiAgICAgICAgICBpZihrPHgubGVuZ3RoLTEgfHwgajxwYXJ0cy5sZW5ndGgtMSkge1xuICAgICAgICAgICAgaWYoISh5IGluIG8pKSB7XG4gICAgICAgICAgICAgIGlmKGsgPCB4Lmxlbmd0aC0xKSB7XG4gICAgICAgICAgICAgICAgb1t5XSA9IFtdXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb1t5XSA9IHt9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG8gPSBvW3ldXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmKHVzZUluZGV4KSB7XG4gICAgICAgICAgICAgIG9beV0gPSBpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBvW3ldID0gdW5pZm9ybXNbaV0udHlwZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmKGogPCBwYXJ0cy5sZW5ndGgtMSkge1xuICAgICAgICBpZighKHhbMF0gaW4gbykpIHtcbiAgICAgICAgICBvW3hbMF1dID0ge31cbiAgICAgICAgfVxuICAgICAgICBvID0gb1t4WzBdXVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYodXNlSW5kZXgpIHtcbiAgICAgICAgICBvW3hbMF1dID0gaVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9beFswXV0gPSB1bmlmb3Jtc1tpXS50eXBlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9ialxufSIsIid1c2Ugc3RyaWN0J1xuXG5leHBvcnRzLnVuaWZvcm1zICAgID0gcnVudGltZVVuaWZvcm1zXG5leHBvcnRzLmF0dHJpYnV0ZXMgID0gcnVudGltZUF0dHJpYnV0ZXNcblxudmFyIEdMX1RPX0dMU0xfVFlQRVMgPSB7XG4gICdGTE9BVCc6ICAgICAgICdmbG9hdCcsXG4gICdGTE9BVF9WRUMyJzogICd2ZWMyJyxcbiAgJ0ZMT0FUX1ZFQzMnOiAgJ3ZlYzMnLFxuICAnRkxPQVRfVkVDNCc6ICAndmVjNCcsXG4gICdJTlQnOiAgICAgICAgICdpbnQnLFxuICAnSU5UX1ZFQzInOiAgICAnaXZlYzInLFxuICAnSU5UX1ZFQzMnOiAgICAnaXZlYzMnLFxuICAnSU5UX1ZFQzQnOiAgICAnaXZlYzQnLFxuICAnQk9PTCc6ICAgICAgICAnYm9vbCcsXG4gICdCT09MX1ZFQzInOiAgICdidmVjMicsXG4gICdCT09MX1ZFQzMnOiAgICdidmVjMycsXG4gICdCT09MX1ZFQzQnOiAgICdidmVjNCcsXG4gICdGTE9BVF9NQVQyJzogICdtYXQyJyxcbiAgJ0ZMT0FUX01BVDMnOiAgJ21hdDMnLFxuICAnRkxPQVRfTUFUNCc6ICAnbWF0NCcsXG4gICdTQU1QTEVSXzJEJzogICdzYW1wbGVyMkQnLFxuICAnU0FNUExFUl9DVUJFJzonc2FtcGxlckN1YmUnXG59XG5cbnZhciBHTF9UQUJMRSA9IG51bGxcblxuZnVuY3Rpb24gZ2V0VHlwZShnbCwgdHlwZSkge1xuICBpZighR0xfVEFCTEUpIHtcbiAgICB2YXIgdHlwZU5hbWVzID0gT2JqZWN0LmtleXMoR0xfVE9fR0xTTF9UWVBFUylcbiAgICBHTF9UQUJMRSA9IHt9XG4gICAgZm9yKHZhciBpPTA7IGk8dHlwZU5hbWVzLmxlbmd0aDsgKytpKSB7XG4gICAgICB2YXIgdG4gPSB0eXBlTmFtZXNbaV1cbiAgICAgIEdMX1RBQkxFW2dsW3RuXV0gPSBHTF9UT19HTFNMX1RZUEVTW3RuXVxuICAgIH1cbiAgfVxuICByZXR1cm4gR0xfVEFCTEVbdHlwZV1cbn1cblxuZnVuY3Rpb24gcnVudGltZVVuaWZvcm1zKGdsLCBwcm9ncmFtKSB7XG4gIHZhciBudW1Vbmlmb3JtcyA9IGdsLmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgZ2wuQUNUSVZFX1VOSUZPUk1TKVxuICB2YXIgcmVzdWx0ID0gW11cbiAgZm9yKHZhciBpPTA7IGk8bnVtVW5pZm9ybXM7ICsraSkge1xuICAgIHZhciBpbmZvID0gZ2wuZ2V0QWN0aXZlVW5pZm9ybShwcm9ncmFtLCBpKVxuICAgIGlmKGluZm8pIHtcbiAgICAgIHZhciB0eXBlID0gZ2V0VHlwZShnbCwgaW5mby50eXBlKVxuICAgICAgaWYoaW5mby5zaXplID4gMSkge1xuICAgICAgICBmb3IodmFyIGo9MDsgajxpbmZvLnNpemU7ICsraikge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6IGluZm8ubmFtZS5yZXBsYWNlKCdbMF0nLCAnWycgKyBqICsgJ10nKSxcbiAgICAgICAgICAgIHR5cGU6IHR5cGVcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgbmFtZTogaW5mby5uYW1lLFxuICAgICAgICAgIHR5cGU6IHR5cGVcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5mdW5jdGlvbiBydW50aW1lQXR0cmlidXRlcyhnbCwgcHJvZ3JhbSkge1xuICB2YXIgbnVtQXR0cmlidXRlcyA9IGdsLmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgZ2wuQUNUSVZFX0FUVFJJQlVURVMpXG4gIHZhciByZXN1bHQgPSBbXVxuICBmb3IodmFyIGk9MDsgaTxudW1BdHRyaWJ1dGVzOyArK2kpIHtcbiAgICB2YXIgaW5mbyA9IGdsLmdldEFjdGl2ZUF0dHJpYihwcm9ncmFtLCBpKVxuICAgIGlmKGluZm8pIHtcbiAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgbmFtZTogaW5mby5uYW1lLFxuICAgICAgICB0eXBlOiBnZXRUeXBlKGdsLCBpbmZvLnR5cGUpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG4iLCIndXNlIHN0cmljdCdcblxuZXhwb3J0cy5zaGFkZXIgICA9IGdldFNoYWRlclJlZmVyZW5jZVxuZXhwb3J0cy5wcm9ncmFtICA9IGNyZWF0ZVByb2dyYW1cblxudmFyIEdMRXJyb3IgPSByZXF1aXJlKFwiLi9HTEVycm9yXCIpXG52YXIgZm9ybWF0Q29tcGlsZXJFcnJvciA9IHJlcXVpcmUoJ2dsLWZvcm1hdC1jb21waWxlci1lcnJvcicpO1xuXG52YXIgd2Vha01hcCA9IHR5cGVvZiBXZWFrTWFwID09PSAndW5kZWZpbmVkJyA/IHJlcXVpcmUoJ3dlYWttYXAtc2hpbScpIDogV2Vha01hcFxudmFyIENBQ0hFID0gbmV3IHdlYWtNYXAoKVxuXG52YXIgU0hBREVSX0NPVU5URVIgPSAwXG5cbmZ1bmN0aW9uIFNoYWRlclJlZmVyZW5jZShpZCwgc3JjLCB0eXBlLCBzaGFkZXIsIHByb2dyYW1zLCBjb3VudCwgY2FjaGUpIHtcbiAgdGhpcy5pZCAgICAgICA9IGlkXG4gIHRoaXMuc3JjICAgICAgPSBzcmNcbiAgdGhpcy50eXBlICAgICA9IHR5cGVcbiAgdGhpcy5zaGFkZXIgICA9IHNoYWRlclxuICB0aGlzLmNvdW50ICAgID0gY291bnRcbiAgdGhpcy5wcm9ncmFtcyA9IFtdXG4gIHRoaXMuY2FjaGUgICAgPSBjYWNoZVxufVxuXG5TaGFkZXJSZWZlcmVuY2UucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbigpIHtcbiAgaWYoLS10aGlzLmNvdW50ID09PSAwKSB7XG4gICAgdmFyIGNhY2hlICAgID0gdGhpcy5jYWNoZVxuICAgIHZhciBnbCAgICAgICA9IGNhY2hlLmdsXG5cbiAgICAvL1JlbW92ZSBwcm9ncmFtIHJlZmVyZW5jZXNcbiAgICB2YXIgcHJvZ3JhbXMgPSB0aGlzLnByb2dyYW1zXG4gICAgZm9yKHZhciBpPTAsIG49cHJvZ3JhbXMubGVuZ3RoOyBpPG47ICsraSkge1xuICAgICAgdmFyIHAgPSBjYWNoZS5wcm9ncmFtc1twcm9ncmFtc1tpXV1cbiAgICAgIGlmKHApIHtcbiAgICAgICAgZGVsZXRlIGNhY2hlLnByb2dyYW1zW2ldXG4gICAgICAgIGdsLmRlbGV0ZVByb2dyYW0ocClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvL1JlbW92ZSBzaGFkZXIgcmVmZXJlbmNlXG4gICAgZ2wuZGVsZXRlU2hhZGVyKHRoaXMuc2hhZGVyKVxuICAgIGRlbGV0ZSBjYWNoZS5zaGFkZXJzWyh0aGlzLnR5cGUgPT09IGdsLkZSQUdNRU5UX1NIQURFUil8MF1bdGhpcy5zcmNdXG4gIH1cbn1cblxuZnVuY3Rpb24gQ29udGV4dENhY2hlKGdsKSB7XG4gIHRoaXMuZ2wgICAgICAgPSBnbFxuICB0aGlzLnNoYWRlcnMgID0gW3t9LCB7fV1cbiAgdGhpcy5wcm9ncmFtcyA9IHt9XG59XG5cbnZhciBwcm90byA9IENvbnRleHRDYWNoZS5wcm90b3R5cGVcblxuZnVuY3Rpb24gY29tcGlsZVNoYWRlcihnbCwgdHlwZSwgc3JjKSB7XG4gIHZhciBzaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIodHlwZSlcbiAgZ2wuc2hhZGVyU291cmNlKHNoYWRlciwgc3JjKVxuICBnbC5jb21waWxlU2hhZGVyKHNoYWRlcilcbiAgaWYoIWdsLmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIGdsLkNPTVBJTEVfU1RBVFVTKSkge1xuICAgIHZhciBlcnJMb2cgPSBnbC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcilcbiAgICB0cnkge1xuICAgICAgICB2YXIgZm10ID0gZm9ybWF0Q29tcGlsZXJFcnJvcihlcnJMb2csIHNyYywgdHlwZSk7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIGNvbnNvbGUud2FybignRmFpbGVkIHRvIGZvcm1hdCBjb21waWxlciBlcnJvcjogJyArIGUpO1xuICAgICAgICB0aHJvdyBuZXcgR0xFcnJvcihlcnJMb2csICdFcnJvciBjb21waWxpbmcgc2hhZGVyOlxcbicgKyBlcnJMb2cpXG4gICAgfVxuICAgIHRocm93IG5ldyBHTEVycm9yKGVyckxvZywgZm10LnNob3J0LCBmbXQubG9uZylcbiAgfVxuICByZXR1cm4gc2hhZGVyXG59XG5cbnByb3RvLmdldFNoYWRlclJlZmVyZW5jZSA9IGZ1bmN0aW9uKHR5cGUsIHNyYykge1xuICB2YXIgZ2wgICAgICA9IHRoaXMuZ2xcbiAgdmFyIHNoYWRlcnMgPSB0aGlzLnNoYWRlcnNbKHR5cGUgPT09IGdsLkZSQUdNRU5UX1NIQURFUil8MF1cbiAgdmFyIHNoYWRlciAgPSBzaGFkZXJzW3NyY11cbiAgaWYoIXNoYWRlciB8fCAhZ2wuaXNTaGFkZXIoc2hhZGVyLnNoYWRlcikpIHtcbiAgICB2YXIgc2hhZGVyT2JqID0gY29tcGlsZVNoYWRlcihnbCwgdHlwZSwgc3JjKVxuICAgIHNoYWRlciA9IHNoYWRlcnNbc3JjXSA9IG5ldyBTaGFkZXJSZWZlcmVuY2UoXG4gICAgICBTSEFERVJfQ09VTlRFUisrLFxuICAgICAgc3JjLFxuICAgICAgdHlwZSxcbiAgICAgIHNoYWRlck9iaixcbiAgICAgIFtdLFxuICAgICAgMSxcbiAgICAgIHRoaXMpXG4gIH0gZWxzZSB7XG4gICAgc2hhZGVyLmNvdW50ICs9IDFcbiAgfVxuICByZXR1cm4gc2hhZGVyXG59XG5cbmZ1bmN0aW9uIGxpbmtQcm9ncmFtKGdsLCB2c2hhZGVyLCBmc2hhZGVyLCBhdHRyaWJzLCBsb2NhdGlvbnMpIHtcbiAgdmFyIHByb2dyYW0gPSBnbC5jcmVhdGVQcm9ncmFtKClcbiAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIHZzaGFkZXIpXG4gIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCBmc2hhZGVyKVxuICBmb3IodmFyIGk9MDsgaTxhdHRyaWJzLmxlbmd0aDsgKytpKSB7XG4gICAgZ2wuYmluZEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIGxvY2F0aW9uc1tpXSwgYXR0cmlic1tpXSlcbiAgfVxuICBnbC5saW5rUHJvZ3JhbShwcm9ncmFtKVxuICBpZighZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwcm9ncmFtLCBnbC5MSU5LX1NUQVRVUykpIHtcbiAgICB2YXIgZXJyTG9nID0gZ2wuZ2V0UHJvZ3JhbUluZm9Mb2cocHJvZ3JhbSlcbiAgICB0aHJvdyBuZXcgR0xFcnJvcihlcnJMb2csICdFcnJvciBsaW5raW5nIHByb2dyYW06ICcgKyBlcnJMb2cpXG4gIH1cbiAgcmV0dXJuIHByb2dyYW1cbn1cblxucHJvdG8uZ2V0UHJvZ3JhbSA9IGZ1bmN0aW9uKHZyZWYsIGZyZWYsIGF0dHJpYnMsIGxvY2F0aW9ucykge1xuICB2YXIgdG9rZW4gPSBbdnJlZi5pZCwgZnJlZi5pZCwgYXR0cmlicy5qb2luKCc6JyksIGxvY2F0aW9ucy5qb2luKCc6JyldLmpvaW4oJ0AnKVxuICB2YXIgcHJvZyAgPSB0aGlzLnByb2dyYW1zW3Rva2VuXVxuICBpZighcHJvZyB8fCAhdGhpcy5nbC5pc1Byb2dyYW0ocHJvZykpIHtcbiAgICB0aGlzLnByb2dyYW1zW3Rva2VuXSA9IHByb2cgPSBsaW5rUHJvZ3JhbShcbiAgICAgIHRoaXMuZ2wsXG4gICAgICB2cmVmLnNoYWRlcixcbiAgICAgIGZyZWYuc2hhZGVyLFxuICAgICAgYXR0cmlicyxcbiAgICAgIGxvY2F0aW9ucylcbiAgICB2cmVmLnByb2dyYW1zLnB1c2godG9rZW4pXG4gICAgZnJlZi5wcm9ncmFtcy5wdXNoKHRva2VuKVxuICB9XG4gIHJldHVybiBwcm9nXG59XG5cbmZ1bmN0aW9uIGdldENhY2hlKGdsKSB7XG4gIHZhciBjdHhDYWNoZSA9IENBQ0hFLmdldChnbClcbiAgaWYoIWN0eENhY2hlKSB7XG4gICAgY3R4Q2FjaGUgPSBuZXcgQ29udGV4dENhY2hlKGdsKVxuICAgIENBQ0hFLnNldChnbCwgY3R4Q2FjaGUpXG4gIH1cbiAgcmV0dXJuIGN0eENhY2hlXG59XG5cbmZ1bmN0aW9uIGdldFNoYWRlclJlZmVyZW5jZShnbCwgdHlwZSwgc3JjKSB7XG4gIHJldHVybiBnZXRDYWNoZShnbCkuZ2V0U2hhZGVyUmVmZXJlbmNlKHR5cGUsIHNyYylcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvZ3JhbShnbCwgdnJlZiwgZnJlZiwgYXR0cmlicywgbG9jYXRpb25zKSB7XG4gIHJldHVybiBnZXRDYWNoZShnbCkuZ2V0UHJvZ3JhbSh2cmVmLCBmcmVmLCBhdHRyaWJzLCBsb2NhdGlvbnMpXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIG5kYXJyYXkgPSByZXF1aXJlKCduZGFycmF5JylcbnZhciBvcHMgICAgID0gcmVxdWlyZSgnbmRhcnJheS1vcHMnKVxudmFyIHBvb2wgICAgPSByZXF1aXJlKCd0eXBlZGFycmF5LXBvb2wnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVRleHR1cmUyRFxuXG52YXIgbGluZWFyVHlwZXMgPSBudWxsXG52YXIgZmlsdGVyVHlwZXMgPSBudWxsXG52YXIgd3JhcFR5cGVzICAgPSBudWxsXG5cbmZ1bmN0aW9uIGxhenlJbml0TGluZWFyVHlwZXMoZ2wpIHtcbiAgbGluZWFyVHlwZXMgPSBbXG4gICAgZ2wuTElORUFSLFxuICAgIGdsLk5FQVJFU1RfTUlQTUFQX0xJTkVBUixcbiAgICBnbC5MSU5FQVJfTUlQTUFQX05FQVJFU1QsXG4gICAgZ2wuTElORUFSX01JUE1BUF9ORUFSRVNUXG4gIF1cbiAgZmlsdGVyVHlwZXMgPSBbXG4gICAgZ2wuTkVBUkVTVCxcbiAgICBnbC5MSU5FQVIsXG4gICAgZ2wuTkVBUkVTVF9NSVBNQVBfTkVBUkVTVCxcbiAgICBnbC5ORUFSRVNUX01JUE1BUF9MSU5FQVIsXG4gICAgZ2wuTElORUFSX01JUE1BUF9ORUFSRVNULFxuICAgIGdsLkxJTkVBUl9NSVBNQVBfTElORUFSXG4gIF1cbiAgd3JhcFR5cGVzID0gW1xuICAgIGdsLlJFUEVBVCxcbiAgICBnbC5DTEFNUF9UT19FREdFLFxuICAgIGdsLk1JUlJPUkVEX1JFUEVBVFxuICBdXG59XG5cbmZ1bmN0aW9uIGFjY2VwdFRleHR1cmVET00gKG9iaikge1xuICByZXR1cm4gKFxuICAgICgndW5kZWZpbmVkJyAhPSB0eXBlb2YgSFRNTENhbnZhc0VsZW1lbnQgJiYgb2JqIGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQpIHx8XG4gICAgKCd1bmRlZmluZWQnICE9IHR5cGVvZiBIVE1MSW1hZ2VFbGVtZW50ICYmIG9iaiBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQpIHx8XG4gICAgKCd1bmRlZmluZWQnICE9IHR5cGVvZiBIVE1MVmlkZW9FbGVtZW50ICYmIG9iaiBpbnN0YW5jZW9mIEhUTUxWaWRlb0VsZW1lbnQpIHx8XG4gICAgKCd1bmRlZmluZWQnICE9IHR5cGVvZiBJbWFnZURhdGEgJiYgb2JqIGluc3RhbmNlb2YgSW1hZ2VEYXRhKSlcbn1cblxudmFyIGNvbnZlcnRGbG9hdFRvVWludDggPSBmdW5jdGlvbihvdXQsIGlucCkge1xuICBvcHMubXVscyhvdXQsIGlucCwgMjU1LjApXG59XG5cbmZ1bmN0aW9uIHJlc2hhcGVUZXh0dXJlKHRleCwgdywgaCkge1xuICB2YXIgZ2wgPSB0ZXguZ2xcbiAgdmFyIG1heFNpemUgPSBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX1RFWFRVUkVfU0laRSlcbiAgaWYodyA8IDAgfHwgdyA+IG1heFNpemUgfHwgaCA8IDAgfHwgaCA+IG1heFNpemUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXRleHR1cmUyZDogSW52YWxpZCB0ZXh0dXJlIHNpemUnKVxuICB9XG4gIHRleC5fc2hhcGUgPSBbdywgaF1cbiAgdGV4LmJpbmQoKVxuICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIDAsIHRleC5mb3JtYXQsIHcsIGgsIDAsIHRleC5mb3JtYXQsIHRleC50eXBlLCBudWxsKVxuICB0ZXguX21pcExldmVscyA9IFswXVxuICByZXR1cm4gdGV4XG59XG5cbmZ1bmN0aW9uIFRleHR1cmUyRChnbCwgaGFuZGxlLCB3aWR0aCwgaGVpZ2h0LCBmb3JtYXQsIHR5cGUpIHtcbiAgdGhpcy5nbCA9IGdsXG4gIHRoaXMuaGFuZGxlID0gaGFuZGxlXG4gIHRoaXMuZm9ybWF0ID0gZm9ybWF0XG4gIHRoaXMudHlwZSA9IHR5cGVcbiAgdGhpcy5fc2hhcGUgPSBbd2lkdGgsIGhlaWdodF1cbiAgdGhpcy5fbWlwTGV2ZWxzID0gWzBdXG4gIHRoaXMuX21hZ0ZpbHRlciA9IGdsLk5FQVJFU1RcbiAgdGhpcy5fbWluRmlsdGVyID0gZ2wuTkVBUkVTVFxuICB0aGlzLl93cmFwUyA9IGdsLkNMQU1QX1RPX0VER0VcbiAgdGhpcy5fd3JhcFQgPSBnbC5DTEFNUF9UT19FREdFXG4gIHRoaXMuX2FuaXNvU2FtcGxlcyA9IDFcblxuICB2YXIgcGFyZW50ID0gdGhpc1xuICB2YXIgd3JhcFZlY3RvciA9IFt0aGlzLl93cmFwUywgdGhpcy5fd3JhcFRdXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHdyYXBWZWN0b3IsIFtcbiAgICB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcGFyZW50Ll93cmFwU1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24odikge1xuICAgICAgICByZXR1cm4gcGFyZW50LndyYXBTID0gdlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudC5fd3JhcFRcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudC53cmFwVCA9IHZcbiAgICAgIH1cbiAgICB9XG4gIF0pXG4gIHRoaXMuX3dyYXBWZWN0b3IgPSB3cmFwVmVjdG9yXG5cbiAgdmFyIHNoYXBlVmVjdG9yID0gW3RoaXMuX3NoYXBlWzBdLCB0aGlzLl9zaGFwZVsxXV1cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoc2hhcGVWZWN0b3IsIFtcbiAgICB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcGFyZW50Ll9zaGFwZVswXVxuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24odikge1xuICAgICAgICByZXR1cm4gcGFyZW50LndpZHRoID0gdlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudC5fc2hhcGVbMV1cbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudC5oZWlnaHQgPSB2XG4gICAgICB9XG4gICAgfVxuICBdKVxuICB0aGlzLl9zaGFwZVZlY3RvciA9IHNoYXBlVmVjdG9yXG59XG5cbnZhciBwcm90byA9IFRleHR1cmUyRC5wcm90b3R5cGVcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMocHJvdG8sIHtcbiAgbWluRmlsdGVyOiB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9taW5GaWx0ZXJcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24odikge1xuICAgICAgdGhpcy5iaW5kKClcbiAgICAgIHZhciBnbCA9IHRoaXMuZ2xcbiAgICAgIGlmKHRoaXMudHlwZSA9PT0gZ2wuRkxPQVQgJiYgbGluZWFyVHlwZXMuaW5kZXhPZih2KSA+PSAwKSB7XG4gICAgICAgIGlmKCFnbC5nZXRFeHRlbnNpb24oJ09FU190ZXh0dXJlX2Zsb2F0X2xpbmVhcicpKSB7XG4gICAgICAgICAgdiA9IGdsLk5FQVJFU1RcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYoZmlsdGVyVHlwZXMuaW5kZXhPZih2KSA8IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdnbC10ZXh0dXJlMmQ6IFVua25vd24gZmlsdGVyIG1vZGUgJyArIHYpXG4gICAgICB9XG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgdilcbiAgICAgIHJldHVybiB0aGlzLl9taW5GaWx0ZXIgPSB2XG4gICAgfVxuICB9LFxuICBtYWdGaWx0ZXI6IHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX21hZ0ZpbHRlclxuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbih2KSB7XG4gICAgICB0aGlzLmJpbmQoKVxuICAgICAgdmFyIGdsID0gdGhpcy5nbFxuICAgICAgaWYodGhpcy50eXBlID09PSBnbC5GTE9BVCAmJiBsaW5lYXJUeXBlcy5pbmRleE9mKHYpID49IDApIHtcbiAgICAgICAgaWYoIWdsLmdldEV4dGVuc2lvbignT0VTX3RleHR1cmVfZmxvYXRfbGluZWFyJykpIHtcbiAgICAgICAgICB2ID0gZ2wuTkVBUkVTVFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZihmaWx0ZXJUeXBlcy5pbmRleE9mKHYpIDwgMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXRleHR1cmUyZDogVW5rbm93biBmaWx0ZXIgbW9kZSAnICsgdilcbiAgICAgIH1cbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCB2KVxuICAgICAgcmV0dXJuIHRoaXMuX21hZ0ZpbHRlciA9IHZcbiAgICB9XG4gIH0sXG4gIG1pcFNhbXBsZXM6IHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2FuaXNvU2FtcGxlc1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbihpKSB7XG4gICAgICB2YXIgcHNhbXBsZXMgPSB0aGlzLl9hbmlzb1NhbXBsZXNcbiAgICAgIHRoaXMuX2FuaXNvU2FtcGxlcyA9IE1hdGgubWF4KGksIDEpfDBcbiAgICAgIGlmKHBzYW1wbGVzICE9PSB0aGlzLl9hbmlzb1NhbXBsZXMpIHtcbiAgICAgICAgdmFyIGV4dCA9IHRoaXMuZ2wuZ2V0RXh0ZW5zaW9uKCdFWFRfdGV4dHVyZV9maWx0ZXJfYW5pc290cm9waWMnKVxuICAgICAgICBpZihleHQpIHtcbiAgICAgICAgICB0aGlzLmdsLnRleFBhcmFtZXRlcmYodGhpcy5nbC5URVhUVVJFXzJELCBleHQuVEVYVFVSRV9NQVhfQU5JU09UUk9QWV9FWFQsIHRoaXMuX2FuaXNvU2FtcGxlcylcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuX2FuaXNvU2FtcGxlc1xuICAgIH1cbiAgfSxcbiAgd3JhcFM6IHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3dyYXBTXG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uKHYpIHtcbiAgICAgIHRoaXMuYmluZCgpXG4gICAgICBpZih3cmFwVHlwZXMuaW5kZXhPZih2KSA8IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdnbC10ZXh0dXJlMmQ6IFVua25vd24gd3JhcCBtb2RlICcgKyB2KVxuICAgICAgfVxuICAgICAgdGhpcy5nbC50ZXhQYXJhbWV0ZXJpKHRoaXMuZ2wuVEVYVFVSRV8yRCwgdGhpcy5nbC5URVhUVVJFX1dSQVBfUywgdilcbiAgICAgIHJldHVybiB0aGlzLl93cmFwUyA9IHZcbiAgICB9XG4gIH0sXG4gIHdyYXBUOiB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl93cmFwVFxuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbih2KSB7XG4gICAgICB0aGlzLmJpbmQoKVxuICAgICAgaWYod3JhcFR5cGVzLmluZGV4T2YodikgPCAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZ2wtdGV4dHVyZTJkOiBVbmtub3duIHdyYXAgbW9kZSAnICsgdilcbiAgICAgIH1cbiAgICAgIHRoaXMuZ2wudGV4UGFyYW1ldGVyaSh0aGlzLmdsLlRFWFRVUkVfMkQsIHRoaXMuZ2wuVEVYVFVSRV9XUkFQX1QsIHYpXG4gICAgICByZXR1cm4gdGhpcy5fd3JhcFQgPSB2XG4gICAgfVxuICB9LFxuICB3cmFwOiB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl93cmFwVmVjdG9yXG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uKHYpIHtcbiAgICAgIGlmKCFBcnJheS5pc0FycmF5KHYpKSB7XG4gICAgICAgIHYgPSBbdix2XVxuICAgICAgfVxuICAgICAgaWYodi5sZW5ndGggIT09IDIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdnbC10ZXh0dXJlMmQ6IE11c3Qgc3BlY2lmeSB3cmFwIG1vZGUgZm9yIHJvd3MgYW5kIGNvbHVtbnMnKVxuICAgICAgfVxuICAgICAgZm9yKHZhciBpPTA7IGk8MjsgKytpKSB7XG4gICAgICAgIGlmKHdyYXBUeXBlcy5pbmRleE9mKHZbaV0pIDwgMCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZ2wtdGV4dHVyZTJkOiBVbmtub3duIHdyYXAgbW9kZSAnICsgdilcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5fd3JhcFMgPSB2WzBdXG4gICAgICB0aGlzLl93cmFwVCA9IHZbMV1cblxuICAgICAgdmFyIGdsID0gdGhpcy5nbFxuICAgICAgdGhpcy5iaW5kKClcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1MsIHRoaXMuX3dyYXBTKVxuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfVCwgdGhpcy5fd3JhcFQpXG5cbiAgICAgIHJldHVybiB2XG4gICAgfVxuICB9LFxuICBzaGFwZToge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2hhcGVWZWN0b3JcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24oeCkge1xuICAgICAgaWYoIUFycmF5LmlzQXJyYXkoeCkpIHtcbiAgICAgICAgeCA9IFt4fDAseHwwXVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYoeC5sZW5ndGggIT09IDIpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXRleHR1cmUyZDogSW52YWxpZCB0ZXh0dXJlIHNoYXBlJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmVzaGFwZVRleHR1cmUodGhpcywgeFswXXwwLCB4WzFdfDApXG4gICAgICByZXR1cm4gW3hbMF18MCwgeFsxXXwwXVxuICAgIH1cbiAgfSxcbiAgd2lkdGg6IHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NoYXBlWzBdXG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uKHcpIHtcbiAgICAgIHcgPSB3fDBcbiAgICAgIHJlc2hhcGVUZXh0dXJlKHRoaXMsIHcsIHRoaXMuX3NoYXBlWzFdKVxuICAgICAgcmV0dXJuIHdcbiAgICB9XG4gIH0sXG4gIGhlaWdodDoge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2hhcGVbMV1cbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24oaCkge1xuICAgICAgaCA9IGh8MFxuICAgICAgcmVzaGFwZVRleHR1cmUodGhpcywgdGhpcy5fc2hhcGVbMF0sIGgpXG4gICAgICByZXR1cm4gaFxuICAgIH1cbiAgfVxufSlcblxucHJvdG8uYmluZCA9IGZ1bmN0aW9uKHVuaXQpIHtcbiAgdmFyIGdsID0gdGhpcy5nbFxuICBpZih1bml0ICE9PSB1bmRlZmluZWQpIHtcbiAgICBnbC5hY3RpdmVUZXh0dXJlKGdsLlRFWFRVUkUwICsgKHVuaXR8MCkpXG4gIH1cbiAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGhpcy5oYW5kbGUpXG4gIGlmKHVuaXQgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAodW5pdHwwKVxuICB9XG4gIHJldHVybiBnbC5nZXRQYXJhbWV0ZXIoZ2wuQUNUSVZFX1RFWFRVUkUpIC0gZ2wuVEVYVFVSRTBcbn1cblxucHJvdG8uZGlzcG9zZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmdsLmRlbGV0ZVRleHR1cmUodGhpcy5oYW5kbGUpXG59XG5cbnByb3RvLmdlbmVyYXRlTWlwbWFwID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuYmluZCgpXG4gIHRoaXMuZ2wuZ2VuZXJhdGVNaXBtYXAodGhpcy5nbC5URVhUVVJFXzJEKVxuXG4gIC8vVXBkYXRlIG1pcCBsZXZlbHNcbiAgdmFyIGwgPSBNYXRoLm1pbih0aGlzLl9zaGFwZVswXSwgdGhpcy5fc2hhcGVbMV0pXG4gIGZvcih2YXIgaT0wOyBsPjA7ICsraSwgbD4+Pj0xKSB7XG4gICAgaWYodGhpcy5fbWlwTGV2ZWxzLmluZGV4T2YoaSkgPCAwKSB7XG4gICAgICB0aGlzLl9taXBMZXZlbHMucHVzaChpKVxuICAgIH1cbiAgfVxufVxuXG5wcm90by5zZXRQaXhlbHMgPSBmdW5jdGlvbihkYXRhLCB4X29mZiwgeV9vZmYsIG1pcF9sZXZlbCkge1xuICB2YXIgZ2wgPSB0aGlzLmdsXG4gIHRoaXMuYmluZCgpXG4gIGlmKEFycmF5LmlzQXJyYXkoeF9vZmYpKSB7XG4gICAgbWlwX2xldmVsID0geV9vZmZcbiAgICB5X29mZiA9IHhfb2ZmWzFdfDBcbiAgICB4X29mZiA9IHhfb2ZmWzBdfDBcbiAgfSBlbHNlIHtcbiAgICB4X29mZiA9IHhfb2ZmIHx8IDBcbiAgICB5X29mZiA9IHlfb2ZmIHx8IDBcbiAgfVxuICBtaXBfbGV2ZWwgPSBtaXBfbGV2ZWwgfHwgMFxuICB2YXIgZGlyZWN0RGF0YSA9IGFjY2VwdFRleHR1cmVET00oZGF0YSkgPyBkYXRhIDogZGF0YS5yYXdcbiAgaWYoZGlyZWN0RGF0YSkge1xuICAgIHZhciBuZWVkc01pcCA9IHRoaXMuX21pcExldmVscy5pbmRleE9mKG1pcF9sZXZlbCkgPCAwXG4gICAgaWYobmVlZHNNaXApIHtcbiAgICAgIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgMCwgdGhpcy5mb3JtYXQsIHRoaXMuZm9ybWF0LCB0aGlzLnR5cGUsIGRpcmVjdERhdGEpXG4gICAgICB0aGlzLl9taXBMZXZlbHMucHVzaChtaXBfbGV2ZWwpXG4gICAgfSBlbHNlIHtcbiAgICAgIGdsLnRleFN1YkltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgbWlwX2xldmVsLCB4X29mZiwgeV9vZmYsIHRoaXMuZm9ybWF0LCB0aGlzLnR5cGUsIGRpcmVjdERhdGEpXG4gICAgfVxuICB9IGVsc2UgaWYoZGF0YS5zaGFwZSAmJiBkYXRhLnN0cmlkZSAmJiBkYXRhLmRhdGEpIHtcbiAgICBpZihkYXRhLnNoYXBlLmxlbmd0aCA8IDIgfHxcbiAgICAgICB4X29mZiArIGRhdGEuc2hhcGVbMV0gPiB0aGlzLl9zaGFwZVsxXT4+Pm1pcF9sZXZlbCB8fFxuICAgICAgIHlfb2ZmICsgZGF0YS5zaGFwZVswXSA+IHRoaXMuX3NoYXBlWzBdPj4+bWlwX2xldmVsIHx8XG4gICAgICAgeF9vZmYgPCAwIHx8XG4gICAgICAgeV9vZmYgPCAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXRleHR1cmUyZDogVGV4dHVyZSBkaW1lbnNpb25zIGFyZSBvdXQgb2YgYm91bmRzJylcbiAgICB9XG4gICAgdGV4U3ViSW1hZ2VBcnJheShnbCwgeF9vZmYsIHlfb2ZmLCBtaXBfbGV2ZWwsIHRoaXMuZm9ybWF0LCB0aGlzLnR5cGUsIHRoaXMuX21pcExldmVscywgZGF0YSlcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXRleHR1cmUyZDogVW5zdXBwb3J0ZWQgZGF0YSB0eXBlJylcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIGlzUGFja2VkKHNoYXBlLCBzdHJpZGUpIHtcbiAgaWYoc2hhcGUubGVuZ3RoID09PSAzKSB7XG4gICAgcmV0dXJuICAoc3RyaWRlWzJdID09PSAxKSAmJlxuICAgICAgICAgICAgKHN0cmlkZVsxXSA9PT0gc2hhcGVbMF0qc2hhcGVbMl0pICYmXG4gICAgICAgICAgICAoc3RyaWRlWzBdID09PSBzaGFwZVsyXSlcbiAgfVxuICByZXR1cm4gIChzdHJpZGVbMF0gPT09IDEpICYmXG4gICAgICAgICAgKHN0cmlkZVsxXSA9PT0gc2hhcGVbMF0pXG59XG5cbmZ1bmN0aW9uIHRleFN1YkltYWdlQXJyYXkoZ2wsIHhfb2ZmLCB5X29mZiwgbWlwX2xldmVsLCBjZm9ybWF0LCBjdHlwZSwgbWlwTGV2ZWxzLCBhcnJheSkge1xuICB2YXIgZHR5cGUgPSBhcnJheS5kdHlwZVxuICB2YXIgc2hhcGUgPSBhcnJheS5zaGFwZS5zbGljZSgpXG4gIGlmKHNoYXBlLmxlbmd0aCA8IDIgfHwgc2hhcGUubGVuZ3RoID4gMykge1xuICAgIHRocm93IG5ldyBFcnJvcignZ2wtdGV4dHVyZTJkOiBJbnZhbGlkIG5kYXJyYXksIG11c3QgYmUgMmQgb3IgM2QnKVxuICB9XG4gIHZhciB0eXBlID0gMCwgZm9ybWF0ID0gMFxuICB2YXIgcGFja2VkID0gaXNQYWNrZWQoc2hhcGUsIGFycmF5LnN0cmlkZS5zbGljZSgpKVxuICBpZihkdHlwZSA9PT0gJ2Zsb2F0MzInKSB7XG4gICAgdHlwZSA9IGdsLkZMT0FUXG4gIH0gZWxzZSBpZihkdHlwZSA9PT0gJ2Zsb2F0NjQnKSB7XG4gICAgdHlwZSA9IGdsLkZMT0FUXG4gICAgcGFja2VkID0gZmFsc2VcbiAgICBkdHlwZSA9ICdmbG9hdDMyJ1xuICB9IGVsc2UgaWYoZHR5cGUgPT09ICd1aW50OCcpIHtcbiAgICB0eXBlID0gZ2wuVU5TSUdORURfQllURVxuICB9IGVsc2Uge1xuICAgIHR5cGUgPSBnbC5VTlNJR05FRF9CWVRFXG4gICAgcGFja2VkID0gZmFsc2VcbiAgICBkdHlwZSA9ICd1aW50OCdcbiAgfVxuICB2YXIgY2hhbm5lbHMgPSAxXG4gIGlmKHNoYXBlLmxlbmd0aCA9PT0gMikge1xuICAgIGZvcm1hdCA9IGdsLkxVTUlOQU5DRVxuICAgIHNoYXBlID0gW3NoYXBlWzBdLCBzaGFwZVsxXSwgMV1cbiAgICBhcnJheSA9IG5kYXJyYXkoYXJyYXkuZGF0YSwgc2hhcGUsIFthcnJheS5zdHJpZGVbMF0sIGFycmF5LnN0cmlkZVsxXSwgMV0sIGFycmF5Lm9mZnNldClcbiAgfSBlbHNlIGlmKHNoYXBlLmxlbmd0aCA9PT0gMykge1xuICAgIGlmKHNoYXBlWzJdID09PSAxKSB7XG4gICAgICBmb3JtYXQgPSBnbC5BTFBIQVxuICAgIH0gZWxzZSBpZihzaGFwZVsyXSA9PT0gMikge1xuICAgICAgZm9ybWF0ID0gZ2wuTFVNSU5BTkNFX0FMUEhBXG4gICAgfSBlbHNlIGlmKHNoYXBlWzJdID09PSAzKSB7XG4gICAgICBmb3JtYXQgPSBnbC5SR0JcbiAgICB9IGVsc2UgaWYoc2hhcGVbMl0gPT09IDQpIHtcbiAgICAgIGZvcm1hdCA9IGdsLlJHQkFcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdnbC10ZXh0dXJlMmQ6IEludmFsaWQgc2hhcGUgZm9yIHBpeGVsIGNvb3JkcycpXG4gICAgfVxuICAgIGNoYW5uZWxzID0gc2hhcGVbMl1cbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXRleHR1cmUyZDogSW52YWxpZCBzaGFwZSBmb3IgdGV4dHVyZScpXG4gIH1cbiAgLy9Gb3IgMS1jaGFubmVsIHRleHR1cmVzIGFsbG93IGNvbnZlcnNpb24gYmV0d2VlbiBmb3JtYXRzXG4gIGlmKChmb3JtYXQgID09PSBnbC5MVU1JTkFOQ0UgfHwgZm9ybWF0ICA9PT0gZ2wuQUxQSEEpICYmXG4gICAgIChjZm9ybWF0ID09PSBnbC5MVU1JTkFOQ0UgfHwgY2Zvcm1hdCA9PT0gZ2wuQUxQSEEpKSB7XG4gICAgZm9ybWF0ID0gY2Zvcm1hdFxuICB9XG4gIGlmKGZvcm1hdCAhPT0gY2Zvcm1hdCkge1xuICAgIHRocm93IG5ldyBFcnJvcignZ2wtdGV4dHVyZTJkOiBJbmNvbXBhdGlibGUgdGV4dHVyZSBmb3JtYXQgZm9yIHNldFBpeGVscycpXG4gIH1cbiAgdmFyIHNpemUgPSBhcnJheS5zaXplXG4gIHZhciBuZWVkc01pcCA9IG1pcExldmVscy5pbmRleE9mKG1pcF9sZXZlbCkgPCAwXG4gIGlmKG5lZWRzTWlwKSB7XG4gICAgbWlwTGV2ZWxzLnB1c2gobWlwX2xldmVsKVxuICB9XG4gIGlmKHR5cGUgPT09IGN0eXBlICYmIHBhY2tlZCkge1xuICAgIC8vQXJyYXkgZGF0YSB0eXBlcyBhcmUgY29tcGF0aWJsZSwgY2FuIGRpcmVjdGx5IGNvcHkgaW50byB0ZXh0dXJlXG4gICAgaWYoYXJyYXkub2Zmc2V0ID09PSAwICYmIGFycmF5LmRhdGEubGVuZ3RoID09PSBzaXplKSB7XG4gICAgICBpZihuZWVkc01pcCkge1xuICAgICAgICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIG1pcF9sZXZlbCwgY2Zvcm1hdCwgc2hhcGVbMF0sIHNoYXBlWzFdLCAwLCBjZm9ybWF0LCBjdHlwZSwgYXJyYXkuZGF0YSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdsLnRleFN1YkltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgbWlwX2xldmVsLCB4X29mZiwgeV9vZmYsIHNoYXBlWzBdLCBzaGFwZVsxXSwgY2Zvcm1hdCwgY3R5cGUsIGFycmF5LmRhdGEpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKG5lZWRzTWlwKSB7XG4gICAgICAgIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgbWlwX2xldmVsLCBjZm9ybWF0LCBzaGFwZVswXSwgc2hhcGVbMV0sIDAsIGNmb3JtYXQsIGN0eXBlLCBhcnJheS5kYXRhLnN1YmFycmF5KGFycmF5Lm9mZnNldCwgYXJyYXkub2Zmc2V0K3NpemUpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ2wudGV4U3ViSW1hZ2UyRChnbC5URVhUVVJFXzJELCBtaXBfbGV2ZWwsIHhfb2ZmLCB5X29mZiwgc2hhcGVbMF0sIHNoYXBlWzFdLCBjZm9ybWF0LCBjdHlwZSwgYXJyYXkuZGF0YS5zdWJhcnJheShhcnJheS5vZmZzZXQsIGFycmF5Lm9mZnNldCtzaXplKSlcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy9OZWVkIHRvIGRvIHR5cGUgY29udmVyc2lvbiB0byBwYWNrIGRhdGEgaW50byBidWZmZXJcbiAgICB2YXIgcGFja19idWZmZXJcbiAgICBpZihjdHlwZSA9PT0gZ2wuRkxPQVQpIHtcbiAgICAgIHBhY2tfYnVmZmVyID0gcG9vbC5tYWxsb2NGbG9hdDMyKHNpemUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHBhY2tfYnVmZmVyID0gcG9vbC5tYWxsb2NVaW50OChzaXplKVxuICAgIH1cbiAgICB2YXIgcGFja192aWV3ID0gbmRhcnJheShwYWNrX2J1ZmZlciwgc2hhcGUsIFtzaGFwZVsyXSwgc2hhcGVbMl0qc2hhcGVbMF0sIDFdKVxuICAgIGlmKHR5cGUgPT09IGdsLkZMT0FUICYmIGN0eXBlID09PSBnbC5VTlNJR05FRF9CWVRFKSB7XG4gICAgICBjb252ZXJ0RmxvYXRUb1VpbnQ4KHBhY2tfdmlldywgYXJyYXkpXG4gICAgfSBlbHNlIHtcbiAgICAgIG9wcy5hc3NpZ24ocGFja192aWV3LCBhcnJheSlcbiAgICB9XG4gICAgaWYobmVlZHNNaXApIHtcbiAgICAgIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgbWlwX2xldmVsLCBjZm9ybWF0LCBzaGFwZVswXSwgc2hhcGVbMV0sIDAsIGNmb3JtYXQsIGN0eXBlLCBwYWNrX2J1ZmZlci5zdWJhcnJheSgwLCBzaXplKSlcbiAgICB9IGVsc2Uge1xuICAgICAgZ2wudGV4U3ViSW1hZ2UyRChnbC5URVhUVVJFXzJELCBtaXBfbGV2ZWwsIHhfb2ZmLCB5X29mZiwgc2hhcGVbMF0sIHNoYXBlWzFdLCBjZm9ybWF0LCBjdHlwZSwgcGFja19idWZmZXIuc3ViYXJyYXkoMCwgc2l6ZSkpXG4gICAgfVxuICAgIGlmKGN0eXBlID09PSBnbC5GTE9BVCkge1xuICAgICAgcG9vbC5mcmVlRmxvYXQzMihwYWNrX2J1ZmZlcilcbiAgICB9IGVsc2Uge1xuICAgICAgcG9vbC5mcmVlVWludDgocGFja19idWZmZXIpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRUZXh0dXJlKGdsKSB7XG4gIHZhciB0ZXggPSBnbC5jcmVhdGVUZXh0dXJlKClcbiAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGV4KVxuICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZ2wuTkVBUkVTVClcbiAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01BR19GSUxURVIsIGdsLk5FQVJFU1QpXG4gIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1MsIGdsLkNMQU1QX1RPX0VER0UpXG4gIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1QsIGdsLkNMQU1QX1RPX0VER0UpXG4gIHJldHVybiB0ZXhcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGV4dHVyZVNoYXBlKGdsLCB3aWR0aCwgaGVpZ2h0LCBmb3JtYXQsIHR5cGUpIHtcbiAgdmFyIG1heFRleHR1cmVTaXplID0gZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9URVhUVVJFX1NJWkUpXG4gIGlmKHdpZHRoIDwgMCB8fCB3aWR0aCA+IG1heFRleHR1cmVTaXplIHx8IGhlaWdodCA8IDAgfHwgaGVpZ2h0ICA+IG1heFRleHR1cmVTaXplKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdnbC10ZXh0dXJlMmQ6IEludmFsaWQgdGV4dHVyZSBzaGFwZScpXG4gIH1cbiAgaWYodHlwZSA9PT0gZ2wuRkxPQVQgJiYgIWdsLmdldEV4dGVuc2lvbignT0VTX3RleHR1cmVfZmxvYXQnKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignZ2wtdGV4dHVyZTJkOiBGbG9hdGluZyBwb2ludCB0ZXh0dXJlcyBub3Qgc3VwcG9ydGVkIG9uIHRoaXMgcGxhdGZvcm0nKVxuICB9XG4gIHZhciB0ZXggPSBpbml0VGV4dHVyZShnbClcbiAgZ2wudGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCAwLCBmb3JtYXQsIHdpZHRoLCBoZWlnaHQsIDAsIGZvcm1hdCwgdHlwZSwgbnVsbClcbiAgcmV0dXJuIG5ldyBUZXh0dXJlMkQoZ2wsIHRleCwgd2lkdGgsIGhlaWdodCwgZm9ybWF0LCB0eXBlKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVUZXh0dXJlRE9NKGdsLCBkaXJlY3REYXRhLCB3aWR0aCwgaGVpZ2h0LCBmb3JtYXQsIHR5cGUpIHtcbiAgdmFyIHRleCA9IGluaXRUZXh0dXJlKGdsKVxuICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIDAsIGZvcm1hdCwgZm9ybWF0LCB0eXBlLCBkaXJlY3REYXRhKVxuICByZXR1cm4gbmV3IFRleHR1cmUyRChnbCwgdGV4LCB3aWR0aCwgaGVpZ2h0LCBmb3JtYXQsIHR5cGUpXG59XG5cbi8vQ3JlYXRlcyBhIHRleHR1cmUgZnJvbSBhbiBuZGFycmF5XG5mdW5jdGlvbiBjcmVhdGVUZXh0dXJlQXJyYXkoZ2wsIGFycmF5KSB7XG4gIHZhciBkdHlwZSA9IGFycmF5LmR0eXBlXG4gIHZhciBzaGFwZSA9IGFycmF5LnNoYXBlLnNsaWNlKClcbiAgdmFyIG1heFNpemUgPSBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX1RFWFRVUkVfU0laRSlcbiAgaWYoc2hhcGVbMF0gPCAwIHx8IHNoYXBlWzBdID4gbWF4U2l6ZSB8fCBzaGFwZVsxXSA8IDAgfHwgc2hhcGVbMV0gPiBtYXhTaXplKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdnbC10ZXh0dXJlMmQ6IEludmFsaWQgdGV4dHVyZSBzaXplJylcbiAgfVxuICB2YXIgcGFja2VkID0gaXNQYWNrZWQoc2hhcGUsIGFycmF5LnN0cmlkZS5zbGljZSgpKVxuICB2YXIgdHlwZSA9IDBcbiAgaWYoZHR5cGUgPT09ICdmbG9hdDMyJykge1xuICAgIHR5cGUgPSBnbC5GTE9BVFxuICB9IGVsc2UgaWYoZHR5cGUgPT09ICdmbG9hdDY0Jykge1xuICAgIHR5cGUgPSBnbC5GTE9BVFxuICAgIHBhY2tlZCA9IGZhbHNlXG4gICAgZHR5cGUgPSAnZmxvYXQzMidcbiAgfSBlbHNlIGlmKGR0eXBlID09PSAndWludDgnKSB7XG4gICAgdHlwZSA9IGdsLlVOU0lHTkVEX0JZVEVcbiAgfSBlbHNlIHtcbiAgICB0eXBlID0gZ2wuVU5TSUdORURfQllURVxuICAgIHBhY2tlZCA9IGZhbHNlXG4gICAgZHR5cGUgPSAndWludDgnXG4gIH1cbiAgdmFyIGZvcm1hdCA9IDBcbiAgaWYoc2hhcGUubGVuZ3RoID09PSAyKSB7XG4gICAgZm9ybWF0ID0gZ2wuTFVNSU5BTkNFXG4gICAgc2hhcGUgPSBbc2hhcGVbMF0sIHNoYXBlWzFdLCAxXVxuICAgIGFycmF5ID0gbmRhcnJheShhcnJheS5kYXRhLCBzaGFwZSwgW2FycmF5LnN0cmlkZVswXSwgYXJyYXkuc3RyaWRlWzFdLCAxXSwgYXJyYXkub2Zmc2V0KVxuICB9IGVsc2UgaWYoc2hhcGUubGVuZ3RoID09PSAzKSB7XG4gICAgaWYoc2hhcGVbMl0gPT09IDEpIHtcbiAgICAgIGZvcm1hdCA9IGdsLkFMUEhBXG4gICAgfSBlbHNlIGlmKHNoYXBlWzJdID09PSAyKSB7XG4gICAgICBmb3JtYXQgPSBnbC5MVU1JTkFOQ0VfQUxQSEFcbiAgICB9IGVsc2UgaWYoc2hhcGVbMl0gPT09IDMpIHtcbiAgICAgIGZvcm1hdCA9IGdsLlJHQlxuICAgIH0gZWxzZSBpZihzaGFwZVsyXSA9PT0gNCkge1xuICAgICAgZm9ybWF0ID0gZ2wuUkdCQVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXRleHR1cmUyZDogSW52YWxpZCBzaGFwZSBmb3IgcGl4ZWwgY29vcmRzJylcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdnbC10ZXh0dXJlMmQ6IEludmFsaWQgc2hhcGUgZm9yIHRleHR1cmUnKVxuICB9XG4gIGlmKHR5cGUgPT09IGdsLkZMT0FUICYmICFnbC5nZXRFeHRlbnNpb24oJ09FU190ZXh0dXJlX2Zsb2F0JykpIHtcbiAgICB0eXBlID0gZ2wuVU5TSUdORURfQllURVxuICAgIHBhY2tlZCA9IGZhbHNlXG4gIH1cbiAgdmFyIGJ1ZmZlciwgYnVmX3N0b3JlXG4gIHZhciBzaXplID0gYXJyYXkuc2l6ZVxuICBpZighcGFja2VkKSB7XG4gICAgdmFyIHN0cmlkZSA9IFtzaGFwZVsyXSwgc2hhcGVbMl0qc2hhcGVbMF0sIDFdXG4gICAgYnVmX3N0b3JlID0gcG9vbC5tYWxsb2Moc2l6ZSwgZHR5cGUpXG4gICAgdmFyIGJ1Zl9hcnJheSA9IG5kYXJyYXkoYnVmX3N0b3JlLCBzaGFwZSwgc3RyaWRlLCAwKVxuICAgIGlmKChkdHlwZSA9PT0gJ2Zsb2F0MzInIHx8IGR0eXBlID09PSAnZmxvYXQ2NCcpICYmIHR5cGUgPT09IGdsLlVOU0lHTkVEX0JZVEUpIHtcbiAgICAgIGNvbnZlcnRGbG9hdFRvVWludDgoYnVmX2FycmF5LCBhcnJheSlcbiAgICB9IGVsc2Uge1xuICAgICAgb3BzLmFzc2lnbihidWZfYXJyYXksIGFycmF5KVxuICAgIH1cbiAgICBidWZmZXIgPSBidWZfc3RvcmUuc3ViYXJyYXkoMCwgc2l6ZSlcbiAgfSBlbHNlIGlmIChhcnJheS5vZmZzZXQgPT09IDAgJiYgYXJyYXkuZGF0YS5sZW5ndGggPT09IHNpemUpIHtcbiAgICBidWZmZXIgPSBhcnJheS5kYXRhXG4gIH0gZWxzZSB7XG4gICAgYnVmZmVyID0gYXJyYXkuZGF0YS5zdWJhcnJheShhcnJheS5vZmZzZXQsIGFycmF5Lm9mZnNldCArIHNpemUpXG4gIH1cbiAgdmFyIHRleCA9IGluaXRUZXh0dXJlKGdsKVxuICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIDAsIGZvcm1hdCwgc2hhcGVbMF0sIHNoYXBlWzFdLCAwLCBmb3JtYXQsIHR5cGUsIGJ1ZmZlcilcbiAgaWYoIXBhY2tlZCkge1xuICAgIHBvb2wuZnJlZShidWZfc3RvcmUpXG4gIH1cbiAgcmV0dXJuIG5ldyBUZXh0dXJlMkQoZ2wsIHRleCwgc2hhcGVbMF0sIHNoYXBlWzFdLCBmb3JtYXQsIHR5cGUpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRleHR1cmUyRChnbCkge1xuICBpZihhcmd1bWVudHMubGVuZ3RoIDw9IDEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXRleHR1cmUyZDogTWlzc2luZyBhcmd1bWVudHMgZm9yIHRleHR1cmUyZCBjb25zdHJ1Y3RvcicpXG4gIH1cbiAgaWYoIWxpbmVhclR5cGVzKSB7XG4gICAgbGF6eUluaXRMaW5lYXJUeXBlcyhnbClcbiAgfVxuICBpZih0eXBlb2YgYXJndW1lbnRzWzFdID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBjcmVhdGVUZXh0dXJlU2hhcGUoZ2wsIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdLCBhcmd1bWVudHNbM118fGdsLlJHQkEsIGFyZ3VtZW50c1s0XXx8Z2wuVU5TSUdORURfQllURSlcbiAgfVxuICBpZihBcnJheS5pc0FycmF5KGFyZ3VtZW50c1sxXSkpIHtcbiAgICByZXR1cm4gY3JlYXRlVGV4dHVyZVNoYXBlKGdsLCBhcmd1bWVudHNbMV1bMF18MCwgYXJndW1lbnRzWzFdWzFdfDAsIGFyZ3VtZW50c1syXXx8Z2wuUkdCQSwgYXJndW1lbnRzWzNdfHxnbC5VTlNJR05FRF9CWVRFKVxuICB9XG4gIGlmKHR5cGVvZiBhcmd1bWVudHNbMV0gPT09ICdvYmplY3QnKSB7XG4gICAgdmFyIG9iaiA9IGFyZ3VtZW50c1sxXVxuICAgIHZhciBkaXJlY3REYXRhID0gYWNjZXB0VGV4dHVyZURPTShvYmopID8gb2JqIDogb2JqLnJhd1xuICAgIGlmIChkaXJlY3REYXRhKSB7XG4gICAgICByZXR1cm4gY3JlYXRlVGV4dHVyZURPTShnbCwgZGlyZWN0RGF0YSwgb2JqLndpZHRofDAsIG9iai5oZWlnaHR8MCwgYXJndW1lbnRzWzJdfHxnbC5SR0JBLCBhcmd1bWVudHNbM118fGdsLlVOU0lHTkVEX0JZVEUpXG4gICAgfSBlbHNlIGlmKG9iai5zaGFwZSAmJiBvYmouZGF0YSAmJiBvYmouc3RyaWRlKSB7XG4gICAgICByZXR1cm4gY3JlYXRlVGV4dHVyZUFycmF5KGdsLCBvYmopXG4gICAgfVxuICB9XG4gIHRocm93IG5ldyBFcnJvcignZ2wtdGV4dHVyZTJkOiBJbnZhbGlkIGFyZ3VtZW50cyBmb3IgdGV4dHVyZTJkIGNvbnN0cnVjdG9yJylcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2dsU2hhZGVyID0gcmVxdWlyZShcImdsLXNoYWRlclwiKTtcblxudmFyIF9nbFNoYWRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nbFNoYWRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBWRVJUID0gXCJhdHRyaWJ1dGUgdmVjMiBfcDtcXG52YXJ5aW5nIHZlYzIgX3V2O1xcbnZvaWQgbWFpbigpIHtcXG5nbF9Qb3NpdGlvbiA9IHZlYzQoX3AsMC4wLDEuMCk7XFxuX3V2ID0gdmVjMigwLjUsIDAuNSkgKiAoX3ArdmVjMigxLjAsIDEuMCkpO1xcbn1cIjtcblxuLy8gdGhlc2UgZnVuY3Rpb25zIG1ha2UgYSBHTFNMIGNvZGUgdGhhdCBtYXAgdGhlIHRleHR1cmUyRCB1diB0byBwcmVzZXJ2ZSByYXRpbyBmb3IgYSBnaXZlbiAke3J9IGltYWdlIHJhdGlvLlxuLy8gdGhlcmUgYXJlIGRpZmZlcmVudCBtb2RlczpcbnZhciByZXNpemVNb2RlcyA9IHtcbiAgY292ZXI6IGZ1bmN0aW9uIGNvdmVyKHIpIHtcbiAgICByZXR1cm4gXCIuNSsodXYtLjUpKnZlYzIobWluKHJhdGlvL1wiICsgciArIFwiLDEuKSxtaW4oXCIgKyByICsgXCIvcmF0aW8sMS4pKVwiO1xuICB9LFxuICBjb250YWluOiBmdW5jdGlvbiBjb250YWluKHIpIHtcbiAgICByZXR1cm4gXCIuNSsodXYtLjUpKnZlYzIobWF4KHJhdGlvL1wiICsgciArIFwiLDEuKSxtYXgoXCIgKyByICsgXCIvcmF0aW8sMS4pKVwiO1xuICB9LFxuICBzdHJldGNoOiBmdW5jdGlvbiBzdHJldGNoKCkge1xuICAgIHJldHVybiBcInV2XCI7XG4gIH1cbn07XG5cbnZhciBtYWtlRnJhZyA9IGZ1bmN0aW9uIG1ha2VGcmFnKHRyYW5zaXRpb25HbHNsLCByZXNpemVNb2RlKSB7XG4gIHZhciByID0gcmVzaXplTW9kZXNbcmVzaXplTW9kZV07XG4gIGlmICghcikgdGhyb3cgbmV3IEVycm9yKFwiaW52YWxpZCByZXNpemVNb2RlPVwiICsgcmVzaXplTW9kZSk7XG4gIHJldHVybiBcInByZWNpc2lvbiBoaWdocCBmbG9hdDt2YXJ5aW5nIHZlYzIgX3V2O3VuaWZvcm0gc2FtcGxlcjJEIGZyb20sIHRvO3VuaWZvcm0gZmxvYXQgcHJvZ3Jlc3MsIHJhdGlvLCBfZnJvbVIsIF90b1I7dmVjNCBnZXRGcm9tQ29sb3IodmVjMiB1dil7cmV0dXJuIHRleHR1cmUyRChmcm9tLFwiICsgcihcIl9mcm9tUlwiKSArIFwiKTt9dmVjNCBnZXRUb0NvbG9yKHZlYzIgdXYpe3JldHVybiB0ZXh0dXJlMkQodG8sXCIgKyByKFwiX3RvUlwiKSArIFwiKTt9XFxuXCIgKyB0cmFuc2l0aW9uR2xzbCArIFwiXFxudm9pZCBtYWluKCl7Z2xfRnJhZ0NvbG9yPXRyYW5zaXRpb24oX3V2KTt9XCI7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZ2wsIHRyYW5zaXRpb24pIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuXG4gIHZhciBfcmVzaXplTW9kZSRvcHRpb25zID0gX2V4dGVuZHMoeyByZXNpemVNb2RlOiBcImNvdmVyXCIgfSwgb3B0aW9ucyksXG4gICAgICByZXNpemVNb2RlID0gX3Jlc2l6ZU1vZGUkb3B0aW9ucy5yZXNpemVNb2RlO1xuXG4gIHZhciBzaGFkZXIgPSAoMCwgX2dsU2hhZGVyMi5kZWZhdWx0KShnbCwgVkVSVCwgbWFrZUZyYWcodHJhbnNpdGlvbi5nbHNsLCByZXNpemVNb2RlKSk7XG4gIHNoYWRlci5iaW5kKCk7XG4gIHNoYWRlci5hdHRyaWJ1dGVzLl9wLnBvaW50ZXIoKTtcblxuICByZXR1cm4ge1xuICAgIGRyYXc6IGZ1bmN0aW9uIGRyYXcocHJvZ3Jlc3MsIGZyb20sIHRvKSB7XG4gICAgICB2YXIgd2lkdGggPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IGdsLmRyYXdpbmdCdWZmZXJXaWR0aDtcbiAgICAgIHZhciBoZWlnaHQgPSBhcmd1bWVudHMubGVuZ3RoID4gNCAmJiBhcmd1bWVudHNbNF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s0XSA6IGdsLmRyYXdpbmdCdWZmZXJIZWlnaHQ7XG4gICAgICB2YXIgcGFyYW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDUgJiYgYXJndW1lbnRzWzVdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNV0gOiB7fTtcblxuICAgICAgc2hhZGVyLmJpbmQoKTtcbiAgICAgIHNoYWRlci51bmlmb3Jtcy5yYXRpbyA9IHdpZHRoIC8gaGVpZ2h0O1xuICAgICAgc2hhZGVyLnVuaWZvcm1zLnByb2dyZXNzID0gcHJvZ3Jlc3M7XG4gICAgICBzaGFkZXIudW5pZm9ybXMuZnJvbSA9IGZyb20uYmluZCgwKTtcbiAgICAgIHNoYWRlci51bmlmb3Jtcy50byA9IHRvLmJpbmQoMSk7XG4gICAgICBzaGFkZXIudW5pZm9ybXMuX2Zyb21SID0gZnJvbS5zaGFwZVswXSAvIGZyb20uc2hhcGVbMV07XG4gICAgICBzaGFkZXIudW5pZm9ybXMuX3RvUiA9IHRvLnNoYXBlWzBdIC8gdG8uc2hhcGVbMV07XG4gICAgICB2YXIgdW5pdCA9IDI7XG4gICAgICBmb3IgKHZhciBfa2V5IGluIHRyYW5zaXRpb24ucGFyYW1zVHlwZXMpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gX2tleSBpbiBwYXJhbXMgPyBwYXJhbXNbX2tleV0gOiB0cmFuc2l0aW9uLmRlZmF1bHRQYXJhbXNbX2tleV07XG4gICAgICAgIGlmICh0cmFuc2l0aW9uLnBhcmFtc1R5cGVzW19rZXldID09PSBcInNhbXBsZXIyRFwiKSB7XG4gICAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwidW5pZm9ybVtcIiArIF9rZXkgKyBcIl06IEEgdGV4dHVyZSBNVVNUIGJlIGRlZmluZWQgZm9yIHVuaWZvcm0gc2FtcGxlcjJEIG9mIGEgdGV4dHVyZVwiKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZS5iaW5kICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInVuaWZvcm1bXCIgKyBfa2V5ICsgXCJdOiBBIGdsLXRleHR1cmUyZCBBUEktbGlrZSBvYmplY3Qgd2FzIGV4cGVjdGVkXCIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaGFkZXIudW5pZm9ybXNbX2tleV0gPSB2YWx1ZS5iaW5kKHVuaXQrKyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNoYWRlci51bmlmb3Jtc1tfa2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBnbC5kcmF3QXJyYXlzKGdsLlRSSUFOR0xFUywgMCwgMyk7XG4gICAgfSxcbiAgICBkaXNwb3NlOiBmdW5jdGlvbiBkaXNwb3NlKCkge1xuICAgICAgc2hhZGVyLmRpc3Bvc2UoKTtcbiAgICB9XG4gIH07XG59OyIsIm1vZHVsZS5leHBvcnRzPVxuW3tcIm5hbWVcIjpcIkJvdW5jZVwiLFwicGFyYW1zVHlwZXNcIjp7XCJzaGFkb3dfY29sb3VyXCI6XCJ2ZWM0XCIsXCJzaGFkb3dfaGVpZ2h0XCI6XCJmbG9hdFwiLFwiYm91bmNlc1wiOlwiZmxvYXRcIn0sXCJkZWZhdWx0UGFyYW1zXCI6e1wic2hhZG93X2NvbG91clwiOlswLDAsMCwwLjZdLFwic2hhZG93X2hlaWdodFwiOjAuMDc1LFwiYm91bmNlc1wiOjN9LFwiZ2xzbFwiOlwiLy8gQXV0aG9yOiBBZHJpYW4gUHVyc2VyXFxuLy8gTGljZW5zZTogTUlUXFxuXFxudW5pZm9ybSB2ZWM0IHNoYWRvd19jb2xvdXI7IC8vID0gdmVjNCgwLiwwLiwwLiwuNilcXG51bmlmb3JtIGZsb2F0IHNoYWRvd19oZWlnaHQ7IC8vID0gMC4wNzVcXG51bmlmb3JtIGZsb2F0IGJvdW5jZXM7IC8vID0gMy4wXFxuXFxuY29uc3QgZmxvYXQgUEkgPSAzLjE0MTU5MjY1MzU4O1xcblxcbnZlYzQgdHJhbnNpdGlvbiAodmVjMiB1dikge1xcbiAgZmxvYXQgdGltZSA9IHByb2dyZXNzO1xcbiAgZmxvYXQgc3RpbWUgPSBzaW4odGltZSAqIFBJIC8gMi4pO1xcbiAgZmxvYXQgcGhhc2UgPSB0aW1lICogUEkgKiBib3VuY2VzO1xcbiAgZmxvYXQgeSA9IChhYnMoY29zKHBoYXNlKSkpICogKDEuMCAtIHN0aW1lKTtcXG4gIGZsb2F0IGQgPSB1di55IC0geTtcXG4gIHJldHVybiBtaXgoXFxuICAgIG1peChcXG4gICAgICBnZXRUb0NvbG9yKHV2KSxcXG4gICAgICBzaGFkb3dfY29sb3VyLFxcbiAgICAgIHN0ZXAoZCwgc2hhZG93X2hlaWdodCkgKiAoMS4gLSBtaXgoXFxuICAgICAgICAoKGQgLyBzaGFkb3dfaGVpZ2h0KSAqIHNoYWRvd19jb2xvdXIuYSkgKyAoMS4wIC0gc2hhZG93X2NvbG91ci5hKSxcXG4gICAgICAgIDEuMCxcXG4gICAgICAgIHNtb290aHN0ZXAoMC45NSwgMS4sIHByb2dyZXNzKSAvLyBmYWRlLW91dCB0aGUgc2hhZG93IGF0IHRoZSBlbmRcXG4gICAgICApKVxcbiAgICApLFxcbiAgICBnZXRGcm9tQ29sb3IodmVjMih1di54LCB1di55ICsgKDEuMCAtIHkpKSksXFxuICAgIHN0ZXAoZCwgMC4wKVxcbiAgKTtcXG59XFxuXCIsXCJhdXRob3JcIjpcIkFkcmlhbiBQdXJzZXJcIixcImxpY2Vuc2VcIjpcIk1JVFwiLFwiY3JlYXRlZEF0XCI6XCJGcmksIDEwIE5vdiAyMDE3IDE3OjAxOjQ1ICswMDAwXCIsXCJ1cGRhdGVkQXRcIjpcIlNhdCwgMTEgTm92IDIwMTcgMDg6NTA6NDAgKzAxMDBcIn0se1wibmFtZVwiOlwiQm93VGllSG9yaXpvbnRhbFwiLFwicGFyYW1zVHlwZXNcIjp7fSxcImRlZmF1bHRQYXJhbXNcIjp7fSxcImdsc2xcIjpcIi8vIEF1dGhvcjogaHV5bnhcXG4vLyBMaWNlbnNlOiBNSVRcXG5cXG52ZWMyIGJvdHRvbV9sZWZ0ID0gdmVjMigwLjAsIDEuMCk7XFxudmVjMiBib3R0b21fcmlnaHQgPSB2ZWMyKDEuMCwgMS4wKTtcXG52ZWMyIHRvcF9sZWZ0ID0gdmVjMigwLjAsIDAuMCk7XFxudmVjMiB0b3BfcmlnaHQgPSB2ZWMyKDEuMCwgMC4wKTtcXG52ZWMyIGNlbnRlciA9IHZlYzIoMC41LCAwLjUpO1xcblxcbmZsb2F0IGNoZWNrKHZlYzIgcDEsIHZlYzIgcDIsIHZlYzIgcDMpXFxue1xcbiAgcmV0dXJuIChwMS54IC0gcDMueCkgKiAocDIueSAtIHAzLnkpIC0gKHAyLnggLSBwMy54KSAqIChwMS55IC0gcDMueSk7XFxufVxcblxcbmJvb2wgUG9pbnRJblRyaWFuZ2xlICh2ZWMyIHB0LCB2ZWMyIHAxLCB2ZWMyIHAyLCB2ZWMyIHAzKVxcbntcXG4gICAgYm9vbCBiMSwgYjIsIGIzO1xcbiAgICBiMSA9IGNoZWNrKHB0LCBwMSwgcDIpIDwgMC4wO1xcbiAgICBiMiA9IGNoZWNrKHB0LCBwMiwgcDMpIDwgMC4wO1xcbiAgICBiMyA9IGNoZWNrKHB0LCBwMywgcDEpIDwgMC4wO1xcbiAgICByZXR1cm4gKChiMSA9PSBiMikgJiYgKGIyID09IGIzKSk7XFxufVxcblxcbmJvb2wgaW5fbGVmdF90cmlhbmdsZSh2ZWMyIHApe1xcbiAgdmVjMiB2ZXJ0ZXgxLCB2ZXJ0ZXgyLCB2ZXJ0ZXgzO1xcbiAgdmVydGV4MSA9IHZlYzIocHJvZ3Jlc3MsIDAuNSk7XFxuICB2ZXJ0ZXgyID0gdmVjMigwLjAsIDAuNS1wcm9ncmVzcyk7XFxuICB2ZXJ0ZXgzID0gdmVjMigwLjAsIDAuNStwcm9ncmVzcyk7XFxuICBpZiAoUG9pbnRJblRyaWFuZ2xlKHAsIHZlcnRleDEsIHZlcnRleDIsIHZlcnRleDMpKVxcbiAge1xcbiAgICByZXR1cm4gdHJ1ZTtcXG4gIH1cXG4gIHJldHVybiBmYWxzZTtcXG59XFxuXFxuYm9vbCBpbl9yaWdodF90cmlhbmdsZSh2ZWMyIHApe1xcbiAgdmVjMiB2ZXJ0ZXgxLCB2ZXJ0ZXgyLCB2ZXJ0ZXgzO1xcbiAgdmVydGV4MSA9IHZlYzIoMS4wLXByb2dyZXNzLCAwLjUpO1xcbiAgdmVydGV4MiA9IHZlYzIoMS4wLCAwLjUtcHJvZ3Jlc3MpO1xcbiAgdmVydGV4MyA9IHZlYzIoMS4wLCAwLjUrcHJvZ3Jlc3MpO1xcbiAgaWYgKFBvaW50SW5UcmlhbmdsZShwLCB2ZXJ0ZXgxLCB2ZXJ0ZXgyLCB2ZXJ0ZXgzKSlcXG4gIHtcXG4gICAgcmV0dXJuIHRydWU7XFxuICB9XFxuICByZXR1cm4gZmFsc2U7XFxufVxcblxcbmZsb2F0IGJsdXJfZWRnZSh2ZWMyIGJvdDEsIHZlYzIgYm90MiwgdmVjMiB0b3AsIHZlYzIgdGVzdFB0KVxcbntcXG4gIHZlYzIgbGluZURpciA9IGJvdDEgLSB0b3A7XFxuICB2ZWMyIHBlcnBEaXIgPSB2ZWMyKGxpbmVEaXIueSwgLWxpbmVEaXIueCk7XFxuICB2ZWMyIGRpclRvUHQxID0gYm90MSAtIHRlc3RQdDtcXG4gIGZsb2F0IGRpc3QxID0gYWJzKGRvdChub3JtYWxpemUocGVycERpciksIGRpclRvUHQxKSk7XFxuICBcXG4gIGxpbmVEaXIgPSBib3QyIC0gdG9wO1xcbiAgcGVycERpciA9IHZlYzIobGluZURpci55LCAtbGluZURpci54KTtcXG4gIGRpclRvUHQxID0gYm90MiAtIHRlc3RQdDtcXG4gIGZsb2F0IG1pbl9kaXN0ID0gbWluKGFicyhkb3Qobm9ybWFsaXplKHBlcnBEaXIpLCBkaXJUb1B0MSkpLCBkaXN0MSk7XFxuICBcXG4gIGlmIChtaW5fZGlzdCA8IDAuMDA1KSB7XFxuICAgIHJldHVybiBtaW5fZGlzdCAvIDAuMDA1O1xcbiAgfVxcbiAgZWxzZSAge1xcbiAgICByZXR1cm4gMS4wO1xcbiAgfTtcXG59XFxuXFxuXFxudmVjNCB0cmFuc2l0aW9uICh2ZWMyIHV2KSB7XFxuICBpZiAoaW5fbGVmdF90cmlhbmdsZSh1dikpXFxuICB7XFxuICAgIGlmIChwcm9ncmVzcyA8IDAuMSlcXG4gICAge1xcbiAgICAgIHJldHVybiBnZXRGcm9tQ29sb3IodXYpO1xcbiAgICB9XFxuICAgIGlmICh1di54IDwgMC41KVxcbiAgICB7XFxuICAgICAgdmVjMiB2ZXJ0ZXgxID0gdmVjMihwcm9ncmVzcywgMC41KTtcXG4gICAgICB2ZWMyIHZlcnRleDIgPSB2ZWMyKDAuMCwgMC41LXByb2dyZXNzKTtcXG4gICAgICB2ZWMyIHZlcnRleDMgPSB2ZWMyKDAuMCwgMC41K3Byb2dyZXNzKTtcXG4gICAgICByZXR1cm4gbWl4KFxcbiAgICAgICAgZ2V0RnJvbUNvbG9yKHV2KSxcXG4gICAgICAgIGdldFRvQ29sb3IodXYpLFxcbiAgICAgICAgYmx1cl9lZGdlKHZlcnRleDIsIHZlcnRleDMsIHZlcnRleDEsIHV2KVxcbiAgICAgICk7XFxuICAgIH1cXG4gICAgZWxzZVxcbiAgICB7XFxuICAgICAgaWYgKHByb2dyZXNzID4gMC4wKVxcbiAgICAgIHtcXG4gICAgICAgIHJldHVybiBnZXRUb0NvbG9yKHV2KTtcXG4gICAgICB9XFxuICAgICAgZWxzZVxcbiAgICAgIHtcXG4gICAgICAgIHJldHVybiBnZXRGcm9tQ29sb3IodXYpO1xcbiAgICAgIH1cXG4gICAgfSAgICBcXG4gIH1cXG4gIGVsc2UgaWYgKGluX3JpZ2h0X3RyaWFuZ2xlKHV2KSlcXG4gIHtcXG4gICAgaWYgKHV2LnggPj0gMC41KVxcbiAgICB7XFxuICAgICAgdmVjMiB2ZXJ0ZXgxID0gdmVjMigxLjAtcHJvZ3Jlc3MsIDAuNSk7XFxuICAgICAgdmVjMiB2ZXJ0ZXgyID0gdmVjMigxLjAsIDAuNS1wcm9ncmVzcyk7XFxuICAgICAgdmVjMiB2ZXJ0ZXgzID0gdmVjMigxLjAsIDAuNStwcm9ncmVzcyk7XFxuICAgICAgcmV0dXJuIG1peChcXG4gICAgICAgIGdldEZyb21Db2xvcih1diksXFxuICAgICAgICBnZXRUb0NvbG9yKHV2KSxcXG4gICAgICAgIGJsdXJfZWRnZSh2ZXJ0ZXgyLCB2ZXJ0ZXgzLCB2ZXJ0ZXgxLCB1dilcXG4gICAgICApOyAgXFxuICAgIH1cXG4gICAgZWxzZVxcbiAgICB7XFxuICAgICAgcmV0dXJuIGdldEZyb21Db2xvcih1dik7XFxuICAgIH1cXG4gIH1cXG4gIGVsc2Uge1xcbiAgICByZXR1cm4gZ2V0RnJvbUNvbG9yKHV2KTtcXG4gIH1cXG59XCIsXCJhdXRob3JcIjpcImh1eW54XCIsXCJsaWNlbnNlXCI6XCJNSVRcIixcImNyZWF0ZWRBdFwiOlwiU2F0LCAyNCBNYXIgMjAxOCAxMjo1NDoyNiArMDEwMFwiLFwidXBkYXRlZEF0XCI6XCJTYXQsIDI0IE1hciAyMDE4IDEyOjU0OjI2ICswMTAwXCJ9LHtcIm5hbWVcIjpcIkJvd1RpZVZlcnRpY2FsXCIsXCJwYXJhbXNUeXBlc1wiOnt9LFwiZGVmYXVsdFBhcmFtc1wiOnt9LFwiZ2xzbFwiOlwiLy8gQXV0aG9yOiBodXlueFxcclxcbi8vIExpY2Vuc2U6IE1JVFxcclxcblxcclxcbmZsb2F0IGNoZWNrKHZlYzIgcDEsIHZlYzIgcDIsIHZlYzIgcDMpXFxyXFxue1xcclxcbiAgcmV0dXJuIChwMS54IC0gcDMueCkgKiAocDIueSAtIHAzLnkpIC0gKHAyLnggLSBwMy54KSAqIChwMS55IC0gcDMueSk7XFxyXFxufVxcclxcblxcclxcbmJvb2wgUG9pbnRJblRyaWFuZ2xlICh2ZWMyIHB0LCB2ZWMyIHAxLCB2ZWMyIHAyLCB2ZWMyIHAzKVxcclxcbntcXHJcXG4gICAgYm9vbCBiMSwgYjIsIGIzO1xcclxcbiAgICBiMSA9IGNoZWNrKHB0LCBwMSwgcDIpIDwgMC4wO1xcclxcbiAgICBiMiA9IGNoZWNrKHB0LCBwMiwgcDMpIDwgMC4wO1xcclxcbiAgICBiMyA9IGNoZWNrKHB0LCBwMywgcDEpIDwgMC4wO1xcclxcbiAgICByZXR1cm4gKChiMSA9PSBiMikgJiYgKGIyID09IGIzKSk7XFxyXFxufVxcclxcblxcclxcbmJvb2wgaW5fdG9wX3RyaWFuZ2xlKHZlYzIgcCl7XFxyXFxuICB2ZWMyIHZlcnRleDEsIHZlcnRleDIsIHZlcnRleDM7XFxyXFxuICB2ZXJ0ZXgxID0gdmVjMigwLjUsIHByb2dyZXNzKTtcXHJcXG4gIHZlcnRleDIgPSB2ZWMyKDAuNS1wcm9ncmVzcywgMC4wKTtcXHJcXG4gIHZlcnRleDMgPSB2ZWMyKDAuNStwcm9ncmVzcywgMC4wKTtcXHJcXG4gIGlmIChQb2ludEluVHJpYW5nbGUocCwgdmVydGV4MSwgdmVydGV4MiwgdmVydGV4MykpXFxyXFxuICB7XFxyXFxuICAgIHJldHVybiB0cnVlO1xcclxcbiAgfVxcclxcbiAgcmV0dXJuIGZhbHNlO1xcclxcbn1cXHJcXG5cXHJcXG5ib29sIGluX2JvdHRvbV90cmlhbmdsZSh2ZWMyIHApe1xcclxcbiAgdmVjMiB2ZXJ0ZXgxLCB2ZXJ0ZXgyLCB2ZXJ0ZXgzO1xcclxcbiAgdmVydGV4MSA9IHZlYzIoMC41LCAxLjAgLSBwcm9ncmVzcyk7XFxyXFxuICB2ZXJ0ZXgyID0gdmVjMigwLjUtcHJvZ3Jlc3MsIDEuMCk7XFxyXFxuICB2ZXJ0ZXgzID0gdmVjMigwLjUrcHJvZ3Jlc3MsIDEuMCk7XFxyXFxuICBpZiAoUG9pbnRJblRyaWFuZ2xlKHAsIHZlcnRleDEsIHZlcnRleDIsIHZlcnRleDMpKVxcclxcbiAge1xcclxcbiAgICByZXR1cm4gdHJ1ZTtcXHJcXG4gIH1cXHJcXG4gIHJldHVybiBmYWxzZTtcXHJcXG59XFxyXFxuXFxyXFxuZmxvYXQgYmx1cl9lZGdlKHZlYzIgYm90MSwgdmVjMiBib3QyLCB2ZWMyIHRvcCwgdmVjMiB0ZXN0UHQpXFxyXFxue1xcclxcbiAgdmVjMiBsaW5lRGlyID0gYm90MSAtIHRvcDtcXHJcXG4gIHZlYzIgcGVycERpciA9IHZlYzIobGluZURpci55LCAtbGluZURpci54KTtcXHJcXG4gIHZlYzIgZGlyVG9QdDEgPSBib3QxIC0gdGVzdFB0O1xcclxcbiAgZmxvYXQgZGlzdDEgPSBhYnMoZG90KG5vcm1hbGl6ZShwZXJwRGlyKSwgZGlyVG9QdDEpKTtcXHJcXG4gIFxcclxcbiAgbGluZURpciA9IGJvdDIgLSB0b3A7XFxyXFxuICBwZXJwRGlyID0gdmVjMihsaW5lRGlyLnksIC1saW5lRGlyLngpO1xcclxcbiAgZGlyVG9QdDEgPSBib3QyIC0gdGVzdFB0O1xcclxcbiAgZmxvYXQgbWluX2Rpc3QgPSBtaW4oYWJzKGRvdChub3JtYWxpemUocGVycERpciksIGRpclRvUHQxKSksIGRpc3QxKTtcXHJcXG4gIFxcclxcbiAgaWYgKG1pbl9kaXN0IDwgMC4wMDUpIHtcXHJcXG4gICAgcmV0dXJuIG1pbl9kaXN0IC8gMC4wMDU7XFxyXFxuICB9XFxyXFxuICBlbHNlICB7XFxyXFxuICAgIHJldHVybiAxLjA7XFxyXFxuICB9O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG52ZWM0IHRyYW5zaXRpb24gKHZlYzIgdXYpIHtcXHJcXG4gIGlmIChpbl90b3BfdHJpYW5nbGUodXYpKVxcclxcbiAge1xcclxcbiAgICBpZiAocHJvZ3Jlc3MgPCAwLjEpXFxyXFxuICAgIHtcXHJcXG4gICAgICByZXR1cm4gZ2V0RnJvbUNvbG9yKHV2KTtcXHJcXG4gICAgfVxcclxcbiAgICBpZiAodXYueSA8IDAuNSlcXHJcXG4gICAge1xcclxcbiAgICAgIHZlYzIgdmVydGV4MSA9IHZlYzIoMC41LCBwcm9ncmVzcyk7XFxyXFxuICAgICAgdmVjMiB2ZXJ0ZXgyID0gdmVjMigwLjUtcHJvZ3Jlc3MsIDAuMCk7XFxyXFxuICAgICAgdmVjMiB2ZXJ0ZXgzID0gdmVjMigwLjUrcHJvZ3Jlc3MsIDAuMCk7XFxyXFxuICAgICAgcmV0dXJuIG1peChcXHJcXG4gICAgICAgIGdldEZyb21Db2xvcih1diksXFxyXFxuICAgICAgICBnZXRUb0NvbG9yKHV2KSxcXHJcXG4gICAgICAgIGJsdXJfZWRnZSh2ZXJ0ZXgyLCB2ZXJ0ZXgzLCB2ZXJ0ZXgxLCB1dilcXHJcXG4gICAgICApO1xcclxcbiAgICB9XFxyXFxuICAgIGVsc2VcXHJcXG4gICAge1xcclxcbiAgICAgIGlmIChwcm9ncmVzcyA+IDAuMClcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICByZXR1cm4gZ2V0VG9Db2xvcih1dik7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGVsc2VcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICByZXR1cm4gZ2V0RnJvbUNvbG9yKHV2KTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH0gICAgXFxyXFxuICB9XFxyXFxuICBlbHNlIGlmIChpbl9ib3R0b21fdHJpYW5nbGUodXYpKVxcclxcbiAge1xcclxcbiAgICBpZiAodXYueSA+PSAwLjUpXFxyXFxuICAgIHtcXHJcXG4gICAgICB2ZWMyIHZlcnRleDEgPSB2ZWMyKDAuNSwgMS4wLXByb2dyZXNzKTtcXHJcXG4gICAgICB2ZWMyIHZlcnRleDIgPSB2ZWMyKDAuNS1wcm9ncmVzcywgMS4wKTtcXHJcXG4gICAgICB2ZWMyIHZlcnRleDMgPSB2ZWMyKDAuNStwcm9ncmVzcywgMS4wKTtcXHJcXG4gICAgICByZXR1cm4gbWl4KFxcclxcbiAgICAgICAgZ2V0RnJvbUNvbG9yKHV2KSxcXHJcXG4gICAgICAgIGdldFRvQ29sb3IodXYpLFxcclxcbiAgICAgICAgYmx1cl9lZGdlKHZlcnRleDIsIHZlcnRleDMsIHZlcnRleDEsIHV2KVxcclxcbiAgICAgICk7ICBcXHJcXG4gICAgfVxcclxcbiAgICBlbHNlXFxyXFxuICAgIHtcXHJcXG4gICAgICByZXR1cm4gZ2V0RnJvbUNvbG9yKHV2KTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgZWxzZSB7XFxyXFxuICAgIHJldHVybiBnZXRGcm9tQ29sb3IodXYpO1xcclxcbiAgfVxcclxcbn1cIixcImF1dGhvclwiOlwiaHV5bnhcIixcImxpY2Vuc2VcIjpcIk1JVFwiLFwiY3JlYXRlZEF0XCI6XCJUdWUsIDI3IE1hciAyMDE4IDEwOjA3OjU0ICswNzAwXCIsXCJ1cGRhdGVkQXRcIjpcIlR1ZSwgMjcgTWFyIDIwMTggMTA6MDc6NTQgKzA3MDBcIn0se1wibmFtZVwiOlwiQnV0dGVyZmx5V2F2ZVNjcmF3bGVyXCIsXCJwYXJhbXNUeXBlc1wiOntcImFtcGxpdHVkZVwiOlwiZmxvYXRcIixcIndhdmVzXCI6XCJmbG9hdFwiLFwiY29sb3JTZXBhcmF0aW9uXCI6XCJmbG9hdFwifSxcImRlZmF1bHRQYXJhbXNcIjp7XCJhbXBsaXR1ZGVcIjoxLFwid2F2ZXNcIjozMCxcImNvbG9yU2VwYXJhdGlvblwiOjAuM30sXCJnbHNsXCI6XCIvLyBBdXRob3I6IG1hbmR1Ymlhblxcbi8vIExpY2Vuc2U6IE1JVFxcbnVuaWZvcm0gZmxvYXQgYW1wbGl0dWRlOyAvLyA9IDEuMFxcbnVuaWZvcm0gZmxvYXQgd2F2ZXM7IC8vID0gMzAuMFxcbnVuaWZvcm0gZmxvYXQgY29sb3JTZXBhcmF0aW9uOyAvLyA9IDAuM1xcbmZsb2F0IFBJID0gMy4xNDE1OTI2NTM1ODk3OTMyMzg0NjI2NDtcXG5mbG9hdCBjb21wdXRlKHZlYzIgcCwgZmxvYXQgcHJvZ3Jlc3MsIHZlYzIgY2VudGVyKSB7XFxudmVjMiBvID0gcCpzaW4ocHJvZ3Jlc3MgKiBhbXBsaXR1ZGUpLWNlbnRlcjtcXG4vLyBob3Jpem9udGFsIHZlY3RvclxcbnZlYzIgaCA9IHZlYzIoMS4sIDAuKTtcXG4vLyBidXR0ZXJmbHkgcG9sYXIgZnVuY3Rpb24gKGRvbid0IGFzayBtZSB3aHkgdGhpcyBvbmUgOikpXFxuZmxvYXQgdGhldGEgPSBhY29zKGRvdChvLCBoKSkgKiB3YXZlcztcXG5yZXR1cm4gKGV4cChjb3ModGhldGEpKSAtIDIuKmNvcyg0Lip0aGV0YSkgKyBwb3coc2luKCgyLip0aGV0YSAtIFBJKSAvIDI0LiksIDUuKSkgLyAxMC47XFxufVxcbnZlYzQgdHJhbnNpdGlvbih2ZWMyIHV2KSB7XFxuICB2ZWMyIHAgPSB1di54eSAvIHZlYzIoMS4wKS54eTtcXG4gIGZsb2F0IGludiA9IDEuIC0gcHJvZ3Jlc3M7XFxuICB2ZWMyIGRpciA9IHAgLSB2ZWMyKC41KTtcXG4gIGZsb2F0IGRpc3QgPSBsZW5ndGgoZGlyKTtcXG4gIGZsb2F0IGRpc3AgPSBjb21wdXRlKHAsIHByb2dyZXNzLCB2ZWMyKDAuNSwgMC41KSkgO1xcbiAgdmVjNCB0ZXhUbyA9IGdldFRvQ29sb3IocCArIGludipkaXNwKTtcXG4gIHZlYzQgdGV4RnJvbSA9IHZlYzQoXFxuICBnZXRGcm9tQ29sb3IocCArIHByb2dyZXNzKmRpc3AqKDEuMCAtIGNvbG9yU2VwYXJhdGlvbikpLnIsXFxuICBnZXRGcm9tQ29sb3IocCArIHByb2dyZXNzKmRpc3ApLmcsXFxuICBnZXRGcm9tQ29sb3IocCArIHByb2dyZXNzKmRpc3AqKDEuMCArIGNvbG9yU2VwYXJhdGlvbikpLmIsXFxuICAxLjApO1xcbiAgcmV0dXJuIHRleFRvKnByb2dyZXNzICsgdGV4RnJvbSppbnY7XFxufVxcblwiLFwiYXV0aG9yXCI6XCJtYW5kdWJpYW5cIixcImxpY2Vuc2VcIjpcIk1JVFwiLFwiY3JlYXRlZEF0XCI6XCJUaHUsIDEgSnVuIDIwMTcgMTE6NDc6MTcgKzAyMDBcIixcInVwZGF0ZWRBdFwiOlwiVGh1LCAxIEp1biAyMDE3IDExOjQ3OjE3ICswMjAwXCJ9LHtcIm5hbWVcIjpcIkNpcmNsZUNyb3BcIixcInBhcmFtc1R5cGVzXCI6e1wiYmdjb2xvclwiOlwidmVjNFwifSxcImRlZmF1bHRQYXJhbXNcIjp7XCJiZ2NvbG9yXCI6WzAsMCwwLDFdfSxcImdsc2xcIjpcIi8vIExpY2Vuc2U6IE1JVFxcbi8vIEF1dGhvcjogZmt1dGVrZW5cXG4vLyBwb3J0ZWQgYnkgZ3JlIGZyb20gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vZmt1dGVrZW4vZjYzZTMwMDljMTE0Mzk1MGRlZTkwNjNjM2I4M2ZiODhcXG5cXG51bmlmb3JtIHZlYzQgYmdjb2xvcjsgLy8gPSB2ZWM0KDAuMCwgMC4wLCAwLjAsIDEuMClcXG5cXG52ZWMyIHJhdGlvMiA9IHZlYzIoMS4wLCAxLjAgLyByYXRpbyk7XFxuZmxvYXQgcyA9IHBvdygyLjAgKiBhYnMocHJvZ3Jlc3MgLSAwLjUpLCAzLjApO1xcblxcbnZlYzQgdHJhbnNpdGlvbih2ZWMyIHApIHtcXG4gIGZsb2F0IGRpc3QgPSBsZW5ndGgoKHZlYzIocCkgLSAwLjUpICogcmF0aW8yKTtcXG4gIHJldHVybiBtaXgoXFxuICAgIHByb2dyZXNzIDwgMC41ID8gZ2V0RnJvbUNvbG9yKHApIDogZ2V0VG9Db2xvcihwKSwgLy8gYnJhbmNoaW5nIGlzIG9rIGhlcmUgYXMgd2Ugc3RhdGljYWxseSBkZXBlbmQgb24gcHJvZ3Jlc3MgdW5pZm9ybSAoYnJhbmNoaW5nIHdvbid0IGNoYW5nZSBvdmVyIHBpeGVscylcXG4gICAgYmdjb2xvcixcXG4gICAgc3RlcChzLCBkaXN0KVxcbiAgKTtcXG59XFxuXCIsXCJsaWNlbnNlXCI6XCJNSVRcIixcImF1dGhvclwiOlwiZmt1dGVrZW5cIixcImNyZWF0ZWRBdFwiOlwiTW9uLCAxMiBKdW4gMjAxNyAxMjo1MjozNCArMDgwMFwiLFwidXBkYXRlZEF0XCI6XCJNb24sIDEyIEp1biAyMDE3IDEyOjUyOjM0ICswODAwXCJ9LHtcIm5hbWVcIjpcIkNvbG91ckRpc3RhbmNlXCIsXCJwYXJhbXNUeXBlc1wiOntcInBvd2VyXCI6XCJmbG9hdFwifSxcImRlZmF1bHRQYXJhbXNcIjp7XCJwb3dlclwiOjV9LFwiZ2xzbFwiOlwiLy8gTGljZW5zZTogTUlUXFxuLy8gQXV0aG9yOiBQLVNlZWJhdWVyXFxuLy8gcG9ydGVkIGJ5IGdyZSBmcm9tIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL1AtU2VlYmF1ZXIvMmE1ZmEyZjc3Yzg4M2RkNjYxZjlcXG5cXG51bmlmb3JtIGZsb2F0IHBvd2VyOyAvLyA9IDUuMFxcblxcbnZlYzQgdHJhbnNpdGlvbih2ZWMyIHApIHtcXG4gIHZlYzQgZlRleCA9IGdldEZyb21Db2xvcihwKTtcXG4gIHZlYzQgdFRleCA9IGdldFRvQ29sb3IocCk7XFxuICBmbG9hdCBtID0gc3RlcChkaXN0YW5jZShmVGV4LCB0VGV4KSwgcHJvZ3Jlc3MpO1xcbiAgcmV0dXJuIG1peChcXG4gICAgbWl4KGZUZXgsIHRUZXgsIG0pLFxcbiAgICB0VGV4LFxcbiAgICBwb3cocHJvZ3Jlc3MsIHBvd2VyKVxcbiAgKTtcXG59XFxuXCIsXCJsaWNlbnNlXCI6XCJNSVRcIixcImF1dGhvclwiOlwiUC1TZWViYXVlclwiLFwiY3JlYXRlZEF0XCI6XCJNb24sIDEyIEp1biAyMDE3IDEyOjU3OjQyICswODAwXCIsXCJ1cGRhdGVkQXRcIjpcIk1vbiwgMTIgSnVuIDIwMTcgMTI6NTc6NDIgKzA4MDBcIn0se1wibmFtZVwiOlwiQ3JhenlQYXJhbWV0cmljRnVuXCIsXCJwYXJhbXNUeXBlc1wiOntcImFcIjpcImZsb2F0XCIsXCJiXCI6XCJmbG9hdFwiLFwiYW1wbGl0dWRlXCI6XCJmbG9hdFwiLFwic21vb3RobmVzc1wiOlwiZmxvYXRcIn0sXCJkZWZhdWx0UGFyYW1zXCI6e1wiYVwiOjQsXCJiXCI6MSxcImFtcGxpdHVkZVwiOjEyMCxcInNtb290aG5lc3NcIjowLjF9LFwiZ2xzbFwiOlwiLy8gQXV0aG9yOiBtYW5kdWJpYW5cXG4vLyBMaWNlbnNlOiBNSVRcXG5cXG51bmlmb3JtIGZsb2F0IGE7IC8vID0gNFxcbnVuaWZvcm0gZmxvYXQgYjsgLy8gPSAxXFxudW5pZm9ybSBmbG9hdCBhbXBsaXR1ZGU7IC8vID0gMTIwXFxudW5pZm9ybSBmbG9hdCBzbW9vdGhuZXNzOyAvLyA9IDAuMVxcblxcbnZlYzQgdHJhbnNpdGlvbih2ZWMyIHV2KSB7XFxuICB2ZWMyIHAgPSB1di54eSAvIHZlYzIoMS4wKS54eTtcXG4gIHZlYzIgZGlyID0gcCAtIHZlYzIoLjUpO1xcbiAgZmxvYXQgZGlzdCA9IGxlbmd0aChkaXIpO1xcbiAgZmxvYXQgeCA9IChhIC0gYikgKiBjb3MocHJvZ3Jlc3MpICsgYiAqIGNvcyhwcm9ncmVzcyAqICgoYSAvIGIpIC0gMS4pICk7XFxuICBmbG9hdCB5ID0gKGEgLSBiKSAqIHNpbihwcm9ncmVzcykgLSBiICogc2luKHByb2dyZXNzICogKChhIC8gYikgLSAxLikpO1xcbiAgdmVjMiBvZmZzZXQgPSBkaXIgKiB2ZWMyKHNpbihwcm9ncmVzcyAgKiBkaXN0ICogYW1wbGl0dWRlICogeCksIHNpbihwcm9ncmVzcyAqIGRpc3QgKiBhbXBsaXR1ZGUgKiB5KSkgLyBzbW9vdGhuZXNzO1xcbiAgcmV0dXJuIG1peChnZXRGcm9tQ29sb3IocCArIG9mZnNldCksIGdldFRvQ29sb3IocCksIHNtb290aHN0ZXAoMC4yLCAxLjAsIHByb2dyZXNzKSk7XFxufVxcblwiLFwiYXV0aG9yXCI6XCJtYW5kdWJpYW5cIixcImxpY2Vuc2VcIjpcIk1JVFwiLFwiY3JlYXRlZEF0XCI6XCJUaHUsIDEgSnVuIDIwMTcgMTM6MDM6MTIgKzAyMDBcIixcInVwZGF0ZWRBdFwiOlwiVGh1LCAxIEp1biAyMDE3IDEzOjAzOjEyICswMjAwXCJ9LHtcIm5hbWVcIjpcIkNyb3NzWm9vbVwiLFwicGFyYW1zVHlwZXNcIjp7XCJzdHJlbmd0aFwiOlwiZmxvYXRcIn0sXCJkZWZhdWx0UGFyYW1zXCI6e1wic3RyZW5ndGhcIjowLjR9LFwiZ2xzbFwiOlwiLy8gTGljZW5zZTogTUlUXFxuLy8gQXV0aG9yOiByZWN0YWxvZ2ljXFxuLy8gcG9ydGVkIGJ5IGdyZSBmcm9tIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL3JlY3RhbG9naWMvYjg2YjkwMTYxNTAzYTAwMjMyMzFcXG5cXG4vLyBDb252ZXJ0ZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vcmVjdGFsb2dpYy9yZW5kZXJtaXgtYmFzaWMtZWZmZWN0cy9ibG9iL21hc3Rlci9hc3NldHMvY29tL3JlbmRlcm1peC9Dcm9zc1pvb20vQ3Jvc3Nab29tLmZyYWdcXG4vLyBXaGljaCBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZXZhbncvZ2xmeC5qcy9ibG9iL21hc3Rlci9zcmMvZmlsdGVycy9ibHVyL3pvb21ibHVyLmpzXFxuLy8gV2l0aCBhZGRpdGlvbmFsIGVhc2luZyBmdW5jdGlvbnMgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vcmVjdGFsb2dpYy9yZW5kZXJtaXgtYmFzaWMtZWZmZWN0cy9ibG9iL21hc3Rlci9hc3NldHMvY29tL3JlbmRlcm1peC9FYXNpbmcvRWFzaW5nLmdsc2xsaWJcXG5cXG51bmlmb3JtIGZsb2F0IHN0cmVuZ3RoOyAvLyA9IDAuNFxcblxcbmNvbnN0IGZsb2F0IFBJID0gMy4xNDE1OTI2NTM1ODk3OTM7XFxuXFxuZmxvYXQgTGluZWFyX2Vhc2UoaW4gZmxvYXQgYmVnaW4sIGluIGZsb2F0IGNoYW5nZSwgaW4gZmxvYXQgZHVyYXRpb24sIGluIGZsb2F0IHRpbWUpIHtcXG4gICAgcmV0dXJuIGNoYW5nZSAqIHRpbWUgLyBkdXJhdGlvbiArIGJlZ2luO1xcbn1cXG5cXG5mbG9hdCBFeHBvbmVudGlhbF9lYXNlSW5PdXQoaW4gZmxvYXQgYmVnaW4sIGluIGZsb2F0IGNoYW5nZSwgaW4gZmxvYXQgZHVyYXRpb24sIGluIGZsb2F0IHRpbWUpIHtcXG4gICAgaWYgKHRpbWUgPT0gMC4wKVxcbiAgICAgICAgcmV0dXJuIGJlZ2luO1xcbiAgICBlbHNlIGlmICh0aW1lID09IGR1cmF0aW9uKVxcbiAgICAgICAgcmV0dXJuIGJlZ2luICsgY2hhbmdlO1xcbiAgICB0aW1lID0gdGltZSAvIChkdXJhdGlvbiAvIDIuMCk7XFxuICAgIGlmICh0aW1lIDwgMS4wKVxcbiAgICAgICAgcmV0dXJuIGNoYW5nZSAvIDIuMCAqIHBvdygyLjAsIDEwLjAgKiAodGltZSAtIDEuMCkpICsgYmVnaW47XFxuICAgIHJldHVybiBjaGFuZ2UgLyAyLjAgKiAoLXBvdygyLjAsIC0xMC4wICogKHRpbWUgLSAxLjApKSArIDIuMCkgKyBiZWdpbjtcXG59XFxuXFxuZmxvYXQgU2ludXNvaWRhbF9lYXNlSW5PdXQoaW4gZmxvYXQgYmVnaW4sIGluIGZsb2F0IGNoYW5nZSwgaW4gZmxvYXQgZHVyYXRpb24sIGluIGZsb2F0IHRpbWUpIHtcXG4gICAgcmV0dXJuIC1jaGFuZ2UgLyAyLjAgKiAoY29zKFBJICogdGltZSAvIGR1cmF0aW9uKSAtIDEuMCkgKyBiZWdpbjtcXG59XFxuXFxuZmxvYXQgcmFuZCAodmVjMiBjbykge1xcbiAgcmV0dXJuIGZyYWN0KHNpbihkb3QoY28ueHkgLHZlYzIoMTIuOTg5OCw3OC4yMzMpKSkgKiA0Mzc1OC41NDUzKTtcXG59XFxuXFxudmVjMyBjcm9zc0ZhZGUoaW4gdmVjMiB1diwgaW4gZmxvYXQgZGlzc29sdmUpIHtcXG4gICAgcmV0dXJuIG1peChnZXRGcm9tQ29sb3IodXYpLnJnYiwgZ2V0VG9Db2xvcih1dikucmdiLCBkaXNzb2x2ZSk7XFxufVxcblxcbnZlYzQgdHJhbnNpdGlvbih2ZWMyIHV2KSB7XFxuICAgIHZlYzIgdGV4Q29vcmQgPSB1di54eSAvIHZlYzIoMS4wKS54eTtcXG5cXG4gICAgLy8gTGluZWFyIGludGVycG9sYXRlIGNlbnRlciBhY3Jvc3MgY2VudGVyIGhhbGYgb2YgdGhlIGltYWdlXFxuICAgIHZlYzIgY2VudGVyID0gdmVjMihMaW5lYXJfZWFzZSgwLjI1LCAwLjUsIDEuMCwgcHJvZ3Jlc3MpLCAwLjUpO1xcbiAgICBmbG9hdCBkaXNzb2x2ZSA9IEV4cG9uZW50aWFsX2Vhc2VJbk91dCgwLjAsIDEuMCwgMS4wLCBwcm9ncmVzcyk7XFxuXFxuICAgIC8vIE1pcnJvcmVkIHNpbnVzb2lkYWwgbG9vcC4gMC0+c3RyZW5ndGggdGhlbiBzdHJlbmd0aC0+MFxcbiAgICBmbG9hdCBzdHJlbmd0aCA9IFNpbnVzb2lkYWxfZWFzZUluT3V0KDAuMCwgc3RyZW5ndGgsIDAuNSwgcHJvZ3Jlc3MpO1xcblxcbiAgICB2ZWMzIGNvbG9yID0gdmVjMygwLjApO1xcbiAgICBmbG9hdCB0b3RhbCA9IDAuMDtcXG4gICAgdmVjMiB0b0NlbnRlciA9IGNlbnRlciAtIHRleENvb3JkO1xcblxcbiAgICAvKiByYW5kb21pemUgdGhlIGxvb2t1cCB2YWx1ZXMgdG8gaGlkZSB0aGUgZml4ZWQgbnVtYmVyIG9mIHNhbXBsZXMgKi9cXG4gICAgZmxvYXQgb2Zmc2V0ID0gcmFuZCh1dik7XFxuXFxuICAgIGZvciAoZmxvYXQgdCA9IDAuMDsgdCA8PSA0MC4wOyB0KyspIHtcXG4gICAgICAgIGZsb2F0IHBlcmNlbnQgPSAodCArIG9mZnNldCkgLyA0MC4wO1xcbiAgICAgICAgZmxvYXQgd2VpZ2h0ID0gNC4wICogKHBlcmNlbnQgLSBwZXJjZW50ICogcGVyY2VudCk7XFxuICAgICAgICBjb2xvciArPSBjcm9zc0ZhZGUodGV4Q29vcmQgKyB0b0NlbnRlciAqIHBlcmNlbnQgKiBzdHJlbmd0aCwgZGlzc29sdmUpICogd2VpZ2h0O1xcbiAgICAgICAgdG90YWwgKz0gd2VpZ2h0O1xcbiAgICB9XFxuICAgIHJldHVybiB2ZWM0KGNvbG9yIC8gdG90YWwsIDEuMCk7XFxufVxcblwiLFwibGljZW5zZVwiOlwiTUlUXCIsXCJhdXRob3JcIjpcInJlY3RhbG9naWNcIixcImNyZWF0ZWRBdFwiOlwiTW9uLCAxMiBKdW4gMjAxNyAxMjozMzowNyArMDgwMFwiLFwidXBkYXRlZEF0XCI6XCJNb24sIDEyIEp1biAyMDE3IDEyOjMzOjA3ICswODAwXCJ9LHtcIm5hbWVcIjpcIkRpcmVjdGlvbmFsXCIsXCJwYXJhbXNUeXBlc1wiOntcImRpcmVjdGlvblwiOlwidmVjMlwifSxcImRlZmF1bHRQYXJhbXNcIjp7XCJkaXJlY3Rpb25cIjpbMCwxXX0sXCJnbHNsXCI6XCIvLyBBdXRob3I6IEdhw6t0YW4gUmVuYXVkZWF1XFxuLy8gTGljZW5zZTogTUlUXFxuXFxudW5pZm9ybSB2ZWMyIGRpcmVjdGlvbjsgLy8gPSB2ZWMyKDAuMCwgMS4wKVxcblxcbnZlYzQgdHJhbnNpdGlvbiAodmVjMiB1dikge1xcbiAgdmVjMiBwID0gdXYgKyBwcm9ncmVzcyAqIHNpZ24oZGlyZWN0aW9uKTtcXG4gIHZlYzIgZiA9IGZyYWN0KHApO1xcbiAgcmV0dXJuIG1peChcXG4gICAgZ2V0VG9Db2xvcihmKSxcXG4gICAgZ2V0RnJvbUNvbG9yKGYpLFxcbiAgICBzdGVwKDAuMCwgcC55KSAqIHN0ZXAocC55LCAxLjApICogc3RlcCgwLjAsIHAueCkgKiBzdGVwKHAueCwgMS4wKVxcbiAgKTtcXG59XFxuXCIsXCJhdXRob3JcIjpcIkdhw6t0YW4gUmVuYXVkZWF1XCIsXCJsaWNlbnNlXCI6XCJNSVRcIixcImNyZWF0ZWRBdFwiOlwiVGh1LCAxOSBBcHIgMjAxOCAxMjoyMDoyOSArMDIwMFwiLFwidXBkYXRlZEF0XCI6XCJUaHUsIDE5IEFwciAyMDE4IDEyOjIwOjI5ICswMjAwXCJ9LHtcIm5hbWVcIjpcIkRvb21TY3JlZW5UcmFuc2l0aW9uXCIsXCJwYXJhbXNUeXBlc1wiOntcImJhcnNcIjpcImludFwiLFwiYW1wbGl0dWRlXCI6XCJmbG9hdFwiLFwibm9pc2VcIjpcImZsb2F0XCIsXCJmcmVxdWVuY3lcIjpcImZsb2F0XCIsXCJkcmlwU2NhbGVcIjpcImZsb2F0XCJ9LFwiZGVmYXVsdFBhcmFtc1wiOntcImJhcnNcIjozMCxcImFtcGxpdHVkZVwiOjIsXCJub2lzZVwiOjAuMSxcImZyZXF1ZW5jeVwiOjAuNSxcImRyaXBTY2FsZVwiOjAuNX0sXCJnbHNsXCI6XCIvLyBBdXRob3I6IFplaCBGZXJuYW5kb1xcbi8vIExpY2Vuc2U6IE1JVFxcblxcblxcbi8vIFRyYW5zaXRpb24gcGFyYW1ldGVycyAtLS0tLS0tLVxcblxcbi8vIE51bWJlciBvZiB0b3RhbCBiYXJzL2NvbHVtbnNcXG51bmlmb3JtIGludCBiYXJzOyAvLyA9IDMwXFxuXFxuLy8gTXVsdGlwbGllciBmb3Igc3BlZWQgcmF0aW8uIDAgPSBubyB2YXJpYXRpb24gd2hlbiBnb2luZyBkb3duLCBoaWdoZXIgPSBzb21lIGVsZW1lbnRzIGdvIG11Y2ggZmFzdGVyXFxudW5pZm9ybSBmbG9hdCBhbXBsaXR1ZGU7IC8vID0gMlxcblxcbi8vIEZ1cnRoZXIgdmFyaWF0aW9ucyBpbiBzcGVlZC4gMCA9IG5vIG5vaXNlLCAxID0gc3VwZXIgbm9pc3kgKGlnbm9yZSBmcmVxdWVuY3kpXFxudW5pZm9ybSBmbG9hdCBub2lzZTsgLy8gPSAwLjFcXG5cXG4vLyBTcGVlZCB2YXJpYXRpb24gaG9yaXpvbnRhbGx5LiB0aGUgYmlnZ2VyIHRoZSB2YWx1ZSwgdGhlIHNob3J0ZXIgdGhlIHdhdmVzXFxudW5pZm9ybSBmbG9hdCBmcmVxdWVuY3k7IC8vID0gMC41XFxuXFxuLy8gSG93IG11Y2ggdGhlIGJhcnMgc2VlbSB0byBcXFwicnVuXFxcIiBmcm9tIHRoZSBtaWRkbGUgb2YgdGhlIHNjcmVlbiBmaXJzdCAoc3RpY2tpbmcgdG8gdGhlIHNpZGVzKS4gMCA9IG5vIGRyaXAsIDEgPSBjdXJ2ZWQgZHJpcFxcbnVuaWZvcm0gZmxvYXQgZHJpcFNjYWxlOyAvLyA9IDAuNVxcblxcblxcbi8vIFRoZSBjb2RlIHByb3BlciAtLS0tLS0tLVxcblxcbmZsb2F0IHJhbmQoaW50IG51bSkge1xcbiAgcmV0dXJuIGZyYWN0KG1vZChmbG9hdChudW0pICogNjcxMjMuMzEzLCAxMi4wKSAqIHNpbihmbG9hdChudW0pICogMTAuMykgKiBjb3MoZmxvYXQobnVtKSkpO1xcbn1cXG5cXG5mbG9hdCB3YXZlKGludCBudW0pIHtcXG4gIGZsb2F0IGZuID0gZmxvYXQobnVtKSAqIGZyZXF1ZW5jeSAqIDAuMSAqIGZsb2F0KGJhcnMpO1xcbiAgcmV0dXJuIGNvcyhmbiAqIDAuNSkgKiBjb3MoZm4gKiAwLjEzKSAqIHNpbigoZm4rMTAuMCkgKiAwLjMpIC8gMi4wICsgMC41O1xcbn1cXG5cXG5mbG9hdCBkcmlwKGludCBudW0pIHtcXG4gIHJldHVybiBzaW4oZmxvYXQobnVtKSAvIGZsb2F0KGJhcnMgLSAxKSAqIDMuMTQxNTkyKSAqIGRyaXBTY2FsZTtcXG59XFxuXFxuZmxvYXQgcG9zKGludCBudW0pIHtcXG4gIHJldHVybiAobm9pc2UgPT0gMC4wID8gd2F2ZShudW0pIDogbWl4KHdhdmUobnVtKSwgcmFuZChudW0pLCBub2lzZSkpICsgKGRyaXBTY2FsZSA9PSAwLjAgPyAwLjAgOiBkcmlwKG51bSkpO1xcbn1cXG5cXG52ZWM0IHRyYW5zaXRpb24odmVjMiB1dikge1xcbiAgaW50IGJhciA9IGludCh1di54ICogKGZsb2F0KGJhcnMpKSk7XFxuICBmbG9hdCBzY2FsZSA9IDEuMCArIHBvcyhiYXIpICogYW1wbGl0dWRlO1xcbiAgZmxvYXQgcGhhc2UgPSBwcm9ncmVzcyAqIHNjYWxlO1xcbiAgZmxvYXQgcG9zWSA9IHV2LnkgLyB2ZWMyKDEuMCkueTtcXG4gIHZlYzIgcDtcXG4gIHZlYzQgYztcXG4gIGlmIChwaGFzZSArIHBvc1kgPCAxLjApIHtcXG4gICAgcCA9IHZlYzIodXYueCwgdXYueSArIG1peCgwLjAsIHZlYzIoMS4wKS55LCBwaGFzZSkpIC8gdmVjMigxLjApLnh5O1xcbiAgICBjID0gZ2V0RnJvbUNvbG9yKHApO1xcbiAgfSBlbHNlIHtcXG4gICAgcCA9IHV2Lnh5IC8gdmVjMigxLjApLnh5O1xcbiAgICBjID0gZ2V0VG9Db2xvcihwKTtcXG4gIH1cXG5cXG4gIC8vIEZpbmFsbHksIGFwcGx5IHRoZSBjb2xvclxcbiAgcmV0dXJuIGM7XFxufVxcblwiLFwiYXV0aG9yXCI6XCJaZWggRmVybmFuZG9cIixcImxpY2Vuc2VcIjpcIk1JVFwiLFwiY3JlYXRlZEF0XCI6XCJUdWUsIDMwIE1heSAyMDE3IDA5OjM5OjA5IC0wNzAwXCIsXCJ1cGRhdGVkQXRcIjpcIlR1ZSwgMzAgTWF5IDIwMTcgMDk6Mzk6MDkgLTA3MDBcIn0se1wibmFtZVwiOlwiRHJlYW15XCIsXCJwYXJhbXNUeXBlc1wiOnt9LFwiZGVmYXVsdFBhcmFtc1wiOnt9LFwiZ2xzbFwiOlwiLy8gQXV0aG9yOiBtaWtvbGFseXNlbmtvXFxuLy8gTGljZW5zZTogTUlUXFxuXFxudmVjMiBvZmZzZXQoZmxvYXQgcHJvZ3Jlc3MsIGZsb2F0IHgsIGZsb2F0IHRoZXRhKSB7XFxuICBmbG9hdCBwaGFzZSA9IHByb2dyZXNzKnByb2dyZXNzICsgcHJvZ3Jlc3MgKyB0aGV0YTtcXG4gIGZsb2F0IHNoaWZ0eSA9IDAuMDMqcHJvZ3Jlc3MqY29zKDEwLjAqKHByb2dyZXNzK3gpKTtcXG4gIHJldHVybiB2ZWMyKDAsIHNoaWZ0eSk7XFxufVxcbnZlYzQgdHJhbnNpdGlvbih2ZWMyIHApIHtcXG4gIHJldHVybiBtaXgoZ2V0RnJvbUNvbG9yKHAgKyBvZmZzZXQocHJvZ3Jlc3MsIHAueCwgMC4wKSksIGdldFRvQ29sb3IocCArIG9mZnNldCgxLjAtcHJvZ3Jlc3MsIHAueCwgMy4xNCkpLCBwcm9ncmVzcyk7XFxufVxcblwiLFwiYXV0aG9yXCI6XCJtaWtvbGFseXNlbmtvXCIsXCJsaWNlbnNlXCI6XCJNSVRcIixcImNyZWF0ZWRBdFwiOlwiTW9uLCAxMiBKdW4gMjAxNyAxMjoyNzozOCArMDgwMFwiLFwidXBkYXRlZEF0XCI6XCJNb24sIDEyIEp1biAyMDE3IDEyOjI3OjM4ICswODAwXCJ9LHtcIm5hbWVcIjpcIkRyZWFteVpvb21cIixcInBhcmFtc1R5cGVzXCI6e1wicm90YXRpb25cIjpcImZsb2F0XCIsXCJzY2FsZVwiOlwiZmxvYXRcIn0sXCJkZWZhdWx0UGFyYW1zXCI6e1wicm90YXRpb25cIjo2LFwic2NhbGVcIjoxLjJ9LFwiZ2xzbFwiOlwiLy8gQXV0aG9yOiBaZWggRmVybmFuZG9cXG4vLyBMaWNlbnNlOiBNSVRcXG5cXG4vLyBEZWZpbml0aW9ucyAtLS0tLS0tLVxcbiNkZWZpbmUgREVHMlJBRCAwLjAzOTI2OTkwODE2OTg3MjQxNTQ4MDc4MzA0MjI5MDk5IC8vIDEvMTgwKlBJXFxuXFxuXFxuLy8gVHJhbnNpdGlvbiBwYXJhbWV0ZXJzIC0tLS0tLS0tXFxuXFxuLy8gSW4gZGVncmVlc1xcbnVuaWZvcm0gZmxvYXQgcm90YXRpb247IC8vID0gNlxcblxcbi8vIE11bHRpcGxpZXJcXG51bmlmb3JtIGZsb2F0IHNjYWxlOyAvLyA9IDEuMlxcblxcblxcbi8vIFRoZSBjb2RlIHByb3BlciAtLS0tLS0tLVxcblxcbnZlYzQgdHJhbnNpdGlvbih2ZWMyIHV2KSB7XFxuICAvLyBNYXNzYWdlIHBhcmFtZXRlcnNcXG4gIGZsb2F0IHBoYXNlID0gcHJvZ3Jlc3MgPCAwLjUgPyBwcm9ncmVzcyAqIDIuMCA6IChwcm9ncmVzcyAtIDAuNSkgKiAyLjA7XFxuICBmbG9hdCBhbmdsZU9mZnNldCA9IHByb2dyZXNzIDwgMC41ID8gbWl4KDAuMCwgcm90YXRpb24gKiBERUcyUkFELCBwaGFzZSkgOiBtaXgoLXJvdGF0aW9uICogREVHMlJBRCwgMC4wLCBwaGFzZSk7XFxuICBmbG9hdCBuZXdTY2FsZSA9IHByb2dyZXNzIDwgMC41ID8gbWl4KDEuMCwgc2NhbGUsIHBoYXNlKSA6IG1peChzY2FsZSwgMS4wLCBwaGFzZSk7XFxuICBcXG4gIHZlYzIgY2VudGVyID0gdmVjMigwLCAwKTtcXG5cXG4gIC8vIENhbGN1bGF0ZSB0aGUgc291cmNlIHBvaW50XFxuICB2ZWMyIGFzc3VtZWRDZW50ZXIgPSB2ZWMyKDAuNSwgMC41KTtcXG4gIHZlYzIgcCA9ICh1di54eSAtIHZlYzIoMC41LCAwLjUpKSAvIG5ld1NjYWxlICogdmVjMihyYXRpbywgMS4wKTtcXG5cXG4gIC8vIFRoaXMgY2FuIHByb2JhYmx5IGJlIG9wdGltaXplZCAod2l0aCBkaXN0YW5jZSgpKVxcbiAgZmxvYXQgYW5nbGUgPSBhdGFuKHAueSwgcC54KSArIGFuZ2xlT2Zmc2V0O1xcbiAgZmxvYXQgZGlzdCA9IGRpc3RhbmNlKGNlbnRlciwgcCk7XFxuICBwLnggPSBjb3MoYW5nbGUpICogZGlzdCAvIHJhdGlvICsgMC41O1xcbiAgcC55ID0gc2luKGFuZ2xlKSAqIGRpc3QgKyAwLjU7XFxuICB2ZWM0IGMgPSBwcm9ncmVzcyA8IDAuNSA/IGdldEZyb21Db2xvcihwKSA6IGdldFRvQ29sb3IocCk7XFxuXFxuICAvLyBGaW5hbGx5LCBhcHBseSB0aGUgY29sb3JcXG4gIHJldHVybiBjICsgKHByb2dyZXNzIDwgMC41ID8gbWl4KDAuMCwgMS4wLCBwaGFzZSkgOiBtaXgoMS4wLCAwLjAsIHBoYXNlKSk7XFxufVxcblwiLFwiYXV0aG9yXCI6XCJaZWggRmVybmFuZG9cIixcImxpY2Vuc2VcIjpcIk1JVFwiLFwiY3JlYXRlZEF0XCI6XCJUdWUsIDMwIE1heSAyMDE3IDEwOjQ0OjA2IC0wNzAwXCIsXCJ1cGRhdGVkQXRcIjpcIlR1ZSwgMzAgTWF5IDIwMTcgMTA6NDQ6MDYgLTA3MDBcIn0se1wibmFtZVwiOlwiR2xpdGNoRGlzcGxhY2VcIixcInBhcmFtc1R5cGVzXCI6e30sXCJkZWZhdWx0UGFyYW1zXCI6e30sXCJnbHNsXCI6XCIvLyBBdXRob3I6IE1hdHQgRGVzTGF1cmllcnNcXG4vLyBMaWNlbnNlOiBNSVRcXG5cXG5oaWdocCBmbG9hdCByYW5kb20odmVjMiBjbylcXG57XFxuICAgIGhpZ2hwIGZsb2F0IGEgPSAxMi45ODk4O1xcbiAgICBoaWdocCBmbG9hdCBiID0gNzguMjMzO1xcbiAgICBoaWdocCBmbG9hdCBjID0gNDM3NTguNTQ1MztcXG4gICAgaGlnaHAgZmxvYXQgZHQ9IGRvdChjby54eSAsdmVjMihhLGIpKTtcXG4gICAgaGlnaHAgZmxvYXQgc249IG1vZChkdCwzLjE0KTtcXG4gICAgcmV0dXJuIGZyYWN0KHNpbihzbikgKiBjKTtcXG59XFxuZmxvYXQgdm9yb25vaSggaW4gdmVjMiB4ICkge1xcbiAgICB2ZWMyIHAgPSBmbG9vciggeCApO1xcbiAgICB2ZWMyIGYgPSBmcmFjdCggeCApO1xcbiAgICBmbG9hdCByZXMgPSA4LjA7XFxuICAgIGZvciggZmxvYXQgaj0tMS47IGo8PTEuOyBqKysgKVxcbiAgICBmb3IoIGZsb2F0IGk9LTEuOyBpPD0xLjsgaSsrICkge1xcbiAgICAgICAgdmVjMiAgYiA9IHZlYzIoIGksIGogKTtcXG4gICAgICAgIHZlYzIgIHIgPSBiIC0gZiArIHJhbmRvbSggcCArIGIgKTtcXG4gICAgICAgIGZsb2F0IGQgPSBkb3QoIHIsIHIgKTtcXG4gICAgICAgIHJlcyA9IG1pbiggcmVzLCBkICk7XFxuICAgIH1cXG4gICAgcmV0dXJuIHNxcnQoIHJlcyApO1xcbn1cXG5cXG52ZWMyIGRpc3BsYWNlKHZlYzQgdGV4LCB2ZWMyIHRleENvb3JkLCBmbG9hdCBkb3REZXB0aCwgZmxvYXQgdGV4dHVyZURlcHRoLCBmbG9hdCBzdHJlbmd0aCkge1xcbiAgICBmbG9hdCBiID0gdm9yb25vaSguMDAzICogdGV4Q29vcmQgKyAyLjApO1xcbiAgICBmbG9hdCBnID0gdm9yb25vaSgwLjIgKiB0ZXhDb29yZCk7XFxuICAgIGZsb2F0IHIgPSB2b3Jvbm9pKHRleENvb3JkIC0gMS4wKTtcXG4gICAgdmVjNCBkdCA9IHRleCAqIDEuMDtcXG4gICAgdmVjNCBkaXMgPSBkdCAqIGRvdERlcHRoICsgMS4wIC0gdGV4ICogdGV4dHVyZURlcHRoO1xcblxcbiAgICBkaXMueCA9IGRpcy54IC0gMS4wICsgdGV4dHVyZURlcHRoKmRvdERlcHRoO1xcbiAgICBkaXMueSA9IGRpcy55IC0gMS4wICsgdGV4dHVyZURlcHRoKmRvdERlcHRoO1xcbiAgICBkaXMueCAqPSBzdHJlbmd0aDtcXG4gICAgZGlzLnkgKj0gc3RyZW5ndGg7XFxuICAgIHZlYzIgcmVzX3V2ID0gdGV4Q29vcmQgO1xcbiAgICByZXNfdXYueCA9IHJlc191di54ICsgZGlzLnggLSAwLjA7XFxuICAgIHJlc191di55ID0gcmVzX3V2LnkgKyBkaXMueTtcXG4gICAgcmV0dXJuIHJlc191djtcXG59XFxuXFxuZmxvYXQgZWFzZTEoZmxvYXQgdCkge1xcbiAgcmV0dXJuIHQgPT0gMC4wIHx8IHQgPT0gMS4wXFxuICAgID8gdFxcbiAgICA6IHQgPCAwLjVcXG4gICAgICA/ICswLjUgKiBwb3coMi4wLCAoMjAuMCAqIHQpIC0gMTAuMClcXG4gICAgICA6IC0wLjUgKiBwb3coMi4wLCAxMC4wIC0gKHQgKiAyMC4wKSkgKyAxLjA7XFxufVxcbmZsb2F0IGVhc2UyKGZsb2F0IHQpIHtcXG4gIHJldHVybiB0ID09IDEuMCA/IHQgOiAxLjAgLSBwb3coMi4wLCAtMTAuMCAqIHQpO1xcbn1cXG5cXG5cXG5cXG52ZWM0IHRyYW5zaXRpb24odmVjMiB1dikge1xcbiAgdmVjMiBwID0gdXYueHkgLyB2ZWMyKDEuMCkueHk7XFxuICB2ZWM0IGNvbG9yMSA9IGdldEZyb21Db2xvcihwKTtcXG4gIHZlYzQgY29sb3IyID0gZ2V0VG9Db2xvcihwKTtcXG4gIHZlYzIgZGlzcCA9IGRpc3BsYWNlKGNvbG9yMSwgcCwgMC4zMywgMC43LCAxLjAtZWFzZTEocHJvZ3Jlc3MpKTtcXG4gIHZlYzIgZGlzcDIgPSBkaXNwbGFjZShjb2xvcjIsIHAsIDAuMzMsIDAuNSwgZWFzZTIocHJvZ3Jlc3MpKTtcXG4gIHZlYzQgZENvbG9yMSA9IGdldFRvQ29sb3IoZGlzcCk7XFxuICB2ZWM0IGRDb2xvcjIgPSBnZXRGcm9tQ29sb3IoZGlzcDIpO1xcbiAgZmxvYXQgdmFsID0gZWFzZTEocHJvZ3Jlc3MpO1xcbiAgdmVjMyBncmF5ID0gdmVjMyhkb3QobWluKGRDb2xvcjIsIGRDb2xvcjEpLnJnYiwgdmVjMygwLjI5OSwgMC41ODcsIDAuMTE0KSkpO1xcbiAgZENvbG9yMiA9IHZlYzQoZ3JheSwgMS4wKTtcXG4gIGRDb2xvcjIgKj0gMi4wO1xcbiAgY29sb3IxID0gbWl4KGNvbG9yMSwgZENvbG9yMiwgc21vb3Roc3RlcCgwLjAsIDAuNSwgcHJvZ3Jlc3MpKTtcXG4gIGNvbG9yMiA9IG1peChjb2xvcjIsIGRDb2xvcjEsIHNtb290aHN0ZXAoMS4wLCAwLjUsIHByb2dyZXNzKSk7XFxuICByZXR1cm4gbWl4KGNvbG9yMSwgY29sb3IyLCB2YWwpO1xcbiAgLy9nbF9GcmFnQ29sb3IgPSBtaXgoZ2xfRnJhZ0NvbG9yLCBkQ29sb3IsIHNtb290aHN0ZXAoMC4wLCAwLjUsIHByb2dyZXNzKSk7XFxuICBcXG4gICAvL2dsX0ZyYWdDb2xvciA9IG1peCh0ZXh0dXJlMkQoZnJvbSwgcCksIHRleHR1cmUyRCh0bywgcCksIHByb2dyZXNzKTtcXG59XFxuXCIsXCJhdXRob3JcIjpcIk1hdHQgRGVzTGF1cmllcnNcIixcImxpY2Vuc2VcIjpcIk1JVFwiLFwiY3JlYXRlZEF0XCI6XCJUdWUsIDMwIE1heSAyMDE3IDE0OjUzOjA0IC0wNDAwXCIsXCJ1cGRhdGVkQXRcIjpcIlR1ZSwgMzAgTWF5IDIwMTcgMTQ6NTM6MDQgLTA0MDBcIn0se1wibmFtZVwiOlwiR2xpdGNoTWVtb3JpZXNcIixcInBhcmFtc1R5cGVzXCI6e30sXCJkZWZhdWx0UGFyYW1zXCI6e30sXCJnbHNsXCI6XCIvLyBhdXRob3I6IEd1bm5hciBSb3RoXFxuLy8gYmFzZWQgb24gd29yayBmcm9tIG5hdGV3YXZlXFxuLy8gbGljZW5zZTogTUlUXFxudmVjNCB0cmFuc2l0aW9uKHZlYzIgcCkge1xcbiAgdmVjMiBibG9jayA9IGZsb29yKHAueHkgLyB2ZWMyKDE2KSk7XFxuICB2ZWMyIHV2X25vaXNlID0gYmxvY2sgLyB2ZWMyKDY0KTtcXG4gIHV2X25vaXNlICs9IGZsb29yKHZlYzIocHJvZ3Jlc3MpICogdmVjMigxMjAwLjAsIDM1MDAuMCkpIC8gdmVjMig2NCk7XFxuICB2ZWMyIGRpc3QgPSBwcm9ncmVzcyA+IDAuMCA/IChmcmFjdCh1dl9ub2lzZSkgLSAwLjUpICogMC4zICooMS4wIC1wcm9ncmVzcykgOiB2ZWMyKDAuMCk7XFxuICB2ZWMyIHJlZCA9IHAgKyBkaXN0ICogMC4yO1xcbiAgdmVjMiBncmVlbiA9IHAgKyBkaXN0ICogLjM7XFxuICB2ZWMyIGJsdWUgPSBwICsgZGlzdCAqIC41O1xcblxcbiAgcmV0dXJuIHZlYzQobWl4KGdldEZyb21Db2xvcihyZWQpLCBnZXRUb0NvbG9yKHJlZCksIHByb2dyZXNzKS5yLG1peChnZXRGcm9tQ29sb3IoZ3JlZW4pLCBnZXRUb0NvbG9yKGdyZWVuKSwgcHJvZ3Jlc3MpLmcsbWl4KGdldEZyb21Db2xvcihibHVlKSwgZ2V0VG9Db2xvcihibHVlKSwgcHJvZ3Jlc3MpLmIsMS4wKTtcXG59XFxuXFxuXCIsXCJhdXRob3JcIjpcIkd1bm5hciBSb3RoXCIsXCJsaWNlbnNlXCI6XCJNSVRcIixcImNyZWF0ZWRBdFwiOlwiV2VkLCAyMSBGZWIgMjAxOCAwMDo1MjoxNSArMDEwMFwiLFwidXBkYXRlZEF0XCI6XCJXZWQsIDIxIEZlYiAyMDE4IDE5OjMyOjAyICswMTAwXCJ9LHtcIm5hbWVcIjpcIkdyaWRGbGlwXCIsXCJwYXJhbXNUeXBlc1wiOntcInNpemVcIjpcIml2ZWMyXCIsXCJwYXVzZVwiOlwiZmxvYXRcIixcImRpdmlkZXJXaWR0aFwiOlwiZmxvYXRcIixcImJnY29sb3JcIjpcInZlYzRcIixcInJhbmRvbW5lc3NcIjpcImZsb2F0XCJ9LFwiZGVmYXVsdFBhcmFtc1wiOntcInNpemVcIjpbNCw0XSxcInBhdXNlXCI6MC4xLFwiZGl2aWRlcldpZHRoXCI6MC4wNSxcImJnY29sb3JcIjpbMCwwLDAsMV0sXCJyYW5kb21uZXNzXCI6MC4xfSxcImdsc2xcIjpcIi8vIExpY2Vuc2U6IE1JVFxcbi8vIEF1dGhvcjogVGltRG9uc2VsYWFyXFxuLy8gcG9ydGVkIGJ5IGdyZSBmcm9tIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL1RpbURvbnNlbGFhci85YmNkMWM0YjU5MzRiYTYwMDg3YmRiNTVjMmVhOTJlNVxcblxcbnVuaWZvcm0gaXZlYzIgc2l6ZTsgLy8gPSBpdmVjMig0KVxcbnVuaWZvcm0gZmxvYXQgcGF1c2U7IC8vID0gMC4xXFxudW5pZm9ybSBmbG9hdCBkaXZpZGVyV2lkdGg7IC8vID0gMC4wNVxcbnVuaWZvcm0gdmVjNCBiZ2NvbG9yOyAvLyA9IHZlYzQoMC4wLCAwLjAsIDAuMCwgMS4wKVxcbnVuaWZvcm0gZmxvYXQgcmFuZG9tbmVzczsgLy8gPSAwLjFcXG4gXFxuZmxvYXQgcmFuZCAodmVjMiBjbykge1xcbiAgcmV0dXJuIGZyYWN0KHNpbihkb3QoY28ueHkgLHZlYzIoMTIuOTg5OCw3OC4yMzMpKSkgKiA0Mzc1OC41NDUzKTtcXG59XFxuXFxuZmxvYXQgZ2V0RGVsdGEodmVjMiBwKSB7XFxuICB2ZWMyIHJlY3RhbmdsZVBvcyA9IGZsb29yKHZlYzIoc2l6ZSkgKiBwKTtcXG4gIHZlYzIgcmVjdGFuZ2xlU2l6ZSA9IHZlYzIoMS4wIC8gdmVjMihzaXplKS54LCAxLjAgLyB2ZWMyKHNpemUpLnkpO1xcbiAgZmxvYXQgdG9wID0gcmVjdGFuZ2xlU2l6ZS55ICogKHJlY3RhbmdsZVBvcy55ICsgMS4wKTtcXG4gIGZsb2F0IGJvdHRvbSA9IHJlY3RhbmdsZVNpemUueSAqIHJlY3RhbmdsZVBvcy55O1xcbiAgZmxvYXQgbGVmdCA9IHJlY3RhbmdsZVNpemUueCAqIHJlY3RhbmdsZVBvcy54O1xcbiAgZmxvYXQgcmlnaHQgPSByZWN0YW5nbGVTaXplLnggKiAocmVjdGFuZ2xlUG9zLnggKyAxLjApO1xcbiAgZmxvYXQgbWluWCA9IG1pbihhYnMocC54IC0gbGVmdCksIGFicyhwLnggLSByaWdodCkpO1xcbiAgZmxvYXQgbWluWSA9IG1pbihhYnMocC55IC0gdG9wKSwgYWJzKHAueSAtIGJvdHRvbSkpO1xcbiAgcmV0dXJuIG1pbihtaW5YLCBtaW5ZKTtcXG59XFxuXFxuZmxvYXQgZ2V0RGl2aWRlclNpemUoKSB7XFxuICB2ZWMyIHJlY3RhbmdsZVNpemUgPSB2ZWMyKDEuMCAvIHZlYzIoc2l6ZSkueCwgMS4wIC8gdmVjMihzaXplKS55KTtcXG4gIHJldHVybiBtaW4ocmVjdGFuZ2xlU2l6ZS54LCByZWN0YW5nbGVTaXplLnkpICogZGl2aWRlcldpZHRoO1xcbn1cXG5cXG52ZWM0IHRyYW5zaXRpb24odmVjMiBwKSB7XFxuICBpZihwcm9ncmVzcyA8IHBhdXNlKSB7XFxuICAgIGZsb2F0IGN1cnJlbnRQcm9nID0gcHJvZ3Jlc3MgLyBwYXVzZTtcXG4gICAgZmxvYXQgYSA9IDEuMDtcXG4gICAgaWYoZ2V0RGVsdGEocCkgPCBnZXREaXZpZGVyU2l6ZSgpKSB7XFxuICAgICAgYSA9IDEuMCAtIGN1cnJlbnRQcm9nO1xcbiAgICB9XFxuICAgIHJldHVybiBtaXgoYmdjb2xvciwgZ2V0RnJvbUNvbG9yKHApLCBhKTtcXG4gIH1cXG4gIGVsc2UgaWYocHJvZ3Jlc3MgPCAxLjAgLSBwYXVzZSl7XFxuICAgIGlmKGdldERlbHRhKHApIDwgZ2V0RGl2aWRlclNpemUoKSkge1xcbiAgICAgIHJldHVybiBiZ2NvbG9yO1xcbiAgICB9IGVsc2Uge1xcbiAgICAgIGZsb2F0IGN1cnJlbnRQcm9nID0gKHByb2dyZXNzIC0gcGF1c2UpIC8gKDEuMCAtIHBhdXNlICogMi4wKTtcXG4gICAgICB2ZWMyIHEgPSBwO1xcbiAgICAgIHZlYzIgcmVjdGFuZ2xlUG9zID0gZmxvb3IodmVjMihzaXplKSAqIHEpO1xcbiAgICAgIFxcbiAgICAgIGZsb2F0IHIgPSByYW5kKHJlY3RhbmdsZVBvcykgLSByYW5kb21uZXNzO1xcbiAgICAgIGZsb2F0IGNwID0gc21vb3Roc3RlcCgwLjAsIDEuMCAtIHIsIGN1cnJlbnRQcm9nKTtcXG4gICAgXFxuICAgICAgZmxvYXQgcmVjdGFuZ2xlU2l6ZSA9IDEuMCAvIHZlYzIoc2l6ZSkueDtcXG4gICAgICBmbG9hdCBkZWx0YSA9IHJlY3RhbmdsZVBvcy54ICogcmVjdGFuZ2xlU2l6ZTtcXG4gICAgICBmbG9hdCBvZmZzZXQgPSByZWN0YW5nbGVTaXplIC8gMi4wICsgZGVsdGE7XFxuICAgICAgXFxuICAgICAgcC54ID0gKHAueCAtIG9mZnNldCkvYWJzKGNwIC0gMC41KSowLjUgKyBvZmZzZXQ7XFxuICAgICAgdmVjNCBhID0gZ2V0RnJvbUNvbG9yKHApO1xcbiAgICAgIHZlYzQgYiA9IGdldFRvQ29sb3IocCk7XFxuICAgICAgXFxuICAgICAgZmxvYXQgcyA9IHN0ZXAoYWJzKHZlYzIoc2l6ZSkueCAqIChxLnggLSBkZWx0YSkgLSAwLjUpLCBhYnMoY3AgLSAwLjUpKTtcXG4gICAgICByZXR1cm4gbWl4KGJnY29sb3IsIG1peChiLCBhLCBzdGVwKGNwLCAwLjUpKSwgcyk7XFxuICAgIH1cXG4gIH1cXG4gIGVsc2Uge1xcbiAgICBmbG9hdCBjdXJyZW50UHJvZyA9IChwcm9ncmVzcyAtIDEuMCArIHBhdXNlKSAvIHBhdXNlO1xcbiAgICBmbG9hdCBhID0gMS4wO1xcbiAgICBpZihnZXREZWx0YShwKSA8IGdldERpdmlkZXJTaXplKCkpIHtcXG4gICAgICBhID0gY3VycmVudFByb2c7XFxuICAgIH1cXG4gICAgcmV0dXJuIG1peChiZ2NvbG9yLCBnZXRUb0NvbG9yKHApLCBhKTtcXG4gIH1cXG59XFxuXCIsXCJsaWNlbnNlXCI6XCJNSVRcIixcImF1dGhvclwiOlwiVGltRG9uc2VsYWFyXCIsXCJjcmVhdGVkQXRcIjpcIk1vbiwgMTIgSnVuIDIwMTcgMTE6MzI6NTEgKzA4MDBcIixcInVwZGF0ZWRBdFwiOlwiTW9uLCAxMiBKdW4gMjAxNyAxMTozMjo1MSArMDgwMFwifSx7XCJuYW1lXCI6XCJJbnZlcnRlZFBhZ2VDdXJsXCIsXCJwYXJhbXNUeXBlc1wiOnt9LFwiZGVmYXVsdFBhcmFtc1wiOnt9LFwiZ2xzbFwiOlwiLy8gYXV0aG9yOiBIZXdsZXR0LVBhY2thcmRcXG4vLyBsaWNlbnNlOiBCU0QgMyBDbGF1c2VcXG4vLyBBZGFwdGVkIGJ5IFNlcmdleSBLb3NhcmV2c2t5IGZyb206XFxuLy8gaHR0cDovL3JlY3RhbG9naWMuZ2l0aHViLmlvL3dlYnZmeC9leGFtcGxlc18ydHJhbnNpdGlvbi1zaGFkZXItcGFnZWN1cmxfOGh0bWwtZXhhbXBsZS5odG1sXFxuXFxuLypcXG5Db3B5cmlnaHQgKGMpIDIwMTAgSGV3bGV0dC1QYWNrYXJkIERldmVsb3BtZW50IENvbXBhbnksIEwuUC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG5cXG5SZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcXG5tb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlXFxubWV0OlxcblxcbiAgICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHRcXG4gICAgIG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cXG4gICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmVcXG4gICAgIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXJcXG4gICAgIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcXG4gICAgIGRpc3RyaWJ1dGlvbi5cXG4gICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgSGV3bGV0dC1QYWNrYXJkIG5vciB0aGUgbmFtZXMgb2YgaXRzXFxuICAgICBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbVxcbiAgICAgdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cXG5cXG5USElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTXFxuXFxcIkFTIElTXFxcIiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1RcXG5MSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1JcXG5BIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVFxcbk9XTkVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLFxcblNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1RcXG5MSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcXG5EQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTllcXG5USEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUXFxuKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFXFxuT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cXG5pbiB2ZWMyIHRleENvb3JkO1xcbiovXFxuXFxuY29uc3QgZmxvYXQgTUlOX0FNT1VOVCA9IC0wLjE2O1xcbmNvbnN0IGZsb2F0IE1BWF9BTU9VTlQgPSAxLjU7XFxuZmxvYXQgYW1vdW50ID0gcHJvZ3Jlc3MgKiAoTUFYX0FNT1VOVCAtIE1JTl9BTU9VTlQpICsgTUlOX0FNT1VOVDtcXG5cXG5jb25zdCBmbG9hdCBQSSA9IDMuMTQxNTkyNjUzNTg5NzkzO1xcblxcbmNvbnN0IGZsb2F0IHNjYWxlID0gNTEyLjA7XFxuY29uc3QgZmxvYXQgc2hhcnBuZXNzID0gMy4wO1xcblxcbmZsb2F0IGN5bGluZGVyQ2VudGVyID0gYW1vdW50O1xcbi8vIDM2MCBkZWdyZWVzICogYW1vdW50XFxuZmxvYXQgY3lsaW5kZXJBbmdsZSA9IDIuMCAqIFBJICogYW1vdW50O1xcblxcbmNvbnN0IGZsb2F0IGN5bGluZGVyUmFkaXVzID0gMS4wIC8gUEkgLyAyLjA7XFxuXFxudmVjMyBoaXRQb2ludChmbG9hdCBoaXRBbmdsZSwgZmxvYXQgeWMsIHZlYzMgcG9pbnQsIG1hdDMgcnJvdGF0aW9uKVxcbntcXG4gICAgICAgIGZsb2F0IGhpdFBvaW50ID0gaGl0QW5nbGUgLyAoMi4wICogUEkpO1xcbiAgICAgICAgcG9pbnQueSA9IGhpdFBvaW50O1xcbiAgICAgICAgcmV0dXJuIHJyb3RhdGlvbiAqIHBvaW50O1xcbn1cXG5cXG52ZWM0IGFudGlBbGlhcyh2ZWM0IGNvbG9yMSwgdmVjNCBjb2xvcjIsIGZsb2F0IGRpc3RhbmMpXFxue1xcbiAgICAgICAgZGlzdGFuYyAqPSBzY2FsZTtcXG4gICAgICAgIGlmIChkaXN0YW5jIDwgMC4wKSByZXR1cm4gY29sb3IyO1xcbiAgICAgICAgaWYgKGRpc3RhbmMgPiAyLjApIHJldHVybiBjb2xvcjE7XFxuICAgICAgICBmbG9hdCBkZCA9IHBvdygxLjAgLSBkaXN0YW5jIC8gMi4wLCBzaGFycG5lc3MpO1xcbiAgICAgICAgcmV0dXJuICgoY29sb3IyIC0gY29sb3IxKSAqIGRkKSArIGNvbG9yMTtcXG59XFxuXFxuZmxvYXQgZGlzdGFuY2VUb0VkZ2UodmVjMyBwb2ludClcXG57XFxuICAgICAgICBmbG9hdCBkeCA9IGFicyhwb2ludC54ID4gMC41ID8gMS4wIC0gcG9pbnQueCA6IHBvaW50LngpO1xcbiAgICAgICAgZmxvYXQgZHkgPSBhYnMocG9pbnQueSA+IDAuNSA/IDEuMCAtIHBvaW50LnkgOiBwb2ludC55KTtcXG4gICAgICAgIGlmIChwb2ludC54IDwgMC4wKSBkeCA9IC1wb2ludC54O1xcbiAgICAgICAgaWYgKHBvaW50LnggPiAxLjApIGR4ID0gcG9pbnQueCAtIDEuMDtcXG4gICAgICAgIGlmIChwb2ludC55IDwgMC4wKSBkeSA9IC1wb2ludC55O1xcbiAgICAgICAgaWYgKHBvaW50LnkgPiAxLjApIGR5ID0gcG9pbnQueSAtIDEuMDtcXG4gICAgICAgIGlmICgocG9pbnQueCA8IDAuMCB8fCBwb2ludC54ID4gMS4wKSAmJiAocG9pbnQueSA8IDAuMCB8fCBwb2ludC55ID4gMS4wKSkgcmV0dXJuIHNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xcbiAgICAgICAgcmV0dXJuIG1pbihkeCwgZHkpO1xcbn1cXG5cXG52ZWM0IHNlZVRocm91Z2goZmxvYXQgeWMsIHZlYzIgcCwgbWF0MyByb3RhdGlvbiwgbWF0MyBycm90YXRpb24pXFxue1xcbiAgICAgICAgZmxvYXQgaGl0QW5nbGUgPSBQSSAtIChhY29zKHljIC8gY3lsaW5kZXJSYWRpdXMpIC0gY3lsaW5kZXJBbmdsZSk7XFxuICAgICAgICB2ZWMzIHBvaW50ID0gaGl0UG9pbnQoaGl0QW5nbGUsIHljLCByb3RhdGlvbiAqIHZlYzMocCwgMS4wKSwgcnJvdGF0aW9uKTtcXG4gICAgICAgIGlmICh5YyA8PSAwLjAgJiYgKHBvaW50LnggPCAwLjAgfHwgcG9pbnQueSA8IDAuMCB8fCBwb2ludC54ID4gMS4wIHx8IHBvaW50LnkgPiAxLjApKVxcbiAgICAgICAge1xcbiAgICAgICAgICAgIHJldHVybiBnZXRUb0NvbG9yKHApO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgaWYgKHljID4gMC4wKSByZXR1cm4gZ2V0RnJvbUNvbG9yKHApO1xcblxcbiAgICAgICAgdmVjNCBjb2xvciA9IGdldEZyb21Db2xvcihwb2ludC54eSk7XFxuICAgICAgICB2ZWM0IHRjb2xvciA9IHZlYzQoMC4wKTtcXG5cXG4gICAgICAgIHJldHVybiBhbnRpQWxpYXMoY29sb3IsIHRjb2xvciwgZGlzdGFuY2VUb0VkZ2UocG9pbnQpKTtcXG59XFxuXFxudmVjNCBzZWVUaHJvdWdoV2l0aFNoYWRvdyhmbG9hdCB5YywgdmVjMiBwLCB2ZWMzIHBvaW50LCBtYXQzIHJvdGF0aW9uLCBtYXQzIHJyb3RhdGlvbilcXG57XFxuICAgICAgICBmbG9hdCBzaGFkb3cgPSBkaXN0YW5jZVRvRWRnZShwb2ludCkgKiAzMC4wO1xcbiAgICAgICAgc2hhZG93ID0gKDEuMCAtIHNoYWRvdykgLyAzLjA7XFxuXFxuICAgICAgICBpZiAoc2hhZG93IDwgMC4wKSBzaGFkb3cgPSAwLjA7IGVsc2Ugc2hhZG93ICo9IGFtb3VudDtcXG5cXG4gICAgICAgIHZlYzQgc2hhZG93Q29sb3IgPSBzZWVUaHJvdWdoKHljLCBwLCByb3RhdGlvbiwgcnJvdGF0aW9uKTtcXG4gICAgICAgIHNoYWRvd0NvbG9yLnIgLT0gc2hhZG93O1xcbiAgICAgICAgc2hhZG93Q29sb3IuZyAtPSBzaGFkb3c7XFxuICAgICAgICBzaGFkb3dDb2xvci5iIC09IHNoYWRvdztcXG5cXG4gICAgICAgIHJldHVybiBzaGFkb3dDb2xvcjtcXG59XFxuXFxudmVjNCBiYWNrc2lkZShmbG9hdCB5YywgdmVjMyBwb2ludClcXG57XFxuICAgICAgICB2ZWM0IGNvbG9yID0gZ2V0RnJvbUNvbG9yKHBvaW50Lnh5KTtcXG4gICAgICAgIGZsb2F0IGdyYXkgPSAoY29sb3IuciArIGNvbG9yLmIgKyBjb2xvci5nKSAvIDE1LjA7XFxuICAgICAgICBncmF5ICs9ICg4LjAgLyAxMC4wKSAqIChwb3coMS4wIC0gYWJzKHljIC8gY3lsaW5kZXJSYWRpdXMpLCAyLjAgLyAxMC4wKSAvIDIuMCArICg1LjAgLyAxMC4wKSk7XFxuICAgICAgICBjb2xvci5yZ2IgPSB2ZWMzKGdyYXkpO1xcbiAgICAgICAgcmV0dXJuIGNvbG9yO1xcbn1cXG5cXG52ZWM0IGJlaGluZFN1cmZhY2UodmVjMiBwLCBmbG9hdCB5YywgdmVjMyBwb2ludCwgbWF0MyBycm90YXRpb24pXFxue1xcbiAgICAgICAgZmxvYXQgc2hhZG8gPSAoMS4wIC0gKCgtY3lsaW5kZXJSYWRpdXMgLSB5YykgLyBhbW91bnQgKiA3LjApKSAvIDYuMDtcXG4gICAgICAgIHNoYWRvICo9IDEuMCAtIGFicyhwb2ludC54IC0gMC41KTtcXG5cXG4gICAgICAgIHljID0gKC1jeWxpbmRlclJhZGl1cyAtIGN5bGluZGVyUmFkaXVzIC0geWMpO1xcblxcbiAgICAgICAgZmxvYXQgaGl0QW5nbGUgPSAoYWNvcyh5YyAvIGN5bGluZGVyUmFkaXVzKSArIGN5bGluZGVyQW5nbGUpIC0gUEk7XFxuICAgICAgICBwb2ludCA9IGhpdFBvaW50KGhpdEFuZ2xlLCB5YywgcG9pbnQsIHJyb3RhdGlvbik7XFxuXFxuICAgICAgICBpZiAoeWMgPCAwLjAgJiYgcG9pbnQueCA+PSAwLjAgJiYgcG9pbnQueSA+PSAwLjAgJiYgcG9pbnQueCA8PSAxLjAgJiYgcG9pbnQueSA8PSAxLjAgJiYgKGhpdEFuZ2xlIDwgUEkgfHwgYW1vdW50ID4gMC41KSlcXG4gICAgICAgIHtcXG4gICAgICAgICAgICAgICAgc2hhZG8gPSAxLjAgLSAoc3FydChwb3cocG9pbnQueCAtIDAuNSwgMi4wKSArIHBvdyhwb2ludC55IC0gMC41LCAyLjApKSAvICg3MS4wIC8gMTAwLjApKTtcXG4gICAgICAgICAgICAgICAgc2hhZG8gKj0gcG93KC15YyAvIGN5bGluZGVyUmFkaXVzLCAzLjApO1xcbiAgICAgICAgICAgICAgICBzaGFkbyAqPSAwLjU7XFxuICAgICAgICB9XFxuICAgICAgICBlbHNlXFxuICAgICAgICB7XFxuICAgICAgICAgICAgICAgIHNoYWRvID0gMC4wO1xcbiAgICAgICAgfVxcbiAgICAgICAgcmV0dXJuIHZlYzQoZ2V0VG9Db2xvcihwKS5yZ2IgLSBzaGFkbywgMS4wKTtcXG59XFxuXFxudmVjNCB0cmFuc2l0aW9uKHZlYzIgcCkge1xcblxcbiAgY29uc3QgZmxvYXQgYW5nbGUgPSAxMDAuMCAqIFBJIC8gMTgwLjA7XFxuICAgICAgICBmbG9hdCBjID0gY29zKC1hbmdsZSk7XFxuICAgICAgICBmbG9hdCBzID0gc2luKC1hbmdsZSk7XFxuXFxuICAgICAgICBtYXQzIHJvdGF0aW9uID0gbWF0MyggYywgcywgMCxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXMsIGMsIDAsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0wLjgwMSwgMC44OTAwLCAxXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XFxuICAgICAgICBjID0gY29zKGFuZ2xlKTtcXG4gICAgICAgIHMgPSBzaW4oYW5nbGUpO1xcblxcbiAgICAgICAgbWF0MyBycm90YXRpb24gPSBtYXQzKFxcdGMsIHMsIDAsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXMsIGMsIDAsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMC45ODUwMCwgMC45ODUsIDFcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcXG5cXG4gICAgICAgIHZlYzMgcG9pbnQgPSByb3RhdGlvbiAqIHZlYzMocCwgMS4wKTtcXG5cXG4gICAgICAgIGZsb2F0IHljID0gcG9pbnQueSAtIGN5bGluZGVyQ2VudGVyO1xcblxcbiAgICAgICAgaWYgKHljIDwgLWN5bGluZGVyUmFkaXVzKVxcbiAgICAgICAge1xcbiAgICAgICAgICAgICAgICAvLyBCZWhpbmQgc3VyZmFjZVxcbiAgICAgICAgICAgICAgICByZXR1cm4gYmVoaW5kU3VyZmFjZShwLHljLCBwb2ludCwgcnJvdGF0aW9uKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGlmICh5YyA+IGN5bGluZGVyUmFkaXVzKVxcbiAgICAgICAge1xcbiAgICAgICAgICAgICAgICAvLyBGbGF0IHN1cmZhY2VcXG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldEZyb21Db2xvcihwKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGZsb2F0IGhpdEFuZ2xlID0gKGFjb3MoeWMgLyBjeWxpbmRlclJhZGl1cykgKyBjeWxpbmRlckFuZ2xlKSAtIFBJO1xcblxcbiAgICAgICAgZmxvYXQgaGl0QW5nbGVNb2QgPSBtb2QoaGl0QW5nbGUsIDIuMCAqIFBJKTtcXG4gICAgICAgIGlmICgoaGl0QW5nbGVNb2QgPiBQSSAmJiBhbW91bnQgPCAwLjUpIHx8IChoaXRBbmdsZU1vZCA+IFBJLzIuMCAmJiBhbW91bnQgPCAwLjApKVxcbiAgICAgICAge1xcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VlVGhyb3VnaCh5YywgcCwgcm90YXRpb24sIHJyb3RhdGlvbik7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBwb2ludCA9IGhpdFBvaW50KGhpdEFuZ2xlLCB5YywgcG9pbnQsIHJyb3RhdGlvbik7XFxuXFxuICAgICAgICBpZiAocG9pbnQueCA8IDAuMCB8fCBwb2ludC55IDwgMC4wIHx8IHBvaW50LnggPiAxLjAgfHwgcG9pbnQueSA+IDEuMClcXG4gICAgICAgIHtcXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlZVRocm91Z2hXaXRoU2hhZG93KHljLCBwLCBwb2ludCwgcm90YXRpb24sIHJyb3RhdGlvbik7XFxuICAgICAgICB9XFxuXFxuICAgICAgICB2ZWM0IGNvbG9yID0gYmFja3NpZGUoeWMsIHBvaW50KTtcXG5cXG4gICAgICAgIHZlYzQgb3RoZXJDb2xvcjtcXG4gICAgICAgIGlmICh5YyA8IDAuMClcXG4gICAgICAgIHtcXG4gICAgICAgICAgICAgICAgZmxvYXQgc2hhZG8gPSAxLjAgLSAoc3FydChwb3cocG9pbnQueCAtIDAuNSwgMi4wKSArIHBvdyhwb2ludC55IC0gMC41LCAyLjApKSAvIDAuNzEpO1xcbiAgICAgICAgICAgICAgICBzaGFkbyAqPSBwb3coLXljIC8gY3lsaW5kZXJSYWRpdXMsIDMuMCk7XFxuICAgICAgICAgICAgICAgIHNoYWRvICo9IDAuNTtcXG4gICAgICAgICAgICAgICAgb3RoZXJDb2xvciA9IHZlYzQoMC4wLCAwLjAsIDAuMCwgc2hhZG8pO1xcbiAgICAgICAgfVxcbiAgICAgICAgZWxzZVxcbiAgICAgICAge1xcbiAgICAgICAgICAgICAgICBvdGhlckNvbG9yID0gZ2V0RnJvbUNvbG9yKHApO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgY29sb3IgPSBhbnRpQWxpYXMoY29sb3IsIG90aGVyQ29sb3IsIGN5bGluZGVyUmFkaXVzIC0gYWJzKHljKSk7XFxuXFxuICAgICAgICB2ZWM0IGNsID0gc2VlVGhyb3VnaFdpdGhTaGFkb3coeWMsIHAsIHBvaW50LCByb3RhdGlvbiwgcnJvdGF0aW9uKTtcXG4gICAgICAgIGZsb2F0IGRpc3QgPSBkaXN0YW5jZVRvRWRnZShwb2ludCk7XFxuXFxuICAgICAgICByZXR1cm4gYW50aUFsaWFzKGNvbG9yLCBjbCwgZGlzdCk7XFxufVxcblwiLFwiYXV0aG9yXCI6XCJIZXdsZXR0LVBhY2thcmRcIixcImxpY2Vuc2VcIjpcIkJTRCAzIENsYXVzZVwiLFwiY3JlYXRlZEF0XCI6XCJXZWQsIDIxIEZlYiAyMDE4IDAxOjEzOjQ5ICswMTAwXCIsXCJ1cGRhdGVkQXRcIjpcIldlZCwgMjEgRmViIDIwMTggMTY6MDA6MDIgKzAxMDBcIn0se1wibmFtZVwiOlwiTGluZWFyQmx1clwiLFwicGFyYW1zVHlwZXNcIjp7XCJpbnRlbnNpdHlcIjpcImZsb2F0XCJ9LFwiZGVmYXVsdFBhcmFtc1wiOntcImludGVuc2l0eVwiOjAuMX0sXCJnbHNsXCI6XCIvLyBhdXRob3I6IGdyZVxcbi8vIGxpY2Vuc2U6IE1JVFxcbnVuaWZvcm0gZmxvYXQgaW50ZW5zaXR5OyAvLyA9IDAuMVxcbmNvbnN0IGludCBwYXNzZXMgPSA2O1xcblxcbnZlYzQgdHJhbnNpdGlvbih2ZWMyIHV2KSB7XFxuICAgIHZlYzQgYzEgPSB2ZWM0KDAuMCk7XFxuICAgIHZlYzQgYzIgPSB2ZWM0KDAuMCk7XFxuXFxuICAgIGZsb2F0IGRpc3AgPSBpbnRlbnNpdHkqKDAuNS1kaXN0YW5jZSgwLjUsIHByb2dyZXNzKSk7XFxuICAgIGZvciAoaW50IHhpPTA7IHhpPHBhc3NlczsgeGkrKylcXG4gICAge1xcbiAgICAgICAgZmxvYXQgeCA9IGZsb2F0KHhpKSAvIGZsb2F0KHBhc3NlcykgLSAwLjU7XFxuICAgICAgICBmb3IgKGludCB5aT0wOyB5aTxwYXNzZXM7IHlpKyspXFxuICAgICAgICB7XFxuICAgICAgICAgICAgZmxvYXQgeSA9IGZsb2F0KHlpKSAvIGZsb2F0KHBhc3NlcykgLSAwLjU7XFxuICAgICAgICAgICAgdmVjMiB2ID0gdmVjMih4LHkpO1xcbiAgICAgICAgICAgIGZsb2F0IGQgPSBkaXNwO1xcbiAgICAgICAgICAgIGMxICs9IGdldEZyb21Db2xvciggdXYgKyBkKnYpO1xcbiAgICAgICAgICAgIGMyICs9IGdldFRvQ29sb3IoIHV2ICsgZCp2KTtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICBjMSAvPSBmbG9hdChwYXNzZXMqcGFzc2VzKTtcXG4gICAgYzIgLz0gZmxvYXQocGFzc2VzKnBhc3Nlcyk7XFxuICAgIHJldHVybiBtaXgoYzEsIGMyLCBwcm9ncmVzcyk7XFxufVxcblwiLFwiYXV0aG9yXCI6XCJncmVcIixcImxpY2Vuc2VcIjpcIk1JVFwiLFwiY3JlYXRlZEF0XCI6XCJGcmksIDIzIEZlYiAyMDE4IDE1OjE4OjIyICswMTAwXCIsXCJ1cGRhdGVkQXRcIjpcIkZyaSwgMjMgRmViIDIwMTggMTU6MTg6MjIgKzAxMDBcIn0se1wibmFtZVwiOlwiTW9zYWljXCIsXCJwYXJhbXNUeXBlc1wiOntcImVuZHhcIjpcImludFwiLFwiZW5keVwiOlwiaW50XCJ9LFwiZGVmYXVsdFBhcmFtc1wiOntcImVuZHhcIjoyLFwiZW5keVwiOi0xfSxcImdsc2xcIjpcIi8vIExpY2Vuc2U6IE1JVFxcbi8vIEF1dGhvcjogWGF5Y2hydVxcbi8vIHBvcnRlZCBieSBncmUgZnJvbSBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9YYXljaHJ1LzEzMGJiN2I3YWZmZWRiZGE5ZGY1XFxuXFxuI2RlZmluZSBQSSAzLjE0MTU5MjY1MzU4OTc5MzIzXFxuI2RlZmluZSBQT1cyKFgpIFgqWFxcbiNkZWZpbmUgUE9XMyhYKSBYKlgqWFxcbnVuaWZvcm0gaW50IGVuZHg7IC8vID0gMlxcbnVuaWZvcm0gaW50IGVuZHk7IC8vID0gLTFcXG5cXG5mbG9hdCBSYW5kKHZlYzIgdikge1xcbiAgcmV0dXJuIGZyYWN0KHNpbihkb3Qodi54eSAsdmVjMigxMi45ODk4LDc4LjIzMykpKSAqIDQzNzU4LjU0NTMpO1xcbn1cXG52ZWMyIFJvdGF0ZSh2ZWMyIHYsIGZsb2F0IGEpIHtcXG4gIG1hdDIgcm0gPSBtYXQyKGNvcyhhKSwgLXNpbihhKSxcXG4gICAgICAgICAgICAgICAgIHNpbihhKSwgY29zKGEpKTtcXG4gIHJldHVybiBybSp2O1xcbn1cXG5mbG9hdCBDb3NJbnRlcnBvbGF0aW9uKGZsb2F0IHgpIHtcXG4gIHJldHVybiAtY29zKHgqUEkpLzIuKy41O1xcbn1cXG52ZWM0IHRyYW5zaXRpb24odmVjMiB1dikge1xcbiAgdmVjMiBwID0gdXYueHkgLyB2ZWMyKDEuMCkueHkgLSAuNTtcXG4gIHZlYzIgcnAgPSBwO1xcbiAgZmxvYXQgcnByID0gKHByb2dyZXNzKjIuLTEuKTtcXG4gIGZsb2F0IHogPSAtKHJwcipycHIqMi4pICsgMy47XFxuICBmbG9hdCBheiA9IGFicyh6KTtcXG4gIHJwICo9IGF6O1xcbiAgcnAgKz0gbWl4KHZlYzIoLjUsIC41KSwgdmVjMihmbG9hdChlbmR4KSArIC41LCBmbG9hdChlbmR5KSArIC41KSwgUE9XMihDb3NJbnRlcnBvbGF0aW9uKHByb2dyZXNzKSkpO1xcbiAgdmVjMiBtcnAgPSBtb2QocnAsIDEuKTtcXG4gIHZlYzIgY3JwID0gcnA7XFxuICBib29sIG9uRW5kID0gaW50KGZsb29yKGNycC54KSk9PWVuZHgmJmludChmbG9vcihjcnAueSkpPT1lbmR5O1xcbiAgaWYoIW9uRW5kKSB7XFxuICAgIGZsb2F0IGFuZyA9IGZsb2F0KGludChSYW5kKGZsb29yKGNycCkpKjQuKSkqLjUqUEk7XFxuICAgIG1ycCA9IHZlYzIoLjUpICsgUm90YXRlKG1ycC12ZWMyKC41KSwgYW5nKTtcXG4gIH1cXG4gIGlmKG9uRW5kIHx8IFJhbmQoZmxvb3IoY3JwKSk+LjUpIHtcXG4gICAgcmV0dXJuIGdldFRvQ29sb3IobXJwKTtcXG4gIH0gZWxzZSB7XFxuICAgIHJldHVybiBnZXRGcm9tQ29sb3IobXJwKTtcXG4gIH1cXG59XFxuXCIsXCJsaWNlbnNlXCI6XCJNSVRcIixcImF1dGhvclwiOlwiWGF5Y2hydVwiLFwiY3JlYXRlZEF0XCI6XCJNb24sIDEyIEp1biAyMDE3IDEwOjI2OjUxICswODAwXCIsXCJ1cGRhdGVkQXRcIjpcIk1vbiwgMTIgSnVuIDIwMTcgMTA6MjY6NTEgKzA4MDBcIn0se1wibmFtZVwiOlwiUG9sa2FEb3RzQ3VydGFpblwiLFwicGFyYW1zVHlwZXNcIjp7XCJkb3RzXCI6XCJmbG9hdFwiLFwiY2VudGVyXCI6XCJ2ZWMyXCJ9LFwiZGVmYXVsdFBhcmFtc1wiOntcImRvdHNcIjoyMCxcImNlbnRlclwiOlswLDBdfSxcImdsc2xcIjpcIi8vIGF1dGhvcjogYm9ieWxpdG9cXG4vLyBsaWNlbnNlOiBNSVRcXG5jb25zdCBmbG9hdCBTUVJUXzIgPSAxLjQxNDIxMzU2MjM3MztcXG51bmlmb3JtIGZsb2F0IGRvdHM7Ly8gPSAyMC4wO1xcbnVuaWZvcm0gdmVjMiBjZW50ZXI7Ly8gPSB2ZWMyKDAsIDApO1xcblxcbnZlYzQgdHJhbnNpdGlvbih2ZWMyIHV2KSB7XFxuICBib29sIG5leHRJbWFnZSA9IGRpc3RhbmNlKGZyYWN0KHV2ICogZG90cyksIHZlYzIoMC41LCAwLjUpKSA8ICggcHJvZ3Jlc3MgLyBkaXN0YW5jZSh1diwgY2VudGVyKSk7XFxuICByZXR1cm4gbmV4dEltYWdlID8gZ2V0VG9Db2xvcih1dikgOiBnZXRGcm9tQ29sb3IodXYpO1xcbn1cXG5cIixcImF1dGhvclwiOlwiYm9ieWxpdG9cIixcImxpY2Vuc2VcIjpcIk1JVFwiLFwiY3JlYXRlZEF0XCI6XCJUdWUsIDIwIEZlYiAyMDE4IDIzOjQxOjQ1ICswMTAwXCIsXCJ1cGRhdGVkQXRcIjpcIlR1ZSwgMjAgRmViIDIwMTggMjM6NDE6NDUgKzAxMDBcIn0se1wibmFtZVwiOlwiUmFkaWFsXCIsXCJwYXJhbXNUeXBlc1wiOntcInNtb290aG5lc3NcIjpcImZsb2F0XCJ9LFwiZGVmYXVsdFBhcmFtc1wiOntcInNtb290aG5lc3NcIjoxfSxcImdsc2xcIjpcIi8vIExpY2Vuc2U6IE1JVFxcbi8vIEF1dGhvcjogWGF5Y2hydVxcbi8vIHBvcnRlZCBieSBncmUgZnJvbSBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9YYXljaHJ1L2NlMWQ0OGYwY2UwMGJiMzc5NzUwXFxuXFxudW5pZm9ybSBmbG9hdCBzbW9vdGhuZXNzOyAvLyA9IDEuMFxcblxcbmNvbnN0IGZsb2F0IFBJID0gMy4xNDE1OTI2NTM1ODk7XFxuXFxudmVjNCB0cmFuc2l0aW9uKHZlYzIgcCkge1xcbiAgdmVjMiBycCA9IHAqMi4tMS47XFxuICByZXR1cm4gbWl4KFxcbiAgICBnZXRUb0NvbG9yKHApLFxcbiAgICBnZXRGcm9tQ29sb3IocCksXFxuICAgIHNtb290aHN0ZXAoMC4sIHNtb290aG5lc3MsIGF0YW4ocnAueSxycC54KSAtIChwcm9ncmVzcy0uNSkgKiBQSSAqIDIuNSlcXG4gICk7XFxufVxcblwiLFwibGljZW5zZVwiOlwiTUlUXCIsXCJhdXRob3JcIjpcIlhheWNocnVcIixcImNyZWF0ZWRBdFwiOlwiTW9uLCAxMiBKdW4gMjAxNyAxMDozNjoyNCArMDgwMFwiLFwidXBkYXRlZEF0XCI6XCJNb24sIDEyIEp1biAyMDE3IDEwOjM2OjI0ICswODAwXCJ9LHtcIm5hbWVcIjpcIlNpbXBsZVpvb21cIixcInBhcmFtc1R5cGVzXCI6e1wiem9vbV9xdWlja25lc3NcIjpcImZsb2F0XCJ9LFwiZGVmYXVsdFBhcmFtc1wiOntcInpvb21fcXVpY2tuZXNzXCI6MC44fSxcImdsc2xcIjpcIi8vIEF1dGhvcjogMGd1c3QxXFxuLy8gTGljZW5zZTogTUlUXFxuXFxudW5pZm9ybSBmbG9hdCB6b29tX3F1aWNrbmVzczsgLy8gPSAwLjhcXG5mbG9hdCBuUXVpY2sgPSBjbGFtcCh6b29tX3F1aWNrbmVzcywwLjIsMS4wKTtcXG5cXG52ZWMyIHpvb20odmVjMiB1diwgZmxvYXQgYW1vdW50KSB7XFxuICByZXR1cm4gMC41ICsgKCh1diAtIDAuNSkgKiAoMS4wLWFtb3VudCkpO1xcdFxcbn1cXG5cXG52ZWM0IHRyYW5zaXRpb24gKHZlYzIgdXYpIHtcXG4gIHJldHVybiBtaXgoXFxuICAgIGdldEZyb21Db2xvcih6b29tKHV2LCBzbW9vdGhzdGVwKDAuMCwgblF1aWNrLCBwcm9ncmVzcykpKSxcXG4gICAgZ2V0VG9Db2xvcih1diksXFxuICAgc21vb3Roc3RlcChuUXVpY2stMC4yLCAxLjAsIHByb2dyZXNzKVxcbiAgKTtcXG59XCIsXCJhdXRob3JcIjpcIjBndXN0MVwiLFwibGljZW5zZVwiOlwiTUlUXCIsXCJjcmVhdGVkQXRcIjpcIlR1ZSwgNiBNYXIgMjAxOCAwMDo0Mzo0NyArMDEwMFwiLFwidXBkYXRlZEF0XCI6XCJUdWUsIDYgTWFyIDIwMTggMDA6NDM6NDcgKzAxMDBcIn0se1wibmFtZVwiOlwiU3RlcmVvVmlld2VyXCIsXCJwYXJhbXNUeXBlc1wiOntcInpvb21cIjpcImZsb2F0XCIsXCJjb3JuZXJfcmFkaXVzXCI6XCJmbG9hdFwifSxcImRlZmF1bHRQYXJhbXNcIjp7XCJ6b29tXCI6MC44OCxcImNvcm5lcl9yYWRpdXNcIjowLjIyfSxcImdsc2xcIjpcIi8vIFR1bmFibGUgcGFyYW1ldGVyc1xcbi8vIEhvdyBtdWNoIHRvIHpvb20gKG91dCkgZm9yIHRoZSBlZmZlY3QgfiAwLjUgLSAxLjBcXG51bmlmb3JtIGZsb2F0IHpvb207IC8vID0gMC44OFxcbi8vIENvcm5lciByYWRpdXMgYXMgYSBmcmFjdGlvbiBvZiB0aGUgaW1hZ2UgaGVpZ2h0XFxudW5pZm9ybSBmbG9hdCBjb3JuZXJfcmFkaXVzOyAgLy8gPSAwLjIyXFxuXFxuLy8gYXV0aG9yOiBUZWQgU2NodW5kbGVyXFxuLy8gbGljZW5zZTogQlNEIDIgQ2xhdXNlXFxuLy8gRnJlZSBmb3IgdXNlIGFuZCBtb2RpZmljYXRpb24gYnkgYW55b25lIHdpdGggY3JlZGl0XFxuXFxuLy8gQ29weXJpZ2h0IChjKSAyMDE2LCBUaGVvZG9yZSBLIFNjaHVuZGxlclxcbi8vIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuXFxuLy8gUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0Olxcblxcbi8vIDEuIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cXG5cXG4vLyAyLiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXFxuXFxuLy8gVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcXFwiQVMgSVNcXFwiIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cXG5cXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXFxuLy8gU3RlcmVvIFZpZXdlciBUb3kgVHJhbnNpdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cXG4vLyBJbnNwaXJlZCBieSBWaWV3TWFzdGVyIC8gSW1hZ2UzRCBpbWFnZSB2aWV3ZXIgZGV2aWNlcy4gICAgICAgICAgICAgICAgICAgIC8vXFxuLy8gVGhpcyBlZmZlY3QgaXMgc2ltaWxhciB0byB3aGF0IHlvdSBzZWUgd2hlbiB5b3UgcHJlc3MgdGhlIGRldmljZSdzIGxldmVyLiAvL1xcbi8vIFRoZXJlIGlzIGEgcXVpY2sgem9vbSBpbiAvIG91dCB0byBtYWtlIHRoZSB0cmFuc2l0aW9uICd2YWxpZCcgZm9yIEdMU0wuaW8gLy9cXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXFxuXFxuY29uc3QgdmVjNCBibGFjayA9IHZlYzQoMC4wLCAwLjAsIDAuMCwgMS4wKTtcXG5jb25zdCB2ZWMyIGMwMCA9IHZlYzIoMC4wLCAwLjApOyAvLyB0aGUgZm91ciBjb3JuZXIgcG9pbnRzXFxuY29uc3QgdmVjMiBjMDEgPSB2ZWMyKDAuMCwgMS4wKTtcXG5jb25zdCB2ZWMyIGMxMSA9IHZlYzIoMS4wLCAxLjApO1xcbmNvbnN0IHZlYzIgYzEwID0gdmVjMigxLjAsIDAuMCk7XFxuXFxuLy8gQ2hlY2sgaWYgYSBwb2ludCBpcyB3aXRoaW4gYSBnaXZlbiBjb3JuZXJcXG5ib29sIGluX2Nvcm5lcih2ZWMyIHAsIHZlYzIgY29ybmVyLCB2ZWMyIHJhZGl1cykge1xcbiAgLy8gZGV0ZXJtaW5lIHRoZSBkaXJlY3Rpb24gd2Ugd2FudCB0byBiZSBmaWxsZWRcXG4gIHZlYzIgYXhpcyA9IChjMTEgLSBjb3JuZXIpIC0gY29ybmVyO1xcblxcbiAgLy8gd2FycCB0aGUgcG9pbnQgc28gd2UgYXJlIGFsd2F5cyB0ZXN0aW5nIHRoZSBib3R0b20gbGVmdCBwb2ludCB3aXRoIHRoZVxcbiAgLy8gY2lyY2xlIGNlbnRlcmVkIG9uIHRoZSBvcmlnaW5cXG4gIHAgPSBwIC0gKGNvcm5lciArIGF4aXMgKiByYWRpdXMpO1xcbiAgcCAqPSBheGlzIC8gcmFkaXVzO1xcbiAgcmV0dXJuIChwLnggPiAwLjAgJiYgcC55ID4gLTEuMCkgfHwgKHAueSA+IDAuMCAmJiBwLnggPiAtMS4wKSB8fCBkb3QocCwgcCkgPCAxLjA7XFxufVxcblxcbi8vIENoZWNrIGFsbCBmb3VyIGNvcm5lcnNcXG4vLyByZXR1cm4gYSBmbG9hdCBmb3IgdjIgZm9yIGFudGktYWxpYXNpbmc/XFxuYm9vbCB0ZXN0X3JvdW5kZWRfbWFzayh2ZWMyIHAsIHZlYzIgY29ybmVyX3NpemUpIHtcXG4gIHJldHVyblxcbiAgICAgIGluX2Nvcm5lcihwLCBjMDAsIGNvcm5lcl9zaXplKSAmJlxcbiAgICAgIGluX2Nvcm5lcihwLCBjMDEsIGNvcm5lcl9zaXplKSAmJlxcbiAgICAgIGluX2Nvcm5lcihwLCBjMTAsIGNvcm5lcl9zaXplKSAmJlxcbiAgICAgIGluX2Nvcm5lcihwLCBjMTEsIGNvcm5lcl9zaXplKTtcXG59XFxuXFxuLy8gU2NyZWVuIGJsZW5kIG1vZGUgLSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CbGVuZF9tb2Rlc1xcbi8vIFRoaXMgbW9yZSBjbG9zZWx5IGFwcHJveGltYXRlcyB3aGF0IHlvdSBzZWUgdGhhbiBsaW5lYXIgYmxlbmRpbmdcXG52ZWM0IHNjcmVlbih2ZWM0IGEsIHZlYzQgYikge1xcbiAgcmV0dXJuIDEuMCAtICgxLjAgLSBhKSAqICgxLjAgLWIpO1xcbn1cXG5cXG4vLyBHaXZlbiBSR0JBLCBmaW5kIGEgdmFsdWUgdGhhdCB3aGVuIHNjcmVlbmVkIHdpdGggaXRzZWxmXFxuLy8gd2lsbCB5aWVsZCB0aGUgb3JpZ2luYWwgdmFsdWUuXFxudmVjNCB1bnNjcmVlbih2ZWM0IGMpIHtcXG4gIHJldHVybiAxLjAgLSBzcXJ0KDEuMCAtIGMpO1xcbn1cXG5cXG4vLyBHcmFiIGEgcGl4ZWwsIG9ubHkgaWYgaXQgaXNuJ3QgbWFza2VkIG91dCBieSB0aGUgcm91bmRlZCBjb3JuZXJzXFxudmVjNCBzYW1wbGVfd2l0aF9jb3JuZXJzX2Zyb20odmVjMiBwLCB2ZWMyIGNvcm5lcl9zaXplKSB7XFxuICBwID0gKHAgLSAwLjUpIC8gem9vbSArIDAuNTtcXG4gIGlmICghdGVzdF9yb3VuZGVkX21hc2socCwgY29ybmVyX3NpemUpKSB7XFxuICAgIHJldHVybiBibGFjaztcXG4gIH1cXG4gIHJldHVybiB1bnNjcmVlbihnZXRGcm9tQ29sb3IocCkpO1xcbn1cXG5cXG52ZWM0IHNhbXBsZV93aXRoX2Nvcm5lcnNfdG8odmVjMiBwLCB2ZWMyIGNvcm5lcl9zaXplKSB7XFxuICBwID0gKHAgLSAwLjUpIC8gem9vbSArIDAuNTtcXG4gIGlmICghdGVzdF9yb3VuZGVkX21hc2socCwgY29ybmVyX3NpemUpKSB7XFxuICAgIHJldHVybiBibGFjaztcXG4gIH1cXG4gIHJldHVybiB1bnNjcmVlbihnZXRUb0NvbG9yKHApKTtcXG59XFxuXFxuLy8gc3BlY2lhbCBzYW1wbGluZyB1c2VkIHdoZW4gem9vbWluZyAtIGV4dHJhIHpvb20gcGFyYW1ldGVyIGFuZCBkb24ndCB1bnNjcmVlblxcbnZlYzQgc2ltcGxlX3NhbXBsZV93aXRoX2Nvcm5lcnNfZnJvbSh2ZWMyIHAsIHZlYzIgY29ybmVyX3NpemUsIGZsb2F0IHpvb21fYW10KSB7XFxuICBwID0gKHAgLSAwLjUpIC8gKDEuMCAtIHpvb21fYW10ICsgem9vbSAqIHpvb21fYW10KSArIDAuNTtcXG4gIGlmICghdGVzdF9yb3VuZGVkX21hc2socCwgY29ybmVyX3NpemUpKSB7XFxuICAgIHJldHVybiBibGFjaztcXG4gIH1cXG4gIHJldHVybiBnZXRGcm9tQ29sb3IocCk7XFxufVxcblxcbnZlYzQgc2ltcGxlX3NhbXBsZV93aXRoX2Nvcm5lcnNfdG8odmVjMiBwLCB2ZWMyIGNvcm5lcl9zaXplLCBmbG9hdCB6b29tX2FtdCkge1xcbiAgcCA9IChwIC0gMC41KSAvICgxLjAgLSB6b29tX2FtdCArIHpvb20gKiB6b29tX2FtdCkgKyAwLjU7XFxuICBpZiAoIXRlc3Rfcm91bmRlZF9tYXNrKHAsIGNvcm5lcl9zaXplKSkge1xcbiAgICByZXR1cm4gYmxhY2s7XFxuICB9XFxuICByZXR1cm4gZ2V0VG9Db2xvcihwKTtcXG59XFxuXFxuLy8gQmFzaWMgMkQgYWZmaW5lIHRyYW5zZm9ybSBtYXRyaXggaGVscGVyc1xcbi8vIFRoZXNlIHJlYWxseSBzaG91bGRuJ3QgYmUgdXNlZCBpbiBhIGZyYWdtZW50IHNoYWRlciAtIEkgc2hvdWxkIHdvcmsgb3V0IHRoZVxcbi8vIHRoZSBtYXRoIGZvciBhIHRyYW5zbGF0ZSAmIHJvdGF0ZSBmdW5jdGlvbiBhcyBhIHBhaXIgb2YgZG90IHByb2R1Y3RzIGluc3RlYWRcXG5cXG5tYXQzIHJvdGF0ZTJkKGZsb2F0IGFuZ2xlLCBmbG9hdCByYXRpbykge1xcbiAgZmxvYXQgcyA9IHNpbihhbmdsZSk7XFxuICBmbG9hdCBjID0gY29zKGFuZ2xlKTtcXG4gIHJldHVybiBtYXQzKFxcbiAgICBjLCBzICwwLjAsXFxuICAgIC1zLCBjLCAwLjAsXFxuICAgIDAuMCwgMC4wLCAxLjApO1xcbn1cXG5cXG5tYXQzIHRyYW5zbGF0ZTJkKGZsb2F0IHgsIGZsb2F0IHkpIHtcXG4gIHJldHVybiBtYXQzKFxcbiAgICAxLjAsIDAuMCwgMCxcXG4gICAgMC4wLCAxLjAsIDAsXFxuICAgIC14LCAteSwgMS4wKTtcXG59XFxuXFxubWF0MyBzY2FsZTJkKGZsb2F0IHgsIGZsb2F0IHkpIHtcXG4gIHJldHVybiBtYXQzKFxcbiAgICB4LCAwLjAsIDAsXFxuICAgIDAuMCwgeSwgMCxcXG4gICAgMCwgMCwgMS4wKTtcXG59XFxuXFxuLy8gU3BsaXQgYW4gaW1hZ2UgYW5kIHJvdGF0ZSBvbmUgdXAgYW5kIG9uZSBkb3duIGFsb25nIG9mZiBzY3JlZW4gcGl2b3QgcG9pbnRzXFxudmVjNCBnZXRfY3Jvc3Nfcm90YXRlZCh2ZWMzIHAzLCBmbG9hdCBhbmdsZSwgdmVjMiBjb3JuZXJfc2l6ZSwgZmxvYXQgcmF0aW8pIHtcXG4gIGFuZ2xlID0gYW5nbGUgKiBhbmdsZTsgLy8gZWFzaW5nXFxuICBhbmdsZSAvPSAyLjQ7IC8vIHdvcmtzIG91dCB0byBiZSBhIGdvb2QgbnVtYmVyIG9mIHJhZGlhbnNcXG5cXG4gIG1hdDMgY2VudGVyX2FuZF9zY2FsZSA9IHRyYW5zbGF0ZTJkKC0wLjUsIC0wLjUpICogc2NhbGUyZCgxLjAsIHJhdGlvKTtcXG4gIG1hdDMgdW5zY2FsZV9hbmRfdW5jZW50ZXIgPSBzY2FsZTJkKDEuMCwgMS4wL3JhdGlvKSAqIHRyYW5zbGF0ZTJkKDAuNSwwLjUpO1xcbiAgbWF0MyBzbGlkZV9sZWZ0ID0gdHJhbnNsYXRlMmQoLTIuMCwwLjApO1xcbiAgbWF0MyBzbGlkZV9yaWdodCA9IHRyYW5zbGF0ZTJkKDIuMCwwLjApO1xcbiAgbWF0MyByb3RhdGUgPSByb3RhdGUyZChhbmdsZSwgcmF0aW8pO1xcblxcbiAgbWF0MyBvcF9hID0gY2VudGVyX2FuZF9zY2FsZSAqIHNsaWRlX3JpZ2h0ICogcm90YXRlICogc2xpZGVfbGVmdCAqIHVuc2NhbGVfYW5kX3VuY2VudGVyO1xcbiAgbWF0MyBvcF9iID0gY2VudGVyX2FuZF9zY2FsZSAqIHNsaWRlX2xlZnQgKiByb3RhdGUgKiBzbGlkZV9yaWdodCAqIHVuc2NhbGVfYW5kX3VuY2VudGVyO1xcblxcbiAgdmVjNCBhID0gc2FtcGxlX3dpdGhfY29ybmVyc19mcm9tKChvcF9hICogcDMpLnh5LCBjb3JuZXJfc2l6ZSk7XFxuICB2ZWM0IGIgPSBzYW1wbGVfd2l0aF9jb3JuZXJzX2Zyb20oKG9wX2IgKiBwMykueHksIGNvcm5lcl9zaXplKTtcXG5cXG4gIHJldHVybiBzY3JlZW4oYSwgYik7XFxufVxcblxcbi8vIEltYWdlIHN0YXlzIHB1dCwgYnV0IHRoaXMgdGltZSBtb3ZlIHR3byBtYXNrc1xcbnZlYzQgZ2V0X2Nyb3NzX21hc2tlZCh2ZWMzIHAzLCBmbG9hdCBhbmdsZSwgdmVjMiBjb3JuZXJfc2l6ZSwgZmxvYXQgcmF0aW8pIHtcXG4gIGFuZ2xlID0gMS4wIC0gYW5nbGU7XFxuICBhbmdsZSA9IGFuZ2xlICogYW5nbGU7IC8vIGVhc2luZ1xcbiAgYW5nbGUgLz0gMi40O1xcblxcbiAgdmVjNCBpbWc7XFxuXFxuICBtYXQzIGNlbnRlcl9hbmRfc2NhbGUgPSB0cmFuc2xhdGUyZCgtMC41LCAtMC41KSAqIHNjYWxlMmQoMS4wLCByYXRpbyk7XFxuICBtYXQzIHVuc2NhbGVfYW5kX3VuY2VudGVyID0gc2NhbGUyZCgxLjAgLyB6b29tLCAxLjAgLyAoem9vbSAqIHJhdGlvKSkgKiB0cmFuc2xhdGUyZCgwLjUsMC41KTtcXG4gIG1hdDMgc2xpZGVfbGVmdCA9IHRyYW5zbGF0ZTJkKC0yLjAsMC4wKTtcXG4gIG1hdDMgc2xpZGVfcmlnaHQgPSB0cmFuc2xhdGUyZCgyLjAsMC4wKTtcXG4gIG1hdDMgcm90YXRlID0gcm90YXRlMmQoYW5nbGUsIHJhdGlvKTtcXG5cXG4gIG1hdDMgb3BfYSA9IGNlbnRlcl9hbmRfc2NhbGUgKiBzbGlkZV9yaWdodCAqIHJvdGF0ZSAqIHNsaWRlX2xlZnQgKiB1bnNjYWxlX2FuZF91bmNlbnRlcjtcXG4gIG1hdDMgb3BfYiA9IGNlbnRlcl9hbmRfc2NhbGUgKiBzbGlkZV9sZWZ0ICogcm90YXRlICogc2xpZGVfcmlnaHQgKiB1bnNjYWxlX2FuZF91bmNlbnRlcjtcXG5cXG4gIGJvb2wgbWFza19hID0gdGVzdF9yb3VuZGVkX21hc2soKG9wX2EgKiBwMykueHksIGNvcm5lcl9zaXplKTtcXG4gIGJvb2wgbWFza19iID0gdGVzdF9yb3VuZGVkX21hc2soKG9wX2IgKiBwMykueHksIGNvcm5lcl9zaXplKTtcXG5cXG4gIGlmIChtYXNrX2EgfHwgbWFza19iKSB7XFxuICAgIGltZyA9IHNhbXBsZV93aXRoX2Nvcm5lcnNfdG8ocDMueHksIGNvcm5lcl9zaXplKTtcXG4gICAgcmV0dXJuIHNjcmVlbihtYXNrX2EgPyBpbWcgOiBibGFjaywgbWFza19iID8gaW1nIDogYmxhY2spO1xcbiAgfSBlbHNlIHtcXG4gICAgcmV0dXJuIGJsYWNrO1xcbiAgfVxcbn1cXG5cXG52ZWM0IHRyYW5zaXRpb24odmVjMiB1dikge1xcbiAgZmxvYXQgYTtcXG4gIHZlYzIgcD11di54eS92ZWMyKDEuMCkueHk7XFxuICB2ZWMzIHAzID0gdmVjMyhwLnh5LCAxLjApOyAvLyBmb3IgMkQgbWF0cml4IHRyYW5zZm9ybXNcXG5cXG4gIC8vIGNvcm5lciBpcyB3YXJwZWQgdG8gcmVwcmVzZW50IHRvIHNpemUgYWZ0ZXIgbWFwcGluZyB0byAxLjAsIDEuMFxcbiAgdmVjMiBjb3JuZXJfc2l6ZSA9IHZlYzIoY29ybmVyX3JhZGl1cyAvIHJhdGlvLCBjb3JuZXJfcmFkaXVzKTtcXG5cXG4gIGlmIChwcm9ncmVzcyA8PSAwLjApIHtcXG4gICAgLy8gMC4wOiBzdGFydCB3aXRoIHRoZSBiYXNlIGZyYW1lIGFsd2F5c1xcbiAgICByZXR1cm4gZ2V0RnJvbUNvbG9yKHApO1xcbiAgfSBlbHNlIGlmIChwcm9ncmVzcyA8IDAuMSkge1xcbiAgICAvLyAwLjAtMC4xOiB6b29tIG91dCBhbmQgYWRkIHJvdW5kZWQgY29ybmVyc1xcbiAgICBhID0gcHJvZ3Jlc3MgLyAwLjE7XFxuICAgIHJldHVybiAgc2ltcGxlX3NhbXBsZV93aXRoX2Nvcm5lcnNfZnJvbShwLCBjb3JuZXJfc2l6ZSAqIGEsIGEpO1xcbiAgfSBlbHNlIGlmIChwcm9ncmVzcyA8IDAuNDgpIHtcXG4gICAgLy8gMC4xLTAuNDg6IFNwbGl0IG9yaWdpbmFsIGltYWdlIGFwYXJ0XFxuICAgIGEgPSAocHJvZ3Jlc3MgLSAwLjEpLzAuMzg7XFxuICAgIHJldHVybiBnZXRfY3Jvc3Nfcm90YXRlZChwMywgYSwgY29ybmVyX3NpemUsIHJhdGlvKTtcXG4gIH0gZWxzZSBpZiAocHJvZ3Jlc3MgPCAwLjkpIHtcXG4gICAgLy8gMC40OC0wLjUyOiBibGFja1xcbiAgICAvLyAwLjUyIC0gMC45OiB1bm1hc2sgbmV3IGltYWdlXFxuICAgIHJldHVybiBnZXRfY3Jvc3NfbWFza2VkKHAzLCAocHJvZ3Jlc3MgLSAwLjUyKS8wLjM4LCBjb3JuZXJfc2l6ZSwgcmF0aW8pO1xcbiAgfSBlbHNlIGlmIChwcm9ncmVzcyA8IDEuMCkge1xcbiAgICAvLyB6b29tIG91dCBhbmQgYWRkIHJvdW5kZWQgY29ybmVyc1xcbiAgICBhID0gKDEuMCAtIHByb2dyZXNzKSAvIDAuMTtcXG4gICAgcmV0dXJuIHNpbXBsZV9zYW1wbGVfd2l0aF9jb3JuZXJzX3RvKHAsIGNvcm5lcl9zaXplICogYSwgYSk7XFxuICB9IGVsc2Uge1xcbiAgICAvLyAxLjAgZW5kIHdpdGggYmFzZSBmcmFtZVxcbiAgICByZXR1cm4gZ2V0VG9Db2xvcihwKTtcXG4gIH1cXG59XFxuXCIsXCJhdXRob3JcIjpcIlRlZCBTY2h1bmRsZXJcIixcImxpY2Vuc2VcIjpcIkJTRCAyIENsYXVzZVwiLFwiY3JlYXRlZEF0XCI6XCJUdWUsIDIwIEZlYiAyMDE4IDIzOjIwOjI5ICswMTAwXCIsXCJ1cGRhdGVkQXRcIjpcIldlZCwgMjEgRmViIDIwMTggMTU6NDI6MDAgKzAxMDBcIn0se1wibmFtZVwiOlwiU3dpcmxcIixcInBhcmFtc1R5cGVzXCI6e30sXCJkZWZhdWx0UGFyYW1zXCI6e30sXCJnbHNsXCI6XCIvLyBMaWNlbnNlOiBNSVRcXG4vLyBBdXRob3I6IFNlcmdleSBLb3NhcmV2c2t5XFxuLy8gKCBodHRwOi8vd3d3LmxpbmRlcmRhdW0uY29tIClcXG4vLyBwb3J0ZWQgYnkgZ3JlIGZyb20gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vY29ycG9yYXRlc2hhcmsvY2FjZmVkYjhjY2EwZjVjZTNmN2NcXG5cXG52ZWM0IHRyYW5zaXRpb24odmVjMiBVVilcXG57XFxuXFx0ZmxvYXQgUmFkaXVzID0gMS4wO1xcblxcblxcdGZsb2F0IFQgPSBwcm9ncmVzcztcXG5cXG5cXHRVViAtPSB2ZWMyKCAwLjUsIDAuNSApO1xcblxcblxcdGZsb2F0IERpc3QgPSBsZW5ndGgoVVYpO1xcblxcblxcdGlmICggRGlzdCA8IFJhZGl1cyApXFxuXFx0e1xcblxcdFxcdGZsb2F0IFBlcmNlbnQgPSAoUmFkaXVzIC0gRGlzdCkgLyBSYWRpdXM7XFxuXFx0XFx0ZmxvYXQgQSA9ICggVCA8PSAwLjUgKSA/IG1peCggMC4wLCAxLjAsIFQvMC41ICkgOiBtaXgoIDEuMCwgMC4wLCAoVC0wLjUpLzAuNSApO1xcblxcdFxcdGZsb2F0IFRoZXRhID0gUGVyY2VudCAqIFBlcmNlbnQgKiBBICogOC4wICogMy4xNDE1OTtcXG5cXHRcXHRmbG9hdCBTID0gc2luKCBUaGV0YSApO1xcblxcdFxcdGZsb2F0IEMgPSBjb3MoIFRoZXRhICk7XFxuXFx0XFx0VVYgPSB2ZWMyKCBkb3QoVVYsIHZlYzIoQywgLVMpKSwgZG90KFVWLCB2ZWMyKFMsIEMpKSApO1xcblxcdH1cXG5cXHRVViArPSB2ZWMyKCAwLjUsIDAuNSApO1xcblxcblxcdHZlYzQgQzAgPSBnZXRGcm9tQ29sb3IoVVYpO1xcblxcdHZlYzQgQzEgPSBnZXRUb0NvbG9yKFVWKTtcXG5cXG5cXHRyZXR1cm4gbWl4KCBDMCwgQzEsIFQgKTtcXG59XFxuXCIsXCJsaWNlbnNlXCI6XCJNSVRcIixcImF1dGhvclwiOlwiU2VyZ2V5IEtvc2FyZXZza3lcIixcImNyZWF0ZWRBdFwiOlwiTW9uLCAxMiBKdW4gMjAxNyAxMjozODoyNyArMDgwMFwiLFwidXBkYXRlZEF0XCI6XCJNb24sIDEyIEp1biAyMDE3IDEyOjM4OjI3ICswODAwXCJ9LHtcIm5hbWVcIjpcIldhdGVyRHJvcFwiLFwicGFyYW1zVHlwZXNcIjp7XCJhbXBsaXR1ZGVcIjpcImZsb2F0XCIsXCJzcGVlZFwiOlwiZmxvYXRcIn0sXCJkZWZhdWx0UGFyYW1zXCI6e1wiYW1wbGl0dWRlXCI6MzAsXCJzcGVlZFwiOjMwfSxcImdsc2xcIjpcIi8vIGF1dGhvcjogUGF3ZcWCIFDFgsOzY2llbm5pa1xcbi8vIGxpY2Vuc2U6IE1JVFxcbnVuaWZvcm0gZmxvYXQgYW1wbGl0dWRlOyAvLyA9IDMwXFxudW5pZm9ybSBmbG9hdCBzcGVlZDsgLy8gPSAzMFxcblxcbnZlYzQgdHJhbnNpdGlvbih2ZWMyIHApIHtcXG4gIHZlYzIgZGlyID0gcCAtIHZlYzIoLjUpO1xcbiAgZmxvYXQgZGlzdCA9IGxlbmd0aChkaXIpO1xcblxcbiAgaWYgKGRpc3QgPiBwcm9ncmVzcykge1xcbiAgICByZXR1cm4gbWl4KGdldEZyb21Db2xvciggcCksIGdldFRvQ29sb3IoIHApLCBwcm9ncmVzcyk7XFxuICB9IGVsc2Uge1xcbiAgICB2ZWMyIG9mZnNldCA9IGRpciAqIHNpbihkaXN0ICogYW1wbGl0dWRlIC0gcHJvZ3Jlc3MgKiBzcGVlZCk7XFxuICAgIHJldHVybiBtaXgoZ2V0RnJvbUNvbG9yKCBwICsgb2Zmc2V0KSwgZ2V0VG9Db2xvciggcCksIHByb2dyZXNzKTtcXG4gIH1cXG59XFxuXCIsXCJhdXRob3JcIjpcIlBhd2XFgiBQxYLDs2NpZW5uaWtcIixcImxpY2Vuc2VcIjpcIk1JVFwiLFwiY3JlYXRlZEF0XCI6XCJXZWQsIDIxIEZlYiAyMDE4IDE5OjM3OjE1ICswMTAwXCIsXCJ1cGRhdGVkQXRcIjpcIldlZCwgMjEgRmViIDIwMTggMTk6Mzc6MTUgKzAxMDBcIn0se1wibmFtZVwiOlwiWm9vbUluQ2lyY2xlc1wiLFwicGFyYW1zVHlwZXNcIjp7fSxcImRlZmF1bHRQYXJhbXNcIjp7fSxcImdsc2xcIjpcIi8vIExpY2Vuc2U6IE1JVFxcbi8vIEF1dGhvcjogZHljbTgwMDlcXG4vLyBwb3J0ZWQgYnkgZ3JlIGZyb20gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vZHljbTgwMDkvOTQ4ZTk5YjE4MDBlODFhZDkwOWFcXG5cXG52ZWMyIHpvb20odmVjMiB1diwgZmxvYXQgYW1vdW50KSB7XFxuICByZXR1cm4gMC41ICsgKCh1diAtIDAuNSkgKiBhbW91bnQpO1xcdFxcbn1cXG5cXG52ZWMyIHJhdGlvMiA9IHZlYzIoMS4wLCAxLjAgLyByYXRpbyk7XFxuXFxudmVjNCB0cmFuc2l0aW9uKHZlYzIgdXYpIHtcXG4gIC8vIFRPRE86IHNvbWUgdGltaW5nIGFyZSBoYXJkY29kZWQgYnV0IHNob3VsZCBiZSBvbmUgb3IgbWFueSBwYXJhbWV0ZXJzXFxuICAvLyBUT0RPOiBzaG91bGQgYWxzbyBiZSBhYmxlIHRvIGNvbmZpZ3VyZSBob3cgbXVjaCBjaXJjbGVzXFxuICAvLyBUT0RPOiBpZigpIGJyYW5jaGluZyBzaG91bGQgYmUgYXZvaWRlZCB3aGVuIHBvc3NpYmxlLCBwcmVmZXIgdXNlIG9mIHN0ZXAoKSAmIG90aGVyIGZ1bmN0aW9uc1xcbiAgdmVjMiByID0gMi4wICogKCh2ZWMyKHV2Lnh5KSAtIDAuNSkgKiByYXRpbzIpO1xcbiAgZmxvYXQgcHJvID0gcHJvZ3Jlc3MgLyAwLjg7XFxuICBmbG9hdCB6ID0gcHJvICogMC4yO1xcbiAgZmxvYXQgdCA9IDAuMDtcXG4gIGlmIChwcm8gPiAxLjApIHtcXG4gICAgeiA9IDAuMiArIChwcm8gLSAxLjApICogNS47XFxuICAgIHQgPSBjbGFtcCgocHJvZ3Jlc3MgLSAwLjgpIC8gMC4wNywgMC4wLCAxLjApO1xcbiAgfVxcbiAgaWYgKGxlbmd0aChyKSA8IDAuNSt6KSB7XFxuICAgIC8vIHV2ID0gem9vbSh1diwgMC45IC0gMC4xICogcHJvKTtcXG4gIH1cXG4gIGVsc2UgaWYgKGxlbmd0aChyKSA8IDAuOCt6KjEuNSkge1xcbiAgICB1diA9IHpvb20odXYsIDEuMCAtIDAuMTUgKiBwcm8pO1xcbiAgICB0ID0gdCAqIDAuNTtcXG4gIH1cXG4gIGVsc2UgaWYgKGxlbmd0aChyKSA8IDEuMit6KjIuNSkge1xcbiAgICB1diA9IHpvb20odXYsIDEuMCAtIDAuMiAqIHBybyk7XFxuICAgIHQgPSB0ICogMC4yO1xcbiAgfVxcbiAgZWxzZSB7XFxuICAgIHV2ID0gem9vbSh1diwgMS4wIC0gMC4yNSAqIHBybyk7XFxuICB9XFxuICByZXR1cm4gbWl4KGdldEZyb21Db2xvcih1diksIGdldFRvQ29sb3IodXYpLCB0KTtcXG59XFxuXCIsXCJsaWNlbnNlXCI6XCJNSVRcIixcImF1dGhvclwiOlwiZHljbTgwMDlcIixcImNyZWF0ZWRBdFwiOlwiTW9uLCAxMiBKdW4gMjAxNyAxMToyNDozNCArMDgwMFwiLFwidXBkYXRlZEF0XCI6XCJNb24sIDEyIEp1biAyMDE3IDExOjI0OjM0ICswODAwXCJ9LHtcIm5hbWVcIjpcImFuZ3VsYXJcIixcInBhcmFtc1R5cGVzXCI6e1wic3RhcnRpbmdBbmdsZVwiOlwiZmxvYXRcIn0sXCJkZWZhdWx0UGFyYW1zXCI6e1wic3RhcnRpbmdBbmdsZVwiOjkwfSxcImdsc2xcIjpcIi8vIEF1dGhvcjogRmVybmFuZG8gS3V0ZWtlblxcbi8vIExpY2Vuc2U6IE1JVFxcblxcbiNkZWZpbmUgUEkgMy4xNDE1OTI2NTM1ODlcXG5cXG51bmlmb3JtIGZsb2F0IHN0YXJ0aW5nQW5nbGU7IC8vID0gOTA7XFxuXFxudmVjNCB0cmFuc2l0aW9uICh2ZWMyIHV2KSB7XFxuICBcXG4gIGZsb2F0IG9mZnNldCA9IHN0YXJ0aW5nQW5nbGUgKiBQSSAvIDE4MC4wO1xcbiAgZmxvYXQgYW5nbGUgPSBhdGFuKHV2LnkgLSAwLjUsIHV2LnggLSAwLjUpICsgb2Zmc2V0O1xcbiAgZmxvYXQgbm9ybWFsaXplZEFuZ2xlID0gKGFuZ2xlICsgUEkpIC8gKDIuMCAqIFBJKTtcXG4gIFxcbiAgbm9ybWFsaXplZEFuZ2xlID0gbm9ybWFsaXplZEFuZ2xlIC0gZmxvb3Iobm9ybWFsaXplZEFuZ2xlKTtcXG5cXG4gIHJldHVybiBtaXgoXFxuICAgIGdldEZyb21Db2xvcih1diksXFxuICAgIGdldFRvQ29sb3IodXYpLFxcbiAgICBzdGVwKG5vcm1hbGl6ZWRBbmdsZSwgcHJvZ3Jlc3MpXFxuICAgICk7XFxufVxcblwiLFwiYXV0aG9yXCI6XCJGZXJuYW5kbyBLdXRla2VuXCIsXCJsaWNlbnNlXCI6XCJNSVRcIixcImNyZWF0ZWRBdFwiOlwiVHVlLCAzMCBNYXkgMjAxNyAxNDoyNjo0NCArMDIwMFwiLFwidXBkYXRlZEF0XCI6XCJUdWUsIDMwIE1heSAyMDE3IDE0OjI2OjQ0ICswMjAwXCJ9LHtcIm5hbWVcIjpcImJ1cm5cIixcInBhcmFtc1R5cGVzXCI6e1wiY29sb3JcIjpcInZlYzNcIn0sXCJkZWZhdWx0UGFyYW1zXCI6e1wiY29sb3JcIjpbMC45LDAuNCwwLjJdfSxcImdsc2xcIjpcIi8vIGF1dGhvcjogZ3JlXFxuLy8gTGljZW5zZTogTUlUXFxudW5pZm9ybSB2ZWMzIGNvbG9yIC8qID0gdmVjMygwLjksIDAuNCwgMC4yKSAqLztcXG52ZWM0IHRyYW5zaXRpb24gKHZlYzIgdXYpIHtcXG4gIHJldHVybiBtaXgoXFxuICAgIGdldEZyb21Db2xvcih1dikgKyB2ZWM0KHByb2dyZXNzKmNvbG9yLCAxLjApLFxcbiAgICBnZXRUb0NvbG9yKHV2KSArIHZlYzQoKDEuMC1wcm9ncmVzcykqY29sb3IsIDEuMCksXFxuICAgIHByb2dyZXNzXFxuICApO1xcbn1cXG5cIixcImF1dGhvclwiOlwiZ3JlXCIsXCJsaWNlbnNlXCI6XCJNSVRcIixcImNyZWF0ZWRBdFwiOlwiVHVlLCAzMCBNYXkgMjAxNyAxNDoyNjo0NCArMDIwMFwiLFwidXBkYXRlZEF0XCI6XCJUdWUsIDMwIE1heSAyMDE3IDE0OjI2OjQ0ICswMjAwXCJ9LHtcIm5hbWVcIjpcImNhbm5hYmlzbGVhZlwiLFwicGFyYW1zVHlwZXNcIjp7fSxcImRlZmF1bHRQYXJhbXNcIjp7fSxcImdsc2xcIjpcIi8vIEF1dGhvcjogQEZsZXhpMjNcXG4vLyBMaWNlbnNlOiBNSVRcXG5cXG4vLyBpbnNwaXJlZCBieSBodHRwOi8vd3d3LndvbGZyYW1hbHBoYS5jb20vaW5wdXQvP2k9Y2FubmFiaXMrY3VydmVcXG5cXG52ZWM0IHRyYW5zaXRpb24gKHZlYzIgdXYpIHtcXG4gIGlmKHByb2dyZXNzID09IDAuMCl7XFxuICAgIHJldHVybiBnZXRGcm9tQ29sb3IodXYpO1xcbiAgfVxcbiAgdmVjMiBsZWFmX3V2ID0gKHV2IC0gdmVjMigwLjUpKS8xMC4vcG93KHByb2dyZXNzLDMuNSk7XFxuXFx0bGVhZl91di55ICs9IDAuMzU7XFxuXFx0ZmxvYXQgciA9IDAuMTg7XFxuXFx0ZmxvYXQgbyA9IGF0YW4obGVhZl91di55LCBsZWFmX3V2LngpO1xcbiAgcmV0dXJuIG1peChnZXRGcm9tQ29sb3IodXYpLCBnZXRUb0NvbG9yKHV2KSwgMS4tc3RlcCgxLiAtIGxlbmd0aChsZWFmX3V2KStyKigxLitzaW4obykpKigxLiswLjkgKiBjb3MoOC4qbykpKigxLiswLjEqY29zKDI0LipvKSkqKDAuOSswLjA1KmNvcygyMDAuKm8pKSwgMS4pKTtcXG59XFxuXCIsXCJhdXRob3JcIjpcIkBGbGV4aTIzXCIsXCJsaWNlbnNlXCI6XCJNSVRcIixcImNyZWF0ZWRBdFwiOlwiVGh1LCAxIEp1biAyMDE3IDE1OjU4OjU4ICswMjAwXCIsXCJ1cGRhdGVkQXRcIjpcIlRodSwgMSBKdW4gMjAxNyAxNTo1ODo1OCArMDIwMFwifSx7XCJuYW1lXCI6XCJjaXJjbGVcIixcInBhcmFtc1R5cGVzXCI6e1wiY2VudGVyXCI6XCJ2ZWMyXCIsXCJiYWNrQ29sb3JcIjpcInZlYzNcIn0sXCJkZWZhdWx0UGFyYW1zXCI6e1wiY2VudGVyXCI6WzAuNSwwLjVdLFwiYmFja0NvbG9yXCI6WzAuMSwwLjEsMC4xXX0sXCJnbHNsXCI6XCIvLyBBdXRob3I6IEZlcm5hbmRvIEt1dGVrZW5cXG4vLyBMaWNlbnNlOiBNSVRcXG5cXG51bmlmb3JtIHZlYzIgY2VudGVyOyAvLyA9IHZlYzIoMC41LCAwLjUpO1xcbnVuaWZvcm0gdmVjMyBiYWNrQ29sb3I7IC8vID0gdmVjMygwLjEsIDAuMSwgMC4xKTtcXG5cXG52ZWM0IHRyYW5zaXRpb24gKHZlYzIgdXYpIHtcXG4gIFxcbiAgZmxvYXQgZGlzdGFuY2UgPSBsZW5ndGgodXYgLSBjZW50ZXIpO1xcbiAgZmxvYXQgcmFkaXVzID0gc3FydCg4LjApICogYWJzKHByb2dyZXNzIC0gMC41KTtcXG4gIFxcbiAgaWYgKGRpc3RhbmNlID4gcmFkaXVzKSB7XFxuICAgIHJldHVybiB2ZWM0KGJhY2tDb2xvciwgMS4wKTtcXG4gIH1cXG4gIGVsc2Uge1xcbiAgICBpZiAocHJvZ3Jlc3MgPCAwLjUpIHJldHVybiBnZXRGcm9tQ29sb3IodXYpO1xcbiAgICBlbHNlIHJldHVybiBnZXRUb0NvbG9yKHV2KTtcXG4gIH1cXG59XFxuXCIsXCJhdXRob3JcIjpcIkZlcm5hbmRvIEt1dGVrZW5cIixcImxpY2Vuc2VcIjpcIk1JVFwiLFwiY3JlYXRlZEF0XCI6XCJUdWUsIDMwIE1heSAyMDE3IDE0OjI2OjQ0ICswMjAwXCIsXCJ1cGRhdGVkQXRcIjpcIlR1ZSwgMzAgTWF5IDIwMTcgMTQ6MjY6NDQgKzAyMDBcIn0se1wibmFtZVwiOlwiY2lyY2xlb3BlblwiLFwicGFyYW1zVHlwZXNcIjp7XCJzbW9vdGhuZXNzXCI6XCJmbG9hdFwiLFwib3BlbmluZ1wiOlwiYm9vbFwifSxcImRlZmF1bHRQYXJhbXNcIjp7XCJzbW9vdGhuZXNzXCI6MC4zLFwib3BlbmluZ1wiOnRydWV9LFwiZ2xzbFwiOlwiLy8gYXV0aG9yOiBncmVcXG4vLyBMaWNlbnNlOiBNSVRcXG51bmlmb3JtIGZsb2F0IHNtb290aG5lc3M7IC8vID0gMC4zXFxudW5pZm9ybSBib29sIG9wZW5pbmc7IC8vID0gdHJ1ZVxcblxcbmNvbnN0IHZlYzIgY2VudGVyID0gdmVjMigwLjUsIDAuNSk7XFxuY29uc3QgZmxvYXQgU1FSVF8yID0gMS40MTQyMTM1NjIzNzM7XFxuXFxudmVjNCB0cmFuc2l0aW9uICh2ZWMyIHV2KSB7XFxuICBmbG9hdCB4ID0gb3BlbmluZyA/IHByb2dyZXNzIDogMS4tcHJvZ3Jlc3M7XFxuICBmbG9hdCBtID0gc21vb3Roc3RlcCgtc21vb3RobmVzcywgMC4wLCBTUVJUXzIqZGlzdGFuY2UoY2VudGVyLCB1dikgLSB4KigxLitzbW9vdGhuZXNzKSk7XFxuICByZXR1cm4gbWl4KGdldEZyb21Db2xvcih1diksIGdldFRvQ29sb3IodXYpLCBvcGVuaW5nID8gMS4tbSA6IG0pO1xcbn1cXG5cIixcImF1dGhvclwiOlwiZ3JlXCIsXCJsaWNlbnNlXCI6XCJNSVRcIixcImNyZWF0ZWRBdFwiOlwiVHVlLCAzMCBNYXkgMjAxNyAxNDoyNjo0NCArMDIwMFwiLFwidXBkYXRlZEF0XCI6XCJUdWUsIDMwIE1heSAyMDE3IDE0OjI2OjQ0ICswMjAwXCJ9LHtcIm5hbWVcIjpcImNvbG9ycGhhc2VcIixcInBhcmFtc1R5cGVzXCI6e1wiZnJvbVN0ZXBcIjpcInZlYzRcIixcInRvU3RlcFwiOlwidmVjNFwifSxcImRlZmF1bHRQYXJhbXNcIjp7XCJmcm9tU3RlcFwiOlswLDAuMiwwLjQsMF0sXCJ0b1N0ZXBcIjpbMC42LDAuOCwxLDFdfSxcImdsc2xcIjpcIi8vIEF1dGhvcjogZ3JlXFxuLy8gTGljZW5zZTogTUlUXFxuXFxuLy8gVXNhZ2U6IGZyb21TdGVwIGFuZCB0b1N0ZXAgbXVzdCBiZSBpbiBbMC4wLCAxLjBdIHJhbmdlIFxcbi8vIGFuZCBhbGwoZnJvbVN0ZXApIG11c3QgYmUgPCBhbGwodG9TdGVwKVxcblxcbnVuaWZvcm0gdmVjNCBmcm9tU3RlcDsgLy8gPSB2ZWM0KDAuMCwgMC4yLCAwLjQsIDAuMClcXG51bmlmb3JtIHZlYzQgdG9TdGVwOyAvLyA9IHZlYzQoMC42LCAwLjgsIDEuMCwgMS4wKVxcblxcbnZlYzQgdHJhbnNpdGlvbiAodmVjMiB1dikge1xcbiAgdmVjNCBhID0gZ2V0RnJvbUNvbG9yKHV2KTtcXG4gIHZlYzQgYiA9IGdldFRvQ29sb3IodXYpO1xcbiAgcmV0dXJuIG1peChhLCBiLCBzbW9vdGhzdGVwKGZyb21TdGVwLCB0b1N0ZXAsIHZlYzQocHJvZ3Jlc3MpKSk7XFxufVxcblwiLFwiYXV0aG9yXCI6XCJncmVcIixcImxpY2Vuc2VcIjpcIk1JVFwiLFwiY3JlYXRlZEF0XCI6XCJUdWUsIDMwIE1heSAyMDE3IDE0OjI2OjQ0ICswMjAwXCIsXCJ1cGRhdGVkQXRcIjpcIlR1ZSwgMzAgTWF5IDIwMTcgMTQ6MjY6NDQgKzAyMDBcIn0se1wibmFtZVwiOlwiY3Jvc3NoYXRjaFwiLFwicGFyYW1zVHlwZXNcIjp7XCJjZW50ZXJcIjpcInZlYzJcIixcInRocmVzaG9sZFwiOlwiZmxvYXRcIixcImZhZGVFZGdlXCI6XCJmbG9hdFwifSxcImRlZmF1bHRQYXJhbXNcIjp7XCJjZW50ZXJcIjpbMC41LDAuNV0sXCJ0aHJlc2hvbGRcIjozLFwiZmFkZUVkZ2VcIjowLjF9LFwiZ2xzbFwiOlwiLy8gTGljZW5zZTogTUlUXFxuLy8gQXV0aG9yOiBwdGhyYXNoZXJcXG4vLyBhZGFwdGVkIGJ5IGdyZSBmcm9tIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL3B0aHJhc2hlci8wNGZkOWE3ZGU0MDEyY2JiMDNmNlxcblxcbnVuaWZvcm0gdmVjMiBjZW50ZXI7IC8vID0gdmVjMigwLjUpXFxudW5pZm9ybSBmbG9hdCB0aHJlc2hvbGQ7IC8vID0gMy4wXFxudW5pZm9ybSBmbG9hdCBmYWRlRWRnZTsgLy8gPSAwLjFcXG5cXG5mbG9hdCByYW5kKHZlYzIgY28pIHtcXG4gIHJldHVybiBmcmFjdChzaW4oZG90KGNvLnh5ICx2ZWMyKDEyLjk4OTgsNzguMjMzKSkpICogNDM3NTguNTQ1Myk7XFxufVxcbnZlYzQgdHJhbnNpdGlvbih2ZWMyIHApIHtcXG4gIGZsb2F0IGRpc3QgPSBkaXN0YW5jZShjZW50ZXIsIHApIC8gdGhyZXNob2xkO1xcbiAgZmxvYXQgciA9IHByb2dyZXNzIC0gbWluKHJhbmQodmVjMihwLnksIDAuMCkpLCByYW5kKHZlYzIoMC4wLCBwLngpKSk7XFxuICByZXR1cm4gbWl4KGdldEZyb21Db2xvcihwKSwgZ2V0VG9Db2xvcihwKSwgbWl4KDAuMCwgbWl4KHN0ZXAoZGlzdCwgciksIDEuMCwgc21vb3Roc3RlcCgxLjAtZmFkZUVkZ2UsIDEuMCwgcHJvZ3Jlc3MpKSwgc21vb3Roc3RlcCgwLjAsIGZhZGVFZGdlLCBwcm9ncmVzcykpKTsgICAgXFxufVxcblwiLFwibGljZW5zZVwiOlwiTUlUXCIsXCJhdXRob3JcIjpcInB0aHJhc2hlclwiLFwiY3JlYXRlZEF0XCI6XCJNb24sIDEyIEp1biAyMDE3IDEwOjAyOjEyICswODAwXCIsXCJ1cGRhdGVkQXRcIjpcIk1vbiwgMTIgSnVuIDIwMTcgMTA6MDI6MTIgKzA4MDBcIn0se1wibmFtZVwiOlwiY3Jvc3N3YXJwXCIsXCJwYXJhbXNUeXBlc1wiOnt9LFwiZGVmYXVsdFBhcmFtc1wiOnt9LFwiZ2xzbFwiOlwiLy8gQXV0aG9yOiBFa2UgUMOpdGVyIDxwZXRlcmVrZXBldGVyQGdtYWlsLmNvbT5cXG4vLyBMaWNlbnNlOiBNSVRcXG52ZWM0IHRyYW5zaXRpb24odmVjMiBwKSB7XFxuICBmbG9hdCB4ID0gcHJvZ3Jlc3M7XFxuICB4PXNtb290aHN0ZXAoLjAsMS4wLCh4KjIuMCtwLngtMS4wKSk7XFxuICByZXR1cm4gbWl4KGdldEZyb21Db2xvcigocC0uNSkqKDEuLXgpKy41KSwgZ2V0VG9Db2xvcigocC0uNSkqeCsuNSksIHgpO1xcbn1cXG5cIixcImF1dGhvclwiOlwiRWtlIFDDqXRlciA8cGV0ZXJla2VwZXRlckBnbWFpbC5jb20+XCIsXCJsaWNlbnNlXCI6XCJNSVRcIixcImNyZWF0ZWRBdFwiOlwiVHVlLCAzMCBNYXkgMjAxNyAxNDoyNjo0NCArMDIwMFwiLFwidXBkYXRlZEF0XCI6XCJUdWUsIDMwIE1heSAyMDE3IDE0OjI2OjQ0ICswMjAwXCJ9LHtcIm5hbWVcIjpcImN1YmVcIixcInBhcmFtc1R5cGVzXCI6e1wicGVyc3BcIjpcImZsb2F0XCIsXCJ1bnpvb21cIjpcImZsb2F0XCIsXCJyZWZsZWN0aW9uXCI6XCJmbG9hdFwiLFwiZmxvYXRpbmdcIjpcImZsb2F0XCJ9LFwiZGVmYXVsdFBhcmFtc1wiOntcInBlcnNwXCI6MC43LFwidW56b29tXCI6MC4zLFwicmVmbGVjdGlvblwiOjAuNCxcImZsb2F0aW5nXCI6M30sXCJnbHNsXCI6XCIvLyBBdXRob3I6IGdyZVxcbi8vIExpY2Vuc2U6IE1JVFxcbnVuaWZvcm0gZmxvYXQgcGVyc3A7IC8vID0gMC43XFxudW5pZm9ybSBmbG9hdCB1bnpvb207IC8vID0gMC4zXFxudW5pZm9ybSBmbG9hdCByZWZsZWN0aW9uOyAvLyA9IDAuNFxcbnVuaWZvcm0gZmxvYXQgZmxvYXRpbmc7IC8vID0gMy4wXFxuXFxudmVjMiBwcm9qZWN0ICh2ZWMyIHApIHtcXG4gIHJldHVybiBwICogdmVjMigxLjAsIC0xLjIpICsgdmVjMigwLjAsIC1mbG9hdGluZy8xMDAuKTtcXG59XFxuXFxuYm9vbCBpbkJvdW5kcyAodmVjMiBwKSB7XFxuICByZXR1cm4gYWxsKGxlc3NUaGFuKHZlYzIoMC4wKSwgcCkpICYmIGFsbChsZXNzVGhhbihwLCB2ZWMyKDEuMCkpKTtcXG59XFxuXFxudmVjNCBiZ0NvbG9yICh2ZWMyIHAsIHZlYzIgcGZyLCB2ZWMyIHB0bykge1xcbiAgdmVjNCBjID0gdmVjNCgwLjAsIDAuMCwgMC4wLCAxLjApO1xcbiAgcGZyID0gcHJvamVjdChwZnIpO1xcbiAgLy8gRklYTUUgYXZvaWQgYnJhbmNoaW5nIG1pZ2h0IGhlbHAgcGVyZiFcXG4gIGlmIChpbkJvdW5kcyhwZnIpKSB7XFxuICAgIGMgKz0gbWl4KHZlYzQoMC4wKSwgZ2V0RnJvbUNvbG9yKHBmciksIHJlZmxlY3Rpb24gKiBtaXgoMS4wLCAwLjAsIHBmci55KSk7XFxuICB9XFxuICBwdG8gPSBwcm9qZWN0KHB0byk7XFxuICBpZiAoaW5Cb3VuZHMocHRvKSkge1xcbiAgICBjICs9IG1peCh2ZWM0KDAuMCksIGdldFRvQ29sb3IocHRvKSwgcmVmbGVjdGlvbiAqIG1peCgxLjAsIDAuMCwgcHRvLnkpKTtcXG4gIH1cXG4gIHJldHVybiBjO1xcbn1cXG5cXG4vLyBwIDogdGhlIHBvc2l0aW9uXFxuLy8gcGVyc3AgOiB0aGUgcGVyc3BlY3RpdmUgaW4gWyAwLCAxIF1cXG4vLyBjZW50ZXIgOiB0aGUgeGNlbnRlciBpbiBbMCwgMV0gXFxcXCAwLjUgZXhjbHVkZWRcXG52ZWMyIHhza2V3ICh2ZWMyIHAsIGZsb2F0IHBlcnNwLCBmbG9hdCBjZW50ZXIpIHtcXG4gIGZsb2F0IHggPSBtaXgocC54LCAxLjAtcC54LCBjZW50ZXIpO1xcbiAgcmV0dXJuIChcXG4gICAgKFxcbiAgICAgIHZlYzIoIHgsIChwLnkgLSAwLjUqKDEuMC1wZXJzcCkgKiB4KSAvICgxLjArKHBlcnNwLTEuMCkqeCkgKVxcbiAgICAgIC0gdmVjMigwLjUtZGlzdGFuY2UoY2VudGVyLCAwLjUpLCAwLjApXFxuICAgIClcXG4gICAgKiB2ZWMyKDAuNSAvIGRpc3RhbmNlKGNlbnRlciwgMC41KSAqIChjZW50ZXI8MC41ID8gMS4wIDogLTEuMCksIDEuMClcXG4gICAgKyB2ZWMyKGNlbnRlcjwwLjUgPyAwLjAgOiAxLjAsIDAuMClcXG4gICk7XFxufVxcblxcbnZlYzQgdHJhbnNpdGlvbih2ZWMyIG9wKSB7XFxuICBmbG9hdCB1eiA9IHVuem9vbSAqIDIuMCooMC41LWRpc3RhbmNlKDAuNSwgcHJvZ3Jlc3MpKTtcXG4gIHZlYzIgcCA9IC11eiowLjUrKDEuMCt1eikgKiBvcDtcXG4gIHZlYzIgZnJvbVAgPSB4c2tldyhcXG4gICAgKHAgLSB2ZWMyKHByb2dyZXNzLCAwLjApKSAvIHZlYzIoMS4wLXByb2dyZXNzLCAxLjApLFxcbiAgICAxLjAtbWl4KHByb2dyZXNzLCAwLjAsIHBlcnNwKSxcXG4gICAgMC4wXFxuICApO1xcbiAgdmVjMiB0b1AgPSB4c2tldyhcXG4gICAgcCAvIHZlYzIocHJvZ3Jlc3MsIDEuMCksXFxuICAgIG1peChwb3cocHJvZ3Jlc3MsIDIuMCksIDEuMCwgcGVyc3ApLFxcbiAgICAxLjBcXG4gICk7XFxuICAvLyBGSVhNRSBhdm9pZCBicmFuY2hpbmcgbWlnaHQgaGVscCBwZXJmIVxcbiAgaWYgKGluQm91bmRzKGZyb21QKSkge1xcbiAgICByZXR1cm4gZ2V0RnJvbUNvbG9yKGZyb21QKTtcXG4gIH1cXG4gIGVsc2UgaWYgKGluQm91bmRzKHRvUCkpIHtcXG4gICAgcmV0dXJuIGdldFRvQ29sb3IodG9QKTtcXG4gIH1cXG4gIHJldHVybiBiZ0NvbG9yKG9wLCBmcm9tUCwgdG9QKTtcXG59XFxuXCIsXCJhdXRob3JcIjpcImdyZVwiLFwibGljZW5zZVwiOlwiTUlUXCIsXCJjcmVhdGVkQXRcIjpcIlR1ZSwgMzAgTWF5IDIwMTcgMTQ6MjY6NDQgKzAyMDBcIixcInVwZGF0ZWRBdFwiOlwiVHVlLCAzMCBNYXkgMjAxNyAxNDoyNjo0NCArMDIwMFwifSx7XCJuYW1lXCI6XCJkaXJlY3Rpb25hbHdhcnBcIixcInBhcmFtc1R5cGVzXCI6e1wiZGlyZWN0aW9uXCI6XCJ2ZWMyXCJ9LFwiZGVmYXVsdFBhcmFtc1wiOntcImRpcmVjdGlvblwiOlstMSwxXX0sXCJnbHNsXCI6XCIvLyBBdXRob3I6IHBzY2hyb2VuXFxuLy8gTGljZW5zZTogTUlUXFxuXFxudW5pZm9ybSB2ZWMyIGRpcmVjdGlvbjsgLy8gPSB2ZWMyKC0xLjAsIDEuMClcXG5cXG5jb25zdCBmbG9hdCBzbW9vdGhuZXNzID0gMC41O1xcbmNvbnN0IHZlYzIgY2VudGVyID0gdmVjMigwLjUsIDAuNSk7XFxuXFxudmVjNCB0cmFuc2l0aW9uICh2ZWMyIHV2KSB7XFxuICB2ZWMyIHYgPSBub3JtYWxpemUoZGlyZWN0aW9uKTtcXG4gIHYgLz0gYWJzKHYueCkgKyBhYnModi55KTtcXG4gIGZsb2F0IGQgPSB2LnggKiBjZW50ZXIueCArIHYueSAqIGNlbnRlci55O1xcbiAgZmxvYXQgbSA9IDEuMCAtIHNtb290aHN0ZXAoLXNtb290aG5lc3MsIDAuMCwgdi54ICogdXYueCArIHYueSAqIHV2LnkgLSAoZCAtIDAuNSArIHByb2dyZXNzICogKDEuMCArIHNtb290aG5lc3MpKSk7XFxuICByZXR1cm4gbWl4KGdldEZyb21Db2xvcigodXYgLSAwLjUpICogKDEuMCAtIG0pICsgMC41KSwgZ2V0VG9Db2xvcigodXYgLSAwLjUpICogbSArIDAuNSksIG0pO1xcbn1cXG5cIixcImF1dGhvclwiOlwicHNjaHJvZW5cIixcImxpY2Vuc2VcIjpcIk1JVFwiLFwiY3JlYXRlZEF0XCI6XCJXZWQsIDEzIERlYyAyMDE3IDEyOjA4OjQ5IC0wNTAwXCIsXCJ1cGRhdGVkQXRcIjpcIldlZCwgMTMgRGVjIDIwMTcgMTI6MDg6NDkgLTA1MDBcIn0se1wibmFtZVwiOlwiZGlyZWN0aW9uYWx3aXBlXCIsXCJwYXJhbXNUeXBlc1wiOntcImRpcmVjdGlvblwiOlwidmVjMlwiLFwic21vb3RobmVzc1wiOlwiZmxvYXRcIn0sXCJkZWZhdWx0UGFyYW1zXCI6e1wiZGlyZWN0aW9uXCI6WzEsLTFdLFwic21vb3RobmVzc1wiOjAuNX0sXCJnbHNsXCI6XCIvLyBBdXRob3I6IGdyZVxcbi8vIExpY2Vuc2U6IE1JVFxcblxcbnVuaWZvcm0gdmVjMiBkaXJlY3Rpb247IC8vID0gdmVjMigxLjAsIC0xLjApXFxudW5pZm9ybSBmbG9hdCBzbW9vdGhuZXNzOyAvLyA9IDAuNVxcbiBcXG5jb25zdCB2ZWMyIGNlbnRlciA9IHZlYzIoMC41LCAwLjUpO1xcbiBcXG52ZWM0IHRyYW5zaXRpb24gKHZlYzIgdXYpIHtcXG4gIHZlYzIgdiA9IG5vcm1hbGl6ZShkaXJlY3Rpb24pO1xcbiAgdiAvPSBhYnModi54KSthYnModi55KTtcXG4gIGZsb2F0IGQgPSB2LnggKiBjZW50ZXIueCArIHYueSAqIGNlbnRlci55O1xcbiAgZmxvYXQgbSA9XFxuICAgICgxLjAtc3RlcChwcm9ncmVzcywgMC4wKSkgKiAvLyB0aGVyZSBpcyBzb21ldGhpbmcgd3Jvbmcgd2l0aCBvdXIgZm9ybXVsYSB0aGF0IG1ha2VzIG0gbm90IGVxdWFscyAwLjAgd2l0aCBwcm9ncmVzcyBpcyAwLjBcXG4gICAgKDEuMCAtIHNtb290aHN0ZXAoLXNtb290aG5lc3MsIDAuMCwgdi54ICogdXYueCArIHYueSAqIHV2LnkgLSAoZC0wLjUrcHJvZ3Jlc3MqKDEuK3Ntb290aG5lc3MpKSkpO1xcbiAgcmV0dXJuIG1peChnZXRGcm9tQ29sb3IodXYpLCBnZXRUb0NvbG9yKHV2KSwgbSk7XFxufVxcblwiLFwiYXV0aG9yXCI6XCJncmVcIixcImxpY2Vuc2VcIjpcIk1JVFwiLFwiY3JlYXRlZEF0XCI6XCJUdWUsIDMwIE1heSAyMDE3IDE0OjI2OjQ0ICswMjAwXCIsXCJ1cGRhdGVkQXRcIjpcIlR1ZSwgMzAgTWF5IDIwMTcgMTQ6MjY6NDQgKzAyMDBcIn0se1wibmFtZVwiOlwiZGlzcGxhY2VtZW50XCIsXCJwYXJhbXNUeXBlc1wiOntcImRpc3BsYWNlbWVudE1hcFwiOlwic2FtcGxlcjJEXCIsXCJzdHJlbmd0aFwiOlwiZmxvYXRcIn0sXCJkZWZhdWx0UGFyYW1zXCI6e1wiZGlzcGxhY2VtZW50TWFwXCI6bnVsbCxcInN0cmVuZ3RoXCI6MC41fSxcImdsc2xcIjpcIi8vIEF1dGhvcjogVHJhdmlzIEZpc2NoZXJcXG4vLyBMaWNlbnNlOiBNSVRcXG4vL1xcbi8vIEFkYXB0ZWQgZnJvbSBhIENvZHJvcHMgYXJ0aWNsZSBieSBSb2JpbiBEZWxhcG9ydGVcXG4vLyBodHRwczovL3R5bXBhbnVzLm5ldC9EZXZlbG9wbWVudC9EaXN0b3J0aW9uSG92ZXJFZmZlY3RcXG5cXG51bmlmb3JtIHNhbXBsZXIyRCBkaXNwbGFjZW1lbnRNYXA7XFxuXFxudW5pZm9ybSBmbG9hdCBzdHJlbmd0aDsgLy8gPSAwLjVcXG5cXG52ZWM0IHRyYW5zaXRpb24gKHZlYzIgdXYpIHtcXG4gIGZsb2F0IGRpc3BsYWNlbWVudCA9IHRleHR1cmUyRChkaXNwbGFjZW1lbnRNYXAsIHV2KS5yICogc3RyZW5ndGg7XFxuXFxuICB2ZWMyIHV2RnJvbSA9IHZlYzIodXYueCArIHByb2dyZXNzICogZGlzcGxhY2VtZW50LCB1di55KTtcXG4gIHZlYzIgdXZUbyA9IHZlYzIodXYueCAtICgxLjAgLSBwcm9ncmVzcykgKiBkaXNwbGFjZW1lbnQsIHV2LnkpO1xcblxcbiAgcmV0dXJuIG1peChcXG4gICAgZ2V0RnJvbUNvbG9yKHV2RnJvbSksXFxuICAgIGdldFRvQ29sb3IodXZUbyksXFxuICAgIHByb2dyZXNzXFxuICApO1xcbn1cXG5cIixcImF1dGhvclwiOlwiVHJhdmlzIEZpc2NoZXJcIixcImxpY2Vuc2VcIjpcIk1JVFwiLFwiY3JlYXRlZEF0XCI6XCJUdWUsIDEwIEFwciAyMDE4IDIzOjAzOjM4IC0wNDAwXCIsXCJ1cGRhdGVkQXRcIjpcIlR1ZSwgMTAgQXByIDIwMTggMjM6MDM6MzggLTA0MDBcIn0se1wibmFtZVwiOlwiZG9vcndheVwiLFwicGFyYW1zVHlwZXNcIjp7XCJyZWZsZWN0aW9uXCI6XCJmbG9hdFwiLFwicGVyc3BlY3RpdmVcIjpcImZsb2F0XCIsXCJkZXB0aFwiOlwiZmxvYXRcIn0sXCJkZWZhdWx0UGFyYW1zXCI6e1wicmVmbGVjdGlvblwiOjAuNCxcInBlcnNwZWN0aXZlXCI6MC40LFwiZGVwdGhcIjozfSxcImdsc2xcIjpcIi8vIGF1dGhvcjogZ3JlXFxuLy8gTGljZW5zZTogTUlUIFxcbnVuaWZvcm0gZmxvYXQgcmVmbGVjdGlvbjsgLy8gPSAwLjRcXG51bmlmb3JtIGZsb2F0IHBlcnNwZWN0aXZlOyAvLyA9IDAuNFxcbnVuaWZvcm0gZmxvYXQgZGVwdGg7IC8vID0gM1xcblxcbmNvbnN0IHZlYzQgYmxhY2sgPSB2ZWM0KDAuMCwgMC4wLCAwLjAsIDEuMCk7XFxuY29uc3QgdmVjMiBib3VuZE1pbiA9IHZlYzIoMC4wLCAwLjApO1xcbmNvbnN0IHZlYzIgYm91bmRNYXggPSB2ZWMyKDEuMCwgMS4wKTtcXG5cXG5ib29sIGluQm91bmRzICh2ZWMyIHApIHtcXG4gIHJldHVybiBhbGwobGVzc1RoYW4oYm91bmRNaW4sIHApKSAmJiBhbGwobGVzc1RoYW4ocCwgYm91bmRNYXgpKTtcXG59XFxuXFxudmVjMiBwcm9qZWN0ICh2ZWMyIHApIHtcXG4gIHJldHVybiBwICogdmVjMigxLjAsIC0xLjIpICsgdmVjMigwLjAsIC0wLjAyKTtcXG59XFxuXFxudmVjNCBiZ0NvbG9yICh2ZWMyIHAsIHZlYzIgcHRvKSB7XFxuICB2ZWM0IGMgPSBibGFjaztcXG4gIHB0byA9IHByb2plY3QocHRvKTtcXG4gIGlmIChpbkJvdW5kcyhwdG8pKSB7XFxuICAgIGMgKz0gbWl4KGJsYWNrLCBnZXRUb0NvbG9yKHB0byksIHJlZmxlY3Rpb24gKiBtaXgoMS4wLCAwLjAsIHB0by55KSk7XFxuICB9XFxuICByZXR1cm4gYztcXG59XFxuXFxuXFxudmVjNCB0cmFuc2l0aW9uICh2ZWMyIHApIHtcXG4gIHZlYzIgcGZyID0gdmVjMigtMS4pLCBwdG8gPSB2ZWMyKC0xLik7XFxuICBmbG9hdCBtaWRkbGVTbGl0ID0gMi4wICogYWJzKHAueC0wLjUpIC0gcHJvZ3Jlc3M7XFxuICBpZiAobWlkZGxlU2xpdCA+IDAuMCkge1xcbiAgICBwZnIgPSBwICsgKHAueCA+IDAuNSA/IC0xLjAgOiAxLjApICogdmVjMigwLjUqcHJvZ3Jlc3MsIDAuMCk7XFxuICAgIGZsb2F0IGQgPSAxLjAvKDEuMCtwZXJzcGVjdGl2ZSpwcm9ncmVzcyooMS4wLW1pZGRsZVNsaXQpKTtcXG4gICAgcGZyLnkgLT0gZC8yLjtcXG4gICAgcGZyLnkgKj0gZDtcXG4gICAgcGZyLnkgKz0gZC8yLjtcXG4gIH1cXG4gIGZsb2F0IHNpemUgPSBtaXgoMS4wLCBkZXB0aCwgMS4tcHJvZ3Jlc3MpO1xcbiAgcHRvID0gKHAgKyB2ZWMyKC0wLjUsIC0wLjUpKSAqIHZlYzIoc2l6ZSwgc2l6ZSkgKyB2ZWMyKDAuNSwgMC41KTtcXG4gIGlmIChpbkJvdW5kcyhwZnIpKSB7XFxuICAgIHJldHVybiBnZXRGcm9tQ29sb3IocGZyKTtcXG4gIH1cXG4gIGVsc2UgaWYgKGluQm91bmRzKHB0bykpIHtcXG4gICAgcmV0dXJuIGdldFRvQ29sb3IocHRvKTtcXG4gIH1cXG4gIGVsc2Uge1xcbiAgICByZXR1cm4gYmdDb2xvcihwLCBwdG8pO1xcbiAgfVxcbn1cXG5cIixcImF1dGhvclwiOlwiZ3JlXCIsXCJsaWNlbnNlXCI6XCJNSVRcIixcImNyZWF0ZWRBdFwiOlwiVHVlLCAzMCBNYXkgMjAxNyAxNDoyNjo0NCArMDIwMFwiLFwidXBkYXRlZEF0XCI6XCJUdWUsIDMwIE1heSAyMDE3IDE0OjI2OjQ0ICswMjAwXCJ9LHtcIm5hbWVcIjpcImZhZGVcIixcInBhcmFtc1R5cGVzXCI6e30sXCJkZWZhdWx0UGFyYW1zXCI6e30sXCJnbHNsXCI6XCIvLyBhdXRob3I6IGdyZVxcbi8vIGxpY2Vuc2U6IE1JVFxcblxcbnZlYzQgdHJhbnNpdGlvbiAodmVjMiB1dikge1xcbiAgcmV0dXJuIG1peChcXG4gICAgZ2V0RnJvbUNvbG9yKHV2KSxcXG4gICAgZ2V0VG9Db2xvcih1diksXFxuICAgIHByb2dyZXNzXFxuICApO1xcbn1cXG5cIixcImF1dGhvclwiOlwiZ3JlXCIsXCJsaWNlbnNlXCI6XCJNSVRcIixcImNyZWF0ZWRBdFwiOlwiVHVlLCAzMCBNYXkgMjAxNyAxNDoyNjo0NCArMDIwMFwiLFwidXBkYXRlZEF0XCI6XCJUdWUsIDMwIE1heSAyMDE3IDE0OjI2OjQ0ICswMjAwXCJ9LHtcIm5hbWVcIjpcImZhZGVjb2xvclwiLFwicGFyYW1zVHlwZXNcIjp7XCJjb2xvclwiOlwidmVjM1wiLFwiY29sb3JQaGFzZVwiOlwiZmxvYXRcIn0sXCJkZWZhdWx0UGFyYW1zXCI6e1wiY29sb3JcIjpbMCwwLDBdLFwiY29sb3JQaGFzZVwiOjAuNH0sXCJnbHNsXCI6XCIvLyBhdXRob3I6IGdyZVxcbi8vIExpY2Vuc2U6IE1JVFxcbnVuaWZvcm0gdmVjMyBjb2xvcjsvLyA9IHZlYzMoMC4wKVxcbnVuaWZvcm0gZmxvYXQgY29sb3JQaGFzZS8qID0gMC40ICovOyAvLyBpZiAwLjAsIHRoZXJlIGlzIG5vIGJsYWNrIHBoYXNlLCBpZiAwLjksIHRoZSBibGFjayBwaGFzZSBpcyB2ZXJ5IGltcG9ydGFudFxcbnZlYzQgdHJhbnNpdGlvbiAodmVjMiB1dikge1xcbiAgcmV0dXJuIG1peChcXG4gICAgbWl4KHZlYzQoY29sb3IsIDEuMCksIGdldEZyb21Db2xvcih1diksIHNtb290aHN0ZXAoMS4wLWNvbG9yUGhhc2UsIDAuMCwgcHJvZ3Jlc3MpKSxcXG4gICAgbWl4KHZlYzQoY29sb3IsIDEuMCksIGdldFRvQ29sb3IodXYpLCBzbW9vdGhzdGVwKCAgICBjb2xvclBoYXNlLCAxLjAsIHByb2dyZXNzKSksXFxuICAgIHByb2dyZXNzKTtcXG59XFxuXCIsXCJhdXRob3JcIjpcImdyZVwiLFwibGljZW5zZVwiOlwiTUlUXCIsXCJjcmVhdGVkQXRcIjpcIlR1ZSwgMzAgTWF5IDIwMTcgMTQ6MjY6NDQgKzAyMDBcIixcInVwZGF0ZWRBdFwiOlwiVHVlLCAzMCBNYXkgMjAxNyAxNDoyNjo0NCArMDIwMFwifSx7XCJuYW1lXCI6XCJmYWRlZ3JheXNjYWxlXCIsXCJwYXJhbXNUeXBlc1wiOntcImludGVuc2l0eVwiOlwiZmxvYXRcIn0sXCJkZWZhdWx0UGFyYW1zXCI6e1wiaW50ZW5zaXR5XCI6MC4zfSxcImdsc2xcIjpcIi8vIEF1dGhvcjogZ3JlXFxuLy8gTGljZW5zZTogTUlUXFxuXFxudW5pZm9ybSBmbG9hdCBpbnRlbnNpdHk7IC8vID0gMC4zOyAvLyBpZiAwLjAsIHRoZSBpbWFnZSBkaXJlY3RseSB0dXJuIGdyYXlzY2FsZSwgaWYgMC45LCB0aGUgZ3JheXNjYWxlIHRyYW5zaXRpb24gcGhhc2UgaXMgdmVyeSBpbXBvcnRhbnRcXG4gXFxudmVjMyBncmF5c2NhbGUgKHZlYzMgY29sb3IpIHtcXG4gIHJldHVybiB2ZWMzKDAuMjEyNipjb2xvci5yICsgMC43MTUyKmNvbG9yLmcgKyAwLjA3MjIqY29sb3IuYik7XFxufVxcbiBcXG52ZWM0IHRyYW5zaXRpb24gKHZlYzIgdXYpIHtcXG4gIHZlYzQgZmMgPSBnZXRGcm9tQ29sb3IodXYpO1xcbiAgdmVjNCB0YyA9IGdldFRvQ29sb3IodXYpO1xcbiAgcmV0dXJuIG1peChcXG4gICAgbWl4KHZlYzQoZ3JheXNjYWxlKGZjLnJnYiksIDEuMCksIGZjLCBzbW9vdGhzdGVwKDEuMC1pbnRlbnNpdHksIDAuMCwgcHJvZ3Jlc3MpKSxcXG4gICAgbWl4KHZlYzQoZ3JheXNjYWxlKHRjLnJnYiksIDEuMCksIHRjLCBzbW9vdGhzdGVwKCAgICBpbnRlbnNpdHksIDEuMCwgcHJvZ3Jlc3MpKSxcXG4gICAgcHJvZ3Jlc3MpO1xcbn1cXG5cIixcImF1dGhvclwiOlwiZ3JlXCIsXCJsaWNlbnNlXCI6XCJNSVRcIixcImNyZWF0ZWRBdFwiOlwiVHVlLCAzMCBNYXkgMjAxNyAxNDoyNjo0NCArMDIwMFwiLFwidXBkYXRlZEF0XCI6XCJUdWUsIDMwIE1heSAyMDE3IDE0OjI2OjQ0ICswMjAwXCJ9LHtcIm5hbWVcIjpcImZseWV5ZVwiLFwicGFyYW1zVHlwZXNcIjp7XCJzaXplXCI6XCJmbG9hdFwiLFwiem9vbVwiOlwiZmxvYXRcIixcImNvbG9yU2VwYXJhdGlvblwiOlwiZmxvYXRcIn0sXCJkZWZhdWx0UGFyYW1zXCI6e1wic2l6ZVwiOjAuMDQsXCJ6b29tXCI6NTAsXCJjb2xvclNlcGFyYXRpb25cIjowLjN9LFwiZ2xzbFwiOlwiLy8gQXV0aG9yOiBncmVcXG4vLyBMaWNlbnNlOiBNSVRcXG51bmlmb3JtIGZsb2F0IHNpemU7IC8vID0gMC4wNFxcbnVuaWZvcm0gZmxvYXQgem9vbTsgLy8gPSA1MC4wXFxudW5pZm9ybSBmbG9hdCBjb2xvclNlcGFyYXRpb247IC8vID0gMC4zXFxuXFxudmVjNCB0cmFuc2l0aW9uKHZlYzIgcCkge1xcbiAgZmxvYXQgaW52ID0gMS4gLSBwcm9ncmVzcztcXG4gIHZlYzIgZGlzcCA9IHNpemUqdmVjMihjb3Moem9vbSpwLngpLCBzaW4oem9vbSpwLnkpKTtcXG4gIHZlYzQgdGV4VG8gPSBnZXRUb0NvbG9yKHAgKyBpbnYqZGlzcCk7XFxuICB2ZWM0IHRleEZyb20gPSB2ZWM0KFxcbiAgICBnZXRGcm9tQ29sb3IocCArIHByb2dyZXNzKmRpc3AqKDEuMCAtIGNvbG9yU2VwYXJhdGlvbikpLnIsXFxuICAgIGdldEZyb21Db2xvcihwICsgcHJvZ3Jlc3MqZGlzcCkuZyxcXG4gICAgZ2V0RnJvbUNvbG9yKHAgKyBwcm9ncmVzcypkaXNwKigxLjAgKyBjb2xvclNlcGFyYXRpb24pKS5iLFxcbiAgICAxLjApO1xcbiAgcmV0dXJuIHRleFRvKnByb2dyZXNzICsgdGV4RnJvbSppbnY7XFxufVxcblwiLFwiYXV0aG9yXCI6XCJncmVcIixcImxpY2Vuc2VcIjpcIk1JVFwiLFwiY3JlYXRlZEF0XCI6XCJUdWUsIDMwIE1heSAyMDE3IDE0OjI2OjQ0ICswMjAwXCIsXCJ1cGRhdGVkQXRcIjpcIlR1ZSwgMzAgTWF5IDIwMTcgMTQ6MjY6NDQgKzAyMDBcIn0se1wibmFtZVwiOlwiaGVhcnRcIixcInBhcmFtc1R5cGVzXCI6e30sXCJkZWZhdWx0UGFyYW1zXCI6e30sXCJnbHNsXCI6XCIvLyBBdXRob3I6IGdyZVxcbi8vIExpY2Vuc2U6IE1JVFxcblxcbmZsb2F0IGluSGVhcnQgKHZlYzIgcCwgdmVjMiBjZW50ZXIsIGZsb2F0IHNpemUpIHtcXG4gIGlmIChzaXplPT0wLjApIHJldHVybiAwLjA7XFxuICB2ZWMyIG8gPSAocC1jZW50ZXIpLygxLjYqc2l6ZSk7XFxuICBmbG9hdCBhID0gby54Km8ueCtvLnkqby55LTAuMztcXG4gIHJldHVybiBzdGVwKGEqYSphLCBvLngqby54Km8ueSpvLnkqby55KTtcXG59XFxudmVjNCB0cmFuc2l0aW9uICh2ZWMyIHV2KSB7XFxuICByZXR1cm4gbWl4KFxcbiAgICBnZXRGcm9tQ29sb3IodXYpLFxcbiAgICBnZXRUb0NvbG9yKHV2KSxcXG4gICAgaW5IZWFydCh1diwgdmVjMigwLjUsIDAuNCksIHByb2dyZXNzKVxcbiAgKTtcXG59XFxuXCIsXCJhdXRob3JcIjpcImdyZVwiLFwibGljZW5zZVwiOlwiTUlUXCIsXCJjcmVhdGVkQXRcIjpcIlR1ZSwgMzAgTWF5IDIwMTcgMTQ6MjY6NDQgKzAyMDBcIixcInVwZGF0ZWRBdFwiOlwiVHVlLCAzMCBNYXkgMjAxNyAxNDoyNjo0NCArMDIwMFwifSx7XCJuYW1lXCI6XCJoZXhhZ29uYWxpemVcIixcInBhcmFtc1R5cGVzXCI6e1wic3RlcHNcIjpcImludFwiLFwiaG9yaXpvbnRhbEhleGFnb25zXCI6XCJmbG9hdFwifSxcImRlZmF1bHRQYXJhbXNcIjp7XCJzdGVwc1wiOjUwLFwiaG9yaXpvbnRhbEhleGFnb25zXCI6MjB9LFwiZ2xzbFwiOlwiLy8gQXV0aG9yOiBGZXJuYW5kbyBLdXRla2VuXFxuLy8gTGljZW5zZTogTUlUXFxuLy8gSGV4YWdvbmFsIG1hdGggZnJvbTogaHR0cDovL3d3dy5yZWRibG9iZ2FtZXMuY29tL2dyaWRzL2hleGFnb25zL1xcblxcbnVuaWZvcm0gaW50IHN0ZXBzOyAvLyA9IDUwO1xcbnVuaWZvcm0gZmxvYXQgaG9yaXpvbnRhbEhleGFnb25zOyAvLz0gMjA7XFxuXFxuc3RydWN0IEhleGFnb24ge1xcbiAgZmxvYXQgcTtcXG4gIGZsb2F0IHI7XFxuICBmbG9hdCBzO1xcbn07XFxuXFxuSGV4YWdvbiBjcmVhdGVIZXhhZ29uKGZsb2F0IHEsIGZsb2F0IHIpe1xcbiAgSGV4YWdvbiBoZXg7XFxuICBoZXgucSA9IHE7XFxuICBoZXguciA9IHI7XFxuICBoZXgucyA9IC1xIC0gcjtcXG4gIHJldHVybiBoZXg7XFxufVxcblxcbkhleGFnb24gcm91bmRIZXhhZ29uKEhleGFnb24gaGV4KXtcXG4gIFxcbiAgZmxvYXQgcSA9IGZsb29yKGhleC5xICsgMC41KTtcXG4gIGZsb2F0IHIgPSBmbG9vcihoZXguciArIDAuNSk7XFxuICBmbG9hdCBzID0gZmxvb3IoaGV4LnMgKyAwLjUpO1xcblxcbiAgZmxvYXQgZGVsdGFRID0gYWJzKHEgLSBoZXgucSk7XFxuICBmbG9hdCBkZWx0YVIgPSBhYnMociAtIGhleC5yKTtcXG4gIGZsb2F0IGRlbHRhUyA9IGFicyhzIC0gaGV4LnMpO1xcblxcbiAgaWYgKGRlbHRhUSA+IGRlbHRhUiAmJiBkZWx0YVEgPiBkZWx0YVMpXFxuICAgIHEgPSAtciAtIHM7XFxuICBlbHNlIGlmIChkZWx0YVIgPiBkZWx0YVMpXFxuICAgIHIgPSAtcSAtIHM7XFxuICBlbHNlXFxuICAgIHMgPSAtcSAtIHI7XFxuXFxuICByZXR1cm4gY3JlYXRlSGV4YWdvbihxLCByKTtcXG59XFxuXFxuSGV4YWdvbiBoZXhhZ29uRnJvbVBvaW50KHZlYzIgcG9pbnQsIGZsb2F0IHNpemUpIHtcXG4gIFxcbiAgcG9pbnQueSAvPSByYXRpbztcXG4gIHBvaW50ID0gKHBvaW50IC0gMC41KSAvIHNpemU7XFxuICBcXG4gIGZsb2F0IHEgPSAoc3FydCgzLjApIC8gMy4wKSAqIHBvaW50LnggKyAoLTEuMCAvIDMuMCkgKiBwb2ludC55O1xcbiAgZmxvYXQgciA9IDAuMCAqIHBvaW50LnggKyAyLjAgLyAzLjAgKiBwb2ludC55O1xcblxcbiAgSGV4YWdvbiBoZXggPSBjcmVhdGVIZXhhZ29uKHEsIHIpO1xcbiAgcmV0dXJuIHJvdW5kSGV4YWdvbihoZXgpO1xcbiAgXFxufVxcblxcbnZlYzIgcG9pbnRGcm9tSGV4YWdvbihIZXhhZ29uIGhleCwgZmxvYXQgc2l6ZSkge1xcbiAgXFxuICBmbG9hdCB4ID0gKHNxcnQoMy4wKSAqIGhleC5xICsgKHNxcnQoMy4wKSAvIDIuMCkgKiBoZXgucikgKiBzaXplICsgMC41O1xcbiAgZmxvYXQgeSA9ICgwLjAgKiBoZXgucSArICgzLjAgLyAyLjApICogaGV4LnIpICogc2l6ZSArIDAuNTtcXG4gIFxcbiAgcmV0dXJuIHZlYzIoeCwgeSAqIHJhdGlvKTtcXG59XFxuXFxudmVjNCB0cmFuc2l0aW9uICh2ZWMyIHV2KSB7XFxuICBcXG4gIGZsb2F0IGRpc3QgPSAyLjAgKiBtaW4ocHJvZ3Jlc3MsIDEuMCAtIHByb2dyZXNzKTtcXG4gIGRpc3QgPSBzdGVwcyA+IDAgPyBjZWlsKGRpc3QgKiBmbG9hdChzdGVwcykpIC8gZmxvYXQoc3RlcHMpIDogZGlzdDtcXG4gIFxcbiAgZmxvYXQgc2l6ZSA9IChzcXJ0KDMuMCkgLyAzLjApICogZGlzdCAvIGhvcml6b250YWxIZXhhZ29ucztcXG4gIFxcbiAgdmVjMiBwb2ludCA9IGRpc3QgPiAwLjAgPyBwb2ludEZyb21IZXhhZ29uKGhleGFnb25Gcm9tUG9pbnQodXYsIHNpemUpLCBzaXplKSA6IHV2O1xcblxcbiAgcmV0dXJuIG1peChnZXRGcm9tQ29sb3IocG9pbnQpLCBnZXRUb0NvbG9yKHBvaW50KSwgcHJvZ3Jlc3MpO1xcbiAgXFxufVxcblwiLFwiYXV0aG9yXCI6XCJGZXJuYW5kbyBLdXRla2VuXCIsXCJsaWNlbnNlXCI6XCJNSVRcIixcImNyZWF0ZWRBdFwiOlwiVHVlLCAzMCBNYXkgMjAxNyAyMTo1NTo0NyAtMDMwMFwiLFwidXBkYXRlZEF0XCI6XCJUdWUsIDMwIE1heSAyMDE3IDIxOjU1OjQ3IC0wMzAwXCJ9LHtcIm5hbWVcIjpcImthbGVpZG9zY29wZVwiLFwicGFyYW1zVHlwZXNcIjp7XCJzcGVlZFwiOlwiZmxvYXRcIixcImFuZ2xlXCI6XCJmbG9hdFwiLFwicG93ZXJcIjpcImZsb2F0XCJ9LFwiZGVmYXVsdFBhcmFtc1wiOntcInNwZWVkXCI6MSxcImFuZ2xlXCI6MSxcInBvd2VyXCI6MS41fSxcImdsc2xcIjpcIi8vIEF1dGhvcjogbndvZWFuaGlubm9nYWVoclxcbi8vIExpY2Vuc2U6IE1JVFxcblxcbnVuaWZvcm0gZmxvYXQgc3BlZWQ7IC8vID0gMS4wO1xcbnVuaWZvcm0gZmxvYXQgYW5nbGU7IC8vID0gMS4wO1xcbnVuaWZvcm0gZmxvYXQgcG93ZXI7IC8vID0gMS41O1xcblxcbnZlYzQgdHJhbnNpdGlvbih2ZWMyIHV2KSB7XFxuICB2ZWMyIHAgPSB1di54eSAvIHZlYzIoMS4wKS54eTtcXG4gIHZlYzIgcSA9IHA7XFxuICBmbG9hdCB0ID0gcG93KHByb2dyZXNzLCBwb3dlcikqc3BlZWQ7XFxuICBwID0gcCAtMC41O1xcbiAgZm9yIChpbnQgaSA9IDA7IGkgPCA3OyBpKyspIHtcXG4gICAgcCA9IHZlYzIoc2luKHQpKnAueCArIGNvcyh0KSpwLnksIHNpbih0KSpwLnkgLSBjb3ModCkqcC54KTtcXG4gICAgdCArPSBhbmdsZTtcXG4gICAgcCA9IGFicyhtb2QocCwgMi4wKSAtIDEuMCk7XFxuICB9XFxuICBhYnMobW9kKHAsIDEuMCkpO1xcbiAgcmV0dXJuIG1peChcXG4gICAgbWl4KGdldEZyb21Db2xvcihxKSwgZ2V0VG9Db2xvcihxKSwgcHJvZ3Jlc3MpLFxcbiAgICBtaXgoZ2V0RnJvbUNvbG9yKHApLCBnZXRUb0NvbG9yKHApLCBwcm9ncmVzcyksIDEuMCAtIDIuMCphYnMocHJvZ3Jlc3MgLSAwLjUpKTtcXG59XFxuXCIsXCJhdXRob3JcIjpcIm53b2Vhbmhpbm5vZ2FlaHJcIixcImxpY2Vuc2VcIjpcIk1JVFwiLFwiY3JlYXRlZEF0XCI6XCJXZWQsIDMxIE1heSAyMDE3IDIxOjQ4OjI2IC0wNDAwXCIsXCJ1cGRhdGVkQXRcIjpcIldlZCwgMzEgTWF5IDIwMTcgMjE6NDg6MjYgLTA0MDBcIn0se1wibmFtZVwiOlwibHVtYVwiLFwicGFyYW1zVHlwZXNcIjp7XCJsdW1hXCI6XCJzYW1wbGVyMkRcIn0sXCJkZWZhdWx0UGFyYW1zXCI6e1wibHVtYVwiOm51bGx9LFwiZ2xzbFwiOlwiLy8gQXV0aG9yOiBncmVcXG4vLyBMaWNlbnNlOiBNSVRcXG5cXG51bmlmb3JtIHNhbXBsZXIyRCBsdW1hO1xcblxcbnZlYzQgdHJhbnNpdGlvbih2ZWMyIHV2KSB7XFxuICByZXR1cm4gbWl4KFxcbiAgICBnZXRUb0NvbG9yKHV2KSxcXG4gICAgZ2V0RnJvbUNvbG9yKHV2KSxcXG4gICAgc3RlcChwcm9ncmVzcywgdGV4dHVyZTJEKGx1bWEsIHV2KS5yKVxcbiAgKTtcXG59XFxuXCIsXCJhdXRob3JcIjpcImdyZVwiLFwibGljZW5zZVwiOlwiTUlUXCIsXCJjcmVhdGVkQXRcIjpcIlR1ZSwgMzAgTWF5IDIwMTcgMTQ6MjY6NDQgKzAyMDBcIixcInVwZGF0ZWRBdFwiOlwiVHVlLCAzMCBNYXkgMjAxNyAxNDoyNjo0NCArMDIwMFwifSx7XCJuYW1lXCI6XCJsdW1pbmFuY2VfbWVsdFwiLFwicGFyYW1zVHlwZXNcIjp7XCJkaXJlY3Rpb25cIjpcImJvb2xcIixcImxfdGhyZXNob2xkXCI6XCJmbG9hdFwiLFwiYWJvdmVcIjpcImJvb2xcIn0sXCJkZWZhdWx0UGFyYW1zXCI6e1wiZGlyZWN0aW9uXCI6dHJ1ZSxcImxfdGhyZXNob2xkXCI6MC44LFwiYWJvdmVcIjpmYWxzZX0sXCJnbHNsXCI6XCIvLyBBdXRob3I6IDBndXN0MVxcbi8vIExpY2Vuc2U6IE1JVFxcbi8vTXkgb3duIGZpcnN0IHRyYW5zaXRpb24g4oCUIGJhc2VkIG9uIGNyb3NzaGF0Y2ggY29kZSAoZnJvbSBwdGhyYXNoZXIpLCB1c2luZyAgc2ltcGxleCBub2lzZSBmb3JtdWxhIChjb3BpZWQgYW5kIHBhc3RlZClcXG4vLy0+IGNvb2xlciB3aXRoIGhpZ2ggY29udHJhc3RlZCBpbWFnZXMgKGlzb2xhdGVkIGRhcmsgc3ViamVjdCBvbiBsaWdodCBiYWNrZ3JvdW5kIGYuZS4pXFxuLy9UT0RPIDogdHJ5IHRvIHJlYmFzZSBpdCBvbiBEb29tVHJhbnNpdGlvbiAoZnJvbSB6ZWgpP1xcbi8vb3B0aW1pemF0aW9ucyA6XFxuLy9sdW1pbmFuY2UgKHNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzU5NjIxNi9mb3JtdWxhLXRvLWRldGVybWluZS1icmlnaHRuZXNzLW9mLXJnYi1jb2xvciNhbnN3ZXItNTk2MjQxKVxcbi8vIFkgPSAoUitSK0IrRytHK0cpLzZcXG4vL29yIFkgPSAoUitSK1IrQitHK0crRytHKT4+MyBcXG5cXG5cXG4vL2RpcmVjdGlvbiBvZiBtb3ZlbWVudCA6ICAwIDogdXAsIDEsIGRvd25cXG51bmlmb3JtIGJvb2wgZGlyZWN0aW9uOyAvLyA9IDEgXFxuLy9sdW1pbmFuY2UgdGhyZXNob2xkXFxudW5pZm9ybSBmbG9hdCBsX3RocmVzaG9sZDsgLy8gPSAwLjggXFxuLy9kb2VzIHRoZSBtb3ZlbWVudCB0YWtlcyBlZmZlY3QgYWJvdmUgb3IgYmVsb3cgbHVtaW5hbmNlIHRocmVzaG9sZCA/XFxudW5pZm9ybSBib29sIGFib3ZlOyAvLyA9IGZhbHNlIFxcblxcblxcbi8vUmFuZG9tIGZ1bmN0aW9uIGJvcnJvd2VkIGZyb20gZXZlcnl3aGVyZVxcbmZsb2F0IHJhbmQodmVjMiBjbyl7XFxuICByZXR1cm4gZnJhY3Qoc2luKGRvdChjby54eSAsdmVjMigxMi45ODk4LDc4LjIzMykpKSAqIDQzNzU4LjU0NTMpO1xcbn1cXG5cXG5cXG4vLyBTaW1wbGV4IG5vaXNlIDpcXG4vLyBEZXNjcmlwdGlvbiA6IEFycmF5IGFuZCB0ZXh0dXJlbGVzcyBHTFNMIDJEIHNpbXBsZXggbm9pc2UgZnVuY3Rpb24uXFxuLy8gICAgICBBdXRob3IgOiBJYW4gTWNFd2FuLCBBc2hpbWEgQXJ0cy5cXG4vLyAgTWFpbnRhaW5lciA6IGlqbVxcbi8vICAgICBMYXN0bW9kIDogMjAxMTA4MjIgKGlqbSlcXG4vLyAgICAgTGljZW5zZSA6IE1JVCAgXFxuLy8gICAgICAgICAgICAgICAyMDExIEFzaGltYSBBcnRzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbi8vICAgICAgICAgICAgICAgRGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTElDRU5TRSBmaWxlLlxcbi8vICAgICAgICAgICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2FzaGltYS93ZWJnbC1ub2lzZVxcbi8vIFxcblxcbnZlYzMgbW9kMjg5KHZlYzMgeCkge1xcbiAgcmV0dXJuIHggLSBmbG9vcih4ICogKDEuMCAvIDI4OS4wKSkgKiAyODkuMDtcXG59XFxuXFxudmVjMiBtb2QyODkodmVjMiB4KSB7XFxuICByZXR1cm4geCAtIGZsb29yKHggKiAoMS4wIC8gMjg5LjApKSAqIDI4OS4wO1xcbn1cXG5cXG52ZWMzIHBlcm11dGUodmVjMyB4KSB7XFxuICByZXR1cm4gbW9kMjg5KCgoeCozNC4wKSsxLjApKngpO1xcbn1cXG5cXG5mbG9hdCBzbm9pc2UodmVjMiB2KVxcbiAge1xcbiAgY29uc3QgdmVjNCBDID0gdmVjNCgwLjIxMTMyNDg2NTQwNTE4NywgIC8vICgzLjAtc3FydCgzLjApKS82LjBcXG4gICAgICAgICAgICAgICAgICAgICAgMC4zNjYwMjU0MDM3ODQ0MzksICAvLyAwLjUqKHNxcnQoMy4wKS0xLjApXFxuICAgICAgICAgICAgICAgICAgICAgLTAuNTc3MzUwMjY5MTg5NjI2LCAgLy8gLTEuMCArIDIuMCAqIEMueFxcbiAgICAgICAgICAgICAgICAgICAgICAwLjAyNDM5MDI0MzkwMjQzOSk7IC8vIDEuMCAvIDQxLjBcXG4vLyBGaXJzdCBjb3JuZXJcXG4gIHZlYzIgaSAgPSBmbG9vcih2ICsgZG90KHYsIEMueXkpICk7XFxuICB2ZWMyIHgwID0gdiAtICAgaSArIGRvdChpLCBDLnh4KTtcXG5cXG4vLyBPdGhlciBjb3JuZXJzXFxuICB2ZWMyIGkxO1xcbiAgLy9pMS54ID0gc3RlcCggeDAueSwgeDAueCApOyAvLyB4MC54ID4geDAueSA/IDEuMCA6IDAuMFxcbiAgLy9pMS55ID0gMS4wIC0gaTEueDtcXG4gIGkxID0gKHgwLnggPiB4MC55KSA/IHZlYzIoMS4wLCAwLjApIDogdmVjMigwLjAsIDEuMCk7XFxuICAvLyB4MCA9IHgwIC0gMC4wICsgMC4wICogQy54eCA7XFxuICAvLyB4MSA9IHgwIC0gaTEgKyAxLjAgKiBDLnh4IDtcXG4gIC8vIHgyID0geDAgLSAxLjAgKyAyLjAgKiBDLnh4IDtcXG4gIHZlYzQgeDEyID0geDAueHl4eSArIEMueHh6ejtcXG4gIHgxMi54eSAtPSBpMTtcXG5cXG4vLyBQZXJtdXRhdGlvbnNcXG4gIGkgPSBtb2QyODkoaSk7IC8vIEF2b2lkIHRydW5jYXRpb24gZWZmZWN0cyBpbiBwZXJtdXRhdGlvblxcbiAgdmVjMyBwID0gcGVybXV0ZSggcGVybXV0ZSggaS55ICsgdmVjMygwLjAsIGkxLnksIDEuMCApKVxcblxcdFxcdCsgaS54ICsgdmVjMygwLjAsIGkxLngsIDEuMCApKTtcXG5cXG4gIHZlYzMgbSA9IG1heCgwLjUgLSB2ZWMzKGRvdCh4MCx4MCksIGRvdCh4MTIueHkseDEyLnh5KSwgZG90KHgxMi56dyx4MTIuencpKSwgMC4wKTtcXG4gIG0gPSBtKm0gO1xcbiAgbSA9IG0qbSA7XFxuXFxuLy8gR3JhZGllbnRzOiA0MSBwb2ludHMgdW5pZm9ybWx5IG92ZXIgYSBsaW5lLCBtYXBwZWQgb250byBhIGRpYW1vbmQuXFxuLy8gVGhlIHJpbmcgc2l6ZSAxNyoxNyA9IDI4OSBpcyBjbG9zZSB0byBhIG11bHRpcGxlIG9mIDQxICg0MSo3ID0gMjg3KVxcblxcbiAgdmVjMyB4ID0gMi4wICogZnJhY3QocCAqIEMud3d3KSAtIDEuMDtcXG4gIHZlYzMgaCA9IGFicyh4KSAtIDAuNTtcXG4gIHZlYzMgb3ggPSBmbG9vcih4ICsgMC41KTtcXG4gIHZlYzMgYTAgPSB4IC0gb3g7XFxuXFxuLy8gTm9ybWFsaXNlIGdyYWRpZW50cyBpbXBsaWNpdGx5IGJ5IHNjYWxpbmcgbVxcbi8vIEFwcHJveGltYXRpb24gb2Y6IG0gKj0gaW52ZXJzZXNxcnQoIGEwKmEwICsgaCpoICk7XFxuICBtICo9IDEuNzkyODQyOTE0MDAxNTkgLSAwLjg1MzczNDcyMDk1MzE0ICogKCBhMCphMCArIGgqaCApO1xcblxcbi8vIENvbXB1dGUgZmluYWwgbm9pc2UgdmFsdWUgYXQgUFxcbiAgdmVjMyBnO1xcbiAgZy54ICA9IGEwLnggICogeDAueCAgKyBoLnggICogeDAueTtcXG4gIGcueXogPSBhMC55eiAqIHgxMi54eiArIGgueXogKiB4MTIueXc7XFxuICByZXR1cm4gMTMwLjAgKiBkb3QobSwgZyk7XFxufVxcblxcbi8vIFNpbXBsZXggbm9pc2UgLS0gZW5kXFxuXFxuZmxvYXQgbHVtaW5hbmNlKHZlYzQgY29sb3Ipe1xcbiAgLy8oMC4yOTkqUiArIDAuNTg3KkcgKyAwLjExNCpCKVxcbiAgcmV0dXJuIGNvbG9yLnIqMC4yOTkrY29sb3IuZyowLjU4Nytjb2xvci5iKjAuMTE0O1xcbn1cXG5cXG52ZWMyIGNlbnRlciA9IHZlYzIoMS4wLCBkaXJlY3Rpb24pO1xcblxcbnZlYzQgdHJhbnNpdGlvbih2ZWMyIHV2KSB7XFxuICB2ZWMyIHAgPSB1di54eSAvIHZlYzIoMS4wKS54eTtcXG4gIGlmIChwcm9ncmVzcyA9PSAwLjApIHtcXG4gICAgcmV0dXJuIGdldEZyb21Db2xvcihwKTtcXG4gIH0gZWxzZSBpZiAocHJvZ3Jlc3MgPT0gMS4wKSB7XFxuICAgIHJldHVybiBnZXRUb0NvbG9yKHApO1xcbiAgfSBlbHNlIHtcXG4gICAgZmxvYXQgeCA9IHByb2dyZXNzO1xcbiAgICBmbG9hdCBkaXN0ID0gZGlzdGFuY2UoY2VudGVyLCBwKS0gcHJvZ3Jlc3MqZXhwKHNub2lzZSh2ZWMyKHAueCwgMC4wKSkpO1xcbiAgICBmbG9hdCByID0geCAtIHJhbmQodmVjMihwLngsIDAuMSkpO1xcbiAgICBmbG9hdCBtO1xcbiAgICBpZihhYm92ZSl7XFxuICAgICBtID0gZGlzdCA8PSByICYmIGx1bWluYW5jZShnZXRGcm9tQ29sb3IocCkpPmxfdGhyZXNob2xkID8gMS4wIDogKHByb2dyZXNzKnByb2dyZXNzKnByb2dyZXNzKTtcXG4gICAgfVxcbiAgICBlbHNle1xcbiAgICAgbSA9IGRpc3QgPD0gciAmJiBsdW1pbmFuY2UoZ2V0RnJvbUNvbG9yKHApKTxsX3RocmVzaG9sZCA/IDEuMCA6IChwcm9ncmVzcypwcm9ncmVzcypwcm9ncmVzcyk7ICBcXG4gICAgfVxcbiAgICByZXR1cm4gbWl4KGdldEZyb21Db2xvcihwKSwgZ2V0VG9Db2xvcihwKSwgbSk7ICAgIFxcbiAgfVxcbn1cXG5cIixcImF1dGhvclwiOlwiMGd1c3QxXCIsXCJsaWNlbnNlXCI6XCJNSVRcIixcImNyZWF0ZWRBdFwiOlwiV2VkLCAyNCBKYW4gMjAxOCAxOTowMjozMiArMDEwMFwiLFwidXBkYXRlZEF0XCI6XCJXZWQsIDI0IEphbiAyMDE4IDE5OjAyOjMyICswMTAwXCJ9LHtcIm5hbWVcIjpcIm1vcnBoXCIsXCJwYXJhbXNUeXBlc1wiOntcInN0cmVuZ3RoXCI6XCJmbG9hdFwifSxcImRlZmF1bHRQYXJhbXNcIjp7XCJzdHJlbmd0aFwiOjAuMX0sXCJnbHNsXCI6XCIvLyBBdXRob3I6IHBhbmlxXFxuLy8gTGljZW5zZTogTUlUXFxudW5pZm9ybSBmbG9hdCBzdHJlbmd0aDsgLy8gPSAwLjFcXG5cXG52ZWM0IHRyYW5zaXRpb24odmVjMiBwKSB7XFxuICB2ZWM0IGNhID0gZ2V0RnJvbUNvbG9yKHApO1xcbiAgdmVjNCBjYiA9IGdldFRvQ29sb3IocCk7XFxuICBcXG4gIHZlYzIgb2EgPSAoKChjYS5yZytjYS5iKSowLjUpKjIuMC0xLjApO1xcbiAgdmVjMiBvYiA9ICgoKGNiLnJnK2NiLmIpKjAuNSkqMi4wLTEuMCk7XFxuICB2ZWMyIG9jID0gbWl4KG9hLG9iLDAuNSkqc3RyZW5ndGg7XFxuICBcXG4gIGZsb2F0IHcwID0gcHJvZ3Jlc3M7XFxuICBmbG9hdCB3MSA9IDEuMC13MDtcXG4gIHJldHVybiBtaXgoZ2V0RnJvbUNvbG9yKHArb2MqdzApLCBnZXRUb0NvbG9yKHAtb2MqdzEpLCBwcm9ncmVzcyk7XFxufVxcblwiLFwiYXV0aG9yXCI6XCJwYW5pcVwiLFwibGljZW5zZVwiOlwiTUlUXCIsXCJjcmVhdGVkQXRcIjpcIlRodSwgMTAgQXVnIDIwMTcgMDA6Mjc6MzYgKzAyMDBcIixcInVwZGF0ZWRBdFwiOlwiVGh1LCAxMCBBdWcgMjAxNyAwMDozMjowMSArMDIwMFwifSx7XCJuYW1lXCI6XCJtdWx0aXBseV9ibGVuZFwiLFwicGFyYW1zVHlwZXNcIjp7fSxcImRlZmF1bHRQYXJhbXNcIjp7fSxcImdsc2xcIjpcIi8vIEF1dGhvcjogRmVybmFuZG8gS3V0ZWtlblxcbi8vIExpY2Vuc2U6IE1JVFxcblxcbnZlYzQgYmxlbmQodmVjNCBhLCB2ZWM0IGIpIHtcXG4gIHJldHVybiBhICogYjtcXG59XFxuXFxudmVjNCB0cmFuc2l0aW9uICh2ZWMyIHV2KSB7XFxuICBcXG4gIHZlYzQgYmxlbmRlZCA9IGJsZW5kKGdldEZyb21Db2xvcih1diksIGdldFRvQ29sb3IodXYpKTtcXG4gIFxcbiAgaWYgKHByb2dyZXNzIDwgMC41KVxcbiAgICByZXR1cm4gbWl4KGdldEZyb21Db2xvcih1diksIGJsZW5kZWQsIDIuMCAqIHByb2dyZXNzKTtcXG4gIGVsc2VcXG4gICAgcmV0dXJuIG1peChibGVuZGVkLCBnZXRUb0NvbG9yKHV2KSwgMi4wICogcHJvZ3Jlc3MgLSAxLjApO1xcbn1cXG5cXG5cIixcImF1dGhvclwiOlwiRmVybmFuZG8gS3V0ZWtlblwiLFwibGljZW5zZVwiOlwiTUlUXCIsXCJjcmVhdGVkQXRcIjpcIlR1ZSwgMzAgTWF5IDIwMTcgMTQ6MjY6NDQgKzAyMDBcIixcInVwZGF0ZWRBdFwiOlwiVHVlLCAzMCBNYXkgMjAxNyAxNDoyNjo0NCArMDIwMFwifSx7XCJuYW1lXCI6XCJwZXJsaW5cIixcInBhcmFtc1R5cGVzXCI6e1wic2NhbGVcIjpcImZsb2F0XCIsXCJzbW9vdGhuZXNzXCI6XCJmbG9hdFwiLFwic2VlZFwiOlwiZmxvYXRcIn0sXCJkZWZhdWx0UGFyYW1zXCI6e1wic2NhbGVcIjo0LFwic21vb3RobmVzc1wiOjAuMDEsXCJzZWVkXCI6MTIuOTg5OH0sXCJnbHNsXCI6XCIvLyBBdXRob3I6IFJpY2ggSGFycmlzXFxuLy8gTGljZW5zZTogTUlUXFxuXFxuI2lmZGVmIEdMX0VTXFxucHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XFxuI2VuZGlmXFxuXFxudW5pZm9ybSBmbG9hdCBzY2FsZTsgLy8gPSA0LjBcXG51bmlmb3JtIGZsb2F0IHNtb290aG5lc3M7IC8vID0gMC4wMVxcblxcbnVuaWZvcm0gZmxvYXQgc2VlZDsgLy8gPSAxMi45ODk4XFxuXFxuLy8gaHR0cDovL2J5dGVibGFja3NtaXRoLmNvbS9pbXByb3ZlbWVudHMtdG8tdGhlLWNhbm9uaWNhbC1vbmUtbGluZXItZ2xzbC1yYW5kLWZvci1vcGVuZ2wtZXMtMi0wL1xcbmZsb2F0IHJhbmRvbSh2ZWMyIGNvKVxcbntcXG4gICAgaGlnaHAgZmxvYXQgYSA9IHNlZWQ7XFxuICAgIGhpZ2hwIGZsb2F0IGIgPSA3OC4yMzM7XFxuICAgIGhpZ2hwIGZsb2F0IGMgPSA0Mzc1OC41NDUzO1xcbiAgICBoaWdocCBmbG9hdCBkdD0gZG90KGNvLnh5ICx2ZWMyKGEsYikpO1xcbiAgICBoaWdocCBmbG9hdCBzbj0gbW9kKGR0LDMuMTQpO1xcbiAgICByZXR1cm4gZnJhY3Qoc2luKHNuKSAqIGMpO1xcbn1cXG5cXG4vLyAyRCBOb2lzZSBiYXNlZCBvbiBNb3JnYW4gTWNHdWlyZSBAbW9yZ2FuM2RcXG4vLyBodHRwczovL3d3dy5zaGFkZXJ0b3kuY29tL3ZpZXcvNGRTM1dkXFxuZmxvYXQgbm9pc2UgKGluIHZlYzIgc3QpIHtcXG4gICAgdmVjMiBpID0gZmxvb3Ioc3QpO1xcbiAgICB2ZWMyIGYgPSBmcmFjdChzdCk7XFxuXFxuICAgIC8vIEZvdXIgY29ybmVycyBpbiAyRCBvZiBhIHRpbGVcXG4gICAgZmxvYXQgYSA9IHJhbmRvbShpKTtcXG4gICAgZmxvYXQgYiA9IHJhbmRvbShpICsgdmVjMigxLjAsIDAuMCkpO1xcbiAgICBmbG9hdCBjID0gcmFuZG9tKGkgKyB2ZWMyKDAuMCwgMS4wKSk7XFxuICAgIGZsb2F0IGQgPSByYW5kb20oaSArIHZlYzIoMS4wLCAxLjApKTtcXG5cXG4gICAgLy8gU21vb3RoIEludGVycG9sYXRpb25cXG5cXG4gICAgLy8gQ3ViaWMgSGVybWluZSBDdXJ2ZS4gIFNhbWUgYXMgU21vb3RoU3RlcCgpXFxuICAgIHZlYzIgdSA9IGYqZiooMy4wLTIuMCpmKTtcXG4gICAgLy8gdSA9IHNtb290aHN0ZXAoMC4sMS4sZik7XFxuXFxuICAgIC8vIE1peCA0IGNvb3JuZXJzIHBvcmNlbnRhZ2VzXFxuICAgIHJldHVybiBtaXgoYSwgYiwgdS54KSArXFxuICAgICAgICAgICAgKGMgLSBhKSogdS55ICogKDEuMCAtIHUueCkgK1xcbiAgICAgICAgICAgIChkIC0gYikgKiB1LnggKiB1Lnk7XFxufVxcblxcbnZlYzQgdHJhbnNpdGlvbiAodmVjMiB1dikge1xcbiAgdmVjNCBmcm9tID0gZ2V0RnJvbUNvbG9yKHV2KTtcXG4gIHZlYzQgdG8gPSBnZXRUb0NvbG9yKHV2KTtcXG4gIGZsb2F0IG4gPSBub2lzZSh1diAqIHNjYWxlKTtcXG4gIFxcbiAgZmxvYXQgcCA9IG1peCgtc21vb3RobmVzcywgMS4wICsgc21vb3RobmVzcywgcHJvZ3Jlc3MpO1xcbiAgZmxvYXQgbG93ZXIgPSBwIC0gc21vb3RobmVzcztcXG4gIGZsb2F0IGhpZ2hlciA9IHAgKyBzbW9vdGhuZXNzO1xcbiAgXFxuICBmbG9hdCBxID0gc21vb3Roc3RlcChsb3dlciwgaGlnaGVyLCBuKTtcXG4gIFxcbiAgcmV0dXJuIG1peChcXG4gICAgZnJvbSxcXG4gICAgdG8sXFxuICAgIDEuMCAtIHFcXG4gICk7XFxufVxcblwiLFwiYXV0aG9yXCI6XCJSaWNoIEhhcnJpc1wiLFwibGljZW5zZVwiOlwiTUlUXCIsXCJjcmVhdGVkQXRcIjpcIlR1ZSwgMjMgSmFuIDIwMTggMjE6MzU6MTAgLTA1MDBcIixcInVwZGF0ZWRBdFwiOlwiV2VkLCAyNCBKYW4gMjAxOCAwNzozNTowNCAtMDUwMFwifSx7XCJuYW1lXCI6XCJwaW53aGVlbFwiLFwicGFyYW1zVHlwZXNcIjp7XCJzcGVlZFwiOlwiZmxvYXRcIn0sXCJkZWZhdWx0UGFyYW1zXCI6e1wic3BlZWRcIjoyfSxcImdsc2xcIjpcIi8vIEF1dGhvcjogTXIgU3BlYWtlclxcbi8vIExpY2Vuc2U6IE1JVFxcblxcbnVuaWZvcm0gZmxvYXQgc3BlZWQ7IC8vID0gMi4wO1xcblxcbnZlYzQgdHJhbnNpdGlvbih2ZWMyIHV2KSB7XFxuICBcXG4gIHZlYzIgcCA9IHV2Lnh5IC8gdmVjMigxLjApLnh5O1xcbiAgXFxuICBmbG9hdCBjaXJjUG9zID0gYXRhbihwLnkgLSAwLjUsIHAueCAtIDAuNSkgKyBwcm9ncmVzcyAqIHNwZWVkO1xcbiAgZmxvYXQgbW9kUG9zID0gbW9kKGNpcmNQb3MsIDMuMTQxNSAvIDQuKTtcXG4gIGZsb2F0IHNpZ25lZCA9IHNpZ24ocHJvZ3Jlc3MgLSBtb2RQb3MpO1xcbiAgXFxuICByZXR1cm4gbWl4KGdldFRvQ29sb3IocCksIGdldEZyb21Db2xvcihwKSwgc3RlcChzaWduZWQsIDAuNSkpO1xcbiAgXFxufVxcblwiLFwiYXV0aG9yXCI6XCJNciBTcGVha2VyXCIsXCJsaWNlbnNlXCI6XCJNSVRcIixcImNyZWF0ZWRBdFwiOlwiVHVlLCAzMCBNYXkgMjAxNyAwOTowNDozMSAtMDQwMFwiLFwidXBkYXRlZEF0XCI6XCJUdWUsIDMwIE1heSAyMDE3IDA5OjA0OjMxIC0wNDAwXCJ9LHtcIm5hbWVcIjpcInBpeGVsaXplXCIsXCJwYXJhbXNUeXBlc1wiOntcInNxdWFyZXNNaW5cIjpcIml2ZWMyXCIsXCJzdGVwc1wiOlwiaW50XCJ9LFwiZGVmYXVsdFBhcmFtc1wiOntcInNxdWFyZXNNaW5cIjpbMjAsMjBdLFwic3RlcHNcIjo1MH0sXCJnbHNsXCI6XCIvLyBBdXRob3I6IGdyZVxcbi8vIExpY2Vuc2U6IE1JVFxcbi8vIGZvcmtlZCBmcm9tIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2JlbnJhemllbC9jNTI4NjA3MzYxZDkwYTA3MmU5OFxcblxcbnVuaWZvcm0gaXZlYzIgc3F1YXJlc01pbi8qID0gaXZlYzIoMjApICovOyAvLyBtaW5pbXVtIG51bWJlciBvZiBzcXVhcmVzICh3aGVuIHRoZSBlZmZlY3QgaXMgYXQgaXRzIGhpZ2hlciBsZXZlbClcXG51bmlmb3JtIGludCBzdGVwcyAvKiA9IDUwICovOyAvLyB6ZXJvIGRpc2FibGUgdGhlIHN0ZXBwaW5nXFxuXFxuZmxvYXQgZCA9IG1pbihwcm9ncmVzcywgMS4wIC0gcHJvZ3Jlc3MpO1xcbmZsb2F0IGRpc3QgPSBzdGVwcz4wID8gY2VpbChkICogZmxvYXQoc3RlcHMpKSAvIGZsb2F0KHN0ZXBzKSA6IGQ7XFxudmVjMiBzcXVhcmVTaXplID0gMi4wICogZGlzdCAvIHZlYzIoc3F1YXJlc01pbik7XFxuXFxudmVjNCB0cmFuc2l0aW9uKHZlYzIgdXYpIHtcXG4gIHZlYzIgcCA9IGRpc3Q+MC4wID8gKGZsb29yKHV2IC8gc3F1YXJlU2l6ZSkgKyAwLjUpICogc3F1YXJlU2l6ZSA6IHV2O1xcbiAgcmV0dXJuIG1peChnZXRGcm9tQ29sb3IocCksIGdldFRvQ29sb3IocCksIHByb2dyZXNzKTtcXG59XFxuXCIsXCJhdXRob3JcIjpcImdyZVwiLFwibGljZW5zZVwiOlwiTUlUXCIsXCJjcmVhdGVkQXRcIjpcIlR1ZSwgMzAgTWF5IDIwMTcgMTQ6MjY6NDQgKzAyMDBcIixcInVwZGF0ZWRBdFwiOlwiV2VkLCAzMSBNYXkgMjAxNyAxMDo1ODoyNiArMDIwMFwifSx7XCJuYW1lXCI6XCJwb2xhcl9mdW5jdGlvblwiLFwicGFyYW1zVHlwZXNcIjp7XCJzZWdtZW50c1wiOlwiaW50XCJ9LFwiZGVmYXVsdFBhcmFtc1wiOntcInNlZ21lbnRzXCI6NX0sXCJnbHNsXCI6XCIvLyBBdXRob3I6IEZlcm5hbmRvIEt1dGVrZW5cXG4vLyBMaWNlbnNlOiBNSVRcXG5cXG4jZGVmaW5lIFBJIDMuMTQxNTkyNjUzNTlcXG5cXG51bmlmb3JtIGludCBzZWdtZW50czsgLy8gPSA1O1xcblxcbnZlYzQgdHJhbnNpdGlvbiAodmVjMiB1dikge1xcbiAgXFxuICBmbG9hdCBhbmdsZSA9IGF0YW4odXYueSAtIDAuNSwgdXYueCAtIDAuNSkgLSAwLjUgKiBQSTtcXG4gIGZsb2F0IG5vcm1hbGl6ZWQgPSAoYW5nbGUgKyAxLjUgKiBQSSkgKiAoMi4wICogUEkpO1xcbiAgXFxuICBmbG9hdCByYWRpdXMgPSAoY29zKGZsb2F0KHNlZ21lbnRzKSAqIGFuZ2xlKSArIDQuMCkgLyA0LjA7XFxuICBmbG9hdCBkaWZmZXJlbmNlID0gbGVuZ3RoKHV2IC0gdmVjMigwLjUsIDAuNSkpO1xcbiAgXFxuICBpZiAoZGlmZmVyZW5jZSA+IHJhZGl1cyAqIHByb2dyZXNzKVxcbiAgICByZXR1cm4gZ2V0RnJvbUNvbG9yKHV2KTtcXG4gIGVsc2VcXG4gICAgcmV0dXJuIGdldFRvQ29sb3IodXYpO1xcbn1cXG5cIixcImF1dGhvclwiOlwiRmVybmFuZG8gS3V0ZWtlblwiLFwibGljZW5zZVwiOlwiTUlUXCIsXCJjcmVhdGVkQXRcIjpcIlR1ZSwgMzAgTWF5IDIwMTcgMTQ6MjY6NDQgKzAyMDBcIixcInVwZGF0ZWRBdFwiOlwiVHVlLCAzMCBNYXkgMjAxNyAxNDoyNjo0NCArMDIwMFwifSx7XCJuYW1lXCI6XCJyYW5kb21zcXVhcmVzXCIsXCJwYXJhbXNUeXBlc1wiOntcInNpemVcIjpcIml2ZWMyXCIsXCJzbW9vdGhuZXNzXCI6XCJmbG9hdFwifSxcImRlZmF1bHRQYXJhbXNcIjp7XCJzaXplXCI6WzEwLDEwXSxcInNtb290aG5lc3NcIjowLjV9LFwiZ2xzbFwiOlwiLy8gQXV0aG9yOiBncmVcXG4vLyBMaWNlbnNlOiBNSVRcXG5cXG51bmlmb3JtIGl2ZWMyIHNpemU7IC8vID0gaXZlYzIoMTAsIDEwKVxcbnVuaWZvcm0gZmxvYXQgc21vb3RobmVzczsgLy8gPSAwLjVcXG4gXFxuZmxvYXQgcmFuZCAodmVjMiBjbykge1xcbiAgcmV0dXJuIGZyYWN0KHNpbihkb3QoY28ueHkgLHZlYzIoMTIuOTg5OCw3OC4yMzMpKSkgKiA0Mzc1OC41NDUzKTtcXG59XFxuXFxudmVjNCB0cmFuc2l0aW9uKHZlYzIgcCkge1xcbiAgZmxvYXQgciA9IHJhbmQoZmxvb3IodmVjMihzaXplKSAqIHApKTtcXG4gIGZsb2F0IG0gPSBzbW9vdGhzdGVwKDAuMCwgLXNtb290aG5lc3MsIHIgLSAocHJvZ3Jlc3MgKiAoMS4wICsgc21vb3RobmVzcykpKTtcXG4gIHJldHVybiBtaXgoZ2V0RnJvbUNvbG9yKHApLCBnZXRUb0NvbG9yKHApLCBtKTtcXG59XFxuXCIsXCJhdXRob3JcIjpcImdyZVwiLFwibGljZW5zZVwiOlwiTUlUXCIsXCJjcmVhdGVkQXRcIjpcIlR1ZSwgMzAgTWF5IDIwMTcgMTQ6MjY6NDQgKzAyMDBcIixcInVwZGF0ZWRBdFwiOlwiVHVlLCAzMCBNYXkgMjAxNyAxNDoyNjo0NCArMDIwMFwifSx7XCJuYW1lXCI6XCJyaXBwbGVcIixcInBhcmFtc1R5cGVzXCI6e1wiYW1wbGl0dWRlXCI6XCJmbG9hdFwiLFwic3BlZWRcIjpcImZsb2F0XCJ9LFwiZGVmYXVsdFBhcmFtc1wiOntcImFtcGxpdHVkZVwiOjEwMCxcInNwZWVkXCI6NTB9LFwiZ2xzbFwiOlwiLy8gQXV0aG9yOiBncmVcXG4vLyBMaWNlbnNlOiBNSVRcXG51bmlmb3JtIGZsb2F0IGFtcGxpdHVkZTsgLy8gPSAxMDAuMFxcbnVuaWZvcm0gZmxvYXQgc3BlZWQ7IC8vID0gNTAuMFxcblxcbnZlYzQgdHJhbnNpdGlvbiAodmVjMiB1dikge1xcbiAgdmVjMiBkaXIgPSB1diAtIHZlYzIoLjUpO1xcbiAgZmxvYXQgZGlzdCA9IGxlbmd0aChkaXIpO1xcbiAgdmVjMiBvZmZzZXQgPSBkaXIgKiAoc2luKHByb2dyZXNzICogZGlzdCAqIGFtcGxpdHVkZSAtIHByb2dyZXNzICogc3BlZWQpICsgLjUpIC8gMzAuO1xcbiAgcmV0dXJuIG1peChcXG4gICAgZ2V0RnJvbUNvbG9yKHV2ICsgb2Zmc2V0KSxcXG4gICAgZ2V0VG9Db2xvcih1diksXFxuICAgIHNtb290aHN0ZXAoMC4yLCAxLjAsIHByb2dyZXNzKVxcbiAgKTtcXG59XFxuXCIsXCJhdXRob3JcIjpcImdyZVwiLFwibGljZW5zZVwiOlwiTUlUXCIsXCJjcmVhdGVkQXRcIjpcIlR1ZSwgMzAgTWF5IDIwMTcgMTU6MTU6MjcgKzAyMDBcIixcInVwZGF0ZWRBdFwiOlwiVHVlLCAzMCBNYXkgMjAxNyAxNToxNToyNyArMDIwMFwifSx7XCJuYW1lXCI6XCJyb3RhdGVfc2NhbGVfZmFkZVwiLFwicGFyYW1zVHlwZXNcIjp7XCJjZW50ZXJcIjpcInZlYzJcIixcInJvdGF0aW9uc1wiOlwiZmxvYXRcIixcInNjYWxlXCI6XCJmbG9hdFwiLFwiYmFja0NvbG9yXCI6XCJ2ZWM0XCJ9LFwiZGVmYXVsdFBhcmFtc1wiOntcImNlbnRlclwiOlswLjUsMC41XSxcInJvdGF0aW9uc1wiOjEsXCJzY2FsZVwiOjgsXCJiYWNrQ29sb3JcIjpbMC4xNSwwLjE1LDAuMTUsMV19LFwiZ2xzbFwiOlwiLy8gQXV0aG9yOiBGZXJuYW5kbyBLdXRla2VuXFxuLy8gTGljZW5zZTogTUlUXFxuXFxuI2RlZmluZSBQSSAzLjE0MTU5MjY1MzU5XFxuXFxudW5pZm9ybSB2ZWMyIGNlbnRlcjsgLy8gPSB2ZWMyKDAuNSwgMC41KTtcXG51bmlmb3JtIGZsb2F0IHJvdGF0aW9uczsgLy8gPSAxO1xcbnVuaWZvcm0gZmxvYXQgc2NhbGU7IC8vID0gODtcXG51bmlmb3JtIHZlYzQgYmFja0NvbG9yOyAvLyA9IHZlYzQoMC4xNSwgMC4xNSwgMC4xNSwgMS4wKTtcXG5cXG52ZWM0IHRyYW5zaXRpb24gKHZlYzIgdXYpIHtcXG4gIFxcbiAgdmVjMiBkaWZmZXJlbmNlID0gdXYgLSBjZW50ZXI7XFxuICB2ZWMyIGRpciA9IG5vcm1hbGl6ZShkaWZmZXJlbmNlKTtcXG4gIGZsb2F0IGRpc3QgPSBsZW5ndGgoZGlmZmVyZW5jZSk7XFxuICBcXG4gIGZsb2F0IGFuZ2xlID0gMi4wICogUEkgKiByb3RhdGlvbnMgKiBwcm9ncmVzcztcXG4gIFxcbiAgZmxvYXQgYyA9IGNvcyhhbmdsZSk7XFxuICBmbG9hdCBzID0gc2luKGFuZ2xlKTtcXG4gIFxcbiAgZmxvYXQgY3VycmVudFNjYWxlID0gbWl4KHNjYWxlLCAxLjAsIDIuMCAqIGFicyhwcm9ncmVzcyAtIDAuNSkpO1xcbiAgXFxuICB2ZWMyIHJvdGF0ZWREaXIgPSB2ZWMyKGRpci54ICAqIGMgLSBkaXIueSAqIHMsIGRpci54ICogcyArIGRpci55ICogYyk7XFxuICB2ZWMyIHJvdGF0ZWRVdiA9IGNlbnRlciArIHJvdGF0ZWREaXIgKiBkaXN0IC8gY3VycmVudFNjYWxlO1xcbiAgXFxuICBpZiAocm90YXRlZFV2LnggPCAwLjAgfHwgcm90YXRlZFV2LnggPiAxLjAgfHxcXG4gICAgICByb3RhdGVkVXYueSA8IDAuMCB8fCByb3RhdGVkVXYueSA+IDEuMClcXG4gICAgcmV0dXJuIGJhY2tDb2xvcjtcXG4gICAgXFxuICByZXR1cm4gbWl4KGdldEZyb21Db2xvcihyb3RhdGVkVXYpLCBnZXRUb0NvbG9yKHJvdGF0ZWRVdiksIHByb2dyZXNzKTtcXG59XFxuXCIsXCJhdXRob3JcIjpcIkZlcm5hbmRvIEt1dGVrZW5cIixcImxpY2Vuc2VcIjpcIk1JVFwiLFwiY3JlYXRlZEF0XCI6XCJUdWUsIDMwIE1heSAyMDE3IDE0OjI2OjQ0ICswMjAwXCIsXCJ1cGRhdGVkQXRcIjpcIlR1ZSwgMzAgTWF5IDIwMTcgMTQ6MjY6NDQgKzAyMDBcIn0se1wibmFtZVwiOlwic3F1YXJlc3dpcmVcIixcInBhcmFtc1R5cGVzXCI6e1wic3F1YXJlc1wiOlwiaXZlYzJcIixcImRpcmVjdGlvblwiOlwidmVjMlwiLFwic21vb3RobmVzc1wiOlwiZmxvYXRcIn0sXCJkZWZhdWx0UGFyYW1zXCI6e1wic3F1YXJlc1wiOlsxMCwxMF0sXCJkaXJlY3Rpb25cIjpbMSwtMC41XSxcInNtb290aG5lc3NcIjoxLjZ9LFwiZ2xzbFwiOlwiLy8gQXV0aG9yOiBncmVcXG4vLyBMaWNlbnNlOiBNSVRcXG4gXFxudW5pZm9ybSBpdmVjMiBzcXVhcmVzOy8vID0gaXZlYzIoMTAsMTApXFxudW5pZm9ybSB2ZWMyIGRpcmVjdGlvbjsvLyA9IHZlYzIoMS4wLCAtMC41KVxcbnVuaWZvcm0gZmxvYXQgc21vb3RobmVzczsgLy8gPSAxLjZcXG5cXG5jb25zdCB2ZWMyIGNlbnRlciA9IHZlYzIoMC41LCAwLjUpO1xcbnZlYzQgdHJhbnNpdGlvbiAodmVjMiBwKSB7XFxuICB2ZWMyIHYgPSBub3JtYWxpemUoZGlyZWN0aW9uKTtcXG4gIHYgLz0gYWJzKHYueCkrYWJzKHYueSk7XFxuICBmbG9hdCBkID0gdi54ICogY2VudGVyLnggKyB2LnkgKiBjZW50ZXIueTtcXG4gIGZsb2F0IG9mZnNldCA9IHNtb290aG5lc3M7XFxuICBmbG9hdCBwciA9IHNtb290aHN0ZXAoLW9mZnNldCwgMC4wLCB2LnggKiBwLnggKyB2LnkgKiBwLnkgLSAoZC0wLjUrcHJvZ3Jlc3MqKDEuK29mZnNldCkpKTtcXG4gIHZlYzIgc3F1YXJlcCA9IGZyYWN0KHAqdmVjMihzcXVhcmVzKSk7XFxuICB2ZWMyIHNxdWFyZW1pbiA9IHZlYzIocHIvMi4wKTtcXG4gIHZlYzIgc3F1YXJlbWF4ID0gdmVjMigxLjAgLSBwci8yLjApO1xcbiAgZmxvYXQgYSA9ICgxLjAgLSBzdGVwKHByb2dyZXNzLCAwLjApKSAqIHN0ZXAoc3F1YXJlbWluLngsIHNxdWFyZXAueCkgKiBzdGVwKHNxdWFyZW1pbi55LCBzcXVhcmVwLnkpICogc3RlcChzcXVhcmVwLngsIHNxdWFyZW1heC54KSAqIHN0ZXAoc3F1YXJlcC55LCBzcXVhcmVtYXgueSk7XFxuICByZXR1cm4gbWl4KGdldEZyb21Db2xvcihwKSwgZ2V0VG9Db2xvcihwKSwgYSk7XFxufVxcblwiLFwiYXV0aG9yXCI6XCJncmVcIixcImxpY2Vuc2VcIjpcIk1JVFwiLFwiY3JlYXRlZEF0XCI6XCJUdWUsIDMwIE1heSAyMDE3IDE0OjI2OjQ0ICswMjAwXCIsXCJ1cGRhdGVkQXRcIjpcIlR1ZSwgMzAgTWF5IDIwMTcgMTQ6MjY6NDQgKzAyMDBcIn0se1wibmFtZVwiOlwic3F1ZWV6ZVwiLFwicGFyYW1zVHlwZXNcIjp7XCJjb2xvclNlcGFyYXRpb25cIjpcImZsb2F0XCJ9LFwiZGVmYXVsdFBhcmFtc1wiOntcImNvbG9yU2VwYXJhdGlvblwiOjAuMDR9LFwiZ2xzbFwiOlwiLy8gQXV0aG9yOiBncmVcXG4vLyBMaWNlbnNlOiBNSVRcXG4gXFxudW5pZm9ybSBmbG9hdCBjb2xvclNlcGFyYXRpb247IC8vID0gMC4wNFxcbiBcXG52ZWM0IHRyYW5zaXRpb24gKHZlYzIgdXYpIHtcXG4gIGZsb2F0IHkgPSAwLjUgKyAodXYueS0wLjUpIC8gKDEuMC1wcm9ncmVzcyk7XFxuICBpZiAoeSA8IDAuMCB8fCB5ID4gMS4wKSB7XFxuICAgICByZXR1cm4gZ2V0VG9Db2xvcih1dik7XFxuICB9XFxuICBlbHNlIHtcXG4gICAgdmVjMiBmcCA9IHZlYzIodXYueCwgeSk7XFxuICAgIHZlYzIgb2ZmID0gcHJvZ3Jlc3MgKiB2ZWMyKDAuMCwgY29sb3JTZXBhcmF0aW9uKTtcXG4gICAgdmVjNCBjID0gZ2V0RnJvbUNvbG9yKGZwKTtcXG4gICAgdmVjNCBjbiA9IGdldEZyb21Db2xvcihmcCAtIG9mZik7XFxuICAgIHZlYzQgY3AgPSBnZXRGcm9tQ29sb3IoZnAgKyBvZmYpO1xcbiAgICByZXR1cm4gdmVjNChjbi5yLCBjLmcsIGNwLmIsIGMuYSk7XFxuICB9XFxufVxcblwiLFwiYXV0aG9yXCI6XCJncmVcIixcImxpY2Vuc2VcIjpcIk1JVFwiLFwiY3JlYXRlZEF0XCI6XCJUdWUsIDMwIE1heSAyMDE3IDE0OjI2OjQ0ICswMjAwXCIsXCJ1cGRhdGVkQXRcIjpcIlR1ZSwgMzAgTWF5IDIwMTcgMTQ6MjY6NDQgKzAyMDBcIn0se1wibmFtZVwiOlwic3dhcFwiLFwicGFyYW1zVHlwZXNcIjp7XCJyZWZsZWN0aW9uXCI6XCJmbG9hdFwiLFwicGVyc3BlY3RpdmVcIjpcImZsb2F0XCIsXCJkZXB0aFwiOlwiZmxvYXRcIn0sXCJkZWZhdWx0UGFyYW1zXCI6e1wicmVmbGVjdGlvblwiOjAuNCxcInBlcnNwZWN0aXZlXCI6MC4yLFwiZGVwdGhcIjozfSxcImdsc2xcIjpcIi8vIEF1dGhvcjogZ3JlXFxuLy8gTGljZW5zZTogTUlUXFxuLy8gR2VuZXJhbCBwYXJhbWV0ZXJzXFxudW5pZm9ybSBmbG9hdCByZWZsZWN0aW9uOyAvLyA9IDAuNFxcbnVuaWZvcm0gZmxvYXQgcGVyc3BlY3RpdmU7IC8vID0gMC4yXFxudW5pZm9ybSBmbG9hdCBkZXB0aDsgLy8gPSAzLjBcXG4gXFxuY29uc3QgdmVjNCBibGFjayA9IHZlYzQoMC4wLCAwLjAsIDAuMCwgMS4wKTtcXG5jb25zdCB2ZWMyIGJvdW5kTWluID0gdmVjMigwLjAsIDAuMCk7XFxuY29uc3QgdmVjMiBib3VuZE1heCA9IHZlYzIoMS4wLCAxLjApO1xcbiBcXG5ib29sIGluQm91bmRzICh2ZWMyIHApIHtcXG4gIHJldHVybiBhbGwobGVzc1RoYW4oYm91bmRNaW4sIHApKSAmJiBhbGwobGVzc1RoYW4ocCwgYm91bmRNYXgpKTtcXG59XFxuIFxcbnZlYzIgcHJvamVjdCAodmVjMiBwKSB7XFxuICByZXR1cm4gcCAqIHZlYzIoMS4wLCAtMS4yKSArIHZlYzIoMC4wLCAtMC4wMik7XFxufVxcbiBcXG52ZWM0IGJnQ29sb3IgKHZlYzIgcCwgdmVjMiBwZnIsIHZlYzIgcHRvKSB7XFxuICB2ZWM0IGMgPSBibGFjaztcXG4gIHBmciA9IHByb2plY3QocGZyKTtcXG4gIGlmIChpbkJvdW5kcyhwZnIpKSB7XFxuICAgIGMgKz0gbWl4KGJsYWNrLCBnZXRGcm9tQ29sb3IocGZyKSwgcmVmbGVjdGlvbiAqIG1peCgxLjAsIDAuMCwgcGZyLnkpKTtcXG4gIH1cXG4gIHB0byA9IHByb2plY3QocHRvKTtcXG4gIGlmIChpbkJvdW5kcyhwdG8pKSB7XFxuICAgIGMgKz0gbWl4KGJsYWNrLCBnZXRUb0NvbG9yKHB0byksIHJlZmxlY3Rpb24gKiBtaXgoMS4wLCAwLjAsIHB0by55KSk7XFxuICB9XFxuICByZXR1cm4gYztcXG59XFxuIFxcbnZlYzQgdHJhbnNpdGlvbih2ZWMyIHApIHtcXG4gIHZlYzIgcGZyLCBwdG8gPSB2ZWMyKC0xLik7XFxuIFxcbiAgZmxvYXQgc2l6ZSA9IG1peCgxLjAsIGRlcHRoLCBwcm9ncmVzcyk7XFxuICBmbG9hdCBwZXJzcCA9IHBlcnNwZWN0aXZlICogcHJvZ3Jlc3M7XFxuICBwZnIgPSAocCArIHZlYzIoLTAuMCwgLTAuNSkpICogdmVjMihzaXplLygxLjAtcGVyc3BlY3RpdmUqcHJvZ3Jlc3MpLCBzaXplLygxLjAtc2l6ZSpwZXJzcCpwLngpKSArIHZlYzIoMC4wLCAwLjUpO1xcbiBcXG4gIHNpemUgPSBtaXgoMS4wLCBkZXB0aCwgMS4tcHJvZ3Jlc3MpO1xcbiAgcGVyc3AgPSBwZXJzcGVjdGl2ZSAqICgxLi1wcm9ncmVzcyk7XFxuICBwdG8gPSAocCArIHZlYzIoLTEuMCwgLTAuNSkpICogdmVjMihzaXplLygxLjAtcGVyc3BlY3RpdmUqKDEuMC1wcm9ncmVzcykpLCBzaXplLygxLjAtc2l6ZSpwZXJzcCooMC41LXAueCkpKSArIHZlYzIoMS4wLCAwLjUpO1xcblxcbiAgaWYgKHByb2dyZXNzIDwgMC41KSB7XFxuICAgIGlmIChpbkJvdW5kcyhwZnIpKSB7XFxuICAgICAgcmV0dXJuIGdldEZyb21Db2xvcihwZnIpO1xcbiAgICB9XFxuICAgIGlmIChpbkJvdW5kcyhwdG8pKSB7XFxuICAgICAgcmV0dXJuIGdldFRvQ29sb3IocHRvKTtcXG4gICAgfSAgXFxuICB9XFxuICBpZiAoaW5Cb3VuZHMocHRvKSkge1xcbiAgICByZXR1cm4gZ2V0VG9Db2xvcihwdG8pO1xcbiAgfVxcbiAgaWYgKGluQm91bmRzKHBmcikpIHtcXG4gICAgcmV0dXJuIGdldEZyb21Db2xvcihwZnIpO1xcbiAgfVxcbiAgcmV0dXJuIGJnQ29sb3IocCwgcGZyLCBwdG8pO1xcbn1cXG5cIixcImF1dGhvclwiOlwiZ3JlXCIsXCJsaWNlbnNlXCI6XCJNSVRcIixcImNyZWF0ZWRBdFwiOlwiVHVlLCAzMCBNYXkgMjAxNyAxNDoyNjo0NCArMDIwMFwiLFwidXBkYXRlZEF0XCI6XCJTdW4sIDE4IEZlYiAyMDE4IDE3OjQ1OjUwICswMTAwXCJ9LHtcIm5hbWVcIjpcInVuZHVsYXRpbmdCdXJuT3V0XCIsXCJwYXJhbXNUeXBlc1wiOntcInNtb290aG5lc3NcIjpcImZsb2F0XCIsXCJjZW50ZXJcIjpcInZlYzJcIixcImNvbG9yXCI6XCJ2ZWMzXCJ9LFwiZGVmYXVsdFBhcmFtc1wiOntcInNtb290aG5lc3NcIjowLjAzLFwiY2VudGVyXCI6WzAuNSwwLjVdLFwiY29sb3JcIjpbMCwwLDBdfSxcImdsc2xcIjpcIi8vIExpY2Vuc2U6IE1JVFxcbi8vIEF1dGhvcjogcHRocmFzaGVyXFxuLy8gYWRhcHRlZCBieSBncmUgZnJvbSBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9wdGhyYXNoZXIvOGU2MjI2YjIxNTU0OGJhMTI3MzRcXG5cXG51bmlmb3JtIGZsb2F0IHNtb290aG5lc3M7IC8vID0gMC4wM1xcbnVuaWZvcm0gdmVjMiBjZW50ZXI7IC8vID0gdmVjMigwLjUpXFxudW5pZm9ybSB2ZWMzIGNvbG9yOyAvLyA9IHZlYzMoMC4wKVxcblxcbmNvbnN0IGZsb2F0IE1fUEkgPSAzLjE0MTU5MjY1MzU4OTc5MzIzODQ2O1xcblxcbmZsb2F0IHF1YWRyYXRpY0luT3V0KGZsb2F0IHQpIHtcXG4gIGZsb2F0IHAgPSAyLjAgKiB0ICogdDtcXG4gIHJldHVybiB0IDwgMC41ID8gcCA6IC1wICsgKDQuMCAqIHQpIC0gMS4wO1xcbn1cXG5cXG5mbG9hdCBnZXRHcmFkaWVudChmbG9hdCByLCBmbG9hdCBkaXN0KSB7XFxuICBmbG9hdCBkID0gciAtIGRpc3Q7XFxuICByZXR1cm4gbWl4KFxcbiAgICBzbW9vdGhzdGVwKC1zbW9vdGhuZXNzLCAwLjAsIHIgLSBkaXN0ICogKDEuMCArIHNtb290aG5lc3MpKSxcXG4gICAgLTEuMCAtIHN0ZXAoMC4wMDUsIGQpLFxcbiAgICBzdGVwKC0wLjAwNSwgZCkgKiBzdGVwKGQsIDAuMDEpXFxuICApO1xcbn1cXG5cXG5mbG9hdCBnZXRXYXZlKHZlYzIgcCl7XFxuICB2ZWMyIF9wID0gcCAtIGNlbnRlcjsgLy8gb2Zmc2V0IGZyb20gY2VudGVyXFxuICBmbG9hdCByYWRzID0gYXRhbihfcC55LCBfcC54KTtcXG4gIGZsb2F0IGRlZ3MgPSBkZWdyZWVzKHJhZHMpICsgMTgwLjA7XFxuICB2ZWMyIHJhbmdlID0gdmVjMigwLjAsIE1fUEkgKiAzMC4wKTtcXG4gIHZlYzIgZG9tYWluID0gdmVjMigwLjAsIDM2MC4wKTtcXG4gIGZsb2F0IHJhdGlvID0gKE1fUEkgKiAzMC4wKSAvIDM2MC4wO1xcbiAgZGVncyA9IGRlZ3MgKiByYXRpbztcXG4gIGZsb2F0IHggPSBwcm9ncmVzcztcXG4gIGZsb2F0IG1hZ25pdHVkZSA9IG1peCgwLjAyLCAwLjA5LCBzbW9vdGhzdGVwKDAuMCwgMS4wLCB4KSk7XFxuICBmbG9hdCBvZmZzZXQgPSBtaXgoNDAuMCwgMzAuMCwgc21vb3Roc3RlcCgwLjAsIDEuMCwgeCkpO1xcbiAgZmxvYXQgZWFzZV9kZWdzID0gcXVhZHJhdGljSW5PdXQoc2luKGRlZ3MpKTtcXG4gIGZsb2F0IGRlZ193YXZlX3BvcyA9IChlYXNlX2RlZ3MgKiBtYWduaXR1ZGUpICogc2luKHggKiBvZmZzZXQpO1xcbiAgcmV0dXJuIHggKyBkZWdfd2F2ZV9wb3M7XFxufVxcblxcbnZlYzQgdHJhbnNpdGlvbih2ZWMyIHApIHtcXG4gIGZsb2F0IGRpc3QgPSBkaXN0YW5jZShjZW50ZXIsIHApO1xcbiAgZmxvYXQgbSA9IGdldEdyYWRpZW50KGdldFdhdmUocCksIGRpc3QpO1xcbiAgdmVjNCBjZnJvbSA9IGdldEZyb21Db2xvcihwKTtcXG4gIHZlYzQgY3RvID0gZ2V0VG9Db2xvcihwKTtcXG4gIHJldHVybiBtaXgobWl4KGNmcm9tLCBjdG8sIG0pLCBtaXgoY2Zyb20sIHZlYzQoY29sb3IsIDEuMCksIDAuNzUpLCBzdGVwKG0sIC0yLjApKTtcXG59XFxuXCIsXCJsaWNlbnNlXCI6XCJNSVRcIixcImF1dGhvclwiOlwicHRocmFzaGVyXCIsXCJjcmVhdGVkQXRcIjpcIk1vbiwgMTIgSnVuIDIwMTcgMTA6MjM6MzcgKzA4MDBcIixcInVwZGF0ZWRBdFwiOlwiTW9uLCAxMiBKdW4gMjAxNyAxMDoyMzozNyArMDgwMFwifSx7XCJuYW1lXCI6XCJ3aW5kXCIsXCJwYXJhbXNUeXBlc1wiOntcInNpemVcIjpcImZsb2F0XCJ9LFwiZGVmYXVsdFBhcmFtc1wiOntcInNpemVcIjowLjJ9LFwiZ2xzbFwiOlwiLy8gQXV0aG9yOiBncmVcXG4vLyBMaWNlbnNlOiBNSVRcXG5cXG4vLyBDdXN0b20gcGFyYW1ldGVyc1xcbnVuaWZvcm0gZmxvYXQgc2l6ZTsgLy8gPSAwLjJcXG5cXG5mbG9hdCByYW5kICh2ZWMyIGNvKSB7XFxuICByZXR1cm4gZnJhY3Qoc2luKGRvdChjby54eSAsdmVjMigxMi45ODk4LDc4LjIzMykpKSAqIDQzNzU4LjU0NTMpO1xcbn1cXG5cXG52ZWM0IHRyYW5zaXRpb24gKHZlYzIgdXYpIHtcXG4gIGZsb2F0IHIgPSByYW5kKHZlYzIoMCwgdXYueSkpO1xcbiAgZmxvYXQgbSA9IHNtb290aHN0ZXAoMC4wLCAtc2l6ZSwgdXYueCooMS4wLXNpemUpICsgc2l6ZSpyIC0gKHByb2dyZXNzICogKDEuMCArIHNpemUpKSk7XFxuICByZXR1cm4gbWl4KFxcbiAgICBnZXRGcm9tQ29sb3IodXYpLFxcbiAgICBnZXRUb0NvbG9yKHV2KSxcXG4gICAgbVxcbiAgKTtcXG59XFxuXCIsXCJhdXRob3JcIjpcImdyZVwiLFwibGljZW5zZVwiOlwiTUlUXCIsXCJjcmVhdGVkQXRcIjpcIlR1ZSwgMzAgTWF5IDIwMTcgMTQ6MjY6NDQgKzAyMDBcIixcInVwZGF0ZWRBdFwiOlwiVHVlLCAzMCBNYXkgMjAxNyAxNDoyNjo0NCArMDIwMFwifSx7XCJuYW1lXCI6XCJ3aW5kb3dibGluZHNcIixcInBhcmFtc1R5cGVzXCI6e30sXCJkZWZhdWx0UGFyYW1zXCI6e30sXCJnbHNsXCI6XCIvLyBBdXRob3I6IEZhYmllbiBCZW5ldG91XFxuLy8gTGljZW5zZTogTUlUXFxuXFxudmVjNCB0cmFuc2l0aW9uICh2ZWMyIHV2KSB7XFxuICBmbG9hdCB0ID0gcHJvZ3Jlc3M7XFxuICBcXG4gIGlmIChtb2QoZmxvb3IodXYueSoxMDAuKnByb2dyZXNzKSwyLik9PTAuKVxcbiAgICB0Kj0yLi0uNTtcXG4gIFxcbiAgcmV0dXJuIG1peChcXG4gICAgZ2V0RnJvbUNvbG9yKHV2KSxcXG4gICAgZ2V0VG9Db2xvcih1diksXFxuICAgIG1peCh0LCBwcm9ncmVzcywgc21vb3Roc3RlcCgwLjgsIDEuMCwgcHJvZ3Jlc3MpKVxcbiAgKTtcXG59XFxuXCIsXCJhdXRob3JcIjpcIkZhYmllbiBCZW5ldG91XCIsXCJsaWNlbnNlXCI6XCJNSVRcIixcImNyZWF0ZWRBdFwiOlwiV2VkLCAzMSBNYXkgMjAxNyAxNDoxMTo0OCArMDIwMFwiLFwidXBkYXRlZEF0XCI6XCJXZWQsIDMxIE1heSAyMDE3IDE0OjExOjQ4ICswMjAwXCJ9LHtcIm5hbWVcIjpcIndpbmRvd3NsaWNlXCIsXCJwYXJhbXNUeXBlc1wiOntcImNvdW50XCI6XCJmbG9hdFwiLFwic21vb3RobmVzc1wiOlwiZmxvYXRcIn0sXCJkZWZhdWx0UGFyYW1zXCI6e1wiY291bnRcIjoxMCxcInNtb290aG5lc3NcIjowLjV9LFwiZ2xzbFwiOlwiLy8gQXV0aG9yOiBncmVcXG4vLyBMaWNlbnNlOiBNSVRcXG5cXG51bmlmb3JtIGZsb2F0IGNvdW50OyAvLyA9IDEwLjBcXG51bmlmb3JtIGZsb2F0IHNtb290aG5lc3M7IC8vID0gMC41XFxuXFxudmVjNCB0cmFuc2l0aW9uICh2ZWMyIHApIHtcXG4gIGZsb2F0IHByID0gc21vb3Roc3RlcCgtc21vb3RobmVzcywgMC4wLCBwLnggLSBwcm9ncmVzcyAqICgxLjAgKyBzbW9vdGhuZXNzKSk7XFxuICBmbG9hdCBzID0gc3RlcChwciwgZnJhY3QoY291bnQgKiBwLngpKTtcXG4gIHJldHVybiBtaXgoZ2V0RnJvbUNvbG9yKHApLCBnZXRUb0NvbG9yKHApLCBzKTtcXG59XFxuXCIsXCJhdXRob3JcIjpcImdyZVwiLFwibGljZW5zZVwiOlwiTUlUXCIsXCJjcmVhdGVkQXRcIjpcIldlZCwgMjggTWFyIDIwMTggMTc6MjM6MjYgKzAyMDBcIixcInVwZGF0ZWRBdFwiOlwiV2VkLCAyOCBNYXIgMjAxOCAxNzoyMzoyNiArMDIwMFwifSx7XCJuYW1lXCI6XCJ3aXBlRG93blwiLFwicGFyYW1zVHlwZXNcIjp7fSxcImRlZmF1bHRQYXJhbXNcIjp7fSxcImdsc2xcIjpcIi8vIEF1dGhvcjogSmFrZSBOZWxzb25cXG4vLyBMaWNlbnNlOiBNSVRcXG5cXG52ZWM0IHRyYW5zaXRpb24odmVjMiB1dikge1xcbiAgdmVjMiBwPXV2Lnh5L3ZlYzIoMS4wKS54eTtcXG4gIHZlYzQgYT1nZXRGcm9tQ29sb3IocCk7XFxuICB2ZWM0IGI9Z2V0VG9Db2xvcihwKTtcXG4gIHJldHVybiBtaXgoYSwgYiwgc3RlcCgxLjAtcC55LHByb2dyZXNzKSk7XFxufVxcblwiLFwiYXV0aG9yXCI6XCJKYWtlIE5lbHNvblwiLFwibGljZW5zZVwiOlwiTUlUXCIsXCJjcmVhdGVkQXRcIjpcIldlZCwgMSBOb3YgMjAxNyAxNToyNjowMSAtMDUwMFwiLFwidXBkYXRlZEF0XCI6XCJUaHUsIDIgTm92IDIwMTcgMTg6Mzk6MjYgLTA1MDBcIn0se1wibmFtZVwiOlwid2lwZUxlZnRcIixcInBhcmFtc1R5cGVzXCI6e30sXCJkZWZhdWx0UGFyYW1zXCI6e30sXCJnbHNsXCI6XCIvLyBBdXRob3I6IEpha2UgTmVsc29uXFxuLy8gTGljZW5zZTogTUlUXFxuXFxudmVjNCB0cmFuc2l0aW9uKHZlYzIgdXYpIHtcXG4gIHZlYzIgcD11di54eS92ZWMyKDEuMCkueHk7XFxuICB2ZWM0IGE9Z2V0RnJvbUNvbG9yKHApO1xcbiAgdmVjNCBiPWdldFRvQ29sb3IocCk7XFxuICByZXR1cm4gbWl4KGEsIGIsIHN0ZXAoMS4wLXAueCxwcm9ncmVzcykpO1xcbn1cXG5cIixcImF1dGhvclwiOlwiSmFrZSBOZWxzb25cIixcImxpY2Vuc2VcIjpcIk1JVFwiLFwiY3JlYXRlZEF0XCI6XCJXZWQsIDEgTm92IDIwMTcgMTU6MjY6MjggLTA1MDBcIixcInVwZGF0ZWRBdFwiOlwiRnJpLCAzIE5vdiAyMDE3IDE4OjAzOjUwICswMTAwXCJ9LHtcIm5hbWVcIjpcIndpcGVSaWdodFwiLFwicGFyYW1zVHlwZXNcIjp7fSxcImRlZmF1bHRQYXJhbXNcIjp7fSxcImdsc2xcIjpcIi8vIEF1dGhvcjogSmFrZSBOZWxzb25cXG4vLyBMaWNlbnNlOiBNSVRcXG5cXG52ZWM0IHRyYW5zaXRpb24odmVjMiB1dikge1xcbiAgdmVjMiBwPXV2Lnh5L3ZlYzIoMS4wKS54eTtcXG4gIHZlYzQgYT1nZXRGcm9tQ29sb3IocCk7XFxuICB2ZWM0IGI9Z2V0VG9Db2xvcihwKTtcXG4gIHJldHVybiBtaXgoYSwgYiwgc3RlcCgwLjArcC54LHByb2dyZXNzKSk7XFxufVxcblwiLFwiYXV0aG9yXCI6XCJKYWtlIE5lbHNvblwiLFwibGljZW5zZVwiOlwiTUlUXCIsXCJjcmVhdGVkQXRcIjpcIldlZCwgMSBOb3YgMjAxNyAxNToyNzowMiAtMDUwMFwiLFwidXBkYXRlZEF0XCI6XCJUaHUsIDIgTm92IDIwMTcgMTg6NDA6MjIgLTA1MDBcIn0se1wibmFtZVwiOlwid2lwZVVwXCIsXCJwYXJhbXNUeXBlc1wiOnt9LFwiZGVmYXVsdFBhcmFtc1wiOnt9LFwiZ2xzbFwiOlwiLy8gQXV0aG9yOiBKYWtlIE5lbHNvblxcbi8vIExpY2Vuc2U6IE1JVFxcblxcbnZlYzQgdHJhbnNpdGlvbih2ZWMyIHV2KSB7XFxuICB2ZWMyIHA9dXYueHkvdmVjMigxLjApLnh5O1xcbiAgdmVjNCBhPWdldEZyb21Db2xvcihwKTtcXG4gIHZlYzQgYj1nZXRUb0NvbG9yKHApO1xcbiAgcmV0dXJuIG1peChhLCBiLCBzdGVwKDAuMCtwLnkscHJvZ3Jlc3MpKTtcXG59XFxuXCIsXCJhdXRob3JcIjpcIkpha2UgTmVsc29uXCIsXCJsaWNlbnNlXCI6XCJNSVRcIixcImNyZWF0ZWRBdFwiOlwiV2VkLCAxIE5vdiAyMDE3IDE1OjI0OjM2IC0wNTAwXCIsXCJ1cGRhdGVkQXRcIjpcIlRodSwgMiBOb3YgMjAxNyAxODozNzo0MiAtMDUwMFwifV0iLCJ2YXIgdG9rZW5pemUgPSByZXF1aXJlKCdnbHNsLXRva2VuaXplcicpXG52YXIgYXRvYiAgICAgPSByZXF1aXJlKCdhdG9iLWxpdGUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE5hbWVcblxuZnVuY3Rpb24gZ2V0TmFtZShzcmMpIHtcbiAgdmFyIHRva2VucyA9IEFycmF5LmlzQXJyYXkoc3JjKVxuICAgID8gc3JjXG4gICAgOiB0b2tlbml6ZShzcmMpXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV1cbiAgICBpZiAodG9rZW4udHlwZSAhPT0gJ3ByZXByb2Nlc3NvcicpIGNvbnRpbnVlXG4gICAgdmFyIG1hdGNoID0gdG9rZW4uZGF0YS5tYXRjaCgvXFwjZGVmaW5lXFxzK1NIQURFUl9OQU1FKF9CNjQpP1xccysoLispJC8pXG4gICAgaWYgKCFtYXRjaCkgY29udGludWVcbiAgICBpZiAoIW1hdGNoWzJdKSBjb250aW51ZVxuXG4gICAgdmFyIGI2NCAgPSBtYXRjaFsxXVxuICAgIHZhciBuYW1lID0gbWF0Y2hbMl1cblxuICAgIHJldHVybiAoYjY0ID8gYXRvYihuYW1lKSA6IG5hbWUpLnRyaW0oKVxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHRva2VuaXplXHJcblxyXG52YXIgbGl0ZXJhbHMxMDAgPSByZXF1aXJlKCcuL2xpYi9saXRlcmFscycpXHJcbiAgLCBvcGVyYXRvcnMgPSByZXF1aXJlKCcuL2xpYi9vcGVyYXRvcnMnKVxyXG4gICwgYnVpbHRpbnMxMDAgPSByZXF1aXJlKCcuL2xpYi9idWlsdGlucycpXHJcbiAgLCBsaXRlcmFsczMwMGVzID0gcmVxdWlyZSgnLi9saWIvbGl0ZXJhbHMtMzAwZXMnKVxyXG4gICwgYnVpbHRpbnMzMDBlcyA9IHJlcXVpcmUoJy4vbGliL2J1aWx0aW5zLTMwMGVzJylcclxuXHJcbnZhciBOT1JNQUwgPSA5OTkgICAgICAgICAgLy8gPC0tIG5ldmVyIGVtaXR0ZWRcclxuICAsIFRPS0VOID0gOTk5OSAgICAgICAgICAvLyA8LS0gbmV2ZXIgZW1pdHRlZFxyXG4gICwgQkxPQ0tfQ09NTUVOVCA9IDBcclxuICAsIExJTkVfQ09NTUVOVCA9IDFcclxuICAsIFBSRVBST0NFU1NPUiA9IDJcclxuICAsIE9QRVJBVE9SID0gM1xyXG4gICwgSU5URUdFUiA9IDRcclxuICAsIEZMT0FUID0gNVxyXG4gICwgSURFTlQgPSA2XHJcbiAgLCBCVUlMVElOID0gN1xyXG4gICwgS0VZV09SRCA9IDhcclxuICAsIFdISVRFU1BBQ0UgPSA5XHJcbiAgLCBFT0YgPSAxMFxyXG4gICwgSEVYID0gMTFcclxuXHJcbnZhciBtYXAgPSBbXHJcbiAgICAnYmxvY2stY29tbWVudCdcclxuICAsICdsaW5lLWNvbW1lbnQnXHJcbiAgLCAncHJlcHJvY2Vzc29yJ1xyXG4gICwgJ29wZXJhdG9yJ1xyXG4gICwgJ2ludGVnZXInXHJcbiAgLCAnZmxvYXQnXHJcbiAgLCAnaWRlbnQnXHJcbiAgLCAnYnVpbHRpbidcclxuICAsICdrZXl3b3JkJ1xyXG4gICwgJ3doaXRlc3BhY2UnXHJcbiAgLCAnZW9mJ1xyXG4gICwgJ2ludGVnZXInXHJcbl1cclxuXHJcbmZ1bmN0aW9uIHRva2VuaXplKG9wdCkge1xyXG4gIHZhciBpID0gMFxyXG4gICAgLCB0b3RhbCA9IDBcclxuICAgICwgbW9kZSA9IE5PUk1BTFxyXG4gICAgLCBjXHJcbiAgICAsIGxhc3RcclxuICAgICwgY29udGVudCA9IFtdXHJcbiAgICAsIHRva2VucyA9IFtdXHJcbiAgICAsIHRva2VuX2lkeCA9IDBcclxuICAgICwgdG9rZW5fb2ZmcyA9IDBcclxuICAgICwgbGluZSA9IDFcclxuICAgICwgY29sID0gMFxyXG4gICAgLCBzdGFydCA9IDBcclxuICAgICwgaXNudW0gPSBmYWxzZVxyXG4gICAgLCBpc29wZXJhdG9yID0gZmFsc2VcclxuICAgICwgaW5wdXQgPSAnJ1xyXG4gICAgLCBsZW5cclxuXHJcbiAgb3B0ID0gb3B0IHx8IHt9XHJcbiAgdmFyIGFsbEJ1aWx0aW5zID0gYnVpbHRpbnMxMDBcclxuICB2YXIgYWxsTGl0ZXJhbHMgPSBsaXRlcmFsczEwMFxyXG4gIGlmIChvcHQudmVyc2lvbiA9PT0gJzMwMCBlcycpIHtcclxuICAgIGFsbEJ1aWx0aW5zID0gYnVpbHRpbnMzMDBlc1xyXG4gICAgYWxsTGl0ZXJhbHMgPSBsaXRlcmFsczMwMGVzXHJcbiAgfVxyXG5cclxuICAvLyBjYWNoZSBieSBuYW1lXHJcbiAgdmFyIGJ1aWx0aW5zRGljdCA9IHt9LCBsaXRlcmFsc0RpY3QgPSB7fVxyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsQnVpbHRpbnMubGVuZ3RoOyBpKyspIHtcclxuICAgIGJ1aWx0aW5zRGljdFthbGxCdWlsdGluc1tpXV0gPSB0cnVlXHJcbiAgfVxyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsTGl0ZXJhbHMubGVuZ3RoOyBpKyspIHtcclxuICAgIGxpdGVyYWxzRGljdFthbGxMaXRlcmFsc1tpXV0gPSB0cnVlXHJcbiAgfVxyXG5cclxuICByZXR1cm4gZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgdG9rZW5zID0gW11cclxuICAgIGlmIChkYXRhICE9PSBudWxsKSByZXR1cm4gd3JpdGUoZGF0YSlcclxuICAgIHJldHVybiBlbmQoKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdG9rZW4oZGF0YSkge1xyXG4gICAgaWYgKGRhdGEubGVuZ3RoKSB7XHJcbiAgICAgIHRva2Vucy5wdXNoKHtcclxuICAgICAgICB0eXBlOiBtYXBbbW9kZV1cclxuICAgICAgLCBkYXRhOiBkYXRhXHJcbiAgICAgICwgcG9zaXRpb246IHN0YXJ0XHJcbiAgICAgICwgbGluZTogbGluZVxyXG4gICAgICAsIGNvbHVtbjogY29sXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB3cml0ZShjaHVuaykge1xyXG4gICAgaSA9IDBcclxuXHJcbiAgICBpZiAoY2h1bmsudG9TdHJpbmcpIGNodW5rID0gY2h1bmsudG9TdHJpbmcoKVxyXG5cclxuICAgIGlucHV0ICs9IGNodW5rLnJlcGxhY2UoL1xcclxcbi9nLCAnXFxuJylcclxuICAgIGxlbiA9IGlucHV0Lmxlbmd0aFxyXG5cclxuXHJcbiAgICB2YXIgbGFzdFxyXG5cclxuICAgIHdoaWxlKGMgPSBpbnB1dFtpXSwgaSA8IGxlbikge1xyXG4gICAgICBsYXN0ID0gaVxyXG5cclxuICAgICAgc3dpdGNoKG1vZGUpIHtcclxuICAgICAgICBjYXNlIEJMT0NLX0NPTU1FTlQ6IGkgPSBibG9ja19jb21tZW50KCk7IGJyZWFrXHJcbiAgICAgICAgY2FzZSBMSU5FX0NPTU1FTlQ6IGkgPSBsaW5lX2NvbW1lbnQoKTsgYnJlYWtcclxuICAgICAgICBjYXNlIFBSRVBST0NFU1NPUjogaSA9IHByZXByb2Nlc3NvcigpOyBicmVha1xyXG4gICAgICAgIGNhc2UgT1BFUkFUT1I6IGkgPSBvcGVyYXRvcigpOyBicmVha1xyXG4gICAgICAgIGNhc2UgSU5URUdFUjogaSA9IGludGVnZXIoKTsgYnJlYWtcclxuICAgICAgICBjYXNlIEhFWDogaSA9IGhleCgpOyBicmVha1xyXG4gICAgICAgIGNhc2UgRkxPQVQ6IGkgPSBkZWNpbWFsKCk7IGJyZWFrXHJcbiAgICAgICAgY2FzZSBUT0tFTjogaSA9IHJlYWR0b2tlbigpOyBicmVha1xyXG4gICAgICAgIGNhc2UgV0hJVEVTUEFDRTogaSA9IHdoaXRlc3BhY2UoKTsgYnJlYWtcclxuICAgICAgICBjYXNlIE5PUk1BTDogaSA9IG5vcm1hbCgpOyBicmVha1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZihsYXN0ICE9PSBpKSB7XHJcbiAgICAgICAgc3dpdGNoKGlucHV0W2xhc3RdKSB7XHJcbiAgICAgICAgICBjYXNlICdcXG4nOiBjb2wgPSAwOyArK2xpbmU7IGJyZWFrXHJcbiAgICAgICAgICBkZWZhdWx0OiArK2NvbDsgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0b3RhbCArPSBpXHJcbiAgICBpbnB1dCA9IGlucHV0LnNsaWNlKGkpXHJcbiAgICByZXR1cm4gdG9rZW5zXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBlbmQoY2h1bmspIHtcclxuICAgIGlmKGNvbnRlbnQubGVuZ3RoKSB7XHJcbiAgICAgIHRva2VuKGNvbnRlbnQuam9pbignJykpXHJcbiAgICB9XHJcblxyXG4gICAgbW9kZSA9IEVPRlxyXG4gICAgdG9rZW4oJyhlb2YpJylcclxuICAgIHJldHVybiB0b2tlbnNcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG5vcm1hbCgpIHtcclxuICAgIGNvbnRlbnQgPSBjb250ZW50Lmxlbmd0aCA/IFtdIDogY29udGVudFxyXG5cclxuICAgIGlmKGxhc3QgPT09ICcvJyAmJiBjID09PSAnKicpIHtcclxuICAgICAgc3RhcnQgPSB0b3RhbCArIGkgLSAxXHJcbiAgICAgIG1vZGUgPSBCTE9DS19DT01NRU5UXHJcbiAgICAgIGxhc3QgPSBjXHJcbiAgICAgIHJldHVybiBpICsgMVxyXG4gICAgfVxyXG5cclxuICAgIGlmKGxhc3QgPT09ICcvJyAmJiBjID09PSAnLycpIHtcclxuICAgICAgc3RhcnQgPSB0b3RhbCArIGkgLSAxXHJcbiAgICAgIG1vZGUgPSBMSU5FX0NPTU1FTlRcclxuICAgICAgbGFzdCA9IGNcclxuICAgICAgcmV0dXJuIGkgKyAxXHJcbiAgICB9XHJcblxyXG4gICAgaWYoYyA9PT0gJyMnKSB7XHJcbiAgICAgIG1vZGUgPSBQUkVQUk9DRVNTT1JcclxuICAgICAgc3RhcnQgPSB0b3RhbCArIGlcclxuICAgICAgcmV0dXJuIGlcclxuICAgIH1cclxuXHJcbiAgICBpZigvXFxzLy50ZXN0KGMpKSB7XHJcbiAgICAgIG1vZGUgPSBXSElURVNQQUNFXHJcbiAgICAgIHN0YXJ0ID0gdG90YWwgKyBpXHJcbiAgICAgIHJldHVybiBpXHJcbiAgICB9XHJcblxyXG4gICAgaXNudW0gPSAvXFxkLy50ZXN0KGMpXHJcbiAgICBpc29wZXJhdG9yID0gL1teXFx3X10vLnRlc3QoYylcclxuXHJcbiAgICBzdGFydCA9IHRvdGFsICsgaVxyXG4gICAgbW9kZSA9IGlzbnVtID8gSU5URUdFUiA6IGlzb3BlcmF0b3IgPyBPUEVSQVRPUiA6IFRPS0VOXHJcbiAgICByZXR1cm4gaVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gd2hpdGVzcGFjZSgpIHtcclxuICAgIGlmKC9bXlxcc10vZy50ZXN0KGMpKSB7XHJcbiAgICAgIHRva2VuKGNvbnRlbnQuam9pbignJykpXHJcbiAgICAgIG1vZGUgPSBOT1JNQUxcclxuICAgICAgcmV0dXJuIGlcclxuICAgIH1cclxuICAgIGNvbnRlbnQucHVzaChjKVxyXG4gICAgbGFzdCA9IGNcclxuICAgIHJldHVybiBpICsgMVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcHJlcHJvY2Vzc29yKCkge1xyXG4gICAgaWYoKGMgPT09ICdcXHInIHx8IGMgPT09ICdcXG4nKSAmJiBsYXN0ICE9PSAnXFxcXCcpIHtcclxuICAgICAgdG9rZW4oY29udGVudC5qb2luKCcnKSlcclxuICAgICAgbW9kZSA9IE5PUk1BTFxyXG4gICAgICByZXR1cm4gaVxyXG4gICAgfVxyXG4gICAgY29udGVudC5wdXNoKGMpXHJcbiAgICBsYXN0ID0gY1xyXG4gICAgcmV0dXJuIGkgKyAxXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBsaW5lX2NvbW1lbnQoKSB7XHJcbiAgICByZXR1cm4gcHJlcHJvY2Vzc29yKClcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGJsb2NrX2NvbW1lbnQoKSB7XHJcbiAgICBpZihjID09PSAnLycgJiYgbGFzdCA9PT0gJyonKSB7XHJcbiAgICAgIGNvbnRlbnQucHVzaChjKVxyXG4gICAgICB0b2tlbihjb250ZW50LmpvaW4oJycpKVxyXG4gICAgICBtb2RlID0gTk9STUFMXHJcbiAgICAgIHJldHVybiBpICsgMVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnRlbnQucHVzaChjKVxyXG4gICAgbGFzdCA9IGNcclxuICAgIHJldHVybiBpICsgMVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gb3BlcmF0b3IoKSB7XHJcbiAgICBpZihsYXN0ID09PSAnLicgJiYgL1xcZC8udGVzdChjKSkge1xyXG4gICAgICBtb2RlID0gRkxPQVRcclxuICAgICAgcmV0dXJuIGlcclxuICAgIH1cclxuXHJcbiAgICBpZihsYXN0ID09PSAnLycgJiYgYyA9PT0gJyonKSB7XHJcbiAgICAgIG1vZGUgPSBCTE9DS19DT01NRU5UXHJcbiAgICAgIHJldHVybiBpXHJcbiAgICB9XHJcblxyXG4gICAgaWYobGFzdCA9PT0gJy8nICYmIGMgPT09ICcvJykge1xyXG4gICAgICBtb2RlID0gTElORV9DT01NRU5UXHJcbiAgICAgIHJldHVybiBpXHJcbiAgICB9XHJcblxyXG4gICAgaWYoYyA9PT0gJy4nICYmIGNvbnRlbnQubGVuZ3RoKSB7XHJcbiAgICAgIHdoaWxlKGRldGVybWluZV9vcGVyYXRvcihjb250ZW50KSk7XHJcblxyXG4gICAgICBtb2RlID0gRkxPQVRcclxuICAgICAgcmV0dXJuIGlcclxuICAgIH1cclxuXHJcbiAgICBpZihjID09PSAnOycgfHwgYyA9PT0gJyknIHx8IGMgPT09ICcoJykge1xyXG4gICAgICBpZihjb250ZW50Lmxlbmd0aCkgd2hpbGUoZGV0ZXJtaW5lX29wZXJhdG9yKGNvbnRlbnQpKTtcclxuICAgICAgdG9rZW4oYylcclxuICAgICAgbW9kZSA9IE5PUk1BTFxyXG4gICAgICByZXR1cm4gaSArIDFcclxuICAgIH1cclxuXHJcbiAgICB2YXIgaXNfY29tcG9zaXRlX29wZXJhdG9yID0gY29udGVudC5sZW5ndGggPT09IDIgJiYgYyAhPT0gJz0nXHJcbiAgICBpZigvW1xcd19cXGRcXHNdLy50ZXN0KGMpIHx8IGlzX2NvbXBvc2l0ZV9vcGVyYXRvcikge1xyXG4gICAgICB3aGlsZShkZXRlcm1pbmVfb3BlcmF0b3IoY29udGVudCkpO1xyXG4gICAgICBtb2RlID0gTk9STUFMXHJcbiAgICAgIHJldHVybiBpXHJcbiAgICB9XHJcblxyXG4gICAgY29udGVudC5wdXNoKGMpXHJcbiAgICBsYXN0ID0gY1xyXG4gICAgcmV0dXJuIGkgKyAxXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBkZXRlcm1pbmVfb3BlcmF0b3IoYnVmKSB7XHJcbiAgICB2YXIgaiA9IDBcclxuICAgICAgLCBpZHhcclxuICAgICAgLCByZXNcclxuXHJcbiAgICBkbyB7XHJcbiAgICAgIGlkeCA9IG9wZXJhdG9ycy5pbmRleE9mKGJ1Zi5zbGljZSgwLCBidWYubGVuZ3RoICsgaikuam9pbignJykpXHJcbiAgICAgIHJlcyA9IG9wZXJhdG9yc1tpZHhdXHJcblxyXG4gICAgICBpZihpZHggPT09IC0xKSB7XHJcbiAgICAgICAgaWYoai0tICsgYnVmLmxlbmd0aCA+IDApIGNvbnRpbnVlXHJcbiAgICAgICAgcmVzID0gYnVmLnNsaWNlKDAsIDEpLmpvaW4oJycpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRva2VuKHJlcylcclxuXHJcbiAgICAgIHN0YXJ0ICs9IHJlcy5sZW5ndGhcclxuICAgICAgY29udGVudCA9IGNvbnRlbnQuc2xpY2UocmVzLmxlbmd0aClcclxuICAgICAgcmV0dXJuIGNvbnRlbnQubGVuZ3RoXHJcbiAgICB9IHdoaWxlKDEpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoZXgoKSB7XHJcbiAgICBpZigvW15hLWZBLUYwLTldLy50ZXN0KGMpKSB7XHJcbiAgICAgIHRva2VuKGNvbnRlbnQuam9pbignJykpXHJcbiAgICAgIG1vZGUgPSBOT1JNQUxcclxuICAgICAgcmV0dXJuIGlcclxuICAgIH1cclxuXHJcbiAgICBjb250ZW50LnB1c2goYylcclxuICAgIGxhc3QgPSBjXHJcbiAgICByZXR1cm4gaSArIDFcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGludGVnZXIoKSB7XHJcbiAgICBpZihjID09PSAnLicpIHtcclxuICAgICAgY29udGVudC5wdXNoKGMpXHJcbiAgICAgIG1vZGUgPSBGTE9BVFxyXG4gICAgICBsYXN0ID0gY1xyXG4gICAgICByZXR1cm4gaSArIDFcclxuICAgIH1cclxuXHJcbiAgICBpZigvW2VFXS8udGVzdChjKSkge1xyXG4gICAgICBjb250ZW50LnB1c2goYylcclxuICAgICAgbW9kZSA9IEZMT0FUXHJcbiAgICAgIGxhc3QgPSBjXHJcbiAgICAgIHJldHVybiBpICsgMVxyXG4gICAgfVxyXG5cclxuICAgIGlmKGMgPT09ICd4JyAmJiBjb250ZW50Lmxlbmd0aCA9PT0gMSAmJiBjb250ZW50WzBdID09PSAnMCcpIHtcclxuICAgICAgbW9kZSA9IEhFWFxyXG4gICAgICBjb250ZW50LnB1c2goYylcclxuICAgICAgbGFzdCA9IGNcclxuICAgICAgcmV0dXJuIGkgKyAxXHJcbiAgICB9XHJcblxyXG4gICAgaWYoL1teXFxkXS8udGVzdChjKSkge1xyXG4gICAgICB0b2tlbihjb250ZW50LmpvaW4oJycpKVxyXG4gICAgICBtb2RlID0gTk9STUFMXHJcbiAgICAgIHJldHVybiBpXHJcbiAgICB9XHJcblxyXG4gICAgY29udGVudC5wdXNoKGMpXHJcbiAgICBsYXN0ID0gY1xyXG4gICAgcmV0dXJuIGkgKyAxXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBkZWNpbWFsKCkge1xyXG4gICAgaWYoYyA9PT0gJ2YnKSB7XHJcbiAgICAgIGNvbnRlbnQucHVzaChjKVxyXG4gICAgICBsYXN0ID0gY1xyXG4gICAgICBpICs9IDFcclxuICAgIH1cclxuXHJcbiAgICBpZigvW2VFXS8udGVzdChjKSkge1xyXG4gICAgICBjb250ZW50LnB1c2goYylcclxuICAgICAgbGFzdCA9IGNcclxuICAgICAgcmV0dXJuIGkgKyAxXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKChjID09PSAnLScgfHwgYyA9PT0gJysnKSAmJiAvW2VFXS8udGVzdChsYXN0KSkge1xyXG4gICAgICBjb250ZW50LnB1c2goYylcclxuICAgICAgbGFzdCA9IGNcclxuICAgICAgcmV0dXJuIGkgKyAxXHJcbiAgICB9XHJcblxyXG4gICAgaWYoL1teXFxkXS8udGVzdChjKSkge1xyXG4gICAgICB0b2tlbihjb250ZW50LmpvaW4oJycpKVxyXG4gICAgICBtb2RlID0gTk9STUFMXHJcbiAgICAgIHJldHVybiBpXHJcbiAgICB9XHJcblxyXG4gICAgY29udGVudC5wdXNoKGMpXHJcbiAgICBsYXN0ID0gY1xyXG4gICAgcmV0dXJuIGkgKyAxXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZWFkdG9rZW4oKSB7XHJcbiAgICBpZigvW15cXGRcXHdfXS8udGVzdChjKSkge1xyXG4gICAgICB2YXIgY29udGVudHN0ciA9IGNvbnRlbnQuam9pbignJylcclxuICAgICAgaWYobGl0ZXJhbHNEaWN0W2NvbnRlbnRzdHJdKSB7XHJcbiAgICAgICAgbW9kZSA9IEtFWVdPUkRcclxuICAgICAgfSBlbHNlIGlmKGJ1aWx0aW5zRGljdFtjb250ZW50c3RyXSkge1xyXG4gICAgICAgIG1vZGUgPSBCVUlMVElOXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbW9kZSA9IElERU5UXHJcbiAgICAgIH1cclxuICAgICAgdG9rZW4oY29udGVudC5qb2luKCcnKSlcclxuICAgICAgbW9kZSA9IE5PUk1BTFxyXG4gICAgICByZXR1cm4gaVxyXG4gICAgfVxyXG4gICAgY29udGVudC5wdXNoKGMpXHJcbiAgICBsYXN0ID0gY1xyXG4gICAgcmV0dXJuIGkgKyAxXHJcbiAgfVxyXG59XHJcbiIsIi8vIDMwMGVzIGJ1aWx0aW5zL3Jlc2VydmVkIHdvcmRzIHRoYXQgd2VyZSBwcmV2aW91c2x5IHZhbGlkIGluIHYxMDBcclxudmFyIHYxMDAgPSByZXF1aXJlKCcuL2J1aWx0aW5zJylcclxuXHJcbi8vIFRoZSB0ZXh0dXJlMkR8Q3ViZSBmdW5jdGlvbnMgaGF2ZSBiZWVuIHJlbW92ZWRcclxuLy8gQW5kIHRoZSBnbF8gZmVhdHVyZXMgYXJlIHVwZGF0ZWRcclxudjEwMCA9IHYxMDAuc2xpY2UoKS5maWx0ZXIoZnVuY3Rpb24gKGIpIHtcclxuICByZXR1cm4gIS9eKGdsXFxffHRleHR1cmUpLy50ZXN0KGIpXHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHYxMDAuY29uY2F0KFtcclxuICAvLyB0aGUgdXBkYXRlZCBnbF8gY29uc3RhbnRzXHJcbiAgICAnZ2xfVmVydGV4SUQnXHJcbiAgLCAnZ2xfSW5zdGFuY2VJRCdcclxuICAsICdnbF9Qb3NpdGlvbidcclxuICAsICdnbF9Qb2ludFNpemUnXHJcbiAgLCAnZ2xfRnJhZ0Nvb3JkJ1xyXG4gICwgJ2dsX0Zyb250RmFjaW5nJ1xyXG4gICwgJ2dsX0ZyYWdEZXB0aCdcclxuICAsICdnbF9Qb2ludENvb3JkJ1xyXG4gICwgJ2dsX01heFZlcnRleEF0dHJpYnMnXHJcbiAgLCAnZ2xfTWF4VmVydGV4VW5pZm9ybVZlY3RvcnMnXHJcbiAgLCAnZ2xfTWF4VmVydGV4T3V0cHV0VmVjdG9ycydcclxuICAsICdnbF9NYXhGcmFnbWVudElucHV0VmVjdG9ycydcclxuICAsICdnbF9NYXhWZXJ0ZXhUZXh0dXJlSW1hZ2VVbml0cydcclxuICAsICdnbF9NYXhDb21iaW5lZFRleHR1cmVJbWFnZVVuaXRzJ1xyXG4gICwgJ2dsX01heFRleHR1cmVJbWFnZVVuaXRzJ1xyXG4gICwgJ2dsX01heEZyYWdtZW50VW5pZm9ybVZlY3RvcnMnXHJcbiAgLCAnZ2xfTWF4RHJhd0J1ZmZlcnMnXHJcbiAgLCAnZ2xfTWluUHJvZ3JhbVRleGVsT2Zmc2V0J1xyXG4gICwgJ2dsX01heFByb2dyYW1UZXhlbE9mZnNldCdcclxuICAsICdnbF9EZXB0aFJhbmdlUGFyYW1ldGVycydcclxuICAsICdnbF9EZXB0aFJhbmdlJ1xyXG5cclxuICAvLyBvdGhlciBidWlsdGluc1xyXG4gICwgJ3RydW5jJ1xyXG4gICwgJ3JvdW5kJ1xyXG4gICwgJ3JvdW5kRXZlbidcclxuICAsICdpc25hbidcclxuICAsICdpc2luZidcclxuICAsICdmbG9hdEJpdHNUb0ludCdcclxuICAsICdmbG9hdEJpdHNUb1VpbnQnXHJcbiAgLCAnaW50Qml0c1RvRmxvYXQnXHJcbiAgLCAndWludEJpdHNUb0Zsb2F0J1xyXG4gICwgJ3BhY2tTbm9ybTJ4MTYnXHJcbiAgLCAndW5wYWNrU25vcm0yeDE2J1xyXG4gICwgJ3BhY2tVbm9ybTJ4MTYnXHJcbiAgLCAndW5wYWNrVW5vcm0yeDE2J1xyXG4gICwgJ3BhY2tIYWxmMngxNidcclxuICAsICd1bnBhY2tIYWxmMngxNidcclxuICAsICdvdXRlclByb2R1Y3QnXHJcbiAgLCAndHJhbnNwb3NlJ1xyXG4gICwgJ2RldGVybWluYW50J1xyXG4gICwgJ2ludmVyc2UnXHJcbiAgLCAndGV4dHVyZSdcclxuICAsICd0ZXh0dXJlU2l6ZSdcclxuICAsICd0ZXh0dXJlUHJvaidcclxuICAsICd0ZXh0dXJlTG9kJ1xyXG4gICwgJ3RleHR1cmVPZmZzZXQnXHJcbiAgLCAndGV4ZWxGZXRjaCdcclxuICAsICd0ZXhlbEZldGNoT2Zmc2V0J1xyXG4gICwgJ3RleHR1cmVQcm9qT2Zmc2V0J1xyXG4gICwgJ3RleHR1cmVMb2RPZmZzZXQnXHJcbiAgLCAndGV4dHVyZVByb2pMb2QnXHJcbiAgLCAndGV4dHVyZVByb2pMb2RPZmZzZXQnXHJcbiAgLCAndGV4dHVyZUdyYWQnXHJcbiAgLCAndGV4dHVyZUdyYWRPZmZzZXQnXHJcbiAgLCAndGV4dHVyZVByb2pHcmFkJ1xyXG4gICwgJ3RleHR1cmVQcm9qR3JhZE9mZnNldCdcclxuXSlcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBbXHJcbiAgLy8gS2VlcCB0aGlzIGxpc3Qgc29ydGVkXHJcbiAgJ2FicydcclxuICAsICdhY29zJ1xyXG4gICwgJ2FsbCdcclxuICAsICdhbnknXHJcbiAgLCAnYXNpbidcclxuICAsICdhdGFuJ1xyXG4gICwgJ2NlaWwnXHJcbiAgLCAnY2xhbXAnXHJcbiAgLCAnY29zJ1xyXG4gICwgJ2Nyb3NzJ1xyXG4gICwgJ2RGZHgnXHJcbiAgLCAnZEZkeSdcclxuICAsICdkZWdyZWVzJ1xyXG4gICwgJ2Rpc3RhbmNlJ1xyXG4gICwgJ2RvdCdcclxuICAsICdlcXVhbCdcclxuICAsICdleHAnXHJcbiAgLCAnZXhwMidcclxuICAsICdmYWNlZm9yd2FyZCdcclxuICAsICdmbG9vcidcclxuICAsICdmcmFjdCdcclxuICAsICdnbF9CYWNrQ29sb3InXHJcbiAgLCAnZ2xfQmFja0xpZ2h0TW9kZWxQcm9kdWN0J1xyXG4gICwgJ2dsX0JhY2tMaWdodFByb2R1Y3QnXHJcbiAgLCAnZ2xfQmFja01hdGVyaWFsJ1xyXG4gICwgJ2dsX0JhY2tTZWNvbmRhcnlDb2xvcidcclxuICAsICdnbF9DbGlwUGxhbmUnXHJcbiAgLCAnZ2xfQ2xpcFZlcnRleCdcclxuICAsICdnbF9Db2xvcidcclxuICAsICdnbF9EZXB0aFJhbmdlJ1xyXG4gICwgJ2dsX0RlcHRoUmFuZ2VQYXJhbWV0ZXJzJ1xyXG4gICwgJ2dsX0V5ZVBsYW5lUSdcclxuICAsICdnbF9FeWVQbGFuZVInXHJcbiAgLCAnZ2xfRXllUGxhbmVTJ1xyXG4gICwgJ2dsX0V5ZVBsYW5lVCdcclxuICAsICdnbF9Gb2cnXHJcbiAgLCAnZ2xfRm9nQ29vcmQnXHJcbiAgLCAnZ2xfRm9nRnJhZ0Nvb3JkJ1xyXG4gICwgJ2dsX0ZvZ1BhcmFtZXRlcnMnXHJcbiAgLCAnZ2xfRnJhZ0NvbG9yJ1xyXG4gICwgJ2dsX0ZyYWdDb29yZCdcclxuICAsICdnbF9GcmFnRGF0YSdcclxuICAsICdnbF9GcmFnRGVwdGgnXHJcbiAgLCAnZ2xfRnJhZ0RlcHRoRVhUJ1xyXG4gICwgJ2dsX0Zyb250Q29sb3InXHJcbiAgLCAnZ2xfRnJvbnRGYWNpbmcnXHJcbiAgLCAnZ2xfRnJvbnRMaWdodE1vZGVsUHJvZHVjdCdcclxuICAsICdnbF9Gcm9udExpZ2h0UHJvZHVjdCdcclxuICAsICdnbF9Gcm9udE1hdGVyaWFsJ1xyXG4gICwgJ2dsX0Zyb250U2Vjb25kYXJ5Q29sb3InXHJcbiAgLCAnZ2xfTGlnaHRNb2RlbCdcclxuICAsICdnbF9MaWdodE1vZGVsUGFyYW1ldGVycydcclxuICAsICdnbF9MaWdodE1vZGVsUHJvZHVjdHMnXHJcbiAgLCAnZ2xfTGlnaHRQcm9kdWN0cydcclxuICAsICdnbF9MaWdodFNvdXJjZSdcclxuICAsICdnbF9MaWdodFNvdXJjZVBhcmFtZXRlcnMnXHJcbiAgLCAnZ2xfTWF0ZXJpYWxQYXJhbWV0ZXJzJ1xyXG4gICwgJ2dsX01heENsaXBQbGFuZXMnXHJcbiAgLCAnZ2xfTWF4Q29tYmluZWRUZXh0dXJlSW1hZ2VVbml0cydcclxuICAsICdnbF9NYXhEcmF3QnVmZmVycydcclxuICAsICdnbF9NYXhGcmFnbWVudFVuaWZvcm1Db21wb25lbnRzJ1xyXG4gICwgJ2dsX01heExpZ2h0cydcclxuICAsICdnbF9NYXhUZXh0dXJlQ29vcmRzJ1xyXG4gICwgJ2dsX01heFRleHR1cmVJbWFnZVVuaXRzJ1xyXG4gICwgJ2dsX01heFRleHR1cmVVbml0cydcclxuICAsICdnbF9NYXhWYXJ5aW5nRmxvYXRzJ1xyXG4gICwgJ2dsX01heFZlcnRleEF0dHJpYnMnXHJcbiAgLCAnZ2xfTWF4VmVydGV4VGV4dHVyZUltYWdlVW5pdHMnXHJcbiAgLCAnZ2xfTWF4VmVydGV4VW5pZm9ybUNvbXBvbmVudHMnXHJcbiAgLCAnZ2xfTW9kZWxWaWV3TWF0cml4J1xyXG4gICwgJ2dsX01vZGVsVmlld01hdHJpeEludmVyc2UnXHJcbiAgLCAnZ2xfTW9kZWxWaWV3TWF0cml4SW52ZXJzZVRyYW5zcG9zZSdcclxuICAsICdnbF9Nb2RlbFZpZXdNYXRyaXhUcmFuc3Bvc2UnXHJcbiAgLCAnZ2xfTW9kZWxWaWV3UHJvamVjdGlvbk1hdHJpeCdcclxuICAsICdnbF9Nb2RlbFZpZXdQcm9qZWN0aW9uTWF0cml4SW52ZXJzZSdcclxuICAsICdnbF9Nb2RlbFZpZXdQcm9qZWN0aW9uTWF0cml4SW52ZXJzZVRyYW5zcG9zZSdcclxuICAsICdnbF9Nb2RlbFZpZXdQcm9qZWN0aW9uTWF0cml4VHJhbnNwb3NlJ1xyXG4gICwgJ2dsX011bHRpVGV4Q29vcmQwJ1xyXG4gICwgJ2dsX011bHRpVGV4Q29vcmQxJ1xyXG4gICwgJ2dsX011bHRpVGV4Q29vcmQyJ1xyXG4gICwgJ2dsX011bHRpVGV4Q29vcmQzJ1xyXG4gICwgJ2dsX011bHRpVGV4Q29vcmQ0J1xyXG4gICwgJ2dsX011bHRpVGV4Q29vcmQ1J1xyXG4gICwgJ2dsX011bHRpVGV4Q29vcmQ2J1xyXG4gICwgJ2dsX011bHRpVGV4Q29vcmQ3J1xyXG4gICwgJ2dsX05vcm1hbCdcclxuICAsICdnbF9Ob3JtYWxNYXRyaXgnXHJcbiAgLCAnZ2xfTm9ybWFsU2NhbGUnXHJcbiAgLCAnZ2xfT2JqZWN0UGxhbmVRJ1xyXG4gICwgJ2dsX09iamVjdFBsYW5lUidcclxuICAsICdnbF9PYmplY3RQbGFuZVMnXHJcbiAgLCAnZ2xfT2JqZWN0UGxhbmVUJ1xyXG4gICwgJ2dsX1BvaW50J1xyXG4gICwgJ2dsX1BvaW50Q29vcmQnXHJcbiAgLCAnZ2xfUG9pbnRQYXJhbWV0ZXJzJ1xyXG4gICwgJ2dsX1BvaW50U2l6ZSdcclxuICAsICdnbF9Qb3NpdGlvbidcclxuICAsICdnbF9Qcm9qZWN0aW9uTWF0cml4J1xyXG4gICwgJ2dsX1Byb2plY3Rpb25NYXRyaXhJbnZlcnNlJ1xyXG4gICwgJ2dsX1Byb2plY3Rpb25NYXRyaXhJbnZlcnNlVHJhbnNwb3NlJ1xyXG4gICwgJ2dsX1Byb2plY3Rpb25NYXRyaXhUcmFuc3Bvc2UnXHJcbiAgLCAnZ2xfU2Vjb25kYXJ5Q29sb3InXHJcbiAgLCAnZ2xfVGV4Q29vcmQnXHJcbiAgLCAnZ2xfVGV4dHVyZUVudkNvbG9yJ1xyXG4gICwgJ2dsX1RleHR1cmVNYXRyaXgnXHJcbiAgLCAnZ2xfVGV4dHVyZU1hdHJpeEludmVyc2UnXHJcbiAgLCAnZ2xfVGV4dHVyZU1hdHJpeEludmVyc2VUcmFuc3Bvc2UnXHJcbiAgLCAnZ2xfVGV4dHVyZU1hdHJpeFRyYW5zcG9zZSdcclxuICAsICdnbF9WZXJ0ZXgnXHJcbiAgLCAnZ3JlYXRlclRoYW4nXHJcbiAgLCAnZ3JlYXRlclRoYW5FcXVhbCdcclxuICAsICdpbnZlcnNlc3FydCdcclxuICAsICdsZW5ndGgnXHJcbiAgLCAnbGVzc1RoYW4nXHJcbiAgLCAnbGVzc1RoYW5FcXVhbCdcclxuICAsICdsb2cnXHJcbiAgLCAnbG9nMidcclxuICAsICdtYXRyaXhDb21wTXVsdCdcclxuICAsICdtYXgnXHJcbiAgLCAnbWluJ1xyXG4gICwgJ21peCdcclxuICAsICdtb2QnXHJcbiAgLCAnbm9ybWFsaXplJ1xyXG4gICwgJ25vdCdcclxuICAsICdub3RFcXVhbCdcclxuICAsICdwb3cnXHJcbiAgLCAncmFkaWFucydcclxuICAsICdyZWZsZWN0J1xyXG4gICwgJ3JlZnJhY3QnXHJcbiAgLCAnc2lnbidcclxuICAsICdzaW4nXHJcbiAgLCAnc21vb3Roc3RlcCdcclxuICAsICdzcXJ0J1xyXG4gICwgJ3N0ZXAnXHJcbiAgLCAndGFuJ1xyXG4gICwgJ3RleHR1cmUyRCdcclxuICAsICd0ZXh0dXJlMkRMb2QnXHJcbiAgLCAndGV4dHVyZTJEUHJvaidcclxuICAsICd0ZXh0dXJlMkRQcm9qTG9kJ1xyXG4gICwgJ3RleHR1cmVDdWJlJ1xyXG4gICwgJ3RleHR1cmVDdWJlTG9kJ1xyXG4gICwgJ3RleHR1cmUyRExvZEVYVCdcclxuICAsICd0ZXh0dXJlMkRQcm9qTG9kRVhUJ1xyXG4gICwgJ3RleHR1cmVDdWJlTG9kRVhUJ1xyXG4gICwgJ3RleHR1cmUyREdyYWRFWFQnXHJcbiAgLCAndGV4dHVyZTJEUHJvakdyYWRFWFQnXHJcbiAgLCAndGV4dHVyZUN1YmVHcmFkRVhUJ1xyXG5dXHJcbiIsInZhciB2MTAwID0gcmVxdWlyZSgnLi9saXRlcmFscycpXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHYxMDAuc2xpY2UoKS5jb25jYXQoW1xyXG4gICAnbGF5b3V0J1xyXG4gICwgJ2NlbnRyb2lkJ1xyXG4gICwgJ3Ntb290aCdcclxuICAsICdjYXNlJ1xyXG4gICwgJ21hdDJ4MidcclxuICAsICdtYXQyeDMnXHJcbiAgLCAnbWF0Mng0J1xyXG4gICwgJ21hdDN4MidcclxuICAsICdtYXQzeDMnXHJcbiAgLCAnbWF0M3g0J1xyXG4gICwgJ21hdDR4MidcclxuICAsICdtYXQ0eDMnXHJcbiAgLCAnbWF0NHg0J1xyXG4gICwgJ3V2ZWMyJ1xyXG4gICwgJ3V2ZWMzJ1xyXG4gICwgJ3V2ZWM0J1xyXG4gICwgJ3NhbXBsZXJDdWJlU2hhZG93J1xyXG4gICwgJ3NhbXBsZXIyREFycmF5J1xyXG4gICwgJ3NhbXBsZXIyREFycmF5U2hhZG93J1xyXG4gICwgJ2lzYW1wbGVyMkQnXHJcbiAgLCAnaXNhbXBsZXIzRCdcclxuICAsICdpc2FtcGxlckN1YmUnXHJcbiAgLCAnaXNhbXBsZXIyREFycmF5J1xyXG4gICwgJ3VzYW1wbGVyMkQnXHJcbiAgLCAndXNhbXBsZXIzRCdcclxuICAsICd1c2FtcGxlckN1YmUnXHJcbiAgLCAndXNhbXBsZXIyREFycmF5J1xyXG4gICwgJ2NvaGVyZW50J1xyXG4gICwgJ3Jlc3RyaWN0J1xyXG4gICwgJ3JlYWRvbmx5J1xyXG4gICwgJ3dyaXRlb25seSdcclxuICAsICdyZXNvdXJjZSdcclxuICAsICdhdG9taWNfdWludCdcclxuICAsICdub3BlcnNwZWN0aXZlJ1xyXG4gICwgJ3BhdGNoJ1xyXG4gICwgJ3NhbXBsZSdcclxuICAsICdzdWJyb3V0aW5lJ1xyXG4gICwgJ2NvbW1vbidcclxuICAsICdwYXJ0aXRpb24nXHJcbiAgLCAnYWN0aXZlJ1xyXG4gICwgJ2ZpbHRlcidcclxuICAsICdpbWFnZTFEJ1xyXG4gICwgJ2ltYWdlMkQnXHJcbiAgLCAnaW1hZ2UzRCdcclxuICAsICdpbWFnZUN1YmUnXHJcbiAgLCAnaWltYWdlMUQnXHJcbiAgLCAnaWltYWdlMkQnXHJcbiAgLCAnaWltYWdlM0QnXHJcbiAgLCAnaWltYWdlQ3ViZSdcclxuICAsICd1aW1hZ2UxRCdcclxuICAsICd1aW1hZ2UyRCdcclxuICAsICd1aW1hZ2UzRCdcclxuICAsICd1aW1hZ2VDdWJlJ1xyXG4gICwgJ2ltYWdlMURBcnJheSdcclxuICAsICdpbWFnZTJEQXJyYXknXHJcbiAgLCAnaWltYWdlMURBcnJheSdcclxuICAsICdpaW1hZ2UyREFycmF5J1xyXG4gICwgJ3VpbWFnZTFEQXJyYXknXHJcbiAgLCAndWltYWdlMkRBcnJheSdcclxuICAsICdpbWFnZTFEU2hhZG93J1xyXG4gICwgJ2ltYWdlMkRTaGFkb3cnXHJcbiAgLCAnaW1hZ2UxREFycmF5U2hhZG93J1xyXG4gICwgJ2ltYWdlMkRBcnJheVNoYWRvdydcclxuICAsICdpbWFnZUJ1ZmZlcidcclxuICAsICdpaW1hZ2VCdWZmZXInXHJcbiAgLCAndWltYWdlQnVmZmVyJ1xyXG4gICwgJ3NhbXBsZXIxREFycmF5J1xyXG4gICwgJ3NhbXBsZXIxREFycmF5U2hhZG93J1xyXG4gICwgJ2lzYW1wbGVyMUQnXHJcbiAgLCAnaXNhbXBsZXIxREFycmF5J1xyXG4gICwgJ3VzYW1wbGVyMUQnXHJcbiAgLCAndXNhbXBsZXIxREFycmF5J1xyXG4gICwgJ2lzYW1wbGVyMkRSZWN0J1xyXG4gICwgJ3VzYW1wbGVyMkRSZWN0J1xyXG4gICwgJ3NhbXBsZXJCdWZmZXInXHJcbiAgLCAnaXNhbXBsZXJCdWZmZXInXHJcbiAgLCAndXNhbXBsZXJCdWZmZXInXHJcbiAgLCAnc2FtcGxlcjJETVMnXHJcbiAgLCAnaXNhbXBsZXIyRE1TJ1xyXG4gICwgJ3VzYW1wbGVyMkRNUydcclxuICAsICdzYW1wbGVyMkRNU0FycmF5J1xyXG4gICwgJ2lzYW1wbGVyMkRNU0FycmF5J1xyXG4gICwgJ3VzYW1wbGVyMkRNU0FycmF5J1xyXG5dKVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFtcclxuICAvLyBjdXJyZW50XHJcbiAgICAncHJlY2lzaW9uJ1xyXG4gICwgJ2hpZ2hwJ1xyXG4gICwgJ21lZGl1bXAnXHJcbiAgLCAnbG93cCdcclxuICAsICdhdHRyaWJ1dGUnXHJcbiAgLCAnY29uc3QnXHJcbiAgLCAndW5pZm9ybSdcclxuICAsICd2YXJ5aW5nJ1xyXG4gICwgJ2JyZWFrJ1xyXG4gICwgJ2NvbnRpbnVlJ1xyXG4gICwgJ2RvJ1xyXG4gICwgJ2ZvcidcclxuICAsICd3aGlsZSdcclxuICAsICdpZidcclxuICAsICdlbHNlJ1xyXG4gICwgJ2luJ1xyXG4gICwgJ291dCdcclxuICAsICdpbm91dCdcclxuICAsICdmbG9hdCdcclxuICAsICdpbnQnXHJcbiAgLCAndWludCdcclxuICAsICd2b2lkJ1xyXG4gICwgJ2Jvb2wnXHJcbiAgLCAndHJ1ZSdcclxuICAsICdmYWxzZSdcclxuICAsICdkaXNjYXJkJ1xyXG4gICwgJ3JldHVybidcclxuICAsICdtYXQyJ1xyXG4gICwgJ21hdDMnXHJcbiAgLCAnbWF0NCdcclxuICAsICd2ZWMyJ1xyXG4gICwgJ3ZlYzMnXHJcbiAgLCAndmVjNCdcclxuICAsICdpdmVjMidcclxuICAsICdpdmVjMydcclxuICAsICdpdmVjNCdcclxuICAsICdidmVjMidcclxuICAsICdidmVjMydcclxuICAsICdidmVjNCdcclxuICAsICdzYW1wbGVyMUQnXHJcbiAgLCAnc2FtcGxlcjJEJ1xyXG4gICwgJ3NhbXBsZXIzRCdcclxuICAsICdzYW1wbGVyQ3ViZSdcclxuICAsICdzYW1wbGVyMURTaGFkb3cnXHJcbiAgLCAnc2FtcGxlcjJEU2hhZG93J1xyXG4gICwgJ3N0cnVjdCdcclxuXHJcbiAgLy8gZnV0dXJlXHJcbiAgLCAnYXNtJ1xyXG4gICwgJ2NsYXNzJ1xyXG4gICwgJ3VuaW9uJ1xyXG4gICwgJ2VudW0nXHJcbiAgLCAndHlwZWRlZidcclxuICAsICd0ZW1wbGF0ZSdcclxuICAsICd0aGlzJ1xyXG4gICwgJ3BhY2tlZCdcclxuICAsICdnb3RvJ1xyXG4gICwgJ3N3aXRjaCdcclxuICAsICdkZWZhdWx0J1xyXG4gICwgJ2lubGluZSdcclxuICAsICdub2lubGluZSdcclxuICAsICd2b2xhdGlsZSdcclxuICAsICdwdWJsaWMnXHJcbiAgLCAnc3RhdGljJ1xyXG4gICwgJ2V4dGVybidcclxuICAsICdleHRlcm5hbCdcclxuICAsICdpbnRlcmZhY2UnXHJcbiAgLCAnbG9uZydcclxuICAsICdzaG9ydCdcclxuICAsICdkb3VibGUnXHJcbiAgLCAnaGFsZidcclxuICAsICdmaXhlZCdcclxuICAsICd1bnNpZ25lZCdcclxuICAsICdpbnB1dCdcclxuICAsICdvdXRwdXQnXHJcbiAgLCAnaHZlYzInXHJcbiAgLCAnaHZlYzMnXHJcbiAgLCAnaHZlYzQnXHJcbiAgLCAnZHZlYzInXHJcbiAgLCAnZHZlYzMnXHJcbiAgLCAnZHZlYzQnXHJcbiAgLCAnZnZlYzInXHJcbiAgLCAnZnZlYzMnXHJcbiAgLCAnZnZlYzQnXHJcbiAgLCAnc2FtcGxlcjJEUmVjdCdcclxuICAsICdzYW1wbGVyM0RSZWN0J1xyXG4gICwgJ3NhbXBsZXIyRFJlY3RTaGFkb3cnXHJcbiAgLCAnc2l6ZW9mJ1xyXG4gICwgJ2Nhc3QnXHJcbiAgLCAnbmFtZXNwYWNlJ1xyXG4gICwgJ3VzaW5nJ1xyXG5dXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gW1xyXG4gICAgJzw8PSdcclxuICAsICc+Pj0nXHJcbiAgLCAnKysnXHJcbiAgLCAnLS0nXHJcbiAgLCAnPDwnXHJcbiAgLCAnPj4nXHJcbiAgLCAnPD0nXHJcbiAgLCAnPj0nXHJcbiAgLCAnPT0nXHJcbiAgLCAnIT0nXHJcbiAgLCAnJiYnXHJcbiAgLCAnfHwnXHJcbiAgLCAnKz0nXHJcbiAgLCAnLT0nXHJcbiAgLCAnKj0nXHJcbiAgLCAnLz0nXHJcbiAgLCAnJT0nXHJcbiAgLCAnJj0nXHJcbiAgLCAnXl4nXHJcbiAgLCAnXj0nXHJcbiAgLCAnfD0nXHJcbiAgLCAnKCdcclxuICAsICcpJ1xyXG4gICwgJ1snXHJcbiAgLCAnXSdcclxuICAsICcuJ1xyXG4gICwgJyEnXHJcbiAgLCAnfidcclxuICAsICcqJ1xyXG4gICwgJy8nXHJcbiAgLCAnJSdcclxuICAsICcrJ1xyXG4gICwgJy0nXHJcbiAgLCAnPCdcclxuICAsICc+J1xyXG4gICwgJyYnXHJcbiAgLCAnXidcclxuICAsICd8J1xyXG4gICwgJz8nXHJcbiAgLCAnOidcclxuICAsICc9J1xyXG4gICwgJywnXHJcbiAgLCAnOydcclxuICAsICd7J1xyXG4gICwgJ30nXHJcbl1cclxuIiwidmFyIHRva2VuaXplID0gcmVxdWlyZSgnLi9pbmRleCcpXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHRva2VuaXplU3RyaW5nXHJcblxyXG5mdW5jdGlvbiB0b2tlbml6ZVN0cmluZyhzdHIsIG9wdCkge1xyXG4gIHZhciBnZW5lcmF0b3IgPSB0b2tlbml6ZShvcHQpXHJcbiAgdmFyIHRva2VucyA9IFtdXHJcblxyXG4gIHRva2VucyA9IHRva2Vucy5jb25jYXQoZ2VuZXJhdG9yKHN0cikpXHJcbiAgdG9rZW5zID0gdG9rZW5zLmNvbmNhdChnZW5lcmF0b3IobnVsbCkpXHJcblxyXG4gIHJldHVybiB0b2tlbnNcclxufVxyXG4iLCIvKiEgaWVlZTc1NC4gQlNELTMtQ2xhdXNlIExpY2Vuc2UuIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZy9vcGVuc291cmNlPiAqL1xuZXhwb3J0cy5yZWFkID0gZnVuY3Rpb24gKGJ1ZmZlciwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG1cbiAgdmFyIGVMZW4gPSAobkJ5dGVzICogOCkgLSBtTGVuIC0gMVxuICB2YXIgZU1heCA9ICgxIDw8IGVMZW4pIC0gMVxuICB2YXIgZUJpYXMgPSBlTWF4ID4+IDFcbiAgdmFyIG5CaXRzID0gLTdcbiAgdmFyIGkgPSBpc0xFID8gKG5CeXRlcyAtIDEpIDogMFxuICB2YXIgZCA9IGlzTEUgPyAtMSA6IDFcbiAgdmFyIHMgPSBidWZmZXJbb2Zmc2V0ICsgaV1cblxuICBpICs9IGRcblxuICBlID0gcyAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKVxuICBzID4+PSAoLW5CaXRzKVxuICBuQml0cyArPSBlTGVuXG4gIGZvciAoOyBuQml0cyA+IDA7IGUgPSAoZSAqIDI1NikgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCkge31cblxuICBtID0gZSAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKVxuICBlID4+PSAoLW5CaXRzKVxuICBuQml0cyArPSBtTGVuXG4gIGZvciAoOyBuQml0cyA+IDA7IG0gPSAobSAqIDI1NikgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCkge31cblxuICBpZiAoZSA9PT0gMCkge1xuICAgIGUgPSAxIC0gZUJpYXNcbiAgfSBlbHNlIGlmIChlID09PSBlTWF4KSB7XG4gICAgcmV0dXJuIG0gPyBOYU4gOiAoKHMgPyAtMSA6IDEpICogSW5maW5pdHkpXG4gIH0gZWxzZSB7XG4gICAgbSA9IG0gKyBNYXRoLnBvdygyLCBtTGVuKVxuICAgIGUgPSBlIC0gZUJpYXNcbiAgfVxuICByZXR1cm4gKHMgPyAtMSA6IDEpICogbSAqIE1hdGgucG93KDIsIGUgLSBtTGVuKVxufVxuXG5leHBvcnRzLndyaXRlID0gZnVuY3Rpb24gKGJ1ZmZlciwgdmFsdWUsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtLCBjXG4gIHZhciBlTGVuID0gKG5CeXRlcyAqIDgpIC0gbUxlbiAtIDFcbiAgdmFyIGVNYXggPSAoMSA8PCBlTGVuKSAtIDFcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxXG4gIHZhciBydCA9IChtTGVuID09PSAyMyA/IE1hdGgucG93KDIsIC0yNCkgLSBNYXRoLnBvdygyLCAtNzcpIDogMClcbiAgdmFyIGkgPSBpc0xFID8gMCA6IChuQnl0ZXMgLSAxKVxuICB2YXIgZCA9IGlzTEUgPyAxIDogLTFcbiAgdmFyIHMgPSB2YWx1ZSA8IDAgfHwgKHZhbHVlID09PSAwICYmIDEgLyB2YWx1ZSA8IDApID8gMSA6IDBcblxuICB2YWx1ZSA9IE1hdGguYWJzKHZhbHVlKVxuXG4gIGlmIChpc05hTih2YWx1ZSkgfHwgdmFsdWUgPT09IEluZmluaXR5KSB7XG4gICAgbSA9IGlzTmFOKHZhbHVlKSA/IDEgOiAwXG4gICAgZSA9IGVNYXhcbiAgfSBlbHNlIHtcbiAgICBlID0gTWF0aC5mbG9vcihNYXRoLmxvZyh2YWx1ZSkgLyBNYXRoLkxOMilcbiAgICBpZiAodmFsdWUgKiAoYyA9IE1hdGgucG93KDIsIC1lKSkgPCAxKSB7XG4gICAgICBlLS1cbiAgICAgIGMgKj0gMlxuICAgIH1cbiAgICBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIHZhbHVlICs9IHJ0IC8gY1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSArPSBydCAqIE1hdGgucG93KDIsIDEgLSBlQmlhcylcbiAgICB9XG4gICAgaWYgKHZhbHVlICogYyA+PSAyKSB7XG4gICAgICBlKytcbiAgICAgIGMgLz0gMlxuICAgIH1cblxuICAgIGlmIChlICsgZUJpYXMgPj0gZU1heCkge1xuICAgICAgbSA9IDBcbiAgICAgIGUgPSBlTWF4XG4gICAgfSBlbHNlIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgbSA9ICgodmFsdWUgKiBjKSAtIDEpICogTWF0aC5wb3coMiwgbUxlbilcbiAgICAgIGUgPSBlICsgZUJpYXNcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IHZhbHVlICogTWF0aC5wb3coMiwgZUJpYXMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pXG4gICAgICBlID0gMFxuICAgIH1cbiAgfVxuXG4gIGZvciAoOyBtTGVuID49IDg7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IG0gJiAweGZmLCBpICs9IGQsIG0gLz0gMjU2LCBtTGVuIC09IDgpIHt9XG5cbiAgZSA9IChlIDw8IG1MZW4pIHwgbVxuICBlTGVuICs9IG1MZW5cbiAgZm9yICg7IGVMZW4gPiAwOyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBlICYgMHhmZiwgaSArPSBkLCBlIC89IDI1NiwgZUxlbiAtPSA4KSB7fVxuXG4gIGJ1ZmZlcltvZmZzZXQgKyBpIC0gZF0gfD0gcyAqIDEyOFxufVxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxuZnVuY3Rpb24gaW90YShuKSB7XG4gIHZhciByZXN1bHQgPSBuZXcgQXJyYXkobilcbiAgZm9yKHZhciBpPTA7IGk8bjsgKytpKSB7XG4gICAgcmVzdWx0W2ldID0gaVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpb3RhIiwiLyohXG4gKiBEZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGlzIGEgQnVmZmVyXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG4vLyBUaGUgX2lzQnVmZmVyIGNoZWNrIGlzIGZvciBTYWZhcmkgNS03IHN1cHBvcnQsIGJlY2F1c2UgaXQncyBtaXNzaW5nXG4vLyBPYmplY3QucHJvdG90eXBlLmNvbnN0cnVjdG9yLiBSZW1vdmUgdGhpcyBldmVudHVhbGx5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIChpc0J1ZmZlcihvYmopIHx8IGlzU2xvd0J1ZmZlcihvYmopIHx8ICEhb2JqLl9pc0J1ZmZlcilcbn1cblxuZnVuY3Rpb24gaXNCdWZmZXIgKG9iaikge1xuICByZXR1cm4gISFvYmouY29uc3RydWN0b3IgJiYgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKVxufVxuXG4vLyBGb3IgTm9kZSB2MC4xMCBzdXBwb3J0LiBSZW1vdmUgdGhpcyBldmVudHVhbGx5LlxuZnVuY3Rpb24gaXNTbG93QnVmZmVyIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmoucmVhZEZsb2F0TEUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG9iai5zbGljZSA9PT0gJ2Z1bmN0aW9uJyAmJiBpc0J1ZmZlcihvYmouc2xpY2UoMCwgMCkpXG59XG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoYXJyKSA9PSAnW29iamVjdCBBcnJheV0nO1xufTtcbiIsIlwidXNlIHN0cmljdFwiXG5cbnZhciBjb21waWxlID0gcmVxdWlyZShcImN3aXNlLWNvbXBpbGVyXCIpXG5cbnZhciBFbXB0eVByb2MgPSB7XG4gIGJvZHk6IFwiXCIsXG4gIGFyZ3M6IFtdLFxuICB0aGlzVmFyczogW10sXG4gIGxvY2FsVmFyczogW11cbn1cblxuZnVuY3Rpb24gZml4dXAoeCkge1xuICBpZigheCkge1xuICAgIHJldHVybiBFbXB0eVByb2NcbiAgfVxuICBmb3IodmFyIGk9MDsgaTx4LmFyZ3MubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgYSA9IHguYXJnc1tpXVxuICAgIGlmKGkgPT09IDApIHtcbiAgICAgIHguYXJnc1tpXSA9IHtuYW1lOiBhLCBsdmFsdWU6dHJ1ZSwgcnZhbHVlOiAhIXgucnZhbHVlLCBjb3VudDp4LmNvdW50fHwxIH1cbiAgICB9IGVsc2Uge1xuICAgICAgeC5hcmdzW2ldID0ge25hbWU6IGEsIGx2YWx1ZTpmYWxzZSwgcnZhbHVlOnRydWUsIGNvdW50OiAxfVxuICAgIH1cbiAgfVxuICBpZigheC50aGlzVmFycykge1xuICAgIHgudGhpc1ZhcnMgPSBbXVxuICB9XG4gIGlmKCF4LmxvY2FsVmFycykge1xuICAgIHgubG9jYWxWYXJzID0gW11cbiAgfVxuICByZXR1cm4geFxufVxuXG5mdW5jdGlvbiBwY29tcGlsZSh1c2VyX2FyZ3MpIHtcbiAgcmV0dXJuIGNvbXBpbGUoe1xuICAgIGFyZ3M6ICAgICB1c2VyX2FyZ3MuYXJncyxcbiAgICBwcmU6ICAgICAgZml4dXAodXNlcl9hcmdzLnByZSksXG4gICAgYm9keTogICAgIGZpeHVwKHVzZXJfYXJncy5ib2R5KSxcbiAgICBwb3N0OiAgICAgZml4dXAodXNlcl9hcmdzLnByb2MpLFxuICAgIGZ1bmNOYW1lOiB1c2VyX2FyZ3MuZnVuY05hbWVcbiAgfSlcbn1cblxuZnVuY3Rpb24gbWFrZU9wKHVzZXJfYXJncykge1xuICB2YXIgYXJncyA9IFtdXG4gIGZvcih2YXIgaT0wOyBpPHVzZXJfYXJncy5hcmdzLmxlbmd0aDsgKytpKSB7XG4gICAgYXJncy5wdXNoKFwiYVwiK2kpXG4gIH1cbiAgdmFyIHdyYXBwZXIgPSBuZXcgRnVuY3Rpb24oXCJQXCIsIFtcbiAgICBcInJldHVybiBmdW5jdGlvbiBcIiwgdXNlcl9hcmdzLmZ1bmNOYW1lLCBcIl9uZGFycmF5b3BzKFwiLCBhcmdzLmpvaW4oXCIsXCIpLCBcIikge1AoXCIsIGFyZ3Muam9pbihcIixcIiksIFwiKTtyZXR1cm4gYTB9XCJcbiAgXS5qb2luKFwiXCIpKVxuICByZXR1cm4gd3JhcHBlcihwY29tcGlsZSh1c2VyX2FyZ3MpKVxufVxuXG52YXIgYXNzaWduX29wcyA9IHtcbiAgYWRkOiAgXCIrXCIsXG4gIHN1YjogIFwiLVwiLFxuICBtdWw6ICBcIipcIixcbiAgZGl2OiAgXCIvXCIsXG4gIG1vZDogIFwiJVwiLFxuICBiYW5kOiBcIiZcIixcbiAgYm9yOiAgXCJ8XCIsXG4gIGJ4b3I6IFwiXlwiLFxuICBsc2hpZnQ6IFwiPDxcIixcbiAgcnNoaWZ0OiBcIj4+XCIsXG4gIHJyc2hpZnQ6IFwiPj4+XCJcbn1cbjsoZnVuY3Rpb24oKXtcbiAgZm9yKHZhciBpZCBpbiBhc3NpZ25fb3BzKSB7XG4gICAgdmFyIG9wID0gYXNzaWduX29wc1tpZF1cbiAgICBleHBvcnRzW2lkXSA9IG1ha2VPcCh7XG4gICAgICBhcmdzOiBbXCJhcnJheVwiLFwiYXJyYXlcIixcImFycmF5XCJdLFxuICAgICAgYm9keToge2FyZ3M6W1wiYVwiLFwiYlwiLFwiY1wiXSxcbiAgICAgICAgICAgICBib2R5OiBcImE9YlwiK29wK1wiY1wifSxcbiAgICAgIGZ1bmNOYW1lOiBpZFxuICAgIH0pXG4gICAgZXhwb3J0c1tpZCtcImVxXCJdID0gbWFrZU9wKHtcbiAgICAgIGFyZ3M6IFtcImFycmF5XCIsXCJhcnJheVwiXSxcbiAgICAgIGJvZHk6IHthcmdzOltcImFcIixcImJcIl0sXG4gICAgICAgICAgICAgYm9keTpcImFcIitvcCtcIj1iXCJ9LFxuICAgICAgcnZhbHVlOiB0cnVlLFxuICAgICAgZnVuY05hbWU6IGlkK1wiZXFcIlxuICAgIH0pXG4gICAgZXhwb3J0c1tpZCtcInNcIl0gPSBtYWtlT3Aoe1xuICAgICAgYXJnczogW1wiYXJyYXlcIiwgXCJhcnJheVwiLCBcInNjYWxhclwiXSxcbiAgICAgIGJvZHk6IHthcmdzOltcImFcIixcImJcIixcInNcIl0sXG4gICAgICAgICAgICAgYm9keTpcImE9YlwiK29wK1wic1wifSxcbiAgICAgIGZ1bmNOYW1lOiBpZCtcInNcIlxuICAgIH0pXG4gICAgZXhwb3J0c1tpZCtcInNlcVwiXSA9IG1ha2VPcCh7XG4gICAgICBhcmdzOiBbXCJhcnJheVwiLFwic2NhbGFyXCJdLFxuICAgICAgYm9keToge2FyZ3M6W1wiYVwiLFwic1wiXSxcbiAgICAgICAgICAgICBib2R5OlwiYVwiK29wK1wiPXNcIn0sXG4gICAgICBydmFsdWU6IHRydWUsXG4gICAgICBmdW5jTmFtZTogaWQrXCJzZXFcIlxuICAgIH0pXG4gIH1cbn0pKCk7XG5cbnZhciB1bmFyeV9vcHMgPSB7XG4gIG5vdDogXCIhXCIsXG4gIGJub3Q6IFwiflwiLFxuICBuZWc6IFwiLVwiLFxuICByZWNpcDogXCIxLjAvXCJcbn1cbjsoZnVuY3Rpb24oKXtcbiAgZm9yKHZhciBpZCBpbiB1bmFyeV9vcHMpIHtcbiAgICB2YXIgb3AgPSB1bmFyeV9vcHNbaWRdXG4gICAgZXhwb3J0c1tpZF0gPSBtYWtlT3Aoe1xuICAgICAgYXJnczogW1wiYXJyYXlcIiwgXCJhcnJheVwiXSxcbiAgICAgIGJvZHk6IHthcmdzOltcImFcIixcImJcIl0sXG4gICAgICAgICAgICAgYm9keTpcImE9XCIrb3ArXCJiXCJ9LFxuICAgICAgZnVuY05hbWU6IGlkXG4gICAgfSlcbiAgICBleHBvcnRzW2lkK1wiZXFcIl0gPSBtYWtlT3Aoe1xuICAgICAgYXJnczogW1wiYXJyYXlcIl0sXG4gICAgICBib2R5OiB7YXJnczpbXCJhXCJdLFxuICAgICAgICAgICAgIGJvZHk6XCJhPVwiK29wK1wiYVwifSxcbiAgICAgIHJ2YWx1ZTogdHJ1ZSxcbiAgICAgIGNvdW50OiAyLFxuICAgICAgZnVuY05hbWU6IGlkK1wiZXFcIlxuICAgIH0pXG4gIH1cbn0pKCk7XG5cbnZhciBiaW5hcnlfb3BzID0ge1xuICBhbmQ6IFwiJiZcIixcbiAgb3I6IFwifHxcIixcbiAgZXE6IFwiPT09XCIsXG4gIG5lcTogXCIhPT1cIixcbiAgbHQ6IFwiPFwiLFxuICBndDogXCI+XCIsXG4gIGxlcTogXCI8PVwiLFxuICBnZXE6IFwiPj1cIlxufVxuOyhmdW5jdGlvbigpIHtcbiAgZm9yKHZhciBpZCBpbiBiaW5hcnlfb3BzKSB7XG4gICAgdmFyIG9wID0gYmluYXJ5X29wc1tpZF1cbiAgICBleHBvcnRzW2lkXSA9IG1ha2VPcCh7XG4gICAgICBhcmdzOiBbXCJhcnJheVwiLFwiYXJyYXlcIixcImFycmF5XCJdLFxuICAgICAgYm9keToge2FyZ3M6W1wiYVwiLCBcImJcIiwgXCJjXCJdLFxuICAgICAgICAgICAgIGJvZHk6XCJhPWJcIitvcCtcImNcIn0sXG4gICAgICBmdW5jTmFtZTogaWRcbiAgICB9KVxuICAgIGV4cG9ydHNbaWQrXCJzXCJdID0gbWFrZU9wKHtcbiAgICAgIGFyZ3M6IFtcImFycmF5XCIsXCJhcnJheVwiLFwic2NhbGFyXCJdLFxuICAgICAgYm9keToge2FyZ3M6W1wiYVwiLCBcImJcIiwgXCJzXCJdLFxuICAgICAgICAgICAgIGJvZHk6XCJhPWJcIitvcCtcInNcIn0sXG4gICAgICBmdW5jTmFtZTogaWQrXCJzXCJcbiAgICB9KVxuICAgIGV4cG9ydHNbaWQrXCJlcVwiXSA9IG1ha2VPcCh7XG4gICAgICBhcmdzOiBbXCJhcnJheVwiLCBcImFycmF5XCJdLFxuICAgICAgYm9keToge2FyZ3M6W1wiYVwiLCBcImJcIl0sXG4gICAgICAgICAgICAgYm9keTpcImE9YVwiK29wK1wiYlwifSxcbiAgICAgIHJ2YWx1ZTp0cnVlLFxuICAgICAgY291bnQ6MixcbiAgICAgIGZ1bmNOYW1lOiBpZCtcImVxXCJcbiAgICB9KVxuICAgIGV4cG9ydHNbaWQrXCJzZXFcIl0gPSBtYWtlT3Aoe1xuICAgICAgYXJnczogW1wiYXJyYXlcIiwgXCJzY2FsYXJcIl0sXG4gICAgICBib2R5OiB7YXJnczpbXCJhXCIsXCJzXCJdLFxuICAgICAgICAgICAgIGJvZHk6XCJhPWFcIitvcCtcInNcIn0sXG4gICAgICBydmFsdWU6dHJ1ZSxcbiAgICAgIGNvdW50OjIsXG4gICAgICBmdW5jTmFtZTogaWQrXCJzZXFcIlxuICAgIH0pXG4gIH1cbn0pKCk7XG5cbnZhciBtYXRoX3VuYXJ5ID0gW1xuICBcImFic1wiLFxuICBcImFjb3NcIixcbiAgXCJhc2luXCIsXG4gIFwiYXRhblwiLFxuICBcImNlaWxcIixcbiAgXCJjb3NcIixcbiAgXCJleHBcIixcbiAgXCJmbG9vclwiLFxuICBcImxvZ1wiLFxuICBcInJvdW5kXCIsXG4gIFwic2luXCIsXG4gIFwic3FydFwiLFxuICBcInRhblwiXG5dXG47KGZ1bmN0aW9uKCkge1xuICBmb3IodmFyIGk9MDsgaTxtYXRoX3VuYXJ5Lmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGYgPSBtYXRoX3VuYXJ5W2ldXG4gICAgZXhwb3J0c1tmXSA9IG1ha2VPcCh7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3M6IFtcImFycmF5XCIsIFwiYXJyYXlcIl0sXG4gICAgICAgICAgICAgICAgICAgIHByZToge2FyZ3M6W10sIGJvZHk6XCJ0aGlzX2Y9TWF0aC5cIitmLCB0aGlzVmFyczpbXCJ0aGlzX2ZcIl19LFxuICAgICAgICAgICAgICAgICAgICBib2R5OiB7YXJnczpbXCJhXCIsXCJiXCJdLCBib2R5OlwiYT10aGlzX2YoYilcIiwgdGhpc1ZhcnM6W1widGhpc19mXCJdfSxcbiAgICAgICAgICAgICAgICAgICAgZnVuY05hbWU6IGZcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgZXhwb3J0c1tmK1wiZXFcIl0gPSBtYWtlT3Aoe1xuICAgICAgICAgICAgICAgICAgICAgIGFyZ3M6IFtcImFycmF5XCJdLFxuICAgICAgICAgICAgICAgICAgICAgIHByZToge2FyZ3M6W10sIGJvZHk6XCJ0aGlzX2Y9TWF0aC5cIitmLCB0aGlzVmFyczpbXCJ0aGlzX2ZcIl19LFxuICAgICAgICAgICAgICAgICAgICAgIGJvZHk6IHthcmdzOiBbXCJhXCJdLCBib2R5OlwiYT10aGlzX2YoYSlcIiwgdGhpc1ZhcnM6W1widGhpc19mXCJdfSxcbiAgICAgICAgICAgICAgICAgICAgICBydmFsdWU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgY291bnQ6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgZnVuY05hbWU6IGYrXCJlcVwiXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gIH1cbn0pKCk7XG5cbnZhciBtYXRoX2NvbW0gPSBbXG4gIFwibWF4XCIsXG4gIFwibWluXCIsXG4gIFwiYXRhbjJcIixcbiAgXCJwb3dcIlxuXVxuOyhmdW5jdGlvbigpe1xuICBmb3IodmFyIGk9MDsgaTxtYXRoX2NvbW0ubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgZj0gbWF0aF9jb21tW2ldXG4gICAgZXhwb3J0c1tmXSA9IG1ha2VPcCh7XG4gICAgICAgICAgICAgICAgICBhcmdzOltcImFycmF5XCIsIFwiYXJyYXlcIiwgXCJhcnJheVwiXSxcbiAgICAgICAgICAgICAgICAgIHByZToge2FyZ3M6W10sIGJvZHk6XCJ0aGlzX2Y9TWF0aC5cIitmLCB0aGlzVmFyczpbXCJ0aGlzX2ZcIl19LFxuICAgICAgICAgICAgICAgICAgYm9keToge2FyZ3M6W1wiYVwiLFwiYlwiLFwiY1wiXSwgYm9keTpcImE9dGhpc19mKGIsYylcIiwgdGhpc1ZhcnM6W1widGhpc19mXCJdfSxcbiAgICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiBmXG4gICAgICAgICAgICAgICAgfSlcbiAgICBleHBvcnRzW2YrXCJzXCJdID0gbWFrZU9wKHtcbiAgICAgICAgICAgICAgICAgIGFyZ3M6W1wiYXJyYXlcIiwgXCJhcnJheVwiLCBcInNjYWxhclwiXSxcbiAgICAgICAgICAgICAgICAgIHByZToge2FyZ3M6W10sIGJvZHk6XCJ0aGlzX2Y9TWF0aC5cIitmLCB0aGlzVmFyczpbXCJ0aGlzX2ZcIl19LFxuICAgICAgICAgICAgICAgICAgYm9keToge2FyZ3M6W1wiYVwiLFwiYlwiLFwiY1wiXSwgYm9keTpcImE9dGhpc19mKGIsYylcIiwgdGhpc1ZhcnM6W1widGhpc19mXCJdfSxcbiAgICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiBmK1wic1wiXG4gICAgICAgICAgICAgICAgICB9KVxuICAgIGV4cG9ydHNbZitcImVxXCJdID0gbWFrZU9wKHsgYXJnczpbXCJhcnJheVwiLCBcImFycmF5XCJdLFxuICAgICAgICAgICAgICAgICAgcHJlOiB7YXJnczpbXSwgYm9keTpcInRoaXNfZj1NYXRoLlwiK2YsIHRoaXNWYXJzOltcInRoaXNfZlwiXX0sXG4gICAgICAgICAgICAgICAgICBib2R5OiB7YXJnczpbXCJhXCIsXCJiXCJdLCBib2R5OlwiYT10aGlzX2YoYSxiKVwiLCB0aGlzVmFyczpbXCJ0aGlzX2ZcIl19LFxuICAgICAgICAgICAgICAgICAgcnZhbHVlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgY291bnQ6IDIsXG4gICAgICAgICAgICAgICAgICBmdW5jTmFtZTogZitcImVxXCJcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgZXhwb3J0c1tmK1wic2VxXCJdID0gbWFrZU9wKHsgYXJnczpbXCJhcnJheVwiLCBcInNjYWxhclwiXSxcbiAgICAgICAgICAgICAgICAgIHByZToge2FyZ3M6W10sIGJvZHk6XCJ0aGlzX2Y9TWF0aC5cIitmLCB0aGlzVmFyczpbXCJ0aGlzX2ZcIl19LFxuICAgICAgICAgICAgICAgICAgYm9keToge2FyZ3M6W1wiYVwiLFwiYlwiXSwgYm9keTpcImE9dGhpc19mKGEsYilcIiwgdGhpc1ZhcnM6W1widGhpc19mXCJdfSxcbiAgICAgICAgICAgICAgICAgIHJ2YWx1ZTp0cnVlLFxuICAgICAgICAgICAgICAgICAgY291bnQ6MixcbiAgICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiBmK1wic2VxXCJcbiAgICAgICAgICAgICAgICAgIH0pXG4gIH1cbn0pKCk7XG5cbnZhciBtYXRoX25vbmNvbW0gPSBbXG4gIFwiYXRhbjJcIixcbiAgXCJwb3dcIlxuXVxuOyhmdW5jdGlvbigpe1xuICBmb3IodmFyIGk9MDsgaTxtYXRoX25vbmNvbW0ubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgZj0gbWF0aF9ub25jb21tW2ldXG4gICAgZXhwb3J0c1tmK1wib3BcIl0gPSBtYWtlT3Aoe1xuICAgICAgICAgICAgICAgICAgYXJnczpbXCJhcnJheVwiLCBcImFycmF5XCIsIFwiYXJyYXlcIl0sXG4gICAgICAgICAgICAgICAgICBwcmU6IHthcmdzOltdLCBib2R5OlwidGhpc19mPU1hdGguXCIrZiwgdGhpc1ZhcnM6W1widGhpc19mXCJdfSxcbiAgICAgICAgICAgICAgICAgIGJvZHk6IHthcmdzOltcImFcIixcImJcIixcImNcIl0sIGJvZHk6XCJhPXRoaXNfZihjLGIpXCIsIHRoaXNWYXJzOltcInRoaXNfZlwiXX0sXG4gICAgICAgICAgICAgICAgICBmdW5jTmFtZTogZitcIm9wXCJcbiAgICAgICAgICAgICAgICB9KVxuICAgIGV4cG9ydHNbZitcIm9wc1wiXSA9IG1ha2VPcCh7XG4gICAgICAgICAgICAgICAgICBhcmdzOltcImFycmF5XCIsIFwiYXJyYXlcIiwgXCJzY2FsYXJcIl0sXG4gICAgICAgICAgICAgICAgICBwcmU6IHthcmdzOltdLCBib2R5OlwidGhpc19mPU1hdGguXCIrZiwgdGhpc1ZhcnM6W1widGhpc19mXCJdfSxcbiAgICAgICAgICAgICAgICAgIGJvZHk6IHthcmdzOltcImFcIixcImJcIixcImNcIl0sIGJvZHk6XCJhPXRoaXNfZihjLGIpXCIsIHRoaXNWYXJzOltcInRoaXNfZlwiXX0sXG4gICAgICAgICAgICAgICAgICBmdW5jTmFtZTogZitcIm9wc1wiXG4gICAgICAgICAgICAgICAgICB9KVxuICAgIGV4cG9ydHNbZitcIm9wZXFcIl0gPSBtYWtlT3AoeyBhcmdzOltcImFycmF5XCIsIFwiYXJyYXlcIl0sXG4gICAgICAgICAgICAgICAgICBwcmU6IHthcmdzOltdLCBib2R5OlwidGhpc19mPU1hdGguXCIrZiwgdGhpc1ZhcnM6W1widGhpc19mXCJdfSxcbiAgICAgICAgICAgICAgICAgIGJvZHk6IHthcmdzOltcImFcIixcImJcIl0sIGJvZHk6XCJhPXRoaXNfZihiLGEpXCIsIHRoaXNWYXJzOltcInRoaXNfZlwiXX0sXG4gICAgICAgICAgICAgICAgICBydmFsdWU6IHRydWUsXG4gICAgICAgICAgICAgICAgICBjb3VudDogMixcbiAgICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiBmK1wib3BlcVwiXG4gICAgICAgICAgICAgICAgICB9KVxuICAgIGV4cG9ydHNbZitcIm9wc2VxXCJdID0gbWFrZU9wKHsgYXJnczpbXCJhcnJheVwiLCBcInNjYWxhclwiXSxcbiAgICAgICAgICAgICAgICAgIHByZToge2FyZ3M6W10sIGJvZHk6XCJ0aGlzX2Y9TWF0aC5cIitmLCB0aGlzVmFyczpbXCJ0aGlzX2ZcIl19LFxuICAgICAgICAgICAgICAgICAgYm9keToge2FyZ3M6W1wiYVwiLFwiYlwiXSwgYm9keTpcImE9dGhpc19mKGIsYSlcIiwgdGhpc1ZhcnM6W1widGhpc19mXCJdfSxcbiAgICAgICAgICAgICAgICAgIHJ2YWx1ZTp0cnVlLFxuICAgICAgICAgICAgICAgICAgY291bnQ6MixcbiAgICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiBmK1wib3BzZXFcIlxuICAgICAgICAgICAgICAgICAgfSlcbiAgfVxufSkoKTtcblxuZXhwb3J0cy5hbnkgPSBjb21waWxlKHtcbiAgYXJnczpbXCJhcnJheVwiXSxcbiAgcHJlOiBFbXB0eVByb2MsXG4gIGJvZHk6IHthcmdzOlt7bmFtZTpcImFcIiwgbHZhbHVlOmZhbHNlLCBydmFsdWU6dHJ1ZSwgY291bnQ6MX1dLCBib2R5OiBcImlmKGEpe3JldHVybiB0cnVlfVwiLCBsb2NhbFZhcnM6IFtdLCB0aGlzVmFyczogW119LFxuICBwb3N0OiB7YXJnczpbXSwgbG9jYWxWYXJzOltdLCB0aGlzVmFyczpbXSwgYm9keTpcInJldHVybiBmYWxzZVwifSxcbiAgZnVuY05hbWU6IFwiYW55XCJcbn0pXG5cbmV4cG9ydHMuYWxsID0gY29tcGlsZSh7XG4gIGFyZ3M6W1wiYXJyYXlcIl0sXG4gIHByZTogRW1wdHlQcm9jLFxuICBib2R5OiB7YXJnczpbe25hbWU6XCJ4XCIsIGx2YWx1ZTpmYWxzZSwgcnZhbHVlOnRydWUsIGNvdW50OjF9XSwgYm9keTogXCJpZigheCl7cmV0dXJuIGZhbHNlfVwiLCBsb2NhbFZhcnM6IFtdLCB0aGlzVmFyczogW119LFxuICBwb3N0OiB7YXJnczpbXSwgbG9jYWxWYXJzOltdLCB0aGlzVmFyczpbXSwgYm9keTpcInJldHVybiB0cnVlXCJ9LFxuICBmdW5jTmFtZTogXCJhbGxcIlxufSlcblxuZXhwb3J0cy5zdW0gPSBjb21waWxlKHtcbiAgYXJnczpbXCJhcnJheVwiXSxcbiAgcHJlOiB7YXJnczpbXSwgbG9jYWxWYXJzOltdLCB0aGlzVmFyczpbXCJ0aGlzX3NcIl0sIGJvZHk6XCJ0aGlzX3M9MFwifSxcbiAgYm9keToge2FyZ3M6W3tuYW1lOlwiYVwiLCBsdmFsdWU6ZmFsc2UsIHJ2YWx1ZTp0cnVlLCBjb3VudDoxfV0sIGJvZHk6IFwidGhpc19zKz1hXCIsIGxvY2FsVmFyczogW10sIHRoaXNWYXJzOiBbXCJ0aGlzX3NcIl19LFxuICBwb3N0OiB7YXJnczpbXSwgbG9jYWxWYXJzOltdLCB0aGlzVmFyczpbXCJ0aGlzX3NcIl0sIGJvZHk6XCJyZXR1cm4gdGhpc19zXCJ9LFxuICBmdW5jTmFtZTogXCJzdW1cIlxufSlcblxuZXhwb3J0cy5wcm9kID0gY29tcGlsZSh7XG4gIGFyZ3M6W1wiYXJyYXlcIl0sXG4gIHByZToge2FyZ3M6W10sIGxvY2FsVmFyczpbXSwgdGhpc1ZhcnM6W1widGhpc19zXCJdLCBib2R5OlwidGhpc19zPTFcIn0sXG4gIGJvZHk6IHthcmdzOlt7bmFtZTpcImFcIiwgbHZhbHVlOmZhbHNlLCBydmFsdWU6dHJ1ZSwgY291bnQ6MX1dLCBib2R5OiBcInRoaXNfcyo9YVwiLCBsb2NhbFZhcnM6IFtdLCB0aGlzVmFyczogW1widGhpc19zXCJdfSxcbiAgcG9zdDoge2FyZ3M6W10sIGxvY2FsVmFyczpbXSwgdGhpc1ZhcnM6W1widGhpc19zXCJdLCBib2R5OlwicmV0dXJuIHRoaXNfc1wifSxcbiAgZnVuY05hbWU6IFwicHJvZFwiXG59KVxuXG5leHBvcnRzLm5vcm0yc3F1YXJlZCA9IGNvbXBpbGUoe1xuICBhcmdzOltcImFycmF5XCJdLFxuICBwcmU6IHthcmdzOltdLCBsb2NhbFZhcnM6W10sIHRoaXNWYXJzOltcInRoaXNfc1wiXSwgYm9keTpcInRoaXNfcz0wXCJ9LFxuICBib2R5OiB7YXJnczpbe25hbWU6XCJhXCIsIGx2YWx1ZTpmYWxzZSwgcnZhbHVlOnRydWUsIGNvdW50OjJ9XSwgYm9keTogXCJ0aGlzX3MrPWEqYVwiLCBsb2NhbFZhcnM6IFtdLCB0aGlzVmFyczogW1widGhpc19zXCJdfSxcbiAgcG9zdDoge2FyZ3M6W10sIGxvY2FsVmFyczpbXSwgdGhpc1ZhcnM6W1widGhpc19zXCJdLCBib2R5OlwicmV0dXJuIHRoaXNfc1wifSxcbiAgZnVuY05hbWU6IFwibm9ybTJzcXVhcmVkXCJcbn0pXG4gIFxuZXhwb3J0cy5ub3JtMiA9IGNvbXBpbGUoe1xuICBhcmdzOltcImFycmF5XCJdLFxuICBwcmU6IHthcmdzOltdLCBsb2NhbFZhcnM6W10sIHRoaXNWYXJzOltcInRoaXNfc1wiXSwgYm9keTpcInRoaXNfcz0wXCJ9LFxuICBib2R5OiB7YXJnczpbe25hbWU6XCJhXCIsIGx2YWx1ZTpmYWxzZSwgcnZhbHVlOnRydWUsIGNvdW50OjJ9XSwgYm9keTogXCJ0aGlzX3MrPWEqYVwiLCBsb2NhbFZhcnM6IFtdLCB0aGlzVmFyczogW1widGhpc19zXCJdfSxcbiAgcG9zdDoge2FyZ3M6W10sIGxvY2FsVmFyczpbXSwgdGhpc1ZhcnM6W1widGhpc19zXCJdLCBib2R5OlwicmV0dXJuIE1hdGguc3FydCh0aGlzX3MpXCJ9LFxuICBmdW5jTmFtZTogXCJub3JtMlwiXG59KVxuICBcblxuZXhwb3J0cy5ub3JtaW5mID0gY29tcGlsZSh7XG4gIGFyZ3M6W1wiYXJyYXlcIl0sXG4gIHByZToge2FyZ3M6W10sIGxvY2FsVmFyczpbXSwgdGhpc1ZhcnM6W1widGhpc19zXCJdLCBib2R5OlwidGhpc19zPTBcIn0sXG4gIGJvZHk6IHthcmdzOlt7bmFtZTpcImFcIiwgbHZhbHVlOmZhbHNlLCBydmFsdWU6dHJ1ZSwgY291bnQ6NH1dLCBib2R5OlwiaWYoLWE+dGhpc19zKXt0aGlzX3M9LWF9ZWxzZSBpZihhPnRoaXNfcyl7dGhpc19zPWF9XCIsIGxvY2FsVmFyczogW10sIHRoaXNWYXJzOiBbXCJ0aGlzX3NcIl19LFxuICBwb3N0OiB7YXJnczpbXSwgbG9jYWxWYXJzOltdLCB0aGlzVmFyczpbXCJ0aGlzX3NcIl0sIGJvZHk6XCJyZXR1cm4gdGhpc19zXCJ9LFxuICBmdW5jTmFtZTogXCJub3JtaW5mXCJcbn0pXG5cbmV4cG9ydHMubm9ybTEgPSBjb21waWxlKHtcbiAgYXJnczpbXCJhcnJheVwiXSxcbiAgcHJlOiB7YXJnczpbXSwgbG9jYWxWYXJzOltdLCB0aGlzVmFyczpbXCJ0aGlzX3NcIl0sIGJvZHk6XCJ0aGlzX3M9MFwifSxcbiAgYm9keToge2FyZ3M6W3tuYW1lOlwiYVwiLCBsdmFsdWU6ZmFsc2UsIHJ2YWx1ZTp0cnVlLCBjb3VudDozfV0sIGJvZHk6IFwidGhpc19zKz1hPDA/LWE6YVwiLCBsb2NhbFZhcnM6IFtdLCB0aGlzVmFyczogW1widGhpc19zXCJdfSxcbiAgcG9zdDoge2FyZ3M6W10sIGxvY2FsVmFyczpbXSwgdGhpc1ZhcnM6W1widGhpc19zXCJdLCBib2R5OlwicmV0dXJuIHRoaXNfc1wifSxcbiAgZnVuY05hbWU6IFwibm9ybTFcIlxufSlcblxuZXhwb3J0cy5zdXAgPSBjb21waWxlKHtcbiAgYXJnczogWyBcImFycmF5XCIgXSxcbiAgcHJlOlxuICAgeyBib2R5OiBcInRoaXNfaD0tSW5maW5pdHlcIixcbiAgICAgYXJnczogW10sXG4gICAgIHRoaXNWYXJzOiBbIFwidGhpc19oXCIgXSxcbiAgICAgbG9jYWxWYXJzOiBbXSB9LFxuICBib2R5OlxuICAgeyBib2R5OiBcImlmKF9pbmxpbmVfMV9hcmcwXz50aGlzX2gpdGhpc19oPV9pbmxpbmVfMV9hcmcwX1wiLFxuICAgICBhcmdzOiBbe1wibmFtZVwiOlwiX2lubGluZV8xX2FyZzBfXCIsXCJsdmFsdWVcIjpmYWxzZSxcInJ2YWx1ZVwiOnRydWUsXCJjb3VudFwiOjJ9IF0sXG4gICAgIHRoaXNWYXJzOiBbIFwidGhpc19oXCIgXSxcbiAgICAgbG9jYWxWYXJzOiBbXSB9LFxuICBwb3N0OlxuICAgeyBib2R5OiBcInJldHVybiB0aGlzX2hcIixcbiAgICAgYXJnczogW10sXG4gICAgIHRoaXNWYXJzOiBbIFwidGhpc19oXCIgXSxcbiAgICAgbG9jYWxWYXJzOiBbXSB9XG4gfSlcblxuZXhwb3J0cy5pbmYgPSBjb21waWxlKHtcbiAgYXJnczogWyBcImFycmF5XCIgXSxcbiAgcHJlOlxuICAgeyBib2R5OiBcInRoaXNfaD1JbmZpbml0eVwiLFxuICAgICBhcmdzOiBbXSxcbiAgICAgdGhpc1ZhcnM6IFsgXCJ0aGlzX2hcIiBdLFxuICAgICBsb2NhbFZhcnM6IFtdIH0sXG4gIGJvZHk6XG4gICB7IGJvZHk6IFwiaWYoX2lubGluZV8xX2FyZzBfPHRoaXNfaCl0aGlzX2g9X2lubGluZV8xX2FyZzBfXCIsXG4gICAgIGFyZ3M6IFt7XCJuYW1lXCI6XCJfaW5saW5lXzFfYXJnMF9cIixcImx2YWx1ZVwiOmZhbHNlLFwicnZhbHVlXCI6dHJ1ZSxcImNvdW50XCI6Mn0gXSxcbiAgICAgdGhpc1ZhcnM6IFsgXCJ0aGlzX2hcIiBdLFxuICAgICBsb2NhbFZhcnM6IFtdIH0sXG4gIHBvc3Q6XG4gICB7IGJvZHk6IFwicmV0dXJuIHRoaXNfaFwiLFxuICAgICBhcmdzOiBbXSxcbiAgICAgdGhpc1ZhcnM6IFsgXCJ0aGlzX2hcIiBdLFxuICAgICBsb2NhbFZhcnM6IFtdIH1cbiB9KVxuXG5leHBvcnRzLmFyZ21pbiA9IGNvbXBpbGUoe1xuICBhcmdzOltcImluZGV4XCIsXCJhcnJheVwiLFwic2hhcGVcIl0sXG4gIHByZTp7XG4gICAgYm9keTpcInt0aGlzX3Y9SW5maW5pdHk7dGhpc19pPV9pbmxpbmVfMF9hcmcyXy5zbGljZSgwKX1cIixcbiAgICBhcmdzOltcbiAgICAgIHtuYW1lOlwiX2lubGluZV8wX2FyZzBfXCIsbHZhbHVlOmZhbHNlLHJ2YWx1ZTpmYWxzZSxjb3VudDowfSxcbiAgICAgIHtuYW1lOlwiX2lubGluZV8wX2FyZzFfXCIsbHZhbHVlOmZhbHNlLHJ2YWx1ZTpmYWxzZSxjb3VudDowfSxcbiAgICAgIHtuYW1lOlwiX2lubGluZV8wX2FyZzJfXCIsbHZhbHVlOmZhbHNlLHJ2YWx1ZTp0cnVlLGNvdW50OjF9XG4gICAgICBdLFxuICAgIHRoaXNWYXJzOltcInRoaXNfaVwiLFwidGhpc192XCJdLFxuICAgIGxvY2FsVmFyczpbXX0sXG4gIGJvZHk6e1xuICAgIGJvZHk6XCJ7aWYoX2lubGluZV8xX2FyZzFfPHRoaXNfdil7dGhpc192PV9pbmxpbmVfMV9hcmcxXztmb3IodmFyIF9pbmxpbmVfMV9rPTA7X2lubGluZV8xX2s8X2lubGluZV8xX2FyZzBfLmxlbmd0aDsrK19pbmxpbmVfMV9rKXt0aGlzX2lbX2lubGluZV8xX2tdPV9pbmxpbmVfMV9hcmcwX1tfaW5saW5lXzFfa119fX1cIixcbiAgICBhcmdzOltcbiAgICAgIHtuYW1lOlwiX2lubGluZV8xX2FyZzBfXCIsbHZhbHVlOmZhbHNlLHJ2YWx1ZTp0cnVlLGNvdW50OjJ9LFxuICAgICAge25hbWU6XCJfaW5saW5lXzFfYXJnMV9cIixsdmFsdWU6ZmFsc2UscnZhbHVlOnRydWUsY291bnQ6Mn1dLFxuICAgIHRoaXNWYXJzOltcInRoaXNfaVwiLFwidGhpc192XCJdLFxuICAgIGxvY2FsVmFyczpbXCJfaW5saW5lXzFfa1wiXX0sXG4gIHBvc3Q6e1xuICAgIGJvZHk6XCJ7cmV0dXJuIHRoaXNfaX1cIixcbiAgICBhcmdzOltdLFxuICAgIHRoaXNWYXJzOltcInRoaXNfaVwiXSxcbiAgICBsb2NhbFZhcnM6W119XG59KVxuXG5leHBvcnRzLmFyZ21heCA9IGNvbXBpbGUoe1xuICBhcmdzOltcImluZGV4XCIsXCJhcnJheVwiLFwic2hhcGVcIl0sXG4gIHByZTp7XG4gICAgYm9keTpcInt0aGlzX3Y9LUluZmluaXR5O3RoaXNfaT1faW5saW5lXzBfYXJnMl8uc2xpY2UoMCl9XCIsXG4gICAgYXJnczpbXG4gICAgICB7bmFtZTpcIl9pbmxpbmVfMF9hcmcwX1wiLGx2YWx1ZTpmYWxzZSxydmFsdWU6ZmFsc2UsY291bnQ6MH0sXG4gICAgICB7bmFtZTpcIl9pbmxpbmVfMF9hcmcxX1wiLGx2YWx1ZTpmYWxzZSxydmFsdWU6ZmFsc2UsY291bnQ6MH0sXG4gICAgICB7bmFtZTpcIl9pbmxpbmVfMF9hcmcyX1wiLGx2YWx1ZTpmYWxzZSxydmFsdWU6dHJ1ZSxjb3VudDoxfVxuICAgICAgXSxcbiAgICB0aGlzVmFyczpbXCJ0aGlzX2lcIixcInRoaXNfdlwiXSxcbiAgICBsb2NhbFZhcnM6W119LFxuICBib2R5OntcbiAgICBib2R5Olwie2lmKF9pbmxpbmVfMV9hcmcxXz50aGlzX3Ype3RoaXNfdj1faW5saW5lXzFfYXJnMV87Zm9yKHZhciBfaW5saW5lXzFfaz0wO19pbmxpbmVfMV9rPF9pbmxpbmVfMV9hcmcwXy5sZW5ndGg7KytfaW5saW5lXzFfayl7dGhpc19pW19pbmxpbmVfMV9rXT1faW5saW5lXzFfYXJnMF9bX2lubGluZV8xX2tdfX19XCIsXG4gICAgYXJnczpbXG4gICAgICB7bmFtZTpcIl9pbmxpbmVfMV9hcmcwX1wiLGx2YWx1ZTpmYWxzZSxydmFsdWU6dHJ1ZSxjb3VudDoyfSxcbiAgICAgIHtuYW1lOlwiX2lubGluZV8xX2FyZzFfXCIsbHZhbHVlOmZhbHNlLHJ2YWx1ZTp0cnVlLGNvdW50OjJ9XSxcbiAgICB0aGlzVmFyczpbXCJ0aGlzX2lcIixcInRoaXNfdlwiXSxcbiAgICBsb2NhbFZhcnM6W1wiX2lubGluZV8xX2tcIl19LFxuICBwb3N0OntcbiAgICBib2R5Olwie3JldHVybiB0aGlzX2l9XCIsXG4gICAgYXJnczpbXSxcbiAgICB0aGlzVmFyczpbXCJ0aGlzX2lcIl0sXG4gICAgbG9jYWxWYXJzOltdfVxufSkgIFxuXG5leHBvcnRzLnJhbmRvbSA9IG1ha2VPcCh7XG4gIGFyZ3M6IFtcImFycmF5XCJdLFxuICBwcmU6IHthcmdzOltdLCBib2R5OlwidGhpc19mPU1hdGgucmFuZG9tXCIsIHRoaXNWYXJzOltcInRoaXNfZlwiXX0sXG4gIGJvZHk6IHthcmdzOiBbXCJhXCJdLCBib2R5OlwiYT10aGlzX2YoKVwiLCB0aGlzVmFyczpbXCJ0aGlzX2ZcIl19LFxuICBmdW5jTmFtZTogXCJyYW5kb21cIlxufSlcblxuZXhwb3J0cy5hc3NpZ24gPSBtYWtlT3Aoe1xuICBhcmdzOltcImFycmF5XCIsIFwiYXJyYXlcIl0sXG4gIGJvZHk6IHthcmdzOltcImFcIiwgXCJiXCJdLCBib2R5OlwiYT1iXCJ9LFxuICBmdW5jTmFtZTogXCJhc3NpZ25cIiB9KVxuXG5leHBvcnRzLmFzc2lnbnMgPSBtYWtlT3Aoe1xuICBhcmdzOltcImFycmF5XCIsIFwic2NhbGFyXCJdLFxuICBib2R5OiB7YXJnczpbXCJhXCIsIFwiYlwiXSwgYm9keTpcImE9YlwifSxcbiAgZnVuY05hbWU6IFwiYXNzaWduc1wiIH0pXG5cblxuZXhwb3J0cy5lcXVhbHMgPSBjb21waWxlKHtcbiAgYXJnczpbXCJhcnJheVwiLCBcImFycmF5XCJdLFxuICBwcmU6IEVtcHR5UHJvYyxcbiAgYm9keToge2FyZ3M6W3tuYW1lOlwieFwiLCBsdmFsdWU6ZmFsc2UsIHJ2YWx1ZTp0cnVlLCBjb3VudDoxfSxcbiAgICAgICAgICAgICAgIHtuYW1lOlwieVwiLCBsdmFsdWU6ZmFsc2UsIHJ2YWx1ZTp0cnVlLCBjb3VudDoxfV0sIFxuICAgICAgICBib2R5OiBcImlmKHghPT15KXtyZXR1cm4gZmFsc2V9XCIsIFxuICAgICAgICBsb2NhbFZhcnM6IFtdLCBcbiAgICAgICAgdGhpc1ZhcnM6IFtdfSxcbiAgcG9zdDoge2FyZ3M6W10sIGxvY2FsVmFyczpbXSwgdGhpc1ZhcnM6W10sIGJvZHk6XCJyZXR1cm4gdHJ1ZVwifSxcbiAgZnVuY05hbWU6IFwiZXF1YWxzXCJcbn0pXG5cblxuIiwidmFyIGlvdGEgPSByZXF1aXJlKFwiaW90YS1hcnJheVwiKVxudmFyIGlzQnVmZmVyID0gcmVxdWlyZShcImlzLWJ1ZmZlclwiKVxuXG52YXIgaGFzVHlwZWRBcnJheXMgID0gKCh0eXBlb2YgRmxvYXQ2NEFycmF5KSAhPT0gXCJ1bmRlZmluZWRcIilcblxuZnVuY3Rpb24gY29tcGFyZTFzdChhLCBiKSB7XG4gIHJldHVybiBhWzBdIC0gYlswXVxufVxuXG5mdW5jdGlvbiBvcmRlcigpIHtcbiAgdmFyIHN0cmlkZSA9IHRoaXMuc3RyaWRlXG4gIHZhciB0ZXJtcyA9IG5ldyBBcnJheShzdHJpZGUubGVuZ3RoKVxuICB2YXIgaVxuICBmb3IoaT0wOyBpPHRlcm1zLmxlbmd0aDsgKytpKSB7XG4gICAgdGVybXNbaV0gPSBbTWF0aC5hYnMoc3RyaWRlW2ldKSwgaV1cbiAgfVxuICB0ZXJtcy5zb3J0KGNvbXBhcmUxc3QpXG4gIHZhciByZXN1bHQgPSBuZXcgQXJyYXkodGVybXMubGVuZ3RoKVxuICBmb3IoaT0wOyBpPHJlc3VsdC5sZW5ndGg7ICsraSkge1xuICAgIHJlc3VsdFtpXSA9IHRlcm1zW2ldWzFdXG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5mdW5jdGlvbiBjb21waWxlQ29uc3RydWN0b3IoZHR5cGUsIGRpbWVuc2lvbikge1xuICB2YXIgY2xhc3NOYW1lID0gW1wiVmlld1wiLCBkaW1lbnNpb24sIFwiZFwiLCBkdHlwZV0uam9pbihcIlwiKVxuICBpZihkaW1lbnNpb24gPCAwKSB7XG4gICAgY2xhc3NOYW1lID0gXCJWaWV3X05pbFwiICsgZHR5cGVcbiAgfVxuICB2YXIgdXNlR2V0dGVycyA9IChkdHlwZSA9PT0gXCJnZW5lcmljXCIpXG5cbiAgaWYoZGltZW5zaW9uID09PSAtMSkge1xuICAgIC8vU3BlY2lhbCBjYXNlIGZvciB0cml2aWFsIGFycmF5c1xuICAgIHZhciBjb2RlID1cbiAgICAgIFwiZnVuY3Rpb24gXCIrY2xhc3NOYW1lK1wiKGEpe3RoaXMuZGF0YT1hO307XFxcbnZhciBwcm90bz1cIitjbGFzc05hbWUrXCIucHJvdG90eXBlO1xcXG5wcm90by5kdHlwZT0nXCIrZHR5cGUrXCInO1xcXG5wcm90by5pbmRleD1mdW5jdGlvbigpe3JldHVybiAtMX07XFxcbnByb3RvLnNpemU9MDtcXFxucHJvdG8uZGltZW5zaW9uPS0xO1xcXG5wcm90by5zaGFwZT1wcm90by5zdHJpZGU9cHJvdG8ub3JkZXI9W107XFxcbnByb3RvLmxvPXByb3RvLmhpPXByb3RvLnRyYW5zcG9zZT1wcm90by5zdGVwPVxcXG5mdW5jdGlvbigpe3JldHVybiBuZXcgXCIrY2xhc3NOYW1lK1wiKHRoaXMuZGF0YSk7fTtcXFxucHJvdG8uZ2V0PXByb3RvLnNldD1mdW5jdGlvbigpe307XFxcbnByb3RvLnBpY2s9ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbH07XFxcbnJldHVybiBmdW5jdGlvbiBjb25zdHJ1Y3RfXCIrY2xhc3NOYW1lK1wiKGEpe3JldHVybiBuZXcgXCIrY2xhc3NOYW1lK1wiKGEpO31cIlxuICAgIHZhciBwcm9jZWR1cmUgPSBuZXcgRnVuY3Rpb24oY29kZSlcbiAgICByZXR1cm4gcHJvY2VkdXJlKClcbiAgfSBlbHNlIGlmKGRpbWVuc2lvbiA9PT0gMCkge1xuICAgIC8vU3BlY2lhbCBjYXNlIGZvciAwZCBhcnJheXNcbiAgICB2YXIgY29kZSA9XG4gICAgICBcImZ1bmN0aW9uIFwiK2NsYXNzTmFtZStcIihhLGQpIHtcXFxudGhpcy5kYXRhID0gYTtcXFxudGhpcy5vZmZzZXQgPSBkXFxcbn07XFxcbnZhciBwcm90bz1cIitjbGFzc05hbWUrXCIucHJvdG90eXBlO1xcXG5wcm90by5kdHlwZT0nXCIrZHR5cGUrXCInO1xcXG5wcm90by5pbmRleD1mdW5jdGlvbigpe3JldHVybiB0aGlzLm9mZnNldH07XFxcbnByb3RvLmRpbWVuc2lvbj0wO1xcXG5wcm90by5zaXplPTE7XFxcbnByb3RvLnNoYXBlPVxcXG5wcm90by5zdHJpZGU9XFxcbnByb3RvLm9yZGVyPVtdO1xcXG5wcm90by5sbz1cXFxucHJvdG8uaGk9XFxcbnByb3RvLnRyYW5zcG9zZT1cXFxucHJvdG8uc3RlcD1mdW5jdGlvbiBcIitjbGFzc05hbWUrXCJfY29weSgpIHtcXFxucmV0dXJuIG5ldyBcIitjbGFzc05hbWUrXCIodGhpcy5kYXRhLHRoaXMub2Zmc2V0KVxcXG59O1xcXG5wcm90by5waWNrPWZ1bmN0aW9uIFwiK2NsYXNzTmFtZStcIl9waWNrKCl7XFxcbnJldHVybiBUcml2aWFsQXJyYXkodGhpcy5kYXRhKTtcXFxufTtcXFxucHJvdG8udmFsdWVPZj1wcm90by5nZXQ9ZnVuY3Rpb24gXCIrY2xhc3NOYW1lK1wiX2dldCgpe1xcXG5yZXR1cm4gXCIrKHVzZUdldHRlcnMgPyBcInRoaXMuZGF0YS5nZXQodGhpcy5vZmZzZXQpXCIgOiBcInRoaXMuZGF0YVt0aGlzLm9mZnNldF1cIikrXG5cIn07XFxcbnByb3RvLnNldD1mdW5jdGlvbiBcIitjbGFzc05hbWUrXCJfc2V0KHYpe1xcXG5yZXR1cm4gXCIrKHVzZUdldHRlcnMgPyBcInRoaXMuZGF0YS5zZXQodGhpcy5vZmZzZXQsdilcIiA6IFwidGhpcy5kYXRhW3RoaXMub2Zmc2V0XT12XCIpK1wiXFxcbn07XFxcbnJldHVybiBmdW5jdGlvbiBjb25zdHJ1Y3RfXCIrY2xhc3NOYW1lK1wiKGEsYixjLGQpe3JldHVybiBuZXcgXCIrY2xhc3NOYW1lK1wiKGEsZCl9XCJcbiAgICB2YXIgcHJvY2VkdXJlID0gbmV3IEZ1bmN0aW9uKFwiVHJpdmlhbEFycmF5XCIsIGNvZGUpXG4gICAgcmV0dXJuIHByb2NlZHVyZShDQUNIRURfQ09OU1RSVUNUT1JTW2R0eXBlXVswXSlcbiAgfVxuXG4gIHZhciBjb2RlID0gW1wiJ3VzZSBzdHJpY3QnXCJdXG5cbiAgLy9DcmVhdGUgY29uc3RydWN0b3IgZm9yIHZpZXdcbiAgdmFyIGluZGljZXMgPSBpb3RhKGRpbWVuc2lvbilcbiAgdmFyIGFyZ3MgPSBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7IHJldHVybiBcImlcIitpIH0pXG4gIHZhciBpbmRleF9zdHIgPSBcInRoaXMub2Zmc2V0K1wiICsgaW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkge1xuICAgICAgICByZXR1cm4gXCJ0aGlzLnN0cmlkZVtcIiArIGkgKyBcIl0qaVwiICsgaVxuICAgICAgfSkuam9pbihcIitcIilcbiAgdmFyIHNoYXBlQXJnID0gaW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkge1xuICAgICAgcmV0dXJuIFwiYlwiK2lcbiAgICB9KS5qb2luKFwiLFwiKVxuICB2YXIgc3RyaWRlQXJnID0gaW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkge1xuICAgICAgcmV0dXJuIFwiY1wiK2lcbiAgICB9KS5qb2luKFwiLFwiKVxuICBjb2RlLnB1c2goXG4gICAgXCJmdW5jdGlvbiBcIitjbGFzc05hbWUrXCIoYSxcIiArIHNoYXBlQXJnICsgXCIsXCIgKyBzdHJpZGVBcmcgKyBcIixkKXt0aGlzLmRhdGE9YVwiLFxuICAgICAgXCJ0aGlzLnNoYXBlPVtcIiArIHNoYXBlQXJnICsgXCJdXCIsXG4gICAgICBcInRoaXMuc3RyaWRlPVtcIiArIHN0cmlkZUFyZyArIFwiXVwiLFxuICAgICAgXCJ0aGlzLm9mZnNldD1kfDB9XCIsXG4gICAgXCJ2YXIgcHJvdG89XCIrY2xhc3NOYW1lK1wiLnByb3RvdHlwZVwiLFxuICAgIFwicHJvdG8uZHR5cGU9J1wiK2R0eXBlK1wiJ1wiLFxuICAgIFwicHJvdG8uZGltZW5zaW9uPVwiK2RpbWVuc2lvbilcblxuICAvL3ZpZXcuc2l6ZTpcbiAgY29kZS5wdXNoKFwiT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCdzaXplJyx7Z2V0OmZ1bmN0aW9uIFwiK2NsYXNzTmFtZStcIl9zaXplKCl7XFxcbnJldHVybiBcIitpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7IHJldHVybiBcInRoaXMuc2hhcGVbXCIraStcIl1cIiB9KS5qb2luKFwiKlwiKSxcblwifX0pXCIpXG5cbiAgLy92aWV3Lm9yZGVyOlxuICBpZihkaW1lbnNpb24gPT09IDEpIHtcbiAgICBjb2RlLnB1c2goXCJwcm90by5vcmRlcj1bMF1cIilcbiAgfSBlbHNlIHtcbiAgICBjb2RlLnB1c2goXCJPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sJ29yZGVyJyx7Z2V0OlwiKVxuICAgIGlmKGRpbWVuc2lvbiA8IDQpIHtcbiAgICAgIGNvZGUucHVzaChcImZ1bmN0aW9uIFwiK2NsYXNzTmFtZStcIl9vcmRlcigpe1wiKVxuICAgICAgaWYoZGltZW5zaW9uID09PSAyKSB7XG4gICAgICAgIGNvZGUucHVzaChcInJldHVybiAoTWF0aC5hYnModGhpcy5zdHJpZGVbMF0pPk1hdGguYWJzKHRoaXMuc3RyaWRlWzFdKSk/WzEsMF06WzAsMV19fSlcIilcbiAgICAgIH0gZWxzZSBpZihkaW1lbnNpb24gPT09IDMpIHtcbiAgICAgICAgY29kZS5wdXNoKFxuXCJ2YXIgczA9TWF0aC5hYnModGhpcy5zdHJpZGVbMF0pLHMxPU1hdGguYWJzKHRoaXMuc3RyaWRlWzFdKSxzMj1NYXRoLmFicyh0aGlzLnN0cmlkZVsyXSk7XFxcbmlmKHMwPnMxKXtcXFxuaWYoczE+czIpe1xcXG5yZXR1cm4gWzIsMSwwXTtcXFxufWVsc2UgaWYoczA+czIpe1xcXG5yZXR1cm4gWzEsMiwwXTtcXFxufWVsc2V7XFxcbnJldHVybiBbMSwwLDJdO1xcXG59XFxcbn1lbHNlIGlmKHMwPnMyKXtcXFxucmV0dXJuIFsyLDAsMV07XFxcbn1lbHNlIGlmKHMyPnMxKXtcXFxucmV0dXJuIFswLDEsMl07XFxcbn1lbHNle1xcXG5yZXR1cm4gWzAsMiwxXTtcXFxufX19KVwiKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb2RlLnB1c2goXCJPUkRFUn0pXCIpXG4gICAgfVxuICB9XG5cbiAgLy92aWV3LnNldChpMCwgLi4uLCB2KTpcbiAgY29kZS5wdXNoKFxuXCJwcm90by5zZXQ9ZnVuY3Rpb24gXCIrY2xhc3NOYW1lK1wiX3NldChcIithcmdzLmpvaW4oXCIsXCIpK1wiLHYpe1wiKVxuICBpZih1c2VHZXR0ZXJzKSB7XG4gICAgY29kZS5wdXNoKFwicmV0dXJuIHRoaXMuZGF0YS5zZXQoXCIraW5kZXhfc3RyK1wiLHYpfVwiKVxuICB9IGVsc2Uge1xuICAgIGNvZGUucHVzaChcInJldHVybiB0aGlzLmRhdGFbXCIraW5kZXhfc3RyK1wiXT12fVwiKVxuICB9XG5cbiAgLy92aWV3LmdldChpMCwgLi4uKTpcbiAgY29kZS5wdXNoKFwicHJvdG8uZ2V0PWZ1bmN0aW9uIFwiK2NsYXNzTmFtZStcIl9nZXQoXCIrYXJncy5qb2luKFwiLFwiKStcIil7XCIpXG4gIGlmKHVzZUdldHRlcnMpIHtcbiAgICBjb2RlLnB1c2goXCJyZXR1cm4gdGhpcy5kYXRhLmdldChcIitpbmRleF9zdHIrXCIpfVwiKVxuICB9IGVsc2Uge1xuICAgIGNvZGUucHVzaChcInJldHVybiB0aGlzLmRhdGFbXCIraW5kZXhfc3RyK1wiXX1cIilcbiAgfVxuXG4gIC8vdmlldy5pbmRleDpcbiAgY29kZS5wdXNoKFxuICAgIFwicHJvdG8uaW5kZXg9ZnVuY3Rpb24gXCIrY2xhc3NOYW1lK1wiX2luZGV4KFwiLCBhcmdzLmpvaW4oKSwgXCIpe3JldHVybiBcIitpbmRleF9zdHIrXCJ9XCIpXG5cbiAgLy92aWV3LmhpKCk6XG4gIGNvZGUucHVzaChcInByb3RvLmhpPWZ1bmN0aW9uIFwiK2NsYXNzTmFtZStcIl9oaShcIithcmdzLmpvaW4oXCIsXCIpK1wiKXtyZXR1cm4gbmV3IFwiK2NsYXNzTmFtZStcIih0aGlzLmRhdGEsXCIrXG4gICAgaW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkge1xuICAgICAgcmV0dXJuIFtcIih0eXBlb2YgaVwiLGksXCIhPT0nbnVtYmVyJ3x8aVwiLGksXCI8MCk/dGhpcy5zaGFwZVtcIiwgaSwgXCJdOmlcIiwgaSxcInwwXCJdLmpvaW4oXCJcIilcbiAgICB9KS5qb2luKFwiLFwiKStcIixcIitcbiAgICBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7XG4gICAgICByZXR1cm4gXCJ0aGlzLnN0cmlkZVtcIitpICsgXCJdXCJcbiAgICB9KS5qb2luKFwiLFwiKStcIix0aGlzLm9mZnNldCl9XCIpXG5cbiAgLy92aWV3LmxvKCk6XG4gIHZhciBhX3ZhcnMgPSBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7IHJldHVybiBcImFcIitpK1wiPXRoaXMuc2hhcGVbXCIraStcIl1cIiB9KVxuICB2YXIgY192YXJzID0gaW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkgeyByZXR1cm4gXCJjXCIraStcIj10aGlzLnN0cmlkZVtcIitpK1wiXVwiIH0pXG4gIGNvZGUucHVzaChcInByb3RvLmxvPWZ1bmN0aW9uIFwiK2NsYXNzTmFtZStcIl9sbyhcIithcmdzLmpvaW4oXCIsXCIpK1wiKXt2YXIgYj10aGlzLm9mZnNldCxkPTAsXCIrYV92YXJzLmpvaW4oXCIsXCIpK1wiLFwiK2NfdmFycy5qb2luKFwiLFwiKSlcbiAgZm9yKHZhciBpPTA7IGk8ZGltZW5zaW9uOyArK2kpIHtcbiAgICBjb2RlLnB1c2goXG5cImlmKHR5cGVvZiBpXCIraStcIj09PSdudW1iZXInJiZpXCIraStcIj49MCl7XFxcbmQ9aVwiK2krXCJ8MDtcXFxuYis9Y1wiK2krXCIqZDtcXFxuYVwiK2krXCItPWR9XCIpXG4gIH1cbiAgY29kZS5wdXNoKFwicmV0dXJuIG5ldyBcIitjbGFzc05hbWUrXCIodGhpcy5kYXRhLFwiK1xuICAgIGluZGljZXMubWFwKGZ1bmN0aW9uKGkpIHtcbiAgICAgIHJldHVybiBcImFcIitpXG4gICAgfSkuam9pbihcIixcIikrXCIsXCIrXG4gICAgaW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkge1xuICAgICAgcmV0dXJuIFwiY1wiK2lcbiAgICB9KS5qb2luKFwiLFwiKStcIixiKX1cIilcblxuICAvL3ZpZXcuc3RlcCgpOlxuICBjb2RlLnB1c2goXCJwcm90by5zdGVwPWZ1bmN0aW9uIFwiK2NsYXNzTmFtZStcIl9zdGVwKFwiK2FyZ3Muam9pbihcIixcIikrXCIpe3ZhciBcIitcbiAgICBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7XG4gICAgICByZXR1cm4gXCJhXCIraStcIj10aGlzLnNoYXBlW1wiK2krXCJdXCJcbiAgICB9KS5qb2luKFwiLFwiKStcIixcIitcbiAgICBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7XG4gICAgICByZXR1cm4gXCJiXCIraStcIj10aGlzLnN0cmlkZVtcIitpK1wiXVwiXG4gICAgfSkuam9pbihcIixcIikrXCIsYz10aGlzLm9mZnNldCxkPTAsY2VpbD1NYXRoLmNlaWxcIilcbiAgZm9yKHZhciBpPTA7IGk8ZGltZW5zaW9uOyArK2kpIHtcbiAgICBjb2RlLnB1c2goXG5cImlmKHR5cGVvZiBpXCIraStcIj09PSdudW1iZXInKXtcXFxuZD1pXCIraStcInwwO1xcXG5pZihkPDApe1xcXG5jKz1iXCIraStcIiooYVwiK2krXCItMSk7XFxcbmFcIitpK1wiPWNlaWwoLWFcIitpK1wiL2QpXFxcbn1lbHNle1xcXG5hXCIraStcIj1jZWlsKGFcIitpK1wiL2QpXFxcbn1cXFxuYlwiK2krXCIqPWRcXFxufVwiKVxuICB9XG4gIGNvZGUucHVzaChcInJldHVybiBuZXcgXCIrY2xhc3NOYW1lK1wiKHRoaXMuZGF0YSxcIitcbiAgICBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7XG4gICAgICByZXR1cm4gXCJhXCIgKyBpXG4gICAgfSkuam9pbihcIixcIikrXCIsXCIrXG4gICAgaW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkge1xuICAgICAgcmV0dXJuIFwiYlwiICsgaVxuICAgIH0pLmpvaW4oXCIsXCIpK1wiLGMpfVwiKVxuXG4gIC8vdmlldy50cmFuc3Bvc2UoKTpcbiAgdmFyIHRTaGFwZSA9IG5ldyBBcnJheShkaW1lbnNpb24pXG4gIHZhciB0U3RyaWRlID0gbmV3IEFycmF5KGRpbWVuc2lvbilcbiAgZm9yKHZhciBpPTA7IGk8ZGltZW5zaW9uOyArK2kpIHtcbiAgICB0U2hhcGVbaV0gPSBcImFbaVwiK2krXCJdXCJcbiAgICB0U3RyaWRlW2ldID0gXCJiW2lcIitpK1wiXVwiXG4gIH1cbiAgY29kZS5wdXNoKFwicHJvdG8udHJhbnNwb3NlPWZ1bmN0aW9uIFwiK2NsYXNzTmFtZStcIl90cmFuc3Bvc2UoXCIrYXJncytcIil7XCIrXG4gICAgYXJncy5tYXAoZnVuY3Rpb24obixpZHgpIHsgcmV0dXJuIG4gKyBcIj0oXCIgKyBuICsgXCI9PT11bmRlZmluZWQ/XCIgKyBpZHggKyBcIjpcIiArIG4gKyBcInwwKVwifSkuam9pbihcIjtcIiksXG4gICAgXCJ2YXIgYT10aGlzLnNoYXBlLGI9dGhpcy5zdHJpZGU7cmV0dXJuIG5ldyBcIitjbGFzc05hbWUrXCIodGhpcy5kYXRhLFwiK3RTaGFwZS5qb2luKFwiLFwiKStcIixcIit0U3RyaWRlLmpvaW4oXCIsXCIpK1wiLHRoaXMub2Zmc2V0KX1cIilcblxuICAvL3ZpZXcucGljaygpOlxuICBjb2RlLnB1c2goXCJwcm90by5waWNrPWZ1bmN0aW9uIFwiK2NsYXNzTmFtZStcIl9waWNrKFwiK2FyZ3MrXCIpe3ZhciBhPVtdLGI9W10sYz10aGlzLm9mZnNldFwiKVxuICBmb3IodmFyIGk9MDsgaTxkaW1lbnNpb247ICsraSkge1xuICAgIGNvZGUucHVzaChcImlmKHR5cGVvZiBpXCIraStcIj09PSdudW1iZXInJiZpXCIraStcIj49MCl7Yz0oYyt0aGlzLnN0cmlkZVtcIitpK1wiXSppXCIraStcIil8MH1lbHNle2EucHVzaCh0aGlzLnNoYXBlW1wiK2krXCJdKTtiLnB1c2godGhpcy5zdHJpZGVbXCIraStcIl0pfVwiKVxuICB9XG4gIGNvZGUucHVzaChcInZhciBjdG9yPUNUT1JfTElTVFthLmxlbmd0aCsxXTtyZXR1cm4gY3Rvcih0aGlzLmRhdGEsYSxiLGMpfVwiKVxuXG4gIC8vQWRkIHJldHVybiBzdGF0ZW1lbnRcbiAgY29kZS5wdXNoKFwicmV0dXJuIGZ1bmN0aW9uIGNvbnN0cnVjdF9cIitjbGFzc05hbWUrXCIoZGF0YSxzaGFwZSxzdHJpZGUsb2Zmc2V0KXtyZXR1cm4gbmV3IFwiK2NsYXNzTmFtZStcIihkYXRhLFwiK1xuICAgIGluZGljZXMubWFwKGZ1bmN0aW9uKGkpIHtcbiAgICAgIHJldHVybiBcInNoYXBlW1wiK2krXCJdXCJcbiAgICB9KS5qb2luKFwiLFwiKStcIixcIitcbiAgICBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7XG4gICAgICByZXR1cm4gXCJzdHJpZGVbXCIraStcIl1cIlxuICAgIH0pLmpvaW4oXCIsXCIpK1wiLG9mZnNldCl9XCIpXG5cbiAgLy9Db21waWxlIHByb2NlZHVyZVxuICB2YXIgcHJvY2VkdXJlID0gbmV3IEZ1bmN0aW9uKFwiQ1RPUl9MSVNUXCIsIFwiT1JERVJcIiwgY29kZS5qb2luKFwiXFxuXCIpKVxuICByZXR1cm4gcHJvY2VkdXJlKENBQ0hFRF9DT05TVFJVQ1RPUlNbZHR5cGVdLCBvcmRlcilcbn1cblxuZnVuY3Rpb24gYXJyYXlEVHlwZShkYXRhKSB7XG4gIGlmKGlzQnVmZmVyKGRhdGEpKSB7XG4gICAgcmV0dXJuIFwiYnVmZmVyXCJcbiAgfVxuICBpZihoYXNUeXBlZEFycmF5cykge1xuICAgIHN3aXRjaChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZGF0YSkpIHtcbiAgICAgIGNhc2UgXCJbb2JqZWN0IEZsb2F0NjRBcnJheV1cIjpcbiAgICAgICAgcmV0dXJuIFwiZmxvYXQ2NFwiXG4gICAgICBjYXNlIFwiW29iamVjdCBGbG9hdDMyQXJyYXldXCI6XG4gICAgICAgIHJldHVybiBcImZsb2F0MzJcIlxuICAgICAgY2FzZSBcIltvYmplY3QgSW50OEFycmF5XVwiOlxuICAgICAgICByZXR1cm4gXCJpbnQ4XCJcbiAgICAgIGNhc2UgXCJbb2JqZWN0IEludDE2QXJyYXldXCI6XG4gICAgICAgIHJldHVybiBcImludDE2XCJcbiAgICAgIGNhc2UgXCJbb2JqZWN0IEludDMyQXJyYXldXCI6XG4gICAgICAgIHJldHVybiBcImludDMyXCJcbiAgICAgIGNhc2UgXCJbb2JqZWN0IFVpbnQ4QXJyYXldXCI6XG4gICAgICAgIHJldHVybiBcInVpbnQ4XCJcbiAgICAgIGNhc2UgXCJbb2JqZWN0IFVpbnQxNkFycmF5XVwiOlxuICAgICAgICByZXR1cm4gXCJ1aW50MTZcIlxuICAgICAgY2FzZSBcIltvYmplY3QgVWludDMyQXJyYXldXCI6XG4gICAgICAgIHJldHVybiBcInVpbnQzMlwiXG4gICAgICBjYXNlIFwiW29iamVjdCBVaW50OENsYW1wZWRBcnJheV1cIjpcbiAgICAgICAgcmV0dXJuIFwidWludDhfY2xhbXBlZFwiXG4gICAgICBjYXNlIFwiW29iamVjdCBCaWdJbnQ2NEFycmF5XVwiOlxuICAgICAgICByZXR1cm4gXCJiaWdpbnQ2NFwiXG4gICAgICBjYXNlIFwiW29iamVjdCBCaWdVaW50NjRBcnJheV1cIjpcbiAgICAgICAgcmV0dXJuIFwiYmlndWludDY0XCJcbiAgICB9XG4gIH1cbiAgaWYoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgIHJldHVybiBcImFycmF5XCJcbiAgfVxuICByZXR1cm4gXCJnZW5lcmljXCJcbn1cblxudmFyIENBQ0hFRF9DT05TVFJVQ1RPUlMgPSB7XG4gIFwiZmxvYXQzMlwiOltdLFxuICBcImZsb2F0NjRcIjpbXSxcbiAgXCJpbnQ4XCI6W10sXG4gIFwiaW50MTZcIjpbXSxcbiAgXCJpbnQzMlwiOltdLFxuICBcInVpbnQ4XCI6W10sXG4gIFwidWludDE2XCI6W10sXG4gIFwidWludDMyXCI6W10sXG4gIFwiYXJyYXlcIjpbXSxcbiAgXCJ1aW50OF9jbGFtcGVkXCI6W10sXG4gIFwiYmlnaW50NjRcIjogW10sXG4gIFwiYmlndWludDY0XCI6IFtdLFxuICBcImJ1ZmZlclwiOltdLFxuICBcImdlbmVyaWNcIjpbXVxufVxuXG47KGZ1bmN0aW9uKCkge1xuICBmb3IodmFyIGlkIGluIENBQ0hFRF9DT05TVFJVQ1RPUlMpIHtcbiAgICBDQUNIRURfQ09OU1RSVUNUT1JTW2lkXS5wdXNoKGNvbXBpbGVDb25zdHJ1Y3RvcihpZCwgLTEpKVxuICB9XG59KTtcblxuZnVuY3Rpb24gd3JhcHBlZE5EQXJyYXlDdG9yKGRhdGEsIHNoYXBlLCBzdHJpZGUsIG9mZnNldCkge1xuICBpZihkYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgY3RvciA9IENBQ0hFRF9DT05TVFJVQ1RPUlMuYXJyYXlbMF1cbiAgICByZXR1cm4gY3RvcihbXSlcbiAgfSBlbHNlIGlmKHR5cGVvZiBkYXRhID09PSBcIm51bWJlclwiKSB7XG4gICAgZGF0YSA9IFtkYXRhXVxuICB9XG4gIGlmKHNoYXBlID09PSB1bmRlZmluZWQpIHtcbiAgICBzaGFwZSA9IFsgZGF0YS5sZW5ndGggXVxuICB9XG4gIHZhciBkID0gc2hhcGUubGVuZ3RoXG4gIGlmKHN0cmlkZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgc3RyaWRlID0gbmV3IEFycmF5KGQpXG4gICAgZm9yKHZhciBpPWQtMSwgc3o9MTsgaT49MDsgLS1pKSB7XG4gICAgICBzdHJpZGVbaV0gPSBzelxuICAgICAgc3ogKj0gc2hhcGVbaV1cbiAgICB9XG4gIH1cbiAgaWYob2Zmc2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICBvZmZzZXQgPSAwXG4gICAgZm9yKHZhciBpPTA7IGk8ZDsgKytpKSB7XG4gICAgICBpZihzdHJpZGVbaV0gPCAwKSB7XG4gICAgICAgIG9mZnNldCAtPSAoc2hhcGVbaV0tMSkqc3RyaWRlW2ldXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHZhciBkdHlwZSA9IGFycmF5RFR5cGUoZGF0YSlcbiAgdmFyIGN0b3JfbGlzdCA9IENBQ0hFRF9DT05TVFJVQ1RPUlNbZHR5cGVdXG4gIHdoaWxlKGN0b3JfbGlzdC5sZW5ndGggPD0gZCsxKSB7XG4gICAgY3Rvcl9saXN0LnB1c2goY29tcGlsZUNvbnN0cnVjdG9yKGR0eXBlLCBjdG9yX2xpc3QubGVuZ3RoLTEpKVxuICB9XG4gIHZhciBjdG9yID0gY3Rvcl9saXN0W2QrMV1cbiAgcmV0dXJuIGN0b3IoZGF0YSwgc2hhcGUsIHN0cmlkZSwgb2Zmc2V0KVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdyYXBwZWROREFycmF5Q3RvclxuIiwiLyohXG4gKiBwYWQtbGVmdCA8aHR0cHM6Ly9naXRodWIuY29tL2pvbnNjaGxpbmtlcnQvcGFkLWxlZnQ+XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LTIwMTUsIEpvbiBTY2hsaW5rZXJ0LlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHJlcGVhdCA9IHJlcXVpcmUoJ3JlcGVhdC1zdHJpbmcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYWRMZWZ0KHN0ciwgbnVtLCBjaCkge1xuICBjaCA9IHR5cGVvZiBjaCAhPT0gJ3VuZGVmaW5lZCcgPyAoY2ggKyAnJykgOiAnICc7XG4gIHJldHVybiByZXBlYXQoY2gsIG51bSkgKyBzdHI7XG59OyIsIi8qIVxuICogcmVwZWF0LXN0cmluZyA8aHR0cHM6Ly9naXRodWIuY29tL2pvbnNjaGxpbmtlcnQvcmVwZWF0LXN0cmluZz5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtMjAxNSwgSm9uIFNjaGxpbmtlcnQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFJlc3VsdHMgY2FjaGVcbiAqL1xuXG52YXIgcmVzID0gJyc7XG52YXIgY2FjaGU7XG5cbi8qKlxuICogRXhwb3NlIGByZXBlYXRgXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSByZXBlYXQ7XG5cbi8qKlxuICogUmVwZWF0IHRoZSBnaXZlbiBgc3RyaW5nYCB0aGUgc3BlY2lmaWVkIGBudW1iZXJgXG4gKiBvZiB0aW1lcy5cbiAqXG4gKiAqKkV4YW1wbGU6KipcbiAqXG4gKiBgYGBqc1xuICogdmFyIHJlcGVhdCA9IHJlcXVpcmUoJ3JlcGVhdC1zdHJpbmcnKTtcbiAqIHJlcGVhdCgnQScsIDUpO1xuICogLy89PiBBQUFBQVxuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGBzdHJpbmdgIFRoZSBzdHJpbmcgdG8gcmVwZWF0XG4gKiBAcGFyYW0ge051bWJlcn0gYG51bWJlcmAgVGhlIG51bWJlciBvZiB0aW1lcyB0byByZXBlYXQgdGhlIHN0cmluZ1xuICogQHJldHVybiB7U3RyaW5nfSBSZXBlYXRlZCBzdHJpbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gcmVwZWF0KHN0ciwgbnVtKSB7XG4gIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4cGVjdGVkIGEgc3RyaW5nJyk7XG4gIH1cblxuICAvLyBjb3ZlciBjb21tb24sIHF1aWNrIHVzZSBjYXNlc1xuICBpZiAobnVtID09PSAxKSByZXR1cm4gc3RyO1xuICBpZiAobnVtID09PSAyKSByZXR1cm4gc3RyICsgc3RyO1xuXG4gIHZhciBtYXggPSBzdHIubGVuZ3RoICogbnVtO1xuICBpZiAoY2FjaGUgIT09IHN0ciB8fCB0eXBlb2YgY2FjaGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgY2FjaGUgPSBzdHI7XG4gICAgcmVzID0gJyc7XG4gIH0gZWxzZSBpZiAocmVzLmxlbmd0aCA+PSBtYXgpIHtcbiAgICByZXR1cm4gcmVzLnN1YnN0cigwLCBtYXgpO1xuICB9XG5cbiAgd2hpbGUgKG1heCA+IHJlcy5sZW5ndGggJiYgbnVtID4gMSkge1xuICAgIGlmIChudW0gJiAxKSB7XG4gICAgICByZXMgKz0gc3RyO1xuICAgIH1cblxuICAgIG51bSA+Pj0gMTtcbiAgICBzdHIgKz0gc3RyO1xuICB9XG5cbiAgcmVzICs9IHN0cjtcbiAgcmVzID0gcmVzLnN1YnN0cigwLCBtYXgpO1xuICByZXR1cm4gcmVzO1xufVxuIiwiLyogZ2xvYmFsIHdpbmRvdywgZXhwb3J0cywgZGVmaW5lICovXG5cbiFmdW5jdGlvbigpIHtcbiAgICAndXNlIHN0cmljdCdcblxuICAgIHZhciByZSA9IHtcbiAgICAgICAgbm90X3N0cmluZzogL1tec10vLFxuICAgICAgICBub3RfYm9vbDogL1tedF0vLFxuICAgICAgICBub3RfdHlwZTogL1teVF0vLFxuICAgICAgICBub3RfcHJpbWl0aXZlOiAvW152XS8sXG4gICAgICAgIG51bWJlcjogL1tkaWVmZ10vLFxuICAgICAgICBudW1lcmljX2FyZzogL1tiY2RpZWZndXhYXS8sXG4gICAgICAgIGpzb246IC9bal0vLFxuICAgICAgICBub3RfanNvbjogL1teal0vLFxuICAgICAgICB0ZXh0OiAvXlteXFx4MjVdKy8sXG4gICAgICAgIG1vZHVsbzogL15cXHgyNXsyfS8sXG4gICAgICAgIHBsYWNlaG9sZGVyOiAvXlxceDI1KD86KFsxLTldXFxkKilcXCR8XFwoKFteKV0rKVxcKSk/KFxcKyk/KDB8J1teJF0pPygtKT8oXFxkKyk/KD86XFwuKFxcZCspKT8oW2ItZ2lqb3N0VHV2eFhdKS8sXG4gICAgICAgIGtleTogL14oW2Etel9dW2Etel9cXGRdKikvaSxcbiAgICAgICAga2V5X2FjY2VzczogL15cXC4oW2Etel9dW2Etel9cXGRdKikvaSxcbiAgICAgICAgaW5kZXhfYWNjZXNzOiAvXlxcWyhcXGQrKVxcXS8sXG4gICAgICAgIHNpZ246IC9eWystXS9cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzcHJpbnRmKGtleSkge1xuICAgICAgICAvLyBgYXJndW1lbnRzYCBpcyBub3QgYW4gYXJyYXksIGJ1dCBzaG91bGQgYmUgZmluZSBmb3IgdGhpcyBjYWxsXG4gICAgICAgIHJldHVybiBzcHJpbnRmX2Zvcm1hdChzcHJpbnRmX3BhcnNlKGtleSksIGFyZ3VtZW50cylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2c3ByaW50ZihmbXQsIGFyZ3YpIHtcbiAgICAgICAgcmV0dXJuIHNwcmludGYuYXBwbHkobnVsbCwgW2ZtdF0uY29uY2F0KGFyZ3YgfHwgW10pKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNwcmludGZfZm9ybWF0KHBhcnNlX3RyZWUsIGFyZ3YpIHtcbiAgICAgICAgdmFyIGN1cnNvciA9IDEsIHRyZWVfbGVuZ3RoID0gcGFyc2VfdHJlZS5sZW5ndGgsIGFyZywgb3V0cHV0ID0gJycsIGksIGssIHBoLCBwYWQsIHBhZF9jaGFyYWN0ZXIsIHBhZF9sZW5ndGgsIGlzX3Bvc2l0aXZlLCBzaWduXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0cmVlX2xlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHBhcnNlX3RyZWVbaV0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0ICs9IHBhcnNlX3RyZWVbaV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBwYXJzZV90cmVlW2ldID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIHBoID0gcGFyc2VfdHJlZVtpXSAvLyBjb252ZW5pZW5jZSBwdXJwb3NlcyBvbmx5XG4gICAgICAgICAgICAgICAgaWYgKHBoLmtleXMpIHsgLy8ga2V5d29yZCBhcmd1bWVudFxuICAgICAgICAgICAgICAgICAgICBhcmcgPSBhcmd2W2N1cnNvcl1cbiAgICAgICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IHBoLmtleXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcmcgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHNwcmludGYoJ1tzcHJpbnRmXSBDYW5ub3QgYWNjZXNzIHByb3BlcnR5IFwiJXNcIiBvZiB1bmRlZmluZWQgdmFsdWUgXCIlc1wiJywgcGgua2V5c1trXSwgcGgua2V5c1trLTFdKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZyA9IGFyZ1twaC5rZXlzW2tdXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBoLnBhcmFtX25vKSB7IC8vIHBvc2l0aW9uYWwgYXJndW1lbnQgKGV4cGxpY2l0KVxuICAgICAgICAgICAgICAgICAgICBhcmcgPSBhcmd2W3BoLnBhcmFtX25vXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHsgLy8gcG9zaXRpb25hbCBhcmd1bWVudCAoaW1wbGljaXQpXG4gICAgICAgICAgICAgICAgICAgIGFyZyA9IGFyZ3ZbY3Vyc29yKytdXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHJlLm5vdF90eXBlLnRlc3QocGgudHlwZSkgJiYgcmUubm90X3ByaW1pdGl2ZS50ZXN0KHBoLnR5cGUpICYmIGFyZyBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZyA9IGFyZygpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHJlLm51bWVyaWNfYXJnLnRlc3QocGgudHlwZSkgJiYgKHR5cGVvZiBhcmcgIT09ICdudW1iZXInICYmIGlzTmFOKGFyZykpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3Ioc3ByaW50ZignW3NwcmludGZdIGV4cGVjdGluZyBudW1iZXIgYnV0IGZvdW5kICVUJywgYXJnKSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmUubnVtYmVyLnRlc3QocGgudHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNfcG9zaXRpdmUgPSBhcmcgPj0gMFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHN3aXRjaCAocGgudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdiJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZyA9IHBhcnNlSW50KGFyZywgMTApLnRvU3RyaW5nKDIpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdjJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZyA9IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoYXJnLCAxMCkpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdkJzpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnaSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmcgPSBwYXJzZUludChhcmcsIDEwKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnaic6XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmcgPSBKU09OLnN0cmluZ2lmeShhcmcsIG51bGwsIHBoLndpZHRoID8gcGFyc2VJbnQocGgud2lkdGgpIDogMClcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2UnOlxuICAgICAgICAgICAgICAgICAgICAgICAgYXJnID0gcGgucHJlY2lzaW9uID8gcGFyc2VGbG9hdChhcmcpLnRvRXhwb25lbnRpYWwocGgucHJlY2lzaW9uKSA6IHBhcnNlRmxvYXQoYXJnKS50b0V4cG9uZW50aWFsKClcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2YnOlxuICAgICAgICAgICAgICAgICAgICAgICAgYXJnID0gcGgucHJlY2lzaW9uID8gcGFyc2VGbG9hdChhcmcpLnRvRml4ZWQocGgucHJlY2lzaW9uKSA6IHBhcnNlRmxvYXQoYXJnKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmcgPSBwaC5wcmVjaXNpb24gPyBTdHJpbmcoTnVtYmVyKGFyZy50b1ByZWNpc2lvbihwaC5wcmVjaXNpb24pKSkgOiBwYXJzZUZsb2F0KGFyZylcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ28nOlxuICAgICAgICAgICAgICAgICAgICAgICAgYXJnID0gKHBhcnNlSW50KGFyZywgMTApID4+PiAwKS50b1N0cmluZyg4KVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmcgPSBTdHJpbmcoYXJnKVxuICAgICAgICAgICAgICAgICAgICAgICAgYXJnID0gKHBoLnByZWNpc2lvbiA/IGFyZy5zdWJzdHJpbmcoMCwgcGgucHJlY2lzaW9uKSA6IGFyZylcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3QnOlxuICAgICAgICAgICAgICAgICAgICAgICAgYXJnID0gU3RyaW5nKCEhYXJnKVxuICAgICAgICAgICAgICAgICAgICAgICAgYXJnID0gKHBoLnByZWNpc2lvbiA/IGFyZy5zdWJzdHJpbmcoMCwgcGgucHJlY2lzaW9uKSA6IGFyZylcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1QnOlxuICAgICAgICAgICAgICAgICAgICAgICAgYXJnID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZykuc2xpY2UoOCwgLTEpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZyA9IChwaC5wcmVjaXNpb24gPyBhcmcuc3Vic3RyaW5nKDAsIHBoLnByZWNpc2lvbikgOiBhcmcpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICBjYXNlICd1JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZyA9IHBhcnNlSW50KGFyZywgMTApID4+PiAwXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICBjYXNlICd2JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZyA9IGFyZy52YWx1ZU9mKClcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZyA9IChwaC5wcmVjaXNpb24gPyBhcmcuc3Vic3RyaW5nKDAsIHBoLnByZWNpc2lvbikgOiBhcmcpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICBjYXNlICd4JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZyA9IChwYXJzZUludChhcmcsIDEwKSA+Pj4gMCkudG9TdHJpbmcoMTYpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdYJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZyA9IChwYXJzZUludChhcmcsIDEwKSA+Pj4gMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChyZS5qc29uLnRlc3QocGgudHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0ICs9IGFyZ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlLm51bWJlci50ZXN0KHBoLnR5cGUpICYmICghaXNfcG9zaXRpdmUgfHwgcGguc2lnbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZ24gPSBpc19wb3NpdGl2ZSA/ICcrJyA6ICctJ1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJnID0gYXJnLnRvU3RyaW5nKCkucmVwbGFjZShyZS5zaWduLCAnJylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZ24gPSAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhZF9jaGFyYWN0ZXIgPSBwaC5wYWRfY2hhciA/IHBoLnBhZF9jaGFyID09PSAnMCcgPyAnMCcgOiBwaC5wYWRfY2hhci5jaGFyQXQoMSkgOiAnICdcbiAgICAgICAgICAgICAgICAgICAgcGFkX2xlbmd0aCA9IHBoLndpZHRoIC0gKHNpZ24gKyBhcmcpLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICBwYWQgPSBwaC53aWR0aCA/IChwYWRfbGVuZ3RoID4gMCA/IHBhZF9jaGFyYWN0ZXIucmVwZWF0KHBhZF9sZW5ndGgpIDogJycpIDogJydcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0ICs9IHBoLmFsaWduID8gc2lnbiArIGFyZyArIHBhZCA6IChwYWRfY2hhcmFjdGVyID09PSAnMCcgPyBzaWduICsgcGFkICsgYXJnIDogcGFkICsgc2lnbiArIGFyZylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dHB1dFxuICAgIH1cblxuICAgIHZhciBzcHJpbnRmX2NhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gICAgZnVuY3Rpb24gc3ByaW50Zl9wYXJzZShmbXQpIHtcbiAgICAgICAgaWYgKHNwcmludGZfY2FjaGVbZm10XSkge1xuICAgICAgICAgICAgcmV0dXJuIHNwcmludGZfY2FjaGVbZm10XVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF9mbXQgPSBmbXQsIG1hdGNoLCBwYXJzZV90cmVlID0gW10sIGFyZ19uYW1lcyA9IDBcbiAgICAgICAgd2hpbGUgKF9mbXQpIHtcbiAgICAgICAgICAgIGlmICgobWF0Y2ggPSByZS50ZXh0LmV4ZWMoX2ZtdCkpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcGFyc2VfdHJlZS5wdXNoKG1hdGNoWzBdKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoKG1hdGNoID0gcmUubW9kdWxvLmV4ZWMoX2ZtdCkpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcGFyc2VfdHJlZS5wdXNoKCclJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKChtYXRjaCA9IHJlLnBsYWNlaG9sZGVyLmV4ZWMoX2ZtdCkpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoWzJdKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ19uYW1lcyB8PSAxXG4gICAgICAgICAgICAgICAgICAgIHZhciBmaWVsZF9saXN0ID0gW10sIHJlcGxhY2VtZW50X2ZpZWxkID0gbWF0Y2hbMl0sIGZpZWxkX21hdGNoID0gW11cbiAgICAgICAgICAgICAgICAgICAgaWYgKChmaWVsZF9tYXRjaCA9IHJlLmtleS5leGVjKHJlcGxhY2VtZW50X2ZpZWxkKSkgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkX2xpc3QucHVzaChmaWVsZF9tYXRjaFsxXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlICgocmVwbGFjZW1lbnRfZmllbGQgPSByZXBsYWNlbWVudF9maWVsZC5zdWJzdHJpbmcoZmllbGRfbWF0Y2hbMF0ubGVuZ3RoKSkgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChmaWVsZF9tYXRjaCA9IHJlLmtleV9hY2Nlc3MuZXhlYyhyZXBsYWNlbWVudF9maWVsZCkpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkX2xpc3QucHVzaChmaWVsZF9tYXRjaFsxXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoKGZpZWxkX21hdGNoID0gcmUuaW5kZXhfYWNjZXNzLmV4ZWMocmVwbGFjZW1lbnRfZmllbGQpKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZF9saXN0LnB1c2goZmllbGRfbWF0Y2hbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoJ1tzcHJpbnRmXSBmYWlsZWQgdG8gcGFyc2UgbmFtZWQgYXJndW1lbnQga2V5JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoJ1tzcHJpbnRmXSBmYWlsZWQgdG8gcGFyc2UgbmFtZWQgYXJndW1lbnQga2V5JylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBtYXRjaFsyXSA9IGZpZWxkX2xpc3RcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ19uYW1lcyB8PSAyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChhcmdfbmFtZXMgPT09IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbc3ByaW50Zl0gbWl4aW5nIHBvc2l0aW9uYWwgYW5kIG5hbWVkIHBsYWNlaG9sZGVycyBpcyBub3QgKHlldCkgc3VwcG9ydGVkJylcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwYXJzZV90cmVlLnB1c2goXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBtYXRjaFswXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtX25vOiAgICBtYXRjaFsxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleXM6ICAgICAgICBtYXRjaFsyXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZ246ICAgICAgICBtYXRjaFszXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZF9jaGFyOiAgICBtYXRjaFs0XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduOiAgICAgICBtYXRjaFs1XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAgICAgICBtYXRjaFs2XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWNpc2lvbjogICBtYXRjaFs3XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICAgICAgICBtYXRjaFs4XVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKCdbc3ByaW50Zl0gdW5leHBlY3RlZCBwbGFjZWhvbGRlcicpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfZm10ID0gX2ZtdC5zdWJzdHJpbmcobWF0Y2hbMF0ubGVuZ3RoKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzcHJpbnRmX2NhY2hlW2ZtdF0gPSBwYXJzZV90cmVlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZXhwb3J0IHRvIGVpdGhlciBicm93c2VyIG9yIG5vZGUuanNcbiAgICAgKi9cbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBxdW90ZS1wcm9wcyAqL1xuICAgIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgZXhwb3J0c1snc3ByaW50ZiddID0gc3ByaW50ZlxuICAgICAgICBleHBvcnRzWyd2c3ByaW50ZiddID0gdnNwcmludGZcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHdpbmRvd1snc3ByaW50ZiddID0gc3ByaW50ZlxuICAgICAgICB3aW5kb3dbJ3ZzcHJpbnRmJ10gPSB2c3ByaW50ZlxuXG4gICAgICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZVsnYW1kJ10pIHtcbiAgICAgICAgICAgIGRlZmluZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAnc3ByaW50Zic6IHNwcmludGYsXG4gICAgICAgICAgICAgICAgICAgICd2c3ByaW50Zic6IHZzcHJpbnRmXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiBlc2xpbnQtZW5hYmxlIHF1b3RlLXByb3BzICovXG59KCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgYml0cyA9IHJlcXVpcmUoJ2JpdC10d2lkZGxlJylcbnZhciBkdXAgPSByZXF1aXJlKCdkdXAnKVxudmFyIEJ1ZmZlciA9IHJlcXVpcmUoJ2J1ZmZlcicpLkJ1ZmZlclxuXG4vL0xlZ2FjeSBwb29sIHN1cHBvcnRcbmlmKCFnbG9iYWwuX19UWVBFREFSUkFZX1BPT0wpIHtcbiAgZ2xvYmFsLl9fVFlQRURBUlJBWV9QT09MID0ge1xuICAgICAgVUlOVDggICAgIDogZHVwKFszMiwgMF0pXG4gICAgLCBVSU5UMTYgICAgOiBkdXAoWzMyLCAwXSlcbiAgICAsIFVJTlQzMiAgICA6IGR1cChbMzIsIDBdKVxuICAgICwgQklHVUlOVDY0IDogZHVwKFszMiwgMF0pXG4gICAgLCBJTlQ4ICAgICAgOiBkdXAoWzMyLCAwXSlcbiAgICAsIElOVDE2ICAgICA6IGR1cChbMzIsIDBdKVxuICAgICwgSU5UMzIgICAgIDogZHVwKFszMiwgMF0pXG4gICAgLCBCSUdJTlQ2NCAgOiBkdXAoWzMyLCAwXSlcbiAgICAsIEZMT0FUICAgICA6IGR1cChbMzIsIDBdKVxuICAgICwgRE9VQkxFICAgIDogZHVwKFszMiwgMF0pXG4gICAgLCBEQVRBICAgICAgOiBkdXAoWzMyLCAwXSlcbiAgICAsIFVJTlQ4QyAgICA6IGR1cChbMzIsIDBdKVxuICAgICwgQlVGRkVSICAgIDogZHVwKFszMiwgMF0pXG4gIH1cbn1cblxudmFyIGhhc1VpbnQ4QyA9ICh0eXBlb2YgVWludDhDbGFtcGVkQXJyYXkpICE9PSAndW5kZWZpbmVkJ1xudmFyIGhhc0JpZ1VpbnQ2NCA9ICh0eXBlb2YgQmlnVWludDY0QXJyYXkpICE9PSAndW5kZWZpbmVkJ1xudmFyIGhhc0JpZ0ludDY0ID0gKHR5cGVvZiBCaWdJbnQ2NEFycmF5KSAhPT0gJ3VuZGVmaW5lZCdcbnZhciBQT09MID0gZ2xvYmFsLl9fVFlQRURBUlJBWV9QT09MXG5cbi8vVXBncmFkZSBwb29sXG5pZighUE9PTC5VSU5UOEMpIHtcbiAgUE9PTC5VSU5UOEMgPSBkdXAoWzMyLCAwXSlcbn1cbmlmKCFQT09MLkJJR1VJTlQ2NCkge1xuICBQT09MLkJJR1VJTlQ2NCA9IGR1cChbMzIsIDBdKVxufVxuaWYoIVBPT0wuQklHSU5UNjQpIHtcbiAgUE9PTC5CSUdJTlQ2NCA9IGR1cChbMzIsIDBdKVxufVxuaWYoIVBPT0wuQlVGRkVSKSB7XG4gIFBPT0wuQlVGRkVSID0gZHVwKFszMiwgMF0pXG59XG5cbi8vTmV3IHRlY2huaXF1ZTogT25seSBhbGxvY2F0ZSBmcm9tIEFycmF5QnVmZmVyVmlldyBhbmQgQnVmZmVyXG52YXIgREFUQSAgICA9IFBPT0wuREFUQVxuICAsIEJVRkZFUiAgPSBQT09MLkJVRkZFUlxuXG5leHBvcnRzLmZyZWUgPSBmdW5jdGlvbiBmcmVlKGFycmF5KSB7XG4gIGlmKEJ1ZmZlci5pc0J1ZmZlcihhcnJheSkpIHtcbiAgICBCVUZGRVJbYml0cy5sb2cyKGFycmF5Lmxlbmd0aCldLnB1c2goYXJyYXkpXG4gIH0gZWxzZSB7XG4gICAgaWYoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFycmF5KSAhPT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJykge1xuICAgICAgYXJyYXkgPSBhcnJheS5idWZmZXJcbiAgICB9XG4gICAgaWYoIWFycmF5KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdmFyIG4gPSBhcnJheS5sZW5ndGggfHwgYXJyYXkuYnl0ZUxlbmd0aFxuICAgIHZhciBsb2dfbiA9IGJpdHMubG9nMihuKXwwXG4gICAgREFUQVtsb2dfbl0ucHVzaChhcnJheSlcbiAgfVxufVxuXG5mdW5jdGlvbiBmcmVlQXJyYXlCdWZmZXIoYnVmZmVyKSB7XG4gIGlmKCFidWZmZXIpIHtcbiAgICByZXR1cm5cbiAgfVxuICB2YXIgbiA9IGJ1ZmZlci5sZW5ndGggfHwgYnVmZmVyLmJ5dGVMZW5ndGhcbiAgdmFyIGxvZ19uID0gYml0cy5sb2cyKG4pXG4gIERBVEFbbG9nX25dLnB1c2goYnVmZmVyKVxufVxuXG5mdW5jdGlvbiBmcmVlVHlwZWRBcnJheShhcnJheSkge1xuICBmcmVlQXJyYXlCdWZmZXIoYXJyYXkuYnVmZmVyKVxufVxuXG5leHBvcnRzLmZyZWVVaW50OCA9XG5leHBvcnRzLmZyZWVVaW50MTYgPVxuZXhwb3J0cy5mcmVlVWludDMyID1cbmV4cG9ydHMuZnJlZUJpZ1VpbnQ2NCA9XG5leHBvcnRzLmZyZWVJbnQ4ID1cbmV4cG9ydHMuZnJlZUludDE2ID1cbmV4cG9ydHMuZnJlZUludDMyID1cbmV4cG9ydHMuZnJlZUJpZ0ludDY0ID1cbmV4cG9ydHMuZnJlZUZsb2F0MzIgPSBcbmV4cG9ydHMuZnJlZUZsb2F0ID1cbmV4cG9ydHMuZnJlZUZsb2F0NjQgPSBcbmV4cG9ydHMuZnJlZURvdWJsZSA9IFxuZXhwb3J0cy5mcmVlVWludDhDbGFtcGVkID0gXG5leHBvcnRzLmZyZWVEYXRhVmlldyA9IGZyZWVUeXBlZEFycmF5XG5cbmV4cG9ydHMuZnJlZUFycmF5QnVmZmVyID0gZnJlZUFycmF5QnVmZmVyXG5cbmV4cG9ydHMuZnJlZUJ1ZmZlciA9IGZ1bmN0aW9uIGZyZWVCdWZmZXIoYXJyYXkpIHtcbiAgQlVGRkVSW2JpdHMubG9nMihhcnJheS5sZW5ndGgpXS5wdXNoKGFycmF5KVxufVxuXG5leHBvcnRzLm1hbGxvYyA9IGZ1bmN0aW9uIG1hbGxvYyhuLCBkdHlwZSkge1xuICBpZihkdHlwZSA9PT0gdW5kZWZpbmVkIHx8IGR0eXBlID09PSAnYXJyYXlidWZmZXInKSB7XG4gICAgcmV0dXJuIG1hbGxvY0FycmF5QnVmZmVyKG4pXG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoKGR0eXBlKSB7XG4gICAgICBjYXNlICd1aW50OCc6XG4gICAgICAgIHJldHVybiBtYWxsb2NVaW50OChuKVxuICAgICAgY2FzZSAndWludDE2JzpcbiAgICAgICAgcmV0dXJuIG1hbGxvY1VpbnQxNihuKVxuICAgICAgY2FzZSAndWludDMyJzpcbiAgICAgICAgcmV0dXJuIG1hbGxvY1VpbnQzMihuKVxuICAgICAgY2FzZSAnaW50OCc6XG4gICAgICAgIHJldHVybiBtYWxsb2NJbnQ4KG4pXG4gICAgICBjYXNlICdpbnQxNic6XG4gICAgICAgIHJldHVybiBtYWxsb2NJbnQxNihuKVxuICAgICAgY2FzZSAnaW50MzInOlxuICAgICAgICByZXR1cm4gbWFsbG9jSW50MzIobilcbiAgICAgIGNhc2UgJ2Zsb2F0JzpcbiAgICAgIGNhc2UgJ2Zsb2F0MzInOlxuICAgICAgICByZXR1cm4gbWFsbG9jRmxvYXQobilcbiAgICAgIGNhc2UgJ2RvdWJsZSc6XG4gICAgICBjYXNlICdmbG9hdDY0JzpcbiAgICAgICAgcmV0dXJuIG1hbGxvY0RvdWJsZShuKVxuICAgICAgY2FzZSAndWludDhfY2xhbXBlZCc6XG4gICAgICAgIHJldHVybiBtYWxsb2NVaW50OENsYW1wZWQobilcbiAgICAgIGNhc2UgJ2JpZ2ludDY0JzpcbiAgICAgICAgcmV0dXJuIG1hbGxvY0JpZ0ludDY0KG4pXG4gICAgICBjYXNlICdiaWd1aW50NjQnOlxuICAgICAgICByZXR1cm4gbWFsbG9jQmlnVWludDY0KG4pXG4gICAgICBjYXNlICdidWZmZXInOlxuICAgICAgICByZXR1cm4gbWFsbG9jQnVmZmVyKG4pXG4gICAgICBjYXNlICdkYXRhJzpcbiAgICAgIGNhc2UgJ2RhdGF2aWV3JzpcbiAgICAgICAgcmV0dXJuIG1hbGxvY0RhdGFWaWV3KG4pXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsXG59XG5cbmZ1bmN0aW9uIG1hbGxvY0FycmF5QnVmZmVyKG4pIHtcbiAgdmFyIG4gPSBiaXRzLm5leHRQb3cyKG4pXG4gIHZhciBsb2dfbiA9IGJpdHMubG9nMihuKVxuICB2YXIgZCA9IERBVEFbbG9nX25dXG4gIGlmKGQubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBkLnBvcCgpXG4gIH1cbiAgcmV0dXJuIG5ldyBBcnJheUJ1ZmZlcihuKVxufVxuZXhwb3J0cy5tYWxsb2NBcnJheUJ1ZmZlciA9IG1hbGxvY0FycmF5QnVmZmVyXG5cbmZ1bmN0aW9uIG1hbGxvY1VpbnQ4KG4pIHtcbiAgcmV0dXJuIG5ldyBVaW50OEFycmF5KG1hbGxvY0FycmF5QnVmZmVyKG4pLCAwLCBuKVxufVxuZXhwb3J0cy5tYWxsb2NVaW50OCA9IG1hbGxvY1VpbnQ4XG5cbmZ1bmN0aW9uIG1hbGxvY1VpbnQxNihuKSB7XG4gIHJldHVybiBuZXcgVWludDE2QXJyYXkobWFsbG9jQXJyYXlCdWZmZXIoMipuKSwgMCwgbilcbn1cbmV4cG9ydHMubWFsbG9jVWludDE2ID0gbWFsbG9jVWludDE2XG5cbmZ1bmN0aW9uIG1hbGxvY1VpbnQzMihuKSB7XG4gIHJldHVybiBuZXcgVWludDMyQXJyYXkobWFsbG9jQXJyYXlCdWZmZXIoNCpuKSwgMCwgbilcbn1cbmV4cG9ydHMubWFsbG9jVWludDMyID0gbWFsbG9jVWludDMyXG5cbmZ1bmN0aW9uIG1hbGxvY0ludDgobikge1xuICByZXR1cm4gbmV3IEludDhBcnJheShtYWxsb2NBcnJheUJ1ZmZlcihuKSwgMCwgbilcbn1cbmV4cG9ydHMubWFsbG9jSW50OCA9IG1hbGxvY0ludDhcblxuZnVuY3Rpb24gbWFsbG9jSW50MTYobikge1xuICByZXR1cm4gbmV3IEludDE2QXJyYXkobWFsbG9jQXJyYXlCdWZmZXIoMipuKSwgMCwgbilcbn1cbmV4cG9ydHMubWFsbG9jSW50MTYgPSBtYWxsb2NJbnQxNlxuXG5mdW5jdGlvbiBtYWxsb2NJbnQzMihuKSB7XG4gIHJldHVybiBuZXcgSW50MzJBcnJheShtYWxsb2NBcnJheUJ1ZmZlcig0Km4pLCAwLCBuKVxufVxuZXhwb3J0cy5tYWxsb2NJbnQzMiA9IG1hbGxvY0ludDMyXG5cbmZ1bmN0aW9uIG1hbGxvY0Zsb2F0KG4pIHtcbiAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkobWFsbG9jQXJyYXlCdWZmZXIoNCpuKSwgMCwgbilcbn1cbmV4cG9ydHMubWFsbG9jRmxvYXQzMiA9IGV4cG9ydHMubWFsbG9jRmxvYXQgPSBtYWxsb2NGbG9hdFxuXG5mdW5jdGlvbiBtYWxsb2NEb3VibGUobikge1xuICByZXR1cm4gbmV3IEZsb2F0NjRBcnJheShtYWxsb2NBcnJheUJ1ZmZlcig4Km4pLCAwLCBuKVxufVxuZXhwb3J0cy5tYWxsb2NGbG9hdDY0ID0gZXhwb3J0cy5tYWxsb2NEb3VibGUgPSBtYWxsb2NEb3VibGVcblxuZnVuY3Rpb24gbWFsbG9jVWludDhDbGFtcGVkKG4pIHtcbiAgaWYoaGFzVWludDhDKSB7XG4gICAgcmV0dXJuIG5ldyBVaW50OENsYW1wZWRBcnJheShtYWxsb2NBcnJheUJ1ZmZlcihuKSwgMCwgbilcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbWFsbG9jVWludDgobilcbiAgfVxufVxuZXhwb3J0cy5tYWxsb2NVaW50OENsYW1wZWQgPSBtYWxsb2NVaW50OENsYW1wZWRcblxuZnVuY3Rpb24gbWFsbG9jQmlnVWludDY0KG4pIHtcbiAgaWYoaGFzQmlnVWludDY0KSB7XG4gICAgcmV0dXJuIG5ldyBCaWdVaW50NjRBcnJheShtYWxsb2NBcnJheUJ1ZmZlcig4Km4pLCAwLCBuKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5leHBvcnRzLm1hbGxvY0JpZ1VpbnQ2NCA9IG1hbGxvY0JpZ1VpbnQ2NFxuXG5mdW5jdGlvbiBtYWxsb2NCaWdJbnQ2NChuKSB7XG4gIGlmIChoYXNCaWdJbnQ2NCkge1xuICAgIHJldHVybiBuZXcgQmlnSW50NjRBcnJheShtYWxsb2NBcnJheUJ1ZmZlcig4Km4pLCAwLCBuKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5leHBvcnRzLm1hbGxvY0JpZ0ludDY0ID0gbWFsbG9jQmlnSW50NjRcblxuZnVuY3Rpb24gbWFsbG9jRGF0YVZpZXcobikge1xuICByZXR1cm4gbmV3IERhdGFWaWV3KG1hbGxvY0FycmF5QnVmZmVyKG4pLCAwLCBuKVxufVxuZXhwb3J0cy5tYWxsb2NEYXRhVmlldyA9IG1hbGxvY0RhdGFWaWV3XG5cbmZ1bmN0aW9uIG1hbGxvY0J1ZmZlcihuKSB7XG4gIG4gPSBiaXRzLm5leHRQb3cyKG4pXG4gIHZhciBsb2dfbiA9IGJpdHMubG9nMihuKVxuICB2YXIgY2FjaGUgPSBCVUZGRVJbbG9nX25dXG4gIGlmKGNhY2hlLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gY2FjaGUucG9wKClcbiAgfVxuICByZXR1cm4gbmV3IEJ1ZmZlcihuKVxufVxuZXhwb3J0cy5tYWxsb2NCdWZmZXIgPSBtYWxsb2NCdWZmZXJcblxuZXhwb3J0cy5jbGVhckNhY2hlID0gZnVuY3Rpb24gY2xlYXJDYWNoZSgpIHtcbiAgZm9yKHZhciBpPTA7IGk8MzI7ICsraSkge1xuICAgIFBPT0wuVUlOVDhbaV0ubGVuZ3RoID0gMFxuICAgIFBPT0wuVUlOVDE2W2ldLmxlbmd0aCA9IDBcbiAgICBQT09MLlVJTlQzMltpXS5sZW5ndGggPSAwXG4gICAgUE9PTC5JTlQ4W2ldLmxlbmd0aCA9IDBcbiAgICBQT09MLklOVDE2W2ldLmxlbmd0aCA9IDBcbiAgICBQT09MLklOVDMyW2ldLmxlbmd0aCA9IDBcbiAgICBQT09MLkZMT0FUW2ldLmxlbmd0aCA9IDBcbiAgICBQT09MLkRPVUJMRVtpXS5sZW5ndGggPSAwXG4gICAgUE9PTC5CSUdVSU5UNjRbaV0ubGVuZ3RoID0gMFxuICAgIFBPT0wuQklHSU5UNjRbaV0ubGVuZ3RoID0gMFxuICAgIFBPT0wuVUlOVDhDW2ldLmxlbmd0aCA9IDBcbiAgICBEQVRBW2ldLmxlbmd0aCA9IDBcbiAgICBCVUZGRVJbaV0ubGVuZ3RoID0gMFxuICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIlxuXG5mdW5jdGlvbiB1bmlxdWVfcHJlZChsaXN0LCBjb21wYXJlKSB7XG4gIHZhciBwdHIgPSAxXG4gICAgLCBsZW4gPSBsaXN0Lmxlbmd0aFxuICAgICwgYT1saXN0WzBdLCBiPWxpc3RbMF1cbiAgZm9yKHZhciBpPTE7IGk8bGVuOyArK2kpIHtcbiAgICBiID0gYVxuICAgIGEgPSBsaXN0W2ldXG4gICAgaWYoY29tcGFyZShhLCBiKSkge1xuICAgICAgaWYoaSA9PT0gcHRyKSB7XG4gICAgICAgIHB0cisrXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgICBsaXN0W3B0cisrXSA9IGFcbiAgICB9XG4gIH1cbiAgbGlzdC5sZW5ndGggPSBwdHJcbiAgcmV0dXJuIGxpc3Rcbn1cblxuZnVuY3Rpb24gdW5pcXVlX2VxKGxpc3QpIHtcbiAgdmFyIHB0ciA9IDFcbiAgICAsIGxlbiA9IGxpc3QubGVuZ3RoXG4gICAgLCBhPWxpc3RbMF0sIGIgPSBsaXN0WzBdXG4gIGZvcih2YXIgaT0xOyBpPGxlbjsgKytpLCBiPWEpIHtcbiAgICBiID0gYVxuICAgIGEgPSBsaXN0W2ldXG4gICAgaWYoYSAhPT0gYikge1xuICAgICAgaWYoaSA9PT0gcHRyKSB7XG4gICAgICAgIHB0cisrXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgICBsaXN0W3B0cisrXSA9IGFcbiAgICB9XG4gIH1cbiAgbGlzdC5sZW5ndGggPSBwdHJcbiAgcmV0dXJuIGxpc3Rcbn1cblxuZnVuY3Rpb24gdW5pcXVlKGxpc3QsIGNvbXBhcmUsIHNvcnRlZCkge1xuICBpZihsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBsaXN0XG4gIH1cbiAgaWYoY29tcGFyZSkge1xuICAgIGlmKCFzb3J0ZWQpIHtcbiAgICAgIGxpc3Quc29ydChjb21wYXJlKVxuICAgIH1cbiAgICByZXR1cm4gdW5pcXVlX3ByZWQobGlzdCwgY29tcGFyZSlcbiAgfVxuICBpZighc29ydGVkKSB7XG4gICAgbGlzdC5zb3J0KClcbiAgfVxuICByZXR1cm4gdW5pcXVlX2VxKGxpc3QpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gdW5pcXVlXG4iLCJ2YXIgaGlkZGVuU3RvcmUgPSByZXF1aXJlKCcuL2hpZGRlbi1zdG9yZS5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVN0b3JlO1xuXG5mdW5jdGlvbiBjcmVhdGVTdG9yZSgpIHtcbiAgICB2YXIga2V5ID0ge307XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICBpZiAoKHR5cGVvZiBvYmogIT09ICdvYmplY3QnIHx8IG9iaiA9PT0gbnVsbCkgJiZcbiAgICAgICAgICAgIHR5cGVvZiBvYmogIT09ICdmdW5jdGlvbidcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1dlYWttYXAtc2hpbTogS2V5IG11c3QgYmUgb2JqZWN0JylcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzdG9yZSA9IG9iai52YWx1ZU9mKGtleSk7XG4gICAgICAgIHJldHVybiBzdG9yZSAmJiBzdG9yZS5pZGVudGl0eSA9PT0ga2V5ID9cbiAgICAgICAgICAgIHN0b3JlIDogaGlkZGVuU3RvcmUob2JqLCBrZXkpO1xuICAgIH07XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGhpZGRlblN0b3JlO1xuXG5mdW5jdGlvbiBoaWRkZW5TdG9yZShvYmosIGtleSkge1xuICAgIHZhciBzdG9yZSA9IHsgaWRlbnRpdHk6IGtleSB9O1xuICAgIHZhciB2YWx1ZU9mID0gb2JqLnZhbHVlT2Y7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBcInZhbHVlT2ZcIiwge1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgIT09IGtleSA/XG4gICAgICAgICAgICAgICAgdmFsdWVPZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpIDogc3RvcmU7XG4gICAgICAgIH0sXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3RvcmU7XG59XG4iLCIvLyBPcmlnaW5hbCAtIEBHb3pvbGEuXG4vLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9Hb3phbGEvMTI2OTk5MVxuLy8gVGhpcyBpcyBhIHJlaW1wbGVtZW50ZWQgdmVyc2lvbiAod2l0aCBhIGZldyBidWcgZml4ZXMpLlxuXG52YXIgY3JlYXRlU3RvcmUgPSByZXF1aXJlKCcuL2NyZWF0ZS1zdG9yZS5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHdlYWtNYXA7XG5cbmZ1bmN0aW9uIHdlYWtNYXAoKSB7XG4gICAgdmFyIHByaXZhdGVzID0gY3JlYXRlU3RvcmUoKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgICdnZXQnOiBmdW5jdGlvbiAoa2V5LCBmYWxsYmFjaykge1xuICAgICAgICAgICAgdmFyIHN0b3JlID0gcHJpdmF0ZXMoa2V5KVxuICAgICAgICAgICAgcmV0dXJuIHN0b3JlLmhhc093blByb3BlcnR5KCd2YWx1ZScpID9cbiAgICAgICAgICAgICAgICBzdG9yZS52YWx1ZSA6IGZhbGxiYWNrXG4gICAgICAgIH0sXG4gICAgICAgICdzZXQnOiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgcHJpdmF0ZXMoa2V5KS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG4gICAgICAgICdoYXMnOiBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiAndmFsdWUnIGluIHByaXZhdGVzKGtleSk7XG4gICAgICAgIH0sXG4gICAgICAgICdkZWxldGUnOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gZGVsZXRlIHByaXZhdGVzKGtleSkudmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJpbXBvcnQgdHJhbnNpdGlvbnMgZnJvbSBcImdsLXRyYW5zaXRpb25zXCI7XG5pbXBvcnQgY3JlYXRlVHJhbnNpdGlvbiBmcm9tIFwiZ2wtdHJhbnNpdGlvblwiO1xuaW1wb3J0IGNyZWF0ZVRleHR1cmUgZnJvbSBcImdsLXRleHR1cmUyZFwiO1xuXG5hc3luYyBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIGNvbnN0IGltYWdlRnJvbSA9IGF3YWl0IGxvYWRJbWFnZShcImltZzEuanBnXCIpO1xuICBjb25zdCBpbWFnZVRvID0gYXdhaXQgbG9hZEltYWdlKFwiaW1nMi5qcGdcIik7XG4gIC8vIF4gTkI6IHdlIGp1c3QgYXNzdW1lZCB5b3UgaGF2ZSB0aGVzZSAyIGltYWdlRnJvbSBhbmQgaW1hZ2VUbyBJbWFnZSBvYmplY3RzIHRoYXQgaGF2ZSB0aGUgaW1hZ2UgbG9hZGVkIGFuZCByZWFkeVxuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiY2FudmFzXCIpO1xuICAvLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNhbnZhcyk7XG4gIGNhbnZhcy53aWR0aCA9IGltYWdlRnJvbS53aWR0aDtcbiAgY2FudmFzLmhlaWdodCA9IGltYWdlVG8uaGVpZ2h0O1xuXG4gIGNvbnN0IGdsID0gY2FudmFzLmdldENvbnRleHQoXCJ3ZWJnbFwiKSB8fCBjYW52YXMuZ2V0Q29udGV4dChcImV4cGVyaW1lbnRhbC13ZWJnbFwiKTtcbiAgZ2wucGl4ZWxTdG9yZWkoZ2wuVU5QQUNLX0ZMSVBfWV9XRUJHTCwgdHJ1ZSk7XG4gIGNvbnN0IGJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgYnVmZmVyKTtcbiAgZ2wuYnVmZmVyRGF0YShcbiAgICBnbC5BUlJBWV9CVUZGRVIsXG4gICAgbmV3IEZsb2F0MzJBcnJheShbLTEsIC0xLCAtMSwgNCwgNCwgLTFdKSwgLy8gc2VlIGEtYmlnLXRyaWFuZ2xlXG4gICAgZ2wuU1RBVElDX0RSQVdcbik7XG5nbC52aWV3cG9ydCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG5cbmxldCB0cmFuc2l0aW9uTnVtID0gMDtcblxuY29uc3QgaW1nMSA9IGNyZWF0ZVRleHR1cmUoZ2wsIGltYWdlRnJvbSk7XG5pbWcxLm1pbkZpbHRlciA9IGdsLkxJTkVBUjtcbmltZzEubWFnRmlsdGVyID0gZ2wuTElORUFSO1xuXG5jb25zdCBpbWcyID0gY3JlYXRlVGV4dHVyZShnbCwgaW1hZ2VUbyk7XG5pbWcyLm1pbkZpbHRlciA9IGdsLkxJTkVBUjtcbmltZzIubWFnRmlsdGVyID0gZ2wuTElORUFSO1xuXG5sZXQgdHJhbnNpdGlvbiA9IGNyZWF0ZVRyYW5zaXRpb24oZ2wsIHRyYW5zaXRpb25zW3RyYW5zaXRpb25OdW1dKTsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dsLXRyYW5zaXRpb25zL2dsLXRyYW5zaXRpb25zL2Jsb2IvbWFzdGVyL3RyYW5zaXRpb25zL2N1YmUuZ2xzbFxuXG4vLyBhbmltYXRlcyBmb3JldmVyIVxuY29uc3QgZnBzID0gNjA7XG5jb25zdCBmcmFtZUR1cmF0aW9uID0gMTAwMCAvIGZwcztcbmxldCB0aW1lID0gMDtcbmxldCBsYXN0VGltZSA9IDA7XG5sZXQgcHJvZ3Jlc3MgPSAxMDA7XG5sZXQgZmlyc3RGcmFtZSA9IHRydWU7XG5sZXQgZnJvbSA9IGltZzE7XG5sZXQgdG8gPSBpbWcyO1xuZnVuY3Rpb24gcmVuZGVyXyhlbGFwc2VkKSB7XG4gIGxldCBkZWx0YVxuICBpZihmaXJzdEZyYW1lKSB7XG4gICAgZGVsdGEgPSAwO1xuICAgIGZpcnN0RnJhbWUgPSBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICBkZWx0YSA9IGVsYXBzZWQgLSBsYXN0VGltZVxuICB9XG5cbiAgbGFzdFRpbWUgPSBlbGFwc2VkO1xuICBjb25zdCBzdGVwID0gZGVsdGEgLyBmcmFtZUR1cmF0aW9uO1xuICB0aW1lICs9IHN0ZXA7XG4gIGNvbnN0IGN1cnJlbnRQcm9ncmVzcyA9ICh0aW1lLzEwMCklMTtcblxuICBpZihjdXJyZW50UHJvZ3Jlc3MgPiBwcm9ncmVzcyB8fCBwcm9ncmVzcyA9PT0gMCkge1xuICAgIHRyYW5zaXRpb24uZHJhdyhwcm9ncmVzcywgZnJvbSwgdG8sIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgcHJvZ3Jlc3MgPSBjdXJyZW50UHJvZ3Jlc3NcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyXyk7XG4gIH0gZWxzZSB7XG4gICAgdHJhbnNpdGlvbi5kcmF3KDEsIGZyb20sIHRvLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIHRyYW5zaXRpb25OdW0rKztcbiAgICBpZih0cmFuc2l0aW9uTnVtICUgMikge1xuICAgICAgZnJvbSA9IGltZzI7XG4gICAgICB0byA9IGltZzFcbiAgICB9IGVsc2Uge1xuICAgICAgZnJvbSA9IGltZzE7XG4gICAgICB0byA9IGltZzI7XG4gICAgfVxuICAgIGZpcnN0RnJhbWUgPSB0cnVlO1xuICAgIGlmKHRyYW5zaXRpb25OdW0gPT09IHRyYW5zaXRpb25zLmxlbmd0aC0xKSB0cmFuc2l0aW9uTnVtID0gMDtcbiAgICB0cmFuc2l0aW9uID0gY3JlYXRlVHJhbnNpdGlvbihnbCwgdHJhbnNpdGlvbnNbdHJhbnNpdGlvbk51bV0pOyAgICAgXG4gICAgcHJvZ3Jlc3MgPSAwO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyXyk7XG4gICAgfSwgMTAwMClcblxuICB9XG4gIFxufVxuXG5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyXyk7XG5cblxuLy8gbGV0IHByb2dyZXNzID0gMDtcbi8vIGxldCBpc0VuZGVkID0gZmFsc2U7XG4vLyBjb25zdCBsb29wID0gKHQpID0+IHtcbi8vICAgY29uc3QgY3VycmVudFByb2dyZXNzID0gKHQvMTAwMCklMTtcbi8vICAgLy8gaWYoIGN1cnJlbnRQcm9ncmVzcyA+IHByb2dyZXNzKSB7XG4vLyAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xuLy8gICAgIHByb2dyZXNzID0gY3VycmVudFByb2dyZXNzXG4vLyAgICAgdHJhbnNpdGlvbi5kcmF3KCh0LzEwMDApJTEsIGZyb20sIHRvLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuLy8gICAvLyB9IGVsc2Uge1xuLy8gICAvLyAgIHRyYW5zaXRpb24uZHJhdygxLCBmcm9tLCB0bywgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbi8vICAgLy8gICB0cmFuc2l0aW9uTnVtKytcbi8vICAgLy8gICBpZih0cmFuc2l0aW9uTnVtID0gdHJhbnNpdGlvbnMubGVuZ3RoLTEpIHRyYW5zaXRpb25OdW0gPSAwO1xuLy8gICAvLyAgIHRyYW5zaXRpb24gPSBjcmVhdGVUcmFuc2l0aW9uKGdsLCB0cmFuc2l0aW9uc1t0cmFuc2l0aW9uTnVtXSk7IFxuLy8gICAvLyB9XG4vLyAgIGNvbnNvbGUubG9nKHQpO1xuLy8gfVxuXG5cbi8vIHJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcblxuYXN5bmMgZnVuY3Rpb24gbG9hZEltYWdlKHVybCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXMgPT4ge1xuICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgaW1nLnNyYyA9IHVybDtcbiAgICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHJlcyhpbWcpO1xuICAgIH0pXG59XG59XG5cbnJlbmRlcigpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==