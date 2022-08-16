import * as ActionTypes from "../ActionTypes";

export const signUpAction = (values) => (dispatch) => {
    dispatch({ type: ActionTypes.SIGN_UP_USER, payload: values });
}