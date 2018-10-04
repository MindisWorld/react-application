import { combineReducers } from 'redux';
import searchFormReducer from './SearchForm';
import overlayReducer from './Overlay';

const allReducers = combineReducers({searchFormReducer, overlayReducer});

export default allReducers;