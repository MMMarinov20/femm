import React, { createContext, useState, ReactNode, useEffect } from "react";
import { getUserInfo } from "../services/authService";

interface User {
  id: number | null;
  username: string;
  email: string;
}

interface UserContextType {
  user: User;
  //updateUser: (id: number | null, username: string, email: string) => void;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string>("");
  const [user, setUser] = useState<User>({
    id: null,
    username: "",
    email: "",
  });

  // const updateUser = (id: number | null, username: string, email: string) => {
  //   setUser({
  //     ...user,
  //     id,
  //     username,
  //     email,
  //   });
  // };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  }, []);

  useEffect(() => {
    if (token == "") return;
    getUserInfo(token)
      .then((userInfo) => {
        setUser(userInfo);
      })
      .catch((error) => {
        console.error("Error fetching user information:", error);
      });
  }, [token]);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
