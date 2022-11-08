import { useCallback } from "react";
import {
  deleteRobotActionCreator,
  loadRobotsActionCreator,
} from "../redux/features/robotsSlice/robotsSlice";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
} from "../redux/features/uiSlice/uiSlice";
import { useAppDispatch } from "../redux/hooks";
import { RobotsResponse } from "./types";

interface UseApi {
  loadAllRobots: () => Promise<void>;
  deleteRobotById: (id: string) => Promise<void>;
}

const useApi = (): UseApi => {
  const dispatch = useAppDispatch();
  const url = process.env.REACT_APP_URL_API;

  const loadAllRobots = useCallback(async () => {
    dispatch(showLoadingActionCreator());
    try {
      const response = await fetch(url!);
      const apiResponse: RobotsResponse = await response.json();

      if (response.status >= 400) {
        throw new Error("Couldn't load robots");
      }

      dispatch(loadRobotsActionCreator(apiResponse.robots));
      dispatch(hideLoadingActionCreator());
    } catch (error: unknown) {
      dispatch(hideLoadingActionCreator());

      throw new Error(`There was an error: ${(error as Error).message}`);
    }
  }, [url, dispatch]);

  const deleteRobotById = async (id: string) => {
    const token = process.env.REACT_APP_TOKEN;
    try {
      const response = await fetch(`${url}/robot/${id}?token=${token}`, {
        method: "DELETE",
      });
      if (response.status >= 400) {
        throw new Error("Couldn't delete robot");
      }

      dispatch(deleteRobotActionCreator(id));
    } catch (error: unknown) {
      throw new Error(`There was an error: ${(error as Error).message}`);
    }
  };

  return { loadAllRobots, deleteRobotById };
};

export default useApi;
