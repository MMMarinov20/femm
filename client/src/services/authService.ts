import { apiService } from "./apiService";
import Cookies from "js-cookie";
import "react-toastify/dist/ReactToastify.css";
import { errorToast, successToast } from "../utils/utils";

export const handleRegister = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string
) => {
  if (!firstName || !lastName) {
    errorToast("Please enter all fields", 2000);
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (!emailRegex.test(email)) {
    errorToast("Please enter a valid email address", 2000);
    return;
  }

  if (!passwordRegex.test(password)) {
    errorToast(
      "Password must be at least 8 characters long and contain at least one letter and one number",
      2000
    );
    return;
  }

  try {
    await apiService.post("auth/register", {
      email,
      name: `${firstName} ${lastName}`,
      password,
    });
    successToast("Registration successful", 2000);

    setTimeout(() => {
      window.location.href = "/";
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
    errorToast("Please enter all fields", 2000);
    return;
  }

  try {
    const user = await apiService.post("auth/login", {
      email,
      password,
    });

    user && successToast("Logged in successfully!", 2000);
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
    successToast("Logged out successfully!", 2000);
    setTimeout(() => {
      window.location.href = "/login";
      Cookies.remove("token");
    }, 2000);
  } catch (error) {
    throw new Error("Error logging out");
  }
};
