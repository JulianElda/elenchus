import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { createMemoryHistory } from "history";
import { render, screen, waitFor } from "@testing-library/react";
import boxListReducer from "store/box-list";
import { file_api } from "api/api-faker";
import { BoxListResolver } from "components/box-list";
import { mock_boxes_partial } from "mocks/box";

const mockStore = configureStore({
  reducer: {
    boxList: boxListReducer,
  },
  preloadedState: {
    boxList: {
      data: [],
      loaded: false,
    },
  },
});

test("renders loading", () => {
  render(
    <Provider store={mockStore}>
      <BoxListResolver />
    </Provider>
  );
  const loadingElement = screen.getByText(/loading/i);
  expect(loadingElement).toBeInTheDocument();
});

test("paginates once", async () => {
  const history = createMemoryHistory();
  jest
    .spyOn(file_api, "paginateBox")
    .mockImplementation((limit, start, successCallback) => {
      successCallback?.(mock_boxes_partial);
    });

  render(
    <Provider store={mockStore}>
      <Router location="/" navigator={history}>
        <BoxListResolver />
      </Router>
    </Provider>
  );

  await waitFor(async () => {
    const nameElement = screen.getByText(mock_boxes_partial.listBoxes[0].name);
    expect(nameElement).toBeInTheDocument();
  });
});
