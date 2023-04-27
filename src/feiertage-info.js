const Feiertage = require('./feiertage');

const FeiertageInfo = {};

FeiertageInfo.getAll = (format, year) => [
  FeiertageInfo.getNeujahr(format, year), FeiertageInfo.getBerchtoldstag(format, year),
  FeiertageInfo.getHeiligeDreiKoenige(format, year), FeiertageInfo.getWeiberfastnacht(format, year),
  FeiertageInfo.getValentinstag(format, year), FeiertageInfo.getRosenmontag(format, year),
  FeiertageInfo.getFastnachtsdienstag(format, year), FeiertageInfo.getAschermittwoch(format, year),
  FeiertageInfo.getStJosef(format, year), FeiertageInfo.getGruendonnerstag(format, year),
  FeiertageInfo.getKarfreitag(format, year), FeiertageInfo.getOstersonntag(format, year),
  FeiertageInfo.getOstermontag(format, year), FeiertageInfo.getFirstMay(format, year),
  FeiertageInfo.getStFlorian(format, year), FeiertageInfo.getChristiHimmelfahrt(format, year),
  FeiertageInfo.getPfingstsonntag(format, year), Feiertage.getPfingstmontag(format, year),
  FeiertageInfo.getFronleichnam(format, year), FeiertageInfo.getPeterUndPaul(format, year),
  FeiertageInfo.getBundesfeierCH(format, year), FeiertageInfo.getMariaHimmelfahrt(format, year),
  FeiertageInfo.getStRupert(format, year), FeiertageInfo.getTagDerDeutschenEinheit(format, year),
  FeiertageInfo.getTagDerVolksabstimmung(format, year),
  FeiertageInfo.getNationalfeiertagAT(format, year),
  FeiertageInfo.getHalloween(format, year), FeiertageInfo.getAllerheiligen(format, year),
  FeiertageInfo.getStMartin(format, year), FeiertageInfo.getStLeopold(format, year),
  FeiertageInfo.getBussUndBettag(format, year), FeiertageInfo.getNikolaus(format, year),
  FeiertageInfo.getMariaeEmpfaengnis(format, year), FeiertageInfo.getAdvent1(format, year),
  FeiertageInfo.getAdvent2(format, year), FeiertageInfo.getAdvent3(format, year),
  FeiertageInfo.getAdvent4(format, year), FeiertageInfo.getHeiligabend(format, year),
  FeiertageInfo.getWeihnachtsfeiertag1(format, year),
  FeiertageInfo.getWeihnachtsfeiertag2(format, year), FeiertageInfo.getSilvester(format, year),
];

FeiertageInfo.getNeujahr = (year) => {
  const obj = {
    name: 'Neujahr',
    country: ['DE', 'AT', 'CH'],
    dateObj: Feiertage.getNeujahr(Feiertage.formatDateObj, year),
    dateDE: Feiertage.getNeujahr(Feiertage.formatDE, year),
  };
  return obj;
};

FeiertageInfo.getBerchtoldstag = (year) => {
  const obj = {
    name: 'Berchtoldstag',
    country: ['CH'],
    dateObj: Feiertage.getBerchtoldstag(Feiertage.formatDateObj, year),
    dateDE: Feiertage.getBerchtoldstag(Feiertage.formatDE, year),
  };
  return obj;
};

FeiertageInfo.getHeiligeDreiKoenige = (year) => {
  const obj = {
    name: 'Heilige drei Könige',
    country: ['DE', 'AT', 'CH'],
    dateObj: Feiertage.getHeiligeDreiKoenige(Feiertage.formatDateObj, year),
    dateDE: Feiertage.getHeiligeDreiKoenige(Feiertage.formatDE, year),
  };
  return obj;
};

FeiertageInfo.getWeiberfastnacht = (year) => {
  const obj = {
    name: 'Weiberfastnacht',
    country: ['DE'],
    dateObj: Feiertage.getWeiberfastnacht(Feiertage.formatDateObj, year),
    dateDE: Feiertage.getWeiberfastnacht(Feiertage.formatDE, year),
  };
  return obj;
};

FeiertageInfo.getValentinstag = (year) => {
  const obj = {
    name: 'Valentinstag',
    country: ['DE', 'AT', 'CH'],
    dateObj: Feiertage.getValentinstag(Feiertage.formatDateObj, year),
    dateDE: Feiertage.getValentinstag(Feiertage.formatDE, year),
  };
  return obj;
};

FeiertageInfo.getRosenmontag = (year) => {
  const obj = {
    name: 'Rosenmontag',
    country: ['DE', 'AT'],
    dateObj: Feiertage.getRosenmontag(Feiertage.formatDateObj, year),
    dateDE: Feiertage.getRosenmontag(Feiertage.formatDE, year),
  };
  return obj;
};

FeiertageInfo.getFastnachtsdienstag = (year) => {
  const obj = {
    name: 'Faschingsdienstag',
    country: ['DE', 'AT', 'CH'],
    dateObj: Feiertage.getFastnachtsdienstag(Feiertage.formatDateObj, year),
    dateDE: Feiertage.getFastnachtsdienstag(Feiertage.formatDE, year),
  };
  return obj;
};

FeiertageInfo.getAschermittwoch = (year) => {
  const obj = {
    name: 'Aschermittwoch',
    country: ['DE', 'AT'],
    dateObj: Feiertage.getAschermittwoch(Feiertage.formatDateObj, year),
    dateDE: Feiertage.getAschermittwoch(Feiertage.formatDE, year),
  };
  return obj;
};

FeiertageInfo.getStJosef = (year) => {
  const obj = {
    name: 'St. Josef',
    country: ['AT', 'CH'],
    dateObj: Feiertage.getStJosef(Feiertage.formatDateObj, year),
    dateDE: Feiertage.getStJosef(Feiertage.formatDE, year),
  };
  return obj;
};

FeiertageInfo.getGruendonnerstag = (year) => {
  const obj = {
    name: 'Gründonnerstag',
    country: ['DE', 'AT'],
    dateObj: Feiertage.getGruendonnerstag(Feiertage.formatDateObj, year),
    dateDE: Feiertage.getGruendonnerstag(Feiertage.formatDE, year),
  };
  return obj;
};

FeiertageInfo.getKarfreitag = (year) => {
  const obj = {
    name: 'Karfreitag',
    country: ['DE', 'AT', 'CH'],
    dateObj: Feiertage.getKarfreitag(Feiertage.formatDateObj, year),
    dateDE: Feiertage.getKarfreitag(Feiertage.formatDE, year),
  };
  return obj;
};

FeiertageInfo.getOstersonntag = (year) => {
  const obj = {
    name: 'Ostersonntag',
    country: ['DE', 'AT', 'CH'],
    dateObj: Feiertage.getOstersonntag(Feiertage.formatDateObj, year),
    dateDE: Feiertage.getOstersonntag(Feiertage.formatDE, year),
  };
  return obj;
};

FeiertageInfo.getOstermontag = (year) => {
  const obj = {
    name: 'Ostermontag',
    country: ['DE', 'AT', 'CH'],
    dateObj: Feiertage.getOstermontag(Feiertage.formatDateObj, year),
    dateDE: Feiertage.getOstermontag(Feiertage.formatDE, year),
  };
  return obj;
};

FeiertageInfo.getFirstMay = (year) => {
  const obj = {
    name: '1. Mai',
    country: ['DE', 'AT', 'CH'],
    dateObj: Feiertage.getFirstMay(Feiertage.formatDateObj, year),
    dateDE: Feiertage.getFirstMay(Feiertage.formatDE, year),
  };
  return obj;
};

FeiertageInfo.getStFlorian = (year) => {
  const obj = {
    name: 'St. Florian',
    country: ['AT'],
    dateObj: Feiertage.getStFlorian(Feiertage.formatDateObj, year),
    dateDE: Feiertage.getStFlorian(Feiertage.formatDE, year),
  };
  return obj;
};

FeiertageInfo.getChristiHimmelfahrt = (year) => {
  const obj = {
    name: 'Christi Himmelfahrt',
    country: ['DE', 'AT', 'CH'],
    dateObj: Feiertage.getChristiHimmelfahrt(Feiertage.formatDateObj, year),
    dateDE: Feiertage.getChristiHimmelfahrt(Feiertage.formatDE, year),
  };
  return obj;
};

FeiertageInfo.getPfingstsonntag = (year) => {
  const obj = {
    name: 'Pfingstsonntag',
    country: ['DE', 'AT', 'CH'],
    dateObj: Feiertage.getPfingstsonntag(Feiertage.formatDateObj, year),
    dateDE: Feiertage.getPfingstsonntag(Feiertage.formatDE, year),
  };
  return obj;
};

FeiertageInfo.getPfingstmontag = (year) => {
  const obj = {
    name: 'Pfingstmontag',
    country: ['DE', 'AT', 'CH'],
    dateObj: Feiertage.getPfingstmontag(Feiertage.formatDateObj, year),
    dateDE: Feiertage.getPfingstmontag(Feiertage.formatDE, year),
  };
  return obj;
};

FeiertageInfo.getFronleichnam = (year) => {
  const obj = {
    name: 'Fronleichnam',
    country: ['DE', 'CH'],
    dateObj: Feiertage.getFronleichnam(Feiertage.formatDateObj, year),
    dateDE: Feiertage.getFronleichnam(Feiertage.formatDE, year),
  };
  return obj;
};

FeiertageInfo.getPeterUndPaul = (year) => {
  const obj = {
    name: 'Peter und Paul',
    country: ['DE', 'AT', 'CH'],
    dateObj: Feiertage.getPeterUndPaul(Feiertage.formatDateObj, year),
    dateDE: Feiertage.getPeterUndPaul(Feiertage.formatDE, year),
  };
  return obj;
};

FeiertageInfo.getBundesfeierCH = (year) => {
  const obj = {
    name: 'Bundesfeiertag',
    country: ['CH'],
    dateObj: Feiertage.getBundesfeierCH(Feiertage.formatDateObj, year),
    dateDE: Feiertage.getBundesfeierCH(Feiertage.formatDE, year),
  };
  return obj;
};

FeiertageInfo.getMariaHimmelfahrt = (year) => {
  const obj = {
    name: 'Maria Himmelfahrt',
    country: ['DE', 'AT', 'CH'],
    dateObj: Feiertage.getMariaHimmelfahrt(Feiertage.formatDateObj, year),
    dateDE: Feiertage.getMariaHimmelfahrt(Feiertage.formatDE, year),
  };
  return obj;
};

FeiertageInfo.getStRupert = (year) => {
  const obj = {
    name: 'St. Rupert',
    country: ['AT'],
    dateObj: Feiertage.getStRupert(Feiertage.formatDateObj, year),
    dateDE: Feiertage.getStRupert(Feiertage.formatDE, year),
  };
  return obj;
};

FeiertageInfo.getTagDerDeutschenEinheit = (year) => {
  const obj = {
    name: 'Tag der deutschen Einheit',
    country: ['DE'],
    dateObj: Feiertage.getTagDerDeutschenEinheit(Feiertage.formatDateObj, year),
    dateDE: Feiertage.getTagDerDeutschenEinheit(Feiertage.formatDE, year),
  };
  return obj;
};

FeiertageInfo.getTagDerVolksabstimmung = (year) => {
  const obj = {
    name: 'Tag der Volksabstimmung',
    country: ['AT'],
    dateObj: Feiertage.getTagDerVolksabstimmung(Feiertage.formatDateObj, year),
    dateDE: Feiertage.getTagDerVolksabstimmung(Feiertage.formatDE, year),
  };
  return obj;
};

FeiertageInfo.getNationalfeiertagAT = (year) => {
  const obj = {
    name: 'Nationalfeiertag',
    country: ['AT'],
    dateObj: Feiertage.getNationalfeiertagAT(Feiertage.formatDateObj, year),
    dateDE: Feiertage.getNationalfeiertagAT(Feiertage.formatDE, year),
  };
  return obj;
};

FeiertageInfo.getHalloween = (year) => {
  const obj = {
    name: 'Halloween',
    country: ['DE', 'AT'],
    dateObj: Feiertage.getHalloween(Feiertage.formatDateObj, year),
    dateDE: Feiertage.getHalloween(Feiertage.formatDE, year),
  };
  return obj;
};

FeiertageInfo.getAllerheiligen = (year) => {
  const obj = {
    name: 'Allerheiligen',
    country: ['DE', 'AT', 'CH'],
    dateObj: Feiertage.getAllerheiligen(Feiertage.formatDateObj, year),
    dateDE: Feiertage.getAllerheiligen(Feiertage.formatDE, year),
  };
  return obj;
};

FeiertageInfo.getStMartin = (year) => {
  const obj = {
    name: 'St. Martin',
    country: ['DE', 'AT', 'CH'],
    dateObj: Feiertage.getStMartin(Feiertage.formatDateObj, year),
    dateDE: Feiertage.getStMartin(Feiertage.formatDE, year),
  };
  return obj;
};

FeiertageInfo.getStLeopold = (year) => {
  const obj = {
    name: 'St. Leopold',
    country: ['AT'],
    dateObj: Feiertage.getStLeopold(Feiertage.formatDateObj, year),
    dateDE: Feiertage.getStLeopold(Feiertage.formatDE, year),
  };
  return obj;
};

FeiertageInfo.getBussUndBettag = (year) => {
  const obj = {
    name: 'Buß und Bettag',
    country: ['DE', 'AT', 'CH'],
    dateObj: Feiertage.getBussUndBettag(Feiertage.formatDateObj, year),
    dateDE: Feiertage.getBussUndBettag(Feiertage.formatDE, year),
  };
  return obj;
};

FeiertageInfo.getNikolaus = (year) => {
  const obj = {
    name: 'Nikolaus',
    country: ['DE', 'AT', 'CH'],
    dateObj: Feiertage.getNikolaus(Feiertage.formatDateObj, year),
    dateDE: Feiertage.getNikolaus(Feiertage.formatDE, year),
  };
  return obj;
};

FeiertageInfo.getMariaeEmpfaengnis = (year) => {
  const obj = {
    name: 'Mariä Empfängnis',
    country: ['AT', 'CH'],
    dateObj: Feiertage.getMariaeEmpfaengnis(Feiertage.formatDateObj, year),
    dateDE: Feiertage.getMariaeEmpfaengnis(Feiertage.formatDE, year),
  };
  return obj;
};

FeiertageInfo.getAdvent1 = (year) => {
  const obj = {
    name: '1. Advent',
    country: ['DE', 'AT', 'CH'],
    dateObj: Feiertage.getAdvent1(Feiertage.formatDateObj, year),
    dateDE: Feiertage.getAdvent1(Feiertage.formatDE, year),
  };
  return obj;
};

FeiertageInfo.getAdvent2 = (year) => {
  const obj = {
    name: '2. Advent',
    country: ['DE', 'AT', 'CH'],
    dateObj: Feiertage.getAdvent2(Feiertage.formatDateObj, year),
    dateDE: Feiertage.getAdvent2(Feiertage.formatDE, year),
  };
  return obj;
};

FeiertageInfo.getAdvent3 = (year) => {
  const obj = {
    name: '3. Advent',
    country: ['DE', 'AT', 'CH'],
    dateObj: Feiertage.getAdvent3(Feiertage.formatDateObj, year),
    dateDE: Feiertage.getAdvent3(Feiertage.formatDE, year),
  };
  return obj;
};

FeiertageInfo.getAdvent4 = (year) => {
  const obj = {
    name: '4. Advent',
    country: ['DE', 'AT', 'CH'],
    dateObj: Feiertage.getAdvent4(Feiertage.formatDateObj, year),
    dateDE: Feiertage.getAdvent4(Feiertage.formatDE, year),
  };
  return obj;
};

FeiertageInfo.getHeiligabend = (year) => {
  const obj = {
    name: 'Heiligabend',
    country: ['DE', 'AT', 'CH'],
    dateObj: Feiertage.getHeiligabend(Feiertage.formatDateObj, year),
    dateDE: Feiertage.getHeiligabend(Feiertage.formatDE, year),
  };
  return obj;
};

FeiertageInfo.getWeihnachtsfeiertag1 = (year) => {
  const obj = {
    name: '1. Weihnachtsfeiertag',
    country: ['DE', 'AT', 'CH'],
    dateObj: Feiertage.getWeihnachtsfeiertag1(Feiertage.formatDateObj, year),
    dateDE: Feiertage.getWeihnachtsfeiertag1(Feiertage.formatDE, year),
  };
  return obj;
};

FeiertageInfo.getWeihnachtsfeiertag2 = (year) => {
  const obj = {
    name: '2. Weihnachtsfeiertag',
    country: ['DE', 'AT', 'CH'],
    dateObj: Feiertage.getWeihnachtsfeiertag2(Feiertage.formatDateObj, year),
    dateDE: Feiertage.getWeihnachtsfeiertag2(Feiertage.formatDE, year),
  };
  return obj;
};

FeiertageInfo.getSilvester = (year) => {
  const obj = {
    name: 'Silvester',
    country: ['DE', 'AT', 'CH'],
    dateObj: Feiertage.getSilvester(Feiertage.formatDateObj, year),
    dateDE: Feiertage.getSilvester(Feiertage.formatDE, year),
  };
  return obj;
};

module.exports = FeiertageInfo;
