import * as express from "express";
import { https } from "firebase-functions";
import * as next from "next";
import api from "./api";

const dev = process.env.NODE_ENV !== "production";
const renderer = next({ dev, conf: { distDir: ".next" } });
const handle = renderer.getRequestHandler();

const app = express();
app.disable("x-powered-by");
app.use("/api", api());
app.get("*", async (req: express.Request, res: express.Response) => {
  return handle(req, res);
});

// tslint:disable-next-line:typedef
export const application = https.onRequest(async (req, res) =>
  renderer.prepare().then(() => app(req, res))
);
