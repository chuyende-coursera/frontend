import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function courseReducer(state = initialState.course, action) {
  switch (action.type) {
    case types.API_LOAD_COURSES_DETAIL:
      return action.course;
    default:
      return state;
  }
}
