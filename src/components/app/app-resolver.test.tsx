import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createMemoryHistory } from "history";
import { render, screen, waitFor } from "@testing-library/react";
import api from "api/api";
import store from "store/store";
import { AppResolver } from "components/app";
import {
  mock_clientconfig_admin,
  mock_clientconfig_full,
  mock_clientconfig_guest,
} from "mocks/clientConfiguration";
import { mock_user_admin, mock_user_full } from "mocks/user";

test("shows loading", () => {
  render(
    <Provider store={store}>
      <AppResolver />
    </Provider>
  );
  const loadingElement = screen.getByText(/loading/i);
  expect(loadingElement).toBeInTheDocument();
});

test.skip("shows app for admin type", async () => {
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
    <Provider store={store}>
      <Router location="/" navigator={history}>
        <AppResolver />
      </Router>
    </Provider>
  );

  await waitFor(async () => {
    const nickElement = screen.getByText(mock_clientconfig_admin.nick);
    expect(nickElement).toBeInTheDocument();
  });
});

test.skip("shows app for full license", async () => {
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
    <Provider store={store}>
      <Router location="/" navigator={history}>
        <AppResolver />
      </Router>
    </Provider>
  );

  await waitFor(async () => {
    const nickElement = screen.getByText(mock_clientconfig_full.nick);
    expect(nickElement).toBeInTheDocument();
  });
});

test.skip("shows no access for guest", async () => {
  const history = createMemoryHistory();
  jest
    .spyOn(api, "getClientConfiguration")
    .mockImplementation((successCallback) => {
      successCallback?.(mock_clientconfig_guest);
    });

  render(
    <Provider store={store}>
      <Router location="/" navigator={history}>
        <AppResolver />
      </Router>
    </Provider>
  );

  await waitFor(async () => {
    const noAccess = screen.getByText(/no access/i);
    expect(noAccess).toBeInTheDocument();
  });
});
