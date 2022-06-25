import { composeWithDevTools } from '@redux-devtools/extension'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'

import { apiReducer } from './apiReducer'
import { selectSeasonReducer } from './selectSeasonReducer'

const rootReducer = combineReducers({
  breakingBad: apiReducer,
  season: selectSeasonReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
