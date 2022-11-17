import {combineReducers} from "redux";
import allCountries from "./getAllCountries";
import getCountry from "./getCountrie";
const reducer=combineReducers({
    getAllCountries:allCountries,
    getCountry:getCountry
})
export default reducer;