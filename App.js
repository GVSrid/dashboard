//import './App.css';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import Content from './Components/Dashboard';
import { ThemeProvider, createTheme } from "@mui/material/styles";

import React from "react";
import { Box } from "@mui/material";
const theme = createTheme();


const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      <Box sx={{ display: "flex", flex: 1 }}>
        <Sidebar />
        <Content />
        <Box sx={{ flex: 1, p: 3 }}>
        </Box>
      </Box>
    </Box>
    </ThemeProvider>
  );
};

export default App;
