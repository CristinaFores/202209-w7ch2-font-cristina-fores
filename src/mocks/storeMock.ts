import { configureStore } from "@reduxjs/toolkit";
import { robotsReducer } from "../redux/features/robotsSlice/robotsSlice";

export const mockstore = configureStore({
  reducer: {
    robots: robotsReducer,
  },
  preloadedState: {
    robots: {
      robotsList: [],
    },
  },
});
