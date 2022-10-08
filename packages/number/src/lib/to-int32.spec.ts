import { toInt32 } from './to-int32';

describe('number/toInt32()', function () {
  it('should remove decimal digits', function () {
    expect(toInt32(1.25)).toEqual(1);
    expect(toInt32(0.75)).toEqual(0);
    expect(toInt32(-0.55)).toEqual(0);
    expect(toInt32(2.999)).toEqual(2);
    expect(toInt32(10.0001)).toEqual(10);
    expect(toInt32(-5.0001)).toEqual(-5);
    expect(toInt32(-9.99999)).toEqual(-9);
  });

  it('should wrap at MAX_INT and MIN_INT', function () {
    expect(toInt32(Math.pow(2, 31) - 1.5)).toEqual(2147483646);
    expect(toInt32(Math.pow(2, 31) + 0.5)).toEqual(-2147483648);
    expect(toInt32(Math.pow(-2, 31) - 1.5)).toEqual(2147483647);
    expect(toInt32(Math.pow(-2, 31) - 0.5)).toEqual(-2147483648);
    expect(toInt32(Math.pow(-2, 31) + 0.5)).toEqual(-2147483647);
  });

  it('no -0', function () {
    expect(toInt32(-0)).toEqual(0);
  });
});
