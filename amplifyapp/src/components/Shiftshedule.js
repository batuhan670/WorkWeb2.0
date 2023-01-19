import React from "react";
import "./ShiftsheduleStyles.css";


//Benennung Wochentage
const Weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

//Arbeitsstunden
const WorkHoursStart = ["04:00-", "04:00-", "04:00-", "04:00-", "04:00-", "Frei", "Frei"];
const WorkHoursEnd = ["12:00", "12:00", "12:00", "12:00", "12:00", "", ""];

//DivElement fuer jeden Tag.
function getDay(dayName, shiftStart, shiftEnd, number) {
    return <div className="day">
        <div className="dayName">{dayName[number]}</div>
        <div className="dayHours">{shiftStart[number]}</div>
        <div className="dayHours">{shiftEnd[number]}</div>
    </div>
};

function Shiftshedule() {
    function changeColor(color) {
        var r = document.querySelector(':root');
        r.style.setProperty('--textColor', color);
    }

    return (
        <div id="shiftshedule">
            <button onClick={() => changeColor("green")}>Green</button>
            <button onClick={() => changeColor("brown")}>Munggilebru</button>
            {getDay(Weekdays, WorkHoursStart, WorkHoursEnd, 2)}
            {getDay(Weekdays, WorkHoursStart, WorkHoursEnd, 3)}
            {getDay(Weekdays, WorkHoursStart, WorkHoursEnd, 4)}
            {getDay(Weekdays, WorkHoursStart, WorkHoursEnd, 5)}
            {getDay(Weekdays, WorkHoursStart, WorkHoursEnd, 6)}
        </div>
    );
};

export default Shiftshedule;
