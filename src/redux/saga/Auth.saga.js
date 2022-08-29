import { call, put, takeEvery, all } from 'redux-saga/effects'
import { SignInApi, SignUpApi } from '../../common/api/Auth.Api';
import { setAlert } from '../Actions/Alert.Action';
import * as ActionTypes from "../ActionTypes";

function* SignUp(action) {
    try {
        const user = yield call(SignUpApi, action.payload);
        yield put(setAlert({ text: user.payload, color: "success" }))
        console.log(user);
        // yield put({ type: "USER_FETCH_SUCCEEDED", user: user });
    } catch (e) {
        yield put(setAlert({ text: e.payload, color: "error" }))
        // yield put({ type: "USER_FETCH_FAILED", message: e.message });
        console.log(e);
    }
}

function* SignIn(action) {
    try {
        const user = yield call(SignInApi, action.payload);
        yield put(setAlert({ text: user.payload, color: "success" }))
        console.log(user);
    } catch (e) {
        yield put(setAlert({ text: e.payload, color: "error" }))
        console.log(e);
    }
}

function* watchSignUp() {
    yield takeEvery(ActionTypes.SIGN_UP_USER, SignUp);
}

function* watchSignIn() {
    yield takeEvery(ActionTypes.SIGN_IN_USER, SignIn)
}

export function* AuthUpSaga() {
    yield all([
        watchSignUp(),
        watchSignIn()
    ])
}
