import { FETCH_BUSINESS_NEWS_FAILURE, FETCH_BUSINESS_NEWS_SUCCESS, FETCH_NEWS_BUSINESS,  } from "./businessNewsTypes"

const initialState = {
    loading: true,
    news: [],
    error: ""
}

const businessNewsReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_NEWS_BUSINESS:
            return{
                ...state,
                loading: true
            }

        case FETCH_BUSINESS_NEWS_SUCCESS:
            return {
                ...state,
                loading: false,
                news: action.payload,
                error: ""
            }

        case FETCH_BUSINESS_NEWS_FAILURE:
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

export default businessNewsReducer;