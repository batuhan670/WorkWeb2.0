import React from "react";
import "./ShiftsheduleStyles.css";


//Benennung Wochentage
const Weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

//Arbeitsstunden
const WorkHoursStart = ["04:00", "04:00", "04:00", "04:00", "04:00", "", ""];
const WorkHoursEnd = ["12:00", "12:00", "12:00", "12:00", "12:00", "", ""];

//DivElement fuer jeden Tag.
function getDay(dayName, shiftStart, shiftEnd, number) {
    return <div className="day">
        <div className="dayName">{dayName[number]}</div>
        <div className="dayHours">
            <div>{shiftStart[number]}</div>
            <div>---</div>
            <div>{shiftEnd[number]}</div>
        </div>
    </div>
};

function Shiftshedule() {
    return (
        <div id="shiftshedule">
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
