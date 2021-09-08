import { createSlice } from '@reduxjs/toolkit';

let initialState = false

export const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState,
    reducers: {
        logIn: (state, action) => {
           return !state
        }
    }
})

export const { logIn } = currentUserSlice.actions

export default currentUserSlice.reducer;
