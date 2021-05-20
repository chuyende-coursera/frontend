import * as types from "./actionTypes";

export const requestUserCourse = (filter, sort, range) => ({
  type: types.REQUEST_USER_COURSE,
  filter,
  sort,
  range,
});

export const loadWeekDash = (status, userCourse = []) => ({
  type: types.API_LOAD_USER_COURSE,
  userCourse,
  status,
});

export const requestDeleteUserCourse = (id, params) => ({
  type: types.REQUEST_DELETE_USERCOURSE,
  id,
  params,
});

export const deleteCourses = (status, course = []) => ({
  type: types.API_DELETE_USERCOURSE,
  course,
  status,
});

export const requestUpdateUserCourseByUserId = (params) => ({
  type: types.REQUEST_UPDATE_USERCOURSE_BY_USERSID,
  params,
});

export const updateUserCourseByUserId = (status, course = []) => ({
  type: types.API_UPDATE_USERCOURSE_BY_USERSID,
  course,
  status,
});
