import axios from 'axios';
import { FETCH_WEATHER, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAILURE } from '../constant';
import { API_KEY } from '../../apiKey.js'

export function fetchWeeklyWeather() {
  console.log("called me to init");
    return {
        type: FETCH_WEATHER,
        loading: true,
    }
}

export function fetchWeeklyWeatherSuccess(data) {
  console.log("called me to success");
    return {
        type: FETCH_WEATHER_SUCCESS,
        loading: false,
        payload: data
    }
}

export function fetchWeeklyWeatherFailure(error) {
    return {
        type: FETCH_WEATHER_FAILURE,
        loading: false,
        payload: error
    }
}


export const fetchWeeklyWeatherDataAction = (latitude, longitude) => {
    return (dispatch) => {
      dispatch(fetchWeeklyWeather())
      axios
        .get( `https://api.openweathermap.org/data/2.5/onecall?lat=${ latitude }&lon=${ longitude }&exclude={minutely}&appid=${ API_KEY }` )
        .then(response => {
          // response.data is the users
          const weather = response.data
          dispatch(fetchWeeklyWeatherSuccess(weather))
        })
        .catch(error => {
          // error.message is the error message
          dispatch(fetchWeeklyWeatherFailure(error.message))
        })
    }
  }