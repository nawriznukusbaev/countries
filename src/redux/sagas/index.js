import {Countries} from "./countries";
import {spawn} from 'redux-saga/effects'
import {Country} from "./country";
export default function* rootSaga() {
    yield spawn(Countries);
    yield spawn(Country);
}