import { Router } from "https://deno.land/x/oak/mod.ts";
import { navbar, articleContent, Home } from "../components/index.ts";

const router = new Router();

router
.get("/home", async (context) => (context.response.body = await Home()))
.get("/nav", async (context) => (context.response.body = await navbar()))
.get("/article/:article", async (context) => {
  context.response.body = await articleContent(context.params.article);
});

export { router };