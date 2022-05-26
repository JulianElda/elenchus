import React from "react";
import { Router, unstable_HistoryRouter } from "react-router-dom";
import { createMemoryHistory } from 'history'
import { act, render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

import axios from "api/axios";
import Login from "./login";

test("login header", async () => {
  const history = createMemoryHistory();
  render(
    <Router location="/" navigator={history}>
      <Login />
    </Router>
  );
  const loginTitle = screen.getByTestId("login-header");
  expect(loginTitle).toBeInTheDocument();

})