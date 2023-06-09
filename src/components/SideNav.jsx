import { Box, Typography } from '@mui/material';
import React from 'react';
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import StyleOutlinedIcon from '@mui/icons-material/StyleOutlined';
import SourceOutlinedIcon from '@mui/icons-material/SourceOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';

const SideNav = () => {
  return (
    <Sidebar>
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
          <Typography variant='body2'>Analytics</Typography>
        </MenuItem>
      </Menu>
    </Sidebar>
  )
}

export default SideNav;