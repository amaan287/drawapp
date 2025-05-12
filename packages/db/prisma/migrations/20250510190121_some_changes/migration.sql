/*
  Warnings:

  - You are about to drop the `_RoomAdmins` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `adminId` to the `Room` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_RoomAdmins" DROP CONSTRAINT "_RoomAdmins_A_fkey";

-- DropForeignKey
ALTER TABLE "_RoomAdmins" DROP CONSTRAINT "_RoomAdmins_B_fkey";

-- AlterTable
ALTER TABLE "Room" ADD COLUMN     "adminId" TEXT NOT NULL;

-- DropTable
DROP TABLE "_RoomAdmins";

-- CreateTable
CREATE TABLE "_AdditionalAdmins" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_AdditionalAdmins_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_AdditionalAdmins_B_index" ON "_AdditionalAdmins"("B");

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AdditionalAdmins" ADD CONSTRAINT "_AdditionalAdmins_A_fkey" FOREIGN KEY ("A") REFERENCES "Room"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AdditionalAdmins" ADD CONSTRAINT "_AdditionalAdmins_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
