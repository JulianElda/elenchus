import { render, screen, waitFor } from "@testing-library/react";
import { LoginValidationTypeOrNone } from "idg-types/LoginValidationTypeOrNone";
import { UserPermissions } from "idg-types/UserPermissions";
import { UserView } from "components/user-view";

import { mock_user_admin } from "mocks/user";

test("show user info", async () => {
  //@ts-ignore
  render(<UserView user={mock_user_admin} />);

  await waitFor(async () => {
    const name = screen.getByLabelText(/name/i);
    expect(name).toHaveValue(mock_user_admin.userInfos.name);
  });

  await waitFor(async () => {
    const license = screen.getByLabelText(/License type/i);
    expect(license).toHaveValue(mock_user_admin.userInfos.type);
  });

  await waitFor(async () => {
    const hourly = screen.getByLabelText(/Hourly notification/i);
    expect(hourly).not.toBeChecked();
  });

  await waitFor(async () => {
    const daily = screen.getByLabelText(/Daily notification/i);
    expect(daily).toBeChecked();
  });
});

test("show user creation", async () => {
  //@ts-ignore
  render(<UserView user={mock_user_admin} />);

  await waitFor(async () => {
    const expiration = screen.getByLabelText(/Expiration date/i);
    expect(expiration).toHaveValue("");
  });
  await waitFor(async () => {
    const login2fa = screen.getByLabelText(/2fa login type/i);
    expect(login2fa).toHaveValue(LoginValidationTypeOrNone.NONE);
  });
  await waitFor(async () => {
    const register2fa = screen.getByLabelText(/2fa registration type/i);
    expect(register2fa).toHaveValue(LoginValidationTypeOrNone.NONE);
  });
});

test("show user permissions", async () => {
  //@ts-ignore
  render(<UserView user={mock_user_admin} />);

  await waitFor(async () => {
    const visibility = screen.getByLabelText(/Visibility/i);
    expect(visibility).toHaveValue(UserPermissions.visibility.ALL);
  });
  await waitFor(async () => {
    const tempLifeTime = screen.getByLabelText(/Temporary box lifetime/i);
    expect(tempLifeTime).toHaveValue(90);
  });
  await waitFor(async () => {
    const technicalAdmin = screen.getByLabelText(/Technical admin/i);
    expect(technicalAdmin).toBeChecked();
  });
});
