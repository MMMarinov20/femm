import React, { createContext, useState, ReactNode, useEffect } from "react";
import { getUserInfo } from "../services/authService";
import Cookies from "js-cookie";
interface User {
  token: string;
  id: number | null;
  username: string;
  email: string;
  nationality: string;
}

interface UserContextType {
  user: User;
  updateUser: (
    token: string,
    id: number | null,
    username: string,
    email: string,
    nationality: string
  ) => void;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>({
    token: "",
    id: null,
    username: "",
    email: "",
    nationality: "",
  });

  useEffect(() => {
    const token = Cookies.get("token");
    console.log("Token:", token);
    if (token) {
      getUserInfo(token)
        .then((userInfo) => {
          const { id, username, email } = userInfo;
          setUser({
            token,
            id,
            username,
            email,
            nationality: "",
          });
        })
        .catch((error) => {
          console.error("Error fetching user information:", error);
        });
    } else {
      setUser({
        token: "",
        id: null,
        username: "",
        email: "",
        nationality: "",
      });
    }
  }, []);

  const updateUser = (
    token: string,
    id: number | null,
    username: string,
    email: string,
    nationality: string
  ) => {
    setUser({
      ...user,
      token,
      id,
      username,
      email,
      nationality,
    });
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
