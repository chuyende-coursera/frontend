import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function skillReducer(state = initialState.skills, action) {
  switch (action.type) {
    case types.API_LOAD_SKILLS_DASH:
      // (action);
      return action.skills;
    default:
      return state;
  }
}
