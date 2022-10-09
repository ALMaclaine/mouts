import { isArray, isNaN, isNumber, isObject, isUndefined } from '@mouts/is';
import { parseFloat } from './parse-float';
import { get, toString } from '@mouts/core';

const stache = /\{\{([^}]+)}}/g;

const interpolate = (
  template: string,
  replacements: string[] | Record<string, unknown>,
  syntax?: string | RegExp
) => {
  const replaceFn = function (_: string, prop: string) {
    if (isArray(replacements)) {
      const parsed = parseFloat(prop);
      if (isNumber(parsed) && !isNaN(parsed)) {
        const val = replacements[parsed];
        return !isUndefined(val) ? toString(val) : '';
      }
    } else if (isObject(replacements)) {
      const val = get(replacements, prop);
      return !isUndefined(val) ? toString(val) : '';
    }
    return prop;
  };
  return template.replace(syntax || stache, replaceFn);
};
export { interpolate };
