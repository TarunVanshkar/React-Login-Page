import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";
import {BrowserRouter} from "react-router-dom";    //Curly braces mandatory here

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById("root"));
