import { render, screen, waitFor } from "@testing-library/react";
import * as api from "api/api";
import { mock_enterprise_software } from "mocks/enterprise";

import EnterpriseSoftwareResolver from "./enterprise-software-resolver";

test("shows loading", () => {
  render(<EnterpriseSoftwareResolver />);
  const loadingElement = screen.getByText(/loading/i);
  expect(loadingElement).toBeInTheDocument();
});

test("shows software settings", async () => {
  jest
    .spyOn(api, "getSoftwareSettings")
    .mockImplementation((successCallback) => {
      successCallback(mock_enterprise_software);
    });

  render(<EnterpriseSoftwareResolver />);

  await waitFor(async () => {
    const title = screen.getByText(/Software settings/i);
    expect(title).toBeInTheDocument();
  });
});
