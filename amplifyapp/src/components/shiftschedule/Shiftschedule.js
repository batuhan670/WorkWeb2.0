import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { daysOfWeekShort as WDNLS, daysOfWeekLong as WDNLL } from "../../constants";
import "./ShiftscheduleStyles.css";

let mediaSize = window.matchMedia("(max-width: 700px)");

//DivElement fuer jeden Tag.
function getDay(dayName, shiftStart, shiftEnd, number) {
    let start;
    let end;
    if ((shiftStart[0] !== undefined) && (shiftStart[0] !== null)) {
        start = shiftStart[0].split(":");
    } else {
        start = "";
    }
    if ((shiftEnd[0] !== undefined) && (shiftEnd[0] !== null)) {
        end = shiftEnd[0].split(":");
    } else {
        end = "";
    }
    return <div className="day" key={dayName + number}>
        <div className="dayName">{dayName[number]}{dayName.map(() => { return dayName.a })}</div>
        <div className="dH dHTop">{start[0] + ":" + start[1]}</div>
        <div className="dH dHBot">{end[0] + ":" + end[1]}</div>
    </div>
};

//Div Element fuer die Woche
function makeWeek(schedStart, schedEnd) {
    const start = schedStart.map((shift) => { return shift.start_time })
    const end = schedEnd.map((shift) => { return shift.end_time })
    let shiftweek = new Array(6);
    let weekDayNameLength = mediaSize.matches ? WDNLS : WDNLL;
    for (let index = 0; index < 7; index++) {
        shiftweek[index] = getDay(weekDayNameLength, start, end, index);
    }
    return shiftweek;
}

//Schichtplan Export
function Schiftshedule() {
    const user = useSelector(state => state.user.user)
    const [weekSchedule, setWeekSchedule] = useState([]);
    useEffect(() => {
        const fetchWeekSchedule = async () => {
            if (user == null) {
                return;
            }
            const employeeId = user.payload.id;
            try {
                // Berechne Start- und Enddatum für den Zeitraum der nächsten 7 Tage
                const today = new Date();
                const monday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - (today.getDay() + 6) % 7);
                const sunday = new Date(monday.getFullYear(), monday.getMonth(), monday.getDate() + 6);
                // Hole Arbeitszeiten für den Mitarbeiter für den Zeitraum von Montag bis Sonntag
                const response = await axios.get(`http://localhost:3000/api/employees/${employeeId}/shift_schedule`, {
                    params: {
                        start_time: monday.toISOString().substring(6, 8),
                        end_time: sunday.toISOString().split("T")[2],
                    },
                });
                // Setze den Wochenplan für den Mitarbeiter
                setWeekSchedule(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchWeekSchedule();
    }, [user]);
    return (
        <div id="shiftshedule" >
            {makeWeek(weekSchedule, weekSchedule)}
        </div>
    );
}

export default Schiftshedule;
