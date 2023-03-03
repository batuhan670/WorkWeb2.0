import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: null
    },
    reducers: {
        setUser: (state, user) => {
            state.value = user;
            console.log("Ist eingeloggt? " + state.value)
        },
        clearUser: state => {
            state.value = null;
            console.log("Ist eingeloggt? " + state.value)
        }
    }
})

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;