import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import addHours from './AddHours'

const ClockIn = () => {
    const employeeId = useSelector(state => state.user.user.payload.id);
    const user = useSelector(state => state.user.user.payload);
    const [clockInTime, setClockInTime] = useState(null);
    const [clockOutTime, setClockOutTime] = useState(null);
    const [totalHours, setTotalHours] = useState('00:00:00');
    const [todayHours, setTodayHours] = useState('00:00:00');

    const handleClockIn = async () => {
        setClockInTime(new Date());
        setClockOutTime(null);
    };

    const handleClockOut = async () => {
        if (clockInTime) {
            console.log("User clock: " + JSON.stringify(user))
            setClockOutTime(new Date());
            const timeDiff = clockOutTime ? clockOutTime.getTime() - clockInTime.getTime() : new Date().getTime() - clockInTime.getTime();
            const hours = addHours(totalHours, addHours('00:00:00', new Date(timeDiff).toISOString().substr(11, 8)));
            setTotalHours(hours);
            const today = new Date().toISOString().substr(0, 10);
            const response = await axios.post(`http://localhost:3000/api/employee_hours/${employeeId}`, {
                work_date: today,
                start_time: clockInTime.toISOString().substr(11, 8),
                stop_time: clockOutTime.toISOString().substr(11, 8),
                total_hours: hours,
            });
            const todayData = response.data.find(data => data.work_date === today);
            setTodayHours(todayData ? todayData.total_hours : '00:00:00');
        }
    };

    return (
        <div>
            <h2>Stempeluhr</h2>
            <div>
                <button onClick={handleClockIn} disabled={clockInTime && !clockOutTime}>Kommen</button>
                <button onClick={handleClockOut} disabled={!clockInTime}>Gehen</button>
            </div>
            <div>
                Gesamtarbeitszeit: {totalHours}
            </div>
            <div>
                Arbeitszeit heute: {todayHours}
            </div>
        </div>
    );
};

export default ClockIn;
