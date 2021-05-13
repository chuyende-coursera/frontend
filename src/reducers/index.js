import { combineReducers } from "redux";
import topics from "./topicReducer";
import courses from "./courseReducer";
import course from "./courseDetailReducer";
import sessions from "./sessionReducer";
import languages from "./languageReducer";
import jobs from "./jobReducer";
import skills from "./skillReducer";
import weeks from "./weekReducer";
import userCourse from "./userCourseReducer";
import currentUser from "./currentUserReducer";

const rootReducer = combineReducers({
  topics,
  sessions,
  courses,
  course,
  languages,
  jobs,
  skills,
  weeks,
  userCourse,
  currentUser,
});

export default rootReducer;
