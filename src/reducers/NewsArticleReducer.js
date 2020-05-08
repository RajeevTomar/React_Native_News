import { SELECTED_NEWS_ARTICLE } from '../actions/Type';

const INITIAL_STATE = {
    article: ''
}

export default newsArticleReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SELECTED_NEWS_ARTICLE:
            return {article:action.payload}
        default:
            return state;
    }
}