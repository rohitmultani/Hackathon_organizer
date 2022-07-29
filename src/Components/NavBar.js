import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from "../Images/Logo.svg"
import { CardMedia } from '@mui/material';

const NavBar=()=> {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{backgroundColor:'white'}}>
        <Toolbar variant="dense">
          {/* <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div" sx={{color:'black'}}>
            DPhi
          </Typography> */}
          <CardMedia
          sx={{ width: 120, height: 50,m:1}}
          image={Logo}
          alt="Live from space album cover"
        />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default NavBar;
