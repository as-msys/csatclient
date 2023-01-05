import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#3F51B5",
    },
  },
  typography: {
    logoHeader: {
      fontWeight: 200,
      fontSize: "2rem",
      marginLeft: "1rem",
      my: 2,
    },
    navbar: {
      marginRight: "2rem",
      marginTop: "2rem",
      fontSize: "1.2rem",
      color: "#000000",
    },
    highlightLogo: {
      color: "#212121",
      fontWeight: 700,
    },
    header: {
      color: "#000000",
      fontSize: "1.6rem",
      lineHeight: "120%",
      fontWeight: "500",
      marginBottom: "1.5rem",
    },
    body: {
      color: "#4F4F4F",
      fontSize: "1rem",
      lineHeight: "1.5rem",
      fontWeight: "200",
      marginRight: "8rem",
    },
    subHeader: {
      fontWeight: "400",
      lineHeight: "1rem",
      color: "#757575",
      fontSize: "0.9rem",
      marginBottom: "0.5rem",
    },
    questionText: {
      fontSize: "1.6rem",
      fontWeight: 600,
      textAlign: "center",
    },
    answerText: {
      fontWeight: 500,
      fontSize: "1.1rem",
      lineHeight: "1rem",
    },
  },
});

export default theme;
