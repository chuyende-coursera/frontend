import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function courseReducer(state = initialState.users, action) {
  switch (action.type) {
    case types.API_LOAD_USER:
      return action.users;
    default:
      return state;
  }
}
