const ror = (val: number, shift: number) => {
  return (val >> shift) | (val << (32 - shift));
};
export { ror };
