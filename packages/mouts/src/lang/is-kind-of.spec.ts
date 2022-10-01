import { isKindOf } from './is-kind-of';

describe('lang/isKindOf()', function () {
  it('should get the kind of value', function () {
    expect(isKindOf('')).toEqual('String');
    expect(isKindOf('foo')).toEqual('String');
    expect(isKindOf(new String('lorem'))).toEqual('String');
    expect(isKindOf(String(123))).toEqual('String');

    expect(isKindOf(0)).toEqual('Number');
    expect(isKindOf(123)).toEqual('Number');
    expect(isKindOf(new Number(123))).toEqual('Number');
    expect(isKindOf(Number('123'))).toEqual('Number');

    expect(isKindOf(true)).toEqual('Boolean');
    expect(isKindOf(false)).toEqual('Boolean');
    expect(isKindOf(new Boolean(false))).toEqual('Boolean');
    expect(isKindOf(new Boolean(true))).toEqual('Boolean');
    expect(isKindOf(Boolean(0))).toEqual('Boolean');
    expect(isKindOf(Boolean(1))).toEqual('Boolean');

    expect(isKindOf([1, 'foo'])).toEqual('Array');
    expect(isKindOf(new Array(3))).toEqual('Array');

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    expect(isKindOf(function () {})).toEqual('Function');
    expect(isKindOf(new Function('return 1;'))).toEqual('Function');

    expect(isKindOf(/\w+/)).toEqual('RegExp');
    expect(isKindOf(new RegExp('\\w+', 'g'))).toEqual('RegExp');

    expect(isKindOf(new Date())).toEqual('Date');

    expect(isKindOf(null)).toEqual('Null');

    expect(isKindOf(undefined)).toEqual('Undefined');
    expect(isKindOf()).toEqual('Undefined');
  });
});
