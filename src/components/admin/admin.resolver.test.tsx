import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";

import { AdminResolver } from "components/admin";
import clientConfigReducer from "store/client-config";

import { mock_clientconfig_guest } from "mocks/clientConfiguration";

const mockStore = configureStore({
  reducer: {
    clientConfig: clientConfigReducer,
  },
  preloadedState: {
    clientConfig: {
      data: mock_clientconfig_guest,
      loaded: false,
    },
  },
});

test("not an admin", () => {
  render(
    <Provider store={mockStore}>
      <AdminResolver />
    </Provider>
  );

  const notAdminElement = screen.getByText("not an admin");
  expect(notAdminElement).toBeInTheDocument();
});
