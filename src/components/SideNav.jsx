import { Avatar, Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import { Menu, MenuItem, Sidebar, useProSidebar } from 'react-pro-sidebar';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import StyleOutlinedIcon from '@mui/icons-material/StyleOutlined';
import SourceOutlinedIcon from '@mui/icons-material/SourceOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';

const SideNav = () => {

  const { collapsed } = useProSidebar();

  const theme = useTheme();

  return (
    <Sidebar
      style={{
        height: '100%',
        top: 'auto',
      }}
      breakPoint='md'
      backgroundColor={theme.palette.neutral.light}
    >
      <Box sx={styles.avatarContainer}>
        <Avatar sx={styles.avatar} alt="User Name" src="/src/assets/react.svg" />
        {!collapsed ? <Typography variant='body2' sx={styles.yourChannel}>Your Channel</Typography> : null}
        {!collapsed ? <Typography variant='overline'>Channel Name</Typography> : null}
      </Box>
      <Menu>
        {/* Menu items */}
        <MenuItem active icon={<DashboardOutlinedIcon/>}>
          <Typography variant='body2'>DashBoard</Typography>
        </MenuItem>
        <MenuItem active icon={<SourceOutlinedIcon/>}>
          <Typography variant='body2'>Content</Typography>
        </MenuItem>
        <MenuItem active icon={<AnalyticsOutlinedIcon/>}>
          <Typography variant='body2'>Analytics</Typography>
        </MenuItem>
        <MenuItem active icon={<StyleOutlinedIcon/>}>
          <Typography variant='body2'>Customization</Typography>
        </MenuItem>
      </Menu>
    </Sidebar>
  )
}

/** @type {import("@mui/material").SxProps} */
const styles = {
  avatarContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    my: 5
  },
  avatar: {
    width: '40%',
    height: 'auto'
  },
  yourChannel: {
    mt: 1
  }
}

export default SideNav;