import { createSlice } from "@reduxjs/toolkit";
import { courseRemove, createSession, getArticles, getCategories, getCourses, getLogin, getMe, getMeuns, getRegister, getUsers } from "../actions/actions.js";
import { Bounce, toast } from "react-toastify";
import 'react-toastify/ReactToastify.min.css'

const serverReducer = createSlice({
    name: "serverReducer",
    initialState: {
        courses: [],
        menus: [],
        users: [],
        articles: [],
        user: {
            isLoggedIn: false,
            userInfos: {}
        },
        categories: [],
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
                state.user.isLoggedIn = true
                state.user.userInfos = action.payload
            })
            .addCase(getCourses.fulfilled, (state, action) => {
                state.courses = action.payload
                state.isLoading = false


            })
            .addCase(getLogin.fulfilled, (state, action) => {
                const localTheme = localStorage.getItem('theme')
                localStorage.setItem('token', action.payload.accessToken)
                toast.success("شما با موفقیت وارد شدید!", {
                    autoClose: 2500,
                    position: "top-left",
                    progress: undefined,
                    closeOnClick: true,
                    theme: localTheme,
                    onClose: () => {
                        window.location.pathname = '/'
                    },
                    transition: Bounce,
                })
            })
            .addCase(getLogin.rejected, (state, action) => {
                const localTheme = localStorage.getItem('theme')
                toast.error("اطلاعات وارد شده صحیح نمی باشد", {
                    autoClose: 2500,
                    position: "top-left",
                    progress: undefined,

                    closeOnClick: true,
                    theme: localTheme,
                    transition: Bounce,
                })

            })
            .addCase(getRegister.fulfilled, (state, action) => {
                console.log(action.payload)
                const { payload } = action
                state.user.isLoggedIn = true
                localStorage.setItem('token', payload.accessToken)
                state.user.userInfos = payload.user
                const localTheme = localStorage.getItem('theme')
                toast.success("حساب شما با موفقیت ایجاد گردید !", {
                    autoClose: 2500,
                    position: "top-left",
                    progress: undefined,

                    closeOnClick: true,
                    theme: localTheme,
                    transition: Bounce,
                    onClose: () => {
                        window.location.pathname = "/"
                    }
                })
            })
            .addCase(getRegister.rejected, (state, action) => {
                const localTheme = localStorage.getItem('theme')
                toast.error("عملیات با خطا مواجه شد !", {
                    autoClose: 2500,
                    position: "top-left",
                    progress: undefined,
                    closeOnClick: true,
                    theme: localTheme,
                    transition: Bounce,
                })
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.users = action.payload
            })
            .addCase(getArticles.fulfilled, (state, action) => {
                state.articles = action.payload
            })
            .addCase(getCategories.fulfilled, (state, action) => {
                state.categories = action.payload
            })
            .addCase(getCategories.rejected, (state, action) => {
                throw new Error("We can not get the categories")
            })
            .addCase(courseRemove.fulfilled, (state, action) => {
                toast.success("دوره با موفقیت حذف گردید !", {
                    autoClose: 2500,
                    position: "top-left",
                    closeOnClick: true,
                    transition: Bounce,
                    onClose: () => window.location.reload()
                })
            })
            .addCase(courseRemove.rejected, (state, action) => {
                toast.error("عملیات با خطا مواجه شد", {
                    autoClose: 2500,
                    position: "top-left",
                    closeOnClick: true,
                    transition: Bounce,
                })
                throw new Error(action)
            })
            .addCase(createSession.fulfilled, (state, action) => {
                console.log(action.payload)
                toast.success("جلسه با موفقیت ایجاد گردید :)", {
                    autoClose: 2500,
                    position: "top-left",
                    closeOnClick: true,
                    transition: Bounce,
                })
            })
            .addCase(createSession.rejected, (state, action) => {
                toast.error("عملیات با خطا مواجه شد", {
                    autoClose: 2500,
                    position: "top-left",
                    closeOnClick: true,
                    transition: Bounce,
                })
                console.log(action)
            })
    }
})

export default serverReducer.reducer