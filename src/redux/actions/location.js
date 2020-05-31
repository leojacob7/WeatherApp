import axios from 'axios';
import { FETCH_LOCATION, FETCH_LOCATION_SUCCESS, FETCH_LOCATION_FAILURE } from '../constant'

export function fetchLocation() {
    return {
        type: FETCH_LOCATION,
        loading: true,
    }
}

export function fetchLocationSuccess(data) {
    return {
        type: FETCH_LOCATION_SUCCESS,
        loading: false,
        payload: data
    }
}

export function fetchLocationFailure(error) {
    return {
        type: FETCH_LOCATION_FAILURE,
        loading: false,
        payload: error
    }
}


export const fetchLocationAction = () => {
    return (dispatch) => {
      dispatch(fetchLocation())
      axios
        .get('http://ip-api.com/json')
        .then(response => {
          // response.data is the users
          const location = response.data
          dispatch(fetchLocationSuccess(location))
        })
        .catch(error => {
          // error.message is the error message
          dispatch(fetchLocationFailure(error.message))
        })
    }
  }