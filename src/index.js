import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.css";
import App from "./App";
import { ThemeProvider } from "@emotion/react";
import theme from "./components/theme";
import { Box, CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <CssBaseline />
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
