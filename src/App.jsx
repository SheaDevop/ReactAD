import React from "react";
import './App.css';
import { Box, CssBaseline, ThemeProvider, Typography } from "@mui/material";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import theme from './config/theme';
import SideNav from "./components/SideNav";
import AppHeader from "./components/AppHeader";

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppHeader />
        <Box>
          <SideNav />
          <Box component={'main'}>
          </Box>
        </Box>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App;
