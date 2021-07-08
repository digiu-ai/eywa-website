import express, { Request, Response } from "express";
import compression from "compression";
import path from "path";
import fs from "fs";
import { renderReactApp } from "./renderReactApp";
// import { pageService } from "@services";

export const app = express();
app.use(compression());

const indexFile = fs.readFileSync(path.resolve("./build/index.html"), "utf-8");

const getInitialState = async () => ({
  // formStore: {
  //   pages: await pageService.pages(),
  // },
});

const handlePageRequest = async (req: Request, res: Response) => {
  const initialState = await getInitialState();
  const reactAppString = await renderReactApp(req.url, initialState);
  const markup = `<div id="root">
<script>window.__STATE__ = ${JSON.stringify(initialState)}</script>
${reactAppString}
</div>`;
  return res.send(indexFile.replace('<div id="root"></div>', markup));
};

app.get("/", handlePageRequest);


app.use(express.static("./build"));
app.use((req, res) => res.redirect("/"));
