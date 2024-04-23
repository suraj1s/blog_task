import { useForm } from "react-hook-form";
import CustomInput from "../../common/CustomInput";
import CustomButton from "../../common/CustomButton";
import { mutationHandler } from "../../../utils/mutationalHandler";
import { useCreateBlogMutation } from "../../../redux/redux-slices/blog/apiService/blog";
import { ICreateBlog } from "../../../redux/redux-slices/blog/blog";
import { useNavigate } from "react-router-dom";

const CreateBlogs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    // setValue,
    reset,
  } = useForm();
const navigate = useNavigate();
  const [createBlog] = useCreateBlogMutation();
  const onSubmit = (data : any) => {
    // console.log(data);
    const blogData : ICreateBlog = {
      title: data.title,
      content: data.content,
    };
    mutationHandler(createBlog, blogData, () => {
      reset();
      navigate("/my-blogs");
    },
  "Blog Created Successfully"
  );
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex pt-10 md:pt-24 max-w-3xl mx-auto   flex-col lg:flex-row gap-8 min-w-[300px]"
    >
      <div className="space-y-[6px] border border-slate-300 rounded-md px-8 py-4">
        <CustomInput
          errors={errors}
          register={register}
          inputfield={{
            name: "title",
            title: "Title",
            validation: {
              required: {
                value: true,
                message: "Title is required",
              },
            },
          }}
        />

        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-300">Content</p>
          <textarea
            {...register("content", {
              required: {
                value: true,
                message: "Message is required",
              },
            })}
            className="rounded text-slate-800  h-[168px] w-full resize-none px-[14px] py-[10px] outline-none"
          />
        </div>
        <CustomButton type="submit" title="Create Blog" className=" !w-fit" />
      </div>

      {(watch("title") || watch("content")) && (
        <div className="border border-slate-300 rounded-md bg-slate-800 bg-opacity-70 p-4 min-w-[300px]">
          <h1 className="text-lg">Blog preview</h1>
          <div className="p-[10px] ">
            <p className="w-fit rounded-lg  fontMedium">{watch("title")}</p>
            <p className="pt-1  font-medium text-gray-200">
              {watch("content")}
            </p>
          </div>
        </div>
      )}
    </form>
  );
};

export default CreateBlogs;
