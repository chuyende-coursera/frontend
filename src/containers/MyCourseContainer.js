import { connect } from "react-redux";
// import { fetchPosts, resetDeletedPost, deletePost, deletePostSuccess, deletePostFailure } from '../actions/posts';
// import { logoutUser } from '../actions/users';
import MyCourse from "../componentWeb/myCourse/MyCourse";
import * as userCourseActions from "../actions/userCourseActions";
import * as userActions from "../actions/userActions";

const mapStateToProps = ({ userCourse, currentUser }) => {
  // debugger;
  return {
    userCourse,
    currentUser,
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestUserCourse(filter, sort, range) {
    dispatch(userCourseActions.requestUserCourse(filter, sort, range));
  },
  requestCurrentUser() {
    dispatch(userActions.requestCurrentUser());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MyCourse);
