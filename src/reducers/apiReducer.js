const SET_ALL_EPISODES = 'SET_ALL_EPISODES'

const defaultState = {
  items: [],
  isFetching: false
}

export default function apiReducer(state = defaultState, action) {
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

export function setAllEpisodes(allEpisodes) {
  return {
    type: SET_ALL_EPISODES,
    payload: allEpisodes
  }
}
