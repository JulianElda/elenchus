import { render, screen, waitFor } from "@testing-library/react";
import * as api from "api/api";
import { mock_enterprise_password } from "mocks/enterprise";

import EnterprisePasswordResolver from "./enterprise-password-resolver";

test("shows loading", () => {
  render(<EnterprisePasswordResolver />);
  const loadingElement = screen.getByText(/loading/i);
  expect(loadingElement).toBeInTheDocument();
});

test("shows password settings", async () => {
  jest.spyOn(api, "getPasswordPolicy").mockImplementation((successCallback) => {
    successCallback(mock_enterprise_password);
  });

  render(<EnterprisePasswordResolver />);

  await waitFor(async () => {
    const title = screen.getByText(/Password policy/i);
    expect(title).toBeInTheDocument();
  });
});
