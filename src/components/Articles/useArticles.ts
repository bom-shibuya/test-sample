import { useCallback, useEffect, useState } from "react";
import { Article, Category, MappedConst } from "./shared";
import { fetcher } from "./fetcher";

type UseArticlesPayload = {
  initialCategory: Category;
};

type Status = "notReady" | "ready" | "loading" | "error";
export const STATUS: MappedConst<Status> = {
  notReady: "notReady",
  ready: "ready",
  loading: "loading",
  error: "error",
};

export const useArticles = ({ initialCategory }: UseArticlesPayload) => {
  const [category, setCategory] = useState(initialCategory);
  const [articles, setArticles] = useState<Article[]>([]);
  const [status, setStatus] = useState<Status>(STATUS.notReady);

  const handleChangeCategory = useCallback(async (category: Category) => {
    setCategory(category);
    setStatus(STATUS.loading);
    try {
      const res = await fetcher(category);
      setArticles(res);
      setStatus(STATUS.ready);
    } catch (error) {
      console.log(error);
      setStatus(STATUS.error);
    }
  }, []);

  useEffect(() => {
    if (status === STATUS.notReady) {
      handleChangeCategory(category);
    }
  }, [category, handleChangeCategory, status]);

  return {
    category,
    articles,
    isLoading: status === STATUS.loading || status === STATUS.notReady,
    error: status === STATUS.error,
    onCategoryChange: handleChangeCategory,
  };
};
