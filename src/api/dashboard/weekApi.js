import { stringify } from "qs";
import request from "../../utils/request";
// import CONFIG from '@/utils/config';
// import log from '@/utils/log';

// user
export async function queryWeeks(params) {
  return request(`http://localhost:6868/api/weeks/?${stringify(params)}`);
}

export function detailWeeks(id) {
  // const urlRequest = `${API_ENDPOINT}/companies/${id}`;
  return request(`http://localhost:6868/api/weeks/${id}`, {
    method: "GET",
  });
}

export async function removeWeeks(id) {
  "id", id;
  return request(`http://localhost:6868/api/weeks/${id}`, {
    method: "DELETE",
  });
}

export async function addWeeks(params) {
  return request(`http://localhost:6868/api/weeks`, {
    method: "POST",
    body: {
      ...params,
      method: "post",
    },
  });
}

export async function updateWeeks(id, params) {
  // const urlRequest = `${API_ENDPOINT}/companies/${id}`;
  const urlRequest = `http://localhost:6868/api/weeks/${id}`;
  return request(urlRequest, {
    method: "PUT",
    body: {
      ...params,
      method: "update",
    },
  });
}

export async function queryWeeksAll(params) {
  const { filter, sort, range } = params;
  const query = {
    filter: JSON.stringify(filter),
    sort: JSON.stringify(sort),
    range: range ? JSON.stringify(range) : null,
  };
  return request(`http://localhost:6868/api/weeks?${stringify(query)}`);
  // return request(`http://localhost:6868/weeks/get/all`);
}
