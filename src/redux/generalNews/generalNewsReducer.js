import { FETCH_GENERAL_NEWS_SUCCESS, FETCH_NEWS_GENERAL, FETCH_GENERAL_NEWS_FAILURE } from "./generalNewsTypes"

const initialState = {
    loading: true,
    news: [],
    error: ""
}

const generalNewsReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_NEWS_GENERAL:
            return{
                ...state,
                loading: true
            }

        case FETCH_GENERAL_NEWS_SUCCESS:
            return {
                ...state,
                loading: false,
                news: action.payload,
                error: ""
            }

        case FETCH_GENERAL_NEWS_FAILURE:
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

export default generalNewsReducer;