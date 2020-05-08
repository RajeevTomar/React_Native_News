import { newsList, newsDetail } from '../constants/State';

export const newsListApi = {
    getNewsList(country) {
        return {
            method: 'top-headlines',
            state: newsList,
            params: {country: country}
        }
    },
    getNewsDetail(id) {
        return {
            method: 'newsDetail',
            state: newsDetail,
            params: { newsId: id }
        }
    }
}