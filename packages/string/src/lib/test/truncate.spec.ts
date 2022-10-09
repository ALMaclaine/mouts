import { truncate } from '../truncate';

describe('string/truncate()', function () {
  const str = 'lorem ipsum dolor sit amet';

  it('should limit number of chars', function () {
    const r1 = truncate(str, 10);
    expect(r1.length).toBeLessThan(11);
    expect(r1).toEqual('lorem i...');

    const r2 = truncate(str, 14);
    expect(r2.length).toBeLessThan(15);
    expect(r2).toEqual('lorem ipsum...');
  });

  it('should append string param', function () {
    const r1 = truncate(str, 10, { append: '--' });
    expect(r1.length).toBeLessThan(11);
    expect(r1).toEqual('lorem ip--');
  });

  it("last char before append shouldn't be a whitespace", function () {
    const r1 = truncate(str, 12, { append: '=' });
    const r2 = truncate(str, 13, { append: '=' });

    expect(r2.length).toBeLessThan(14);
    expect(r2).toEqual('lorem ipsum=');
    expect(r1).toEqual(r2);
  });
});
