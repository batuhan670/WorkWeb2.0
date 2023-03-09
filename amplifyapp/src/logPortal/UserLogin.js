import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../api/api';
import './UserLoginStyles.css'
import { setUser } from '../stores/userStore';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()

    const forcedUser = {
        id: 0, email: "Mc@Test.net", password: "3",
        name: "McTest", phone: "0815 4711", department: "IT",
        position: "Dummy", manager_IDemployees: 2, created_at: "2023-03-03T09:42:45.000Z"
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const user = await login(email, password)
            dispatch(setUser(user))
            console.log("Logged in user: " + JSON.stringify(user))
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <br />
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <br />
            <button type="submit">Login</button>
            <button onClick={() => dispatch(setUser(forcedUser))}>Force Login</button>
        </form>
    );
}

export default Login;

