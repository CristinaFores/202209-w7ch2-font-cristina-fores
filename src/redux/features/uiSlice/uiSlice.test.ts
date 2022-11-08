import mockInitialUiState from "../../../mocks/mockInitialUiState";
import { UiState } from "./types";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
  uiReducer,
} from "./uiSlice";

describe("Given a uiReducer", () => {
  describe("When it is invoked", () => {
    describe("and it receives the initial ui state and an unknown action", () => {
      test("Then it should return a copy of the initial ui state", () => {
        const unknownAction = {
          type: "ui/unknownAction",
        };

        const newUiState = uiReducer(mockInitialUiState, unknownAction);

        expect(newUiState).toStrictEqual(mockInitialUiState);
      });
    });

    describe("and it receives the initial ui state and a show loading action", () => {
      test("Then it should return a copy of the initial state with isLoading true", () => {
        const expectedUiState = {
          isLoading: true,
        };

        const newUiState = uiReducer(
          mockInitialUiState,
          showLoadingActionCreator()
        );

        expect(newUiState).toStrictEqual(expectedUiState);
      });
    });

    describe("and it receives the initial ui state with loading true and a hide loading action", () => {
      test("Then it should return a copy of the initial state with isLoading false", () => {
        const initialUiState: UiState = {
          ...mockInitialUiState,
          isLoading: true,
        };
        const expectedUiState: UiState = {
          ...mockInitialUiState,
          isLoading: false,
        };

        const newUiState = uiReducer(
          initialUiState,
          hideLoadingActionCreator()
        );

        expect(newUiState).toStrictEqual(expectedUiState);
      });
    });
  });
});
