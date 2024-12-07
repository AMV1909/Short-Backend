-- CreateTable
CREATE TABLE "urls" (
    "id" SERIAL NOT NULL,
    "shortUrl" TEXT NOT NULL,
    "longUrl" TEXT NOT NULL,

    CONSTRAINT "urls_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "urls_shortUrl_key" ON "urls"("shortUrl");
