import { createUseStyles } from "react-jss";
import { theme } from "../styles/theme";

const useStyles = createUseStyles({
  footer: {
    background: theme.colors.primary,
    color: theme.colors.white,
    textAlign: "center",
    padding: 25,
    fontFamily: theme.font
  }
});

export default function Footer() {
  const classes = useStyles();
  return <footer className={classes.footer}>© 2026 BYD Energy. All rights reserved.</footer>;
}