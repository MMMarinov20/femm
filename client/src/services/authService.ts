import { apiService } from "./apiService";
import Cookies from "js-cookie";

export const handleRegister = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string
) => {
  if (!firstName || !lastName) {
    alert("Please enter all fields");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address");
    return;
  }

  if (!passwordRegex.test(password)) {
    alert(
      "Password must be at least 8 characters long and contain at least one letter and one number"
    );
    return;
  }

  try {
    await apiService.post("auth/register", {
      email,
      name: `${firstName} ${lastName}`,
      password,
    });

    alert("Registration successful");
  } catch (error) {
    throw new Error("Registration failed");
  }
};

export const handleLogin = async (
  email: string,
  password: string
): Promise<any> => {
  if (!email || !password) {
    alert("Please enter all fields");
    return;
  }

  try {
    const user = await apiService.post("auth/login", {
      email,
      password,
    });

    user && alert("Login successful");
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
    alert("Logged out");
    Cookies.remove("token");

    window.location.href = "/login";
  } catch (error) {
    throw new Error("Error logging out");
  }
};
