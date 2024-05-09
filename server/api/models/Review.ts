import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export interface Review {
  id: number;
  text: string;
  rating: number;
  userId: number;
  rentalId: number;
}

export const submitReview = async (review: Review) => {
  return await prisma.reviews.create({
    data: review,
  });
};

export const getReviewsByRentalId = async (rentalId: number) => {
  return await prisma.reviews.findMany({
    where: {
      rentalId: rentalId,
    },
  });
};
