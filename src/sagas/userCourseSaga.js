import { take, put } from "redux-saga/effects";
import * as userCourseActions from "../actions/userCourseActions";
import * as actionTypes from "../actions/actionTypes";
import * as courseApi from "../api/dashboard/courseApi";
import { notification } from "antd";
import viMessage from "../locales/vi";
import history from "../store/history";

export function* userCourseDashSaga() {
  while (true) {
    const { filter, sort, range } = yield take(actionTypes.REQUEST_USER_COURSE);
    const param = { filter, sort, range };
    try {
      // debugger;
      console.log("param: ", param);
      const data = yield courseApi.queryUserCourseAll(param);
      console.log("data user course: ", data);
      if (data.success) {
        yield put(
          userCourseActions.loadWeekDash(
            actionTypes.LOAD_USER_COURSE_SUCCESS,
            data.result.list
          )
        );
      } else {
        false;
        yield put(
          userCourseActions.loadWeekDash(actionTypes.LOAD_USER_COURSE_FAIL)
        );
      }
    } catch (e) {
      /* catch block handles failed login */
      yield put(
        userCourseActions.loadWeekDash(actionTypes.LOAD_USER_COURSE_FAIL)
      );
    }
  }
}
export function* userCourseDashSagaWeb() {
  while (true) {
    const { filter, sort, range } = yield take(
      actionTypes.REQUEST_USER_COURSE_WEB
    );
    const param = { filter, sort, range };
    try {
      // debugger;
      console.log("param: ", param);
      const data = yield courseApi.queryUserCourseAllWeb(param);
      console.log("data user course: ", data);
      if (data.success) {
        yield put(
          userCourseActions.loadUserCourseWeb(
            actionTypes.LOAD_USER_COURSE_WEB_SUCCESS,
            data.result.list
          )
        );
      } else {
        false;
        yield put(
          userCourseActions.loadUserCourseWeb(
            actionTypes.LOAD_USER_COURSE_WEB_FAIL
          )
        );
      }
    } catch (e) {
      /* catch block handles failed login */
      yield put(
        userCourseActions.loadUserCourseWeb(
          actionTypes.LOAD_USER_COURSE_WEB_FAIL
        )
      );
    }
  }
}

export function* deleteUserCourseSaga() {
  while (true) {
    const { id, params } = yield take(actionTypes.REQUEST_DELETE_USERCOURSE);
    try {
      // debugger;
      const data = yield courseApi.updateUserCourse(id, params);
      console.log("data: ", data);
      if (data.success) {
        yield put(
          userCourseActions.deleteCourses(
            actionTypes.DELETE_USERCOURSE_SUCCESS,
            data.result
          )
        );

        notification["success"]({
          message: viMessage["app.courses.deleteCourse"] + " th??nh c??ng!",
          description: "",
        });
      } else {
        false;
        yield put(
          userCourseActions.deleteCourses(actionTypes.DELETE_USERCOURSE_FAIL)
        );

        notification["error"]({
          message: viMessage["app.courses.deleteCourse"] + " th???t b???i!",
          description: "",
        });
      }
    } catch (e) {
      /* catch block handles failed login */
      yield put(
        userCourseActions.deleteCourses(actionTypes.DELETE_USERCOURSE_FAIL)
      );

      notification["error"]({
        message: viMessage["app.courses.deleteCourse"] + " th???t b???i!",
        description: "",
      });
    }
  }
}

export function* requestCommentByUserId() {
  while (true) {
    const { params } = yield take(actionTypes.REQUEST_COMMENT_BY_USERSID);
    console.log("params: ", params);
    try {
      // debugger;
      const data = yield courseApi.addUserCourse(params);
      console.log("data: ", data);
      if (data.success) {
        yield put(
          userCourseActions.CommentByUserId(
            actionTypes.COMMENT_BY_USERSID_SUCCESS,
            data.result
          )
        );
        location.reload();
      } else {
        console.log("test: ", data.error.message.includes("????ng nh???p"));
        if (data.error.message.includes("????ng nh???p")) {
          history.push("/login");
        } else {
          notification["error"]({
            message:
              "B???n ???? b??nh lu???n v?? vote kh??a h???c r???i! Kh??ng th??? th???c hi???n l???i!",
            description: "",
          });
        }
        yield put(
          userCourseActions.CommentByUserId(actionTypes.COMMENT_BY_USERSID_FAIL)
        );
      }
    } catch (e) {
      /* catch block handles failed login */
      yield put(
        userCourseActions.CommentByUserId(actionTypes.COMMENT_BY_USERSID_FAIL)
      );
    }
  }
}
export function* requestUpdateUserCourseByUserId() {
  while (true) {
    const { params } = yield take(
      actionTypes.REQUEST_UPDATE_USERCOURSE_BY_USERSID
    );
    console.log("params: ", params);
    try {
      // debugger;
      const data = yield courseApi.updateUserCourseByUserId(params);
      console.log("data: ", data);
      if (data.success) {
        yield put(
          userCourseActions.updateUserCourseByUserId(
            actionTypes.UPDATE_USERCOURSE_BY_USERSID_SUCCESS,
            data.result
          )
        );
        notification["success"]({
          message: viMessage["app.courses.paymentCourse"] + " th??nh c??ng!",
          description: "",
        });
        history.push("/paymentSuccess");
      } else {
        false;
        yield put(
          userCourseActions.updateUserCourseByUserId(
            actionTypes.UPDATE_USERCOURSE_BY_USERSID_FAIL
          )
        );

        notification["error"]({
          message: viMessage["app.courses.paymentCourse"] + " th???t b???i!",
          description: "",
        });
        history.push("/login");
      }
    } catch (e) {
      /* catch block handles failed login */
      yield put(
        userCourseActions.updateUserCourseByUserId(
          actionTypes.UPDATE_USERCOURSE_BY_USERSID_FAIL
        )
      );

      notification["error"]({
        message: viMessage["app.courses.paymentCourse"] + " th???t b???i!",
        description: "",
      });
    }
  }
}
