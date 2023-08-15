import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import { navbar, articleContent, Home } from "./components/index.ts";
import { url } from "./utils.ts";
const router = new Router();

const app = new Application();

// First we try to serve static files from the _site folder. If that fails, we
// fall through to the router below.
app.use(async (context, next) => {
  try {
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
  }
  await next();
});

router.get("/home", async (context) => (context.response.body = await Home()));
router.get("/nav", async (context) => (context.response.body = await navbar()));

router.get("/article/:article", async (context) => {
  context.response.body = await articleContent(context.params.article);
});

// Enable CORS for All Routes
app.use(oakCors());
app.use(router.routes());
app.use(router.allowedMethods());
console.log(`Server running on ${url()}`);

await app.listen({ port: 8000 });
