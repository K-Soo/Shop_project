export const PriceComma = (x: number | string) => {
  if (x > 0) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else {
    return x;
  }
};