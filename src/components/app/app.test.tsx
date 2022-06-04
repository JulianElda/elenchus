import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, screen } from "@testing-library/react";
import { mock_clientConfiguration_admin } from "mocks/clientConfiguration";
import { mock_user_admin } from "mocks/user";
import App from "./app";

test("shows nick in toolbar", () => {
  const history = createMemoryHistory();

  render(
    <Router location="/" navigator={history}>
      <App
        clientConfiguration={mock_clientConfiguration_admin}
        user={mock_user_admin}
      />
    </Router>
  );
  const nick = screen.getByText(mock_clientConfiguration_admin.nick);
  expect(nick).toBeInTheDocument();
});
