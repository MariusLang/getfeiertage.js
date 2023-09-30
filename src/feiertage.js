const GenerateDate = require('./generate-dateObj');
const Easter = require('./easter');
const Advent = require('./advent');

/* eslint-disable consistent-return */
const Feiertage = {};

Feiertage.formatDateObj = 'dateObj';
Feiertage.formatDE = 'DE';

// const Easter = require('./easter.js');
// const Advent = require('./advent.js');

Feiertage.getAll = (format, year) => [
  Feiertage.getNeujahr(format, year), Feiertage.getBerchtoldstag(format, year),
  Feiertage.getHeiligeDreiKoenige(format, year), Feiertage.getWeiberfastnacht(format, year),
  Feiertage.getValentinstag(format, year), Feiertage.getRosenmontag(format, year),
  Feiertage.getFastnachtsdienstag(format, year), Feiertage.getAschermittwoch(format, year),
  Feiertage.getStJosef(format, year), Feiertage.getGruendonnerstag(format, year),
  Feiertage.getKarfreitag(format, year), Feiertage.getOstersonntag(format, year),
  Feiertage.getOstermontag(format, year), Feiertage.getFirstMay(format, year),
  Feiertage.getStFlorian(format, year), Feiertage.getChristiHimmelfahrt(format, year),
  Feiertage.getPfingstsonntag(format, year), Feiertage.getPfingstmontag(format, year),
  Feiertage.getFronleichnam(format, year), Feiertage.getPeterUndPaul(format, year),
  Feiertage.getBundesfeierCH(format, year), Feiertage.getMariaHimmelfahrt(format, year),
  Feiertage.getStRupert(format, year), Feiertage.getTagDerDeutschenEinheit(format, year),
  Feiertage.getTagDerVolksabstimmung(format, year), Feiertage.getNationalfeiertagAT(format, year),
  Feiertage.getHalloween(format, year), Feiertage.getAllerheiligen(format, year),
  Feiertage.getStMartin(format, year), Feiertage.getStLeopold(format, year),
  Feiertage.getBussUndBettag(format, year), Feiertage.getNikolaus(format, year),
  Feiertage.getMariaeEmpfaengnis(format, year), Feiertage.getAdvent1(format, year),
  Feiertage.getAdvent2(format, year), Feiertage.getAdvent3(format, year),
  Feiertage.getAdvent4(format, year), Feiertage.getHeiligabend(format, year),
  Feiertage.getWeihnachtsfeiertag1(format, year), Feiertage.getWeihnachtsfeiertag2(format, year),
  Feiertage.getSilvester(format, year),
];

const formatDateObj = 'dateObj';
const formatDE = 'DE';

Feiertage.getNeujahr = (format, year) => {
  if (format === formatDE) {
    return GenerateDate.generateDateStringDE(year, 1, 1);
  }

  if (format === formatDateObj) {
    return GenerateDate.generateDateObject(year, 1, 1);
  }
};

Feiertage.getBerchtoldstag = (format, year) => {
  if (format === formatDE) {
    return GenerateDate.generateDateStringDE(year, 1, 2);
  }

  if (format === formatDateObj) {
    return GenerateDate.generateDateObject(year, 1, 2);
  }
};

Feiertage.getHeiligeDreiKoenige = (format, year) => {
  if (format === formatDE) {
    return GenerateDate.generateDateStringDE(year, 1, 6);
  }

  if (format === formatDateObj) {
    return GenerateDate.generateDateObject(year, 1, 6);
  }
};

Feiertage.getWeiberfastnacht = (format, year) => {
  const referenceDate = new Date(Feiertage.getOstersonntag(formatDateObj, year));
  referenceDate.setDate(referenceDate.getDate() - 52);

  if (format === formatDE) {
    return GenerateDate.generateDateStringDE(
      year, referenceDate.getMonth() + 1, referenceDate.getDate(),
    );
  }

  if (format === formatDateObj) {
    return GenerateDate.generateDateObject(
      year, referenceDate.getMonth() + 1, referenceDate.getDate(),
    );
  }
};

Feiertage.getValentinstag = (format, year) => {
  if (format === formatDE) {
    return GenerateDate.generateDateStringDE(year, 2, 14);
  }

  if (format === formatDateObj) {
    return GenerateDate.generateDateObject(year, 2, 14);
  }
};

Feiertage.getRosenmontag = (format, year) => {
  const referenceDate = new Date(Feiertage.getOstersonntag(formatDateObj, year));
  referenceDate.setDate(referenceDate.getDate() - 48);

  if (format === formatDE) {
    return GenerateDate.generateDateStringDE(
      year, referenceDate.getMonth() + 1, referenceDate.getDate(),
    );
  }

  if (format === formatDateObj) {
    return GenerateDate.generateDateObject(
      year, referenceDate.getMonth() + 1, referenceDate.getDate(),
    );
  }
};

Feiertage.getFastnachtsdienstag = (format, year) => {
  const referenceDate = new Date(Feiertage.getOstersonntag(formatDateObj, year));
  referenceDate.setDate(referenceDate.getDate() - 47);

  if (format === formatDE) {
    return GenerateDate.generateDateStringDE(
      year, referenceDate.getMonth() + 1, referenceDate.getDate(),
    );
  }

  if (format === formatDateObj) {
    return GenerateDate.generateDateObject(
      year, referenceDate.getMonth() + 1, referenceDate.getDate(),
    );
  }
};

Feiertage.getAschermittwoch = (format, year) => {
  const referenceDate = new Date(Feiertage.getOstersonntag(formatDateObj, year));
  referenceDate.setDate(referenceDate.getDate() - 46);

  if (format === formatDE) {
    return GenerateDate.generateDateStringDE(
      year, referenceDate.getMonth() + 1, referenceDate.getDate(),
    );
  }

  if (format === formatDateObj) {
    return GenerateDate.generateDateObject(
      year, referenceDate.getMonth() + 1, referenceDate.getDate(),
    );
  }
};

Feiertage.getStJosef = (format, year) => {
  if (format === formatDE) {
    return GenerateDate.generateDateStringDE(year, 3, 19);
  }

  if (format === formatDateObj) {
    return GenerateDate.generateDateObject(year, 3, 19);
  }
};

Feiertage.getGruendonnerstag = (format, year) => {
  const referenceDate = new Date(Feiertage.getOstersonntag(formatDateObj, year));
  referenceDate.setDate(referenceDate.getDate() - 3);

  if (format === formatDE) {
    return GenerateDate.generateDateStringDE(
      year, referenceDate.getMonth() + 1, referenceDate.getDate(),
    );
  }

  if (format === formatDateObj) {
    return GenerateDate.generateDateObject(
      year, referenceDate.getMonth() + 1, referenceDate.getDate(),
    );
  }
};

Feiertage.getKarfreitag = (format, year) => {
  const referenceDate = new Date(Feiertage.getOstersonntag(formatDateObj, year));
  referenceDate.setDate(referenceDate.getDate() - 2);

  if (format === formatDE) {
    return GenerateDate.generateDateStringDE(
      year, referenceDate.getMonth() + 1, referenceDate.getDate(),
    );
  }

  if (format === formatDateObj) {
    return GenerateDate.generateDateObject(
      year, referenceDate.getMonth() + 1, referenceDate.getDate(),
    );
  }
};

Feiertage.getOstersonntag = (format, year) => Easter.calcEasterSunday(format, year);

Feiertage.getOstermontag = (format, year) => {
  const referenceDate = new Date(Feiertage.getOstersonntag(formatDateObj, year));
  referenceDate.setDate(referenceDate.getDate() + 1);

  if (format === formatDE) {
    return GenerateDate.generateDateStringDE(
      year, referenceDate.getMonth() + 1, referenceDate.getDate(),
    );
  }

  if (format === formatDateObj) {
    return GenerateDate.generateDateObject(
      year, referenceDate.getMonth() + 1, referenceDate.getDate(),
    );
  }
};

Feiertage.getFirstMay = (format, year) => {
  if (format === formatDE) {
    return GenerateDate.generateDateStringDE(year, 5, 1);
  }

  if (format === formatDateObj) {
    return GenerateDate.generateDateObject(year, 5, 1);
  }
};

Feiertage.getStFlorian = (format, year) => {
  if (format === formatDE) {
    return GenerateDate.generateDateStringDE(year, 5, 4);
  }

  if (format === formatDateObj) {
    return GenerateDate.generateDateObject(year, 5, 4);
  }
};

Feiertage.getChristiHimmelfahrt = (format, year) => {
  const referenceDate = new Date(Feiertage.getOstersonntag(formatDateObj, year));
  referenceDate.setDate(referenceDate.getDate() + 39);

  if (format === formatDE) {
    return GenerateDate.generateDateStringDE(
      year, referenceDate.getMonth() + 1, referenceDate.getDate(),
    );
  }

  if (format === formatDateObj) {
    return GenerateDate.generateDateObject(
      year, referenceDate.getMonth() + 1, referenceDate.getDate(),
    );
  }
};

Feiertage.getPfingstsonntag = (format, year) => {
  const referenceDate = new Date(Feiertage.getOstersonntag(formatDateObj, year));
  referenceDate.setDate(referenceDate.getDate() + 49);

  if (format === formatDE) {
    return GenerateDate.generateDateStringDE(
      year, referenceDate.getMonth() + 1, referenceDate.getDate(),
    );
  }

  if (format === formatDateObj) {
    return GenerateDate.generateDateObject(
      year, referenceDate.getMonth() + 1, referenceDate.getDate(),
    );
  }
};

Feiertage.getPfingstmontag = (format, year) => {
  const referenceDate = new Date(Feiertage.getOstersonntag(formatDateObj, year));
  referenceDate.setDate(referenceDate.getDate() + 50);

  if (format === formatDE) {
    return GenerateDate.generateDateStringDE(
      year, referenceDate.getMonth() + 1, referenceDate.getDate(),
    );
  }

  if (format === formatDateObj) {
    return GenerateDate.generateDateObject(
      year, referenceDate.getMonth() + 1, referenceDate.getDate(),
    );
  }
};

Feiertage.getFronleichnam = (format, year) => {
  const referenceDate = new Date(Feiertage.getOstersonntag(formatDateObj, year));
  referenceDate.setDate(referenceDate.getDate() + 60);

  if (format === formatDE) {
    return GenerateDate.generateDateStringDE(
      year, referenceDate.getMonth() + 1, referenceDate.getDate(),
    );
  }

  if (format === formatDateObj) {
    return GenerateDate.generateDateObject(
      year, referenceDate.getMonth() + 1, referenceDate.getDate(),
    );
  }
};

Feiertage.getPeterUndPaul = (format, year) => {
  if (format === formatDE) {
    return GenerateDate.generateDateStringDE(year, 7, 29);
  }

  if (format === formatDateObj) {
    return GenerateDate.generateDateObject(year, 7, 29);
  }
};

Feiertage.getBundesfeierCH = (format, year) => {
  if (format === formatDE) {
    return GenerateDate.generateDateStringDE(year, 8, 1);
  }

  if (format === formatDateObj) {
    return GenerateDate.generateDateObject(year, 8, 1);
  }
};

Feiertage.getMariaHimmelfahrt = (format, year) => {
  if (format === formatDE) {
    return GenerateDate.generateDateStringDE(year, 8, 15);
  }

  if (format === formatDateObj) {
    return GenerateDate.generateDateObject(year, 8, 15);
  }
};

Feiertage.getStRupert = (format, year) => {
  if (format === formatDE) {
    return GenerateDate.generateDateStringDE(year, 9, 24);
  }

  if (format === formatDateObj) {
    return GenerateDate.generateDateObject(year, 9, 24);
  }
};

Feiertage.getTagDerDeutschenEinheit = (format, year) => {
  if (format === formatDE) {
    return GenerateDate.generateDateStringDE(year, 10, 3);
  }

  if (format === formatDateObj) {
    return GenerateDate.generateDateObject(year, 10, 3);
  }
};

Feiertage.getTagDerVolksabstimmung = (format, year) => {
  if (format === formatDE) {
    return GenerateDate.generateDateStringDE(year, 10, 10);
  }

  if (format === formatDateObj) {
    return GenerateDate.generateDateObject(year, 10, 10);
  }
};

Feiertage.getNationalfeiertagAT = (format, year) => {
  if (format === formatDE) {
    return GenerateDate.generateDateStringDE(year, 10, 26);
  }

  if (format === formatDateObj) {
    return GenerateDate.generateDateObject(year, 10, 26);
  }
};

Feiertage.getHalloween = (format, year) => {
  if (format === formatDE) {
    return GenerateDate.generateDateStringDE(year, 10, 31);
  }

  if (format === formatDateObj) {
    return GenerateDate.generateDateObject(year, 10, 31);
  }
};

Feiertage.getAllerheiligen = (format, year) => {
  if (format === formatDE) {
    return GenerateDate.generateDateStringDE(year, 11, 1);
  }

  if (format === formatDateObj) {
    return GenerateDate.generateDateObject(year, 11, 1);
  }
};

Feiertage.getStMartin = (format, year) => {
  if (format === formatDE) {
    return GenerateDate.generateDateStringDE(year, 11, 11);
  }

  if (format === formatDateObj) {
    return GenerateDate.generateDateObject(year, 11, 11);
  }
};

Feiertage.getStLeopold = (format, year) => {
  if (format === formatDE) {
    return GenerateDate.generateDateStringDE(year, 11, 15);
  }

  if (format === formatDateObj) {
    return GenerateDate.generateDateObject(year, 11, 15);
  }
};

Feiertage.getBussUndBettag = (format, year) => {
  const referenceDate = new Date(Feiertage.getAdvent4(formatDateObj, year));
  referenceDate.setDate(referenceDate.getDate() - 32);

  if (format === formatDE) {
    return GenerateDate.generateDateStringDE(
      year, referenceDate.getMonth() + 1, referenceDate.getDate(),
    );
  }

  if (format === formatDateObj) {
    return GenerateDate.generateDateObject(
      year, referenceDate.getMonth() + 1, referenceDate.getDate(),
    );
  }
};

Feiertage.getNikolaus = (format, year) => {
  if (format === formatDE) {
    return GenerateDate.generateDateStringDE(year, 12, 6);
  }

  if (format === formatDateObj) {
    return GenerateDate.generateDateObject(year, 12, 6);
  }
};

Feiertage.getMariaeEmpfaengnis = (format, year) => {
  if (format === formatDE) {
    return GenerateDate.generateDateStringDE(year, 12, 8);
  }

  if (format === formatDateObj) {
    return GenerateDate.generateDateObject(year, 12, 8);
  }
};

Feiertage.getAdvent1 = (format, year) => {
  const referenceDate = new Date(Feiertage.getAdvent4(formatDateObj, year));
  referenceDate.setDate(referenceDate.getDate() - 21);

  if (format === formatDE) {
    return GenerateDate.generateDateStringDE(
      year, referenceDate.getMonth() + 1, referenceDate.getDate(),
    );
  }

  if (format === formatDateObj) {
    return GenerateDate.generateDateObject(
      year, referenceDate.getMonth() + 1, referenceDate.getDate(),
    );
  }
};

Feiertage.getAdvent2 = (format, year) => {
  const referenceDate = new Date(Feiertage.getAdvent4(formatDateObj, year));
  referenceDate.setDate(referenceDate.getDate() - 14);

  if (format === formatDE) {
    return GenerateDate.generateDateStringDE(
      year, referenceDate.getMonth() + 1, referenceDate.getDate(),
    );
  }

  if (format === formatDateObj) {
    return GenerateDate.generateDateObject(
      year, referenceDate.getMonth() + 1, referenceDate.getDate(),
    );
  }
};

Feiertage.getAdvent3 = (format, year) => {
  const referenceDate = new Date(Feiertage.getAdvent4(formatDateObj, year));
  referenceDate.setDate(referenceDate.getDate() - 7);

  if (format === formatDE) {
    return GenerateDate.generateDateStringDE(
      year, referenceDate.getMonth() + 1, referenceDate.getDate(),
    );
  }

  if (format === formatDateObj) {
    return GenerateDate.generateDateObject(
      year, referenceDate.getMonth() + 1, referenceDate.getDate(),
    );
  }
};

Feiertage.getAdvent4 = (format, year) => Advent.calcAdvent4(format, 24, year);

Feiertage.getHeiligabend = (format, year) => {
  if (format === formatDE) {
    return GenerateDate.generateDateStringDE(year, 12, 24);
  }

  if (format === formatDateObj) {
    return GenerateDate.generateDateObject(year, 12, 24);
  }
};

Feiertage.getWeihnachtsfeiertag1 = (format, year) => {
  if (format === formatDE) {
    return GenerateDate.generateDateStringDE(year, 12, 25);
  }

  if (format === formatDateObj) {
    return GenerateDate.generateDateObject(year, 12, 25);
  }
};

Feiertage.getWeihnachtsfeiertag2 = (format, year) => {
  if (format === formatDE) {
    return GenerateDate.generateDateStringDE(year, 12, 26);
  }

  if (format === formatDateObj) {
    return GenerateDate.generateDateObject(year, 12, 26);
  }
};

Feiertage.getSilvester = (format, year) => {
  if (format === formatDE) {
    return GenerateDate.generateDateStringDE(year, 12, 31);
  }

  if (format === formatDateObj) {
    return GenerateDate.generateDateObject(year, 12, 31);
  }
};

module.exports = Feiertage;
