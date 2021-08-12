import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StateProvider } from "./StateProvider";
import FilterSearchPage from "./pages/FilterSearchPage";



ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
      <App />
    <FilterSearchPage/>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
