import { Tab, Tabs } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setSeason } from '../reducers/selectSeasonReducer'

function Season({ seasons }) {
  const dispatch = useDispatch()

  const [value, setValue] = React.useState(0)

  function handleChange(e, newValue) {
    setValue(newValue)
    dispatch(setSeason(newValue))
  }

  return (
    <Tabs value={value} onChange={handleChange} centered textColor="inherit" indicatorColor="primary">
      {seasons.map(season => (
        <Tab key={season} label={season} />
      ))}
    </Tabs>
  )
}

export default Season
