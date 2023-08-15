/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h, renderToString } from "https://deno.land/x/jsx/mod.ts";

export const Home = async () => {
  return await renderToString(
    <>
      <h1>Home</h1>
      <p>
        This is a demo site for the Deno htmx module. It is built using the Deno
        runtime and HTMX enhancements.
      </p>
      <img
        src="https://htmx.org/img/memes/extinction.png"
        width="720px"
        height="480px"
        alt=""
      />
    </>
  );
};
