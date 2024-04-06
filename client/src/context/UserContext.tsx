import React, { createContext, useState, ReactNode, useEffect } from "react";
import { getUserInfo } from "../services/authService";
import Cookies from "js-cookie";
interface User {
  id: number | null;
  username: string;
  email: string;
}

interface UserContextType {
  user: User;
  updateUser: (id: number | null, username: string, email: string) => void;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>({
    id: null,
    username: "",
    email: "",
  });

  useEffect(() => {
    const token = Cookies.get("token");

    if (token) {
      getUserInfo(token)
        .then((userInfo) => {
          const { id, username, email } = userInfo;
          setUser({
            id,
            username,
            email,
          });
        })
        .catch((error) => {
          console.error("Error fetching user information:", error);
        });
    }
  }, []);

  const updateUser = (id: number | null, username: string, email: string) => {
    setUser({
      ...user,
      id,
      username,
      email,
    });
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
