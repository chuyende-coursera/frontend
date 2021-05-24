import { connect } from "react-redux";
import Profile from "../componentWeb/profile/Profile";
import * as userActions from "../actions/userActions";

const mapStateToProps = ({ currentUser }) => {
  // debugger;
  return {
    currentUser,
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestUserCourse() {
    dispatch(userActions.requestCurrentUser());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
