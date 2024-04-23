import { Link } from "react-router-dom";
import { IBlog } from "../../redux/redux-slices/blog/blog";
import moment from "moment";

const BlogItem = ({ item }: { item: IBlog }) => {
  return (
    <Link to={`/${item.id}`}>
      <div className=" w-full  bg-primary-900 p-3 rounded-lg border-[1px] border-primary-300 hover:cursor-pointer flex-col gap-4 ">
        <p>{item.id}</p>
        <p>{item.title}</p>
        <p>{item.author}</p>
        <p>{item.content}</p>
        <p>created At :{" " + moment(item.created_at).format("LL")}</p>
        <p>
          Updated At :      
          {"  " + moment(item.updated_at).fromNow()}
        </p>
      </div>
    </Link>
  );
};

export default BlogItem;
