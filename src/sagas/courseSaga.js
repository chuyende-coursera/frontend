import { take, put } from "redux-saga/effects";
import * as courseActions from "../actions/courseActions";
import * as actionTypes from "../actions/actionTypes";
import * as courseApiWeb from "../api/web/courseApi";
import * as courseApiDash from "../api/dashboard/courseApi";
import history from "../store/history";
import viMessage from "../locales/vi";

import { notification } from "antd";

export function* courseSaga() {
  while (true) {
    const { filter, sort, range } = yield take(actionTypes.REQUEST_COURSES);
    const param = { filter, sort, range };
    try {
      // debugger;
      const data = yield courseApiWeb.queryCoursesAll(param);
      if (data.success) {
        yield put(
          courseActions.loadCourses(
            actionTypes.LOAD_COURSES_SUCCESS,
            data.result.list
          )
        );
      } else {
        false;
        yield put(courseActions.loadCourses(actionTypes.LOAD_COURSES_FAIL));
      }
    } catch (e) {
      /* catch block handles failed login */
      yield put(courseActions.loadCourses(actionTypes.LOAD_COURSES_FAIL));
    }
  }
}

export function* courseDetailSaga() {
  while (true) {
    const { id } = yield take(actionTypes.REQUEST_COURSES_DETAIL);
    try {
      // debugger;
      const data = yield courseApiWeb.detailCourses(id);
      console.log("data detail --------------------: ", data);
      if (data && !data.error) {
        yield put(
          courseActions.loadCourseDetail(
            actionTypes.LOAD_COURSES_DETAIL_SUCCESS,
            data
          )
        );
      } else {
        false;
        yield put(
          courseActions.loadCourses(actionTypes.LOAD_COURSES_DETAIL_FAIL)
        );
      }
    } catch (e) {
      /* catch block handles failed login */
      yield put(
        courseActions.loadCourses(actionTypes.LOAD_COURSES_DETAIL_FAIL)
      );
    }
  }
}

export function* courseDashSaga() {
  while (true) {
    const { filter, sort, range } = yield take(
      actionTypes.REQUEST_COURSES_DASH
    );
    const param = { filter, sort, range };
    try {
      // debugger;
      const data = yield courseApiDash.queryCoursesAll(param);
      if (data.success) {
        yield put(
          courseActions.loadCoursesDash(
            actionTypes.LOAD_COURSES_SUCCESS_DASH,
            data.result.list
          )
        );
      } else {
        false;
        yield put(
          courseActions.loadCoursesDash(actionTypes.LOAD_COURSES_FAIL_DASH)
        );
      }
    } catch (e) {
      /* catch block handles failed login */
      yield put(
        courseActions.loadCoursesDash(actionTypes.LOAD_COURSES_FAIL_DASH)
      );
    }
  }
}

export function* createCourseDashSaga() {
  while (true) {
    const { param } = yield take(actionTypes.REQUEST_CREATE_COURSE_DASH);
    console.log("param create: ", param);
    try {
      // debugger;
      const data = yield courseApiDash.addCourses(param);
      console.log("data: ", data);
      if (data.success) {
        yield put(
          courseActions.createCoursesDash(
            actionTypes.CREATE_COURSE_SUCCESS_DASH,
            data.result,
            "Tạo thành công"
          )
        );
        notification["success"]({
          message: viMessage["app.courses.addCourse"] + " thành công!",
          description: "",
        });
        history.goBack();
      } else {
        notification["error"]({
          message: viMessage["app.courses.addCourse"] + " thất bại!",
          description: "",
        });
        yield put(
          courseActions.createCoursesDash(
            actionTypes.CREATE_COURSE_FAIL_DASH,
            [],
            data.messages
          )
        );
      }
    } catch (e) {
      /* catch block handles failed login */
      notification["error"]({
        message: viMessage["app.courses.addCourse"] + " thất bại!",
        description: "",
      });
      yield put(
        courseActions.createCoursesDash(
          actionTypes.CREATE_COURSE_FAIL_DASH,
          [],
          "Lỗi Hệ Thống"
        )
      );
    }
  }
}

export function* buyCourseSaga() {
  while (true) {
    const { param } = yield take(actionTypes.REQUEST_BUY_COURSE);
    console.log("param create: ", param);
    try {
      const data = yield courseApiDash.buyCourses(param);
      console.log("data: ", data);
      if (data.success) {
        yield put(
          courseActions.buyCourses(
            actionTypes.BUY_COURSE_SUCCESS,
            data.result,
            "Tạo thành công"
          )
        );
        notification["success"]({
          message: viMessage["app.courses.buyCourse"] + " thành công!",
          description: "",
        });
      } else {
        yield put(
          courseActions.buyCourses(
            actionTypes.BUY_COURSE_FAIL,
            [],
            data.messages
          )
        );
        notification["error"]({
          message: data["error"]["message"],
          description: "",
        });
      }
    } catch (e) {
      /* catch block handles failed login */

      yield put(
        courseActions.buyCourses(
          actionTypes.BUY_COURSE_FAIL,
          [],
          "Lỗi Hệ Thống"
        )
      );
      notification["error"]({
        message: viMessage["app.courses.buyCourse"] + " thất bại!",
        description: "",
      });
    }
  }
}

export function* updateCourseSaga() {
  while (true) {
    const { id, params } = yield take(actionTypes.REQUEST_UPDATE_COURSE_DASH);
    try {
      const data = yield courseApiDash.updateCourses(id, params);
      if (data.success) {
        notification["success"]({
          message: viMessage["app.courses.updateCourseDash"] + " thành công!",
          description: "",
        });
        history.goBack();
      } else {
        notification["error"]({
          message: viMessage["app.courses.updateCourseDash"] + " thất bại!",
          description: "",
        });
      }
    } catch (e) {
      /* catch block handles failed login */
      notification["error"]({
        message: viMessage["app.courses.updateCourseDash"] + " thất bại!",
        description: "",
      });
    }
  }
}
export function* deleteCourseSaga() {
  while (true) {
    const { id } = yield take(actionTypes.REQUEST_DELETE_COURSE);
    try {
      const data = yield courseApiDash.removeCourses(id);
      if (data.success) {
        yield put(
          courseActions.deleteCourses(actionTypes.LOAD_DELETE_USER_SUCCESS)
        );
        notification["success"]({
          message: viMessage["app.courses.deleteCourseDash"] + " thành công!",
          description: "",
        });
      } else {
        yield put(
          courseActions.deleteCourses(actionTypes.LOAD_DELETE_USER_FAIL)
        );
        notification["error"]({
          message: viMessage["app.courses.deleteCourseDash"] + " thất bại!",
          description: "",
        });
      }
    } catch (e) {
      /* catch block handles failed login */

      yield put(courseActions.deleteCourses(actionTypes.LOAD_DELETE_USER_FAIL));
      notification["error"]({
        message: viMessage["app.courses.deleteCourseDash"] + " thất bại!",
        description: "",
      });
    }
  }
}
