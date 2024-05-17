import { createAsyncThunk } from "@reduxjs/toolkit";
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
            .then(data => {
                console.log(data)
                return data
            })
    }
)
