import { FETCH_HEALTH_NEWS_FAILURE, FETCH_HEALTH_NEWS_SUCCESS, FETCH_NEWS_HEALTH,  } from "./healthNewsTypes"

const initialState = {
    loading: true,
    news: [],
    error: ""
}

const healthNewsReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_NEWS_HEALTH:
            return{
                ...state,
                loading: true
            }

        case FETCH_HEALTH_NEWS_SUCCESS:
            return {
                ...state,
                loading: false,
                news: action.payload,
                error: ""
            }

        case FETCH_HEALTH_NEWS_FAILURE:
            return {
                ...state,
                loading: false,
                news: [],
                error: action.payload
            }

        default:
            return state
    }
}

export default healthNewsReducer;