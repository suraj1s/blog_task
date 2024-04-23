import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { PASSWORD_REGEX } from "../common/constants";
import CustomButton from "../common/CustomButton";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import CustomInput, { inputField } from "../common/CustomInput";
import { useCheckUserMutation } from "../../redux/redux-slices/auth/apiService/auth";
import { setLoginedUser } from "../../redux/redux-slices/auth/authSlice";
import { useAppDispatch } from "../../redux/redux-store/hooks";

const inputTypeDetails: inputField[] = [
  {
    title: "Username",
    name: "username",
    placeholder: "Enter your Username address ",
    type: "text",
    validation: {
      required: " plese enter a valid Username ",
    },
  },
  {
    title: "Password",
    name: "password",
    placeholder: "Enter your password",
    type: "password",
    eyeIcon: true,
    validation: {
      required: " plese enter a valid password ",
      pattern: {
        value: PASSWORD_REGEX,
        message: `- at least 8 characters \n
    - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number \n
    - Can contain special characters`,
      },
    },
  },
];

const SignIn = () => {
  const [checkUser] = useCheckUserMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onsubmitHandler = async (data: any) => {
    try {
      const response: any = await checkUser(data);
      if (response?.error) {
        toast.error("errors", response?.error?.data?.errors[0]?.detail);
      } else {
        // // console.log(response, "response");
        Cookies.set("access_token", response?.data?.access_token);
        Cookies.set("refresh_token", response?.data?.refresh_token);
        toast.success(" user loggned successfully");
        dispatch(setLoginedUser(response?.data?.user));
        localStorage.setItem("user", JSON.stringify(response?.data?.user));
        navigate("/");
      }
    } catch (error: any) {
      toast.error("error", error?.data?.message ?? "Something went wrong");
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="container ">
      <div className="py-12">
        <div>
          <h2 className="mt-10 text-center text-2xl font-bold  ">
            Sign in to your account
          </h2>
        </div>
        <div className="mt-10 ">
          <form
            onSubmit={handleSubmit(onsubmitHandler)}
            className="space-y-3 max-w-sm mx-auto "
          >
            <div className="flex flex-col  gap-y-5 ">
              <CustomInput
                errors={errors}
                inputfield={inputTypeDetails[0]}
                register={register}
              />
              <div>
                <CustomInput
                  errors={errors}
                  inputfield={inputTypeDetails[1]}
                  register={register}
                />
              </div>
              <CustomButton title="sign in" type="submit" />
              <div className="flex gap-x-2 items-center">
                <p>Don&lsquo;t have account </p>
                <Link to={"/auth/signup"}>
                  <p className="text-blue-400  text-sm font-semibold">
                    {" "}
                    Sign Up{" "}
                  </p>{" "}
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
