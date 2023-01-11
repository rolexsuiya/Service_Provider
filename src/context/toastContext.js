import React, {  useContext } from "react";
import { toast} from "react-hot-toast";

const ToastContext = React.createContext();

export function useToastContext() {
  return useContext(ToastContext);
}

export function ToastProvider({ children }) {
  function toastUpdate(type, message) {
    if (type && message) {
      toast[type](message);
    } else {
      toast.success("Default message");
    }
  }

  return (
    <ToastContext.Provider value={toastUpdate}>
      {children}
    </ToastContext.Provider>
  );
}
