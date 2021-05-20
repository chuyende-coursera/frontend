import { connect } from "react-redux";
import Login from "../componentWeb/login/Login";
import * as loginActions from "../actions/loginActions";

// const mapStateToProps = ({ sessions }) => {
//   // ("state ", sessions);
//   // debugger;
//   return {
//     session: sessions.session,
//   };
// };

const mapDispatchToProps = (dispatch) => ({
  authenticateUser(e) {
    let { username, password } = e;

    dispatch(loginActions.requestAuthenticateUser(username, password));
  },
});

export default connect(null, mapDispatchToProps)(Login);
