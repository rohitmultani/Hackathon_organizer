import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Logo from "../Images/Logo.svg";
import { CardMedia } from "@mui/material";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Toolbar variant="dense">
          <CardMedia
            sx={{ width: 120, height: 50, m: 1 }}
            image={Logo}
            alt="Live from space album cover"
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default NavBar;
