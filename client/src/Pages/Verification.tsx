import React, { useEffect } from "react";
import { useUser } from "../hooks/useUser";
import { apiService } from "../services/apiService";
import { errorToast, successToast } from "../utils/utils";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Verification = () => {
  const { user } = useUser();

  useEffect(() => {
    const token = window.location.pathname.split("/")[2];
    if (!token) {
      errorToast("Invalid token", 1500);
      window.location.href = "/";
      return;
    }

    const verifyUser = async () => {
      if (!user.verified && token) {
        const response = await apiService.post(`verify/${token}`);
        console.log(response);
        if (response && response.id && response.verified === false) {
          successToast("Verification successful", 1500);
          setTimeout(() => {
            window.location.href = "/";
          }, 1500);
        }
      } else {
        window.location.href = "/";
      }
    };

    verifyUser();
  }, [user]);

  return (
    <React.Fragment>
      <ToastContainer />
      Verifying...
    </React.Fragment>
  );
};

export default Verification;
