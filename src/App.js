import React from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastProvider } from "./context/toastContext";
import RouterApp from "./router";
import SignIn from "./screen/signin";

function App() {
  return (
    <ToastProvider>
      <Toaster toastOptions={{ duration: 3000 }} />
      <BrowserRouter>
        <RouterApp />
      </BrowserRouter>
    </ToastProvider>
  );
}

export default App;
