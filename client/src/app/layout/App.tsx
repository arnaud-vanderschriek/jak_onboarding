import { useEffect, useState } from "react"
import type { Product } from "../models/products"
import Catalog from "../../features/catalog/Catalog"
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material"
import NavBar from "./NavBar"


function App() { 
  const [products, setProducts] = useState<Product[]>([]);
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

  useEffect(() => {
    fetch('/api/products')
    .then(response => response.json())
    .then(data => setProducts(data))
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Box
        sx={{
          minHeight: '100vh',
          background: darkMode 
          ? 'radial-gradient(circle, #d6dbf1ff, #111B27)' 
          : 'radial-gradient(circle, #d1e5eaff, #f0f9ff)',
          py: 6
        }} 
      >
        <Container maxWidth='xl' sx={{mt: 8}}>
          <Catalog products={products} />
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default App
