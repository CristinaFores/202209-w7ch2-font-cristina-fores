import { render, screen } from "@testing-library/react";
import RobotFormPage from "./RobotFormPage";

describe("Given the page RobotFormPage", () => {
  describe("When it is rendered with isNew true", () => {
    test("Then it should show a heading level 2 with text 'Create a new robot'", () => {
      const expectedHeading = {
        level: 2,
        name: "Create a new robot",
      };

      render(<RobotFormPage isNew={true} />);
      const renderedHeading = screen.queryByRole("heading", expectedHeading);

      expect(renderedHeading).toBeInTheDocument();
    });
  });

  describe("When it is rendered with isNew false", () => {
    test("Then it should show a heading level 2 on the screen with 'Edit your robot'", () => {
      const expectedHeading = {
        level: 2,
        name: "Edit your robot",
      };

      render(<RobotFormPage isNew={false} />);
      const renderedHeading = screen.queryByRole("heading", expectedHeading);

      expect(renderedHeading).toBeInTheDocument();
    });
  });
});
