import React from "react";
import ReactDOM from "react-dom";
import App from "./Weatherapp/App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"; //due to this all bootstrap 5 components working 
import Weather from "./Weatherapp/Weather";


ReactDOM.render(
  <>
    <Weather/>
  </>,
  document.getElementById('root')
)