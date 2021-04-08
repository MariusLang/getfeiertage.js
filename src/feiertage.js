/* eslint-disable consistent-return */
const Feiertage = {};

Feiertage.formatDateObj = 'dateObj';
Feiertage.formatDE = 'DE';

const Easter = require('./easter.js');
const Advent = require('./advent.js');

const formatDateObj = 'dateObj';
const formatDE = 'DE';

Feiertage.getNeujahr = (format, year) => {
  if (format === formatDE) {
    return `1.1.${year}`;
  } if (format === formatDateObj) {
    return `${year}-1-1`;
  }
};

Feiertage.getBerchtoldstag = (format, year) => {
  if (format === formatDE) {
    return `2.1.${year}`;
  } if (format === formatDateObj) {
    return `${year}-1-2`;
  }
};

Feiertage.getHeiligeDreiKoenige = (format, year) => {
  if (format === formatDE) {
    return `6.1.${year}`;
  } if (format === formatDateObj) {
    return `${year}-1-6`;
  }
};

Feiertage.getWeiberfastnacht = (format, year) => {
  const referenceDate = new Date(Feiertage.getOstersonntag(formatDateObj, year));
  referenceDate.setDate(referenceDate.getDate() - 52);

  if (format === formatDE) {
    return `${referenceDate.getDate()}.${referenceDate.getMonth() + 1}.${year}`;
  } if (format === formatDateObj) {
    return `${year}-${referenceDate.getMonth() + 1}-${referenceDate.getDate()}`;
  }
};

Feiertage.getValentinstag = (format, year) => {
  if (format === formatDE) {
    return `14.2.${year}`;
  } if (format === formatDateObj) {
    return `${year}-2-14`;
  }
};

Feiertage.getRosenmontag = (format, year) => {
  const referenceDate = new Date(Feiertage.getOstersonntag(formatDateObj, year));
  referenceDate.setDate(referenceDate.getDate() - 48);

  if (format === formatDE) {
    return `${referenceDate.getDate()}.${referenceDate.getMonth() + 1}.${year}`;
  } if (format === formatDateObj) {
    return `${year}-${referenceDate.getMonth() + 1}-${referenceDate.getDate()}`;
  }
};

Feiertage.getFastnachtsdienstag = (format, year) => {
  const referenceDate = new Date(Feiertage.getOstersonntag(formatDateObj, year));
  referenceDate.setDate(referenceDate.getDate() - 47);

  if (format === formatDE) {
    return `${referenceDate.getDate()}.${referenceDate.getMonth() + 1}.${year}`;
  } if (format === formatDateObj) {
    return `${year}-${referenceDate.getMonth() + 1}-${referenceDate.getDate()}`;
  }
};

Feiertage.getAschermittwoch = (format, year) => {
  const referenceDate = new Date(Feiertage.getOstersonntag(formatDateObj, year));
  referenceDate.setDate(referenceDate.getDate() - 46);

  if (format === formatDE) {
    return `${referenceDate.getDate()}.${referenceDate.getMonth() + 1}.${year}`;
  } if (format === formatDateObj) {
    return `${year}-${referenceDate.getMonth() + 1}-${referenceDate.getDate()}`;
  }
};

Feiertage.getStJosef = (format, year) => {
  if (format === formatDE) {
    return `19.3.${year}`;
  } if (format === formatDateObj) {
    return `${year}-3-19`;
  }
};

Feiertage.getGruendonnerstag = (format, year) => {
  const referenceDate = new Date(Feiertage.getOstersonntag(formatDateObj, year));
  referenceDate.setDate(referenceDate.getDate() - 3);

  if (format === formatDE) {
    return `${referenceDate.getDate()}.${referenceDate.getMonth() + 1}.${year}`;
  } if (format === formatDateObj) {
    return `${year}-${referenceDate.getMonth() + 1}-${referenceDate.getDate()}`;
  }
};

Feiertage.getKarfreitag = (format, year) => {
  const referenceDate = new Date(Feiertage.getOstersonntag(formatDateObj, year));
  referenceDate.setDate(referenceDate.getDate() - 2);

  if (format === formatDE) {
    return `${referenceDate.getDate()}.${referenceDate.getMonth() + 1}.${year}`;
  } if (format === formatDateObj) {
    return `${year}-${referenceDate.getMonth() + 1}-${referenceDate.getDate()}`;
  }
};

Feiertage.getOstersonntag = (format, year) => Easter.calcEasterSunday(format, year);

Feiertage.getOstermontag = (format, year) => {
  const referenceDate = new Date(Feiertage.getOstersonntag(formatDateObj, year));
  referenceDate.setDate(referenceDate.getDate() + 1);

  if (format === formatDE) {
    return `${referenceDate.getDate()}.${referenceDate.getMonth() + 1}.${year}`;
  } if (format === formatDateObj) {
    return `${year}-${referenceDate.getMonth() + 1}-${referenceDate.getDate()}`;
  }
};

Feiertage.getFirstMay = (format, year) => {
  if (format === formatDE) {
    return `1.5.${year}`;
  } if (format === formatDateObj) {
    return `${year}-5-1`;
  }
};

Feiertage.getStFlorian = (format, year) => {
  if (format === formatDE) {
    return `4.5.${year}`;
  } if (format === formatDateObj) {
    return `${year}-5-4`;
  }
};

Feiertage.getChristiHimmelfahrt = (format, year) => {
  const referenceDate = new Date(Feiertage.getOstersonntag(formatDateObj, year));
  referenceDate.setDate(referenceDate.getDate() + 39);

  if (format === formatDE) {
    return `${referenceDate.getDate()}.${referenceDate.getMonth() + 1}.${year}`;
  } if (format === formatDateObj) {
    return `${year}-${referenceDate.getMonth() + 1}-${referenceDate.getDate()}`;
  }
};

Feiertage.getPfingstsonntag = (format, year) => {
  const referenceDate = new Date(Feiertage.getOstersonntag(formatDateObj, year));
  referenceDate.setDate(referenceDate.getDate() + 49);

  if (format === formatDE) {
    return `${referenceDate.getDate()}.${referenceDate.getMonth() + 1}.${year}`;
  } if (format === formatDateObj) {
    return `${year}-${referenceDate.getMonth() + 1}-${referenceDate.getDate()}`;
  }
};

Feiertage.getPfingstmontag = (format, year) => {
  const referenceDate = new Date(Feiertage.getOstersonntag(formatDateObj, year));
  referenceDate.setDate(referenceDate.getDate() + 50);

  if (format === formatDE) {
    return `${referenceDate.getDate()}.${referenceDate.getMonth() + 1}.${year}`;
  } if (format === formatDateObj) {
    return `${year}-${referenceDate.getMonth() + 1}-${referenceDate.getDate()}`;
  }
};

Feiertage.getFronleichnam = (format, year) => {
  const referenceDate = new Date(Feiertage.getOstersonntag(formatDateObj, year));
  referenceDate.setDate(referenceDate.getDate() + 60);

  if (format === formatDE) {
    return `${referenceDate.getDate()}.${referenceDate.getMonth() + 1}.${year}`;
  } if (format === formatDateObj) {
    return `${year}-${referenceDate.getMonth() + 1}-${referenceDate.getDate()}`;
  }
};

Feiertage.getPeterUndPaul = (format, year) => {
  if (format === formatDE) {
    return `29.7.${year}`;
  } if (format === formatDateObj) {
    return `${year}-7-29`;
  }
};

Feiertage.getBundesfeierCH = (format, year) => {
  if (format === formatDE) {
    return `1.8.${year}`;
  } if (format === formatDateObj) {
    return `${year}-8-1`;
  }
};

Feiertage.getMariaHimmelfahrt = (format, year) => {
  if (format === formatDE) {
    return `15.8.${year}`;
  } if (format === formatDateObj) {
    return `${year}-8-15`;
  }
};

Feiertage.getStRupert = (format, year) => {
  if (format === formatDE) {
    return `24.9.${year}`;
  } if (format === formatDateObj) {
    return `${year}-9-24`;
  }
};

Feiertage.getTagDerDeutschenEinheit = (format, year) => {
  if (format === formatDE) {
    return `3.10.${year}`;
  } if (format === formatDateObj) {
    return `${year}-10-3`;
  }
};

Feiertage.getTagDerVolksabstimmung = (format, year) => {
  if (format === formatDE) {
    return `10.10.${year}`;
  } if (format === formatDateObj) {
    return `${year}-10-10`;
  }
};

Feiertage.getNationalfeiertagAT = (format, year) => {
  if (format === formatDE) {
    return `26.10.${year}`;
  } if (format === formatDateObj) {
    return `${year}-10-26`;
  }
};

Feiertage.getHalloween = (format, year) => {
  if (format === formatDE) {
    return `31.10.${year}`;
  } if (format === formatDateObj) {
    return `${year}-10-31`;
  }
};

Feiertage.getAllerheiligen = (format, year) => {
  if (format === formatDE) {
    return `1.11.${year}`;
  } if (format === formatDateObj) {
    return `${year}-11-1`;
  }
};

Feiertage.getStMartin = (format, year) => {
  if (format === formatDE) {
    return `11.11.${year}`;
  } if (format === formatDateObj) {
    return `${year}-11-11`;
  }
};

Feiertage.getStLeopold = (format, year) => {
  if (format === formatDE) {
    return `15.11.${year}`;
  } if (format === formatDateObj) {
    return `${year}-11-15`;
  }
};

Feiertage.getBussUndBettag = (format, year) => {
  const referenceDate = new Date(Feiertage.getAdvent4(formatDateObj, year));
  referenceDate.setDate(referenceDate.getDate() - 32);

  if (format === formatDE) {
    return `${referenceDate.getDate()}.${referenceDate.getMonth() + 1}.${year}`;
  } if (format === formatDateObj) {
    return `${year}-${referenceDate.getMonth() + 1}-${referenceDate.getDate()}`;
  }
};

Feiertage.getNikolaus = (format, year) => {
  if (format === formatDE) {
    return `6.12.${year}`;
  } if (format === formatDateObj) {
    return `${year}-12-6`;
  }
};

Feiertage.getMariaeEmpfaengnis = (format, year) => {
  if (format === formatDE) {
    return `8.12.${year}`;
  } if (format === formatDateObj) {
    return `${year}-12-8`;
  }
};

Feiertage.getAdvent1 = (format, year) => {
  const referenceDate = new Date(Feiertage.getAdvent4(formatDateObj, year));
  referenceDate.setDate(referenceDate.getDate() - 21);

  if (format === formatDE) {
    return `${referenceDate.getDate()}.${referenceDate.getMonth() + 1}.${year}`;
  } if (format === formatDateObj) {
    return `${year}-${referenceDate.getMonth() + 1}-${referenceDate.getDate()}`;
  }
};

Feiertage.getAdvent2 = (format, year) => {
  const referenceDate = new Date(Feiertage.getAdvent4(formatDateObj, year));
  referenceDate.setDate(referenceDate.getDate() - 14);

  if (format === formatDE) {
    return `${referenceDate.getDate()}.${referenceDate.getMonth() + 1}.${year}`;
  } if (format === formatDateObj) {
    return `${year}-${referenceDate.getMonth() + 1}-${referenceDate.getDate()}`;
  }
};

Feiertage.getAdvent3 = (format, year) => {
  const referenceDate = new Date(Feiertage.getAdvent4(formatDateObj, year));
  referenceDate.setDate(referenceDate.getDate() - 7);

  if (format === formatDE) {
    return `${referenceDate.getDate()}.${referenceDate.getMonth() + 1}.${year}`;
  } if (format === formatDateObj) {
    return `${year}-${referenceDate.getMonth() + 1}-${referenceDate.getDate()}`;
  }
};

Feiertage.getAdvent4 = (format, year) => Advent.calcAdvent4(format, 24, year);

Feiertage.getHeiligabend = (foramt, year) => {
  if (foramt === formatDE) {
    return `24.12.${year}`;
  } if (foramt === formatDateObj) {
    return `${year}-12-24`;
  }
};

Feiertage.getWeihnachtsfeiertag1 = (format, year) => {
  if (format === formatDE) {
    return `25.12.${year}`;
  } if (format === formatDateObj) {
    return `${year}-12-25`;
  }
};

Feiertage.getWeihnachtsfeiertag2 = (format, year) => {
  if (format === formatDE) {
    return `26.12.${year}`;
  } if (format === formatDateObj) {
    return `${year}-12-26`;
  }
};

Feiertage.getSilvester = (format, year) => {
  if (format === formatDE) {
    return `31.12.${year}`;
  } if (format === formatDateObj) {
    return `${year}-12-31`;
  }
};

module.exports = Feiertage;
