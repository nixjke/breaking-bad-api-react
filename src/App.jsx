import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { setCount } from './reducers/apiReducer'

function App() {
  const dispatch = useDispatch()

  function onCountClick() {
    dispatch(setCount(8))
  }

  return (
    <div className="App">
      <button onClick={() => onCountClick()}>count</button>
    </div>
  )
}

export default App
