import { FETCH_NEWS_SPORTS, FETCH_SPORT_NEWS_SUCCESS } from "./sportNewsTypes"

export const fetchNewsSports = () => {
    return {
        type: FETCH_NEWS_SPORTS,
    }
}

export const fetchSportNewsSuccess = (news) => {
    return {
        type: FETCH_SPORT_NEWS_SUCCESS,
        payload: news
    }
}