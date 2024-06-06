import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export interface Booking {
  id?: number;
  userId: number;
  rentalId: number;
  startDate: Date;
  endDate: Date;
  adults: number;
  createdAt: Date;
}

export const createBooking = async (booking: Booking) => {
  return await prisma.bookings.create({
    data: booking,
  });
};

export const getBookingById = async (id: number) => {
  return await prisma.bookings.findUnique({
    where: {
      id: id,
    },
  });
};

export const getBookingsByUserId = async (userId: number) => {
  return await prisma.bookings.findMany({
    where: {
      userId: userId,
    },
  });
};

export const getBookingsByRentalId = async (rentalId: number) => {
  return await prisma.bookings.findMany({
    where: {
      rentalId: rentalId,
    },
  });
};

export const deleteBooking = async (id: number) => {
  return await prisma.bookings.delete({
    where: {
      id: id,
    },
  });
};

export const updateBooking = async (id: number, booking: Booking) => {
  return await prisma.bookings.update({
    where: {
      id: id,
    },
    data: booking,
  });
};

export const getBookings = async () => {
  return await prisma.bookings.findMany();
};
