import { https } from "firebase-functions";
import * as next from "next";
import server from "./server";

const renderer = next({ dev: false, conf: { distDir: ".next" } });
const app = server(renderer);

export const application = https.onRequest(app);
