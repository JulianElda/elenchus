import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, screen } from "@testing-library/react";
import App from "./app";

test("shows nick in toolbar", () => {
  const history = createMemoryHistory();

  let clientConfiguration = { nick: "Jono" };
  render(
    <Router location="/" navigator={history}>
      <App clientConfiguration={clientConfiguration} />
    </Router>
  );
  const nick = screen.getByText(/Jono/i);
  expect(nick).toBeInTheDocument();
});
