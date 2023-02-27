import React from "react";
import "./ShiftsheduleStyles.css";

const msinaDay = 86400000;
const userLocale = navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language;


let weekdayNameLength;
function weekdayNameLengthDecision(x) {
    if (x.matches) {
        weekdayNameLength = "short";
        console.log("Short weekday names")
    } else {
        weekdayNameLength = "long";
        console.log("Long weekday names")
    }
}
let mediaSize = window.matchMedia("(max-width: 700px)");
//weekdayNameLengthDecision(mediaSize);
mediaSize.addEventListener('change', () => { weekdayNameLengthDecision(mediaSize) });
//Benennung Wochentage
function localeDayNames() {
    let weekDayNames = new Array(6);
    for (let index = 0; index < 7; index++) {
        weekDayNames[index] = new Date((index + 4) * msinaDay).toLocaleDateString(userLocale, { weekday: weekdayNameLength });
    }
    return weekDayNames;
}
let Weekdays = localeDayNames();
//["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

//Arbeitsstunden
const WorkHoursStart = ["04:00", "04:00", "04:00", "04:00", "04:00", "-", "-"];
const WorkHoursEnd = ["12:00", "12:00", "12:00", "12:00", "12:00", "-", "-"];

//DivElement fuer jeden Tag.
function getDay(dayName, shiftStart, shiftEnd, number) {
    return <div className="day">
        <div className="dayName">{dayName[number]}</div>
        <div className="dH dHTop">{shiftStart[number]}</div>
        <div className="dH dHBot">{shiftEnd[number]}</div>
    </div>
};

function Shiftshedule() {
    return (
        <div id="shiftshedule" >
            {getDay(Weekdays, WorkHoursStart, WorkHoursEnd, 0)}
            {getDay(Weekdays, WorkHoursStart, WorkHoursEnd, 1)}
            {getDay(Weekdays, WorkHoursStart, WorkHoursEnd, 2)}
            {getDay(Weekdays, WorkHoursStart, WorkHoursEnd, 3)}
            {getDay(Weekdays, WorkHoursStart, WorkHoursEnd, 4)}
            {getDay(Weekdays, WorkHoursStart, WorkHoursEnd, 5)}
            {getDay(Weekdays, WorkHoursStart, WorkHoursEnd, 6)}
        </div>)
}

export default Shiftshedule;
