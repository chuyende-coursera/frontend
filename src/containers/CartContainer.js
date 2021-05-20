import { connect } from "react-redux";
import Cart from "../componentWeb/cart/Cart";
import * as userCourseActions from "../actions/userCourseActions";
import * as courseActions from "../actions/courseActions";
import * as userActions from "../actions/userActions";

const mapStateToProps = ({ userCourse, currentUser }) => {
  return {
    userCourse,
    currentUser,
  };
};

// const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  requestUserCourse(filter, sort, range) {
    dispatch(userCourseActions.requestUserCourse(filter, sort, range));
  },
  requestBuyCourse(param) {
    dispatch(courseActions.requestBuyCourse(param));
  },
  requestDeleteUserCourse(id, params) {
    dispatch(userCourseActions.requestDeleteUserCourse(id, params));
  },
  requestUpdateUserCourseByUserId(params) {
    dispatch(userCourseActions.requestUpdateUserCourseByUserId(params));
  },
  requestCurrentUser() {
    dispatch(userActions.requestCurrentUser());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
