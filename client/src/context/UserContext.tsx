import React, { createContext, useState, ReactNode, useEffect } from "react";
import { getUserInfo } from "../services/authService";
import Cookies from "js-cookie";
import { getBookingsByUserId } from "../services/bookingService";
interface User {
  token: string;
  id: number | null;
  username: string;
  email: string;
  nationality: string;
  bookings: any[];
}

interface UserContextType {
  user: User;
  updateUser: (
    token: string,
    id: number | null,
    username: string,
    email: string,
    nationality: string,
    bookings: any[]
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
    bookings: [],
  });

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      getUserInfo(token)
        .then(async (userInfo) => {
          const { id, username, email } = userInfo;
          const userBookings = await getBookingsByUserId(id, token);
          console.log(userBookings);
          setUser({
            token,
            id,
            username,
            email,
            nationality: "",
            bookings: userBookings,
          });
        })
        .catch((error) => {
          Cookies.remove("token");
        });
    } else {
      setUser({
        token: "",
        id: null,
        username: "",
        email: "",
        nationality: "",
        bookings: [],
      });
    }
  }, []);

  const updateUser = (
    token: string,
    id: number | null,
    username: string,
    email: string,
    nationality: string,
    bookings: any[]
  ) => {
    setUser({
      ...user,
      token,
      id,
      username,
      email,
      nationality,
      bookings,
    });
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
