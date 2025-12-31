export const formatPoints = (value: number) => {
  if (value < 1000) return value.toString();

  const formatted = (value / 1000).toFixed(2);
  return `${formatted.replace(/\.?0+$/, "")}k`;
};
