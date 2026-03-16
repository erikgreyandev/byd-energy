import { createUseStyles } from "react-jss";
import { theme } from "../styles/theme";

const useStyles = createUseStyles({
  header: {
    background: theme.colors.primary,
    color: theme.colors.white,
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 50px",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    fontFamily: theme.font
  },
  logo: {
    fontWeight: 700,
    fontSize: 26,
    display: "flex",
    alignItems: "center",
    "& img": { height: 45, marginRight: 10 },
  },
  nav: {
    "& a": {
      color: theme.colors.white,
      marginLeft: 25,
      textDecoration: "none",
      fontSize: 16,
      fontWeight: 500,
      "&:hover": { color: theme.colors.accent },
    }
  }
});

export default function Header() {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src="https://bydenergy.erikgreyan.dev/favicon.ico" alt="BYD Logo" />
        BYD Energy
      </div>
      <nav className={classes.nav}>
        <a href="#home">Home</a>
        <a href="#cars">Cars</a>
        <a href="#compare">Compare</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}