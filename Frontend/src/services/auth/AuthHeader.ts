export default function authHeader() {
  const userStr = sessionStorage.getItem("user");
  let user = null;
  if (userStr) user = JSON.parse(userStr);

  if (user && user.accessToken) {
    return { 'Bearer ' + Authorization: user.accessToken };
  } else {
    return { Authorization: "" };
  }
}

// const AuthHeader = { authHeader };

// export default AuthHeader;
