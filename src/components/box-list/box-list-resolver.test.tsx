import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, screen, waitFor } from "@testing-library/react";
import api from "api/api";

import { BoxListResolver } from "components/box-list";

import { mock_boxes_partial } from "mocks/box";

test("renders loading", () => {
  render(<BoxListResolver />);
  const loadingElement = screen.getByText(/loading/i);
  expect(loadingElement).toBeInTheDocument();
});

test("paginates once", async () => {
  const history = createMemoryHistory();
  jest
    .spyOn(api, "paginateBox")
    .mockImplementation((limit, start, successCallback) => {
      successCallback?.(mock_boxes_partial);
    });

  render(
    <Router location="/" navigator={history}>
      <BoxListResolver />
    </Router>
  );

  await waitFor(async () => {
    const nameElement = screen.getByText(mock_boxes_partial.listBoxes[0].name);
    expect(nameElement).toBeInTheDocument();
  });
});
