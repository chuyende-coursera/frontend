import * as types from "./actionTypes";

export const requestLanguagesDash = (filter, sort, range) => ({
  type: types.REQUEST_LANGUAGES_DASH,
  filter,
  sort,
  range,
});

export const loadLanguagesDash = (status, languages = []) => ({
  type: types.API_LOAD_LANGUAGES_DASH,
  languages,
  status,
});
