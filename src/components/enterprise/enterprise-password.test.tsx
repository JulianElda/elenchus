import { render, screen, waitFor } from "@testing-library/react";
import { mock_enterprise_password } from "mocks/enterprise";

import EnterprisePassword from "./enterprise-password";

test("shows password settings", async () => {
  render(<EnterprisePassword {...mock_enterprise_password} />);

  await waitFor(async () => {
    const title = screen.getByText(/Password policy/i);
    expect(title).toBeInTheDocument();
  });
  await waitFor(async () => {
    const digits = screen.getByLabelText(/Use digits/i);
    expect(digits).not.toBeChecked();
  });
  await waitFor(async () => {
    const mixedCase = screen.getByLabelText(/Use mixed case/i);
    expect(mixedCase).not.toBeChecked();
  });
  await waitFor(async () => {
    const specialChar = screen.getByLabelText(/Use special char/i);
    expect(specialChar).toBeChecked();
  });
  await waitFor(async () => {
    const forceChange = screen.getByLabelText(/Force change/i);
    expect(forceChange).not.toBeChecked();
  });
  await waitFor(async () => {
    const changeInterval = screen.getByLabelText(/Change interval/i);
    expect(changeInterval).toHaveValue(0);
  });
  await waitFor(async () => {
    const minLength = screen.getByLabelText(/Minimum length/i);
    expect(minLength).toHaveValue(12);
  });
  await waitFor(async () => {
    const mixedCase = screen.getByLabelText(/mixed case/i);
    expect(mixedCase).not.toBeChecked();
  });
});
