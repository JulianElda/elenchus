import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, screen } from "@testing-library/react";

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
