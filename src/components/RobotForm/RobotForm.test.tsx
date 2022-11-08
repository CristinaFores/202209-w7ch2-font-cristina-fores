import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event/";
import RobotForm from "./RobotForm";

describe("Given a RobotForm component", () => {
  describe("When it is rendered with isNew true", () => {
    const nameInputLabel = /name/i;
    const speedInputLabel = /speed/i;
    const strengthInputLabel = /strength/i;
    const imageInputLabel = /image url/i;

    test("Then it should show inputs with labels Name, Speed, Strength and Image Url, and a button with 'Create Robot", () => {
      const buttonText = /create robot/i;

      render(<RobotForm isNew={true} />);

      const nameInput = screen.queryByRole("textbox", {
        name: nameInputLabel,
      });
      const speedInput = screen.queryByRole("spinbutton", {
        name: speedInputLabel,
      });
      const strengthInput = screen.queryByRole("spinbutton", {
        name: strengthInputLabel,
      });
      const imageInput = screen.queryByRole("textbox", {
        name: imageInputLabel,
      });
      const renderedButton = screen.queryByRole("button", {
        name: buttonText,
      });

      expect(nameInput).toBeInTheDocument();
      expect(speedInput).toBeInTheDocument();
      expect(strengthInput).toBeInTheDocument();
      expect(imageInput).toBeInTheDocument();
      expect(renderedButton).toBeInTheDocument();
    });

    describe("And when the user types name 'Cool Robot', speed: 5, strength : 7, and image url 'http://www.image.com/image.jpg'", () => {
      test("Then the typed values should show on the screen", async () => {
        const userInput = {
          name: "Cool Robot",
          speed: "5",
          strength: "7",
          image: "http://www.image.com/image.jpg",
        };

        render(<RobotForm isNew={false} />);

        const nameInput = screen.queryByRole("textbox", {
          name: nameInputLabel,
        });
        const speedInput = screen.queryByRole("spinbutton", {
          name: speedInputLabel,
        });
        const strengthInput = screen.queryByRole("spinbutton", {
          name: strengthInputLabel,
        });
        const imageInput = screen.queryByRole("textbox", {
          name: imageInputLabel,
        });

        await userEvent.type(nameInput!, userInput.name);
        await userEvent.type(speedInput!, userInput.speed);
        await userEvent.type(strengthInput!, userInput.strength);
        await userEvent.type(imageInput!, userInput.image);

        expect(nameInput).toHaveDisplayValue(userInput.name);
        expect(speedInput).toHaveDisplayValue(userInput.speed);
        expect(strengthInput).toHaveDisplayValue(userInput.strength);
        expect(imageInput).toHaveDisplayValue(userInput.image);
      });
    });
  });

  describe("When it is rendered with isNew false", () => {
    test("Then it should show a button with 'Edit Robot", () => {
      const buttonText = /edit robot/i;

      render(<RobotForm isNew={false} />);

      const renderedButton = screen.queryByRole("button", {
        name: buttonText,
      });

      expect(renderedButton).toBeInTheDocument();
    });
  });
});
