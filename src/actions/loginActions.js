import * as types from "./actionTypes";
// import { beginApiCall, apiCallError } from "./apiStatusActions";

export const requestAuthenticateUser = (username, password) => ({
  type: types.REQUEST_AUTHENTICATE_USER,
  username,
  password,
});
export const requestLogoutUser = () => ({
  type: types.REQUEST_LOGOUT_USER,
});

export const processAuthenticateUser = (
  status = types.AUTHENTICATING,
  session = null
) => {
  return {
    type: types.PROCESSING_AUTHENTICATE_USER,
    session,
    authenticated: status,
  };
};

export const processLogoutUser = (status) => {
  return {
    type: types.PROCESSING_AUTHENTICATE_USER,
    status,
  };
};

export const requestRegisterUser = (params) => ({
  type: types.REQUEST_REGISTER_USER,
  params,
});

export const processRegisterUser = (status) => {
  return {
    type: types.PROCESSING_REGISTER_USER,
    status,
  };
};
