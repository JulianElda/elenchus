import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, screen, waitFor } from "@testing-library/react";
import api from "api/api";
import {
  mock_clientconfig_admin,
  mock_clientconfig_full,
  mock_clientconfig_guest,
} from "mocks/clientConfiguration";
import { mock_user_admin, mock_user_full } from "mocks/user";
import AppResolver from "./app-resolver";

test("shows loading", () => {
  render(<AppResolver />);
  const loadingElement = screen.getByText(/loading/i);
  expect(loadingElement).toBeInTheDocument();
});

test("shows app for admin type", async () => {
  const history = createMemoryHistory();

  jest
    .spyOn(api, "getClientConfiguration")
    .mockImplementation((successCallback) => {
      successCallback?.(mock_clientconfig_admin);
    });

  jest.spyOn(api, "getUser").mockImplementation((id, successCallback) => {
    successCallback?.(mock_user_admin);
  });

  render(
    <Router location="/" navigator={history}>
      <AppResolver />
    </Router>
  );

  await waitFor(async () => {
    const nickElement = screen.getByText(mock_clientconfig_admin.nick);
    expect(nickElement).toBeInTheDocument();
  });
});

test("shows app for full license", async () => {
  const history = createMemoryHistory();

  jest
    .spyOn(api, "getClientConfiguration")
    .mockImplementation((successCallback) => {
      successCallback?.(mock_clientconfig_full);
    });

  jest.spyOn(api, "getUser").mockImplementation((id, successCallback) => {
    successCallback?.(mock_user_full);
  });

  render(
    <Router location="/" navigator={history}>
      <AppResolver />
    </Router>
  );

  await waitFor(async () => {
    const nickElement = screen.getByText(mock_clientconfig_full.nick);
    expect(nickElement).toBeInTheDocument();
  });
});

test("shows no access for guest", async () => {
  const history = createMemoryHistory();
  jest
    .spyOn(api, "getClientConfiguration")
    .mockImplementation((successCallback) => {
      successCallback?.(mock_clientconfig_guest);
    });

  render(
    <Router location="/" navigator={history}>
      <AppResolver />
    </Router>
  );

  await waitFor(async () => {
    const noAccess = screen.getByText(/no access/i);
    expect(noAccess).toBeInTheDocument();
  });
});
