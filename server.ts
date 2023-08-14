import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import { navbar,articleContent } from "./components/index.ts";

const router = new Router();
router.get("/", async (context) => (context.response.body = await navbar()));

router.get("/:article", async (context) => {
  context.response.body = await articleContent(context.params.article);
});

const app = new Application();
// Enable CORS for All Routes
app.use(oakCors());
app.use(router.routes());
app.use(router.allowedMethods());
console.log("Server running on http://localhost:8000");

await app.listen({ port: 8000 });
