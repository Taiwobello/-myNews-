import { FETCH_GENERAL_NEWS_SUCCESS, FETCH_NEWS_GENERAL,  } from "./generalNewsTypes"

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

        default:
            return state
    }
}

export default generalNewsReducer;