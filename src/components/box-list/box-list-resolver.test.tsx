import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, screen, waitFor } from "@testing-library/react";
import axios from "api/axios";

import { AppContext } from "components/app/app.context";
import BoxListResolver from "./box-list-resolver";

import { mock_clientConfiguration_admin } from "mocks/clientConfiguration";
import { mock_boxes_partial } from "mocks/box";

const mockAppContextValue = {
  clientConfiguration: mock_clientConfiguration_admin
}

test("renders loading", () => {
  render(
    <AppContext.Provider
      value={mockAppContextValue}
      children={<BoxListResolver />}
    />
  );
  const loadingElement = screen.getByText(/loading boxes/i);
  expect(loadingElement).toBeInTheDocument();
});

test("paginates once", async () => {
  const history = createMemoryHistory();

  jest.spyOn(axios, "get").mockImplementation(() => {
    return Promise.resolve({
      then: (callback: any) => {
        callback({data: mock_boxes_partial});
      },
    });
  });

  render(
    <AppContext.Provider value={mockAppContextValue}>
      <Router location="/" navigator={history}>
        <BoxListResolver />
      </Router>
    </AppContext.Provider>
  );

  await waitFor(async () => {
    const nameElement = screen.getByText(mock_boxes_partial.listBoxes[0].name);
    expect(nameElement).toBeInTheDocument();
  });
});
