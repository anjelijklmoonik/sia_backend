import prisma from "../../../configs/database";

export const searchStudent = async (query: string) => {
  const parsedId = Number(query);
  const isIdValid = !isNaN(parsedId);

  return await prisma.studentProfil.findMany({
    where: {
      OR: [
        { nama: { contains: query, mode: "insensitive" } },
        ...(isIdValid ? [{ id: parsedId }] : []),
      ],
    },
    select: {
      id: true,
      nama: true,
      jenisKelamin: true,
      // tambahkan field lain sesuai kebutuhan
    },
  });
};
