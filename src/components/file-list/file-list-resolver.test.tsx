import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, screen, waitFor } from "@testing-library/react";

import axios from "api/axios";
import { AppContext, AppContextType } from "components/app/app.context";
import FileListResolver from "./file-list-resolver";

test("renders loading", () => {
  const history = createMemoryHistory();
  render(
    <Router location="/" navigator={history}>
      <FileListResolver />
    </Router>
  );
  const loadingElement = screen.getByText(/loading/i);
  expect(loadingElement).toBeInTheDocument();
});

test.skip("loads rootfolder", async () => {
  const history = createMemoryHistory();

  let mockRoot = {
    data: {
      rootFolder: {
        id: "root-id",
        name: "root-name",
        entries: [{ id: 1, name: "test-file.pdf", type: "FILE" }],
      },
    },
  };
  jest.spyOn(axios, "get").mockImplementation(() => {
    return Promise.resolve({
      then: (callback: any) => {
        callback(mockRoot);
      },
    });
  });

  const mockAppContextValue: AppContextType = {
    clientConfiguration: {
      nick: "test-nick",
      csfrToken: "test-csfr",
    },
    user: {
      id: "test-user-id",
    },
  };

  render(
    <Router location="/" navigator={history}>
      <AppContext.Provider value={mockAppContextValue}>
        <FileListResolver />
      </AppContext.Provider>
    </Router>
  );

  await waitFor(async () => {
    const nameElement = screen.getByText(/test-file.pdf/i);
    expect(nameElement).toBeInTheDocument();
  });
});
