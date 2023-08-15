import { Application } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import { router } from "./router.ts";
import {
  bold,
  yellow,
  green,
} from "https://deno.land/std@0.194.0/fmt/colors.ts";

export const app = new Application();
// Testing if this triggers a redeploy
// First we try to serve static files from the _site folder. If that fails, we
// fall through to the router below.
app.use(async (context, next) => {
  try {
    console.log(bold("trying to serve static files"));
    await context.send({
      root: `${Deno.cwd()}`,
      index: "index.html",
    });
  } catch {
    await next();
  }
});
// this should run before any other middleware
app.use(async (context, next) => {
  // we want to see if this is the site or if it was a direct request
  // well check hx-request header as our site will send this
  const {
    request: { headers },
  } = context;
  if (!headers.get("hx-request")) {
    context.response.redirect("/");
    console.log(bold("non hx-request") + yellow(` rerouting`));
  }
//   get ip address
    const ip = context.request.ip;
    console.log(bold("ip address: ") + green(`${ip}`));
    // user agent
    const ua = context.request.headers.get("user-agent");
    console.log(bold("user agent: ") + green(`${ua}`));
  console.log(bold("hx-request") + green(` received`));
  await next();
});

// Enable CORS for All Routes
app.use(oakCors());
app.use(router.routes());
app.use(router.allowedMethods());

export default app;
