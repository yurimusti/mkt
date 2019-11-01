import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/App.scss";
import './polyfills'
import "@babel/polyfill";
import 'react-app-polyfill/stable';

ReactDOM.render(<App />, document.getElementById("root"));
