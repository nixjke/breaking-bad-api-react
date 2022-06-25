const SELECT_SEASON = 'SELECT_SEASON'
const defaultState = 1

function selectSeasonReducer(state = defaultState, action) {
  switch (action.type) {
    case SELECT_SEASON:
      return action.payload + 1
    default:
      return state
  }
}

function setSeason(season) {
  return {
    type: SELECT_SEASON,
    payload: season,
  }
}

export { selectSeasonReducer, setSeason }
