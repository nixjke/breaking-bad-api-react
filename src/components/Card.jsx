import React from 'react'
import { Card, CardContent, Container, Typography } from '@mui/material'

function Cards(props) {
  return (
    <Container sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
      {props.allEpisode.map(episode => (
        <Card key={episode.episode_id} sx={{ maxWidth: 275, margin: 2}}>
          <CardContent>
            <Typography gutterBottom>{episode.title}</Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  )
}

export default Cards
