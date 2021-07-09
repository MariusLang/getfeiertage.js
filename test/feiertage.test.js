import { Feiertage } from '../index';

/*test('get Neujahr', () => {
  expect(Feiertage.getNeujahr(Feiertage.formatDateObj, 2021).valueOf()).toBe(new Date('2021-01-01T00:00:00').valueOf());
  expect(Feiertage.getNeujahr(Feiertage.formatDE, 2021)).toBe('1.1.2021');
});

test('get Berchtoldstag', () => {
  expect(Feiertage.getBerchtoldstag(Feiertage.formatDateObj, 2021).valueOf()).toBe(new Date('2021-01-02').valueOf());
  expect(Feiertage.getBerchtoldstag(Feiertage.formatDE, 2021)).toBe('2.1.2021');
});

test('get Heilige drei Könige', () => {
  expect(Feiertage.getHeiligeDreiKoenige(Feiertage.formatDateObj, 2021).valueOf()).toBe(new Date('2021-01-06').valueOf());
  expect(Feiertage.getHeiligeDreiKoenige(Feiertage.formatDE, 2021)).toBe('6.1.2021');
});*/

test('get Weiberfastnacht', () => {
  expect(Feiertage.getWeiberfastnacht(Feiertage.formatDateObj, 2021)).toBe(new Date('2021-02-11').valueOf());
  expect(Feiertage.getWeiberfastnacht(Feiertage.formatDE, 2021)).toBe('11.2.2021');
});

/*test('get Valentinstag', () => {
  expect(Feiertage.getValentinstag(Feiertage.formatDateObj, 2021).valueOf()).toBe(new Date('2021-02-14').valueOf());
  expect(Feiertage.getValentinstag(Feiertage.formatDE, 2021)).toBe('14.2.2021');
});

test('get Rosenmontag', () => {
  expect(Feiertage.getRosenmontag(Feiertage.formatDateObj, 2021).valueOf()).toBe(new Date('2021-02-15'));
  expect(Feiertage.getRosenmontag(Feiertage.formatDE, 2021)).toBe('15.2.2021');
});

test('get Fastnachtsdienstag', () => {
  expect(Feiertage.getFastnachtsdienstag(Feiertage.formatDateObj, 2021).valueOf()).toBe(new Date('2021-02-16').valueOf());
  expect(Feiertage.getFastnachtsdienstag(Feiertage.formatDE, 2021)).toBe('16.2.2021');
});

test('get Aschermittwoch', () => {
  expect(Feiertage.getAschermittwoch(Feiertage.formatDateObj, 2021).valueOf()).toBe(new Date('2021-02-17').valueOf());
  expect(Feiertage.getAschermittwoch(Feiertage.formatDE, 2021)).toBe('17.2.2021');
});

test('get St. Josef', () => {
  expect(Feiertage.getStJosef(Feiertage.formatDateObj, 2021).valueOf()).toBe(new Date('2021-03-19').valueOf());
  expect(Feiertage.getStJosef(Feiertage.formatDE, 2021)).toBe('19.3.2021');
});

test('get Gründonnerstag', () => {
  expect(Feiertage.getGruendonnerstag(Feiertage.formatDateObj, 2021).valueOf()).toBe(new Date('2021-04-01').valueOf());
  expect(Feiertage.getGruendonnerstag(Feiertage.formatDE, 2021)).toBe('1.4.2021');
});

test('get Karfreitag', () => {
  expect(Feiertage.getKarfreitag(Feiertage.formatDateObj, 2021).valueOf()).toBe(new Date('2021-04-02').valueOf());
  expect(Feiertage.getKarfreitag(Feiertage.formatDE, 2021)).toBe('2.4.2021');
});

test('get Ostersonntag', () => {
  expect(Feiertage.getOstersonntag(Feiertage.formatDateObj, 2021).valueOf()).toBe(new Date('2021-04-04').valueOf());
  expect(Feiertage.getOstersonntag(Feiertage.formatDE, 2021)).toBe('4.4.2021');
});

test('get 1. Mai', () => {
  expect(Feiertage.getFirstMay(Feiertage.formatDateObj, 2021).valueOf()).toBe(new Date('2021-05-01').valueOf());
  expect(Feiertage.getFirstMay(Feiertage.formatDE, 2021)).toBe('1.5.2021');
});

test('get St. Florian', () => {
  expect(Feiertage.getStFlorian(Feiertage.formatDateObj, 2021).valueOf()).toBe(new Date('2021-05-04').valueOf());
  expect(Feiertage.getStFlorian(Feiertage.formatDE, 2021)).toBe('4.5.2021');
});

test('get Christi Himmelfahrt', () => {
  expect(Feiertage.getChristiHimmelfahrt(Feiertage.formatDateObj, 2021).valueOf()).toBe(new Date('2021-05-13').valueOf());
  expect(Feiertage.getChristiHimmelfahrt(Feiertage.formatDE, 2021)).toBe('13.5.2021');
});

test('get Pfingstsonntag', () => {
  expect(Feiertage.getPfingstsonntag(Feiertage.formatDateObj, 2021).valueOf()).toBe(new Date('2021-05-23').valueOf());
  expect(Feiertage.getPfingstsonntag(Feiertage.formatDE, 2021)).toBe('23.5.2021');
});

test('get Pfingstmontag', () => {
  expect(Feiertage.getPfingstmontag(Feiertage.formatDateObj, 2021).valueOf()).toBe(new Date('2021-05-24').valueOf());
  expect(Feiertage.getPfingstmontag(Feiertage.formatDE, 2021)).toBe('24.5.2021');
});

test('get Fronleichnam', () => {
  expect(Feiertage.getFronleichnam(Feiertage.formatDateObj, 2021).valueOf()).toBe(new Date('2021-06-03').valueOf());
  expect(Feiertage.getFronleichnam(Feiertage.formatDE, 2021)).toBe('3.6.2021');
});

test('get Peter und Paul', () => {
  expect(Feiertage.getPeterUndPaul(Feiertage.formatDateObj, 2021).valueOf()).toBe(new Date('2021-07-29').valueOf());
  expect(Feiertage.getPeterUndPaul(Feiertage.formatDE, 2021)).toBe('29.7.2021');
});

test('get Bundesfeiertag CH', () => {
  expect(Feiertage.getBundesfeierCH(Feiertage.formatDateObj, 2021).valueOf()).toBe(new Date('2021-08-01').valueOf());
  expect(Feiertage.getBundesfeierCH(Feiertage.formatDE, 2021)).toBe('1.8.2021');
});

test('get Maria Himmelfahrt', () => {
  expect(Feiertage.getMariaHimmelfahrt(Feiertage.formatDateObj, 2021).valueOf()).toBe(new Date('2021-08-15').valueOf());
  expect(Feiertage.getMariaHimmelfahrt(Feiertage.formatDE, 2021)).toBe('15.8.2021');
});

test('get St. Rupert', () => {
  expect(Feiertage.getStRupert(Feiertage.formatDateObj, 2021).valueOf()).toBe(new Date('2021-09-24').valueOf());
  expect(Feiertage.getStRupert(Feiertage.formatDE, 2021)).toBe('24.9.2021');
});

test('get Tag der deutschen Einheit', () => {
  expect(Feiertage.getTagDerDeutschenEinheit(Feiertage.formatDateObj, 2021).valueOf()).toBe(new Date('2021-10-03').valueOf());
  expect(Feiertage.getTagDerDeutschenEinheit(Feiertage.formatDE, 2021)).toBe('3.10.2021');
});

test('get Nationalfeiertag AT', () => {
  expect(Feiertage.getNationalfeiertagAT(Feiertage.formatDateObj, 2021).valueOf()).toBe(new Date('2021-10-26').valueOf());
  expect(Feiertage.getNationalfeiertagAT(Feiertage.formatDE, 2021)).toBe('26.10.2021');
});

test('get Halloween', () => {
  expect(Feiertage.getHalloween(Feiertage.formatDateObj, 2021).valueOf()).toBe(new Date('2021-10-31').valueOf());
  expect(Feiertage.getHalloween(Feiertage.formatDE, 2021)).toBe('31.10.2021');
});

test('get Allerheiligen', () => {
  expect(Feiertage.getAllerheiligen(Feiertage.formatDateObj, 2021).valueOf()).toBe(new Date('2021-11-01').valueOf());
  expect(Feiertage.getAllerheiligen(Feiertage.formatDE, 2021)).toBe('1.11.2021');
});

test('get St. Martin', () => {
  expect(Feiertage.getStMartin(Feiertage.formatDateObj, 2021).valueOf()).toBe(new Date('2021-11-11').valueOf());
  expect(Feiertage.getStMartin(Feiertage.formatDE, 2021)).toBe('11.11.2021');
});

test('get St. Leopold', () => {
  expect(Feiertage.getStLeopold(Feiertage.formatDateObj, 2021).valueOf()).toBe(new Date('2021-11-15').valueOf());
  expect(Feiertage.getStLeopold(Feiertage.formatDE, 2021)).toBe('15.11.2021');
});

test('get Buß und Bettag', () => {
  expect(Feiertage.getBussUndBettag(Feiertage.formatDateObj, 2021).valueOf()).toBe(new Date('2021-11-17').valueOf());
  expect(Feiertage.getBussUndBettag(Feiertage.formatDE, 2021)).toBe('17.11.2021');
});

test('get Nikolaus', () => {
  expect(Feiertage.getNikolaus(Feiertage.formatDateObj, 2021).valueOf()).toBe(new Date('2021-12-06').valueOf());
  expect(Feiertage.getNikolaus(Feiertage.formatDE, 2021)).toBe('6.12.2021');
});

test('get Mariä Empfängnis', () => {
  expect(Feiertage.getMariaeEmpfaengnis(Feiertage.formatDateObj, 2021).valueOf()).toBe(new Date('2021-12-08').valueOf());
  expect(Feiertage.getMariaeEmpfaengnis(Feiertage.formatDE, 2021)).toBe('8.12.2021');
});

test('get 1. Advent', () => {
  expect(Feiertage.getAdvent1(Feiertage.formatDateObj, 2021).valueOf()).toBe(new Date('2021-11-28').valueOf());
  expect(Feiertage.getAdvent1(Feiertage.formatDE, 2021)).toBe('28.11.2021');
});

test('get 2. Advent', () => {
  expect(Feiertage.getAdvent2(Feiertage.formatDateObj, 2021).valueOf()).toBe(new Date('2021-12-05').valueOf());
  expect(Feiertage.getAdvent2(Feiertage.formatDE, 2021)).toBe('5.12.2021');
});

test('get 3. Advent', () => {
  expect(Feiertage.getAdvent3(Feiertage.formatDateObj, 2021).valueOf()).toBe(new Date('2021-12-12').valueOf());
  expect(Feiertage.getAdvent3(Feiertage.formatDE, 2021)).toBe('12.12.2021');
});

test('get 4. Advent', () => {
  expect(Feiertage.getAdvent4(Feiertage.formatDateObj, 2021).valueOf()).toBe(new Date('2021-12-19').valueOf());
  expect(Feiertage.getAdvent4(Feiertage.formatDE, 2021)).toBe('19.12.2021');
});

test('get Heiligabend', () => {
  expect(Feiertage.getHeiligabend(Feiertage.formatDateObj, 2021).valueOf()).toBe(new Date('2021-12-24').valueOf());
  expect(Feiertage.getHeiligabend(Feiertage.formatDE, 2021)).toBe('24.12.2021');
});

test('get 1. Weihnachtsfeiertag', () => {
  expect(Feiertage.getWeihnachtsfeiertag1(Feiertage.formatDateObj, 2021).valueOf()).toBe(new Date('2021-12-25').valueOf());
  expect(Feiertage.getWeihnachtsfeiertag1(Feiertage.formatDE, 2021)).toBe('25.12.2021');
});

test('get 2. Weihnachtsfeiertag', () => {
  expect(Feiertage.getWeihnachtsfeiertag2(Feiertage.formatDateObj, 2021).valueOf()).toBe(new Date('2021-12-26').valueOf());
  expect(Feiertage.getWeihnachtsfeiertag2(Feiertage.formatDE, 2021)).toBe('26.12.2021');
});

test('get Silvester', () => {
  expect(Feiertage.getSilvester(Feiertage.formatDateObj, 2021).valueOf()).toBe(new Date('2021-12-31').valueOf());
  expect(Feiertage.getSilvester(Feiertage.formatDE, 2021)).toBe('31.12.2021');
});*/
