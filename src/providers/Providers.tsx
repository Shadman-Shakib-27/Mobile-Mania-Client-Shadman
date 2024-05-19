"use client";

import { persistor, store } from "@/redux/store";
import { Provider } from "react-redux";
import { Toaster } from "sonner";
import { PersistGate } from "redux-persist/integration/react";

const Providers = ({ children }: any) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}></PersistGate>
      {children} <Toaster position="top-center" />
    </Provider>
  );
};

export default Providers;
