import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { Navigate } from "react-router-dom";

const Protected = (children: any) => {
  const token: any = Cookies.get("refresh_token") ?? null;
  const tokenValidation = (token?: string) => {
    try {
      let decoded: any;
      decoded = jwtDecode(token ? token : "");
      console.log(decoded, "decoded");
      if (decoded && decoded.exp && decoded.user_id) {
        if (Date.now() > decoded.exp * 1000) {
          Cookies.remove("access_token");
          Cookies.remove("refresh_token");
          window.location.href = "/auth/signin";
          return false;
        }
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  };
  const is_token_valid = tokenValidation(token);

  console.log(is_token_valid, "is_token_valid");
  return is_token_valid ? (
    <div>
      <div>this is protected</div>
      {children.children}
    </div>
  ) : (
    <Navigate to="/auth/signin" />
  );
};

export default Protected;
