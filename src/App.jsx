import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import { getBreakingBadAllEpisodes } from './actions/fetchApi'
import Header from './components/Header'
import Season from './components/Season'
import Cards from './components/Card'

function App() {
  const dispatch = useDispatch()
  const allEpisode = useSelector(state => state.breakingBad.items)
  const seasonNumber = useSelector(state => state.season)

  function setSeason() {
    let allSeries = allEpisode.map(episode => episode)
    return allSeries.filter(series => Number(series.season) === seasonNumber)
  }

  React.useEffect(() => {
    // eslint-disable-next-line
    dispatch(getBreakingBadAllEpisodes())
  }, [])

  function getSeasons(allEpisode) {
    let seasons = []
    for (let episode of allEpisode) {
      if (seasons.find(item => Number(item) === Number(episode.season)) === undefined) {
        seasons.push(episode.season)
      }
    }
    return seasons
  }

  return (
    <div className="App">
      <Header />
      <Season seasons={getSeasons(allEpisode)} />
      <Cards allEpisode={setSeason(allEpisode)} />
    </div>
  )
}

export default App
