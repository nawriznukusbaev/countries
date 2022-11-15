import {call, put, takeEvery, spawn,takeLeading} from 'redux-saga/effects'
import {SET_ALL_COUNTRIES} from "../../constants";
import {getApiData} from "../../api";
import {add} from "../store/actionsCreators";

export function* workerSaga() {
    const request = yield call(fetch,'https://restcountries.com/v2/all');
    const contries = yield call([request,request.json]);
    yield put({
        type:SET_ALL_COUNTRIES,
        data:contries
    })

}

export function* watchClickSaga() {
    yield takeLeading(SET_ALL_COUNTRIES, workerSaga);
}

export default function* rootSaga() {
    yield spawn(watchClickSaga);
}