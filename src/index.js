import React from "react";
import ReactDOM from "react-dom/client";
// import "./assets/styles/index.css";
import "./assets/styles/index.css";
import App from "./App";
import { ThemeProvider } from "@emotion/react";
import theme from "./components/theme";
import { CssBaseline } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
