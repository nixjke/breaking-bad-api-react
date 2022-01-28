import React from 'react'
import { Container, AppBar, Toolbar, Typography, BottomNavigation, BottomNavigationAction } from '@mui/material'
import Filter1Icon from '@mui/icons-material/Filter1'
import Filter2Icon from '@mui/icons-material/Filter2'
import Filter3Icon from '@mui/icons-material/Filter3'
import Filter4Icon from '@mui/icons-material/Filter4'
import Filter5Icon from '@mui/icons-material/Filter5'

function Header() {
  const [value, setValue] = React.useState(0)

  return (
    <AppBar color="transparent">
      <Toolbar>
        <Container sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography variant="h5" component="h5" sx={{ cursor: 'pointer' }}>
            Breaking Bad API
          </Typography>
        </Container>
        <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="h6" mr={1}>
            Season:
          </Typography>
          <BottomNavigation
            sx={{ height: 40, borderRadius: '10px' }}
            value={value}
            showLabels
            onChange={(event, newValue) => {
              setValue(newValue)
            }}
          >
            <BottomNavigationAction sx={{ bgcolor: '#282c34', color: '#fff' }} icon={<Filter1Icon />} />
            <BottomNavigationAction sx={{ bgcolor: '#282c34', color: '#fff' }} icon={<Filter2Icon />} />
            <BottomNavigationAction sx={{ bgcolor: '#282c34', color: '#fff' }} icon={<Filter3Icon />} />
            <BottomNavigationAction sx={{ bgcolor: '#282c34', color: '#fff' }} icon={<Filter4Icon />} />
            <BottomNavigationAction sx={{ bgcolor: '#282c34', color: '#fff' }} icon={<Filter5Icon />} />
          </BottomNavigation>
        </Container>
      </Toolbar>
    </AppBar>
  )
}

export default Header
