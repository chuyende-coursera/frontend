import { stringify } from "qs";
import request from "../../utils/request";
// import CONFIG from '@/utils/config';
// import log from '@/utils/log';

// user
export async function addUser(params) {
  return request(`http://localhost:6868/auth/signin`, {
    method: "POST",
    body: {
      ...params,
    },
  });
}

export async function queryUsersAll(params) {
  const { filter, sort, range } = params;
  const query = {
    filter: JSON.stringify(filter),
    sort: JSON.stringify(sort),
    range: range ? JSON.stringify(range) : null,
  };
  return request(`http://localhost:6868/api/users?${stringify(query)}`);
  // return request(`http://localhost:6868/Courses/get/all`);
}

export async function updateUser(id, params) {
  // const urlRequest = `${API_ENDPOINT}/companies/${id}`;
  const urlRequest = `http://localhost:6868/api/users/${id}`;
  return request(urlRequest, {
    method: "PUT",
    body: {
      ...params,
      method: "update",
    },
  });
}
