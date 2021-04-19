import React from "react";
import { render, RenderResult, fireEvent, waitFor } from "@testing-library/react";
import Home from "../pages/Home";

let documentBody: RenderResult;

describe("<Home/>", () => {
  beforeEach(() => {
    // Arrange
    documentBody = render(<Home />);
  });

  test("should show a title message", () => {
    // ASSERT
    const title = documentBody.getByText("Home");
    expect(title).toBeInTheDocument();
  });

  test("should show full texts when read more button is clicked", async () => {
    const readMores = documentBody.getAllByText("Read more...");

    // ACT and ASSERT
    const before = documentBody.queryByText("Full description of Test 1");
    expect(before).not.toBeInTheDocument();

    fireEvent.click(readMores[0]);

    await waitFor(() => {
      const after = documentBody.queryByText("Full description of Test 1");
      expect(after).toBeInTheDocument();
    });
  });
});
