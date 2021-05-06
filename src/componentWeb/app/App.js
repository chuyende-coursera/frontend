// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { Component } from "react";

export default class App extends Component {
  render() {
    ("App JS");
    return <div>{this.props.children}</div>;
  }
}
