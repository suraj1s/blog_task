import CustomButton from "../../common/CustomButton";
import { Link } from "react-router-dom";
import MyBlogItem from "./MyBlogItem";
import { useGetAllMyBlogsQuery } from "../../../redux/redux-slices/blog/apiService/blog";

const MyBlogs = () => {
  const { data: blogData, isLoading } = useGetAllMyBlogsQuery({});
  return (
    <div className="pt-10 md:pt-24 max-w-2xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between gap-5 items-center py-5">
        <h1>All blogs</h1>
        <Link to="/create-blog">
          <CustomButton title="Create Blog" className="!w-fit" />
        </Link>
      </div>

      {isLoading && (
        <div className=" text-center py-5  text-black font-bold text-3xl">
          Searching...
        </div>
      )}
      <div className="flex flex-col gap-10 h-fit   ">
        {blogData?.results?.map((item, index) => (
          <div key={index}>
            <MyBlogItem item={item} />
          </div>
        ))}
      </div>
      {isLoading && (
        <div className=" text-center py-5  text-black font-bold text-3xl">
          Loading...
        </div>
      )}
    </div>
  );
};

export default MyBlogs;
