import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../Api/api";
const token = localStorage.getItem('token')


export const getMeuns = createAsyncThunk(
    "serverReducer/getMeuns",
    async () => {
        return await api.get('/menus').then(res => res.data).then(data => data)
    }
)


export const getMe = createAsyncThunk(
    "serverReducer/getMe",
    async () => {
        return api.get('/auth/me', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => res.data)
            .then(data => data)
    }
)

export const getCourses = createAsyncThunk(
    "serverReducer/getCourses",
    async () => {
        return api.get('/courses')
            .then(res => res.data)
            .then(data => data)
    }
)


export const getLogin = createAsyncThunk(
    "serverReducer/getLogin",
    async ({ user, setIsLoading }) => {
        return api.post('/auth/login', user).then(res => res.data).then(data => data).finally(() => {
            setIsLoading(false)
        })
    }
)

export const getRegister = createAsyncThunk(
    "serverReducer/getRegister",
    async ({
        user,
        setIsLoading
    }) => {
        return api.post("/auth/register", user).then(res => res.data).then(data => data).finally(() => {
            setIsLoading(false)
        })
    }
)

export const getUsers = createAsyncThunk(
    "serverReducer/getUsers",
    async () => {
        return api.get("/users", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => res.data)
            .then(data => data)
    }
)

export const getArticles = createAsyncThunk(
    "serverReducer/getArticles",
    async () => {
        return api.get("/articles", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => res.data)
            .then(data => data)
    }
)
export const getCategories = createAsyncThunk(
    "serverReducer/getCategories",
    async () => {
        return api.get('/category')
            .then(res => res.data)
            .then(data => data)
    }
)


export const courseRemove = createAsyncThunk(
    "serverReducer/courseRemove",
    async (courseID) => {
        return api.delete(`/courses/${courseID}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => res.data)
        .then(data => data)
    }
)
