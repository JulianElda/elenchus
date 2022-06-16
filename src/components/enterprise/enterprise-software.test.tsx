import { render, screen, waitFor } from "@testing-library/react";
import { LoginValidationTypeOrNone } from "idg-types/LoginValidationTypeOrNone";
import { EnterpriseSoftware } from "components/enterprise";

import { mock_enterprise_software } from "mocks/enterprise";

test("shows software settings", async () => {
  render(<EnterpriseSoftware {...mock_enterprise_software} />);

  await waitFor(async () => {
    const title = screen.getByText(/Software settings/i);
    expect(title).toBeInTheDocument();
  });
  await waitFor(async () => {
    const certificatecheck = screen.getByLabelText(/Certificate check/i);
    expect(certificatecheck).toBeChecked();
  });
  await waitFor(async () => {
    const serverSideInvitation = screen.getByLabelText(
      /Server side invitation/i
    );
    expect(serverSideInvitation).not.toBeChecked();
  });
  await waitFor(async () => {
    const quarantinePolicy = screen.getByLabelText(/Type/i);
    expect(quarantinePolicy).toHaveValue(LoginValidationTypeOrNone.PASSCODE);
  });
});
