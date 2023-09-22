import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.movie.createMany({
    data: [
      {
        title: "Pengabdi Setan 2 Comunion",
        description:
          "adalah sebuahh film horor indonesia tahun 2022 yang disutradarai dan ditulis oleh Joko Anwar sebagai sekuel tahun 2017, Pengabdi Setan.",
        rating: 7.0,
        image: "",
      },
      {
        title: "Pengabdi Setan",
        description:
          "adalah sebuahh film horor indonesia tahun 2017 yang disutradarai dan ditulis oleh Joko Anwar",
        rating: 8.0,
        image: "",
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
