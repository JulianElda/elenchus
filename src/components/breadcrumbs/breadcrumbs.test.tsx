import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { createMemoryHistory } from "history";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { file_api } from "api/api-faker";
import clientConfigReducer from "store/client-config";
import { EntryItemTypes } from "types";
import { Breadcrumbs } from "components/breadcrumbs";
import { FileList } from "components/file-list";

import { mock_clientconfig_admin } from "mocks/clientConfiguration";
import { mock_box_dataroom } from "mocks/box";

const mockStore = configureStore({
  reducer: {
    clientConfig: clientConfigReducer,
  },
  preloadedState: {
    clientConfig: {
      data: mock_clientconfig_admin,
      loaded: true,
    },
  },
});

test("navigate to home", async () => {
  const user = userEvent.setup();
  const history = createMemoryHistory();

  let bread = [{ id: "test-id", name: "test-name" }];
  render(
    <Provider store={mockStore}>
      <Router location="/" navigator={history}>
        <Breadcrumbs items={bread} setItems={() => {}} onClick={() => {}} />
      </Router>
    </Provider>
  );
  const homeElement = screen.getByText(/home/i);
  expect(homeElement).toBeInTheDocument();

  const breadElement = screen.getByText(/test-name/i);
  expect(breadElement).toBeInTheDocument();

  await user.click(screen.getByText(/home/i));
  expect(history.location.pathname).toEqual("/box/");
});

test("sliced bread", async () => {
  const user = userEvent.setup();
  const history = createMemoryHistory();

  let mockRoot = {
    id: "test-id",
    name: "test-name",
    entries: [
      {
        id: "test-1",
        name: "test-1",
        type: EntryItemTypes.DIR,
        author: "",
        dateCreated: 123123,
        size: "",
        description: "",
        owner: true,
      },
    ],
  };
  let mockEntries = [{ id: "test-2", name: "test-2", type: "DIR" }];
  jest
    .spyOn(file_api, "getBoxChildren")
    .mockImplementation((boxId, folderId, successCallback) => {
      successCallback?.({ entries: mockEntries });
    });
  render(
    <Provider store={mockStore}>
      <Router location="/" navigator={history}>
        <FileList
          box={mock_box_dataroom}
          items={mockRoot.entries}
          breadcrumbs={[{ id: "test-id", name: "test-name" }]}
        />
      </Router>
    </Provider>
  );
  const homeElement = screen.getByText(/home/i);
  expect(homeElement).toBeInTheDocument();

  const rootFolder = screen.getByText(/test-name/i);
  expect(rootFolder).toBeInTheDocument();

  const firstElement = screen.getByText(/test-1/i);
  expect(firstElement).toBeInTheDocument();
  await user.click(firstElement);

  await waitFor(async () => {
    await user.click(screen.getByText(/test-name/i));
    expect(firstElement).not.toBeInTheDocument();
  });
});
