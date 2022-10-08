import { createObject } from './create-object';

describe('lang/createObject', function () {
  it('should create an object', function () {
    const base = { foo: 'bar' };
    const result = createObject(base);

    expect(result).toMatchObject(base);
    result.foo = 'asd';
    expect(result.foo).toEqual('asd');
    expect(base.foo).toEqual('bar');
  });

  it('should mixIn new properties', function () {
    const base = { foo: 'bar' };
    const props = { lorem: 'ipsum', num: 5, test: null };
    const result = createObject(base, props);

    expect(result).toMatchObject({
      foo: 'bar',
      lorem: 'ipsum',
      num: 5,
      test: null,
    });

    result.foo = 'asd';
    result.num = 9000;
    expect(result.foo).toEqual('asd');
    expect(result.num).toEqual(9000);
    expect(result.test).toEqual(null);
    expect(base.foo).toEqual('bar');
    expect(props.num).toEqual(5);
  });
});
