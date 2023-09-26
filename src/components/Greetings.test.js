import { render, screen } from "@testing-library/react";
import Greetings from "./Greetings";

test("render hello world text", () => {
  //arrange
  render(<Greetings />);

  //Act

  //Assert
  const helloWorldTxt = screen.getByText("Hello World", { exact: false });
  expect(helloWorldTxt).toBeInTheDocument();
});
