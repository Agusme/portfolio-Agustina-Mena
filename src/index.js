import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./i18n.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// Load web vitals only in development or if explicitly needed
if (process.env.NODE_ENV === "development") {
  import("./reportWebVitals").then((module) => {
    module.default(console.log);
  });
}
