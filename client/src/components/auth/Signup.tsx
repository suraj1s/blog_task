import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import CustomInput, { inputField } from "../common/CustomInput";
import { PASSWORD_REGEX } from "../common/constants";
import { useCreateUserMutation } from "../../redux/redux-slices/auth/apiService/auth";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../common/CustomButton";

const inputTypeDetails: inputField[] = [
  {
    title: "Username",
    name: "username",
    placeholder: "Enter your Username  ",
    // icon: <Status />,
    type: "text",
    validation: {
      required: " plese enter a valid user name ",
    },
  },
  {
    title: "Email",
    name: "email",
    placeholder: "Enter your email address ",
    // icon: <Status />,
    type: "text",
    validation: {
      required: " plese enter a valid email ",
      pattern: {
        value: PASSWORD_REGEX,
        message: "plese enter a valid email ",
      },
    },
  },
  {
    title: "Password",
    name: "password",
    placeholder: "Enter your password",

    // icon: <Status />,
    type: "text",
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
  {
    title: "Retype Password",
    name: "retypepassword",
    placeholder: "Retype your password",

    // icon: <Status />,
    type: "text",
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

const SignUp = () => {
  const [crerateUser] = useCreateUserMutation();
  const navigate = useNavigate();
  const onsubmitHandler = async (data: any) => {
    // const formData = new FormData()
    // formData.append("name", data.name)
    // formData.append("status", selectionValue.value)
    // formData.append("branch", branch)
    console.log(data, "data");
    try {
      const response: any = await crerateUser({ signUpData: data });
      if (response?.error) {
        toast.error("errors", response?.error?.data?.errors[0]?.detail);
      } else {
        navigate("/auth/signin");
        console.log(response, "response");
        toast.success(" user created successfully");
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
      <div className="py-12   ">
        <div>
          {/* <img
            className="mx-auto h-20 w-20"
            src={Logo}
            alt="MERN E-commerce"
          /> */}
          <h2 className="mt-10 text-center text-2xl font-bold  ">
            Sign up to your account
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
              <CustomInput
                errors={errors}
                inputfield={inputTypeDetails[1]}
                register={register}
              />
              <CustomInput
                errors={errors}
                inputfield={inputTypeDetails[2]}
                register={register}
              />

              <CustomButton title="sign up" type="submit" />
              <div className="flex gap-x-2 items-center">
                <p>Alerady have account </p>
                <Link to={"/auth/signin"}>
                  <p className="text-blue-400  text-sm font-semibold">
                    
                    Sign In
                  </p>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
