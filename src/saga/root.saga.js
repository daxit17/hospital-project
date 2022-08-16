import { all } from "redux-saga/effects";
import { signUpSaga } from "./auth.saga";

function* rootSaga() {
    yield all([
        signUpSaga
    ])
}