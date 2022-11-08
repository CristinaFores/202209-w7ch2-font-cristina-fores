import { render, renderHook, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter, useLocation } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";

describe("Given the NotFoundPage component", () => {
  describe("When it is rendered", () => {
    const buttonText = /home/i;

    test("Then it should show the texts '404' and 'Page not found' and the button 'Home'", () => {
      const errorCodeText = /404/;
      const errorText = /page not found/i;

      render(
        <BrowserRouter>
          <NotFoundPage />
        </BrowserRouter>
      );
      const renderedCode = screen.queryByText(errorCodeText);
      const renderedMessage = screen.queryByText(errorText);
      const renderedButton = screen.queryByRole("button", {
        name: buttonText,
      });

      expect(renderedCode).toBeInTheDocument();
      expect(renderedMessage).toBeInTheDocument();
      expect(renderedButton).toBeInTheDocument();
    });

    test("Then it should navigate to '/' when the Home button is clicked", async () => {
      const expectedPathname = "/";
      render(
        <BrowserRouter>
          <NotFoundPage />
        </BrowserRouter>
      );

      const renderedButton = screen.queryByRole("button", { name: buttonText });

      await userEvent.click(renderedButton!);

      const {
        result: {
          current: { pathname },
        },
      } = renderHook(() => useLocation(), { wrapper: BrowserRouter });

      expect(pathname).toBe(expectedPathname);
    });
  });
});
