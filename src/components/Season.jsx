import React from 'react'
import { Tabs, Tab } from '@mui/material'

function Season(props) {
  const [value, setValue] = React.useState(0)

  function handleChange(e, newValue) {
    setValue(newValue)
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
