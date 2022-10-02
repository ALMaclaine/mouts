import { forOwn } from './for-own';

describe('object/forOwn()', function () {
  it('should loop through all properties', function () {
    const obj = {
      foo: 123,
      bar: true,
      lorem: 'ipsum',
    };

    const keys: string[] = [];
    const vals: unknown[] = [];

    forOwn(obj, function (val, key, o) {
      expect(o).toBe(obj);
      keys.push(key);
      vals.push(val);
    });

    expect(keys.length).toBe(3);

    // loop order isn't guaranteed to be always the same
    let haystack: unknown[] = ['foo', 'bar', 'lorem'];
    expect(keys[0] !== keys[1] && keys[0] !== keys[2]).toBe(true);
    expect(haystack).toContain(keys[0]);
    expect(haystack).toContain(keys[1]);
    expect(haystack).toContain(keys[2]);

    haystack = [123, true, 'ipsum'];
    expect(vals[0] !== vals[1] && vals[0] !== vals[2]).toBe(true);
    expect(haystack).toContain(vals[0]);
    expect(haystack).toContain(vals[1]);
    expect(haystack).toContain(vals[2]);
  });

  it('should fix dont enum bug', function () {
    const obj = {
      toString: 123,
      valueOf: true,
      hasOwnProperty: 'ipsum',
    };

    const keys: string[] = [];
    const vals: unknown[] = [];

    forOwn(obj, function (val, key, o) {
      expect(o).toBe(obj);
      keys.push(key);
      vals.push(val);
    });

    expect(keys.length).toBe(3);

    let haystack: unknown[] = ['toString', 'valueOf', 'hasOwnProperty'];
    expect(keys[0] !== keys[1] && keys[0] !== keys[2]).toBe(true);
    expect(haystack).toContain(keys[0]);
    expect(haystack).toContain(keys[1]);
    expect(haystack).toContain(keys[2]);

    haystack = [123, true, 'ipsum'];
    expect(vals[0] !== vals[1] && vals[0] !== vals[2]).toBe(true);
    expect(haystack).toContain(vals[0]);
    expect(haystack).toContain(vals[1]);
    expect(haystack).toContain(vals[2]);
  });

  it('should allow custom thisObject', function () {
    const obj = {
      a: 123,
      b: true,
      c: 'ipsum',
    };

    let count = 0;

    forOwn(
      obj,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      function (this: any, val, key, o) {
        expect(o).toBe(obj);
        expect(this).toBe(obj);
        count++;
      },
      obj
    );

    expect(count).toEqual(3);
  });

  it('should filter prototype properties', function () {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const Foo = function (this: any) {
      this.lorem = 'ipsum';
    };
    Foo.prototype = { foo: 'bar' };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const obj = new Foo();

    const keys: string[] = [];
    const vals: unknown[] = [];

    forOwn(obj, function (val, key, o) {
      expect(o).toBe(obj);
      keys.push(key);
      vals.push(val);
    });

    expect(keys).toEqual(['lorem']);
    expect(vals).toEqual(['ipsum']);
  });

  it('should allow exiting the iteration early. see #94', function () {
    const obj = {
      a: 123,
      b: true,
      c: 'ipsum',
      d: 456,
    };

    let count = 0;

    forOwn(obj, function () {
      count++;
      if (count === 2) {
        return false;
      }
      return;
    });

    expect(count).toBe(2);
  });
});
