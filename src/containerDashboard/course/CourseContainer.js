import { connect } from "react-redux";
import Course from "../../componentDashboard/course/Course";
import * as courseActions from "../../actions/courseActions";

const mapStateToProps = ({ courses }) => {
  return {
    courses,
  };
};

// const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  requestCoursesDash(filter, sort, range) {
    dispatch(courseActions.requestCoursesDash(filter, sort, range));
  },
  deleteCourses(id) {
    dispatch(courseActions.requestDeleteCourse(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Course);
