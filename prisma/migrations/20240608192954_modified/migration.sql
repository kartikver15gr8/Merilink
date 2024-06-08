/*
  Warnings:

  - A unique constraint covering the columns `[profilehandle]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "avatar" TEXT,
ADD COLUMN     "password" TEXT,
ADD COLUMN     "profilehandle" TEXT;

-- CreateTable
CREATE TABLE "Links" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "userHandle" TEXT,
    "instagram" TEXT,
    "twitter" TEXT,
    "linkedin" TEXT,
    "github" TEXT,
    "youtube" TEXT,
    "figma" TEXT,
    "hashnode" TEXT,
    "medium" TEXT,
    "producthunt" TEXT,
    "gumroad" TEXT,
    "substack" TEXT,
    "twitch" TEXT,

    CONSTRAINT "Links_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Links_userHandle_key" ON "Links"("userHandle");

-- CreateIndex
CREATE UNIQUE INDEX "Links_instagram_key" ON "Links"("instagram");

-- CreateIndex
CREATE UNIQUE INDEX "Links_twitter_key" ON "Links"("twitter");

-- CreateIndex
CREATE UNIQUE INDEX "Links_linkedin_key" ON "Links"("linkedin");

-- CreateIndex
CREATE UNIQUE INDEX "Links_github_key" ON "Links"("github");

-- CreateIndex
CREATE UNIQUE INDEX "Links_youtube_key" ON "Links"("youtube");

-- CreateIndex
CREATE UNIQUE INDEX "Links_figma_key" ON "Links"("figma");

-- CreateIndex
CREATE UNIQUE INDEX "Links_hashnode_key" ON "Links"("hashnode");

-- CreateIndex
CREATE UNIQUE INDEX "Links_medium_key" ON "Links"("medium");

-- CreateIndex
CREATE UNIQUE INDEX "Links_producthunt_key" ON "Links"("producthunt");

-- CreateIndex
CREATE UNIQUE INDEX "Links_gumroad_key" ON "Links"("gumroad");

-- CreateIndex
CREATE UNIQUE INDEX "Links_substack_key" ON "Links"("substack");

-- CreateIndex
CREATE UNIQUE INDEX "Links_twitch_key" ON "Links"("twitch");

-- CreateIndex
CREATE UNIQUE INDEX "User_profilehandle_key" ON "User"("profilehandle");

-- AddForeignKey
ALTER TABLE "Links" ADD CONSTRAINT "Links_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
