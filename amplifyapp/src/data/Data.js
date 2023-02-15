import React, { useState } from 'react';
import axios from 'axios';

const Data = () => {
    const [formData, setFormData] = useState({

        name: '',
        phone: '',
        email: '',
        department: '',
        position: '',
        manager: ''
    });

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('/api/data', formData)
            .then(res => {
                console.log(res);
                console.log(res.data);
                setFormData({

                    name: '',
                    phone: '',
                    email: '',
                    department: '',
                    position: '',
                    manager: ''
                });
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="phone">Phone:</label>
                <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
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
                <input type="text" id="manager" name="manager" value={formData.manager} onChange={handleInputChange} />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Data;
