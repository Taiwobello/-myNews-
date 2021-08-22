import { combineReducers } from "redux";
import generalNewsReducer from "./generalNews/generalNewsReducer";
import sportNewsReducer from "./sportNews/sportNewsReducer";
import entertainmentNewsReducer from "./entertainmentNews/entertainmentNewsReducer"
import businessNewsReducer from "./businessNews/businessNewsReducer"
import healthNewsReducer from "./healthNews/healthNewsReducer"

const rootReducer = combineReducers({
    generalNews: generalNewsReducer,
    sportsNews: sportNewsReducer,
    entertainmentNews: entertainmentNewsReducer,
    businessNews: businessNewsReducer,
    healthNews: healthNewsReducer
})

export default rootReducer