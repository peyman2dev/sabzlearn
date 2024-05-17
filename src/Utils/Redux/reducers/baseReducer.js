import { combineReducers } from "@reduxjs/toolkit"
import themeReducer from "./themeReducer"

const baseReducer = combineReducers({
    theme: themeReducer
})
export default baseReducer