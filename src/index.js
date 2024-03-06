import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyles } from "./GlobalStyles";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <GlobalStyles />
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
