import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.css';

import './index.css';
import App from './App';
import BoxList from "./components/box-list/box-list";
import FileList from "./components/file-list/file-list";
import Login from "./components/login/login";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="login" element={<Login />}/>
          <Route path="list" element={<BoxList />}/>
          <Route path="file" element={<FileList />}>
            <Route path=":boxId" element={<FileList />}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
