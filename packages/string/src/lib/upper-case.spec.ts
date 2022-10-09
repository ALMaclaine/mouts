import { upperCase } from './upper-case';

describe('string/upperCase()', function () {
  it('should convert string to lower case', function () {
    expect(upperCase('FOO')).toEqual('FOO');
    expect(upperCase('Bar')).toEqual('BAR');
    expect(upperCase('ipsum')).toEqual('IPSUM');
  });
});
