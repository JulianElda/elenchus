import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "store/store";
import { Provider } from "react-redux";
//import reportWebVitals from "./reportWebVitals";

//import "bootstrap/dist/css/bootstrap.css";
//import "bootstrap/dist/js/bootstrap.bundle.min.js";
//import "./index.scss";
import "assets/styles/inter.css";
import "assets/styles/tailwind.css";
import "./i18n";
import AppRouting from "./app-routing";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
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
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
