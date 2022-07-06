import { render, screen, waitFor } from "@testing-library/react";
import { enterprise_api } from "api/api-faker";
import { EnterprisePasswordResolver } from "components/enterprise";

import { mock_enterprise_password } from "mocks/enterprise";

test("shows loading", () => {
  render(<EnterprisePasswordResolver />);
  const loadingElement = screen.getByText(/loading/i);
  expect(loadingElement).toBeInTheDocument();
});

test("shows password settings", async () => {
  jest
    .spyOn(enterprise_api, "getPasswordPolicy")
    .mockImplementation((successCallback) => {
      successCallback?.(mock_enterprise_password);
    });

  render(<EnterprisePasswordResolver />);

  await waitFor(async () => {
    const title = screen.getByText(/Password policy/i);
    expect(title).toBeInTheDocument();
  });
});
