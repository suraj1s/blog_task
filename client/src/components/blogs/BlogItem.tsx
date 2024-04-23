import { Link } from "react-router-dom";
import { IBlog } from "../../redux/redux-slices/blog/blog";
import moment from "moment";

const BlogItem = ({ item }: { item: IBlog }) => {
  return (
    <Link to={`/blog/${item.id}`}>
      <div className=" w-full  bg-primary-900 p-3 rounded-lg border-[1px] border-primary-300 shadow-md  hover:shadow-2xl transition-all hover:cursor-pointer flex flex-row  mobile:flex-col gap-x-4  ">
        <p>{item.title}</p>
        <p>{item.author}</p>
        <p>created At :{moment(item.created_at).format("LL")}</p>
        <p>
          Updated At
          {moment(item.updated_at).fromNow()}
        </p>
      </div>
    </Link>
  );
};

export default BlogItem;
