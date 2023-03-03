import { createSlice } from '@reduxjs/toolkit';

//only for debugging
function loadUser() {
    const user = localStorage.getItem("user");
    if (user) {
        return JSON.parse(user);
    }
    return null;
}

function saveUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
}

function deleteUser() {
    localStorage.removeItem("user");
}

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: loadUser(),
        manager: null,
    },
    reducers: {
        setUser: (state, user) => {
            state.user = user;
            saveUser(user);
        },
        clearUser: state => {
            state.user = null;
            state.manager = null;
            deleteUser();
        },
        setManager: (state, user) => {
            state.manager = user;
        }
    }
})

export const { setUser, clearUser, setManager } = userSlice.actions;
export default userSlice.reducer;