import { render, screen, waitFor } from "@testing-library/react";
import { enterprise_api } from "api/api-faker";
import { EnterpriseSoftwareResolver } from "components/enterprise";

import { mock_enterprise_software } from "mocks/enterprise";

test("shows loading", () => {
  render(<EnterpriseSoftwareResolver />);
  const loadingElement = screen.getByText(/loading/i);
  expect(loadingElement).toBeInTheDocument();
});

test("shows software settings", async () => {
  jest
    .spyOn(enterprise_api, "getSoftwareSettings")
    .mockImplementation((successCallback) => {
      successCallback?.(mock_enterprise_software);
    });

  render(<EnterpriseSoftwareResolver />);

  await waitFor(async () => {
    const title = screen.getByText(/Software settings/i);
    expect(title).toBeInTheDocument();
  });
});
