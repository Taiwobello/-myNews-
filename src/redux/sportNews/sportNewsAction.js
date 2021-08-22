import { FETCH_NEWS_SPORTS, FETCH_SPORT_NEWS_FAILURE, FETCH_SPORT_NEWS_SUCCESS } from "./sportNewsTypes"

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

export const fetchSportFailure = error => {
    return {
        type: FETCH_SPORT_NEWS_FAILURE,
        payload: error
    }
}