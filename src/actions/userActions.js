import * as types from "./actionTypes";

export const requestCurrentUser = () => ({
  type: types.REQUEST_CURRENT_USER,
});

export const loadCurrentUser = (status, currentUser = {}) => ({
  type: types.API_LOAD_CURRENT_USER,
  currentUser,
  status,
});
