export default function authHeader() {
  const access_token = sessionStorage.getItem("access_token") ?? false;

  if (!access_token) {
    return "";
  } else {
    return `Bearer ${access_token}`;
  }
}
