import { isFunction } from './is-function';

describe('lang/isFunction()', function () {
  it('should detect if value is a function', function () {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    expect(isFunction(function () {})).toBe(true);
    expect(isFunction(new Function('return 1;'))).toBe(true);

    expect(isFunction('')).toBe(false);
    expect(isFunction(123)).toBe(false);
    expect(isFunction(null)).toBe(false);
    expect(isFunction({})).toBe(false);
    expect(isFunction([])).toBe(false);
  });
});
