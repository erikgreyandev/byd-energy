import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg,#0f172a,#1e293b)",
    color: "#fff",
    fontFamily: "'Comfortaa', sans-serif",
    overflow: "hidden",
    position: "relative",
  },

  floatingShape: {
    position: "absolute",
    borderRadius: "50%",
    opacity: 0.3,
    animation: "$float 10s ease-in-out infinite",
  },

  "@keyframes float": {
    "0%": { transform: "translateY(0) translateX(0)" },
    "50%": { transform: "translateY(-50px) translateX(30px)" },
    "100%": { transform: "translateY(0) translateX(0)" },
  },

  box: {
    zIndex: 1,
    maxWidth: 600,
    padding: 40,
    background: "rgba(255,255,255,0.05)",
    borderRadius: 20,
    textAlign: "center",
    backdropFilter: "blur(10px)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
  },

  title: {
    fontSize: 56,
    fontWeight: 800,
    marginBottom: 20,
    animation: "$fadeIn 1s ease forwards",
  },

  subtitle: {
    fontSize: 18,
    opacity: 0.8,
    marginBottom: 40,
    animation: "$fadeIn 1.5s ease forwards",
  },

  inputGroup: {
    display: "flex",
    gap: 10,
    justifyContent: "center",
    animation: "$fadeIn 2s ease forwards",
  },

  input: {
    padding: "12px 16px",
    borderRadius: 6,
    border: "none",
    width: 240,
    outline: "none",
  },

  button: {
    padding: "12px 20px",
    borderRadius: 6,
    border: "none",
    cursor: "pointer",
    background: "#22c55e",
    color: "#fff",
    fontWeight: 600,
    transition: "0.2s",
    "&:hover": { background: "#16a34a" },
  },

  footer: {
    marginTop: 40,
    opacity: 0.6,
    fontSize: 14,
  },

  "@keyframes fadeIn": {
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  },
});