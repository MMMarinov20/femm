import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export interface Rental {
  id?: number;
  title: string;
  location: string;
  createdAt: Date;
}

export const getRentalById = async (id: number) => {
  return await prisma.rentals.findUnique({
    where: {
      id: id,
    },
  });
};
