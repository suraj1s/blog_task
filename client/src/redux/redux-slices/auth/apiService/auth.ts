import { apiSlice } from "../../../redux-store/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: ({ signUpData }: { signUpData: SignupDataType }) => ({
        url: `auth/signup/`,
        method: "POST",
        body: signUpData,
      }),
      invalidatesTags: ["authUser"],
    }),
    checkUser: builder.mutation({
      query: (signInData: SignInDataType) => ({
        url: `auth/signin/`,
        method: "POST",
        body: signInData,
      }),
      invalidatesTags: ["authUser"],
    }),
    checkAuthToken: builder.query({
      query: () => ({
        url: `auth/signin/`,
        method: "GET",
      }),
      providesTags: ["authUser"],
    }),
    signOut: builder.query({
      query: () => ({
        url: `auth/logout/`,
        method: "GET",
      }),
      providesTags: ["authUser"],
    }),
  }),
});

export const {
  useCreateUserMutation,
  useCheckUserMutation,
  useCheckAuthTokenQuery,
  useSignOutQuery,
} = authApiSlice;
