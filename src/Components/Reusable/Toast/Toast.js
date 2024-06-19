import { toast as t, Bounce } from "react-toastify";
const localTheme = localStorage.getItem('theme')

const toast = {
    success: (message, fn) => {
        t.success(message, {
            autoClose: 1500,
            position: "top-left",
            closeOnClick: true,
            transition: Bounce,
            theme: localTheme,
            onClose: fn ? fn : () => window.location.reload()
        })
    },
    error: (message, fn) => {
        t.error(message, {
            autoClose: 2500,
            position: "top-left",
            closeOnClick: true,
            transition: Bounce,
            theme: localTheme,
            onClose: fn
        })
    }
}


export default toast