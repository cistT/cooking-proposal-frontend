-- CreateTable
CREATE TABLE "FavoriteCook" (
    "id" SERIAL NOT NULL,
    "userID" TEXT NOT NULL,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "recipeID" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "cost" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "indication" TEXT NOT NULL,
    "material" TEXT[],

    CONSTRAINT "FavoriteCook_pkey" PRIMARY KEY ("id")
);
