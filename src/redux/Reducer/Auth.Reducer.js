import * as ActionTypes from "../ActionTypes";

const initialVal = {
    isLoading: false,
    user: null,
    error: ''
}

export const authReducer = (state = initialVal, action) => {

    switch (action.type) {

        case ActionTypes.SIGNED_IN_USER:
            return {
                ...state,
                isLoading: false,
                user: action.payload,
                error: ''
            }

        default:
            return state;

    }

}
