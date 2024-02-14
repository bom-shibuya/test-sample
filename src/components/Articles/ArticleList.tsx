import { Article } from "./Article";
import { Article as ArticleType } from "./shared";

type Props = {
  articles: ArticleType[];
};

export const ArticleList: React.FC<Props> = ({ articles }) => {
  return (
    <ul>
      {articles.map((article) => (
        <li key={article.id}>
          <Article article={article} />
        </li>
      ))}
    </ul>
  );
};
