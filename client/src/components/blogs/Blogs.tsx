import { useCallback, useEffect, useRef, useState } from "react";
import { useLazyGetAllBlogsQuery } from "../../redux/redux-slices/blog/apiService/blog";
import Search from "../common/Search";
import { IBlog } from "../../redux/redux-slices/blog/blog";
import BlogItem from "./BlogItem";
import { LIMIT } from "../common/constants";

const Blogs = () => {
  const [searchValue, setSearchValue] = useState("");
  const [getBlogs, { data: blogData, isLoading }] = useLazyGetAllBlogsQuery({});
  <Search searchValue={(val) => setSearchValue(val)} />;

  const [finalBlogs, setFinalBlogs] = useState<IBlog[]>([]);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    getBlogs({
      currentPage: pageNumber,
      searchQuery: searchValue,
    });
  }, [pageNumber, searchValue]);

  useEffect(() => {
    setPageNumber(0);
    setFinalBlogs([]);
  }, [searchValue]);

  useEffect(() => {
    if (blogData?.results === undefined) return;
    if (!isLoading) {
      setFinalBlogs([...finalBlogs, ...blogData?.results]);
    }
  }, [blogData]);

  let hasMore = false;
  if (blogData?.count) {
    hasMore = pageNumber * LIMIT + LIMIT < blogData?.count;
  }
  const observer = useRef<IntersectionObserver | null>(null);
  const lastItemElementRef = useCallback(
    (node: HTMLElement | null) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          setPageNumber((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [hasMore, isLoading]
  );

  return (
    <div className="pt-10 md:pt-24">
      <h1>All blogs</h1>
      {searchValue && isLoading && (
        <div className=" text-center py-5  text-black font-bold text-3xl">
          Searching...
        </div>
      )}
      <div className="flex flex-col gap-10 h-fit max-w-2xl  ">
        {finalBlogs?.map((item, index) => (
          <div key={index}>
            {finalBlogs.length === index + 1 ? (
              <div ref={lastItemElementRef}>
                <BlogItem item={item} />
              </div>
            ) : (
              <div>
                <BlogItem item={item} />
              </div>
            )}
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

export default Blogs;
