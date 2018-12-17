import * as express from "express";
import { https } from "firebase-functions";
import * as next from "next";
import server from "./server";

const renderer = next({ dev: false, conf: { distDir: ".next" } });
const app = server(renderer);

export const application = https.onRequest(
  async (req: express.Request, res: express.Response) => {
    return renderer.prepare().then(() => app(req, res));
  }
);
