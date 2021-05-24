import { take, put } from "redux-saga/effects";
import axios from "axios";
import * as topicActions from "../actions/topicActions";
import * as actionTypes from "../actions/actionTypes";
// import history from "../store/history";
const url =
  process.env.NODE_ENV === "production" ? `` : `http://localhost:6868`;

export function* topicSaga() {
  while (true) {
    yield take(actionTypes.REQUEST_TOPICS);
    try {
      // debugger;
      const { data } = yield axios.get(url + `/web/topics`);

      "data: ", data;

      if (data.success) {
        ("true");
        yield put(
          topicActions.loadTopics(
            actionTypes.LOAD_TOPICS_SUCCESS,
            data.result.list
          )
        );
      } else {
        false;
        yield put(topicActions.loadTopics(actionTypes.LOAD_TOPICS_FAIL));
      }
    } catch (e) {
      e;
      /* catch block handles failed login */
      yield put(
        yield put(topicActions.loadTopics(actionTypes.LOAD_TOPICS_FAIL))
      );
    }
  }
}
