import * as types from "./actionTypes";

export const requestCurrentUser = () => ({
  type: types.REQUEST_CURRENT_USER,
});

export const loadCurrentUser = (status, currentUser = {}) => ({
  type: types.API_LOAD_CURRENT_USER,
  currentUser,
  status,
});

export const requestUser = (filter, sort, range) => ({
  type: types.REQUEST_USER,
  filter,
  sort,
  range,
});

export const loadUser = (status, users = []) => ({
  type: types.API_LOAD_USER,
  users,
  status,
});

export const requestUpdateUser = (id, params) => ({
  type: types.REQUEST_UPDATE_USER,
  id,
  params,
});

export const loadUpdateUser = (status, user = {}) => ({
  type: types.API_LOAD_UPDATE_USER,
  user,
  status,
});
