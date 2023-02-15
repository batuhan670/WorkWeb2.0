import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeHours = () => {
    const [startTime, setStartTime] = useState(null);
    const [stopTime, setStopTime] = useState(null);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [totalHours, setTotalHours] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (startTime && stopTime) {
            const timeDiff = stopTime - startTime;
            setElapsedTime(timeDiff);
            setTotalHours(totalHours + timeDiff / (1000 * 60 * 60));
        }
    }, [startTime, stopTime]);

    const handleStartClick = () => {
        if (!isRunning) {
            setStartTime(Date.now());
            setIsRunning(true);
        }
    };

    const handleStopClick = () => {
        if (isRunning) {
            setStopTime(Date.now());
            setIsRunning(false);
        }
    };

    const handleSaveClick = () => {
        axios.post('/api/employee_hours', { totalHours })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div>
            <div>
                <button onClick={handleStartClick} disabled={isRunning}>Start</button>
                <button onClick={handleStopClick} disabled={!isRunning}>Stop</button>
            </div>
            <div>
                Elapsed Time: {elapsedTime ? (elapsedTime / (1000 * 60 * 60)).toFixed(2) + ' hours' : 'N/A'}
            </div>
            <div>
                Total Hours: {totalHours.toFixed(2)} hours
            </div>
            <button onClick={handleSaveClick}>Save</button>
        </div>
    );
};

export default EmployeeHours;
