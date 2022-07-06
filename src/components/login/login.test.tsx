import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { login_api } from "api/api-faker";
import { LoginErrorResponses } from "const/login";
import { Login } from "components/login";

test("page shown", async () => {
  const history = createMemoryHistory();
  render(
    <Router location="/" navigator={history}>
      <Login />
    </Router>
  );

  const loginTitle = screen.getByText("elenchus");
  expect(loginTitle).toBeInTheDocument();
});

test("form minimal length", async () => {
  const user = userEvent.setup();
  const history = createMemoryHistory();

  render(
    <Router location="/" navigator={history}>
      <Login />
    </Router>
  );

  await user.type(screen.getByLabelText("Username"), "short");
  await user.type(screen.getByLabelText("Password"), "short");
  await user.click(screen.getByRole("button", { name: "Login" }));
  expect(history.location.pathname).not.toEqual("/box");
});

test("wrong credentials", async () => {
  const user = userEvent.setup();
  const history = createMemoryHistory();

  jest
    .spyOn(login_api, "login")
    .mockImplementation((payload, successCallback, errorCallback) => {
      errorCallback?.({ payload: LoginErrorResponses.WRONG_CRED });
    });

  render(
    <Router location="/" navigator={history}>
      <Login />
    </Router>
  );

  await user.type(screen.getByLabelText("Username"), "username-login");
  await user.type(screen.getByLabelText("Password"), "password-login");
  await user.click(screen.getByRole("button", { name: "Login" }));

  await waitFor(async () => {
    const loginError = screen.getByText(/wrong-cred/);
    expect(loginError).toBeInTheDocument();
  });
});

test("submit callback to box", async () => {
  const user = userEvent.setup();
  const history = createMemoryHistory();

  jest
    .spyOn(login_api, "login")
    .mockImplementation((payload, successCallback, errorCallback) => {
      successCallback?.({ csfrToken: "test-csfr" });
    });

  render(
    <Router location="/" navigator={history}>
      <Login />
    </Router>
  );

  await user.type(screen.getByLabelText("Username"), "username-login");
  await user.type(screen.getByLabelText("Password"), "password-login");
  await user.click(screen.getByRole("button", { name: "Login" }));
  expect(history.location.pathname).toEqual("/box");
});
