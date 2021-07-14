import { FETCH_HEALTH_NEWS_SUCCESS, FETCH_NEWS_HEALTH,  } from "./healthNewsTypes"

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

        default:
            return state
    }
}

export default healthNewsReducer;