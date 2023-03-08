import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
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
            try {
                const response = await axios.get(
                    `http://localhost:3000/api/employees/${employeeId}/shift_schedule`,
                    {
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

    const daysOfWeek = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"];

    const getShiftForDayOfWeek = (dayOfWeek) => {
        const shift = schedule.find((shift) => shift.start_date === dayOfWeek);
        return shift ? `${moment(shift.start_time).format("HH:mm")} - ${moment(shift.end_time).format("HH:mm")}` : "-";
    };

    return (
        <div className="employee-schedule-banner">
            <h2>Arbeitszeiten für die nächste Woche</h2>
            <div className="datepicker-container">
                <DatePicker selected={selectedDate.toDate()} onChange={handleChangeDate} dateFormat="dd.MM.yyyy" />
            </div>
            <table>
                <thead>
                    <tr>
                        {daysOfWeek.map((day) => (
                            <th key={day}>{day}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {daysOfWeek.map((day) => (
                            <td key={day}>{getShiftForDayOfWeek(selectedDate.clone().day(day))}</td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeScheduleBanner;

