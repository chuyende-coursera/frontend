import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function courseReducer(state = initialState.weeks, action) {
  // const {course} = action.course;
  console.log("action: ", action);
  console.log("state: ", state);
  switch (action.type) {
    // case types.API_LOAD_COURSES:
    //   return action.courses;
    // case types.API_LOAD_COURSES_DASH:
    //   return action.courses;
    case types.API_CREATE_WEEK_DASH:
      return [...state, action.weeks];
    case types.API_LOAD_WEEKS_DASH:
      return action.weeks;
    // case types.API_LOAD_COURSES_DETAIL:
    //   return { ...state };
    default:
      return state;
  }
}
