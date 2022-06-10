import { render, screen, waitFor } from "@testing-library/react";
import * as api from "api/api";
import { mock_enterprise_timeout } from "mocks/enterprise";

import EnterpriseTimeoutResolver from "./enterprise-timeout-resolver";

test("shows loading", () => {
  render(<EnterpriseTimeoutResolver />);
  const loadingElement = screen.getByText(/loading/i);
  expect(loadingElement).toBeInTheDocument();
});

test("shows timeout settings", async () => {
  jest
    .spyOn(api, "getDefaultSessionTimeout")
    .mockImplementation((successCallback) => {
      successCallback(mock_enterprise_timeout);
    });

  render(<EnterpriseTimeoutResolver />);

  await waitFor(async () => {
    const title = screen.getByText(/Timeout settings/i);
    expect(title).toBeInTheDocument();
  });
});