const GenerateDate = require('./generate-dateObj');

const Easter = {};

const formatDateObj = 'dateObj';
const formatDE = 'DE';

Easter.calcEasterSunday = (format, year) => {
  const a = year % 19; // currentYear mod 19
  const b = (19 * a + 24) % 30;
  const c = (2 * (year % 4) + 4 * (year % 7) + 6 * b + 5) % 7;
  let easterSundayDay = b + c;

  if (easterSundayDay === 35 || (easterSundayDay === 34 && b === 28 && a > 10)) {
    easterSundayDay -= 7;
  }

  // generate easterDate and change Parameters to easter Date
  const easterDate = new Date(year, 2, 22);
  easterDate.setTime(easterDate.getTime() + 86400000 * easterSundayDay);
  const easterMonth = easterDate.getMonth() + 1;
  const easterDay = easterDate.getDate();

  if (format === formatDE) {
    return GenerateDate.generateDateStringDE(
      year, easterMonth, easterDay,
    );
  }

  if (format === formatDateObj) {
    return GenerateDate.generateDateObject(
      year, easterMonth, easterDay,
    );
  }

  return GenerateDate.generateDateObject(
    year, easterMonth, easterDay,
  );
};
module.exports = Easter;
