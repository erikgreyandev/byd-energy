import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({ contact: { padding: "60px 20px" }});
export default function Contact() {
  const s = useStyles();
  return (
    <div id="contact" className={s.contact}>
      <h2>Contact Us</h2>
      <p>Email: support@bydenergy.dev</p>
    </div>
  );
}