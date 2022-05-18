import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
//import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.css';

import './index.css';
import { App, AppRouting } from './App';
import BoxList from "./components/box-list/box-list";
import FileList from "./components/file-list/file-list";
import Login from "./components/login/login";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <h1>index</h1>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Navigate to="/box" />}/>
        <Route path="login" element={<Login />}/>
        <Route path="/*"
          element={
            <React.Suspense fallback={<>...</>}>
              <AppRouting />
            </React.Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
