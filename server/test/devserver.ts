import * as next from "next";
import * as path from "path";
import server from "../src/server";
const port = Number.parseInt(process.env.PORT || "3000", 10);
const renderer = next({
  dev: true,
  dir: path.resolve("../client")
});
const app = server(renderer);

renderer.prepare().then(() => {
  app.listen(port, (err: Error) => {
    if (err) {
      throw err;
    }
    // tslint:disable-next-line:no-console
    console.log(`> Ready on http://localhost:${port}`);
  });
});
