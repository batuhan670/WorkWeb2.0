import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
    name: 'isloggedin',
    initialState: {
        value: false
    },
    reducers: {
        login: state => {
            state.value = true;
            console.log("Ist eingeloggt? " + state.value)
        },
        logout: state => {
            state.value = false;
            console.log("Ist eingeloggt? " + state.value)
        }
    }
})

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;