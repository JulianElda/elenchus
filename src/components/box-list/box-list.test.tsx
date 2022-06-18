import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, screen } from "@testing-library/react";
import { BoxList } from "components/box-list";

import { mock_boxes_partial } from "mocks/box";

test("render box list", async () => {
  const history = createMemoryHistory();
  render(
    <Router location="/" navigator={history}>
      <BoxList boxes={mock_boxes_partial.listBoxes} />
    </Router>
  );
  const nameElement = screen.getByText(mock_boxes_partial.listBoxes[0].name);
  expect(nameElement).toBeInTheDocument();
});

test("no boxes", async () => {
  const history = createMemoryHistory();
  render(
    <Router location="/" navigator={history}>
      <BoxList boxes={[]} />
    </Router>
  );
  const noBoxesElement = screen.getByText(/no items/i);
  expect(noBoxesElement).toBeInTheDocument();
});

test("sort box list", async () => {
  const history = createMemoryHistory();
  render(
    <Router location="/" navigator={history}>
      <BoxList boxes={mock_boxes_partial.listBoxes} />
    </Router>
  );

  let sortedBoxesElement = screen.getAllByText(/box-/i);

  expect(sortedBoxesElement[0]).toHaveTextContent(/box-a/i);
  expect(sortedBoxesElement[1]).toHaveTextContent(/box-b/i);
  expect(sortedBoxesElement[2]).toHaveTextContent(/box-n/i);
  expect(sortedBoxesElement[3]).toHaveTextContent(/box-x/i);
});
