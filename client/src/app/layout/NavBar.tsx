import { DarkMode, LightMode } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

type Props = {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

export default function NavBar({isDarkMode, toggleDarkMode}: Props) {
  return (
    <AppBar 
        position="fixed"
        sx={{
            display: 'flex',
            flexDirection: 'row',
        }}
    
    >
        <Toolbar>
            <Typography variant='h6'>Re-Store</Typography>
            <IconButton sx={{color: 'white',  marginLeft: '10px'}} onClick={toggleDarkMode}>
                {isDarkMode ? <DarkMode /> : <LightMode /> }
            </IconButton>
        </Toolbar>
    </AppBar>
  )
}