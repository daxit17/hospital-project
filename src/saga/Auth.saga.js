import { call, put, takeEvery, all } from 'redux-saga/effects'

function* SignUp(action) {
    try {
        const user = yield call(Api.fetchUser, action.payload.userId);
        // yield put({ type: "USER_FETCH_SUCCEEDED", user: user });
    } catch (e) {
        // yield put({ type: "USER_FETCH_FAILED", message: e.message });
    }
}

function* watchSignUp() {
    yield takeEvery(ActionTypes.SIGN_UP_USER, SignUp);
}

export function* signUpSaga() {
    yield all([
        watchSignUp
    ])
}
