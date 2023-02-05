import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    budget: null,
    expenses: null,
}

export const userSlice = createSlice({
    name: 'expense',
    initialState,
    reducers: {
        setBudget: (state, action) => {
            state.budget = action.payload
        },
        setExpense: (state, action) => {
            state.expenses = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setBudget, setExpense } = userSlice.actions

export default userSlice.reducer