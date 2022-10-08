import { everyObject } from './every-object';
import { isEven } from '@mouts/is';

describe('object/every', function () {
  it('should work on normal object', function () {
    const a1 = { a: 1, b: 2, c: 3 };
    const a2 = { a: 1, b: 3, c: 5 };
    const a3 = { a: 2, b: 4, c: 6 };

    expect(everyObject(a1, isEven)).toBe(false);
    expect(everyObject(a2, isEven)).toBe(false);
    expect(everyObject(a3, isEven)).toBe(true);
  });

  it('should work on empty objects', function () {
    expect(everyObject({}, isEven)).toBe(true);
  });

  it("should avoid don't enum bug on IE 7-8", function () {
    const a1 = { a: 2, toString: 3 };
    const a2 = { a: 2, toString: 4 };
    expect(everyObject(a1, isEven)).toBe(false);
    expect(everyObject(a2, isEven)).toBe(true);
  });
});
