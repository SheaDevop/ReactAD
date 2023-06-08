import React from 'react';
import { AppBar, Badge, Box, IconButton, Toolbar, Typography } from '@mui/material';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const AppHeader = () => {
  return (
    <AppBar position='sticky' sx={styles.appBar}>
      <Toolbar>
        {/* Menu icon */}
        <IconButton onClick={() => console.log('clicked')} color="secondary">
          <MenuTwoToneIcon />
        </IconButton>

        {/* AppBar logo */}
        <Box component='img' sx={styles.appLogo} src='/src/assets/react.svg'/>

        {/* Notifications icon */}
        <IconButton title='Notifications' color='secondary'>
          <Badge badgeContent={13} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>

        {/* Settings icon */}
        <IconButton title='Settings' color='secondary'>
          <SettingsIcon />
        </IconButton>

        {/* Logout icon */}
        <IconButton title='Logout' color='secondary'>
          <LogoutIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

/** @type {import("@mui/material").SxProps} */
const styles = {
  appBar: {
    bgcolor: 'neutral.main'
  },
  appLogo: {
    borderRadius: 2,
    width: 80,
    ml: 2,
    cursor: 'pointer'
  }
}

export default AppHeader;
