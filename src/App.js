import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import { Box } from "@mui/material";

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <Header />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Content />
      </Box>
    </Box>
  );
}

export default App;



