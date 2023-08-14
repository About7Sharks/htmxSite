/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h, renderToString } from "https://deno.land/x/jsx/mod.ts";
import { articles, url } from "../utils.ts";

export const navbar = async () => {
  if (articles.length === 0) {
    return <li>No articles found</li>;
  }
  const _url = url();
  return await renderToString(
    <>
      {articles.map(({ data }) => (
        <li>
          <a hx-target="#content" hx-get={`${_url + "article/" + data.title}`}>
            {data.title}
          </a>
        </li>
      ))}
    </>
  );
};
