import { SELECTED_NEWS_ARTICLE } from './Type';

export const saveSelectedArticle = (article) => {
    return (dispatch)=> {
        dispatch({ type: SELECTED_NEWS_ARTICLE, payload: article });
    };
};