import { configureStore } from '@reduxjs/toolkit'
import { expenseReducer, userReducer } from './slices'

export const store = configureStore({
    reducer: {
        user: userReducer,
        expense: expenseReducer
    },
    devTools: true
})