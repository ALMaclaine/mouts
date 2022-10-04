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
  ExecFunction,
  ExecRecord,
  ExecReturn,
  Printable,
  Sized,
} from 'is-ts';

import { toArray } from './lang/to-array';
import { toNumber } from './lang/to-number';
import { toString } from './lang/to-string';
import { not } from './lang/not';

//
import { get } from './object/get';

//
import { UNDEFINED, NULL } from './constants';

//

import { Spread } from './types/spread';

export { Spread };

export { toArray, toNumber, not };

// lang/to-string
export { toString };

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
  ExecFunction,
  ExecRecord,
  ExecReturn,
  Printable,
  Sized,
};
