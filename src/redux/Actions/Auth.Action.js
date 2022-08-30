import * as ActionTypes from "../ActionTypes";

export const signUpAction = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.SIGN_UP_USER, payload: data });
}

export const signInAction = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.SIGN_IN_USER, payload: data });
}

export const signedInAction = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.SIGNED_IN_USER, payload: data })
}

export const logOutAction = () => (dispatch) => {
    dispatch({ type: ActionTypes.LOG_OUT_USER })
}

export const loggedOutAction = () => (dispatch) => {
    dispatch({ type: ActionTypes.LOGGED_OUT_USER })
}