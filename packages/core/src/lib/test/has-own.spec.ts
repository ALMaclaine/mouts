import { hasOwn } from '../has-own';

describe('object/hasOwn()', function () {
  it('should check if object hasOwnProperty', function () {
    const obj = {
      a: 1,
      b: 'foo',
    };

    expect(hasOwn(obj, 'a')).toBe(true);
    expect(hasOwn(obj, 'b')).toBe(true);
    expect(hasOwn(obj, 'hasOwnProperty')).toBe(false);
    expect(hasOwn(obj, 'toString')).toBe(false);
    expect(hasOwn(obj, 'toLocaleString')).toBe(false);
    expect(hasOwn(obj, 'valueOf')).toBe(false);
    expect(hasOwn(obj, 'isPrototypeOf')).toBe(false);
    expect(hasOwn(obj, 'propertyIsEnumerable')).toBe(false);
    expect(hasOwn(obj, 'constructor')).toBe(false);
  });

  it('should work even if overwrite prototype properties, including hasOwnProperty', function () {
    const obj = {
      a: 1,
      b: 'foo',
      hasOwnProperty: 'yes',
      toString: 'lorem ipsum',
    };

    expect(hasOwn(obj, 'a')).toBe(true);
    expect(hasOwn(obj, 'b')).toBe(true);
    expect(hasOwn(obj, 'hasOwnProperty')).toBe(true);
    expect(hasOwn(obj, 'toString')).toBe(true);
    expect(hasOwn(obj, 'toLocaleString')).toBe(false);
    expect(hasOwn(obj, 'valueOf')).toBe(false);
    expect(hasOwn(obj, 'isPrototypeOf')).toBe(false);
    expect(hasOwn(obj, 'propertyIsEnumerable')).toBe(false);
    expect(hasOwn(obj, 'constructor')).toBe(false);
  });
});
