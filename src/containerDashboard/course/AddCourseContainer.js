import { connect } from "react-redux";
import AddCourse from "../../componentDashboard/course/AddCourse";
import * as courseActions from "../../actions/courseActions";
import * as languageActions from "../../actions/languageActions";
import * as skillActions from "../../actions/skillActions";
import * as jobActions from "../../actions/jobActions";
import * as topicActions from "../../actions/topicActions";

const mapStateToProps = ({ skills, languages, jobs, topics, course }) => ({
  skills,
  languages,
  jobs,
  topics,
  course,
});

const mapDispatchToProps = (dispatch) => ({
  requestCreateCoursesDash(param) {
    dispatch(courseActions.requestCreateCoursesDash(param));
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

export default connect(mapStateToProps, mapDispatchToProps)(AddCourse);
