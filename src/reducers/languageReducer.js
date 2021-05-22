import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function languageReducer(
  state = initialState.languages,
  action
) {
  switch (action.type) {
    case types.API_LOAD_LANGUAGES_DASH:
      // (action);
      return action.languages;
    default:
      return state;
  }
}
