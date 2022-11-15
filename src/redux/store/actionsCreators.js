import {GET_ALL_COUNTRIES, SET_ALL_COUNTRIES,GET_COUNTRIE} from "../../constants";
export const add = (input) => {
    console.log(input);
    return {
        type: SET_ALL_COUNTRIES,
        data: input
    }
}

