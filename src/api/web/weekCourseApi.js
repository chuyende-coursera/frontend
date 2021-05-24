import { stringify } from "qs";
import request from "../../utils/request";
// import CONFIG from '@/utils/config';
// import log from '@/utils/log';

// user
export async function queryCourses(params) {
  return request(`http://localhost:6868/Courses?${stringify(params)}`);
}

export function detailWeekCourses(id) {
  // const urlRequest = `${API_ENDPOINT}/companies/${id}`;
  return request(`http://localhost:6868/Courses/${id}`, {
    method: "GET",
  });
}

export async function removeCourses(id) {
  "id", id;
  return request(`http://localhost:6868/Courses/${id}`, {
    method: "DELETE",
  });
}

export async function addCourses(params) {
  return request(`http://localhost:6868/Courses`, {
    method: "POST",
    body: {
      ...params,
      method: "post",
    },
  });
}

export async function updateCourses(id, params) {
  // const urlRequest = `${API_ENDPOINT}/companies/${id}`;
  const urlRequest = `http://localhost:6868/Courses/${id}`;
  return request(urlRequest, {
    method: "PUT",
    body: {
      ...params,
      method: "update",
    },
  });
}

export async function queryCoursesAll(params) {
  const { filter, sort, range } = params;
  const query = {
    filter: JSON.stringify(filter),
    sort: JSON.stringify(sort || ["title", "ASC"]),
    range: range ? JSON.stringify(range) : null,
  };
  return request(`http://localhost:6868/web/courses?${stringify(query)}`);
  // return request(`http://localhost:6868/Courses/get/all`);
}
