import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "api/axios";

import { AppContext } from "components/app/app.context";
import Breadcrumbs from "./breadcrumbs";
import FileList from "components/file-list/file-list";

import { mock_clientConfiguration_admin } from "mocks/clientConfiguration";

const mockAppContextValue = {
  clientConfiguration: mock_clientConfiguration_admin,
};

test("navigate to home", async () => {
  const user = userEvent.setup();
  const history = createMemoryHistory();

  let bread = [{ id: "test-id", name: "test-name" }];
  render(
    <Router location="/" navigator={history}>
      <Breadcrumbs items={bread} setItems={() => {}} onClick={() => {}} />
    </Router>
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
    entries: [{ id: "test-1", name: "test-1", type: "DIR" }],
  };
  let mockEntries = [{ id: "test-2", name: "test-2", type: "DIR" }];
  jest.spyOn(axios, "get").mockImplementation(() => {
    return Promise.resolve({
      then: (callback: any) => {
        callback({ data: { entries: mockEntries } });
      },
    });
  });
  render(
    <AppContext.Provider value={mockAppContextValue}>
      <Router location="/" navigator={history}>
        <FileList box={{}} rootFolder={mockRoot} />
      </Router>
    </AppContext.Provider>
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
