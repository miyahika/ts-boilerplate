import * as express from "express";
import { https } from "firebase-functions";
import next from "next";

const dev = process.env.NODE_ENV !== "production";
const server = next({ dev, conf: { distDir: ".next" } });
const handle = server.getRequestHandler();

export const application = https.onRequest(
  (req: express.Request, res: express.Response) => {
    // tslint:disable-next-line:no-console
    console.log(`File: ${req.originalUrl}`);
    return server.prepare().then(() => handle(req, res));
  }
);
