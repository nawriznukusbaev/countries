import {call, put, takeEvery, spawn,takeLeading} from 'redux-saga/effects'
import {SET_ALL_COUNTRIES} from "../../constants";

export function* Countries() {
    const request = yield call(fetch,'https://restcountries.com/v2/all');
    const countries = yield call([request,request.json]);
    yield put({
        type:SET_ALL_COUNTRIES,
        data:countries
    })
}