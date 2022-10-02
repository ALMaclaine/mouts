import { isBoolean } from './is-boolean';

describe('lang/isBoolean()', function () {
  it('should detect if value is a Boolean', function () {
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
    expect(isBoolean(Boolean(false))).toBe(true);
    expect(isBoolean(Boolean(true))).toBe(true);
    expect(isBoolean(Boolean(0))).toBe(true);
    expect(isBoolean(Boolean(1))).toBe(true);

    expect(isBoolean('')).toBe(false);
    expect(isBoolean(123)).toBe(false);
    expect(isBoolean(null)).toBe(false);
    expect(isBoolean({})).toBe(false);
  });
});
