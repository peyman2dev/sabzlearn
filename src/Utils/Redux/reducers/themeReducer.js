import { createSlice } from "@reduxjs/toolkit";
import themeHandler from "../../Functions/themeHandler";

const themeReducer = createSlice({
    name: "themeReducer",
    initialState: {
        isDark: false
    },

    reducers: {
        themeToggle: (state, action) => {
            themeHandler.action({
                isExist: true,
                state
            })
        },
        themeMount: (state, action) => {
            const localTheme = localStorage.getItem('theme')
            themeHandler.mount()
            if (localTheme && localTheme == "dark") {
                state.isDark = true
            } else {
                state.isDark = false
            }
        }
    }
})

export const { themeToggle, themeMount } = themeReducer.actions
export default themeReducer.reducer