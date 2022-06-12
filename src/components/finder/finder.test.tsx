import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import api from "api/api";
import { AppContext } from "components/app/app.context";
import Finder from "components/finder/finder";

import { mock_clientconfig_admin } from "mocks/clientConfiguration";
import { mock_boxes_partial_once } from "mocks/box";
const mockAppContextValue = {
  clientConfiguration: mock_clientconfig_admin,
};

test("show items", async () => {
  const user = userEvent.setup();
  const history = createMemoryHistory();

  jest
    .spyOn(api, "paginateBox")
    .mockImplementation((limit, start, successCallback) => {
      successCallback?.(mock_boxes_partial_once);
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

  jest
    .spyOn(api, "findItemsInBox")
    .mockImplementationOnce((boxId, types, name, successCallback) => {
      successCallback?.(mockResults);
    });

  render(
    <Router location="/" navigator={history}>
      <AppContext.Provider value={mockAppContextValue}>
        <Finder />
      </AppContext.Provider>
    </Router>
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
