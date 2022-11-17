import {SET_COUNTRY, SET_ALL_COUNTRIES} from "../../constants";
export const add = (input) => {
    return {
        type: SET_ALL_COUNTRIES,
        data: input
    }
}

export const addCountry=(input)=>{
    return {
        type:SET_COUNTRY,
        data:input
    }
}


