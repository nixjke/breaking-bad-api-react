import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import './App.css'
import { getBreakingBadAllEpisodes } from './actions/fetchApi'
import Header from './components/Header'
import Season from './components/Season'
import Cards from './components/Card'
import { Container } from '@mui/material'

function App() {
  const dispatch = useDispatch()
  const allEpisode = useSelector(state => state.api.items)

  React.useEffect(() => {
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
      <Container sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
        {allEpisode.map(episode => (
          <Cards key={episode.episode_id} episode={episode} />
        ))}
      </Container>
    </div>
  )
}

export default App
