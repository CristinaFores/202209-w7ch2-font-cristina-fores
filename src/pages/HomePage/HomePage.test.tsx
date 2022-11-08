import { screen } from "@testing-library/react";
import renderWithProviders from "../../testUtils/renderWithProviders";
import HomePage from "./HomePage";

describe("Given the page HomePage", () => {
  describe("When it is rendered", () => {
    test("Then it should show a Header component with the heading level 1 'Robotitos' and a heading level 2 'Robots", () => {
      const expectedHeading1 = {
        level: 1,
        name: "Robotitos",
      };
      const expectedHeading2 = {
        level: 2,
        name: "Robots",
      };

      renderWithProviders(<HomePage />);

      const renderedHeading1 = screen.queryByRole("heading", expectedHeading1);
      const renderedHeading2 = screen.queryByRole("heading", expectedHeading2);

      expect(renderedHeading1).toBeInTheDocument();
      expect(renderedHeading2).toBeInTheDocument();
    });
  });
});
