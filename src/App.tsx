import { useStyles } from "./style";

function App() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {/* Floating shapes */}
      <div className={classes.floatingShape} style={{ width: 100, height: 100, background: "#22c55e", top: 50, left: 20, animationDuration: "12s" }} />
      <div className={classes.floatingShape} style={{ width: 150, height: 150, background: "#3b82f6", top: 200, left: 300, animationDuration: "15s" }} />
      <div className={classes.floatingShape} style={{ width: 80, height: 80, background: "#facc15", top: 400, left: 100, animationDuration: "10s" }} />

      <div className={classes.box}>
        <h1 className={classes.title}>Coming Soon</h1>
        <p className={classes.subtitle}>
          Our awesome website is under construction. Stay tuned!
        </p>
        <div className={classes.inputGroup}>
          <input className={classes.input} type="email" placeholder="Enter your email" />
          <button className={classes.button}>Notify Me</button>
        </div>
        <div className={classes.footer}>
          © {new Date().getFullYear()} Your Company
        </div>
      </div>
    </div>
  );
}

export default App;