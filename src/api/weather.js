import axios from 'axios';
import { config } from '../config';

export const collectWeatherDataByCity= async ({ query, country }) => {
    const data= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}${country?','+country:''}&APPID=${config.API_KEY}`)
    return data;
}

export const collectWeatherDataByPincode= async ({query, country}) => {
    const data= await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${query}${country?','+country:''}&APPID=${config.API_KEY}`)
    return data;
}