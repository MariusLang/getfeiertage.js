const Advent = {};

const formatDateObj = 'dateObj';
const formatDE = 'DE';

// eslint-disable-next-line consistent-return
Advent.calcAdvent4 = (format, day, year) => {
  const checkDate = new Date(`${year}-12-${day}`);
  const checkMonth = checkDate.getMonth() + 1;
  const checkWeekday = checkDate.getDay();

  if (checkWeekday === 0 && checkMonth === 12) {
    if (format === formatDE) {
      return `${day}.${checkMonth}.${year}`;
    } if (format === formatDateObj) {
      return `${day}.${checkMonth}.${year}`;
    }
  } else {
    return Advent.calcAdvent4(format, day - 1, year);
  }
};
module.exports = Advent;
