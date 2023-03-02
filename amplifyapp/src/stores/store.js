import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterStore'
import loginReducer from './loginStore'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        isloggedin: loginReducer,
    },
})