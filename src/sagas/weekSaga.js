import { take, put } from "redux-saga/effects";
import * as weekActions from "../actions/weekActions";
import * as actionTypes from "../actions/actionTypes";
import * as weekApiDash from "../api/dashboard/weekApi";
import history from "../store/history";
import { notification } from "antd";
import viMessage from "../locales/vi";

export function* createVideoDashSaga() {
  while (true) {
    const { params } = yield take(actionTypes.REQUEST_CREATE_VIDEO_DASH);
    console.log("param create: ", params);
    try {
      // debugger;
      const data = yield weekApiDash.addVideos(params);
      console.log("data: ", data);
      if (data.success) {
        yield put(
          weekActions.createVideoDash(
            actionTypes.CREATE_VIDEO_SUCCESS_DASH,
            data.result,
            "Tạo thành công"
          )
        );
        location.reload();
      } else {
        yield put(
          weekActions.createVideoDash(
            actionTypes.CREATE_VIDEO_SUCCESS_DASH,
            [],
            data.messages
          )
        );

        notification["error"]({
          message: data["error"]["message"],
          description: "",
        });
        location.reload();
      }
    } catch (e) {
      /* catch block handles failed login */
      yield put(
        weekActions.createVideoDash(
          actionTypes.CREATE_VIDEO_SUCCESS_DASH,
          [],
          "Lỗi Hệ Thống"
        )
      );
      location.reload();
    }
  }
}

export function* updateVideoSaga() {
  while (true) {
    const { id, params } = yield take(actionTypes.REQUEST_UPDATE_VIDEO_DASH);
    try {
      const data = yield weekApiDash.updateVideo(id, params);
      if (data.success) {
        notification["success"]({
          message: viMessage["app.common.edit.success"],
          description: "",
        });
        location.reload();
      } else {
        notification["error"]({
          message: viMessage["app.common.edit.fail"],
          description: "",
        });
        location.reload();
      }
    } catch (e) {
      /* catch block handles failed login */
      notification["error"]({
        message: viMessage["app.common.edit.fail"],
        description: "",
      });
      location.reload();
    }
  }
}
export function* createWeekDashSaga() {
  while (true) {
    const { param } = yield take(actionTypes.REQUEST_CREATE_WEEK_DASH);
    console.log("param create: ", param);
    try {
      // debugger;
      const data = yield weekApiDash.addWeeks(param);
      console.log("data: ", data);
      if (data.success) {
        yield put(
          weekActions.createWeeksDash(
            actionTypes.CREATE_WEEK_SUCCESS_DASH,
            data.result,
            "Tạo thành công"
          )
        );
        history.push("/dashboard/category/weeks");
      } else {
        false;
        yield put(
          weekActions.createWeeksDash(
            actionTypes.CREATE_WEEK_FAIL_DASH,
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
        weekActions.createWeeksDash(
          actionTypes.CREATE_WEEK_FAIL_DASH,
          [],
          "Lỗi Hệ Thống"
        )
      );
    }
  }
}

export function* weekDashSaga() {
  while (true) {
    const { filter, sort, range } = yield take(actionTypes.REQUEST_WEEKS_DASH);
    const param = { filter, sort, range };
    console.log("param week saga: ", param);
    try {
      // debugger;
      const data = yield weekApiDash.queryWeeksAll(param);
      console.log("data: ", data);
      if (data.success) {
        yield put(
          weekActions.loadWeekDash(
            actionTypes.LOAD_WEEKS_SUCCESS_DASH,
            data.result.list
          )
        );
      } else {
        false;
        yield put(weekActions.loadWeekDash(actionTypes.LOAD_WEEKS_FAIL_DASH));
      }
    } catch (e) {
      /* catch block handles failed login */
      yield put(weekActions.loadWeekDash(actionTypes.LOAD_WEEKS_FAIL_DASH));
    }
  }
}

export function* weekDetailSaga() {
  while (true) {
    const { id } = yield take(actionTypes.REQUEST_WEEK_DETAIL);
    try {
      // debugger;
      const data = yield weekApiDash.detailWeeks(id);
      console.log("data: ", data);
      if (data && !data.error) {
        yield put(
          weekActions.loadWeekDetail(actionTypes.LOAD_WEEK_DETAIL_SUCCESS, data)
        );
      } else {
        false;
        yield put(
          weekActions.loadWeekDetail(actionTypes.LOAD_WEEK_DETAIL_FAIL)
        );
      }
    } catch (e) {
      /* catch block handles failed login */
      yield put(weekActions.loadWeekDetail(actionTypes.LOAD_WEEK_DETAIL_FAIL));
    }
  }
}

export function* updateWeekSaga() {
  while (true) {
    const { id, params } = yield take(actionTypes.REQUEST_UPDATE_WEEK_DASH);
    try {
      const data = yield weekApiDash.updateWeeks(id, params);
      if (data.success) {
        notification["success"]({
          message: viMessage["app.common.edit.success"],
          description: "",
        });
        history.goBack();
      } else {
        notification["error"]({
          message: viMessage["app.common.edit.fail"],
          description: "",
        });
      }
    } catch (e) {
      /* catch block handles failed login */
      notification["error"]({
        message: viMessage["app.common.edit.fail"],
        description: "",
      });
    }
  }
}
export function* deleteWeekSaga() {
  while (true) {
    const { id } = yield take(actionTypes.REQUEST_DELETE_COURSE);
    try {
      const data = yield weekApiDash.removeWeeks(id);
      // if (data.success) {
      //   yield put(
      //     courseActions.deleteCourses(actionTypes.LOAD_DELETE_USER_SUCCESS)
      //   );
      //   notification["success"]({
      //     message: viMessage["app.courses.deleteCourseDash"] + " thành công!",
      //     description: "",
      //   });
      // } else {
      //   yield put(
      //     courseActions.deleteCourses(actionTypes.LOAD_DELETE_USER_FAIL)
      //   );
      //   notification["error"]({
      //     message: viMessage["app.courses.deleteCourseDash"] + " thất bại!",
      //     description: "",
      //   });
      // }
    } catch (e) {
      /* catch block handles failed login */
      // yield put(courseActions.deleteCourses(actionTypes.LOAD_DELETE_USER_FAIL));
      // notification["error"]({
      //   message: viMessage["app.courses.deleteCourseDash"] + " thất bại!",
      //   description: "",
      // });
    }
  }
}
