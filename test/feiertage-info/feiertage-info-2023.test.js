import { FeiertageInfo } from '../../index';

const year = 2023;

test('get Neujahr Info', () => {
  const name = 'Neujahr';
  const country = ['DE', 'AT', 'CH'];
  const dateObj = new Date('2023-01-01T00:00:00.000Z');
  const dateDE = '01.01.2023'
  const obj = {
    name: name,
    country: country,
    dateObj: dateObj,
    dateDE: dateDE,
  }
  expect(FeiertageInfo.getNeujahr(year)).toStrictEqual(obj);
  expect(FeiertageInfo.getNeujahr(year).name).toBe(name);
  expect(FeiertageInfo.getNeujahr(year).country).toStrictEqual(country);
  expect(FeiertageInfo.getNeujahr(year).dateObj).toStrictEqual(dateObj);
  expect(FeiertageInfo.getNeujahr(year).dateDE).toStrictEqual(dateDE);
});

test('get Berchtoldstag Info', () => {
  const name = 'Berchtoldstag';
  const country = ['CH'];
  const dateObj = new Date('2023-01-02T00:00:00.000Z');
  const dateDE = '02.01.2023'
  const obj = {
    name: name,
    country: country,
    dateObj: dateObj,
    dateDE: dateDE,
  }
  expect(FeiertageInfo.getBerchtoldstag(year)).toStrictEqual(obj);
  expect(FeiertageInfo.getBerchtoldstag(year).name).toBe(name);
  expect(FeiertageInfo.getBerchtoldstag(year).country).toStrictEqual(country);
  expect(FeiertageInfo.getBerchtoldstag(year).dateObj).toStrictEqual(dateObj);
  expect(FeiertageInfo.getBerchtoldstag(year).dateDE).toStrictEqual(dateDE);
});

test('get Heilige drei Könige Info', () => {
  const name = 'Heilige drei Könige';
  const country = ['DE', 'AT', 'CH'];
  const dateObj = new Date('2023-01-06T00:00:00.000Z');
  const dateDE = '06.01.2023'
  const obj = {
    name: name,
    country: country,
    dateObj: dateObj,
    dateDE: dateDE,
  }
  expect(FeiertageInfo.getHeiligeDreiKoenige(year)).toStrictEqual(obj);
  expect(FeiertageInfo.getHeiligeDreiKoenige(year).name).toBe(name);
  expect(FeiertageInfo.getHeiligeDreiKoenige(year).country).toStrictEqual(country);
  expect(FeiertageInfo.getHeiligeDreiKoenige(year).dateObj).toStrictEqual(dateObj);
  expect(FeiertageInfo.getHeiligeDreiKoenige(year).dateDE).toStrictEqual(dateDE);
});

test('get Weiberfastnacht', () => {
  const name = 'Weiberfastnacht';
  const country = ['DE'];
  const dateObj = new Date('2023-02-16T00:00:00.000Z');
  const dateDE = '16.02.2023'
  const obj = {
    name: name,
    country: country,
    dateObj: dateObj,
    dateDE: dateDE,
  }
  expect(FeiertageInfo.getWeiberfastnacht(year)).toStrictEqual(obj);
  expect(FeiertageInfo.getWeiberfastnacht(year).name).toBe(name);
  expect(FeiertageInfo.getWeiberfastnacht(year).country).toStrictEqual(country);
  expect(FeiertageInfo.getWeiberfastnacht(year).dateObj).toStrictEqual(dateObj);
  expect(FeiertageInfo.getWeiberfastnacht(year).dateDE).toStrictEqual(dateDE);
});

test('get Valentinstag', () => {
  const name = 'Valentinstag';
  const country = ['DE', 'AT', 'CH'];
  const dateObj = new Date('2023-02-14T00:00:00.000Z');
  const dateDE = '14.02.2023'
  const obj = {
    name: name,
    country: country,
    dateObj: dateObj,
    dateDE: dateDE,
  }
  expect(FeiertageInfo.getValentinstag(year)).toStrictEqual(obj);
  expect(FeiertageInfo.getValentinstag(year).name).toBe(name);
  expect(FeiertageInfo.getValentinstag(year).country).toStrictEqual(country);
  expect(FeiertageInfo.getValentinstag(year).dateObj).toStrictEqual(dateObj);
  expect(FeiertageInfo.getValentinstag(year).dateDE).toStrictEqual(dateDE);
});

test('get Rosenmontag', () => {
  const name = 'Rosenmontag';
  const country = ['DE', 'AT'];
  const dateObj = new Date('2023-02-20T00:00:00.000Z');
  const dateDE = '20.02.2023'
  const obj = {
    name: name,
    country: country,
    dateObj: dateObj,
    dateDE: dateDE,
  }
  expect(FeiertageInfo.getRosenmontag(year)).toStrictEqual(obj);
  expect(FeiertageInfo.getRosenmontag(year).name).toBe(name);
  expect(FeiertageInfo.getRosenmontag(year).country).toStrictEqual(country);
  expect(FeiertageInfo.getRosenmontag(year).dateObj).toStrictEqual(dateObj);
  expect(FeiertageInfo.getRosenmontag(year).dateDE).toStrictEqual(dateDE);
});

test('get Faschingsdienstag', () => {
  const name = 'Faschingsdienstag';
  const country = ['DE', 'AT', 'CH'];
  const dateObj = new Date('2023-02-21T00:00:00.000Z');
  const dateDE = '21.02.2023'
  const obj = {
    name: name,
    country: country,
    dateObj: dateObj,
    dateDE: dateDE,
  }
  expect(FeiertageInfo.getFastnachtsdienstag(year)).toStrictEqual(obj);
  expect(FeiertageInfo.getFastnachtsdienstag(year).name).toBe(name);
  expect(FeiertageInfo.getFastnachtsdienstag(year).country).toStrictEqual(country);
  expect(FeiertageInfo.getFastnachtsdienstag(year).dateObj).toStrictEqual(dateObj);
  expect(FeiertageInfo.getFastnachtsdienstag(year).dateDE).toStrictEqual(dateDE);
});

test('get Aschermittwoch', () => {
  const name = 'Aschermittwoch';
  const country = ['DE', 'AT'];
  const dateObj = new Date('2023-02-22T00:00:00.000Z');
  const dateDE = '22.02.2023'
  const obj = {
    name: name,
    country: country,
    dateObj: dateObj,
    dateDE: dateDE,
  }
  expect(FeiertageInfo.getAschermittwoch(year)).toStrictEqual(obj);
  expect(FeiertageInfo.getAschermittwoch(year).name).toBe(name);
  expect(FeiertageInfo.getAschermittwoch(year).country).toStrictEqual(country);
  expect(FeiertageInfo.getAschermittwoch(year).dateObj).toStrictEqual(dateObj);
  expect(FeiertageInfo.getAschermittwoch(year).dateDE).toStrictEqual(dateDE);
});

test('get St. Josef', () => {
  const name = 'St. Josef';
  const country = ['AT', 'CH'];
  const dateObj = new Date('2023-03-19T00:00:00.000Z');
  const dateDE = '19.03.2023'
  const obj = {
    name: name,
    country: country,
    dateObj: dateObj,
    dateDE: dateDE,
  }
  expect(FeiertageInfo.getStJosef(year)).toStrictEqual(obj);
  expect(FeiertageInfo.getStJosef(year).name).toBe(name);
  expect(FeiertageInfo.getStJosef(year).country).toStrictEqual(country);
  expect(FeiertageInfo.getStJosef(year).dateObj).toStrictEqual(dateObj);
  expect(FeiertageInfo.getStJosef(year).dateDE).toStrictEqual(dateDE);
});

test('get Gründonnerstag', () => {
  const name = 'Gründonnerstag';
  const country = ['DE', 'AT'];
  const dateObj = new Date('2023-04-06T00:00:00.000Z');
  const dateDE = '06.04.2023'
  const obj = {
    name: name,
    country: country,
    dateObj: dateObj,
    dateDE: dateDE,
  }
  expect(FeiertageInfo.getGruendonnerstag(year)).toStrictEqual(obj);
  expect(FeiertageInfo.getGruendonnerstag(year).name).toBe(name);
  expect(FeiertageInfo.getGruendonnerstag(year).country).toStrictEqual(country);
  expect(FeiertageInfo.getGruendonnerstag(year).dateObj).toStrictEqual(dateObj);
  expect(FeiertageInfo.getGruendonnerstag(year).dateDE).toStrictEqual(dateDE);
});

test('get Karfreitag', () => {
  const name = 'Karfreitag';
  const country = ['DE', 'AT', 'CH'];
  const dateObj = new Date('2023-04-07T00:00:00.000Z');
  const dateDE = '07.04.2023'
  const obj = {
    name: name,
    country: country,
    dateObj: dateObj,
    dateDE: dateDE,
  }
  expect(FeiertageInfo.getKarfreitag(year)).toStrictEqual(obj);
  expect(FeiertageInfo.getKarfreitag(year).name).toBe(name);
  expect(FeiertageInfo.getKarfreitag(year).country).toStrictEqual(country);
  expect(FeiertageInfo.getKarfreitag(year).dateObj).toStrictEqual(dateObj);
  expect(FeiertageInfo.getKarfreitag(year).dateDE).toStrictEqual(dateDE);
});

test('get Ostersonntag', () => {
  const name = 'Ostersonntag';
  const country = ['DE', 'AT', 'CH'];
  const dateObj = new Date('2023-04-09T00:00:00.000Z');
  const dateDE = '09.04.2023'
  const obj = {
    name: name,
    country: country,
    dateObj: dateObj,
    dateDE: dateDE,
  }
  expect(FeiertageInfo.getOstersonntag(year)).toStrictEqual(obj);
  expect(FeiertageInfo.getOstersonntag(year).name).toBe(name);
  expect(FeiertageInfo.getOstersonntag(year).country).toStrictEqual(country);
  expect(FeiertageInfo.getOstersonntag(year).dateObj).toStrictEqual(dateObj);
  expect(FeiertageInfo.getOstersonntag(year).dateDE).toStrictEqual(dateDE);
});

test('get Ostermontag', () => {
  const name = 'Ostermontag';
  const country = ['DE', 'AT', 'CH'];
  const dateObj = new Date('2023-04-10T00:00:00.000Z');
  const dateDE = '10.04.2023'
  const obj = {
    name: name,
    country: country,
    dateObj: dateObj,
    dateDE: dateDE,
  }
  expect(FeiertageInfo.getOstermontag(year)).toStrictEqual(obj);
  expect(FeiertageInfo.getOstermontag(year).name).toBe(name);
  expect(FeiertageInfo.getOstermontag(year).country).toStrictEqual(country);
  expect(FeiertageInfo.getOstermontag(year).dateObj).toStrictEqual(dateObj);
  expect(FeiertageInfo.getOstermontag(year).dateDE).toStrictEqual(dateDE);
});

test('get 1. Mai', () => {
  const name = '1. Mai';
  const country = ['DE', 'AT', 'CH'];
  const dateObj = new Date('2023-05-01T00:00:00.000Z');
  const dateDE = '01.05.2023'
  const obj = {
    name: name,
    country: country,
    dateObj: dateObj,
    dateDE: dateDE,
  }
  expect(FeiertageInfo.getFirstMay(year)).toStrictEqual(obj);
  expect(FeiertageInfo.getFirstMay(year).name).toBe(name);
  expect(FeiertageInfo.getFirstMay(year).country).toStrictEqual(country);
  expect(FeiertageInfo.getFirstMay(year).dateObj).toStrictEqual(dateObj);
  expect(FeiertageInfo.getFirstMay(year).dateDE).toStrictEqual(dateDE);
});

test('get St. Florian', () => {
  const name = 'St. Florian';
  const country = ['AT'];
  const dateObj = new Date('2023-05-04T00:00:00.000Z');
  const dateDE = '04.05.2023'
  const obj = {
    name: name,
    country: country,
    dateObj: dateObj,
    dateDE: dateDE,
  }
  expect(FeiertageInfo.getStFlorian(year)).toStrictEqual(obj);
  expect(FeiertageInfo.getStFlorian(year).name).toBe(name);
  expect(FeiertageInfo.getStFlorian(year).country).toStrictEqual(country);
  expect(FeiertageInfo.getStFlorian(year).dateObj).toStrictEqual(dateObj);
  expect(FeiertageInfo.getStFlorian(year).dateDE).toStrictEqual(dateDE);
});

test('get Christi Himmelfahrt', () => {
  const name = 'Christi Himmelfahrt';
  const country = ['DE', 'AT', 'CH'];
  const dateObj = new Date('2023-05-18T00:00:00.000Z');
  const dateDE = '18.05.2023'
  const obj = {
    name: name,
    country: country,
    dateObj: dateObj,
    dateDE: dateDE,
  }
  expect(FeiertageInfo.getChristiHimmelfahrt(year)).toStrictEqual(obj);
  expect(FeiertageInfo.getChristiHimmelfahrt(year).name).toBe(name);
  expect(FeiertageInfo.getChristiHimmelfahrt(year).country).toStrictEqual(country);
  expect(FeiertageInfo.getChristiHimmelfahrt(year).dateObj).toStrictEqual(dateObj);
  expect(FeiertageInfo.getChristiHimmelfahrt(year).dateDE).toStrictEqual(dateDE);
});

test('get Pfingstsonntag', () => {
  const name = 'Pfingstsonntag';
  const country = ['DE', 'AT', 'CH'];
  const dateObj = new Date('2023-05-28T00:00:00.000Z');
  const dateDE = '28.05.2023'
  const obj = {
    name: name,
    country: country,
    dateObj: dateObj,
    dateDE: dateDE,
  }
  expect(FeiertageInfo.getPfingstsonntag(year)).toStrictEqual(obj);
  expect(FeiertageInfo.getPfingstsonntag(year).name).toBe(name);
  expect(FeiertageInfo.getPfingstsonntag(year).country).toStrictEqual(country);
  expect(FeiertageInfo.getPfingstsonntag(year).dateObj).toStrictEqual(dateObj);
  expect(FeiertageInfo.getPfingstsonntag(year).dateDE).toStrictEqual(dateDE);
});

test('get Pfingstmontag', () => {
  const name = 'Pfingstmontag';
  const country = ['DE', 'AT', 'CH'];
  const dateObj = new Date('2023-05-29T00:00:00.000Z');
  const dateDE = '29.05.2023'
  const obj = {
    name: name,
    country: country,
    dateObj: dateObj,
    dateDE: dateDE,
  }
  expect(FeiertageInfo.getPfingstmontag(year)).toStrictEqual(obj);
  expect(FeiertageInfo.getPfingstmontag(year).name).toBe(name);
  expect(FeiertageInfo.getPfingstmontag(year).country).toStrictEqual(country);
  expect(FeiertageInfo.getPfingstmontag(year).dateObj).toStrictEqual(dateObj);
  expect(FeiertageInfo.getPfingstmontag(year).dateDE).toStrictEqual(dateDE);
});

test('get Fronleichnam', () => {
  const name = 'Fronleichnam';
  const country = ['DE', 'CH'];
  const dateObj = new Date('2023-06-08T00:00:00.000Z');
  const dateDE = '08.06.2023'
  const obj = {
    name: name,
    country: country,
    dateObj: dateObj,
    dateDE: dateDE,
  }
  expect(FeiertageInfo.getFronleichnam(year)).toStrictEqual(obj);
  expect(FeiertageInfo.getFronleichnam(year).name).toBe(name);
  expect(FeiertageInfo.getFronleichnam(year).country).toStrictEqual(country);
  expect(FeiertageInfo.getFronleichnam(year).dateObj).toStrictEqual(dateObj);
  expect(FeiertageInfo.getFronleichnam(year).dateDE).toStrictEqual(dateDE);
});

test('get Peter und Paul', () => {
  const name = 'Peter und Paul';
  const country = ['DE', 'AT', 'CH'];
  const dateObj = new Date('2023-07-29T00:00:00.000Z');
  const dateDE = '29.07.2023'
  const obj = {
    name: name,
    country: country,
    dateObj: dateObj,
    dateDE: dateDE,
  }
  expect(FeiertageInfo.getPeterUndPaul(year)).toStrictEqual(obj);
  expect(FeiertageInfo.getPeterUndPaul(year).name).toBe(name);
  expect(FeiertageInfo.getPeterUndPaul(year).country).toStrictEqual(country);
  expect(FeiertageInfo.getPeterUndPaul(year).dateObj).toStrictEqual(dateObj);
  expect(FeiertageInfo.getPeterUndPaul(year).dateDE).toStrictEqual(dateDE);
});

test('get Bundesfeiertag CH', () => {
  const name = 'Bundesfeiertag';
  const country = ['CH'];
  const dateObj = new Date('2023-08-01T00:00:00.000Z');
  const dateDE = '01.08.2023'
  const obj = {
    name: name,
    country: country,
    dateObj: dateObj,
    dateDE: dateDE,
  }
  expect(FeiertageInfo.getBundesfeierCH(year)).toStrictEqual(obj);
  expect(FeiertageInfo.getBundesfeierCH(year).name).toBe(name);
  expect(FeiertageInfo.getBundesfeierCH(year).country).toStrictEqual(country);
  expect(FeiertageInfo.getBundesfeierCH(year).dateObj).toStrictEqual(dateObj);
  expect(FeiertageInfo.getBundesfeierCH(year).dateDE).toStrictEqual(dateDE);
});

test('get Maria Himmelfahrt', () => {
  const name = 'Maria Himmelfahrt';
  const country = ['DE', 'AT', 'CH'];
  const dateObj = new Date('2023-08-15T00:00:00.000Z');
  const dateDE = '15.08.2023'
  const obj = {
    name: name,
    country: country,
    dateObj: dateObj,
    dateDE: dateDE,
  }
  expect(FeiertageInfo.getMariaHimmelfahrt(year)).toStrictEqual(obj);
  expect(FeiertageInfo.getMariaHimmelfahrt(year).name).toBe(name);
  expect(FeiertageInfo.getMariaHimmelfahrt(year).country).toStrictEqual(country);
  expect(FeiertageInfo.getMariaHimmelfahrt(year).dateObj).toStrictEqual(dateObj);
  expect(FeiertageInfo.getMariaHimmelfahrt(year).dateDE).toStrictEqual(dateDE);
});

test('get St. Rupert', () => {
  const name = 'St. Rupert';
  const country = ['AT'];
  const dateObj = new Date('2023-09-24T00:00:00.000Z');
  const dateDE = '24.09.2023'
  const obj = {
    name: name,
    country: country,
    dateObj: dateObj,
    dateDE: dateDE,
  }
  expect(FeiertageInfo.getStRupert(year)).toStrictEqual(obj);
  expect(FeiertageInfo.getStRupert(year).name).toBe(name);
  expect(FeiertageInfo.getStRupert(year).country).toStrictEqual(country);
  expect(FeiertageInfo.getStRupert(year).dateObj).toStrictEqual(dateObj);
  expect(FeiertageInfo.getStRupert(year).dateDE).toStrictEqual(dateDE);
});

test('get Tag der deutschen Einheit', () => {
  const name = 'Tag der deutschen Einheit';
  const country = ['DE'];
  const dateObj = new Date('2023-10-03T00:00:00.000Z');
  const dateDE = '03.10.2023'
  const obj = {
    name: name,
    country: country,
    dateObj: dateObj,
    dateDE: dateDE,
  }
  expect(FeiertageInfo.getTagDerDeutschenEinheit(year)).toStrictEqual(obj);
  expect(FeiertageInfo.getTagDerDeutschenEinheit(year).name).toBe(name);
  expect(FeiertageInfo.getTagDerDeutschenEinheit(year).country).toStrictEqual(country);
  expect(FeiertageInfo.getTagDerDeutschenEinheit(year).dateObj).toStrictEqual(dateObj);
  expect(FeiertageInfo.getTagDerDeutschenEinheit(year).dateDE).toStrictEqual(dateDE);
});

test('get Tag der Volksabstimmung', () => {
  const name = 'Tag der Volksabstimmung';
  const country = ['AT'];
  const dateObj = new Date('2023-10-10T00:00:00.000Z');
  const dateDE = '10.10.2023'
  const obj = {
    name: name,
    country: country,
    dateObj: dateObj,
    dateDE: dateDE,
  }
  expect(FeiertageInfo.getTagDerVolksabstimmung(year)).toStrictEqual(obj);
  expect(FeiertageInfo.getTagDerVolksabstimmung(year).name).toBe(name);
  expect(FeiertageInfo.getTagDerVolksabstimmung(year).country).toStrictEqual(country);
  expect(FeiertageInfo.getTagDerVolksabstimmung(year).dateObj).toStrictEqual(dateObj);
  expect(FeiertageInfo.getTagDerVolksabstimmung(year).dateDE).toStrictEqual(dateDE);
});

test('get Nationalfeiertag', () => {
  const name = 'Nationalfeiertag';
  const country = ['AT'];
  const dateObj = new Date('2023-10-26T00:00:00.000Z');
  const dateDE = '26.10.2023'
  const obj = {
    name: name,
    country: country,
    dateObj: dateObj,
    dateDE: dateDE,
  }
  expect(FeiertageInfo.getNationalfeiertagAT(year)).toStrictEqual(obj);
  expect(FeiertageInfo.getNationalfeiertagAT(year).name).toBe(name);
  expect(FeiertageInfo.getNationalfeiertagAT(year).country).toStrictEqual(country);
  expect(FeiertageInfo.getNationalfeiertagAT(year).dateObj).toStrictEqual(dateObj);
  expect(FeiertageInfo.getNationalfeiertagAT(year).dateDE).toStrictEqual(dateDE);
});

test('get Halloween', () => {
  const name = 'Halloween';
  const country = ['DE', 'AT'];
  const dateObj = new Date('2023-10-31T00:00:00.000Z');
  const dateDE = '31.10.2023'
  const obj = {
    name: name,
    country: country,
    dateObj: dateObj,
    dateDE: dateDE,
  }
  expect(FeiertageInfo.getHalloween(year)).toStrictEqual(obj);
  expect(FeiertageInfo.getHalloween(year).name).toBe(name);
  expect(FeiertageInfo.getHalloween(year).country).toStrictEqual(country);
  expect(FeiertageInfo.getHalloween(year).dateObj).toStrictEqual(dateObj);
  expect(FeiertageInfo.getHalloween(year).dateDE).toStrictEqual(dateDE);
});

test('get Allerheiligen', () => {
  const name = 'Allerheiligen';
  const country = ['DE', 'AT', 'CH'];
  const dateObj = new Date('2023-11-01T00:00:00.000Z');
  const dateDE = '01.11.2023'
  const obj = {
    name: name,
    country: country,
    dateObj: dateObj,
    dateDE: dateDE,
  }
  expect(FeiertageInfo.getAllerheiligen(year)).toStrictEqual(obj);
  expect(FeiertageInfo.getAllerheiligen(year).name).toBe(name);
  expect(FeiertageInfo.getAllerheiligen(year).country).toStrictEqual(country);
  expect(FeiertageInfo.getAllerheiligen(year).dateObj).toStrictEqual(dateObj);
  expect(FeiertageInfo.getAllerheiligen(year).dateDE).toStrictEqual(dateDE);
});

test('get St. Martin', () => {
  const name = 'St. Martin';
  const country = ['DE', 'AT', 'CH'];
  const dateObj = new Date('2023-11-11T00:00:00.000Z');
  const dateDE = '11.11.2023'
  const obj = {
    name: name,
    country: country,
    dateObj: dateObj,
    dateDE: dateDE,
  }
  expect(FeiertageInfo.getStMartin(year)).toStrictEqual(obj);
  expect(FeiertageInfo.getStMartin(year).name).toBe(name);
  expect(FeiertageInfo.getStMartin(year).country).toStrictEqual(country);
  expect(FeiertageInfo.getStMartin(year).dateObj).toStrictEqual(dateObj);
  expect(FeiertageInfo.getStMartin(year).dateDE).toStrictEqual(dateDE);
});

test('get St. Leopold', () => {
  const name = 'St. Leopold';
  const country = ['AT'];
  const dateObj = new Date('2023-11-15T00:00:00.000Z');
  const dateDE = '15.11.2023'
  const obj = {
    name: name,
    country: country,
    dateObj: dateObj,
    dateDE: dateDE,
  }
  expect(FeiertageInfo.getStLeopold(year)).toStrictEqual(obj);
  expect(FeiertageInfo.getStLeopold(year).name).toBe(name);
  expect(FeiertageInfo.getStLeopold(year).country).toStrictEqual(country);
  expect(FeiertageInfo.getStLeopold(year).dateObj).toStrictEqual(dateObj);
  expect(FeiertageInfo.getStLeopold(year).dateDE).toStrictEqual(dateDE);
});

test('get Buß und Bettag', () => {
  const name = 'Buß und Bettag';
  const country = ['DE', 'AT', 'CH'];
  const dateObj = new Date('2023-11-22T00:00:00.000Z');
  const dateDE = '22.11.2023'
  const obj = {
    name: name,
    country: country,
    dateObj: dateObj,
    dateDE: dateDE,
  }
  expect(FeiertageInfo.getBussUndBettag(year)).toStrictEqual(obj);
  expect(FeiertageInfo.getBussUndBettag(year).name).toBe(name);
  expect(FeiertageInfo.getBussUndBettag(year).country).toStrictEqual(country);
  expect(FeiertageInfo.getBussUndBettag(year).dateObj).toStrictEqual(dateObj);
  expect(FeiertageInfo.getBussUndBettag(year).dateDE).toStrictEqual(dateDE);
});

test('get Nikolaus', () => {
  const name = 'Nikolaus';
  const country = ['DE', 'AT', 'CH'];
  const dateObj = new Date('2023-12-06T00:00:00.000Z');
  const dateDE = '06.12.2023'
  const obj = {
    name: name,
    country: country,
    dateObj: dateObj,
    dateDE: dateDE,
  }
  expect(FeiertageInfo.getNikolaus(year)).toStrictEqual(obj);
  expect(FeiertageInfo.getNikolaus(year).name).toBe(name);
  expect(FeiertageInfo.getNikolaus(year).country).toStrictEqual(country);
  expect(FeiertageInfo.getNikolaus(year).dateObj).toStrictEqual(dateObj);
  expect(FeiertageInfo.getNikolaus(year).dateDE).toStrictEqual(dateDE);
});

test('get Mariä Empfängnis', () => {
  const name = 'Mariä Empfängnis';
  const country = ['AT', 'CH'];
  const dateObj = new Date('2023-12-08T00:00:00.000Z');
  const dateDE = '08.12.2023'
  const obj = {
    name: name,
    country: country,
    dateObj: dateObj,
    dateDE: dateDE,
  }
  expect(FeiertageInfo.getMariaeEmpfaengnis(year)).toStrictEqual(obj);
  expect(FeiertageInfo.getMariaeEmpfaengnis(year).name).toBe(name);
  expect(FeiertageInfo.getMariaeEmpfaengnis(year).country).toStrictEqual(country);
  expect(FeiertageInfo.getMariaeEmpfaengnis(year).dateObj).toStrictEqual(dateObj);
  expect(FeiertageInfo.getMariaeEmpfaengnis(year).dateDE).toStrictEqual(dateDE);
});

test('get 1. Advent', () => {
  const name = '1. Advent';
  const country = ['DE', 'AT', 'CH'];
  const dateObj = new Date('2023-12-03T00:00:00.000Z');
  const dateDE = '03.12.2023'
  const obj = {
    name: name,
    country: country,
    dateObj: dateObj,
    dateDE: dateDE,
  }
  expect(FeiertageInfo.getAdvent1(year)).toStrictEqual(obj);
  expect(FeiertageInfo.getAdvent1(year).name).toBe(name);
  expect(FeiertageInfo.getAdvent1(year).country).toStrictEqual(country);
  expect(FeiertageInfo.getAdvent1(year).dateObj).toStrictEqual(dateObj);
  expect(FeiertageInfo.getAdvent1(year).dateDE).toStrictEqual(dateDE);
});

test('get 2. Advent', () => {
  const name = '2. Advent';
  const country = ['DE', 'AT', 'CH'];
  const dateObj = new Date('2023-12-10T00:00:00.000Z');
  const dateDE = '10.12.2023'
  const obj = {
    name: name,
    country: country,
    dateObj: dateObj,
    dateDE: dateDE,
  }
  expect(FeiertageInfo.getAdvent2(year)).toStrictEqual(obj);
  expect(FeiertageInfo.getAdvent2(year).name).toBe(name);
  expect(FeiertageInfo.getAdvent2(year).country).toStrictEqual(country);
  expect(FeiertageInfo.getAdvent2(year).dateObj).toStrictEqual(dateObj);
  expect(FeiertageInfo.getAdvent2(year).dateDE).toStrictEqual(dateDE);
});

test('get 3. Advent', () => {
  const name = '3. Advent';
  const country = ['DE', 'AT', 'CH'];
  const dateObj = new Date('2023-12-17T00:00:00.000Z');
  const dateDE = '17.12.2023'
  const obj = {
    name: name,
    country: country,
    dateObj: dateObj,
    dateDE: dateDE,
  }
  expect(FeiertageInfo.getAdvent3(year)).toStrictEqual(obj);
  expect(FeiertageInfo.getAdvent3(year).name).toBe(name);
  expect(FeiertageInfo.getAdvent3(year).country).toStrictEqual(country);
  expect(FeiertageInfo.getAdvent3(year).dateObj).toStrictEqual(dateObj);
  expect(FeiertageInfo.getAdvent3(year).dateDE).toStrictEqual(dateDE);
});

test('get 4. Advent', () => {
  const name = '4. Advent';
  const country = ['DE', 'AT', 'CH'];
  const dateObj = new Date('2023-12-24T00:00:00.000Z');
  const dateDE = '24.12.2023'
  const obj = {
    name: name,
    country: country,
    dateObj: dateObj,
    dateDE: dateDE,
  }
  expect(FeiertageInfo.getAdvent4(year)).toStrictEqual(obj);
  expect(FeiertageInfo.getAdvent4(year).name).toBe(name);
  expect(FeiertageInfo.getAdvent4(year).country).toStrictEqual(country);
  expect(FeiertageInfo.getAdvent4(year).dateObj).toStrictEqual(dateObj);
  expect(FeiertageInfo.getAdvent4(year).dateDE).toStrictEqual(dateDE);
});

test('get Heiligabend', () => {
  const name = 'Heiligabend';
  const country = ['DE', 'AT', 'CH'];
  const dateObj = new Date('2023-12-24T00:00:00.000Z');
  const dateDE = '24.12.2023'
  const obj = {
    name: name,
    country: country,
    dateObj: dateObj,
    dateDE: dateDE,
  }
  expect(FeiertageInfo.getHeiligabend(year)).toStrictEqual(obj);
  expect(FeiertageInfo.getHeiligabend(year).name).toBe(name);
  expect(FeiertageInfo.getHeiligabend(year).country).toStrictEqual(country);
  expect(FeiertageInfo.getHeiligabend(year).dateObj).toStrictEqual(dateObj);
  expect(FeiertageInfo.getHeiligabend(year).dateDE).toStrictEqual(dateDE);
});

test('get 1. Weihnachtsfeiertag', () => {
  const name = '1. Weihnachtsfeiertag';
  const country = ['DE', 'AT', 'CH'];
  const dateObj = new Date('2023-12-25T00:00:00.000Z');
  const dateDE = '25.12.2023'
  const obj = {
    name: name,
    country: country,
    dateObj: dateObj,
    dateDE: dateDE,
  }
  expect(FeiertageInfo.getWeihnachtsfeiertag1(year)).toStrictEqual(obj);
  expect(FeiertageInfo.getWeihnachtsfeiertag1(year).name).toBe(name);
  expect(FeiertageInfo.getWeihnachtsfeiertag1(year).country).toStrictEqual(country);
  expect(FeiertageInfo.getWeihnachtsfeiertag1(year).dateObj).toStrictEqual(dateObj);
  expect(FeiertageInfo.getWeihnachtsfeiertag1(year).dateDE).toStrictEqual(dateDE);
});

test('get 2. Weihnachtsfeiertag', () => {
  const name = '2. Weihnachtsfeiertag';
  const country = ['DE', 'AT', 'CH'];
  const dateObj = new Date('2023-12-26T00:00:00.000Z');
  const dateDE = '26.12.2023'
  const obj = {
    name: name,
    country: country,
    dateObj: dateObj,
    dateDE: dateDE,
  }
  expect(FeiertageInfo.getWeihnachtsfeiertag2(year)).toStrictEqual(obj);
  expect(FeiertageInfo.getWeihnachtsfeiertag2(year).name).toBe(name);
  expect(FeiertageInfo.getWeihnachtsfeiertag2(year).country).toStrictEqual(country);
  expect(FeiertageInfo.getWeihnachtsfeiertag2(year).dateObj).toStrictEqual(dateObj);
  expect(FeiertageInfo.getWeihnachtsfeiertag2(year).dateDE).toStrictEqual(dateDE);
});

test('get Silvester', () => {
  const name = 'Silvester';
  const country = ['DE', 'AT', 'CH'];
  const dateObj = new Date('2023-12-31T00:00:00.000Z');
  const dateDE = '31.12.2023'
  const obj = {
    name: name,
    country: country,
    dateObj: dateObj,
    dateDE: dateDE,
  }
  expect(FeiertageInfo.getSilvester(year)).toStrictEqual(obj);
  expect(FeiertageInfo.getSilvester(year).name).toBe(name);
  expect(FeiertageInfo.getSilvester(year).country).toStrictEqual(country);
  expect(FeiertageInfo.getSilvester(year).dateObj).toStrictEqual(dateObj);
  expect(FeiertageInfo.getSilvester(year).dateDE).toStrictEqual(dateDE);
});