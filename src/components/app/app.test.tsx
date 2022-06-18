import { Router } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { createMemoryHistory } from "history";
import { render, screen } from "@testing-library/react";
import clientConfigReducer from "store/client-config";
import { App } from "components/app";
import { mock_clientconfig_admin } from "mocks/clientConfiguration";
import { mock_user_admin } from "mocks/user";
import { Provider } from "react-redux";

const mockStore = configureStore({
  reducer: {
    clientConfig: clientConfigReducer,
  },
  preloadedState: {
    clientConfig: {
      data: mock_clientconfig_admin,
      loaded: true,
    },
  },
});

test("shows nick in toolbar", () => {
  const history = createMemoryHistory();

  render(
    <Provider store={mockStore}>
      <Router location="/" navigator={history}>
        <App
          clientConfiguration={mock_clientconfig_admin}
          user={mock_user_admin}
        />
      </Router>
    </Provider>
  );
  const nick = screen.getByText(mock_clientconfig_admin.nick);
  expect(nick).toBeInTheDocument();
});
