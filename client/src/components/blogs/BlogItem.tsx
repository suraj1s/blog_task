import { Link } from "react-router-dom";
import { IBlog } from "../../redux/redux-slices/blog/blog";
// import moment from "moment";

const BlogItem = ({ item }: { item: IBlog }) => {
  return (
    <Link to={`/${item.id}`}>
      <div className=" w-full  bg-primary-900 p-3 rounded-lg border-[1px] border-primary-300 hover:cursor-pointer flex-col gap-4 ">
      <div className="flex-col gap-4">
          <p className="font-bold">
            Author : <span className=" pl-2 font-normal ">{item.author}</span>
          </p>
          <p className="font-bold">
            Title :<span className=" pl-2 font-normal ">{item.title}</span>
          </p>
          <p className="font-bold">
            Content : <span className=" pl-2 font-normal ">{item.content}</span>
          </p>
          {/* <p className="font-bold">
            created At :
            <span className=" pl-2 font-normal ">{" " + moment(item.created_at).format("LL")}</span>
          </p>
          <p className="font-bold">
            Updated At :<span className=" pl-2 font-normal ">{"  " + moment(item.updated_at).fromNow()}</span>
          </p> */}
        </div>
      </div>
    </Link>
  );
};

export default BlogItem;
