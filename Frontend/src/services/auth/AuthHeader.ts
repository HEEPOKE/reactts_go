export default function authHeader() {
  const access_token = sessionStorage.getItem("access_token") ?? false;

  if (!access_token) {
    return { Authorization: "Bearer " + access_token };
  } else {
    return { Authorization: "" };
  }
}
