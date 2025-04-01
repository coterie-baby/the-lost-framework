export const getUrl = (path) => {
  return window.location.origin.replace("9000", "9001") + path;
};
