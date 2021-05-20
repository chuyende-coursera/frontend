import { connect } from "react-redux";
import EditProfile from "../componentWeb/profile/EditProfile";
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

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
