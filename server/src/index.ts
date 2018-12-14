import * as express from "express";
import { https } from "firebase-functions";
import next from "next";

const dev = process.env.NODE_ENV !== "production";
const server = next({ dev, conf: { distDir: ".next" } });
const handle = server.getRequestHandler();

const app = express();
app.disable("x-powered-by");
app.get("/users/:uid", async (req: express.Request, res: express.Response) => {
  const uid = req.params.uid;
  res.status(200).send(`You requested user with UID = ${uid}`);
});
app.get("*", (req: express.Request, res: express.Response) => {
  return handle(req, res);
});

export const application = https.onRequest(
  (req: express.Request, res: express.Response) => {
    // tslint:disable-next-line:no-console
    console.log(`File: ${req.originalUrl}`);
    server.prepare().then(() => app(req, res));
  }
);
