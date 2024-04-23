import { useGetBlogQuery } from "../../redux/redux-slices/blog/apiService/blog";
import { useParams } from "react-router-dom";
import moment from "moment";

const Blog = () => {
  const { blogId } = useParams();
  // console.log(blogId, "blogId");
  if (!blogId) {
    return <div>Blog Not Found</div>;
  }
  const { data } = useGetBlogQuery({ id: blogId });
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div className=" mt-10 md:mt-24 w-full  bg-primary-900 p-3 rounded-lg border-[1px] border-primary-300 hover:cursor-pointer flex-col gap-4 ">
      <div className="flex-col gap-4">
          <p className="font-bold">
            Author : <span className=" pl-2 font-normal ">{data.author}</span>
          </p>
          <p className="font-bold">
            Title :<span className=" pl-2 font-normal ">{data.title}</span>
          </p>
          <p className="font-bold">
            Content : <span className=" pl-2 font-normal ">{data.content}</span>
          </p>
          <p className="font-bold">
            created At :
            <span className=" pl-2 font-normal ">{" " + moment(data.created_at).format("LL")}</span>
          </p>
          <p className="font-bold">
            Updated At :<span className=" pl-2 font-normal ">{"  " + moment(data.updated_at).fromNow()}</span>
          </p>
        </div>
    </div>
  );
};

export default Blog;
