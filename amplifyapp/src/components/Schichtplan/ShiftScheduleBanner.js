import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { API_URL, daysOfWeekLong, daysOfWeekShort } from "../../constants";
import DatePicker from "react-datepicker";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";


const EmployeeScheduleBanner = () => {
    const user = useSelector((state) => state.user.user);
    const [selectedDate, setSelectedDate] = useState(moment());
    const [schedule, setSchedule] = useState([]);

    useEffect(() => {
        const fetchSchedule = async () => {
            if (user == null) {
                return;
            }
            const employeeId = user.payload.id;
            //Check Axios Pathing & object interpretation
            const sheduleURL = API_URL + `/shift_schedule/${employeeId}`;
            try {
                const response = await axios.get(sheduleURL, {
                    params: {
                        start_date: selectedDate.startOf("week").format("YYYY-MM-DD"),
                        end_date: selectedDate.endOf("week").format("YYYY-MM-DD"),
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
        setSelectedDate(moment(date));
    };

    const getShiftForDayOfWeek = (dayOfWeek) => {
        const shift = schedule.find((shift) => shift.start_date === dayOfWeek);
        return shift ? `${moment(shift.start_time).format("HH:mm")} - ${moment(shift.end_time).format("HH:mm")}` : "-";
    };

    console.log("selected Date: " + selectedDate)
    console.log("Schedule: " + schedule)
    return (
        <div className="employee-schedule-banner">
            <h2>Arbeitszeiten für die nächste Woche</h2>
            <div className="datepicker-container">
                <></>
            </div>
            <table>
                <thead>
                    <tr>
                        {daysOfWeekLong.map((day) =>
                        (
                            <th key={day}>{day}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {daysOfWeekLong.map((day) => (
                            <td key={day}>{getShiftForDayOfWeek(selectedDate.clone().day(day))}</td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
// <DatePicker selected={selectedDate.toDate()} onChange={handleChangeDate} dateFormat="dd.MM.yyyy" />

export default EmployeeScheduleBanner;

