export const addSpaceBetweenNumber = (number) => String(number).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, `$1 `);
