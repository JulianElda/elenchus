import { render, screen, waitFor } from "@testing-library/react";
import { enterprise_api } from "api/api-faker";
import { EnterpriseBoxResolver } from "components/enterprise";

import { mock_enterprise_box } from "mocks/enterprise";

test("shows loading", () => {
  render(<EnterpriseBoxResolver />);
  const loadingElement = screen.getByText(/loading/i);
  expect(loadingElement).toBeInTheDocument();
});

test("shows box settings", async () => {
  jest
    .spyOn(enterprise_api, "getBoxSettings")
    .mockImplementation((successCallback) => {
      successCallback?.(mock_enterprise_box);
    });

  render(<EnterpriseBoxResolver />);

  await waitFor(async () => {
    const title = screen.getByText(/Box settings/i);
    expect(title).toBeInTheDocument();
  });
});
