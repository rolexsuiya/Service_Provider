import React from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import { ToastProvider } from "./context/toastContext";
import RouterApp from "./router";

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
