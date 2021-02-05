var Feiertage = {};

Feiertage.formatDateObj = "dateObj";
Feiertage.formatDE = "DE";

var Easter = require('./easter.js');
var Advent = require('./advent.js');

const formatDateObj = "dateObj";
const formatDE = "DE";

Feiertage.getNeujahr = function(format, year) {
    if (format == formatDE) {
        return "1.1." + year;
    } else if (format == formatDateObj) {
        return year + "-1-1";
    }
}

Feiertage.getBerchtoldstag = function (format, year) {
    if (format == formatDE) {
        return "2.1." + year;
    } else if (format == formatDateObj) {
        return year + "-1-2";
    }
}

Feiertage.getHeiligeDreiKoenige = function (format, year) {
    if (format == formatDE) {
        return "6.1." + year;
    } else if (format = formatDateObj) {
        return year + "-1-6";
    }
}

Feiertage.getWeiberfastnacht = function (format, year) {
    var refereceDate = new Date(Feiertage.getOstersonntag(formatDateObj, year));
    refereceDate.setDate(refereceDate.getDate() - 52); // Weiberfastnacht = eastersunday - 52 days

    if (format == formatDE) {
        return refereceDate.getDate() + "." + (refereceDate.getMonth() + 1) + "." + year;
    } else if (format = formatDateObj) {
        return year + "-" + (refereceDate.getMonth() + 1) + "-" + refereceDate.getDate();
    }
}

Feiertage.getValentinstag = function (format, year) {
    if (format == formatDE) {
        return "14.2." + year;
    } else if (format == formatDateObj) {
        return year + "-2-14";
    }
}

Feiertage.getRosenmontag = function (format, year) {
    var refereceDate = new Date(Feiertage.getOstersonntag(formatDateObj, year));
    refereceDate.setDate(refereceDate.getDate() - 48); // Rosenmontag = eastersunday - 48

    if (format == formatDE) {
        return refereceDate.getDate() + "." + (refereceDate.getMonth() + 1) + "." + year;
    } else if (format == formatDateObj) {
        return year + "-" + (refereceDate.getMonth() + 1) + "-" + refereceDate.getDate();
    }
}

Feiertage.getFastnachtsdienstag = function (format, year) {
    var refereceDate = new Date(Feiertage.getOstersonntag(formatDateObj, year));
    refereceDate.setDate(refereceDate.getDate() - 47); // Fastnachtsdienstag = eastersunday - 47
    
    if (format == formatDE) {
        return refereceDate.getDate() + "." + (refereceDate.getMonth() + 1) + "." + year;
    } else if (format == formatDateObj) {
        return year + "-" + (refereceDate.getMonth() + 1) + "-" + refereceDate.getDate();
    }
}

Feiertage.getAschermittwoch = function (format, year) {
    var refereceDate = new Date(Feiertage.getOstersonntag(formatDateObj, year));
    refereceDate.setDate(refereceDate.getDate() - 46); // Aschermittwoch = eastersunday - 46
    
    if (format == formatDE) {
        return refereceDate.getDate() + "." + (refereceDate.getMonth() + 1) + "." + year;
    } else if (format == formatDateObj) {
        return year + "-" + (refereceDate.getMonth() + 1) + "-" + refereceDate.getDate();
    }
}

Feiertage.getStJosef = function (format, year) {
    if (format == formatDE) {
        return "19.3." + year;
    } else if (format == formatDateObj) {
        return year + "-3-19";
    }
}

Feiertage.getGruendonnerstag = function (format, year) {
    var refereceDate = new Date(Feiertage.getOstersonntag(formatDateObj, year));
    refereceDate.setDate(refereceDate.getDate() - 3); // Gründonnerstag = eastersunday - 3
    
    if (format == formatDE) {
        return refereceDate.getDate() + "." + (refereceDate.getMonth() + 1) + "." + year;
    } else if (format == formatDateObj) {
        return year + "-" + (refereceDate.getMonth() + 1) + "-" + refereceDate.getDate();
    }
}

Feiertage.getKarfreitag =function (format, year) {
    var refereceDate = new Date(Feiertage.getOstersonntag(formatDateObj, year));
    refereceDate.setDate(refereceDate.getDate() - 2); // Karfreitag = eastersunday - 2

    if (format == formatDE) {
        return refereceDate.getDate() + "." + (refereceDate.getMonth() + 1) + "." + year;
    } else if (format == formatDateObj) {
        return year + "-" + (refereceDate.getMonth() + 1) + "-" + refereceDate.getDate();
    }
}

Feiertage.getOstersonntag = function (format, year) {
    return Easter.calcEasterSunday(format, year);
}

Feiertage.getOstermontag = function (format, year) {
    var refereceDate = new Date(Feiertage.getOstersonntag(formatDateObj, year));
    refereceDate.setDate(refereceDate.getDate() + 1); // eastermonday = eastersunday + 1
    
    if (format == formatDE) {
        return refereceDate.getDate() + "." + (refereceDate.getMonth() + 1) + "." + year;
    } else if (format = formatDateObj) {
        return year + "-" + (refereceDate.getMonth() + 1) + "-" + refereceDate.getDate();
    }
}

Feiertage.getFirstMay = function (format, year) {
    if (format == formatDE) {
        return "1.5." + year;
    } else if (format == formatDateObj) {
        return year + "-5-1";
    }
}

Feiertage.getStFlorian = function (format, year) {
    if (format == formatDE) {
        return "4.5." + year;
    } else if (format == formatDateObj) {
        return year + "-5-4";
    }
}

Feiertage.getChristiHimmelfahrt = function (format, year) {
    var refereceDate = new Date(Feiertage.getOstersonntag(formatDateObj, year));
    refereceDate.setDate(refereceDate.getDate() + 39); // Christi Himmelfahrt = eastersunday + 39
    
    if (format == formatDE) {
        return refereceDate.getDate() + "." + (refereceDate.getMonth() + 1) + "." + year;
    } else if (format == formatDateObj) {
        return year + "-" + (refereceDate.getMonth() + 1) + "-" + refereceDate.getDate();
    }
}

Feiertage.getPfingstsonntag = function (format, year) {
    var refereceDate = new Date(Feiertage.getOstersonntag(formatDateObj, year));
    refereceDate.setDate(refereceDate.getDate() + 49); // Pfingstsonntag = eastersunday + 49
    
    if (format == formatDE) {
        return refereceDate.getDate() + "." + (refereceDate.getMonth() + 1) + "." + year;
    } else if (format = formatDateObj) {
        return year + "-" + (refereceDate.getMonth() + 1) + "-" + refereceDate.getDate();
    }
}

Feiertage.getPfingstmontag = function (format, year) {
    var refereceDate = new Date(Feiertage.getOstersonntag(formatDateObj, year));
    refereceDate.setDate(refereceDate.getDate() + 50); // Pfingstsonntag = eastersunday + 49
    
    if (format == formatDE) {
        return refereceDate.getDate() + "." + (refereceDate.getMonth() + 1) + "." + year;
    } else if (format = formatDateObj) {
        return year + "-" + (refereceDate.getMonth() + 1) + "-" + refereceDate.getDate();
    }
}

Feiertage.getFronleichnam = function (format, year) {
    var refereceDate = new Date(Feiertage.getOstersonntag(formatDateObj, year));
    refereceDate.setDate(refereceDate.getDate() + 60); // Fronleichnam = eastersunday + 60
    
    if (format == formatDE) {
        return refereceDate.getDate() + "." + (refereceDate.getMonth() + 1) + "." + year;
    } else if (format == formatDateObj) {
        return year + "-" + (refereceDate.getMonth() + 1) + "-" + refereceDate.getDate();
    }
}

Feiertage.getPeterUndPaul = function (format, year) {
    if (format == formatDE) {
        return "29.7." + year;
    } else if (format == formatDateObj) {
        return year + "-7-29";
    }
}

Feiertage.getBundesfeierCH = function(format, year) {
    if (format == formatDE) {
        return "1.8." + year;
    } else if (format == formatDateObj) {
        return year + "-8-1";
    }
}

Feiertage.getMariaHimmelfahrt = function (format, year) {
    if (format == formatDE) {
        return "15.8." + year;
    } else if (format == formatDateObj) {
        return year + "-8-15";
    }
}

Feiertage.getStRupert = function (format, year) {
    if (format == formatDE) {
        return "24.9." + year;
    } else if (format == formatDateObj) {
        return year + "-9-24";
    }
}

Feiertage.getTagDerDeutschenEinheit = function (format, year) {
    if (format == formatDE) {
        return "3.10." + year;
    } else if (format == formatDateObj) {
        return year + "-10-3";
    }
}

Feiertage.getTagDerVolksabstimmung = function (format, year) {
    if (format == formatDE) {
        return "10.10." + year;
    } else if (format == formatDateObj) {
        return year + "-10-10";
    }
}

Feiertage.getNationalfeiertagAT = function (format, year) {
    if (format == formatDE) {
        return "26.10." + year;
    } else if (format == formatDateObj) {
        return year + "-10-26";
    }
}

Feiertage.getHalloween = function (format, year) {
    if (format == formatDE) {
        return "31.10." + year;
    } else if (format == formatDateObj) {
        return year + "-10-31";
    }
}

Feiertage.getAllerheiligen = function (format, year) {
    if (format == formatDE) {
        return "1.11." + year;
    } else if (format == formatDateObj) {
        return year + "-11-1";
    }
}

Feiertage.getStMartin = function (format, year) {
    if (format == formatDE) {
        return "11.11." + year;
    } else if (format == formatDateObj) {
        return year + "-11-11";
    }
}

Feiertage.getStLeopold = function (format, year) {
    if (format == formatDE) {
        return "15.11." + year;
    } else if (format == formatDateObj) {
        return year + "-11-15";
    }
}

Feiertage.getBussUndBettag = function (format, year) {
    var refereceDate = new Date(Feiertage.getAdvent4(formatDateObj, year));
    refereceDate.setDate(refereceDate.getDate() - 32); // Buß und Bettag = 4. Advent - 32
    
    if (format == formatDE) {
        return refereceDate.getDate() + "." + (refereceDate.getMonth() + 1) + "." + year;
    } else if (format == formatDateObj) {
        return year + "-" + (refereceDate.getMonth() + 1) + "-" + refereceDate.getDate();
    }
}

Feiertage.getNikolaus = function (format, year) {
    if (format == formatDE) {
        return "6.12." + year;
    } else if (format == formatDateObj) {
        return year + "-12-6";
    }
}

Feiertage.getMariaeEmpfaengnis = function(format, year) {
    if (format == formatDE) {
        return "8.12." + year;
    } else if (format = formatDateObj) {
        return year + "-12-8";
    }
}

Feiertage.getAdvent1 = function (format, year) {
    var refereceDate = new Date(Feiertage.getAdvent4(formatDateObj, year));
    refereceDate.setDate(refereceDate.getDate() - 21); // 1. Advent = 4. Advent - 21
    
    if (format == formatDE) {
        return refereceDate.getDate() + "." + (refereceDate.getMonth() + 1) + "." + year;
    } else if (format = formatDateObj) {
        return year + "-" + (refereceDate.getMonth() + 1) + "-" + refereceDate.getDate();
    }
}

Feiertage.getAdvent2 = function (format, year) {
    var refereceDate = new Date(Feiertage.getAdvent4(formatDateObj, year));
    refereceDate.setDate(refereceDate.getDate() - 14); // 2. Advent = 4. Advent - 14
    
    if (format == formatDE) {
        return refereceDate.getDate() + "." + (refereceDate.getMonth() + 1) + "." + year;
    } else if (format = formatDateObj) {
        return year + "-" + (refereceDate.getMonth() + 1) + "-" + refereceDate.getDate();
    }
}

Feiertage.getAdvent3 = function (format, year) {
    var refereceDate = new Date(Feiertage.getAdvent4(formatDateObj, year));
    refereceDate.setDate(refereceDate.getDate() - 7); // 3. Advent = 4. Advent - 7
    
    if (format == formatDE) {
        return refereceDate.getDate() + "." + (refereceDate.getMonth() + 1) + "." + year;
    } else if (format = formatDateObj) {
        return year + "-" + (refereceDate.getMonth() + 1) + "-" + refereceDate.getDate();
    }
}

Feiertage.getAdvent4 = function (format, year) {
    return Advent.calcAdvent4(format, 24, year);
}

Feiertage.getHeiligabend = function (format, year) {
    if (format == formatDE) {
        return "24.12." + year;
    } else if (format == formatDateObj) {
        return year + "-12-24";
    }
}

Feiertage.getWeihnachtsfeiertag1 = function (format, year) {
    if (format == formatDE) {
        return "25.12." + year;
    } else if (format = formatDateObj) {
        return year + "-12-25";
    }
}

Feiertage.getWeihnachtsfeiertag2 = function (format, year) {
    if (format == formatDE) {
        return "26.12." + year;
    } else if (format = formatDateObj) {
        return year + "-12-26";
    }
}

Feiertage.getSilvester = function (format, year) {
    if (format == formatDE) {
        return "31.12." + year;
    } else if (format = formatDateObj) {
        return year + "-12-31";
    }
}

module.exports = Feiertage;