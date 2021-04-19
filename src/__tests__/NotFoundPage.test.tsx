import React from "react";
import { render, RenderResult } from "@testing-library/react";
import NotFoundPage from "../pages/NotFoundPage";

let documentBody: RenderResult;

describe("<NotFoundPage/>", () => {
  beforeEach(() => {
    documentBody = render(<NotFoundPage />);
  });

  test("should show a not found message", () => {
    expect(documentBody.getByText("Oops! Page not found.")).toBeInTheDocument();
  });
});
