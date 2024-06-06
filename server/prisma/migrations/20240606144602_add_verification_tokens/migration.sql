-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "verificationToken" TEXT,
ADD COLUMN     "verified" BOOLEAN NOT NULL DEFAULT false;
