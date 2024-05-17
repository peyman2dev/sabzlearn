import { createSlice } from "@reduxjs/toolkit";

const themeReducer = createSlice({
    name: "themeReducer",
    initialState: {
        isDark: false
    }
})

export default themeReducer.reducer