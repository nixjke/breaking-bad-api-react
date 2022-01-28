import axios from 'axios'
import { setAllEpisodes } from '../reducers/apiReducer'

const BASE_URL = 'https://www.breakingbadapi.com/api/'

export function getBreakingBadAllEpisodes() {
  return async dispath => {
    // const response = await axios.get(BASE_URL + 'episodes')
    // dispath(setAllEpisodes(response.data))
  }
}
