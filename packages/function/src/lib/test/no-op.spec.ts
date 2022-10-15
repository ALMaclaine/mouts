import { noOp } from '../no-op';

describe('function/noOp()', function () {
  it('noOp works', function () {
    expect(noOp()).toBe(undefined);
  });
});
