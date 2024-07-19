import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import "./Style.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div class="App">
      <h1>Weather App</h1>
      <App />
      <footer>
        This project was coded by Øzge Bagci and is open-sourced on{" "}
        <a
          href="https://github.com/OzgeBagci/weather-react-app"
          target="_blank"
          rel="noreferrer"
        >
          Github{" "}
        </a>
        and hosted on{" "}
        <a
          href="https://app.netlify.com/teams/ozgebagci/overview"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  </StrictMode>
);
