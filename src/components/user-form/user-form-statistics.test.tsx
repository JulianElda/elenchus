import { render, screen, waitFor } from "@testing-library/react";
import { mock_user_admin } from "mocks/user";
import { formatDate, formatSize } from "components/common/util";

import UserFormStatistics from "./user-form-statistics";

test("show statistics", async () => {
  //@ts-ignore
  render(<UserFormStatistics user={mock_user_admin} />)

  await waitFor(async () => {
    const drcount = screen.getByLabelText(/Count data rooms/i);
    expect(drcount).toHaveValue(mock_user_admin.statisticsUserBox.countDatarooms);
  });

  await waitFor(async () => {
    const creationDate = screen.getByLabelText(/Creation date/i);
    expect(creationDate).toHaveValue(formatDate(mock_user_admin.userCreation.registrationDate));
  });

  await waitFor(async () => {
    const bookedAccount = screen.getByLabelText(/Booked account/i);
    expect(bookedAccount).toHaveValue(formatSize(mock_user_admin.statisticsUserStorage?.bookedAccountStorage));
  });
})