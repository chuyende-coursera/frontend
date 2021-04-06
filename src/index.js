/* eslint-disable react/prop-types */
import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import routes from "./routers";
// import routerDashboard from "./routerDashboard";
import history from "./store/history";
import "./index.css";
import store from "./store/configureStore";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>{routes}</Router>
  </Provider>,
  document.getElementById("app")
);
