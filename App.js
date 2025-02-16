
//import './App.css';
import Sidebar from './Sidebar';
import Header from './Header';
import Content from './Content'

import React from "react";
import { Box } from "@mui/material";

const App = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      <Box sx={{ display: "flex", flex: 1 }}>
        <Sidebar />
        <Content/>
        <Box sx={{ flex: 1, p: 3 }}>
        </Box>
      </Box>
    </Box>
  );
};

export default App;