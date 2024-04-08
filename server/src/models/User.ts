import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export interface User {
  id?: number;
  email: string;
  name: string;
  password: string;
  nationality: string;
}

export const createUser = async (user: User) => {
  return await prisma.users.create({
    data: user,
  });
};

export const findUserByEmail = async (email: string) => {
  return await prisma.users.findUnique({
    where: {
      email: email,
    },
  });
};

export const findUserById = async (id: number) => {
  return await prisma.users.findUnique({
    where: {
      id: id,
    },
  });
};

export const deleteUser = async (id: number) => {
  return await prisma.users.delete({
    where: {
      id: id,
    },
  });
};

export const updateUser = async (id: number, user: User) => {
  return await prisma.users.update({
    where: {
      id: id,
    },
    data: user,
  });
};

export const getAllUsers = async () => {
  return await prisma.users.findMany();
};

export const login = async (email: string, password: string) => {
  const user = await prisma.users.findUnique({
    where: {
      email: email,
    },
  });

  return user && (await bcrypt.compare(password, user.password)) ? user : null;
};
