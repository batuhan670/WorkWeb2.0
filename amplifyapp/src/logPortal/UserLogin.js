import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../api/api';
import './UserLoginStyles.css'
import { setUser } from '../stores/userStore';
import Data from '../data/Data';

function Login() {
    const [knowsUser, setKnowsUser] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()

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
    if (knowsUser) {
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        Email:
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <label>
                        Password:
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <button className type="submit">Login</button>
                    <button onClick={() => setKnowsUser(false)}>Create User</button>

                </form>
            </div>
        );
    }
    else {
        return (
            <Data />
        );
    }
}

export default Login;

