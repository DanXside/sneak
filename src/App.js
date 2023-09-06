import React, { useState, useEffect } from "react";
import HomePage from "./components/pages/HomePage";

import { ThemeProvider } from "@mui/styles";
import theme from './components/mui_styles/theme';

function App() {

  return (
    <div>
      <ThemeProvider theme={theme}>
        <HomePage />
      </ThemeProvider>
    </div>
  );
}

export default App;
