import { combineReducers } from "@reduxjs/toolkit"
import themeReducer from "./themeReducer"
import serverReducer from "./serverReducer"

const baseReducer = combineReducers({
    theme: themeReducer,
    server: serverReducer
})
export default baseReducer