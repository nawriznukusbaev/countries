import { SET_ALL_COUNTRIES} from "../../constants";

const initialState={
    countries:[],
    load:false
}

function allCountries(state = initialState, action) {
    switch (action.type) {
        case SET_ALL_COUNTRIES:

            if(action.data!==undefined){
                return {...state,countries:action.data,load:true};
            }
            else return state;

        default:
            return state;
    }

}

export default allCountries;