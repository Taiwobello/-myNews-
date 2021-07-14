import {FETCH_BUSINESS_NEWS_SUCCESS, FETCH_NEWS_BUSINESS} from "./businessNewsTypes"

export const fetchNewsBusiness = () => {
    return {
        type: FETCH_NEWS_BUSINESS,
    }
}



export const fetchBusinessNewsSuccess = (news) => {
    return {
        type: FETCH_BUSINESS_NEWS_SUCCESS,
        payload: news
    }
}
