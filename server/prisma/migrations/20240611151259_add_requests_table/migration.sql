-- CreateTable
CREATE TABLE "Requests" (
    "id" TEXT NOT NULL DEFAULT '',
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Requests_pkey" PRIMARY KEY ("id")
);
