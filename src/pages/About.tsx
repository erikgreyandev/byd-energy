import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({ about: { padding: "60px 20px" }});
export default function About() {
  const s = useStyles();
  return (
    <div id="about" className={s.about}>
      <h2>About BYD Energy</h2>
      <p>We bring electric innovation worldwide.</p>
    </div>
  );
}