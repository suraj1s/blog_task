"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <div className=" text-slate-200 min-w-screen min-h-screen container">
        {children}
      </div>
    </Provider>
  );
};

export default Providers;
