import server from "@src/server";
import * as next from "next";
import * as path from "path";

const port = Number.parseInt(process.env.PORT || "3000", 10);
const renderer = next({
  dev: true,
  dir: path.resolve("client")
});
const app = server(renderer);

// tslint:disable-next-line:no-floating-promises
renderer.prepare().then(() => {
  app.listen(port, (err: Error) => {
    if (err) {
      throw err;
    }
    // tslint:disable-next-line:no-console
    console.log(`> Ready on http://localhost:${port}`);
  });
});
