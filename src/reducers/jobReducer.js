import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function jobReducer(state = initialState.jobs, action) {
  switch (action.type) {
    case types.API_LOAD_JOBS_DASH:
      // (action);
      return action.jobs;
    default:
      return state;
  }
}
