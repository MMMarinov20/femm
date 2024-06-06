/*
  Warnings:

  - The primary key for the `Bookings` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Bookings" DROP CONSTRAINT "Bookings_pkey",
ALTER COLUMN "id" SET DEFAULT '',
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Bookings_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Bookings_id_seq";
