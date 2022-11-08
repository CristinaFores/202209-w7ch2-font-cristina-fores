import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading level 1 with 'Robotitos'", () => {
      const expectedTitle = {
        level: 1,
        name: "Robotitos",
      };

      render(<Header />);

      const renderedTitle = screen.queryByRole("heading", expectedTitle);

      expect(renderedTitle).toBeInTheDocument();
    });
  });
});
