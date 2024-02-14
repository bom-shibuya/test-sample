import { Article as ArticleType } from "./shared";

type Props = {
  article: ArticleType;
};

export const Article: React.FC<Props> = ({ article }) => {
  return (
    <article>
      <h2>{article.title}</h2>
      <p>{article.category}</p>
      <p>
        <time dateTime={article.postedAt}>{article.postedAt}</time>
      </p>
      <p>{article.summary}</p>
    </article>
  );
};
