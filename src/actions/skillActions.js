import * as types from "./actionTypes";

// export const requestSkills = (filter, sort, range) => ({
//   type: types.REQUEST_SKILLS_DASH,
//   filter,
//   sort,
//   range,
// });

// export const loadSkills = (status, skills = []) => ({
//   type: types.API_LOAD_COURSES,
//   skills,
//   status,
// });

export const requestSkillsDash = (filter, sort, range) => ({
  type: types.REQUEST_SKILLS_DASH,
  filter,
  sort,
  range,
});

export const loadSkillsDash = (status, skills = []) => ({
  type: types.API_LOAD_SKILLS_DASH,
  skills,
  status,
});
