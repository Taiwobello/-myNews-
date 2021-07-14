import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './rootReducers';

// const store = createStore(rootReducer, applyMiddleware(logger, thunk))

// export default store

const saveToLocalStorage = (state) => {
    const saveState = JSON.stringify(state)
    localStorage.setItem("persistanceState", saveState)
}

const loadFromLocalStorage = () => {
    const savedData = localStorage.getItem("persistanceState");
    if (savedData === null) {
        return undefined
    }
    return JSON.parse(savedData)
}

// const store = createStore(rootReducer, loadFromLocalStorage(), applyMiddleware(logger, thunk))
const store = createStore(rootReducer, applyMiddleware(logger, thunk))

// store.subscribe(() => saveToLocalStorage(store.getState()))

export default store