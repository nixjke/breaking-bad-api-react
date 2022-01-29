import { Box, AppBar, Toolbar, Typography } from '@mui/material'

function Header() {
  return (
    <AppBar position="static"  color="transparent">
      <Toolbar>
        <Box sx={{ mx: 'auto' }}>
          <Typography variant="h5" component="h1" sx={{ cursor: 'pointer' }}>
            Breaking Bad API
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
