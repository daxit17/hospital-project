import * as ActionTypes from "../ActionTypes";

export const signUpAction = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.SIGN_UP_USER, payload: data });
}

export const signInAction = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.SIGN_IN_USER, payload: data });
}