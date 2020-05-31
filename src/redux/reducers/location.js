import { FETCH_LOCATION, FETCH_LOCATION_SUCCESS, FETCH_LOCATION_FAILURE } from '../constant';

const initialState = {
    loading: true,
    data: [],
    error: ''
}


export const locationReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LOCATION:
            return { ...state, loading: state.loading }

        case FETCH_LOCATION_SUCCESS:
            return { ...state, data: action.payload, loading: action.loading }

        case FETCH_LOCATION_FAILURE:
            return { ...state, loading: action.loading, data: action.payload }
    
        default:
            return state;;
    }
};