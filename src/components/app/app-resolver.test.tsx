import { render, screen, waitFor } from "@testing-library/react";
import * as api from "api/api";
import {
  mock_clientConfiguration_admin,
  mock_clientConfiguration_full,
  mock_clientConfiguration_guest,
} from "mocks/clientConfiguration";
import { mock_user_admin, mock_user_full } from "mocks/user";
import AppResolver from "./app-resolver";

test("shows loading", () => {
  render(<AppResolver />);
  const loadingElement = screen.getByText(/loading app/i);
  expect(loadingElement).toBeInTheDocument();
});

test("shows app for admin type", async () => {
  jest
    .spyOn(api, "getClientConfiguration")
    .mockImplementation((successCallback) => {
      successCallback(mock_clientConfiguration_admin);
    });

  jest.spyOn(api, "getUser").mockImplementation((id, successCallback) => {
    successCallback(mock_user_admin);
  });

  render(<AppResolver />);

  await waitFor(async () => {
    const nickElement = screen.getByText(mock_clientConfiguration_admin.nick);
    expect(nickElement).toBeInTheDocument();
  });
});

test("shows app for full license", async () => {
  jest
    .spyOn(api, "getClientConfiguration")
    .mockImplementation((successCallback) => {
      successCallback(mock_clientConfiguration_full);
    });

  jest.spyOn(api, "getUser").mockImplementation((id, successCallback) => {
    successCallback(mock_user_full);
  });

  render(<AppResolver />);

  await waitFor(async () => {
    const nickElement = screen.getByText(mock_clientConfiguration_full.nick);
    expect(nickElement).toBeInTheDocument();
  });
});

test("shows no access for guest", async () => {
  jest
    .spyOn(api, "getClientConfiguration")
    .mockImplementation((successCallback) => {
      successCallback(mock_clientConfiguration_guest);
    });

  render(<AppResolver />);

  await waitFor(async () => {
    const noAccess = screen.getByText(/no access/i);
    expect(noAccess).toBeInTheDocument();
  });
});
