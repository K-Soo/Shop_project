
export const currencyConvert = (KRW:number) => {
  const result =  Math.ceil(KRW / 1178.50);
  return String(result);
};