import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Robot, Robots, RobotsState } from "./types";

const initialState: RobotsState = {
  robotsList: [],
};

const robotSilce = createSlice({
  name: "robots",
  initialState,
  reducers: {
    loadRobots: (currentState, action: PayloadAction<Robots>): RobotsState => ({
      ...currentState,
      robotsList: [...action.payload],
    }),
    deleteRobot: (
      currentState,
      action: PayloadAction<string>
    ): RobotsState => ({
      ...currentState,
      robotsList: currentState.robotsList.filter(
        (robot) => robot._id !== action.payload
      ),
    }),
    editRobot: (currentState, action: PayloadAction<Robot>): RobotsState => ({
      ...currentState,
      robotsList: currentState.robotsList.map((robot) =>
        robot._id === action.payload._id ? action.payload : robot
      ),
    }),
  },
});

export const {
  loadRobots: loadRobotsActionCreator,
  deleteRobot: deleteRobotActionCreator,
  editRobot: editRobotActionCreator,
} = robotSilce.actions;

export const robotsReducer = robotSilce.reducer;
