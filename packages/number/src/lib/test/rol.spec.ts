import { rol } from '../rol';

describe('number/rol()', function () {
  it('should rotate bits left', function () {
    expect(rol(parseInt('10101', 2), 5).toString(2)).toEqual('1010100000');
    expect(rol(1 << 30, 5).toString(2)).toEqual('1000');
  });

  it('no -0', function () {
    expect(rol(-0, 0)).toEqual(0);
  });
});
