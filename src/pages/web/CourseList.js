import React, { Component, Fragment } from "react";
import CourseListContainer from "../../containers/CourseListContainer";
class CourseList extends Component {
  render() {
    return (
      <Fragment>
        <CourseListContainer {...this.props} />
      </Fragment>
    );
  }
}

export default CourseList;
