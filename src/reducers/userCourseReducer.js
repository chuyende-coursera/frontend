import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function courseReducer(state = initialState.userCourse, action) {
  switch (action.type) {
    case types.API_LOAD_USER_COURSE:
      return action.userCourse;
    case types.API_LOAD_USER_COURSE_WEB:
      return action.userCourse;
    // case types.API_LOAD_COURSES_DASH:
    //   return action.courses;
    // case types.API_CREATE_WEEK_DASH:
    //   return [...state, action.weeks];
    // case types.API_LOAD_WEEKS_DASH:
    //   return action.weeks;
    // case types.API_LOAD_COURSES_DETAIL:
    //   return { ...state };
    default:
      return state;
  }
}
