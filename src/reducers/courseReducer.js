import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function courseReducer(state = initialState.courses, action) {
  // const {course} = action.course;
  switch (action.type) {
    case types.API_LOAD_COURSES:
      return action.courses;
    case types.API_LOAD_COURSES_DASH:
      return action.courses;
    case types.API_CREATE_COURSE_DASH:
      return { ...action, ...state };
    case types.API_LOAD_COURSES_DETAIL:
      return { ...state };
    default:
      return state;
  }
}
