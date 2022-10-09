import { unescapeHTML } from '../unescape-html';

describe('string/unescapeHTML()', function () {
  it('should convert &amp;', function () {
    expect(unescapeHTML('foo &amp; bar')).toEqual('foo & bar');
  });

  it('should convert &quot;', function () {
    expect(unescapeHTML('&quot;foo&quot;')).toEqual('"foo"');
  });

  it('should convert &gt; and &lt;', function () {
    expect(unescapeHTML('&lt;foo&gt;')).toEqual('<foo>');
  });

  it('should convert &#39;', function () {
    expect(unescapeHTML('&#39;foo&#39;')).toEqual("'foo'");
  });

  it('should accept leading zeros in &#39;', function () {
    expect(unescapeHTML('&#0039;foo&#039;')).toEqual("'foo'");
  });
});
