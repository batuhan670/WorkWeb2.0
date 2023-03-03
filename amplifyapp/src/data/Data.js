
import React, { useState } from 'react';
import axios from 'axios';

const Data = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: '',
        phone: '',
        department: '',
        position: '',
        manager_IDemployees: '',
    });

    const handleInputChange = (event) => {
        setFormData({
            ...formData, [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/api/employees', formData)
            .then(res => {
                console.log(res);
                console.log(res.data);
                setFormData({
                    email: '',
                    password: '',
                    name: '',
                    phone: '',
                    department: '',
                    position: '',
                    manager_IDemployees: '',
                });
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="phone">Phone:</label>
                <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="department">Department:</label>
                <input type="text" id="department" name="department" value={formData.department} onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="position">Position:</label>
                <input type="text" id="position" name="position" value={formData.position} onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="manager">Manager:</label>
                <input type="text" id="manager" name="manager_IDemployees" value={formData.manager_IDemployees} onChange={handleInputChange} />
            </div>
            <button type="submit">Submit</button>
        </form>
    );

};

export default Data;