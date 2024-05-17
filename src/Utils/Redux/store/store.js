import { configureStore } from "@reduxjs/toolkit"
import baseReducer from "../reducers/baseReducer"
import serverReducer from "../reducers/serverReducer"


const store = configureStore({
    reducer: baseReducer,
    server: serverReducer
})

export default store