import * as express from "express";
import * as next from "next";
import api from "./api";

export default function(renderer: next.Server): express.Express {
  const handle = renderer.getRequestHandler();

  const app = express();
  app.disable("x-powered-by");
  app.get("/p/:id", (req: express.Request, res: express.Response) => {
    renderer.render(req, res, "/post", { id: req.params.id });
  });
  app.use("/api", api());
  app.get("*", async (req: express.Request, res: express.Response) => {
    return handle(req, res);
  });
  return app;
}
