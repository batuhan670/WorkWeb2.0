import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './loginStore'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})