const UNDEFINED = undefined;
const NULL = null;

const WHITE_SPACES = [
  ' ',
  '\n',
  '\r',
  '\t',
  '\f',
  '\v',
  '\u00A0',
  '\u1680',
  '\u180E',
  '\u2000',
  '\u2001',
  '\u2002',
  '\u2003',
  '\u2004',
  '\u2005',
  '\u2006',
  '\u2007',
  '\u2008',
  '\u2009',
  '\u200A',
  '\u2028',
  '\u2029',
  '\u202F',
  '\u205F',
  '\u3000',
] as const;

const WHITE_SPACES_SET = new Set<string>(WHITE_SPACES);

export { UNDEFINED, NULL, WHITE_SPACES_SET, WHITE_SPACES };