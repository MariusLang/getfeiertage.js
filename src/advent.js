const GenerateDate = require('./generate-dateObj');

const Advent = {};

const formatDateObj = 'dateObj';
const formatDE = 'DE';

Advent.calcAdvent4 = (format, day, year) => {
  const checkDate = new Date(`${year}-12-${day}`);
  const checkMonth = checkDate.getMonth() + 1;
  const checkWeekday = checkDate.getDay();

  if (checkWeekday === 0 && checkMonth === 12) {
    if (format === formatDE) {
      return GenerateDate.generateDateStringDE(
        year, checkMonth, day,
      );
    } if (format === formatDateObj) {
      return GenerateDate.generateDateObject(
        year, checkMonth, day,
      );
    }
  } /* else {
    return Advent.calcAdvent4(format, day - 1, year);
  } */
  return Advent.calcAdvent4(format, day - 1, year);
};
module.exports = Advent;
