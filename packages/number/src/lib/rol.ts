const rol = (val: number, shift: number) => {
  return (val << shift) | (val >> (32 - shift));
};
export { rol };
