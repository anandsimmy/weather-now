import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';
import SearchBar from '../components/SearchBar';
import Dropdown from '../components/Dropdown';
import WeatherInfoBox from '../components/WeatherInfoBox'
import Logo from '../components/Logo'
import { searchCityStart } from '../redux/actions'
import '../styles.scss'

const Home=({ weatherData, error, isLoading, dispatchSearchCityStart  }) => {

  const [query, changeQuery]= useState('') ;
  const [country, changeCountry]= useState('') ;
  const handleChange=(e) => {
    changeQuery(e.target.value);
  }

  const handleCountry=(e) => {
    changeCountry(e.target.value);
  }

  const handleSubmit=(e) => {
    if(e.type==='click' || e.keyCode===13){
      if(isNaN(query)){
        dispatchSearchCityStart({query, country, type: 'city'});
      }
      else{
        dispatchSearchCityStart({query, country, type: 'pincode'});
      }
      changeQuery('');
      changeCountry(0);
    }
  }
  
  useEffect(()=>{
    dispatchSearchCityStart({query: 'bangalore', type: 'city'})
  }, [])


  return (
    !isLoading ?
    <div className={`App ${weatherData.data?'Success':null}`}>
        <Logo error={error}/>
        <div className='main'>
          <SearchBar value={query} handleChange={handleChange} handleSubmit={handleSubmit}/>
          <Dropdown value={country} handleCountry={handleCountry}/>
          <button  className='submit' type='submit' onClick={handleSubmit} onKeyDown={handleSubmit}>Submit</button>
        </div>
        {
          get(weatherData, 'data') ? 
          <WeatherInfoBox weatherData={weatherData}/> : null
        }
        {
          error?
          <div className='weather-error'>Place not found! Please try again</div> : null
        }
    </div> :
    <div className='loading-container'>
      <div className='loader'></div>
    </div>
  );
  }

const mapStateToProps= (state) => {
  return({
    weatherData: state.get('weatherData'),
    error: state.get('error'),
    isLoading: state.get('isLoading')
})
}

const mapDispatchToProps= (dispatch) => ({
  dispatchSearchCityStart: (payload) => {dispatch(searchCityStart(payload))}
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);