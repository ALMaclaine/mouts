const nth = (i: number) => {
  const t = i % 100;
  if (t >= 10 && t <= 20) {
    return 'th';
  }
  switch (i % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
};
export { nth };
