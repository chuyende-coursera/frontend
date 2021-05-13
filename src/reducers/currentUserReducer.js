import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function sessionReducer(
  state = initialState.currentUser,
  action
) {
  switch (action.type) {
    case types.API_LOAD_CURRENT_USER:
      return action.currentUser;
    default:
      return state;
  }
}
