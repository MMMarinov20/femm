/*
  Warnings:

  - You are about to drop the column `price` on the `Rentals` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Rentals` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Reviews` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Reviews` table. All the data in the column will be lost.
  - Added the required column `text` to the `Reviews` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Rentals" DROP COLUMN "price",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Reviews" DROP COLUMN "title",
DROP COLUMN "updatedAt",
ADD COLUMN     "text" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "nationality" TEXT NOT NULL DEFAULT 'Unknown';
