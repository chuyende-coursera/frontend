import { connect } from "react-redux";
import Signin from "../componentWeb/login/Signin";
import * as loginActions from "../actions/loginActions";

const mapDispatchToProps = (dispatch) => ({
  requestUserCourse(params) {
    dispatch(loginActions.requestRegisterUser(params));
  },
});

export default connect(null, mapDispatchToProps)(Signin);
