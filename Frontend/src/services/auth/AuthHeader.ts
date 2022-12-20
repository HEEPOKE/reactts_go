export default function authHeader() {
  const access_token = sessionStorage.getItem("access_token") ?? false;

  if (!access_token) {
    return { Authorization: "" };
  } else {
    return { Authorization: `Bearer ${access_token}` };
  }
}
