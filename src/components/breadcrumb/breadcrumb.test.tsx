import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { RecoilRoot } from "recoil";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Breadcrumb from "./breadcrumb";

test("show home root", async () => {
  const user = userEvent.setup();
  const history = createMemoryHistory();
  render(
    <RecoilRoot>
      <Router location="/" navigator={history}>
        <Breadcrumb />
      </Router>
    </RecoilRoot>
  );
  const homeElement = screen.getByText(/home/i);
  expect(homeElement).toBeInTheDocument();

  await user.click(screen.getByRole("listitem", { name: "" }));
  expect(history.location.pathname).toEqual("/box");
});
