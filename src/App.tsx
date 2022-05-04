import React from 'react';
import { Outlet} from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
    <div className="app-container container-fluid">
      <h2>App</h2>
      <Outlet />
    </div>
    </>
  );
}

export default App;
