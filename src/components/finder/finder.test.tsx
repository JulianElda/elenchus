import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { createMemoryHistory } from "history";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import api from "api/api-faker";
import boxListReducer from "store/box-list";
import clientConfigReducer from "store/client-config";
import { Finder } from "components/finder";

import { mock_clientconfig_admin } from "mocks/clientConfiguration";
import { mock_box_dataroom } from "mocks/box";

const mockStore = configureStore({
  reducer: {
    boxList: boxListReducer,
    clientConfig: clientConfigReducer,
  },
  preloadedState: {
    clientConfig: {
      data: mock_clientconfig_admin,
      loaded: true,
    },
    boxList: {
      data: [mock_box_dataroom],
      loaded: true,
    },
  },
});

const mockResults = [
  {
    type: "FILE",
    node: {
      id: "test-file-1",
      name: "test-file-1.pdf",
    },
    parent: {
      node: {
        id: "test-parent-node",
        name: "test-parent-name",
      },
      parent: null,
    },
  },
  {
    type: "FOLDER",
    node: {
      id: "test-folder-1",
      name: "test-folder-1",
    },
    parent: null,
  },
];

test("show items", async () => {
  const user = userEvent.setup();
  const history = createMemoryHistory();

  jest
    .spyOn(api, "findItemsInBox")
    .mockImplementationOnce((boxId, types, name, successCallback) => {
      successCallback?.(mockResults);
    });

  render(
    <Provider store={mockStore}>
      <Router location="/" navigator={history}>
        <Finder />
      </Router>
    </Provider>
  );
  await user.type(screen.getByPlaceholderText(/Find/i), "test-query");
  await user.click(screen.getByRole("button", { name: "Find", hidden: true }));

  await waitFor(async () => {
    const pdfElement = screen.getByText("test-file-1.pdf");
    expect(pdfElement).toBeInTheDocument();
  });

  await waitFor(async () => {
    const pathElement = screen.getByText("test-parent-name/test-file-1.pdf");
    expect(pathElement).toBeInTheDocument();
  });
});
