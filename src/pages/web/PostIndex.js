import React, { Component } from "react";
import HeaderContainer from "../../containers/HeaderContainer";
class PostIndex extends Component {
  render() {
    return (
      <div>
        <HeaderContainer {...this.props} />
      </div>
    );
  }
}

export default PostIndex;
