import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { createMemoryHistory } from "history";
import { render, screen } from "@testing-library/react";
import boxListReducer from "store/box-list";
import clientConfigReducer from "store/client-config";
import { App } from "components/app";
import { mock_clientconfig_admin } from "mocks/clientConfiguration";
import { mock_user_admin } from "mocks/user";

const mockStore = configureStore({
  reducer: {
    clientConfig: clientConfigReducer,
    boxList: boxListReducer,
  },
  preloadedState: {
    clientConfig: {
      data: mock_clientconfig_admin,
      loaded: true,
    },
    boxList: {
      data: [],
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
