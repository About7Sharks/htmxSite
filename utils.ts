import { getArticles } from "npm:socks-librarian";

export const articles = await getArticles({
  user: "About7Sharks",
  repo: "Markdown",
});
export const articleList = () => {
  return articles
    .map(
      ({ data }) =>
        `<li><a hx-target="#content" hx-get="http://localhost:8000/${data.title}">${data.title}</a></li>`
    )
    .join("\n");
};

export const createHeader = (data) => {
  const { author, date, title } = data;
  return `<h1>${title}</h1><h2>${author}</h2> <h3>${date}</h3>`;
};
