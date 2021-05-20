import { connect } from "react-redux";
import Header from "../componentWeb/header/Header";
import * as topicActions from "../actions/topicActions";
import * as loginActions from "../actions/loginActions";

const mapStateToProps = ({ topics, sessions }) => {
  return {
    topics,
    sessions,
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestTopics() {
    dispatch(topicActions.requestTopics());
  },

  requestLogoutUser() {
    dispatch(loginActions.requestLogoutUser());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
