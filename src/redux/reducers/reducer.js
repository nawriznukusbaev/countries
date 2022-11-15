import {combineReducers} from "redux";
import allCountries from "./getAllCountries";
const reducer=combineReducers({
    getAllCountries:allCountries,
})
export default reducer;