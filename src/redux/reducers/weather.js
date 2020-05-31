import { FETCH_WEATHER, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAILURE } from '../constant';

const initialState = {
    loading: true,
    weatherData: [],
    error: ''
}


export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_WEATHER:
            return { ...state, loading: state.loading }

        case FETCH_WEATHER_SUCCESS:
            return { ...state, weatherData: action.payload, loading: action.loading }

        case FETCH_WEATHER_FAILURE:
            return { ...state, loading: action.loading, weatherData: action.payload }
    
        default:
            return state;;
    }
};