import React, { createContext, useState, ReactNode, useEffect } from "react";
import { getUserInfo } from "../services/authService";
import { getBookingsByUserId } from "../services/bookingService";
interface User {
  isLogged: boolean;
  id: number | null;
  username: string;
  email: string;
  nationality: string;
  bookings: any[];
}

interface UserContextType {
  user: User;
  updateUser: (
    isLogged: boolean,
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
    isLogged: false,
    id: null,
    username: "",
    email: "",
    nationality: "",
    bookings: [],
  });

  useEffect(() => {
    getUserInfo()
      .then(async (userInfo) => {
        const { id, username, email } = userInfo;
        const userBookings = await getBookingsByUserId();
        setUser({
          isLogged: true,
          id,
          username,
          email,
          nationality: "",
          bookings: userBookings,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, [user.isLogged]);

  const updateUser = (
    isLogged: boolean,
    id: number | null,
    username: string,
    email: string,
    nationality: string,
    bookings: any[]
  ) => {
    setUser({
      ...user,
      isLogged,
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
