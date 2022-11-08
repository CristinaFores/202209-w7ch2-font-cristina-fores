import { screen } from "@testing-library/react";
import { getRandomRobotsList } from "../../factories/robotsFactory";
import mockInitialUiState from "../../mocks/mockInitialUiState";
import { RobotsState } from "../../redux/features/robotsSlice/types";
import { UiState } from "../../redux/features/uiSlice/types";
import renderWithProviders from "../../testUtils/renderWithProviders";
import RobotsList from "./RobotsList";

describe("Given a RobotsList component", () => {
  describe("When it is rendered and there is a list of 3 robots in the store", () => {
    test("Then it should a heading level 2 'Robots, and a list of 3 robots", () => {
      const robotsList = getRandomRobotsList(3);
      const [robot1, robot2, robot3] = robotsList;
      const initialRobotsState: RobotsState = {
        robotsList,
      };
      const initialUiState: UiState = mockInitialUiState;
      const expectedHeading = {
        level: 2,
        name: "Robots",
      };

      renderWithProviders(<RobotsList />, {
        preloadedState: { robots: initialRobotsState, ui: initialUiState },
      });

      const renderedHeading = screen.queryByRole("heading", expectedHeading);
      const renderedRobot1 = screen.queryByRole("heading", {
        level: 3,
        name: robot1.name,
      });
      const renderedRobot2 = screen.queryByRole("heading", {
        level: 3,
        name: robot2.name,
      });
      const renderedRobot3 = screen.queryByRole("heading", {
        level: 3,
        name: robot3.name,
      });

      expect(renderedHeading).toBeInTheDocument();
      expect(renderedRobot1).toBeInTheDocument();
      expect(renderedRobot2).toBeInTheDocument();
      expect(renderedRobot3).toBeInTheDocument();
    });
  });
});
