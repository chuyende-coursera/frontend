import { handleResponse, handleError } from "../../utils/apiUtils";
const baseUrl = process.env.API_URL + "web/topics";
// ("baseUrl: ", baseUrl);
export function getTopics() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
