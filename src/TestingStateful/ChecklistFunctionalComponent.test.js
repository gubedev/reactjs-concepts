import "jest-dom/extend-expect";

import { cleanup, fireEvent, render } from "react-testing-library";

import { Checklist } from "./ChecklistFunctionalComponent";
import React from "react";

afterEach(cleanup);

const mockItems = [
  {
    description: "first item",
    completed: false
  },
  {
    description: "second item",
    completed: false
  },
  {
    description: "third item",
    completed: false
  }
];

describe("Checklist", () => {
  it("should check two out the three checklist items", () => {
    const { getByText, getByLabelText } = render(
      <Checklist items={mockItems} />
    );

    fireEvent.click(getByText("first item"));
    fireEvent.click(getByText("second item"));

    expect(getByLabelText("first item").checked).toBe(true);
    expect(getByLabelText("second item").checked).toBe(true);
    expect(getByLabelText("third item").checked).toBe(false);
    expect(getByText("All tasks completed")).not.toBeVisible();
  });

  it("should display a message when all items are completed", () => {
    const { getByText, getByLabelText } = render(
      <Checklist items={mockItems} />
    );

    fireEvent.click(getByText("first item"));
    fireEvent.click(getByText("second item"));
    fireEvent.click(getByText("third item"));

    expect(getByLabelText("first item").checked).toBe(true);
    expect(getByLabelText("second item").checked).toBe(true);
    expect(getByLabelText("third item").checked).toBe(true);
    expect(getByText("All tasks completed")).toBeVisible();
  });
});