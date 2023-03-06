import React, { useState, useEffect } from "react";
import axios from "axios";

const EmployeeScheduleBanner = ({ employeeId }) => {
    const [weekSchedule, setWeekSchedule] = useState([]);

    useEffect(() => {
        const fetchWeekSchedule = async () => {
            try {
                // Berechne Start- und Enddatum für den Zeitraum der nächsten 7 Tage
                const today = new Date();
                const daysToMonday = (today.getDay() + 6) % 7; // Distanz zu Montag
                const monday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - daysToMonday);
                const sunday = new Date(monday.getFullYear(), monday.getMonth(), monday.getDate() + 6);

                // Hole Arbeitszeiten für den Mitarbeiter für den Zeitraum von Montag bis Sonntag
                console.log(employeeId)
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
    }, [employeeId]);

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