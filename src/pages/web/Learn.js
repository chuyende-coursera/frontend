import React, { Component, Fragment } from "react";
import LearnContainer from "../../containers/LearnContainer";
class Login extends Component {
  render() {
    return (
      <Fragment>
        <LearnContainer {...this.props} />
      </Fragment>
    );
  }
}

export default Login;
