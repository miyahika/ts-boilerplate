import * as express from "express";
import { add } from "../logic/calc";

export default function(): express.Router {
  const router = express.Router();
  router.use(
    (
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) => {
      if (req.accepts("json")) {
        return next();
      }
      return res.redirect(303, "/");
    }
  );

  router.get(
    "/add/:l/:r",
    async (req: express.Request, res: express.Response) => {
      const l = Number(req.params.l);
      const r = Number(req.params.r);
      const result = {
        left: l,
        right: r,
        result: add(l, r)
      };
      res.status(200).json(result);
    }
  );

  router.get(
    "/users/:uid",
    async (req: express.Request, res: express.Response) => {
      const id = req.params.uid;
      res.status(200).json({
        id,
        name: "john doe"
      });
    }
  );

  return router;
}
