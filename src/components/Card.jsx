import React from 'react'
import { Card, CardContent, Container, Typography, List, ListItem } from '@mui/material'

function Cards(props) {
  let seasonNumber = 3
  function test() {
    let allSeason = props.allEpisode.map(episode => episode)
    let filteredSeason = allSeason.filter(season => Number(season.season) === seasonNumber)
    console.log(filteredSeason)
  }
  test()
  return (
    <Container sx={{ display: 'flex', flexWrap: 'wrap' }}>
      {props.allEpisode.map(episode => (
        <Card key={episode.episode_id} sx={{ maxWidth: 275, margin: 2, bgcolor: '#34495E', color: 'white' }}>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              {episode.title}
            </Typography>
            <hr />
            <Typography variant="h6" gutterBottom>
              Air date: {episode.air_date}{' '}
            </Typography>
            <hr />
            <Typography variant="button" gutterBottom>
              Season: {episode.season}
            </Typography>
            <hr />
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
