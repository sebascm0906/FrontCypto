import React from "react";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material";

const Header = () => (
  <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
    <Toolbar>
      <Typography variant="h6" noWrap component="div">
        Front para el Madhi 
      </Typography>
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ display: "flex", alignItems: "center" }}>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Header;


