import { getArticles } from "https://esm.sh/socks-librarian";

export const articles = await getArticles({
  user: "About7Sharks",
  repo: "Markdown",
});

export const createHeader = (data) => {
  const { author, date, title } = data;
  return `<h1>${title}</h1><h2>${author}</h2> <h3>${date}</h3>`;
};

// base url for the server
export const url = () => {
  // if localhost, use localhost
  if (Deno.env.get("DENO_DEPLOYMENT_ID") !== undefined){
    return 'https://htmxexample.deno.dev/';
  }
  return "http://localhost:8000/";
}