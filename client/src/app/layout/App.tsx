import { useState } from "react"
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material"
import NavBar from "./NavBar"
import { Outlet } from "react-router";


function App() { 
  const [isDarkMode, setIsDarkMode] = useState(false);
  const darkMode = isDarkMode;
  const paletteType = darkMode ? 'dark' : 'light';

  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: (paletteType === 'light') ? '#eaeaea' : '#121212'
      }
    }
  });

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <ThemeProvider theme={ theme }>
      <CssBaseline />
      <NavBar isDarkMode={ isDarkMode } toggleDarkMode={ toggleDarkMode } />
      <Box
        sx={{
          minHeight: '100vh',
          background: darkMode 
          ? 'radial-gradient(circle, #d6dbf1ff, #111B27)' 
          : 'radial-gradient(circle, #d1e5eaff, #f0f9ff)',
          py: 6
        }} 
      >
        <Container maxWidth='xl' sx={{ mt: 8 }}>
          <Outlet />
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default App
