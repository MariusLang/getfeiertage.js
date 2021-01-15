var Advent = {};

const formatDateObj = "dateObj";
const formatDE = "DE";

Advent.calcAdvent4 = function (format, day, year) {
    // calculates days of advent
    var checkDate = new Date(year + "-12-" + day); // generate object of specific day
    var checkMonth = checkDate.getMonth() + 1; // month (should be 12)
    var checkWeekday = checkDate.getDay(); // weekday

    // check generated weekday is 0 and generated month is 12
    if (checkWeekday === 0 && checkMonth == 12) {
        if (format == formatDE) {
            return day + "." + checkMonth + "." + year;
        } else if (format == formatDateObj) {
            return year + "-" + checkMonth + "-" + day;
        }
    } else {
        return Advent.calcAdvent4(format, day - 1, year);
    }
}

module.exports = Advent;
