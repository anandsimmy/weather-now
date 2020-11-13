import { takeEvery, put, all, call } from 'redux-saga/effects'
import {
    searchCitySuccess,
    searchCityFailure,
    startLoading
} from './actions'
import { collectWeatherDataByCity, collectWeatherDataByPincode } from '../api/weather'
import * as actionTypes from './action-types';

//handlers
export function* searchCity({ payload:{ query, country, type } }){
    try{ 
        yield put(startLoading())
        let data= ''
        switch(type){
            case 'city':
                data= yield collectWeatherDataByCity({query, country})
                yield put(searchCitySuccess(data))
                break
            case 'pincode':
                data= yield collectWeatherDataByPincode({query, country})
                yield put(searchCitySuccess(data))
                break
            default:
                yield put(searchCitySuccess(data))
        }
        
    }
    catch(error){
        yield put(searchCityFailure(error))
    }
}

//listeners
export function* onSearchCityStart(){
    yield takeEvery(actionTypes.SEARCH_CITY_START, searchCity)
}

export function* rootSaga(){
    yield all([
        call(onSearchCityStart)
    ])
}