import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { API_URL, daysOfWeekLong, daysOfWeekShort } from "../../constants";
import DatePicker from "react-datepicker";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";

/*
const EmployeeScheduleBanner = () => {
    const user = useSelector((state) => state.user.user);
    const [selectedDate, setSelectedDate] = useState(moment());
    const [schedule, setSchedule] = useState([]);

    //Testzwecke
    const [startDate, setStartDate] = useState(new Date());

    useEffect(() => {
        const fetchSchedule = async () => {
            if (user == null) {
                return;
            }
            const employeeId = user.payload.id;
            //Check Axios Pathing & object interpretation
            const sheduleURL = API_URL + '/employees/' + employeeId + '/shift_schedule';
            console.log(sheduleURL)
            const today = new Date();
            const daysToMonday = (today.getDay() + 6) % 7; // Distanz zu Montag
            const monday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - daysToMonday);
            const sunday = new Date(monday.getFullYear(), monday.getMonth(), monday.getDate() + 6);
            try {
                const response = await axios.get(sheduleURL, {

                    params: {
                        start_date: selectedDate.startOf("week").format("YYYY-MM-DD"),
                        end_date: selectedDate.startOf("week").format("YYYY-MM-DD"),
                    },

                }
                );
                setSchedule(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchSchedule();
    }, [user, selectedDate]);

    const handleChangeDate = (date) => {
        setSelectedDate(date.params);
    };

    const getShiftForDayOfWeek = (dayOfWeek) => {
        const shift = schedule.find((shift) => shift.start_date === dayOfWeek);
        return shift ? `${moment(shift.start_time).format("HH:mm")} - ${moment(shift.end_time).format("HH:mm")}` : "-";
    };

    //<DatePicker selected={selectedDate.toDate()} onChange={handleChangeDate} dateFormat="dd.MM.yyyy" />


    //<DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    console.log("selected Date: " + selectedDate)
    console.log("Schedule: " + schedule)
    return (
        <div className="employee-schedule-banner">
            <h2>Arbeitszeiten für die nächste Woche</h2>
            <div className="datepicker-container">

            </div>
            <table>
                <thead>
                    <tr>
                        {daysOfWeekLong.map((dayName) => {
                            return (
                                <th key={dayName}>{dayName}</th>
                            );
                        })}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {schedule.params}
                        {daysOfWeekLong.map((day) => (
                            <td key={day}>{day}</td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
//<td key={day}>{getShiftForDayOfWeek(selectedDate.clone().day(day))}</td>
export default EmployeeScheduleBanner;
*/

const EmployeeScheduleBanner = () => {
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
                        start_date: monday.toISOString().split("T")[0],
                        end_date: sunday.toISOString().split("T")[0],
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
    const daysOfWeek = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"];
    return (
        <div className="employee-schedule-banner">
            <h2>Arbeitszeiten für die nächste Woche</h2>
            {weekSchedule.length > 0 ? (
                <ul>
                    {weekSchedule.map((shift, index) => (
                        <li key={shift.id}>
                            {daysOfWeek[index]}: {shift.start_time} - {shift.end_time}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Keine Arbeitszeiten für die nächste Woche gefunden.</p>
            )}
        </div>
    );
};
export default EmployeeScheduleBanner;
