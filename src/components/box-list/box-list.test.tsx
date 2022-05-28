import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import BoxList from "./box-list";
import { IdgardBox } from "types/IdgardBox";

const mockBoxes = [
  { id: "1", name: "box-A", type: IdgardBox.type.DATAROOM },
  { id: "2", name: "box-B", type: IdgardBox.type.DATAROOM },
  { id: "3", name: "box-C", type: IdgardBox.type.FILE },
  { id: "4", name: "box-D", type: IdgardBox.type.TEMPORARY },
];

test("render box list", async () => {
  const history = createMemoryHistory();
  render(
    <Router location="/" navigator={history}>
      <BoxList boxes={mockBoxes} />
    </Router>
  );
  const nameElement = screen.getByText(/box-a/i);
  expect(nameElement).toBeInTheDocument();
});

test("search box list", async () => {
  const user = userEvent.setup();
  const history = createMemoryHistory();
  render(
    <Router location="/" navigator={history}>
      <BoxList boxes={mockBoxes} />
    </Router>
  );

  await user.type(screen.getByPlaceholderText("Search"), "box-a");
  const targetBoxElement = screen.getByText(/box-a/i);
  expect(targetBoxElement).toBeInTheDocument();
});

test("no boxes", async () => {
  const history = createMemoryHistory();
  render(
    <Router location="/" navigator={history}>
      <BoxList boxes={[]} />
    </Router>
  );
  const noBoxesElement = screen.getByText(/no boxes/i);
  expect(noBoxesElement).toBeInTheDocument();
});

test("no search result", async () => {
  const user = userEvent.setup();
  const history = createMemoryHistory();
  render(
    <Router location="/" navigator={history}>
      <BoxList boxes={mockBoxes} />
    </Router>
  );

  await user.type(screen.getByPlaceholderText("Search"), "box-x");

  const noResultElement = screen.getByText(/no search result/i);
  expect(noResultElement).toBeInTheDocument();
});
