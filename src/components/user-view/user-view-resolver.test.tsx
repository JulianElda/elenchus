import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, screen, waitFor } from "@testing-library/react";

import axios from "api/axios";
import UserListResolver from "components/user-list/user-list-resolver";
import {mock_userlist} from "mocks/user"

test("renders loading", () => {
  render(<UserListResolver />);
  const loadingElement = screen.getByText(/loading user/i);
  expect(loadingElement).toBeInTheDocument();
});

test.skip("load user", async () => {
  const history = createMemoryHistory();
  const mockedUser = mock_userlist[0]

  jest.spyOn(axios, "get").mockImplementation(() => {
    return Promise.resolve({
      then: (callback: any) => {
        callback(mockedUser);
      },
    });
  });

  render(
    <Router location="/" navigator={history}>
      {/* @ts-ignore} */}
      <UserListResolver />
    </Router>
  );

  await waitFor(async () => {
    const nameElement = screen.getByText(mockedUser.userInfos.name);
    expect(nameElement).toBeInTheDocument();
  });

})