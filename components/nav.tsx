/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h, renderToString } from "https://deno.land/x/jsx/mod.ts";
import { articles } from "../utils.ts";

export const navbar = async () => {
  return await renderToString(
    <>
      {articles.map(({ data }) => (
        <li>
          <a hx-target="#content" hx-get={`http://localhost:8000/${data.title}`}>
            {data.title}
          </a>
        </li>
      ))}
    </>
  );
};
