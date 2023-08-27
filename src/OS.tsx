const userAgent = navigator.userAgent;
let os = /iPhone|iPad|iPod|Android/.test(userAgent)
  ? ""
  : /Win/.test(userAgent)
  ? "Windows"
  : /Mac/.test(userAgent)
  ? "Mac"
  : /Linux/.test(userAgent)
  ? "Linux"
  : "";
export default os;
