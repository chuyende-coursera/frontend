import encodeStr from "../utils/encodeStr";

export default (path) => {
  return path
    .split("/")
    .map((e) => encodeStr(e))
    .join("/");
};
