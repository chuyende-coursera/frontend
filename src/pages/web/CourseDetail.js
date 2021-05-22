import React, { Component, Fragment } from "react";
import CourseDetailContainer from "../../containers/CourseDetailContainer";
class CourseList extends Component {
  render() {
    return (
      <Fragment>
        <CourseDetailContainer {...this.props} />
      </Fragment>
    );
  }
}

export default CourseList;
