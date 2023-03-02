import React from "react";
import "./ShiftsheduleStyles.css";

const msinaDay = 86400000;
let userLocale;

userLocale = navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language;

//Benennung Wochentage
function localeDayNames(size) {
    let weekDayNames = new Array(6);
    for (let index = 0; index < 7; index++) {
        weekDayNames[index] = new Date((index + 4) * msinaDay).toLocaleDateString(userLocale, { weekday: size });
    }
    return weekDayNames;
}
//Week day name length
const WDNLL = localeDayNames("long");
const WDNLS = localeDayNames("short");

/*
function weekdayNameLengthDecision(x) {
    if (x.matches) {
        console.log("Short weekday names")
    } else {
        console.log("Long weekday names")
    }
}
*/


let mediaSize = window.matchMedia("(max-width: 700px)");

//Arbeitsstunden
const WorkHoursStart = ["04:00", "04:00", "04:00", "04:00", "04:00", "-", "-"];
const WorkHoursEnd = ["12:00", "12:00", "12:00", "12:00", "12:00", "-", "-"];


//DivElement fuer jeden Tag.
function getDay(dayName, shiftStart, shiftEnd, number) {
    return <div className="day" key={dayName + number}>
        <div className="dayName">{dayName[number]}</div>
        <div className="dH dHTop">{shiftStart[number]}</div>
        <div className="dH dHBot">{shiftEnd[number]}</div>
    </div>
};

//Div Element fuer die Woche
function makeWeek() {
    let shiftweek = new Array(6);
    let weekDayNameLength = mediaSize.matches ? WDNLS : WDNLL;
    for (let index = 0; index < 7; index++) {
        shiftweek[index] = getDay(weekDayNameLength, WorkHoursStart, WorkHoursEnd, index);
    }
    return shiftweek
}

//Schichtplan Export
function Shiftshedule() {
    return (
        <div id="shiftshedule" >
            {makeWeek()}
        </div>
    );
}

export default Shiftshedule;
