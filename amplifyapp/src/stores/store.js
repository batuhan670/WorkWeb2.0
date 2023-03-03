import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterStore'
import userReducer from './userStore'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
    },
})