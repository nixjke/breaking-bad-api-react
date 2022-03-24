import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSeason } from '../reducers/selectSeasonReducer'
import { Tabs, Tab } from '@mui/material'

function Season(props) {
  const dispatch = useDispatch()
  const [value, setValue] = React.useState(0)

  function handleChange(e, newValue) {
    setValue(newValue)
    dispatch(setSeason(newValue))
  }

  return (
    <Tabs value={value} onChange={handleChange} centered textColor="inherit" indicatorColor="primary">
      {props.seasons.map(season => (
        <Tab key={season} label={season} />
      ))}
    </Tabs>
  )
}

export default Season
