import React, { useState } from 'react';
import moment from 'moment';

const ShiftScheduleBanner = () => {
    const [shiftCycle, setShiftCycle] = useState('');
    const [workDays, setWorkDays] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Schichtzyklus in Tage umwandeln
        const days = shiftCycle.split(',').map((day) => day.trim());

        // Arbeitstage berechnen
        const workDays = [];
        let currentDate = moment();
        for (let i = 0; i < 5; i++) {
            while (!days.includes(currentDate.format('ddd'))) {
                currentDate = currentDate.add(1, 'day');
            }
            workDays.push(currentDate.format('ddd, MMM D'));
            currentDate = currentDate.add(1, 'day');
        }
        setWorkDays(workDays);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Schichtzyklus:
                    <input type="text" value={shiftCycle} onChange={(e) => setShiftCycle(e.target.value)} />
                </label>
                <button type="submit">Submit</button>
            </form>
            <div>
                Nächste Arbeitstage:
                <ul>
                    {workDays.map((day) => (
                        <li key={day}>{day}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ShiftScheduleBanner;
