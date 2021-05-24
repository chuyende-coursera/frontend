import { take, put } from "redux-saga/effects";
import * as weekActions from "../actions/weekActions";
import * as actionTypes from "../actions/actionTypes";
import * as weekApiDash from "../api/dashboard/weekApi";
import history from "../store/history";

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
