import {
  MAX_INT32,
  MIN_INT32,
  MAX_SAFE_INT,
  MIN_SAFE_INT,
  MAX_VALUE,
  MIN_VALUE,
  MAX_UINT,
} from './constants';

describe('number/constants', function () {
  it('constants are correct', function () {
    expect(MIN_INT32).toEqual(-2147483648);
    expect(MAX_INT32).toEqual(2147483647);
    expect(MIN_SAFE_INT).toEqual(-9007199254740991);
    expect(MAX_SAFE_INT).toEqual(9007199254740991);
    expect(MIN_VALUE).toEqual(5e-324);
    expect(MAX_VALUE).toEqual(1.7976931348623157e308);
    expect(MAX_UINT).toEqual(4294967295);
  });
});
