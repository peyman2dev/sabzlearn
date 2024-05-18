import { createSlice } from "@reduxjs/toolkit";

const themeReducer = createSlice({
    name: "themeReducer",
    initialState: {
        isDark: false
    },

    reducers: {
        themeToggle: (state, action) => {
            const localTheme = localStorage.getItem('theme')
            if (!localTheme || localTheme === "light") {
                localStorage.setItem('theme', 'dark')
                document.documentElement.className = "dark"
                state.isDark = true
            } else {
                localStorage.setItem('theme', 'light')
                document.documentElement.className = "light"
                state.isDark = false
            }
        }
    }
})

export const { themeToggle } = themeReducer.actions
export default themeReducer.reducer