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
  let url = "http://localhost:8000/";
  if (Deno.env.get("host")) {
    url = Deno.env.get("host");
  }
  return url;
};
