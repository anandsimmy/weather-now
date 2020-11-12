import React from 'react'
import '../styles.scss'

const WeatherInfoBox= ({ weatherData: { data } }) => {
    
    return (
        <div className='weather-info'>
            <img className='weather-info-icon' alt='weather' src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`} />
            <div className='weather-info-item'><span className='weather-info-label'>Place: </span>{data.name}</div>
            <div className='weather-info-item'><span className='weather-info-label'>Weather: </span>{data.weather[0].main}</div>
            <div className='weather-info-item'><span className='weather-info-label'>Weather-description: </span>{data.weather[0].description}</div>
            <div className='weather-info-item'><span className='weather-info-label'>Temperature: </span>{(data.main.temp- 273.15).toFixed(2)}°C</div>
            <div className='weather-info-item'><span className='weather-info-label'>Wind-speed: </span>{data.wind.speed} m/s</div>
            <div className='weather-info-item'><span className='weather-info-label'>Cloudiness: </span> {data.clouds.all} %</div>
            <div className='weather-info-item'><span className='weather-info-label'>Pressure: </span>{data.main.pressure} hPa</div>
            <div className='weather-info-item'><span className='weather-info-label'>Humidity: </span> {data.main.humidity} %</div>
        </div>
    )
}

export default WeatherInfoBox;