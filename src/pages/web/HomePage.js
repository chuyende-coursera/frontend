import React, { Component } from "react";
import Carousel from "../../componentWeb/carousel/Carousel";
import BodyHomePage from "../../componentWeb/bodyHomePage/BodyHomePage";
class PostIndex extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <BodyHomePage />
      </div>
    );
  }
}

export default PostIndex;
