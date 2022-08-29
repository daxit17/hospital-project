import { combineReducers } from "redux";
import { AlertReducer } from "./Alert_Reducer";
import { authReducer } from "./Auth.Reducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    alert: AlertReducer
})