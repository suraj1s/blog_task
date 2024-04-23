import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import authUser from "../redux-slices/auth/authSlice";

const combineReducer = combineReducers({
  // reducers
  authUser,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

const rootReducer = (state: any, action: any) => {
  return combineReducer(state, action);
};
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),

  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
