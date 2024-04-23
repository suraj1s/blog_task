import { useForm } from "react-hook-form";
import CustomInput from "../../common/CustomInput";
import CustomButton from "../../common/CustomButton";
import { mutationHandler } from "../../../utils/mutationalHandler";
import {
  useGetBlogQuery,
  useUpdateBlogMutation,
} from "../../../redux/redux-slices/blog/apiService/blog";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { IUpdateBlog } from "../../../redux/redux-slices/blog/blog";

const EditBlogs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm();

  const navigate = useNavigate();
  const { blogId } = useParams();
  console.log(blogId, "blogId");
  if (!blogId) {
    return <div>Blog Not Found</div>;
  }
  const { data: blogData } = useGetBlogQuery({ id: blogId });

  useEffect(() => {
    // console.log(blogData, "blogData");
    if (blogData) {
      setValue("title", blogData.title);
      setValue("content", blogData.content);
    }
  }, [blogData]);

  const [updateBlog] = useUpdateBlogMutation();

  const onSubmit = (data: any) => {
    // console.log(data);
    const blogData: IUpdateBlog = {
      id: blogId,
      data: {
        title: data?.title,
        content: data?.content,
      },
    };
    mutationHandler(
      updateBlog,
      blogData,
      () => {
        reset();
        navigate("/my-blogs");
      },
      "Blog Updated Successfully"
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
        <CustomButton type="submit" title="Edit Blog" className=" !w-fit" />
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

export default EditBlogs;
