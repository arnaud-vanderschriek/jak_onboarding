import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material"
import NavBar from "./NavBar"
import { Outlet } from "react-router";
import { useAppSelector } from "../store/store";

function App() { 
  const { darkMode } = useAppSelector(state => state.ui) 
  const paletteType = darkMode ? 'dark' : 'light';

  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: (paletteType === 'light') ? '#eaeaea' : '#121212'
      }
    }
  });

  return (
    <ThemeProvider theme={ theme }>
      <CssBaseline />
      <NavBar />
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
