import { getArticles } from "npm:socks-librarian";

export const articles = await getArticles({
  user: "About7Sharks",
  repo: "Markdown",
});

export const createHeader = (data) => {
  const { author, date, title } = data;
  return `<h1>${title}</h1><h2>${author}</h2> <h3>${date}</h3>`;
};
