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
      <h3>Articles 📝</h3>
      {articles.map(({ data }) => (
        <li>
          <a
            hx-target="#content"
            hx-swap="innerHTML transition:true"
            hx-get={`${_url + "article/" + data.title}`}
          >
            {data.title}
          </a>
        </li>
      ))}
      <li class="links">
        <a href="https://github.com/About7Sharks/htmxSite">Github</a> | 
        <a href="https://htmx.org/">HTMX</a> |
        <a href="https://deno.land/">Deno</a>
      </li>
    </>
  );
};
