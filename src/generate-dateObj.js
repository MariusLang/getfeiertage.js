const GenerateDate = {};

GenerateDate.generateDateObject = (year, month, day) => {
  let dateMonth = month;
  if (dateMonth.toString().length === 1) {
    dateMonth = `0${dateMonth}`;
  }

  let dateDay = day;
  if (dateDay.toString().length === 1) {
    dateDay = `0${dateDay}`;
  }

  return new Date(`${year}-${dateMonth}-${dateDay}T00:00:00`);
};

GenerateDate.generateDateStringDE = (year, month, day) => {
  let dateMonth = month;
  if (dateMonth.toString().length === 1) {
    dateMonth = `0${dateMonth}`;
  }

  let dateDay = day;
  if (dateDay.toString().length === 1) {
    dateDay = `0${dateDay}`;
  }

  return `${dateDay}.${dateMonth}.${year}`;
};
module.exports = GenerateDate;
