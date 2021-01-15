# getfeiertage.js

[![NPM](https://img.shields.io/npm/v/getfeiertage.js)](https://www.npmjs.com/package/getfeiertage.js)
[![NPM_downloads](https://img.shields.io/npm/dm/getfeiertage.js)](https://www.npmjs.com/package/getfeiertage.js)
[![issues](https://img.shields.io/github/issues/mariuslang/getfeiertage.js)](https://github.com/MariusLang/getfeiertage.js)

[![NPM](https://nodei.co/npm/getfeiertage.js.png?compact=true)](https://nodei.co/npm/getfeiertage.js/)

The **getfeiertage.js** npm package helps you to get german, austrian and swiss holidays into your project.

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
Format date|input
---|---
German date|"DE"
Date Object|"dateObj"

### get Holidays
##### get New Year
```javascript
var neujahr = Feiertage.getNeujahr(format, year);
```

##### get Berchtoldstag
```javascript
var berchtoldstag = Feiertage.getBerchtoldstag(format, year);
```

##### get Epiphany
```javascript
var epiphany = Feiertage.getHeiligeDreiKoenige(format, year);
```

##### get Weiberfastnacht
```javascript
var weiberfastnacht = Feiertage.getWeiberfastnacht(format, year);
```

##### get Valentinstag
```javascript
var valentinstag = Feiertage.getValentinstag(format, year);
```

##### get Rosenmontag
```javascript
var rosenmontag = Feiertage.getRosenmontag(fomrat, year);
```

##### get Fastnachtdienstg
```javascript
var fastnachtsdienstag = Feiertage.getFastnachtsdienstag(format, year);
```

##### get Aschermittwoch
```javascript
var aschermittwoch = Feiertage.getAschermittwoch(fomrat, year);
```

##### get St. Josef
```javascript
var stJosef = Feiertage.getStJosef(format, year);
```

##### get Gründonnerstag
```javascript
var gruendonnerstag = Feiertage.getGruendonnerstag(format, year);
```

##### get Karfreitag
```javascript
var karfreitag = Feiertag.getKarfreitag(format, year);
```

##### get Easter Sunday
```javascript
var easterSunday = Feiertage.getOstersonntag(format, year);
```

##### get Easter Monday
```javascript
var easterMonday = Feiertage.getOstermontag(format, year);
```

##### get First May
```javascript
var firstMay = Feiertage.getFirstMay(format, year);
```

##### get St. Florian
```javascript
var stFlorian = Feiertage.getStFlorian(format, year);
```

##### get Christi Himmelfahrt
```javascript
var christiHimmelfahrt = Feiertage.getChristiHimmelfahrt(format, year);
```

##### get Pfingstsonntag
```javascript
var pfingstsonntag = Feiertage.getPfingstsonntag(format, year);
```

##### get Pfingstmontag
```javascript
var pfingstmontag = Feiertage.getPfingstmontag(format, year);
```

##### get Fronleichnam
```javascript
var fronleichnam = Feiertage.getFronleichnam(format, year);
```

##### get Bundesfeier CH
```javascript
var bundesfeier = Feiertage.getBundesfeierCH(fomrat, year);
```

##### get Maria Himmelfahrt
```javascript
var mariaHimmelfahrt = Feiertage.getMariaHimmelfahrt(format, year);
```

##### get St. Rupert
```javascript
var stRupert = Feiertage.getStRupert(format, year);
```

##### get Tag der Deutschen Einheit
```javascript
var tagDerDeutschenEinheit = Feiertage.getTagDerDeutschenEinheit(format, year);
```

##### get Tag der Volksabstimmung AT
```javascript
var tagDerVolksabstimmung = Feiertage.getTagDerVolksabstimmung(format, year);
```

##### get Nationalfeiertag AT
```javascript
var nationalfeiertag = Feiertage.getNationalfeiertagAT(format, year);
```

##### get Halloween
```javascript
var halloween = Feiertage.getHalloween(format, year);
```

##### get Allerheiligen
```javascript
var allerheiligen = Feiertage.getAllerheiligen(format, year);
```

##### get St. Martin
```javascript
var stMartin = Feiertage.getStMartin(format, year);
```

##### get St. Leopold
```javascript
var stLeopold = Feiertage.getStLeopold(format, year);
```

##### get Buß und Bettag
```javascript
var bussUndBettag = Feiertage.getBussUndBettag(format, year);
```

##### get Santa Day
```javascript
var santa = Feiertage.getNikolaus(format, year);
```

##### get Mariä Empfängnis
```javascript
var mariaeEmpfaengnis = Feiertage.getMariaeEmpfaengnis(format, year);
```

##### get 1. Advent
```javascript
var advent1 = Feiertage.getAdvent1(format, year);
```

##### get 2. Advent
```javascript
var advent2 = Feiertage.getAdvent2(format, year);
```

##### get 3. Advent
```javascript
var advent3 = Feiertage.getAdvent3(format, year);
```

##### get 4. Advent
```javascript
var advent4 = Feiertage.getAdvent4(format, year);
```

##### get Christmas Eve
```javascript
var christmasEve = Feiertage.getHeiligabend(format, year);
```

##### get First day of Christmas
```javascript
var firstDayOfChristmas = Feiertage.getWeihnachtsfeiertag1(format, year);
```

##### get Second day of Christmas
```javascript
var secondDayOfChristmas = Feiertage.getWeihnachtsfeiertag2(format, year);
```

##### get New Years Eve
```javascript
var newYearsEve = Feiertage.getSilvester(format, year);
```