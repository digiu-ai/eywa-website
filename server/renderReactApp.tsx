import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../src/App";
import { RootStore, storesContext } from "@stores";
import { StaticRouter } from "react-router-dom";
import { createMemoryHistory } from "history";

export async function renderReactApp(url: string, initialState: any) {
  const mobxStore = new RootStore({
    ...initialState,
    routerStore: { history: createMemoryHistory() },
  });
  return ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <storesContext.Provider value={mobxStore}>
        <App />
      </storesContext.Provider>
    </StaticRouter>
  );
}
