import { Box } from "@mui/material";
import React from "react";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import "./styles/App.css";

function App() {
  return (
    <Box>
      <Navbar />
      <MainContent />
    </Box>
  );
}

export default App;
