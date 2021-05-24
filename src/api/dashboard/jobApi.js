import { stringify } from "qs";
import request from "../../utils/request";
// import CONFIG from '@/utils/config';
// import log from '@/utils/log';

// user
export async function queryJobs(params) {
  return request(`http://localhost:6868/api/jobs/?${stringify(params)}`);
}

export function detailJobs(id) {
  // const urlRequest = `${API_ENDPOINT}/companies/${id}`;
  return request(`http://localhost:6868/api/jobs/${id}`, {
    method: "GET",
  });
}

export async function removeJobs(id) {
  "id", id;
  return request(`http://localhost:6868/api/jobs/${id}`, {
    method: "DELETE",
  });
}

export async function addJobs(params) {
  return request(`http://localhost:6868/api/jobs`, {
    method: "POST",
    body: {
      ...params,
      method: "post",
    },
  });
}

export async function updateJobs(id, params) {
  // const urlRequest = `${API_ENDPOINT}/companies/${id}`;
  const urlRequest = `http://localhost:6868/api/jobs/${id}`;
  return request(urlRequest, {
    method: "PUT",
    body: {
      ...params,
      method: "update",
    },
  });
}

export async function queryJobsAll(params) {
  const { filter, sort, range } = params;
  const query = {
    filter: JSON.stringify(filter),
    sort: JSON.stringify(sort),
    range: range ? JSON.stringify(range) : null,
  };
  return request(`http://localhost:6868/api/jobs?${stringify(query)}`);
  // return request(`http://localhost:6868/Jobs/get/all`);
}
