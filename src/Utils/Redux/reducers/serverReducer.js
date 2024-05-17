import { createSlice } from "@reduxjs/toolkit";
import { getMeuns } from "../actions/actions.js";
const serverReducer = createSlice({
    name: "serverReducer",
    initialState: {
        courses: [],
        menus: [],
        user: {}
    },

    extraReducers: builder => {
        builder
            .addCase(getMeuns.fulfilled, (state, action) => {
                state.menus = action.payload
            })
            .addCase(getMeuns.rejected, (state, action) => {
                console.log(action)
            })
    }
})

export default serverReducer.reducer