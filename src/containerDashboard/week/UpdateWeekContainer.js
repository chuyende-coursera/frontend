import { connect } from "react-redux";
import UpdateWeek from "../../componentDashboard/week/UpdateWeek";
import * as courseActions from "../../actions/courseActions";
import * as userActions from "../../actions/userActions";
import * as weekActions from "../../actions/weekActions";

const mapStateToProps = ({ courses, week, currentUser }) => {
  return {
    courses,
    week,
    currentUser,
  };
};

// const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  requestCoursesDash(filter, sort, range) {
    dispatch(courseActions.requestCoursesDash(filter, sort, range));
  },
  requestWeekDetail(id) {
    dispatch(weekActions.requestWeekDetail(id));
  },
  requestCurrentUser() {
    dispatch(userActions.requestCurrentUser());
  },
  requestUpdateWeekDash(id, params) {
    dispatch(weekActions.requestUpdateWeekDash(id, params));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateWeek);
