import { stringify } from "qs";
import request from "../../utils/request";
// import CONFIG from '@/utils/config';
// import log from '@/utils/log';

// user
export async function querySkills(params) {
  return request(`http://localhost:6868/api/skills/?${stringify(params)}`);
}

export function detailSkills(id) {
  // const urlRequest = `${API_ENDPOINT}/companies/${id}`;
  return request(`http://localhost:6868/api/skills/${id}`, {
    method: "GET",
  });
}

export async function removeSkills(id) {
  "id", id;
  return request(`http://localhost:6868/api/skills/${id}`, {
    method: "DELETE",
  });
}

export async function addSkills(params) {
  return request(`http://localhost:6868/api/skills`, {
    method: "POST",
    body: {
      ...params,
      method: "post",
    },
  });
}

export async function updateSkills(id, params) {
  // const urlRequest = `${API_ENDPOINT}/companies/${id}`;
  const urlRequest = `http://localhost:6868/api/skills/${id}`;
  return request(urlRequest, {
    method: "PUT",
    body: {
      ...params,
      method: "update",
    },
  });
}

export async function querySkillsAll(params) {
  const { filter, sort, range } = params;
  const query = {
    filter: JSON.stringify(filter),
    sort: JSON.stringify(sort),
    range: range ? JSON.stringify(range) : null,
  };
  return request(`http://localhost:6868/api/skills?${stringify(query)}`);
  // return request(`http://localhost:6868/Skills/get/all`);
}
