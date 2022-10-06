import { findArray } from './find-array';
import { isObject } from 'is-ts';

describe('array/find', function () {
  it('should return first match', function () {
    const obj = { a: 'b' };
    const arr = [123, 'foo', 'bar', obj];

    expect(
      findArray(arr, function (val) {
        return val === 123;
      })
    ).toEqual(123);
    expect(
      findArray(arr, function (val) {
        return typeof val === 'string';
      })
    ).toEqual('foo');
    expect(
      findArray(arr, function (val) {
        return isObject(val) && val.a === 'b';
      })
    ).toEqual(obj);
  });
});
