import { Card, CardContent, Container, List, ListItem, Typography } from '@mui/material'

function Cards({ allEpisode }) {
  return (
    <Container sx={{ display: 'flex', flexWrap: 'wrap' }}>
      {allEpisode.map(episode => (
        <Card key={episode.episode_id} sx={{ maxWidth: 275, margin: 2, bgcolor: '#34495E', color: 'white' }}>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              {episode.title}
            </Typography>
            <hr />
            <Typography variant="h6" gutterBottom>
              Air date: {episode.air_date}
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
