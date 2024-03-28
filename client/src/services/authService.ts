import { apiService } from "./apiService";
import { jwtDecode } from "jwt-decode";

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
    await apiService.post("register", {
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
    let user = await apiService.post("login", {
      email,
      password,
    });

    user && alert("Login successful");

    const { token } = user;

    getUserInfo(token)
      .then((userInfo) => {
        //console.log("User Info:", userInfo);
        user = userInfo;
      })
      .catch((error) => {
        console.error("Error fetching user information:", error);
      });
    return user;
  } catch (error) {
    throw new Error("Invalid email or password");
  }
};

export const getUserInfo = async (token: string) => {
  try {
    const decodedToken: any = jwtDecode(token);
    const id: number = decodedToken.id;
    const response = await apiService.get(`users/${id}`, token);
    return response;
  } catch (error) {
    throw new Error("Error fetching user information");
  }
};
