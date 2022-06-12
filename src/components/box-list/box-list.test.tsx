import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, screen } from "@testing-library/react";
//import userEvent from "@testing-library/user-event";

import { AppContext } from "components/app/app.context";
import BoxList from "./box-list";

import { mock_clientconfig_admin } from "mocks/clientConfiguration";
import { mock_boxes_partial } from "mocks/box";

const mockAppContextValue = {
  clientConfiguration: mock_clientconfig_admin,
};

test("render box list", async () => {
  const history = createMemoryHistory();
  render(
    <AppContext.Provider value={mockAppContextValue}>
      <Router location="/" navigator={history}>
        <BoxList boxes={mock_boxes_partial.listBoxes} />
      </Router>
    </AppContext.Provider>
  );
  const nameElement = screen.getByText(mock_boxes_partial.listBoxes[0].name);
  expect(nameElement).toBeInTheDocument();
});

test("no boxes", async () => {
  const history = createMemoryHistory();
  render(
    <AppContext.Provider value={mockAppContextValue}>
      <Router location="/" navigator={history}>
        <BoxList boxes={[]} />
      </Router>
    </AppContext.Provider>
  );
  const noBoxesElement = screen.getByText(/no items/i);
  expect(noBoxesElement).toBeInTheDocument();
});

test("sort box list", async () => {
  const history = createMemoryHistory();
  render(
    <AppContext.Provider value={mockAppContextValue}>
      <Router location="/" navigator={history}>
        <BoxList boxes={mock_boxes_partial.listBoxes} />
      </Router>
    </AppContext.Provider>
  );

  let sortedBoxesElement = screen.getAllByText(/box-/i);

  expect(sortedBoxesElement[0]).toHaveTextContent(/box-a/i);
  expect(sortedBoxesElement[1]).toHaveTextContent(/box-b/i);
  expect(sortedBoxesElement[2]).toHaveTextContent(/box-n/i);
  expect(sortedBoxesElement[3]).toHaveTextContent(/box-x/i);
});

/*

test.skip("search box list", async () => {
  const user = userEvent.setup();
  const history = createMemoryHistory();
  render(
    <AppContext.Provider value={mockAppContextValue}>
      <Router location="/" navigator={history}>
        <BoxList boxes={mock_boxes_partial.listBoxes} />
      </Router>
    </AppContext.Provider>
  );

  await user.type(screen.getByPlaceholderText("Search"), "box-a");
  const targetBoxElement = screen.getByText(/box-a/i);
  expect(targetBoxElement).toBeInTheDocument();
});


test.skip("no search result", async () => {
  const user = userEvent.setup();
  const history = createMemoryHistory();
  render(
    <AppContext.Provider value={mockAppContextValue}>
      <Router location="/" navigator={history}>
        <BoxList boxes={mock_boxes_partial.listBoxes} />
      </Router>
    </AppContext.Provider>
  );

  await user.type(screen.getByPlaceholderText("Search"), "box-x");

  const noResultElement = screen.getByText(/no search result/i);
  expect(noResultElement).toBeInTheDocument();
});
*/
