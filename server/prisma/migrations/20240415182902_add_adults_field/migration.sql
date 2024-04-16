/*
  Warnings:

  - Added the required column `adults` to the `Bookings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bookings" ADD COLUMN     "adults" INTEGER NOT NULL;
