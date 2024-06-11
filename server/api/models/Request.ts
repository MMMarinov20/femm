import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export interface FormRequest {
  id?: string;
  name: string;
  email: string;
  reason: string;
  phone: string;
  message: string;
  createdAt: Date;
}

export const createRequest = async (request: FormRequest) => {
  return await prisma.requests.create({
    data: request,
  });
};

export const getRequestById = async (id: string) => {
  return await prisma.requests.findUnique({
    where: {
      id: id,
    },
  });
};
