import { isString } from 'is-ts';
import { findLastIndex } from './find-index-last';

describe('array/findLastIndex', function () {
  it('should return index of first match starting from end of array', function () {
    const items = [1, { a: 1 }, 1, 'foo', 'bar', { a: 1 }];

    const findOne = function (val: unknown) {
      return val === 1;
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const findObj = function (val: any) {
      return val.a === 1;
    };

    expect(findLastIndex(items, findOne)).toEqual(2);
    expect(findLastIndex(items, isString)).toEqual(4);
    expect(findLastIndex(items, findObj)).toEqual(5);
  });

  it('should return -1 when not found', function () {
    const items = [1, { a: 1 }, 1, 'foo', 'bar', { a: 1 }];
    const findTwo = function (val: unknown) {
      return val === 2;
    };

    expect(findLastIndex(items, findTwo)).toEqual(-1);
  });
});
