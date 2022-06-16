import { render, screen, waitFor } from "@testing-library/react";
import { EnterpriseBox } from "components/enterprise";

import { mock_enterprise_box } from "mocks/enterprise";

test("shows box settings", async () => {
  render(<EnterpriseBox {...mock_enterprise_box} />);

  await waitFor(async () => {
    const title = screen.getByText(/Box settings/i);
    expect(title).toBeInTheDocument();
  });
  await waitFor(async () => {
    const canCreateBox = screen.getByLabelText(/Can create privacy box/i);
    expect(canCreateBox).toBeChecked();
  });
  await waitFor(async () => {
    const canCreateDataRoom = screen.getByLabelText(/Can create data room/i);
    expect(canCreateDataRoom).not.toBeChecked();
  });
  await waitFor(async () => {
    const quarantinePolicy = screen.getByLabelText(/Quarantine policy/i);
    expect(quarantinePolicy).toHaveValue(2);
  });
  await waitFor(async () => {
    const tempBoxDays = screen.getByLabelText(/Temp box policy/i);
    expect(tempBoxDays).toHaveValue(90);
  });
});
