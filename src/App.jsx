import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import './App.css'
import { getBreakingBadAllEpisodes } from './actions/fetchApi'
import Header from './components/Header'

function App() {
  // const dispatch = useDispatch()
  // const allEpisode = useSelector(state => state.api.items)
  // getBreakingBadAllEpisodes()
  // React.useEffect(() => {
  //   dispatch(getBreakingBadAllEpisodes())
  // }, [])

  return (
    <div className="App">
      <Header />
    </div>
  )
}

export default App
