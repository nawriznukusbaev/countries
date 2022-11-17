import {call, put, take} from 'redux-saga/effects'
import {SET_COUNTRY} from "../../constants";

export function* Country() {
    const {countryParam} = yield take(SET_COUNTRY);
    const request = yield call(fetch, `https://restcountries.com/v2/alpha/${countryParam}`);
    const country = yield call([request, request.json]);
    console.log(country);
    yield put({
        type: SET_COUNTRY,
        data: country
    })
}