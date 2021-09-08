export const getNumberDateOfMoth = (month, year) => {
  switch (month) {
    case 1 | 3 | 5 | 7 | 8 | 10 | 12:
      return 31;
    case 4 | 6 | 9 | 11:
      return 30;
    case 2:
      return year % 4 === 0 ? 29 : 28;
  }
};
