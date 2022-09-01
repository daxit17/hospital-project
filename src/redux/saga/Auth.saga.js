import { call, put, takeEvery, all } from 'redux-saga/effects'
import { ForgotPasswordApi, GoogleSignInApi, LogOutApi, SignInApi, SignUpApi } from '../../common/api/Auth.Api';
import { history } from '../../History';
import { setAlert } from '../Actions/Alert.Action';
import { loggedOutAction, signedInAction } from '../Actions/Auth.Action';
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
        yield put(signedInAction(user))
        history.push("/")
        yield put(setAlert({ text: "Login Is SuccessFully", color: "success" }))
        console.log(user);
    } catch (e) {
        yield put(setAlert({ text: e.payload, color: "error" }))
        console.log(e);
    }
}

function* GoogleSignIn(action) {
    try {
        const user = yield call(GoogleSignInApi, action.payload);
        yield put(signedInAction(user))
        history.push("/")
        yield put(setAlert({ text: "succesfully login with google...", color: "success" }))
        console.log(user);
    } catch (e) {
        yield put(setAlert({ text: e.payload, color: "error" }))
        console.log(e);
    }
}

function* LogOut(action) {
    try {
        const user = yield call(LogOutApi);
        yield put(loggedOutAction(user))
        history.push("/")
        yield put(setAlert({ text: user.payload, color: "success" }))
        console.log(user);
    } catch (e) {
        yield put(setAlert({ text: e.payload, color: "error" }))
        console.log(e);
    }
}

function* ForgotPassword(action) {
    try {
        const user = yield call(ForgotPasswordApi, action.payload);
        yield put(signedInAction(user))
        history.push("/")
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

function* watchLogOut() {
    yield takeEvery(ActionTypes.LOG_OUT_USER, LogOut);
}

function* watchGoogleSignIn() {
    yield takeEvery(ActionTypes.GOOLE_SIGNIN_USER, GoogleSignIn);
}

function* watchForgotPassword() {
    yield takeEvery(ActionTypes.FORGOT_PASSWORD, ForgotPassword)
}

export function* AuthUpSaga() {
    yield all([
        watchSignUp(),
        watchSignIn(),
        watchLogOut(),
        watchGoogleSignIn(),
        watchForgotPassword()
    ])
}
