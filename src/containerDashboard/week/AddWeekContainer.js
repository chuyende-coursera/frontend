import { connect } from "react-redux";
import AddWeek from "../../componentDashboard/week/AddWeek";
import * as courseActions from "../../actions/courseActions";
import * as weekActions from "../../actions/weekActions";

const mapStateToProps = ({ courses, weeks }) => ({
  courses,
  weeks,
});

const mapDispatchToProps = (dispatch) => ({
  requestCoursesDash(filter, sort, range) {
    dispatch(courseActions.requestCoursesDash(filter, sort, range));
  },
  requestCreateWeeksDash(param) {
    dispatch(weekActions.requestCreateWeeksDash(param));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddWeek);
