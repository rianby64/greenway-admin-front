import { takeEvery } from "redux-saga/effects";
import { USERACTION } from "../../types/Types";

function* getUserWorker({ }) {

}

// function* loginWorker({ email, password }) { }

// function* registerWorker({ email, password }) { }

// function* logoutWorker() {}

export function* UserSaga() {
    yield takeEvery(USERACTION.GET_USER, getUserWorker);
}