import { fromJS } from "immutable";
import * as actionTypes from './action-types';

const initialState= fromJS({
    weatherData: '',
    error: '',
    isLoading: false
})

const reducer= (state= initialState, { type, payload }) => {
    console.log('reducer', type, payload)
    switch(type){
        case actionTypes.SEARCH_CITY_SUCCESS:
            return state.merge({weatherData: payload, error: '', isLoading: false});
        case actionTypes.SEARCH_CITY_FAILURE:
            return state.merge({error: payload, weatherData: '', isLoading: false});
        case actionTypes.START_LOADING:
            return state.merge({isLoading: true});
        default:
            return state
    }
}

export default reducer;