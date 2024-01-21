const userAgent = navigator.userAgent;
const os = /iPhone|iPad|iPod|Android/.test(userAgent)
  ? ""
  : /Win/.test(userAgent)
    ? "Windows"
    : /Mac/.test(userAgent)
      ? "Mac"
      : /Linux/.test(userAgent)
        ? "Linux"
        : /Chrome/.test(userAgent)
          ? "Chrome OS"
          : "";
export default os;
