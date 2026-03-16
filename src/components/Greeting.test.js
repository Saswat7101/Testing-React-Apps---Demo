import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello World as a test", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const helloWorldElement = screen.getByText(/Hello, World!/i);
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('renders "It\'s good to see you!" if the button was not clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const goodToSeeYouElement = screen.getByText(/It's good to see you!/i);
    expect(goodToSeeYouElement).toBeInTheDocument();
  });

  test('renders "Button was clicked!" if the button was clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button", { name: /Change Text/i });
    userEvent.click(buttonElement);

    // Assert
    const buttonClickedElement = screen.getByText(/Button was clicked!/i);
    expect(buttonClickedElement).toBeInTheDocument();
  });

  test('does not render "It\'s good to see you!" if the button was clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button", { name: /Change Text/i });
    userEvent.click(buttonElement);

    // Assert
    const goodToSeeYouElement = screen.queryByText(/It's good to see you!/i);
    expect(goodToSeeYouElement).toBeNull();
  });
});
