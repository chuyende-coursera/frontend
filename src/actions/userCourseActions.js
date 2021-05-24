import * as types from "./actionTypes";

export const requestUserCourse = (filter, sort, range) => ({
  type: types.REQUEST_USER_COURSE,
  filter,
  sort,
  range,
});
export const requestUserCourseWeb = (filter, sort, range) => ({
  type: types.REQUEST_USER_COURSE_WEB,
  filter,
  sort,
  range,
});

export const loadUserCourseWeb = (status, userCourse = []) => ({
  type: types.API_LOAD_USER_COURSE_WEB,
  userCourse,
  status,
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
export const requestCommentByUserId = (params) => ({
  type: types.REQUEST_COMMENT_BY_USERSID,
  params,
});

export const CommentByUserId = (status, course = []) => ({
  type: types.API_COMMENT_BY_USERSID,
  course,
  status,
});
