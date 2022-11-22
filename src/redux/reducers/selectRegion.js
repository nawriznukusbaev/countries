import {SET_SELECT_REGION} from "../../constants";


 function getRegion(state = {region:''}, action) {

    switch (action.type) {
        case SET_SELECT_REGION:
            if (action.data !== undefined) {
                return {...state,region:action.data};
            } else return state;

        default:
            return state;
    }
}
export default getRegion;