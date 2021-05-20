import { connect } from "react-redux";
import Week from "../../componentDashboard/week/Week";
import * as courseActions from "../../actions/courseActions";
import * as weekActions from "../../actions/weekActions";

const mapStateToProps = ({ courses, weeks }) => {
  return {
    courses,
    weeks,
  };
};

// const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  requestCoursesDash(filter, sort, range) {
    dispatch(courseActions.requestCoursesDash(filter, sort, range));
  },
  requestWeeksDash(filter, sort, range) {
    dispatch(weekActions.requestWeeksDash(filter, sort, range));
  },
  requestCreateVideoDash(params) {
    dispatch(weekActions.requestCreateVideoDash(params));
  },
  requestUpdateVideoDash(id, params) {
    dispatch(weekActions.requestUpdateVideoDash(id, params));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Week);
