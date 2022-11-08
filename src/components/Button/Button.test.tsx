import { render, screen } from "@testing-library/react";
import Button from "./Button";
import userEvent from "@testing-library/user-event";

describe("Given a Button component", () => {
  describe("When it is rendered", () => {
    const buttonText = "Click here";

    describe("and it receives the text 'Click here", () => {
      test("Then it should show a button with the received text on the screen", () => {
        render(<Button text={buttonText} />);

        const renderedButton = screen.queryByRole("button", {
          name: buttonText,
        });

        expect(renderedButton).toBeInTheDocument();
      });
    });

    describe("and it receives an action", () => {
      test("Then it the action should be invoked when the button is clicked", async () => {
        const buttonAction = jest.fn();

        render(<Button text={buttonText} action={buttonAction} />);
        const renderedButton = screen.queryByRole("button", {
          name: buttonText,
        });

        await userEvent.click(renderedButton!);

        expect(buttonAction).toHaveBeenCalled();
      });
    });
  });
});
