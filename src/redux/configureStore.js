import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import greetingsReducer from './greetings/greetings'

const middleware = [thunk, logger]

const reducer = combineReducers({ greetingsReducer })

const store = createStore(reducer, applyMiddleware(...middleware))

export default store