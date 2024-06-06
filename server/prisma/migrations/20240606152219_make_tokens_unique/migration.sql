/*
  Warnings:

  - A unique constraint covering the columns `[verificationToken]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - Made the column `verificationToken` on table `Users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "verificationToken" SET NOT NULL,
ALTER COLUMN "verificationToken" SET DEFAULT '';

-- CreateIndex
CREATE UNIQUE INDEX "Users_verificationToken_key" ON "Users"("verificationToken");
