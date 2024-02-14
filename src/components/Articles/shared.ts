export type MappedConst<T extends string> = {
  [key in T]: key;
};

export type Category = "react" | "vue" | "angular";

export const CATEGORY: MappedConst<Category> = {
  react: "react",
  vue: "vue",
  angular: "angular",
};

export type Article = {
  id: number;
  category: Category;
  title: string;
  author: string;
  postedAt: string;
  summary: string;
};

const baseUrl = import.meta.env.MODE === "test" ? "http://localhost:3000" : "";
const endpointBase = `${baseUrl}/api/v1/articles`;
export const buildEndpoint = (
  category: Category
): `${typeof endpointBase}/${Category}` => `${endpointBase}/${category}`;
