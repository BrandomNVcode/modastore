import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: null,
    uid: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authLogin: (state) => {
            state.name = 'Demo User',
            state.uid = 'as5d15sa1d5sa1d5sa'
        },
        authDestroy: (state) => {
            return initialState
        }
    }
})

// Action creators are generated for each case reducer function
export const { authLogin, authDestroy } = authSlice.actions

export default authSlice.reducer

