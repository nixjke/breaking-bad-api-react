import React from 'react'
import { Card, CardContent, Container, Typography, List, ListItem } from '@mui/material'

function Cards(props) {
  return (
    <Container sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
      {props.allEpisode.map(episode => (
        <Card key={episode.episode_id} sx={{ maxWidth: 275, margin: 2 }}>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              {episode.title}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Air date: {episode.air_date}{' '}
            </Typography>
            <Typography variant="button" gutterBottom>
              Season: {episode.season}
            </Typography>
          </CardContent>
          <List component="nav" aria-label="mailbox folders">
            {episode.characters.map(character => (
              <ListItem key={character} button>
                {character}
              </ListItem>
            ))}
          </List>
        </Card>
      ))}
    </Container>
  )
}

export default Cards
