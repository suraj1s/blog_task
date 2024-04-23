// import { useSignOutMutation } from "../../redux/redux-slices/auth/apiService/auth";
import { useNavigate } from "react-router-dom";
import CustomButton from "../common/CustomButton";
import Cookies from "js-cookie";
import { useAppDispatch } from "../../redux/redux-store/hooks";
import { resetLoginedUser } from "../../redux/redux-slices/auth/authSlice";
const Signout = () => {
  //   const [signout] = useSignOutMutation();
  const refresh_token = Cookies.get("refresh_token");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  if (!refresh_token) {
    return <div>you are not logined</div>;
  }
  return (
    <div className="border border-gray-300 rounded-lg px-10 py-5 mx-auto m-20 flex flex-wrap items-center justify-center gap-5 ">
      <p>Are you sure you want to sign out?</p>
      <CustomButton
        className="!w-fit"
        title="Sign out"
        onClick={() => {
          //   signout({ refresh_token });
          Cookies.remove("access_token");
          Cookies.remove("refresh_token");
          dispatch(resetLoginedUser());
          localStorage.removeItem("user");
          navigate("/");
        }}
      />
    </div>
  );
};

export default Signout;
