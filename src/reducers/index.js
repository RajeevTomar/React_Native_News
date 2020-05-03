import {combineReducers} from 'redux';
import httpReducer from '../reducers/HttpReducer';


export default combineReducers({
    http:httpReducer
});