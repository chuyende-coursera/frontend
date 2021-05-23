import { take, put } from "redux-saga/effects";
import axios from "axios";
import * as loginActions from "../actions/loginActions";
import * as userActions from "../actions/userActions";
import * as actionTypes from "../actions/actionTypes";
import * as currentUserApi from "../api/dashboard/currentUserApi";
import * as userApi from "../api/web/userApi";
import history from "../store/history";
import cookie from "js-cookie";
import viMessage from "../locales/vi";

import { notification } from "antd";

const url =
  process.env.NODE_ENV === "production" ? `` : `http://localhost:6868`;

export function* userAuthenticationSaga() {
  while (true) {
    const { username, password } = yield take(
      actionTypes.REQUEST_AUTHENTICATE_USER
    );
    // ("username, password", username, password);
    try {
      // debugger;
      // ("hah");
      const { data } = yield axios.post(url + `/auth/login`, {
        username,
        password,
      });

      console.log("data: ", data);

      if (data.success) {
        yield put(
          loginActions.processAuthenticateUser(actionTypes.AUTHENTICATED, {
            token: data.token,
          })
        );
        cookie.set("token", data.token);
        cookie.set("AUTHENTICATED", "AUTHENTICATED");
        notification["success"]({
          message: viMessage["app.user.login"] + " thành công",
          description: "",
        });

        const currentUser = yield currentUserApi.currentUsers();
        console.log("currentUser: ", currentUser);
        // storageSession.setStorage("jwtToken", data.token);
        if (!currentUser.hasOwnProperty("error")) {
          yield put(
            userActions.loadCurrentUser(
              actionTypes.LOAD_CURRENT_USER_SUCCESS,
              currentUser
            )
          );
          notification["success"]({
            message: viMessage["app.user.currentUser"] + " thành công!",
            description: "",
          });
          if (data["role"] === "admin") history.push("/dashboard");
          else if (data["role"] === "guest") history.push("/");
        } else {
          false;
          yield put(
            userActions.loadCurrentUser(actionTypes.LOAD_CURRENT_USER_FAIL)
          );

          notification["error"]({
            message: viMessage["app.user.currentUser"] + " thất bại!",
            description: "",
          });
        }
      } else {
        yield put(
          loginActions.processAuthenticateUser(actionTypes.NOT_AUTHENTICATED)
        );
        notification["error"]({
          message: viMessage["app.user.login"] + " thất bại!",
          description: "",
        });

        cookie.set("AUTHENTICATED", "NOT_AUTHENTICATED");
      }
    } catch (e) {
      /* catch block handles failed login */
      yield put(
        loginActions.processAuthenticateUser(actionTypes.NOT_AUTHENTICATED)
      );
      cookie.set("AUTHENTICATED", "NOT_AUTHENTICATED");
      notification["error"]({
        message: viMessage["app.user.login"] + " thất bại!",
        description: "",
      });
    }
  }
}
export function* userRegisterSaga() {
  while (true) {
    const { params } = yield take(actionTypes.REQUEST_REGISTER_USER);
    console.log("params: ", params);
    try {
      params.status = true;
      params.wardsId = 1;
      const data = yield userApi.addUser(params);

      console.log("data: ", data);

      if (data.success) {
        yield put(loginActions.processRegisterUser(actionTypes.REGISTER));
        notification["success"]({
          message: viMessage["app.user.createName"] + " thành công",
          description: "",
        });
        history.push("/login");
      } else {
        yield put(loginActions.processRegisterUser(actionTypes.NOT_REGISTER));
        notification["error"]({
          message: viMessage["app.user.createName"] + " thất bại!",
          description: "",
        });
      }
    } catch (e) {
      /* catch block handles failed login */
      yield put(loginActions.processRegisterUser(actionTypes.NOT_REGISTER));
      notification["error"]({
        message: viMessage["app.user.createName"] + " thất bại!",
        description: "",
      });
    }
  }
}
export function* userLogoutSaga() {
  while (true) {
    yield take(actionTypes.REQUEST_LOGOUT_USER);
    // ("username, password", username, password);
    try {
      cookie.set("token", "");
      cookie.set("AUTHENTICATED", "NOT_AUTHENTICATED");
      notification["success"]({
        message: viMessage["app.user.logout"] + " thành công",
        description: "",
      });
      yield put(loginActions.processLogoutUser(actionTypes.LOGOUTD));
      // storageSession.setStorage("jwtToken", data.token);
      history.push("/");
    } catch (e) {
      /* catch block handles failed login */
      yield put(loginActions.processLogoutUser(actionTypes.NOT_LOGOUTD));
      cookie.set("AUTHENTICATED", "AUTHENTICATED");
      notification["error"]({
        message: viMessage["app.user.logout"] + " thất bại!",
        description: "",
      });
    }
  }
}

export function* currentUserSaga() {
  while (true) {
    yield take(actionTypes.REQUEST_CURRENT_USER);
    // ("username, password", username, password);
    try {
      const currentUser = yield currentUserApi.currentUsers();
      console.log("currentUser: ", currentUser);
      // storageSession.setStorage("jwtToken", data.token);
      if (!currentUser.hasOwnProperty("error")) {
        yield put(
          userActions.loadCurrentUser(
            actionTypes.LOAD_CURRENT_USER_SUCCESS,
            currentUser
          )
        );
        notification["success"]({
          message: viMessage["app.user.currentUser"] + " thành công!",
          description: "",
        });
      } else {
        false;
        yield put(
          userActions.loadCurrentUser(actionTypes.LOAD_CURRENT_USER_FAIL)
        );

        notification["error"]({
          message: viMessage["app.user.currentUser"] + " thất bại!",
          description: "",
        });
      }
    } catch (e) {
      /* catch block handles failed login */
      yield put(loginActions.processLogoutUser(actionTypes.NOT_LOGOUTD));
      cookie.set("AUTHENTICATED", "AUTHENTICATED");
      notification["error"]({
        message: viMessage["app.user.logout"] + " thất bại!",
        description: "",
      });
    }
  }
}
