import {
  getKindOf,
  is,
  isKind,
  isSized,
  isString,
  isObject,
  isFloatString,
  isPlainObject,
  isFloat,
  isDate,
  isNull,
  isnt,
  isPrimitive,
  isPrintable,
  isUndefined,
  isRegex,
  isBoolean,
  isArray,
  isFinite,
  isInfinite,
  isInteger,
  isNumber,
  isNaN,
} from 'is-ts';

import { toArray } from './lang/to-array';
import { toNumber } from './lang/to-number';
import { toString } from './lang/to-string';
import { not } from './lang/not';

//
import { Printable } from './types/printable';
import { Sized } from './types/sized';

//
import { get } from './object/get';

//
import { UNDEFINED, NULL } from './constants';

export { toArray, toNumber, not };

// lang/to-string
export { toString };

// types/printable
export { Printable };

// types/sized
export { Sized };

// object
export { get };

// constants
export { UNDEFINED, NULL };

export {
  getKindOf,
  is,
  isKind,
  isSized,
  isString,
  isObject,
  isFloatString,
  isPlainObject,
  isFloat,
  isDate,
  isNull,
  isnt,
  isPrimitive,
  isPrintable,
  isUndefined,
  isRegex,
  isBoolean,
  isArray,
  isFinite,
  isInfinite,
  isInteger,
  isNumber,
  isNaN,
};
