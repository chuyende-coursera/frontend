import axios from "axios";
let source;
const makeRequestCreator = () => {
  return async (query) => {
    // Check if we made a request
    if (source) {
      // Cancel the previous request before making a new request
      source.cancel("Operation canceled by the user.");
    }
    // Create a new CancelToken
    source = axios.CancelToken.source();
    try {
      const res = await axios(query, { cancelToken: source.token });
      return res;
    } catch (error) {
      if (axios.isCancel(error)) {
        // Handle if request was cancelled
        console.log("Request canceled", error.message);
      } else {
        // Handle usual errors
        console.log("Something went wrong: ", error.message);
      }
    }
  };
};

export const search = makeRequestCreator();
