export const trimText = (str: string, x: number): string => {
  return str.length < x ? str : str.substring(0, x).concat("...");
};
