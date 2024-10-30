import React from "react";
import ReactDOM from "react-dom/client";

// import scss
import "./global/style/main.css";

import AuthorizingRouter from "./pages/router/AuthorizingRouter";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <AuthorizingRouter />
  </React.StrictMode>
);

reportWebVitals();
