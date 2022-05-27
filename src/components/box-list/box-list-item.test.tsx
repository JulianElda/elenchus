import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, screen } from "@testing-library/react";

import BoxListItem from "./box-list-item";
/*
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => (jest.fn())
}));
*/
test("renders BoxListItem name", async () => {
  const history = createMemoryHistory();
  render(
    <Router location="/" navigator={history}>
      <BoxListItem name="test-name" />
    </Router>
  );
  const nameElement = screen.getByText(/test-name/i);
  expect(nameElement).toBeInTheDocument();
});
