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
    signOut: builder.mutation({
      query: ({ refresh_token }: { refresh_token: string }) => ({
        url: `auth/signout/`,
        method: "POST",
        body: { refresh_token },
      }),
      invalidatesTags: ["authUser"],
    }),
  }),
});

export const {
  useCreateUserMutation,
  useCheckUserMutation,
  useSignOutMutation,
} = authApiSlice;
