import React from "react";
import ReactDOM from "react-dom";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import SignIn from "./components/SignIn";
import "./styles.css";

const routes = (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={SignIn} />
    </Routes>

  </BrowserRouter>
);

const rootElement = document.getElementById("root");
ReactDOM.render(routes, rootElement);