import { stringify } from "qs";
import request from "../../utils/request";
// import CONFIG from '@/utils/config';
// import log from '@/utils/log';

// user
export async function queryLanguages(params) {
  return request(`http://localhost:6868/api/languages/?${stringify(params)}`);
}

export function detailLanguages(id) {
  // const urlRequest = `${API_ENDPOINT}/companies/${id}`;
  return request(`http://localhost:6868/api/languages/${id}`, {
    method: "GET",
  });
}

export async function removeLanguages(id) {
  "id", id;
  return request(`http://localhost:6868/api/languages/${id}`, {
    method: "DELETE",
  });
}

export async function addLanguages(params) {
  return request(`http://localhost:6868/api/languages`, {
    method: "POST",
    body: {
      ...params,
      method: "post",
    },
  });
}

export async function updateLanguages(id, params) {
  // const urlRequest = `${API_ENDPOINT}/companies/${id}`;
  const urlRequest = `http://localhost:6868/api/languages/${id}`;
  return request(urlRequest, {
    method: "PUT",
    body: {
      ...params,
      method: "update",
    },
  });
}

export async function queryLanguagesAll(params) {
  const { filter, sort, range } = params;
  const query = {
    filter: JSON.stringify(filter),
    sort: JSON.stringify(sort),
    range: range ? JSON.stringify(range) : null,
  };
  return request(`http://localhost:6868/api/languages?${stringify(query)}`);
  // return request(`http://localhost:6868/Languages/get/all`);
}
