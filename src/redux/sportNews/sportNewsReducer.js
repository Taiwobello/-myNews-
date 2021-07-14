import { FETCH_NEWS_SPORTS, FETCH_SPORT_NEWS_SUCCESS } from "./sportNewsTypes"

const initialState = {
    loading: true,
    news: [],
    error: ""
}

const sportNewsReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_NEWS_SPORTS:
            return{
                ...state,
                loading: true
            }

        case FETCH_SPORT_NEWS_SUCCESS:
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

export default sportNewsReducer;