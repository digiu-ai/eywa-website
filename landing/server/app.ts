import express, { Request, Response } from "express";
import compression from "compression";
import path from "path";
import fs from "fs";
import { renderReactApp } from "./renderReactApp";
import { strapiService } from "@services";

export const app = express();
app.use(compression());

const indexFile = fs.readFileSync(path.resolve("./build/index.html"), "utf-8");

const getInitialState = async () => ({
  settingsStore: {
    localizations: await strapiService.localizations()
  }
});

const handlePageRequest = async (req: Request, res: Response) => {
  let initialState = {};
  try {
    initialState = await getInitialState();
  } catch (e) {
    console.log("filed to fetch initial state");
  }
  const reactAppString = await renderReactApp(req.url, initialState);
  const markup = `<div id="root">
<script>window.__STATE__ = ${JSON.stringify(initialState)}</script>
${reactAppString}
</div>`;
  return res.send(indexFile.replace("<div id=\"root\"></div>", markup));
};

app.get("/", handlePageRequest);


app.use(express.static("./build"));
app.use((req, res) => res.redirect("/"));
