import * as actionTypes from './action-types';

export const searchCityStart= (payload) => {
    return {
        type: actionTypes.SEARCH_CITY_START,
        payload: payload
    }
}

export const startLoading= () => {
    return {
        type: actionTypes.START_LOADING
    }
}

export const searchCitySuccess= (payload) => {
    return {
        type: actionTypes.SEARCH_CITY_SUCCESS,
        payload: payload
    }
}

export const searchCityFailure= (payload) => {
    return {
        type: actionTypes.SEARCH_CITY_FAILURE,
        payload: payload
    }
}