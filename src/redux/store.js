import { createStore, applyMiddleware } from 'redux';
import locationReducer from './reducers';
import thunk from 'redux-thunk';

const store = createStore(locationReducer, applyMiddleware(thunk));

export default store;