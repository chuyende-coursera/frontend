import { connect } from "react-redux";
// import { fetchPosts, resetDeletedPost, deletePost, deletePostSuccess, deletePostFailure } from '../actions/posts';
// import { logoutUser } from '../actions/users';
import CourseList from "../componentWeb/courseList/CourseList";
import * as courseActions from "../actions/courseActions";
import * as languageActions from "../actions/languageActions";
import * as skillActions from "../actions/skillActions";
import * as jobActions from "../actions/jobActions";
import * as topicActions from "../actions/topicActions";

const mapStateToProps = ({ topics, courses, languages, jobs, skills }) => {
  // debugger;
  return {
    topics,
    courses,
    languages,
    jobs,
    skills,
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestCourses(filter, sort, range) {
    dispatch(courseActions.requestCourses(filter, sort, range));
  },
  requestLanguagesDash(param) {
    dispatch(languageActions.requestLanguagesDash(param));
  },
  requestSkillsDash(param) {
    dispatch(skillActions.requestSkillsDash(param));
  },
  requestJobsDash(param) {
    console.log("param: ", param);
    dispatch(jobActions.requestJobsDash(param));
  },
  requestTopics(param) {
    console.log("param: ", param);
    dispatch(topicActions.requestTopics(param));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
