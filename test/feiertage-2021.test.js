import { Feiertage } from '../index';

const year = 2021;

test('get Neujahr', () => {
  expect(Feiertage.getNeujahr(Feiertage.formatDateObj, year).valueOf()).toBe(new Date(`${year}-01-01T00:00:00`).valueOf());
  expect(Feiertage.getNeujahr(Feiertage.formatDE, year)).toBe(`01.01.${year}`);
});

test('get Berchtoldstag', () => {
  expect(Feiertage.getBerchtoldstag(Feiertage.formatDateObj, year).valueOf()).toBe(new Date(`${year}-01-02T00:00:00`).valueOf());
  expect(Feiertage.getBerchtoldstag(Feiertage.formatDE, year)).toBe(`02.01.${year}`);
});

test('get Heilige drei Könige', () => {
  expect(Feiertage.getHeiligeDreiKoenige(Feiertage.formatDateObj, year).valueOf()).toBe(new Date(`${year}-01-06T00:00:00`).valueOf());
  expect(Feiertage.getHeiligeDreiKoenige(Feiertage.formatDE, year)).toBe(`06.01.${year}`);
});

test('get Weiberfastnacht', () => {
  expect(Feiertage.getWeiberfastnacht(Feiertage.formatDateObj, year).valueOf()).toBe(new Date(`${year}-02-11T00:00:00`).valueOf());
  expect(Feiertage.getWeiberfastnacht(Feiertage.formatDE, year)).toBe(`11.02.${year}`);
});

test('get Valentinstag', () => {
  expect(Feiertage.getValentinstag(Feiertage.formatDateObj, year).valueOf()).toBe(new Date(`${year}-02-14T00:00:00`).valueOf());
  expect(Feiertage.getValentinstag(Feiertage.formatDE, year)).toBe(`14.02.${year}`);
});

test('get Rosenmontag', () => {
  expect(Feiertage.getRosenmontag(Feiertage.formatDateObj, year).valueOf()).toBe(new Date(`${year}-02-15T00:00:00`).valueOf());
  expect(Feiertage.getRosenmontag(Feiertage.formatDE, year)).toBe(`15.02.${year}`);
});

test('get Fastnachtsdienstag', () => {
  expect(Feiertage.getFastnachtsdienstag(Feiertage.formatDateObj, year).valueOf()).toBe(new Date(`${year}-02-16T00:00:00`).valueOf());
  expect(Feiertage.getFastnachtsdienstag(Feiertage.formatDE, year)).toBe(`16.02.${year}`);
});

test('get Aschermittwoch', () => {
  expect(Feiertage.getAschermittwoch(Feiertage.formatDateObj, year).valueOf()).toBe(new Date(`${year}-02-17T00:00:00`).valueOf());
  expect(Feiertage.getAschermittwoch(Feiertage.formatDE, year)).toBe(`17.02.${year}`);
});

test('get St. Josef', () => {
  expect(Feiertage.getStJosef(Feiertage.formatDateObj, year).valueOf()).toBe(new Date(`${year}-03-19T00:00:00`).valueOf());
  expect(Feiertage.getStJosef(Feiertage.formatDE, year)).toBe(`19.03.${year}`);
});

test('get Gründonnerstag', () => {
  expect(Feiertage.getGruendonnerstag(Feiertage.formatDateObj, year).valueOf()).toBe(new Date(`${year}-04-01T00:00:00`).valueOf());
  expect(Feiertage.getGruendonnerstag(Feiertage.formatDE, year)).toBe(`01.04.${year}`);
});

test('get Karfreitag', () => {
  expect(Feiertage.getKarfreitag(Feiertage.formatDateObj, year).valueOf()).toBe(new Date(`${year}-04-02T00:00:00`).valueOf());
  expect(Feiertage.getKarfreitag(Feiertage.formatDE, year)).toBe(`02.04.${year}`);
});

test('get Ostersonntag', () => {
  expect(Feiertage.getOstersonntag(Feiertage.formatDateObj, year).valueOf()).toBe(new Date(`${year}-04-04T00:00:00`).valueOf());
  expect(Feiertage.getOstersonntag(Feiertage.formatDE, year)).toBe(`04.04.${year}`);
});

test('get Ostermontag', () => {
  expect(Feiertage.getOstermontag(Feiertage.formatDateObj, year).valueOf()).toBe(new Date(`${year}-04-05T00:00:00`).valueOf());
  expect(Feiertage.getOstermontag(Feiertage.formatDE, year)).toBe(`05.04.${year}`);
});

test('get 1. Mai', () => {
  expect(Feiertage.getFirstMay(Feiertage.formatDateObj, year).valueOf()).toBe(new Date(`${year}-05-01T00:00:00`).valueOf());
  expect(Feiertage.getFirstMay(Feiertage.formatDE, year)).toBe(`01.05.${year}`);
});

test('get St. Florian', () => {
  expect(Feiertage.getStFlorian(Feiertage.formatDateObj, year).valueOf()).toBe(new Date(`${year}-05-04T00:00:00`).valueOf());
  expect(Feiertage.getStFlorian(Feiertage.formatDE, year)).toBe(`04.05.${year}`);
});

test('get Christi Himmelfahrt', () => {
  expect(Feiertage.getChristiHimmelfahrt(Feiertage.formatDateObj, year).valueOf()).toBe(new Date(`${year}-05-13T00:00:00`).valueOf());
  expect(Feiertage.getChristiHimmelfahrt(Feiertage.formatDE, year)).toBe(`13.05.${year}`);
});

test('get Pfingstsonntag', () => {
  expect(Feiertage.getPfingstsonntag(Feiertage.formatDateObj, year).valueOf()).toBe(new Date(`${year}-05-23T00:00:00`).valueOf());
  expect(Feiertage.getPfingstsonntag(Feiertage.formatDE, year)).toBe(`23.05.${year}`);
});

test('get Pfingstmontag', () => {
  expect(Feiertage.getPfingstmontag(Feiertage.formatDateObj, year).valueOf()).toBe(new Date(`${year}-05-24T00:00:00`).valueOf());
  expect(Feiertage.getPfingstmontag(Feiertage.formatDE, year)).toBe(`24.05.${year}`);
});

test('get Fronleichnam', () => {
  expect(Feiertage.getFronleichnam(Feiertage.formatDateObj, year).valueOf()).toBe(new Date(`${year}-06-03T00:00:00`).valueOf());
  expect(Feiertage.getFronleichnam(Feiertage.formatDE, year)).toBe(`03.06.${year}`);
});

test('get Peter und Paul', () => {
  expect(Feiertage.getPeterUndPaul(Feiertage.formatDateObj, year).valueOf()).toBe(new Date(`${year}-07-29T00:00:00`).valueOf());
  expect(Feiertage.getPeterUndPaul(Feiertage.formatDE, year)).toBe(`29.07.${year}`);
});

test('get Bundesfeiertag CH', () => {
  expect(Feiertage.getBundesfeierCH(Feiertage.formatDateObj, year).valueOf()).toBe(new Date(`${year}-08-01T00:00:00`).valueOf());
  expect(Feiertage.getBundesfeierCH(Feiertage.formatDE, year)).toBe(`01.08.${year}`);
});

test('get Maria Himmelfahrt', () => {
  expect(Feiertage.getMariaHimmelfahrt(Feiertage.formatDateObj, year).valueOf()).toBe(new Date(`${year}-08-15T00:00:00`).valueOf());
  expect(Feiertage.getMariaHimmelfahrt(Feiertage.formatDE, year)).toBe(`15.08.${year}`);
});

test('get St. Rupert', () => {
  expect(Feiertage.getStRupert(Feiertage.formatDateObj, year).valueOf()).toBe(new Date(`${year}-09-24T00:00:00`).valueOf());
  expect(Feiertage.getStRupert(Feiertage.formatDE, year)).toBe(`24.09.${year}`);
});

test('get Tag der deutschen Einheit', () => {
  expect(Feiertage.getTagDerDeutschenEinheit(Feiertage.formatDateObj, year).valueOf()).toBe(new Date(`${year}-10-03T00:00:00`).valueOf());
  expect(Feiertage.getTagDerDeutschenEinheit(Feiertage.formatDE, year)).toBe(`03.10.${year}`);
});

test('get Tag der Volksabstimmung', () => {
  expect(Feiertage.getTagDerVolksabstimmung(Feiertage.formatDateObj, year).valueOf()).toBe(new Date(`${year}-10-10T00:00:00`).valueOf());
  expect(Feiertage.getTagDerVolksabstimmung(Feiertage.formatDE, year)).toBe(`10.10.${year}`);
});

test('get Nationalfeiertag AT', () => {
  expect(Feiertage.getNationalfeiertagAT(Feiertage.formatDateObj, year).valueOf()).toBe(new Date(`${year}-10-26T00:00:00`).valueOf());
  expect(Feiertage.getNationalfeiertagAT(Feiertage.formatDE, year)).toBe(`26.10.${year}`);
});

test('get Halloween', () => {
  expect(Feiertage.getHalloween(Feiertage.formatDateObj, year).valueOf()).toBe(new Date(`${year}-10-31T00:00:00`).valueOf());
  expect(Feiertage.getHalloween(Feiertage.formatDE, year)).toBe(`31.10.${year}`);
});

test('get Allerheiligen', () => {
  expect(Feiertage.getAllerheiligen(Feiertage.formatDateObj, year).valueOf()).toBe(new Date(`${year}-11-01T00:00:00`).valueOf());
  expect(Feiertage.getAllerheiligen(Feiertage.formatDE, year)).toBe(`01.11.${year}`);
});

test('get St. Martin', () => {
  expect(Feiertage.getStMartin(Feiertage.formatDateObj, year).valueOf()).toBe(new Date(`${year}-11-11T00:00:00`).valueOf());
  expect(Feiertage.getStMartin(Feiertage.formatDE, year)).toBe(`11.11.${year}`);
});

test('get St. Leopold', () => {
  expect(Feiertage.getStLeopold(Feiertage.formatDateObj, year).valueOf()).toBe(new Date(`${year}-11-15T00:00:00`).valueOf());
  expect(Feiertage.getStLeopold(Feiertage.formatDE, year)).toBe(`15.11.${year}`);
});

test('get Buß und Bettag', () => {
  expect(Feiertage.getBussUndBettag(Feiertage.formatDateObj, year).valueOf()).toBe(new Date(`${year}-11-17T00:00:00`).valueOf());
  expect(Feiertage.getBussUndBettag(Feiertage.formatDE, year)).toBe(`17.11.${year}`);
});

test('get Nikolaus', () => {
  expect(Feiertage.getNikolaus(Feiertage.formatDateObj, year).valueOf()).toBe(new Date(`${year}-12-06T00:00:00`).valueOf());
  expect(Feiertage.getNikolaus(Feiertage.formatDE, year)).toBe(`06.12.${year}`);
});

test('get Mariä Empfängnis', () => {
  expect(Feiertage.getMariaeEmpfaengnis(Feiertage.formatDateObj, year).valueOf()).toBe(new Date(`${year}-12-08T00:00:00`).valueOf());
  expect(Feiertage.getMariaeEmpfaengnis(Feiertage.formatDE, year)).toBe(`08.12.${year}`);
});

test('get 1. Advent', () => {
  expect(Feiertage.getAdvent1(Feiertage.formatDateObj, year).valueOf()).toBe(new Date(`${year}-11-28T00:00:00`).valueOf());
  expect(Feiertage.getAdvent1(Feiertage.formatDE, year)).toBe(`28.11.${year}`);
});

test('get 2. Advent', () => {
  expect(Feiertage.getAdvent2(Feiertage.formatDateObj, year).valueOf()).toBe(new Date(`${year}-12-05T00:00:00`).valueOf());
  expect(Feiertage.getAdvent2(Feiertage.formatDE, year)).toBe(`05.12.${year}`);
});

test('get 3. Advent', () => {
  expect(Feiertage.getAdvent3(Feiertage.formatDateObj, year).valueOf()).toBe(new Date(`${year}-12-12T00:00:00`).valueOf());
  expect(Feiertage.getAdvent3(Feiertage.formatDE, year)).toBe(`12.12.${year}`);
});

test('get 4. Advent', () => {
  expect(Feiertage.getAdvent4(Feiertage.formatDateObj, year).valueOf()).toBe(new Date(`${year}-12-19T00:00:00`).valueOf());
  expect(Feiertage.getAdvent4(Feiertage.formatDE, year)).toBe(`19.12.${year}`);
});

test('get Heiligabend', () => {
  expect(Feiertage.getHeiligabend(Feiertage.formatDateObj, year).valueOf()).toBe(new Date(`${year}-12-24T00:00:00`).valueOf());
  expect(Feiertage.getHeiligabend(Feiertage.formatDE, year)).toBe(`24.12.${year}`);
});

test('get 1. Weihnachtsfeiertag', () => {
  expect(Feiertage.getWeihnachtsfeiertag1(Feiertage.formatDateObj, year).valueOf()).toBe(new Date(`${year}-12-25T00:00:00`).valueOf());
  expect(Feiertage.getWeihnachtsfeiertag1(Feiertage.formatDE, year)).toBe(`25.12.${year}`);
});

test('get 2. Weihnachtsfeiertag', () => {
  expect(Feiertage.getWeihnachtsfeiertag2(Feiertage.formatDateObj, year).valueOf()).toBe(new Date(`${year}-12-26T00:00:00`).valueOf());
  expect(Feiertage.getWeihnachtsfeiertag2(Feiertage.formatDE, year)).toBe(`26.12.${year}`);
});

test('get Silvester', () => {
  expect(Feiertage.getSilvester(Feiertage.formatDateObj, year).valueOf()).toBe(new Date(`${year}-12-31T00:00:00`).valueOf());
  expect(Feiertage.getSilvester(Feiertage.formatDE, year)).toBe(`31.12.${year}`);
});
