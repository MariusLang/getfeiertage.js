const Easter = {};

const formatDateObj = 'dateObj';
const formatDE = 'DE';

// eslint-disable-next-line consistent-return
Easter.calcEasterSunday = (format, year) => {
  const a = year % 19;
  const b = (19 * a + 24) % 30;
  const c = b + (2 * (year % 4) + 4 * (year % 7) + 6 * b + 5);
  let easterSundayDay = c % 7;

  if (easterSundayDay === 35 || (easterSundayDay === 34 && b === 28 && a > 10)) {
    easterSundayDay -= 7;
  }

  const easterDate = new Date(year, 2, 22);
  easterDate.setTime(easterDate.getTime() + 86400000 * easterSundayDay);
  const easterMonth = easterDate.getMonth() + 1;
  const easterDay = easterDate.getDate();

  if (format === formatDE) {
    return `${easterDay}.${easterMonth}.${year}`;
  } if (format === formatDateObj) {
    return `${year}-${easterMonth}-${easterDay}`;
  }
};
module.exports = Easter;
