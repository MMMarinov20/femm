import { apiService } from "./apiService";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const handleRegister = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string
) => {
  if (!firstName || !lastName) {
    //alert("Please enter all fields");
    toast.error("Please enter all fields", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (!emailRegex.test(email)) {
    //alert("Please enter a valid email address");
    toast.error("Please enter a valid email address", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
    return;
  }

  if (!passwordRegex.test(password)) {
    // alert(
    //   "Password must be at least 8 characters long and contain at least one letter and one number"
    // );
    toast.error(
      "Password must be at least 8 characters long and contain at least one letter and one number",
      {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      }
    );
    return;
  }

  try {
    await apiService.post("auth/register", {
      email,
      name: `${firstName} ${lastName}`,
      password,
    });

    //alert("Registration successful");
    toast.success("Registration successful!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });

    setTimeout(() => {
      window.location.href = "/login";
    }, 2000);
  } catch (error) {
    throw new Error("Registration failed");
  }
};

export const handleLogin = async (
  email: string,
  password: string
): Promise<any> => {
  if (!email || !password) {
    //alert("Please enter all fields");
    toast.error("Please enter all fields", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
    return;
  }

  try {
    const user = await apiService.post("auth/login", {
      email,
      password,
    });

    user &&
      toast.success("Logged in successfully!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    return user;
  } catch (error) {
    throw new Error("Invalid email or password");
  }
};

export const getUserInfo = async () => {
  try {
    const response = await apiService.get(`users/getInfo`);
    return response;
  } catch (error) {
    throw new Error("Error fetching user information");
  }
};

export const handleLogout = async () => {
  try {
    await apiService.post("logout", null);
    //alert("Logged out");
    toast.success("Logged out successfully!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });

    setTimeout(() => {
      window.location.href = "/login";
      Cookies.remove("token");
    }, 2000);
  } catch (error) {
    throw new Error("Error logging out");
  }
};
