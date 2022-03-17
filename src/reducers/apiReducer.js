const SET_ALL_EPISODES = 'SET_ALL_EPISODES'

const defaultState = {
  items: [],
  isFetching: false
}

function apiReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_ALL_EPISODES:
      return {
        ...state,
        items: action.payload
      }
    default:
      return state
  }
}

function setAllEpisodes(allEpisodes) {
  return {
    type: SET_ALL_EPISODES,
    payload: allEpisodes
  }
}

export { apiReducer, setAllEpisodes }
