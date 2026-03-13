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
        <h1 className={classes.title}>Շուտով կլինի մեր կայքը</h1>
        <p className={classes.subtitle}>
          Մնացեք կապի մեջ և տեղեկացեք նորություններին առաջինը։
        </p>
        <div className={classes.inputGroup}>
          <input className={classes.input} type="email" placeholder="Ձեր էլ․ հասցեն" />
          <button className={classes.button}>Ծանուցել ինձ</button>
        </div>
        <div className={classes.footer}>
          © {new Date().getFullYear()} BYD Energy
        </div>
      </div>
    </div>
  );
}

export default App;