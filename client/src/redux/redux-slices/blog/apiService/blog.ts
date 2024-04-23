import { LIMIT } from "../../../../components/common/constants";
import { apiSlice } from "../../../redux-store/apiSlice";
import { IBlogTypes, IGetBlog } from "../blog";

export const blogApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createBlog: builder.mutation({
      query: ({ blogData }: { blogData: any }) => ({
        url: `blog/create/`,
        method: "POST",
        body: blogData,
      }),
      invalidatesTags: ["blog"],
    }),

    getAllBlogs: builder.query<IBlogTypes, IGetBlog>({
      query: ({ currentPage = 0, searchQuery = "" }) => ({
        url: `blog/getAll/`,
        params: {
          limit: LIMIT,
          offset: currentPage * LIMIT,
          search: searchQuery,
        },
        method: "GET",
      }),
      providesTags: ["blog"],
    }),
  }),
});

export const {
  useCreateBlogMutation,
  useGetAllBlogsQuery,
  useLazyGetAllBlogsQuery,
} = blogApiSlice;
