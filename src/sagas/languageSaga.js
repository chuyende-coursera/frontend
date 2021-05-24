import { take, put } from "redux-saga/effects";
import * as languageActions from "../actions/languageActions";
import * as actionTypes from "../actions/actionTypes";
import * as languageApi from "../api/dashboard/languageApi";
// import history from "../store/history";
export function* languageDashSaga() {
  while (true) {
    const { filter, sort, range } = yield take(
      actionTypes.REQUEST_LANGUAGES_DASH
    );
    const param = { filter, sort, range };
    console.log("param language: ", param);
    try {
      // debugger;
      const data = yield languageApi.queryLanguagesAll(param);
      console.log("data language api: ", data);
      if (data.success) {
        yield put(
          languageActions.loadLanguagesDash(
            actionTypes.LOAD_LANGUAGES_SUCCESS_DASH,
            data.result.list
          )
        );
      } else {
        false;
        yield put(
          languageActions.loadLanguagesDash(
            actionTypes.LOAD_LANGUAGES_FAIL_DASH
          )
        );
      }
    } catch (e) {
      /* catch block handles failed login */
      yield put(
        languageActions.loadLanguagesDash(actionTypes.LOAD_LANGUAGES_FAIL_DASH)
      );
    }
  }
}
