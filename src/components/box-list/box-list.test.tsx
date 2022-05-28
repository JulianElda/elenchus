import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import BoxList from "./box-list";
import { IdgardBox } from "types/IdgardBox";

const mockBoxes = [
  { id: "1", name: "box-B", type: IdgardBox.type.DATAROOM },
  { id: "2", name: "box-A", type: IdgardBox.type.FILE },
  { id: "3", name: "box-C", type: IdgardBox.type.TEMPORARY },
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

test("sort box list", async () => {
  const user = userEvent.setup();
  const history = createMemoryHistory();
  render(
    <Router location="/" navigator={history}>
      <BoxList boxes={mockBoxes} />
    </Router>
  );

  await user.click(screen.getByRole("option", { name: "Name" }));
  let sortedBoxesElement = screen.getAllByText(/box-/i);

  expect(sortedBoxesElement[0]).toHaveTextContent(/box-a/i);
  expect(sortedBoxesElement[1]).toHaveTextContent(/box-b/i);
  expect(sortedBoxesElement[2]).toHaveTextContent(/box-c/i);

  await user.click(screen.getByRole("option", { name: "Type" }));
  sortedBoxesElement = screen.getAllByText(/box-/i);

  expect(sortedBoxesElement[0]).toHaveTextContent(/box-b/i);
  expect(sortedBoxesElement[1]).toHaveTextContent(/box-a/i);
  expect(sortedBoxesElement[2]).toHaveTextContent(/box-c/i);
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
