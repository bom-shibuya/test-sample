import { setupMockServer, render, screen } from "../../testUtils";
import { Articles } from "./Articles";
import { rest } from "msw";
import { CATEGORY, buildEndpoint } from "./shared";
import { generateMockArticles } from "./mocks";

describe("Articles", () => {
  const server = setupMockServer();

  test("初期表示時、reactの記事を取得するリクエストが送信されること", async () => {
    const mock = vi.fn();
    const articles = generateMockArticles({ category: "react", length: 3 });
    server.use(
      rest.get(buildEndpoint("react"), (req, res, ctx) => {
        mock(req.url.toString());
        return res(ctx.json(articles));
      })
    );
    render(<Articles />);
    expect((await screen.findAllByRole("article")).length).toBe(3);
    expect(mock).toHaveBeenCalledWith(buildEndpoint("react"));
  });
});
