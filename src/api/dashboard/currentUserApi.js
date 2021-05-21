import request from "../../utils/request";

export function currentUsers() {
  // const urlRequest = `${API_ENDPOINT}/companies/${id}`;
  return request(`http://localhost:6868/api/currentUsers`, {
    method: "GET",
  });
}
