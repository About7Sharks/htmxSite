import { renderMarkdown } from "https://deno.land/x/markdown_renderer/mod.ts";
import { articles, createHeader } from "../utils.ts";

export const articleContent = async (title: string) => {
  let { data, content } = await articles.find((a) => a.data.title === title);
  let md = renderMarkdown(content, { allowedTags: ["img", "svg"] });
  let header = createHeader(data);
  return header + md;
};
