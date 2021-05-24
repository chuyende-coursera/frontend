import { take, put } from "redux-saga/effects";
import * as jobActions from "../actions/jobActions";
import * as actionTypes from "../actions/actionTypes";
import * as jobApi from "../api/dashboard/jobApi";
// import history from "../store/history";
export function* jobDashSaga() {
  while (true) {
    const { filter, sort, range } = yield take(actionTypes.REQUEST_JOBS_DASH);
    const param = { filter, sort, range };
    console.log("param saga: ", param);
    try {
      // debugger;
      const data = yield jobApi.queryJobsAll(param);
      console.log("data job api: ", data);
      if (data.success) {
        yield put(
          jobActions.loadJobsDash(
            actionTypes.LOAD_JOBS_SUCCESS_DASH,
            data.result.list
          )
        );
      } else {
        false;
        yield put(jobActions.loadJobsDash(actionTypes.LOAD_JOBS_FAIL_DASH));
      }
    } catch (e) {
      /* catch block handles failed login */
      yield put(jobActions.loadJobsDash(actionTypes.LOAD_JOBS_FAIL_DASH));
    }
  }
}
