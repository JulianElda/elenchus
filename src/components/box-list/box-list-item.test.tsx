import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BoxTypes } from "types";
import { BoxListItem } from "components/box-list";

test("render box name and navigate", async () => {
  const user = userEvent.setup();
  const history = createMemoryHistory();
  render(
    <Router location="/" navigator={history}>
      <BoxListItem name="test-name" id="test-id" type={BoxTypes.DATAROOM} />
    </Router>
  );
  const nameElement = screen.getByText(/test-name/i);
  expect(nameElement).toBeInTheDocument();
  await user.click(screen.getByText(/test-name/i));
  expect(history.location.pathname).toEqual("/box/test-id");
});
