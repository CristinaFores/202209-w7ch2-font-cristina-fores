import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { getRandomRobot } from "../../factories/robotsFactory";
import { mockstore } from "../../mocks/storeMock";
import renderWithProviders from "../../testUtils/renderWithProviders";
import RobotCard from "./RobotCard";
import useApi from "../../hooks/useApi";

beforeEach(() => {
  jest.clearAllMocks();
});

const mockDeleteById = jest.fn();

jest.mock("../../hooks/useApi", () => {
  return () => ({
    deleteRobotById: mockDeleteById,
  });
});

describe("Given a RobotCard componet", () => {
  describe("when its is rendered with a received robot", () => {
    const robot = getRandomRobot();
    const textButtonDelete = "Delete";

    test("Then its should show an image with alt text name robot,headding level 3 and 2 buttons", () => {
      const { name } = robot;
      const textButtonEdit = "Edit";

      render(
        <Provider store={mockstore}>
          <RobotCard robot={robot} />
        </Provider>
      );

      const rendertRobotName = screen.queryByRole("heading", {
        level: 3,
        name: name,
      });
      const renderImageRobot = screen.queryByRole("img", {
        name: name,
      });
      const renderButtonEdit = screen.queryByRole("button", {
        name: textButtonEdit,
      });
      const renderButtonDelete = screen.queryByRole("button", {
        name: textButtonDelete,
      });

      expect(rendertRobotName).toBeInTheDocument();
      expect(renderImageRobot).toBeInTheDocument();
      expect(renderButtonEdit).toBeInTheDocument();
      expect(renderButtonDelete).toBeInTheDocument();
    });

    describe("And when it's delete button is clicked", () => {
      test("Then deleteRobotById should be called with the received robots id", async () => {
        renderWithProviders(<RobotCard robot={robot} />);

        const deleteButton = screen.queryByRole("button", {
          name: textButtonDelete,
        });

        await userEvent.click(deleteButton!);

        expect(mockDeleteById).toHaveBeenCalledWith(robot._id);
      });
    });
  });
});
