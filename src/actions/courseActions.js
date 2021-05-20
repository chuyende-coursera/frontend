import * as types from "./actionTypes";

export const requestCourses = (filter, sort, range) => ({
  type: types.REQUEST_COURSES,
  filter,
  sort,
  range,
});

export const loadCourses = (status, courses = []) => ({
  type: types.API_LOAD_COURSES,
  courses,
  status,
});

export const requestCoursesDash = (filter, sort, range) => ({
  type: types.REQUEST_COURSES_DASH,
  filter,
  sort,
  range,
});

export const loadCoursesDash = (status, courses = []) => ({
  type: types.API_LOAD_COURSES_DASH,
  courses,
  status,
});

export const requestCreateCoursesDash = (param) => ({
  type: types.REQUEST_CREATE_COURSE_DASH,
  param,
});

export const createCoursesDash = (status, course = [], messages) => ({
  type: types.API_CREATE_COURSE_DASH,
  course,
  status,
  messages,
});
export const requestUpdateCoursesDash = (param) => ({
  type: types.REQUEST_UPDATE_COURSE_DASH,
  param,
});

export const updateCoursesDash = (status, course = [], messages) => ({
  type: types.API_UPDATE_COURSE_DASH,
  course,
  status,
  messages,
});

export const requestCourseDetail = (id) => ({
  type: types.REQUEST_COURSES_DETAIL,
  id,
});

export const loadCourseDetail = (status, course = {}) => ({
  type: types.API_LOAD_COURSES_DETAIL,
  course,
  status,
});

export const requestBuyCourse = (param) => ({
  type: types.REQUEST_BUY_COURSE,
  param,
});

export const buyCourses = (status, course = []) => ({
  type: types.API_BUY_COURSE,
  course,
  status,
});
