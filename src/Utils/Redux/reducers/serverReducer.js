import { createSlice } from "@reduxjs/toolkit";
import { getCourses, getMe, getMeuns } from "../actions/actions.js";
const serverReducer = createSlice({
    name: "serverReducer",
    initialState: {
        courses: [],
        menus: [],
        user: {
            isLoggedIn: false
        },
        isLoading: true
    },

    extraReducers: builder => {
        builder
            .addCase(getMeuns.fulfilled, (state, action) => {
                state.menus = action.payload
            })
            .addCase(getMeuns.rejected, (state, action) => {
                console.log(action)
            })
            .addCase(getMe.fulfilled, (state, action) => {
                console.log(action)
            })
            .addCase(getCourses.fulfilled, (state, action) => {
                state.courses = action.payload
                state.isLoading = false
            })
    }
})

export default serverReducer.reducer