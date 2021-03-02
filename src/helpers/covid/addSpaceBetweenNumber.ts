export const addSpaceBetweenNumber = (number: number): string =>
  String(number).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, `$1 `);
