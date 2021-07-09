import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import { RootStore, storesContext } from "@stores";
import "./index.css";

const hasState = window.__STATE__ != null;
const initState = window.__STATE__ ?? {};
initState.routerStore = { history: createBrowserHistory() };
delete window.__STATE__;

const mobxStore = new RootStore(initState);
const _jsx = (
  <React.StrictMode>
    <storesContext.Provider value={mobxStore}>
      <Router history={mobxStore.routerStore.history}>
        <App />
      </Router>
    </storesContext.Provider>
  </React.StrictMode>
);
if (hasState) {
  ReactDOM.hydrate(_jsx, document.getElementById("root"));
} else {
  ReactDOM.render(_jsx, document.getElementById("root"));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
