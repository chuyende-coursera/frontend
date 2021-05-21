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
