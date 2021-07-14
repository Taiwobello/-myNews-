import { FETCH_ENTERTAINMENT_NEWS_SUCCESS, FETCH_NEWS_ENTERTAINMENT,  } from "./entertainmentNewsTypes"

const initialState = {
    loading: true,
    news: [],
    error: ""
}

const entertainmentNewsReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_NEWS_ENTERTAINMENT:
            return{
                ...state,
                loading: true
            }

        case FETCH_ENTERTAINMENT_NEWS_SUCCESS:
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

export default entertainmentNewsReducer;