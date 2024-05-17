import { configureStore } from "@reduxjs/toolkit"
import baseReducer from "../reducers/baseReducer"


const store = configureStore({
    reducer: baseReducer
})

export default store