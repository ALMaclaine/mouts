import { toArray } from './to-array';

describe('lang/toArray()', function () {
  it('should convert array like objects into array', function () {
    const obj = {
      '0': 'foo',
      '1': 'bar',
      '2': 'dolor',
      length: 3,
    };

    expect(toArray<string>(obj)).toEqual(['foo', 'bar', 'dolor']);
  });

  it('should convert rest obj', function () {
    let result;
    const fn = function (...rest: unknown[]) {
      // eslint-disable-next-line prefer-rest-params
      result = toArray(rest);
    };

    fn('foo', 'bar', 123);

    expect(result).toEqual(['foo', 'bar', 123]);
  });

  it('should handle primitives and other objects', function () {
    expect(toArray('lorem')).toEqual(['lorem']);
    expect(toArray('')).toEqual(['']);

    // avoid string objects it isn't reliable
    // IE 7-8 can't access chars by index
    // considered as edge-case and ignored for now
    expect(toArray(String('foo'))).toEqual(['foo']);
    expect(toArray(String(''))).toEqual(['']);

    expect(toArray(123)).toEqual([123]);
    expect(toArray(0)).toEqual([0]);

    expect(toArray(/\w+/)).toEqual([/\w+/]);
    expect(toArray(new RegExp('\\w+'))).toEqual([/\w+/]);

    expect(toArray(global)).toEqual([global]);
    expect(toArray({ foo: 'bar', lorem: 123 })).toEqual([
      { foo: 'bar', lorem: 123 },
    ]);

    expect(toArray(true)).toEqual([true]);
    expect(toArray(false)).toEqual([false]);

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const fn = function () {};
    expect(toArray(fn)).toEqual([fn]);
  });

  it('should return an empty array if nill value', function () {
    expect(toArray(null)).toEqual([]);
    expect(toArray(undefined)).toEqual([]);
  });

  // not working in jest
  // it('should convert HTMLCollection to real array - #58', function () {
  //   if (typeof document === 'undefined') return; // node.js doesn't have a document
  //   const els = document.getElementsByTagName('*');
  //   const arr = toArray(els);
  //   expect(Object.prototype.toString.call(arr)).toBe('[object Array]');
  //   expect(arr.length).toBe(els.length);
  // });
});
