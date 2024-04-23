import { Link } from "react-router-dom";
import moment from "moment";
import { IBlog } from "../../../redux/redux-slices/blog/blog";
import { useDeleteBlogMutation } from "../../../redux/redux-slices/blog/apiService/blog";

const MyBlogItem = ({ item }: { item: IBlog }) => {
  const [deleteBlog] = useDeleteBlogMutation();
  return (
    <div className=" flex flex-col md:flex-row justify-between gap-5 w-full  bg-primary-900 p-3 rounded-lg border-[1px] border-green-300 hover:cursor-pointer  ">
      <Link to={`/${item.id}`} className="w-full">
        <div className="flex-col gap-4">
          <p>{item.title}</p>
          <p>{item.author}</p>
          <p>{item.content}</p>
          <p>created At :{" " + moment(item.created_at).format("LL")}</p>
          <p>Updated At :{"  " + moment(item.updated_at).fromNow()}</p>
        </div>
      </Link>
      <div className="flex  gap-3 md:flex-col">
        <Link to={`/edit-blog/${item.id}`}>
          <button className="bg-green-500 text-white px-2 py-1 rounded-md">
            Edit
          </button>
        </Link>
        <button
          onClick={(e) => {
            deleteBlog({ id: item.id });
            e.stopPropagation();
          }}
          className="bg-red-500 text-white px-2 py-1 rounded-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default MyBlogItem;
