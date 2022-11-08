import { renderHook } from "@testing-library/react";
import { Provider } from "react-redux";
import mockRobotsResponse from "../mocks/mockRobotsResponse";
import { loadRobotsActionCreator } from "../redux/features/robotsSlice/robotsSlice";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
} from "../redux/features/uiSlice/uiSlice";

import { store } from "../redux/store";
import useApi from "./useApi";

interface ProviderWrapperProps {
  children: JSX.Element | JSX.Element[];
}
const ProviderWrapper = ({ children }: ProviderWrapperProps) => {
  return <Provider store={store}>{children}</Provider>;
};

const dispatchSpy = jest.spyOn(store, "dispatch");

describe("Given the useApi custom hook", () => {
  describe("When its method loadAllRobots is invoked", () => {
    test("Then is should  call the dispatch", async () => {
      const {
        result: {
          current: { loadAllRobots },
        },
      } = renderHook(() => useApi(), {
        wrapper: ProviderWrapper,
      });

      await loadAllRobots();

      expect(dispatchSpy).toHaveBeenNthCalledWith(
        1,
        showLoadingActionCreator()
      );
      expect(dispatchSpy).toHaveBeenNthCalledWith(
        2,
        loadRobotsActionCreator(mockRobotsResponse)
      );
      expect(dispatchSpy).toHaveBeenNthCalledWith(
        3,
        hideLoadingActionCreator()
      );
    });
  });
  describe("When its method deleteRobotById is invoked", () => {
    test("Then is should  call the dispatch", async () => {
      const {
        result: {
          current: { deleteRobotById },
        },
      } = renderHook(() => useApi(), {
        wrapper: ProviderWrapper,
      });
      const idRobot = "2";
      await deleteRobotById(idRobot);

      expect(dispatchSpy).toHaveBeenCalled();
    });
  });
});
