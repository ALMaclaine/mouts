# mouts

Based on [mout](https://github.com/mout/mout) but modernized and written in Typescript.

## Recommendations

- use [no-new-wrappers](https://eslint.org/docs/latest/rules/no-new-wrappers) lint rule.
- Some functions in this library will fail if using `new` with a primitive wrapper. For example, toNumber.
