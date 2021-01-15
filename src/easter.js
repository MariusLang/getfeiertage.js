var Easter = {};

const formatDateObj = "dateObj";
const formatDE = "DE";

Easter.calcEasterSunday = function (format, year) {
    var a = year % 19; // currentYear mod 19
    var b = (19 * a + 24) % 30;
    var easterSundayDay = b + (2 * (year % 4) + 4 * (year % 7) + 6 * b + 5) % 7;
    
    if (easterSundayDay == 35 || (easterSundayDay == 34 && b == 28 && a > 10)) {
        easterSundayDay -= 7;
    }
    // generate easterDate and change Parameters to easter Date
    var easterDate = new Date(year, 2, 22);
    easterDate.setTime(easterDate.getTime() + 86400000 * easterSundayDay);
    var easterMonth = easterDate.getMonth() + 1;
    var easterDay = easterDate.getDate();
    
    if (format == formatDE) {
        return easterDay + "." + easterMonth + "." + year;
    } else if (format == formatDateObj) {
        return year + "-" + easterMonth + "-" + easterDay;
    }
}

module.exports = Easter;