import { all } from "redux-saga/effects";
import { AuthUpSaga } from "./Auth.saga"

export function* rootSaga() {
    yield all([
        AuthUpSaga()
    ])
}