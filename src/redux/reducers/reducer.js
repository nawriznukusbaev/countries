import {combineReducers} from "redux";
import allCountries from "./getAllCountries";
import getCountry from "./getCountrie";
import getRegion from "./selectRegion";
const reducer=combineReducers({
    getAllCountries:allCountries,
    getCountry:getCountry,
    getRegion:getRegion
})
export default reducer;