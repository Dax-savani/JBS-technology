import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
  },
  pallete: {
    black: "#000000",
    primary: "#0086FF",
    gray: "rgba(0, 0, 0, 0.50)",
    litePrimary: "rgba(0,134,255,0.5)",
    liteGreen: "rgba(91,212,129,1)",
    greenBackground: "rgba(86,186,122,1)",
    liteGray: "rgba(250,250,250,1)",
    footerGray: "rgba(255,255,255,0.8)",
    darkGray: "rgba(62,62,62,1)",
    footerWhite: "rgba(255,255,255,1)",
  },
});
export default theme;
