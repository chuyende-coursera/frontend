import * as types from "./actionTypes";

// export const requestWeeksDash = (filter, sort, range) => ({
//   type: types.REQUEST_COURSES_DASH,
//   filter,
//   sort,
//   range,
// });

// export const loadWeeksDash = (status, weeks = []) => ({
//   type: types.API_LOAD_COURSES_DASH,
//   weeks,
//   status,
// });

export const requestCreateWeeksDash = (param) => ({
  type: types.REQUEST_CREATE_WEEK_DASH,
  param,
});

export const createWeeksDash = (status, weeks = [], messages) => ({
  type: types.API_CREATE_WEEK_DASH,
  weeks,
  status,
  messages,
});

export const requestWeeksDash = (filter, sort, range) => ({
  type: types.REQUEST_WEEKS_DASH,
  filter,
  sort,
  range,
});

export const loadWeekDash = (status, weeks = []) => ({
  type: types.API_LOAD_WEEKS_DASH,
  weeks,
  status,
});

export const requestWeekDetail = (id) => ({
  type: types.REQUEST_WEEK_DETAIL,
  id,
});

export const loadWeekDetail = (status, week = {}) => ({
  type: types.API_LOAD_WEEK_DETAIL,
  week,
  status,
});

export const requestUpdateWeekDash = (id, params) => ({
  type: types.REQUEST_UPDATE_WEEK_DASH,
  id,
  params,
});

export const updateCoursesDash = (status, week = [], messages) => ({
  type: types.API_UPDATE_WEEK_DASH,
  week,
  status,
  messages,
});
export const requestCreateVideoDash = (params) => ({
  type: types.REQUEST_CREATE_VIDEO_DASH,
  params,
});

export const createVideoDash = (status, video = {}, messages) => ({
  type: types.API_CREATE_VIDEO_DASH,
  video,
  status,
  messages,
});

export const requestUpdateVideoDash = (id, params) => ({
  type: types.REQUEST_UPDATE_VIDEO_DASH,
  id,
  params,
});

export const updateVideoDash = (status, video = [], messages) => ({
  type: types.API_UPDATE_VIDEO_DASH,
  video,
  status,
  messages,
});
