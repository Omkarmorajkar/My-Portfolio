import React from "react";
import { toast } from "react-toastify";

const ToastMessage = ({ message, type }) => {
  const toastConfig = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  const showToast = () => {
    switch (type) {
      case "success":
        toast.success(message, toastConfig);
        break;
      case "error":
        toast.error(message, toastConfig);
        break;
      // Add more cases for different types if needed
      default:
        break;
    }
  };

  return <>{showToast()}</>;
};

export default ToastMessage;
