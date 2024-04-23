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
      <p>{data.title}</p>
      <p>{data.author}</p>
      <p>created At :{" " + moment(data.created_at).format("LL")}</p>
      <p>Updated At :{"  " + moment(data.updated_at).fromNow()}</p>
      hi
    </div>
  );
};

export default Blog;
