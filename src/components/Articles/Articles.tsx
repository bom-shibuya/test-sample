import { CategorySelect } from "./CategorySelect";
import { CATEGORY } from "./shared";
import { useArticles } from "./useArticles";
import { ArticleList } from "./ArticleList";

export const Articles: React.FC = () => {
  const { isLoading, articles, category, onCategoryChange, error } =
    useArticles({
      initialCategory: CATEGORY.react,
    });

  return (
    <div>
      <h1>{category} Articles</h1>
      <div>
        <CategorySelect
          onChange={onCategoryChange}
          disabled={isLoading}
          category={category}
        />
      </div>
      <div>
        {isLoading && <p>loading...</p>}
        {!isLoading && !error && <ArticleList articles={articles} />}
      </div>
    </div>
  );
};
