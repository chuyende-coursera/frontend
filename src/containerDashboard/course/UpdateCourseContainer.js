import { connect } from "react-redux";
import UpdateCourse from "../../componentDashboard/course/UpdateCourse";
import * as courseActions from "../../actions/courseActions";
import * as languageActions from "../../actions/languageActions";
import * as skillActions from "../../actions/skillActions";
import * as jobActions from "../../actions/jobActions";
import * as topicActions from "../../actions/topicActions";

const mapStateToProps = ({
  skills,
  languages,
  jobs,
  topics,
  course,
  courses,
}) => ({
  skills,
  languages,
  jobs,
  topics,
  course,
  courses,
});

const mapDispatchToProps = (dispatch) => ({
  requestUpdateCoursesDash(id, params) {
    dispatch(courseActions.requestUpdateCoursesDash(id, params));
  },
  requestCourseDetail(id) {
    dispatch(courseActions.requestCourseDetail(id));
  },
  requestLanguagesDash(param) {
    dispatch(languageActions.requestLanguagesDash(param));
  },
  requestSkillsDash(param) {
    dispatch(skillActions.requestSkillsDash(param));
  },
  requestJobsDash(param) {
    dispatch(jobActions.requestJobsDash(param));
  },
  requestTopics(param) {
    dispatch(topicActions.requestTopics(param));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateCourse);
