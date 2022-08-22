import { combineReducers } from "redux";
import { authReducer } from "./Auth.Reducer";

export const rootReducer = combineReducers({
    auth: authReducer
})