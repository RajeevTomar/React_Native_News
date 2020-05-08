import { HTTP_ERROR, SHOW_LOADING, HTTP_SUCCESS } from '../actions/Type';
import { newsList, newsDetail } from '../constants/State';

const INITIAL_STATE = {
    errorMessage: '',
    isLoading: false
}

export default httpReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case HTTP_SUCCESS:
            getState = httpTostate(action.payload.state, action.payload.response)
            return { ...state, ...getState, errorMessage: '', isLoading: false }
        case HTTP_ERROR:
            return { ...state, errorMessage: action.payload, isLoading: false }
        case SHOW_LOADING:
            return { ...state, isLoading: action.payload }
        default:
            return state;
    }
}

const httpTostate = (state, result) => {
    switch (state) {
        case newsList:
            return { newsListResponse: result }
        case newsDetail:
            return { newsDetail: result }
        default:
            console.log('Resppnse');
            alert('state Response');
            break;
    }
}