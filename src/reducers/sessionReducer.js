import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function sessionReducer(state = initialState.session, action) {
  let { type, authenticated, session } = action;
  switch (type) {
    case types.REQUEST_AUTHENTICATE_USER:
      return { ...state, authenticated: types.AUTHENTICATING };
    case types.PROCESSING_LOGOUT_USER:
      return { ...state };
    case types.PROCESSING_AUTHENTICATE_USER:
      return { ...state, authenticated, session };
    default:
      return state;
  }
}
