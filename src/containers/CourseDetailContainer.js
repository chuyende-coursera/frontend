import { connect } from "react-redux";
import CourseDetail from "../componentWeb/courseDetail/CourseDetail";
import * as courseActions from "../actions/courseActions";
import * as userCourseActions from "../actions/userCourseActions";

const mapStateToProps = ({ course, userCourse }) => {
  return {
    course,
    userCourse,
  };
};

// const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  requestCourseDetail(id) {
    dispatch(courseActions.requestCourseDetail(id));
  },
  requestBuyCourse(param) {
    dispatch(courseActions.requestBuyCourse(param));
  },
  requestUserCourseWeb(filter, sort, range) {
    dispatch(userCourseActions.requestUserCourseWeb(filter, sort, range));
  },
  requestCommentByUserId(params) {
    dispatch(userCourseActions.requestCommentByUserId(params));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetail);
