import React, { useState, useEffect } from "react";
import axios from "axios";

const EmployeeShifts = () => {
    const [employeeId, setEmployeeId] = useState("");
    const [shiftStartDate, setShiftStartDate] = useState("");
    const [shiftStartTime, setShiftStartTime] = useState("");
    const [shiftEndDate, setShiftEndDate] = useState("");
    const [shiftEndTime, setShiftEndTime] = useState("");
    const [shiftType, setShiftType] = useState("");

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/api/employees").then((response) => {
            setEmployees(response.data);
        });
    }, []);

    const handleEmployeeChange = (event) => {
        setEmployeeId(event.target.value);
    };

    const handleStartDateChange = (event) => {
        setShiftStartDate(event.target.value);
    };

    const handleStartTimeChange = (event) => {
        setShiftStartTime(event.target.value);
    };

    const handleEndDateChange = (event) => {
        setShiftEndDate(event.target.value);
    };

    const handleEndTimeChange = (event) => {
        setShiftEndTime(event.target.value);
    };

    const handleShiftTypeChange = (event) => {
        setShiftType(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const shiftData = {
            employee_id: employeeId,
            start_date: shiftStartDate,
            start_time: shiftStartTime,
            end_date: shiftEndDate,
            end_time: shiftEndTime,
            shift_type: shiftType,
        };

        axios
            .post("http://localhost:3000/api/employees/" + employeeId + "/shift_schedule", shiftData)
            .then((response) => {
                console.log(response.data);
            });

        setEmployeeId("");
        setShiftStartDate("");
        setShiftStartTime("");
        setShiftEndDate("");
        setShiftEndTime("");
        setShiftType("");
    };

    return (
        <div className="employee-shifts-container">
            <h2>Mitarbeiter Schichtplanung</h2>
            <form onSubmit={handleSubmit}>
                <div className="employee-select">
                    <label htmlFor="employee-select">Mitarbeiter auswählen:</label>
                    <select id="employee-select" value={employeeId} onChange={handleEmployeeChange}>
                        <option value="">Bitte auswählen</option>
                        {employees.map((employee) => (
                            <option key={employee.id} value={employee.id}>
                                {employee.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="shift-type-select">
                    <label htmlFor="shift-type-select">Schichtart:</label>
                    <select id="shift-type-select" value={shiftType} onChange={handleShiftTypeChange}>
                        <option value="">Bitte auswählen</option>
                        <option value="Nachtschicht">Tagschicht</option>
                        <option value="Frühschicht">Frühschicht</option>
                        <option value="Nachmittagsschicht">Nachmittagsschicht</option>
                        <option value="Nachtschicht">Nachtschicht</option>
                        <option value="Nachtschicht">Frei</option>

                    </select>
                </div>
                <div className="shift-start-date-input">
                    <label htmlFor="shift-start-date-input">Schichtanfang Datum:</label>
                    <input type="date" id="shift-start-date-input" value={shiftStartDate} onChange={handleStartDateChange} />
                </div>
                <div className="shift-start-time-input">
                    <label htmlFor="shift-start-time-input">Schichtanfang Uhrzeit:</label>

                    <input type="time" id="shift-start-time-input" value={shiftStartTime} onChange={handleStartTimeChange} />
                </div>
                <div className="shift-end-date-input">
                    <label htmlFor="shift-end-date-input">Schichtende Datum:</label>
                    <input type="date" id="shift-end-date-input" value={shiftEndDate} onChange={handleEndDateChange} />
                </div>
                <div className="shift-end-time-input">
                    <label htmlFor="shift-end-time-input">Schichtende Uhrzeit:</label>
                    <input type="time" id="shift-end-time-input" value={shiftEndTime} onChange={handleEndTimeChange} />
                </div>
                <button type="submit">Eintragen</button>
            </form>
        </div>
    );
};
export default EmployeeShifts;