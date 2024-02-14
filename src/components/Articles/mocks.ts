import type { Article, Category } from "./shared";

type GenerateMockArticlesPayload = {
  category: Category;
  length?: number;
};

export const generateMockArticles = ({
  category,
  length = 10,
}: GenerateMockArticlesPayload): Article[] => {
  return Array.from({ length }, (_, index) => ({
    id: index,
    category,
    title: `title-${index}-${category}`,
    author: `bom shibuya`,
    summary: `summary-${index}-${category} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    postedAt: `2021-01-01`,
  }));
};
