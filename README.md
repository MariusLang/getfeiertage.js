# getfeiertage.js

[![NPM](https://img.shields.io/npm/v/getfeiertage.js)](https://www.npmjs.com/package/getfeiertage.js)
[![NPM_downloads](https://img.shields.io/npm/dm/getfeiertage.js)](https://www.npmjs.com/package/getfeiertage.js)
[![issues](https://img.shields.io/github/issues/mariuslang/getfeiertage.js)](https://github.com/MariusLang/getfeiertage.js)
[![publish](https://github.com/MariusLang/getfeiertage.js/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/MariusLang/getfeiertage.js/actions/workflows/npm-publish.yml)

[![NPM](https://nodei.co/npm/getfeiertage.js.png?compact=true)](https://nodei.co/npm/getfeiertage.js/)

The **getfeiertage.js** npm package helps you to get german, austrian and swiss holidays.

## Quick Start

### Install
```
npm install getfeiertage.js
```

### Getting started
Into your Javascript file:
```javascript
const Feiertage = require('getfeiertage.js').Feiertage;
const FeiertageInfo = require('getfeiertage.js').FeiertageInfo;
```
To see the diffrence between **Feiertage** and **FeiertageInfo** read the section [Feiertage Formats](#feiertage-formats).

## Feiertage Formats

### Feiertage
```javascript
const Feiertage = require('getfeiertage.js').Feiertage;
let neujahrDateObj = Feiertage.getNeujahr(Feiertage.formatDateObj, 2023); // returns 2023-01-01
let neujahrDateDE = Feiertage.getNeujahr(Feiertage.formatDE, 2023); // returns 01.01.2023
```
#### Parameters
- **format:** details can be found [here](#date-formats)
- **year:** specifies the year for which holidays should be output

#### Output
The output is the date of the requested holiday for the specified year in the specified format. The exact format of the output will depend on the [format parameter](#date-formats) chosen.

### FeiertageInfo
```javascript
const FeiertageInfo = require('getfeiertage.js').FeiertageInfo;
let neujahrInfo = FeiertageInfo.getNeujahr(2023);
```

#### Parameters
- **year:** specifies the year for which holidays should be output

#### Output
The output is formatted like the JSON Object below.
```javascript
{
  name: 'Neujahr', // name of the holiday
  country: ['DE', 'AT', 'CH'], // Array with country codes
  dateObj: 2023-01-01, // javascript date object
  dateDE: '01.01.2023', // date in german format
}
```
- **name:** name of the holiday
- **country:** Array with country codes (DE = Germany, AT = Austria, CH = Switzerland)
- **dateObj:** [date object](#date-object)
- **dateDE:** [date in german format](#german-date)

## Date Formats

### German Date
```javascript
let neujahrDateDE = Feiertage.getNeujahr(Feiertage.formatDE, 2023); // returns 01.01.2023
```
Here, the date format is set to the **German Date** Format (```Feiertage.formatDE```). Therefore, the output for Neujahr in 2023 is **01.01.2023**.

### Date Object
```javascript
let neujahrDateObj = Feiertage.getNeujahr(Feiertage.formatDateObj, 2023); // returns 2023-01-01
```
Here, the date format is set to the **Date Object** Format (```Feiertage.formatDateObj```). Therefore, the output for Neujahr in 2023 is **2023-01-01**. This is compatible with the default javascript date object.

## Usage
A list of all available holidays can be found [here](./holiday-list.md).

It's difficult to maintain a npm package that contains German, Austrain and also Swiss holidays. If there are holidays missing, feel free to open an issue or a pull request. I will add those holidays immediately.

```javascript
const Feiertage = require('getfeiertage.js').Feiertage;
const FeiertageInfo = require('getfeiertage.js').FeiertageInfo;

const format = Feiertage.formatDateObj;
// const format = Feiertage.formatDE;

const year = 2023;

// get an array of all holidays
let feiertageAll = Feiertage.getAll(format, year);
let feiertageInfoAll = FeiertageInfo.getAll(year);

// get New Year
let neujahr = Feiertage.getNeujahr(format, year);
let neujahrInfo = FeiertageInfo.getNeujahr(year);

// get Berchtoldstag
let berchtoldstag = Feiertage.getBerchtoldstag(format, year);
let berchtoldstagInfo = FeiertageInfo.getBerchtoldstag(year);

// get Epiphany
let epiphany = Feiertage.getHeiligeDreiKoenige(format, year);
let epiphanyInfo = FeiertageInfo.getHeiligeDreiKoenige(year);

// get Weiberfastnacht
let weiberfastnacht = Feiertage.getWeiberfastnacht(format, year);
let weiberfastnachtInfo = FeiertageInfo.getWeiberfastnacht(year);

// get Valentinstag
let valentinstag = Feiertage.getValentinstag(format, year);
let valentinstagInfo = FeiertageInfo.getValentinstag(year);

// get Rosenmontag
let valentinstag = Feiertage.getRosenmontag(format, year);
let valentinstagInfo = FeiertageInfo.getRosenmontag(year);

// get Fastnachtsdienstag
let fastnachtsdienstag = Feiertage.getFastnachtsdienstag(format, year);
let fastnachtsdienstagInfo = FeiertageInfo.getFastnachtsdienstag(year);

// get Aschermittwoch
let aschermittwoch = Feiertage.getAschermittwoch(fomrat, year);
let aschermittwochInfo = FeiertageInfo.getAschermittwoch(year);

// get St. Josef
let stJosef = Feiertage.getStJosef(format, year);
let stJosefInfo = FeiertageInfo.getStJosef(year);

// get Gründonnerstag
let gruendonnerstag = Feiertage.getGruendonnerstag(format, year);
let gruendonnerstagInfo = FeiertageInfo.getGruendonnerstag(year);

// get Karfreitag
let karfreitag = Feiertage.getKarfreitag(format, year);
let karfreitagInfo = FeiertageInfo.getKarfreitag(year);

// get Easter Sunday
let easterSunday = Feiertage.getOstersonntag(format, year);
let easterSundayInfo = FeiertageInfo.getOstersonntag(year);

// get Easter Monday
let easterMonday = Feiertage.getOstermontag(format, year);
let easterMondayInfo = FeiertageInfo.getOstermontag(year);

// get First May
let firstMay = Feiertage.getFirstMay(format, year);
let firstMayInfo = FeiertageInfo.getFirstMay(year);

// get St. Florian
let stFlorian = Feiertage.getStFlorian(format, year);
let stFlorianInfo = FeiertageInfo.getStFlorian(year);

// get Christi Himmelfahrt
let christiHimmelfahrt = Feiertage.getChristiHimmelfahrt(format, year);
let christiHimmelfahrtInfo = FeiertageInfo.getChristiHimmelfahrt(year);

// get Pfingstsonntag
let pfingstsonntag = Feiertage.getPfingstsonntag(format, year);
let pfingstsonntagInfo = FeiertageInfo.getPfingstsonntag(year);

// get Pfingstmontag
let pfingstmontag = Feiertage.getPfingstmontag(format, year);
let pfingstmontagInfo = FeiertageInfo.getPfingstmontag(year);

// get Fronleichnam
let fronleichnam = Feiertage.getFronleichnam(format, year);
let fronleichnamInfo = FeiertageInfo.getFronleichnam(year);

// get Peter und Paul
let peterUndPaul = Feiertage.getPeterUndPaul(format, year);
let peterUndPaulInfo = FeiertageInfo.getPeterUndPaul(year);

// get Bundesfeier CH
let bundesfeier = Feiertage.getBundesfeierCH(fomrat, year);
let bundesfeierInfo = FeiertageInfo.getBundesfeierCH(year);

// get Maria Himmelfahrt
let mariaHimmelfahrt = Feiertage.getMariaHimmelfahrt(format, year);
let mariaHimmelfahrtInfo = FeiertageInfo.getMariaHimmelfahrt(year);

// get St. Rupert
let stRupert = Feiertage.getStRupert(format, year);
let stRupertInfo = FeiertageInfo.getStRupert(year);

// get Tag der Deutschen Einheit
let tagDerDeutschenEinheit = Feiertage.getTagDerDeutschenEinheit(format, year);
let tagDerDeutschenEinheitInfo = FeiertageInfo.getTagDerDeutschenEinheit(year);

// get Tag der Volksabstimmung AT
let tagDerVolksabstimmung = Feiertage.getTagDerVolksabstimmung(format, year);
let tagDerVolksabstimmungInfo = FeiertageInfo.getTagDerVolksabstimmung(year);

// get Nationalfeiertag AT
let nationalfeiertag = Feiertage.getNationalfeiertagAT(format, year);
let nationalfeiertagInfo = FeiertageInfo.getNationalfeiertagAT(year);

// get Halloween
let halloween = Feiertage.getHalloween(format, year);
let halloweenInfo = FeiertageInfo.getHalloween(year);

// get Allerheiligen
let allerheiligen = Feiertage.getAllerheiligen(format, year);
let allerheiligenInfo = FeiertageInfo.getAllerheiligen(year);

// get St. Martin
let stMartin = Feiertage.getStMartin(format, year);
let stMartinInfo = FeiertageInfo.getStMartin(year);

// get St. Leopold
let stLeopold = Feiertage.getStLeopold(format, year);
let stLeopoldInfo = FeiertageInfo.getStLeopold(year);

// get Buß und Bettag
let bussUndBettag = Feiertage.getBussUndBettag(format, year);
let bussUndBettagInfo = FeiertageInfo.getBussUndBettag(year);

// get Santa Day
let santa = Feiertage.getNikolaus(format, year);
let santaInfo = FeiertageInfo.getNikolaus(year);

// get Mariä Empfängnis
let mariaeEmpfaengnis = Feiertage.getMariaeEmpfaengnis(format, year);
let mariaeEmpfaengnisInfo = FeiertageInfo.getMariaeEmpfaengnis(year);

// get 1. Advent
let advent1 = Feiertage.getAdvent1(format, year);
let advent1Info = FeiertageInfo.getAdvent1(year);

// get 2. Advent
let advent2 = Feiertage.getAdvent2(format, year);
let advent2Info = FeiertageInfo.getAdvent2(year);

// get 3. Advent
let advent3 = Feiertage.getAdvent3(format, year);
let advent3Info = FeiertageInfo.getAdvent3(year);

// get 4. Advent
let advent4 = Feiertage.getAdvent4(format, year);
let advent4Info = FeiertageInfo.getAdvent4(year);

// get Christmas Eve
let christmasEve = Feiertage.getHeiligabend(format, year);
let christmasEveInfo = FeiertageInfo.getHeiligabend(year);

// get First day of Christmas
let firstDayOfChristmas = Feiertage.getWeihnachtsfeiertag1(format, year);
let firstDayOfChristmasInfo = FeiertageInfo.getWeihnachtsfeiertag1(year);

// get Second day of Christmas
let secondDayOfChristmas = Feiertage.getWeihnachtsfeiertag2(format, year);
let secondDayOfChristmasInfo = FeiertageInfo.getWeihnachtsfeiertag2(year);

// get New Years Eve
let newYearsEve = Feiertage.getSilvester(format, year);
let newYearsEveInfo = FeiertageInfo.getSilvester(year);
```
