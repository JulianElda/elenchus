import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import store from "store/store";
import { Provider } from "react-redux";

import "assets/styles/index.scss";
import "assets/styles/tailwind.css";
import "./i18n";

import AppRouting from "./app-routing";
import { Footer } from "components/footer";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <HashRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <React.Suspense fallback={<></>}>
              <AppRouting />
            </React.Suspense>
          }
        />
      </Routes>
    </HashRouter>
    <Footer />
  </Provider>
);
