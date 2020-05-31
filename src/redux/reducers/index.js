import { locationReducer } from  './location';
import { weatherReducer } from './weather'
import { combineReducers } from 'redux';

export default combineReducers({
    location: locationReducer,
    weather: weatherReducer,
})