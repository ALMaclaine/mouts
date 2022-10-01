const NULL = null;
const isNull = (val: unknown): val is null => val === NULL;
export { isNull };
