import React from "react";
import "./ShiftsheduleStyles.css";


//Benennung Wochentage
const Weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
function getDayName(element) {
    return <div className="dayName">{element}</div>
};


//Arbeitsstunden
const WorkingHoursPerDay = [
    "04:00-12:00", "04:00-12:00", "04:00-12:00", "04:00-12:00", "04:00-12:00", "Frei", "Frei"
];
function getWorkingHours(element) {
    return <div className="dayHours">{element}</div>
};

//DivElement fuer jeden Tag.
function getDay(dayName, dayWorkingHours, number) {
    return <div className="day">
        {getDayName(dayName[number])}
        {getWorkingHours(dayWorkingHours[number])}
    </div>
};

function shiftshedule() {
    return (
        <div id="shiftshedule">
            {getDay(Weekdays, WorkingHoursPerDay, 0)}
            {getDay(Weekdays, WorkingHoursPerDay, 1)}
            {getDay(Weekdays, WorkingHoursPerDay, 2)}
            {getDay(Weekdays, WorkingHoursPerDay, 3)}
            {getDay(Weekdays, WorkingHoursPerDay, 4)}
            {getDay(Weekdays, WorkingHoursPerDay, 5)}
            {getDay(Weekdays, WorkingHoursPerDay, 6)}
        </div>
    );
};

export default shiftshedule;
