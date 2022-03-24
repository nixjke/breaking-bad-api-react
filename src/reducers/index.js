import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import { apiReducer } from './apiReducer'
import { selectSeasonReducer } from './selectSeasonReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  apiReducer,
  selectSeasonReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
