import { render, screen, waitFor } from "@testing-library/react";
import { enterprise_api } from "api/api-faker";
import { EnterpriseTimeoutResolver } from "components/enterprise";

import { mock_enterprise_timeout } from "mocks/enterprise";

test("shows loading", () => {
  render(<EnterpriseTimeoutResolver />);
  const loadingElement = screen.getByText(/loading/i);
  expect(loadingElement).toBeInTheDocument();
});

test("shows timeout settings", async () => {
  jest
    .spyOn(enterprise_api, "getDefaultSessionTimeout")
    .mockImplementation((successCallback) => {
      successCallback?.(mock_enterprise_timeout);
    });

  render(<EnterpriseTimeoutResolver />);

  await waitFor(async () => {
    const title = screen.getByText(/Timeout settings/i);
    expect(title).toBeInTheDocument();
  });
});
