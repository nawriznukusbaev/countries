import {SET_COUNTRY} from "../../constants";


function getCountry(state = {}, action) {

    switch (action.type) {

        case SET_COUNTRY:

            if (action.data !== undefined) {
                return {...state,country:action.data};
            } else return state;

        default:
            return state;
    }

}
export default getCountry;