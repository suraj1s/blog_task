import { LIMIT } from "../../../../components/common/constants";
import { apiSlice } from "../../../redux-store/apiSlice";
import { IBlog, IBlogTypes, ICreateBlog, IGetBlog, IUpdateBlog } from "../blog";

export const blogApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createBlog: builder.mutation({
      query: (blogData: ICreateBlog) => ({
        url: `blog/create/`,
        method: "POST",
        body: blogData,
      }),
      invalidatesTags: ["blog"],
    }),

    updateBlog: builder.mutation({
      query: (blogData: IUpdateBlog) => ({
        url: `blog/update/${blogData.id}/`,
        method: "PATCH",
        body: blogData.data,
      }),
      invalidatesTags: ["blog"],
    }),

    deleteBlog: builder.mutation({
      query: ({ id }: { id: string }) => ({
        url: `blog/delete/${id}/`,
        method: "DELETE",
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
    getAllMyBlogs: builder.query<IBlogTypes, IGetBlog>({
      query: () => ({
        url: `blog/getByUser/`,
        params: {
          limit: 1000,
          offset: 0,
        },
        method: "GET",
      }),
      providesTags: ["blog"],
    }),

    getBlog: builder.query<IBlog, { id: string }>({
      query: ({ id }) => ({
        url: `blog/detail/${id}/`,
        method: "GET",
      }),
      providesTags: ["blog"],
    }),
  }),
});

export const {
  useCreateBlogMutation,
  useUpdateBlogMutation,
  useGetBlogQuery,
  useLazyGetAllBlogsQuery,
  useGetAllMyBlogsQuery,
  useDeleteBlogMutation,
} = blogApiSlice;
