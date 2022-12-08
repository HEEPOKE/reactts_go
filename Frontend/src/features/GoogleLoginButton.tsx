import { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function GoogleLoginButton() {
  const [profileData, setProfileData] = useState(
    localStorage.getItem("profileData")
      ? JSON.parse(localStorage.getItem("profileData") || "{}")
      : null
  );

  const navigation = useNavigate();

  const clientId =
    "203320795555-scusrjuu1d5uv37cpncjd0bpkc9i1f2j.apps.googleusercontent.com";
  // const clientId = process.env.CLIENT_ID as any;

  useEffect(() => {
    function initClient() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }

    gapi.load("client:auth2", initClient);
  }, []);

  const handleLogin = (googleData: any) => {
    const jsonData = JSON.stringify({
      token: googleData.id_token,
    });

    axios
      .get("http://localhost:6476/api/auth/google-login")
      .then((res: any) => {
        // const data = res.data.data();

        // setProfileData(data);
        // localStorage.setItem("profileData", JSON.stringify(data));
        navigation("/");
      });
  };

  const error = (res: any) => {
    console.error("error", res);
  };

  const logout = () => {
    setProfileData(null as any);
  };

  return (
    <>
      <GoogleLogin
        clientId={clientId}
        onSuccess={handleLogin}
        // onSuccess={responseGoogle}
        onFailure={error}
        buttonText="Login with Google"
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
        className="mt-2 col-12"
      />
    </>
  );
}
