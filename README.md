# getfeiertage.js

[![NPM](https://img.shields.io/npm/v/getfeiertage.js)](https://www.npmjs.com/package/getfeiertage.js)
[![NPM_downloads](https://img.shields.io/npm/dm/getfeiertage.js)](https://www.npmjs.com/package/getfeiertage.js)
[![issues](https://img.shields.io/github/issues/mariuslang/getfeiertage.js)](https://github.com/MariusLang/getfeiertage.js)

[![NPM](https://nodei.co/npm/getfeiertage.js.png?compact=true)](https://nodei.co/npm/getfeiertage.js/)

The **getfeiertage.js** npm package helps you to get german, austrian and swiss holidays.

## Install
```
npm install getfeiertage.js
```

## Getting started
Into your package.json (the newest version is V1.0.0):
```json
"dependencies": {
    "getfeiertage.js": "^1.0.0"
},
```
Into your Javascript file:
```javascript
var Feiertage = require('getfeiertage.js').Feiertage;
```

## Usage
### Date Format
Format Date|input|example
---|---|---
German Date|Feiertage.formatDE|1.1.2021
Date Object|Feiertage.formatDateObj|2021-1-1

### get Holidays
```javascript
var format = Feiertage.formatDateObj; // read table above

// get New Year
var neujahr = Feiertage.getNeujahr(format, year);

// get Berchtoldstag
var berchtoldstag = Feiertage.getBerchtoldstag(format, year);

// get Epiphany
var epiphany = Feiertage.getHeiligeDreiKoenige(format, year);

// get Weiberfastnacht
var weiberfastnacht = Feiertage.getWeiberfastnacht(format, year);

// get Valentinstag
var valentinstag = Feiertage.getValentinstag(format, year);

// get Rosenmontag
var valentinstag = Feiertage.getValentinstag(format, year);

// get Fastnachtsdienstag
var fastnachtsdienstag = Feiertage.getFastnachtsdienstag(format, year);

// get Aschermittwoch
var aschermittwoch = Feiertage.getAschermittwoch(fomrat, year);

// get St. Josef
var stJosef = Feiertage.getStJosef(format, year);

// get Gründonnerstag
var gruendonnerstag = Feiertage.getGruendonnerstag(format, year);

// get Karfreitag
var karfreitag = Feiertag.getKarfreitag(format, year);

// get Easter Sunday
var easterSunday = Feiertage.getOstersonntag(format, year);

// get Easter Monday
var easterMonday = Feiertage.getOstermontag(format, year);

// get First May
var firstMay = Feiertage.getFirstMay(format, year);

// get St. Florian
var stFlorian = Feiertage.getStFlorian(format, year);

// get Christi Himmelfahrt
var christiHimmelfahrt = Feiertage.getChristiHimmelfahrt(format, year);

// get Pfingstsonntag
var pfingstsonntag = Feiertage.getPfingstsonntag(format, year);

// get Pfingstmontag
var pfingstmontag = Feiertage.getPfingstmontag(format, year);

// get Fronleichnam
var fronleichnam = Feiertage.getFronleichnam(format, year);

// get Bundesfeier CH
var bundesfeier = Feiertage.getBundesfeierCH(fomrat, year);

// get Peter und Paul
var peterUndPaul = Feiertage.getPeterUndPaul(format, year);

// get Maria Himmelfahrt
var mariaHimmelfahrt = Feiertage.getMariaHimmelfahrt(format, year);

// get St. Rupert
var stRupert = Feiertage.getStRupert(format, year);

// get Tag der Deutschen Einheit
var tagDerDeutschenEinheit = Feiertage.getTagDerDeutschenEinheit(format, year);

// get Tag der Volksabstimmung AT
var tagDerVolksabstimmung = Feiertage.getTagDerVolksabstimmung(format, year);

// get Nationalfeiertag AT
var nationalfeiertag = Feiertage.getNationalfeiertagAT(format, year);

// get Halloween
var halloween = Feiertage.getHalloween(format, year);

// get Allerheiligen
var allerheiligen = Feiertage.getAllerheiligen(format, year);

// get St. Martin
var stMartin = Feiertage.getStMartin(format, year);

// get St. Leopold
var stLeopold = Feiertage.getStLeopold(format, year);

// get Buß und Bettag
var bussUndBettag = Feiertage.getBussUndBettag(format, year);

// get Santa Day
var santa = Feiertage.getNikolaus(format, year);

// get Mariä Empfängnis
var mariaeEmpfaengnis = Feiertage.getMariaeEmpfaengnis(format, year);

// get 1. Advent
var advent1 = Feiertage.getAdvent1(format, year);

// get 2. Advent
var advent2 = Feiertage.getAdvent2(format, year);

// get 3. Advent
var advent3 = Feiertage.getAdvent3(format, year);

// get 4. Advent
var advent4 = Feiertage.getAdvent4(format, year);

// get Christmas Eve
var christmasEve = Feiertage.getHeiligabend(format, year);

// get First day of Christmas
var firstDayOfChristmas = Feiertage.getWeihnachtsfeiertag1(format, year);

// get Second day of Christmas
var secondDayOfChristmas = Feiertage.getWeihnachtsfeiertag2(format, year);

// get New Years Eve
var newYearsEve = Feiertage.getSilvester(format, year);
```