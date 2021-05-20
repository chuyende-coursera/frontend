import { connect } from "react-redux";
import Learn from "../componentWeb/learn/Learn";
import * as courseActions from "../actions/courseActions";

const mapStateToProps = ({ course }) => {
  return {
    course,
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestCourseDetail(id) {
    dispatch(courseActions.requestCourseDetail(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Learn);
