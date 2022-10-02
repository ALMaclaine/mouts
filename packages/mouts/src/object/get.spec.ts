import { get } from './get';

describe('object/get()', () => {
  it('should get nested property', () => {
    const foo = {
      bar: {
        lorem: {
          ipsum: 'dolor',
        },
      },
    };
    expect(get(foo, 'bar.lorem.ipsum')).toBe('dolor');
  });

  it('should get nested property when encountering non-primitive', () => {
    const foo = {
      bar: {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        lorem: () => {},
      },
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    foo.bar.lorem.ipsum = 'dolor';

    expect(get(foo, 'bar.lorem.ipsum')).toBe('dolor');
  });

  it('should get nested property when encountering primitive', () => {
    const foo = {
      bar: {
        lorem: 'ipsum',
      },
    };

    expect(get(foo, 'bar.lorem.toString')).toBe(foo.bar.lorem.toString);
  });

  it('should return undefined if non existent', () => {
    const foo = {
      bar: {
        lorem: 'ipsum',
      },
    };
    let undef;
    expect(get(foo, 'bar.dolor')).toBe(undef);
  });

  it('should return undefined when encountering null', () => {
    const foo = {
      bar: null,
    };

    let undef;
    expect(get(foo, 'foo.bar.baz')).toBe(undef);
  });
});
