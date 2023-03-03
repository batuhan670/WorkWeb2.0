import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeSelect = ({ onSelect }) => {
    const [employees, setEmployees] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState('');

    useEffect(() => {
        axios.get('/api/employees')
            .then(response => setEmployees(response.data))
            .catch(error => console.log(error));
    }, []);

    const handleEmployeeChange = (event) => {
        const employeeId = event.target.value;
        setSelectedEmployee(employeeId);
        onSelect(employeeId);
    };

    return (
        <div>
            <label htmlFor="employee-select">Mitarbeiter auswählen:</label>
            <select id="employee-select" value={selectedEmployee} onChange={handleEmployeeChange}>
                <option value="">Bitte auswählen</option>
                {employees.map(employee => (
                    <option key={employee.id} value={employee.id}>{employee.name}</option>
                ))}
            </select>
        </div>
    );
};

export default EmployeeSelect;
