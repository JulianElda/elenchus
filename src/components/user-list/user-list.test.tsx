import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import UserList from "./user-list";

import { mock_userlist } from "mocks/user";

test("show users", async () => {
  const history = createMemoryHistory();
  render(
    <Router location="/" navigator={history}>
      {/* @ts-ignore} */}
      <UserList users={mock_userlist} />
    </Router>
  );
  const nameElement = screen.getByText(mock_userlist[0].userInfos.name);
  expect(nameElement).toBeInTheDocument();
});

test("search users", async () => {
  const user = userEvent.setup();
  const history = createMemoryHistory();
  render(
    <Router location="/" navigator={history}>
      {/* @ts-ignore} */}
      <UserList users={mock_userlist} />
    </Router>
  );
  const mockedUser = mock_userlist[0];
  await user.type(
    screen.getByPlaceholderText("Search"),
    mockedUser.userInfos.name
  );

  const nameElement = screen.getByText(mockedUser.userInfos.name);
  expect(nameElement).toBeInTheDocument();
});

test("no search result", async () => {
  const user = userEvent.setup();
  const history = createMemoryHistory();
  render(
    <Router location="/" navigator={history}>
      {/* @ts-ignore} */}
      <UserList users={mock_userlist} />
    </Router>
  );
  await user.type(screen.getByPlaceholderText("Search"), "Ahmedabad");

  const noResultElement = screen.getByText(/no search result/i);
  expect(noResultElement).toBeInTheDocument();
});

test("navigate to user page", async () => {
  const user = userEvent.setup();
  const history = createMemoryHistory();
  render(
    <Router location="/" navigator={history}>
      {/* @ts-ignore} */}
      <UserList users={mock_userlist} />
    </Router>
  );

  const mockedUser = mock_userlist[0];
  await user.click(screen.getByText(mockedUser.userInfos.name));
  expect(history.location.pathname).toEqual("/" + mockedUser.id);
});
