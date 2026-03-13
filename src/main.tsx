import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// Analytics
import "./analytics/analytics";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);