import * as types from "./actionTypes";

export const requestJobsDash = (filter, sort, range) => ({
  type: types.REQUEST_JOBS_DASH,
  filter,
  sort,
  range,
});

export const loadJobsDash = (status, jobs = []) => ({
  type: types.API_LOAD_JOBS_DASH,
  jobs,
  status,
});
