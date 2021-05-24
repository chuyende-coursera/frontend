import * as userSagas from "../sagas/userSagas";
import * as topicSagas from "../sagas/topicSagas";
import * as courseSaga from "../sagas/courseSaga";
import * as languageSaga from "../sagas/languageSaga";
import * as skillSaga from "../sagas/skillSaga";
import * as jobSaga from "../sagas/jobSaga";
import * as weekSaga from "../sagas/weekSaga";
import * as userCourseSaga from "../sagas/userCourseSaga";

const sagas = {
  ...userSagas,
  ...topicSagas,
  ...courseSaga,
  ...languageSaga,
  ...skillSaga,
  ...jobSaga,
  ...weekSaga,
  ...userCourseSaga,
};

export default sagas;
