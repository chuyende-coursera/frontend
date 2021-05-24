import { take, put } from "redux-saga/effects";
import * as skillActions from "../actions/skillActions";
import * as actionTypes from "../actions/actionTypes";
import * as skillApi from "../api/dashboard/skillApi";
// import history from "../store/history";
export function* skillDashSaga() {
  while (true) {
    const { filter, sort, range } = yield take(actionTypes.REQUEST_SKILLS_DASH);
    const param = { filter, sort, range };
    try {
      // debugger;
      const data = yield skillApi.querySkillsAll(param);
      console.log("data skill api: ", data);
      if (data.success) {
        yield put(
          skillActions.loadSkillsDash(
            actionTypes.LOAD_SKILLS_SUCCESS_DASH,
            data.result.list
          )
        );
      } else {
        false;
        yield put(
          skillActions.loadSkillsDash(actionTypes.LOAD_SKILLS_FAIL_DASH)
        );
      }
    } catch (e) {
      /* catch block handles failed login */
      yield put(skillActions.loadSkillsDash(actionTypes.LOAD_SKILLS_FAIL_DASH));
    }
  }
}
