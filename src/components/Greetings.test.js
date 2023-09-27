import { render, screen } from "@testing-library/react";
import Greetings from "./Greetings";
import userEvent from "@testing-library/user-event";

describe("Greeting component", () => {
  test('renders "Hello World" as a text', () => {
    // Arrange
    render(<Greetings />);

    // Act
    // ... nothing

    // Assert
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('renders "good to see" you if the button was NOT clicked', () => {
    render(<Greetings />);

    const outputElement = screen.getByText("good to see you", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test('renders "Changed!" if the button was clicked', async () => {
    // Arrange
    render(<Greetings />);

    // Act
    const buttonElement = screen.getByRole("button");
    await userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });

  test('does not render "good to see you" if the button was clicked', async () => {
    // Arrange
    render(<Greetings />);

    // Act
    const buttonElement = screen.getByRole("button");
    await userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
