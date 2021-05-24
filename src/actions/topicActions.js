import * as types from "./actionTypes";

export const requestTopics = () => ({
  type: types.REQUEST_TOPICS,
});

export const loadTopics = (status, topics = []) => ({
  type: types.API_LOAD_TOPICS,
  topics,
  status,
});
