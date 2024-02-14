import { Article, Category, buildEndpoint } from "./shared";

export const fetcher = async (category: Category): Promise<Article[]> => {
  return fetch(buildEndpoint(category)).then((res) => {
    if (!res.ok) {
      throw new Error("fetch error");
    }
    return res.json();
  });
};
