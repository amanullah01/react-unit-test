import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async componet", () => {
  test("renders posts if requrest successds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValue({
      json: async () => [{ id: 1, title: "test" }],
    });
    render(<Async />);

    const listItemElement = await screen.findAllByRole("listitem");
    expect(listItemElement).not.toHaveLength(0);
  });
});
