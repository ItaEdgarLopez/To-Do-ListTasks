/*  import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/index.js';
import './index.css';




ReactDOM.render(
  <App />,
  document.getElementById('root')
);
 */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css';


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


 


