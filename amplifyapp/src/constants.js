let userLocale = navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language;
const msinaDay = 86400000;
function localeDayNames(size) {
    let weekDayNames = new Array(6);
    for (let index = 0; index < 7; index++) {
        weekDayNames[index] = new Date((index + 4) * msinaDay).toLocaleDateString(userLocale, { weekday: size });
    }
    return weekDayNames;
}
module.exports.daysOfWeekLong = localeDayNames("long");
module.exports.daysOfWeekShort = localeDayNames("short");

module.exports.API_URL = "http://localhost:3000/api"
