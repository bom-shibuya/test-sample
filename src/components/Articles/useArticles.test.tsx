import { setupMockServer, render, screen } from "../../testUtils";
import { Article, CATEGORY, buildEndpoint } from "./shared";
import { useArticles } from "./useArticles";
import { generateMockArticles } from "./mocks";
import { rest } from "msw";

const Component = () => {
  const { onCategoryChange, isLoading, error, articles } = useArticles({
    initialCategory: CATEGORY.react,
  });
  const changeAngular = () => {
    onCategoryChange(CATEGORY.angular);
  };
  return (
    <div>
      <button
        type="button"
        data-testid="changeAngular"
        onClick={changeAngular}
      />
      {isLoading && <div data-testid="loading" />}
      <ul>
        {articles.map((article) => (
          <li data-testid="article" key={article.id}>
            {article.title}
          </li>
        ))}
      </ul>
      {error != null && <div data-testid="error" />}
    </div>
  );
};

describe("Articles", () => {
  const server = setupMockServer();

  test.todo(
    "要素の取得中isLoadingはtrueになり、取得後はfalseになる",
    async () => {
      const articles = generateMockArticles({ category: "react", length: 3 });
      server.use(
        rest.get(buildEndpoint("react"), (req, res, ctx) => {
          return res(ctx.json(articles));
        })
      );
      render(<Component />);
      expect(screen.getByTestId("loading")).toBeInTheDocument();
      expect(await screen.findByTestId("loading")).not.toBeInTheDocument();
      expect(screen.getAllByTestId("article").length).toBe(3);
    }
  );
});
