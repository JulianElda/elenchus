import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, screen, waitFor } from "@testing-library/react";

import axios from "api/axios";
import FileListResolver from "./file-list-resolver";

test("renders loading", () => {
  render(<FileListResolver />);
  const loadingElement = screen.getByText(/loading items/i);
  expect(loadingElement).toBeInTheDocument();
});

// TODO: useOutletContext
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

  render(
    <Router location="/box/gandoo" navigator={history}>
      <FileListResolver />
    </Router>
  );

  await waitFor(async () => {
    const nameElement = screen.getByText(/test-file.pdf/i);
    expect(nameElement).toBeInTheDocument();
  });
});
