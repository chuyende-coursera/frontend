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
