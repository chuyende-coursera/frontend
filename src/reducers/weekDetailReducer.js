import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function weekDetailReducer(state = initialState.week, action) {
  switch (action.type) {
    case types.API_LOAD_WEEK_DETAIL:
      return action.week;
    default:
      return state;
  }
}
