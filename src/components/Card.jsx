import React from 'react'
import { Card, CardContent, Typography } from '@mui/material'

function Cards(allEpisode) {
  console.log(allEpisode)
  return (
    <Card sx={{ maxWidth: 275, margin: 2 }}>
      <CardContent>
        <Typography gutterBottom>{allEpisode.episode.title}</Typography>
      </CardContent>
    </Card>
  )
}

export default Cards
