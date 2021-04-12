import { connect } from "react-redux";
import Users from "../../componentDashboard/users/Users";
import * as userActions from "../../actions/userActions";

const mapStateToProps = ({ users }) => {
  return {
    users,
  };
};

// const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  requestUser(filter, sort, range) {
    dispatch(userActions.requestUser(filter, sort, range));
  },
  requestUpdateUser(id, params) {
    dispatch(userActions.requestUpdateUser(id, params));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
