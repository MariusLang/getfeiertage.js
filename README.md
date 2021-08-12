# getfeiertage.js

[![NPM](https://img.shields.io/npm/v/getfeiertage.js)](https://www.npmjs.com/package/getfeiertage.js)
[![NPM_downloads](https://img.shields.io/npm/dm/getfeiertage.js)](https://www.npmjs.com/package/getfeiertage.js)
[![issues](https://img.shields.io/github/issues/mariuslang/getfeiertage.js)](https://github.com/MariusLang/getfeiertage.js)
[![publish](https://github.com/MariusLang/getfeiertage.js/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/MariusLang/getfeiertage.js/actions/workflows/npm-publish.yml)

[![NPM](https://nodei.co/npm/getfeiertage.js.png?compact=true)](https://nodei.co/npm/getfeiertage.js/)

The **getfeiertage.js** npm package helps you to get german, austrian and swiss holidays.

## Install
```
npm install getfeiertage.js
```

## Getting started
Into your Javascript file:
```javascript
const Feiertage = require('getfeiertage.js').Feiertage;
```

## Usage
### Date Format
Format Date|input|example
---|---|---
German Date|Feiertage.formatDE|1.1.2021
Date Object|Feiertage.formatDateObj|2021-1-1

### get Holidays
```javascript
const format = Feiertage.formatDateObj; // read table above
// const format = Feiertage.formatDE;

// get New Year
let neujahr = Feiertage.getNeujahr(format, year);

// get Berchtoldstag
let berchtoldstag = Feiertage.getBerchtoldstag(format, year);

// get Epiphany
let epiphany = Feiertage.getHeiligeDreiKoenige(format, year);

// get Weiberfastnacht
let weiberfastnacht = Feiertage.getWeiberfastnacht(format, year);

// get Valentinstag
let valentinstag = Feiertage.getValentinstag(format, year);

// get Rosenmontag
let valentinstag = Feiertage.getValentinstag(format, year);

// get Fastnachtsdienstag
let fastnachtsdienstag = Feiertage.getFastnachtsdienstag(format, year);

// get Aschermittwoch
let aschermittwoch = Feiertage.getAschermittwoch(fomrat, year);

// get St. Josef
let stJosef = Feiertage.getStJosef(format, year);

// get Gründonnerstag
let gruendonnerstag = Feiertage.getGruendonnerstag(format, year);

// get Karfreitag
let karfreitag = Feiertag.getKarfreitag(format, year);

// get Easter Sunday
let easterSunday = Feiertage.getOstersonntag(format, year);

// get Easter Monday
let easterMonday = Feiertage.getOstermontag(format, year);

// get First May
let firstMay = Feiertage.getFirstMay(format, year);

// get St. Florian
let stFlorian = Feiertage.getStFlorian(format, year);

// get Christi Himmelfahrt
let christiHimmelfahrt = Feiertage.getChristiHimmelfahrt(format, year);

// get Pfingstsonntag
let pfingstsonntag = Feiertage.getPfingstsonntag(format, year);

// get Pfingstmontag
let pfingstmontag = Feiertage.getPfingstmontag(format, year);

// get Fronleichnam
let fronleichnam = Feiertage.getFronleichnam(format, year);

// get Peter und Paul
let peterUndPaul = Feiertage.getPeterUndPaul(format, year);

// get Bundesfeier CH
let bundesfeier = Feiertage.getBundesfeierCH(fomrat, year);

// get Maria Himmelfahrt
let mariaHimmelfahrt = Feiertage.getMariaHimmelfahrt(format, year);

// get St. Rupert
let stRupert = Feiertage.getStRupert(format, year);

// get Tag der Deutschen Einheit
let tagDerDeutschenEinheit = Feiertage.getTagDerDeutschenEinheit(format, year);

// get Tag der Volksabstimmung AT
let tagDerVolksabstimmung = Feiertage.getTagDerVolksabstimmung(format, year);

// get Nationalfeiertag AT
let nationalfeiertag = Feiertage.getNationalfeiertagAT(format, year);

// get Halloween
let halloween = Feiertage.getHalloween(format, year);

// get Allerheiligen
let allerheiligen = Feiertage.getAllerheiligen(format, year);

// get St. Martin
let stMartin = Feiertage.getStMartin(format, year);

// get St. Leopold
let stLeopold = Feiertage.getStLeopold(format, year);

// get Buß und Bettag
let bussUndBettag = Feiertage.getBussUndBettag(format, year);

// get Santa Day
let santa = Feiertage.getNikolaus(format, year);

// get Mariä Empfängnis
let mariaeEmpfaengnis = Feiertage.getMariaeEmpfaengnis(format, year);

// get 1. Advent
let advent1 = Feiertage.getAdvent1(format, year);

// get 2. Advent
let advent2 = Feiertage.getAdvent2(format, year);

// get 3. Advent
let advent3 = Feiertage.getAdvent3(format, year);

// get 4. Advent
let advent4 = Feiertage.getAdvent4(format, year);

// get Christmas Eve
let christmasEve = Feiertage.getHeiligabend(format, year);

// get First day of Christmas
let firstDayOfChristmas = Feiertage.getWeihnachtsfeiertag1(format, year);

// get Second day of Christmas
let secondDayOfChristmas = Feiertage.getWeihnachtsfeiertag2(format, year);

// get New Years Eve
let newYearsEve = Feiertage.getSilvester(format, year);
```
