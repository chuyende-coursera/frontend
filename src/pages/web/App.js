import React, { Component } from "react";
import AppContainer from "../../containers/AppContainer";

export default class App extends Component {
  render() {
    this.props.children;
    return <AppContainer></AppContainer>;
  }
}
