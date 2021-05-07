import { connect } from "react-redux";
import Review from "../../componentDashboard/inventory/Review";
import * as userCourseActions from "../../actions/userCourseActions";

const mapStateToProps = ({ userCourse }) => {
  return {
    userCourse,
  };
};

// const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  requestUserCourse(filter, sort, range) {
    dispatch(userCourseActions.requestUserCourse(filter, sort, range));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Review);
