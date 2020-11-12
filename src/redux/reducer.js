import { fromJS } from "immutable";
import * as actionTypes from './action-types';

const initialState= fromJS({
    weatherData: '',
    error: ''
})

const reducer= (state= initialState, { type, payload }) => {
    switch(type){
        case actionTypes.SEARCH_CITY_SUCCESS:
            const newState= state.merge({'weatherData': payload, error: ''});
            return newState
        case actionTypes.SEARCH_CITY_FAILURE:
            return state.merge({'weatherData': '', error: payload});
        default:
            return state
    }
}

export default reducer;