import React, { useEffect } from "react";
import { useUser } from "../hooks/useUser";
import { apiService } from "../services/apiService";
import { errorToast, successToast } from "../utils/utils";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Verification = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const token = window.location.pathname.split("/")[2];
    if (!token) {
      errorToast("Invalid token", 1500);
      navigate("/", { replace: true });
      return;
    }

    const verifyUser = async () => {
      if (!user.verified && token) {
        try {
          const response = await apiService.post(`verify/${token}`);
          if (response.status === 200) {
            successToast("Verification successful", 1500);
            setTimeout(() => {
              navigate("/", { replace: true });
            }, 1500);
          }
        } catch (error: any) {
          errorToast(error.response.data.error, 1500);
          setTimeout(() => {
            navigate("/", { replace: true });
          }, 1500);
        }
      } else {
        navigate("/", { replace: true });
      }
    };

    verifyUser();
  }, [user, navigate]);

  return (
    <React.Fragment>
      <ToastContainer />
      Verifying...
    </React.Fragment>
  );
};

export default Verification;
