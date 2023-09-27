import React, { useState, useEffect } from "react";

import { ThemeProvider } from "@mui/styles";
import theme from './components/mui_styles/theme';
import { OrderContext } from "./components/context";
import { HashRouter, Route, Routes } from "react-router-dom";
import { publicRouter } from "./components/router/routes";

function App() {
  const [order, setOrder] = useState({item: [], count: 0, totalCount: 0 });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <OrderContext.Provider value={{order, setOrder}} >
          <HashRouter>
            <Routes>
              {publicRouter.map(route => 
                <Route key={route.path} path={route.path} element={route.element} />
              )}
            </Routes>
          </HashRouter>
        </OrderContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
