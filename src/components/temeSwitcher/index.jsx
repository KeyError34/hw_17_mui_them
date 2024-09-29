
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Button,
  IconButton,
  CssBaseline,
} from '@mui/material';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function SimpleInterfaces() {
  const [iconToggled, setIconToggled] = useState(false);
  const [darkMode, setDarkMode] = useState(false); 

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light', 
    },
  });

  const handleIconToggle = () => {
    setIconToggled(!iconToggled);
  };

  const handleThemeToggle = () => {
    setDarkMode(!darkMode); 
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <AppBar position="static">
          <Toolbar style={{display:"flex", flexDirection:"column"}}>
            <Typography variant="h6">
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </Typography>
            <Button onClick={handleThemeToggle} color="inherit">
              {darkMode ?  'Change to light': 'Change to dark'}
            </Button>
          </Toolbar>
        </AppBar>

        <div style={{ padding: '20px' }}>
          <Typography variant="h4" gutterBottom>
            Enter your data
          </Typography>
          <TextField
            variant="outlined"
            label="Name"
            fullWidth
            margin="normal"
          />
          <TextField
            variant="outlined"
            label="Email"
            fullWidth
            margin="normal"
          />
        </div>
        <Button variant="contained">Send</Button>
        <div>
          <IconButton onClick={handleIconToggle}>
            {iconToggled ? (
              <CheckCircleRoundedIcon />
            ) : (
              <HighlightOffRoundedIcon />
            )}
          </IconButton>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default SimpleInterfaces;