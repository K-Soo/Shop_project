export const charConvert = (str: string) => {
  let firstChar = str.charAt(0);
  const nextChar = '*'.repeat(str.length - 1);
  console.log('firstChar: ', nextChar);
  const hiddenChar = firstChar + nextChar;

  return hiddenChar;
}