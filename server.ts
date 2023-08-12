import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import { renderMarkdown } from "https://deno.land/x/markdown_renderer/mod.ts";
import { articleList, articles, createHeader } from "./utils.ts";

const router = new Router();

router.get("/", (context) => (context.response.body = articleList));

router.get("/:article", async (context) => {
  const { article } = context.params;
  let { data, content } = articles.find((a) => a.data.title === article);
  let md = renderMarkdown(content, { allowedTags: ["img", "svg"] });
  let header = createHeader(data);
  context.response.body = header + md;
});

const app = new Application();
// Enable CORS for All Routes
app.use(oakCors());
app.use(router.routes());
app.use(router.allowedMethods());
console.log("Server running on http://localhost:8000");
await app.listen({ port: 8000 });
