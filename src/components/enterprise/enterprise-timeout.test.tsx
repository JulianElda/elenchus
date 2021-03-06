import { render, screen, waitFor } from "@testing-library/react";
import { EnterpriseTimeout } from "components/enterprise";

import { mock_enterprise_timeout } from "mocks/enterprise";

test("shows timeout settings", async () => {
  render(<EnterpriseTimeout {...mock_enterprise_timeout} />);

  await waitFor(async () => {
    const title = screen.getByText(/Timeout settings/i);
    expect(title).toBeInTheDocument();
  });
  await waitFor(async () => {
    const forced = screen.getByLabelText(/Forced/i);
    expect(forced).toBeChecked();
  });

  await waitFor(async () => {
    const timeout = screen.getByLabelText(/Timeout/i);
    expect(timeout).toHaveValue(90);
  });
});
