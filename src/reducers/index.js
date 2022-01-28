import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import apiReducer from './apiReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  api: apiReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
