import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, screen, waitFor } from "@testing-library/react";
import api from "api/api-faker";
import { UserViewResolver } from "components/user-view";
import { mock_userlist } from "mocks/user";

test("renders loading", () => {
  render(<UserViewResolver />);
  const loadingElement = screen.getByText(/loading/i);
  expect(loadingElement).toBeInTheDocument();
});

test("load user", async () => {
  const history = createMemoryHistory();
  const mockedUser = mock_userlist[0];

  jest
    .spyOn(api, "getUser")
    .mockImplementation((id, successCallback, errorCallback) => {
      successCallback?.(mockedUser);
    });

  render(
    <Router location="/" navigator={history}>
      <UserViewResolver />
    </Router>
  );

  await waitFor(async () => {
    const nameElement = screen.getByLabelText("Name");
    expect(nameElement).toHaveValue(mockedUser.userInfos.name);
  });
});
