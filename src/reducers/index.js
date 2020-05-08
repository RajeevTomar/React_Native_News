import {combineReducers} from 'redux';
import httpReducer from '../reducers/HttpReducer';
import articleReducer from './NewsArticleReducer';


export default combineReducers({
    http:httpReducer,
    article:articleReducer
});