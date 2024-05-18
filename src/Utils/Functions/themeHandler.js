const themeHandler = {
    action: ({
        state,
        isExist
    }) => {
        const localTheme = localStorage.getItem('theme')
        if (!localTheme || localTheme === "light") {
            localStorage.setItem('theme', 'dark')
            document.documentElement.className = "dark"
            isExist && (state.isDark = true)
        } else {
            localStorage.setItem('theme', 'light')
            document.documentElement.className = "light"
            isExist && (state.isDark = false)
        }
    },
    mount: () => {
        const localTheme = localStorage.getItem('theme')

        if (!localTheme || localTheme == "light") {
            document.documentElement.className = "light"
        } else {
            document.documentElement.className = "dark"
        }
    }
}

export default themeHandler