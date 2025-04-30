import { Prisma } from "@prisma/client";
import prisma from "../../../configs/database";

export const createNilai = async (
  studentProfileId: number,
  mapelKelasId: number,
  skor: number,
  capaianKompetensi?: string  // Added optional capaianKompetensi parameter
) => {
  // Pastikan skor dalam rentang yang valid
  if (typeof skor !== "number" || skor < 0 || skor > 100) {
    throw new Error("Skor harus berupa angka antara 0 dan 100.");
  }

  // Cari apakah studentProfileId terdaftar di kelas yang memiliki mapelKelasId
  const member = await prisma.memberKelas.findFirst({
    where: {
      studentId: studentProfileId,
      Kelas: {
        MapelKelas: {
          some: { id: mapelKelasId },
        },
      },
    },
    select: { id: true }, // Ambil hanya id untuk memberKelas
  });

  if (!member) {
    throw new Error(
      "Siswa tidak terdaftar dalam kelas yang memiliki mata pelajaran ini."
    );
  }

  // Jika valid, buat data baru dengan memberKelasId yang ditemukan
  return await prisma.nilai.create({
    data: {
      memberKelasId: member.id,
      mapelKelasId,
      skor,
      capaianKompetensi,  // Add the new field
      studentProfilId: studentProfileId,
    },
  });
};

export const getNilaiByKelas = async (kelasId: number, semester: string) => {
  return prisma.nilai.findMany({
    where: {
      MemberKelas: {
        kelasId,
        Kelas: {
          semester: semester as any,
        },
      },
    },
    include: {
      MemberKelas: {
        include: { StudentProfil: true },
      },
      MapelKelas: {
        include: { Mapel: true },
      },
    },
  });
};

export const updateNilai = async (
  id: number, 
  skor: number,
  capaianKompetensi?: string  // Added optional parameter for updating
) => {
  return prisma.nilai.update({
    where: { id },
    data: { 
      skor,
      ...(capaianKompetensi !== undefined && { capaianKompetensi })  // Only update if provided
    },
  });
};

export const getGradesLessonByStudent = async (studentId: number) => {
  const grades = await prisma.nilai.findMany({
    where: {
      StudentProfil: {
        MemberKelas: {
          some: {
            studentId: studentId,
          },
        },
      },
    },
    select: {
      skor: true,
      capaianKompetensi: true,  // Include capaianKompetensi in selection
      MapelKelas: {
        select: {
          Mapel: {
            select: {
              namaMapel: true,
            },
          },
        },
      },
    },
  });

  // Format response to include capaianKompetensi
  const formattedResponse: Record<string, { skor: number, capaianKompetensi?: string }> = {};

  grades.forEach((grade) => {
    const subjectName = grade.MapelKelas.Mapel.namaMapel || "Unknown";
    formattedResponse[subjectName] = { 
      skor: grade.skor,
      ...(grade.capaianKompetensi && { capaianKompetensi: grade.capaianKompetensi })
    };
  });

  return formattedResponse;
};

export const getFormData = async () => {
  try {
    const jurusan = await prisma.jurusan.findMany({
      include: {
        Kelas: {
          include: {
            MemberKelas: {
              include: {
                StudentProfil: {
                  include: {
                    MemberKelas: {
                      include: {
                        Kelas: {
                          include: {
                            MapelKelas: {
                              include: {
                                Mapel: {
                                  select: {
                                    id: true,
                                    namaMapel: true,
                                  },
                                },
                                nilai: {
                                  select: {
                                    skor: true,
                                    capaianKompetensi: true,  // Include in form data
                                    studentProfilId: true,
                                  },
                                },
                                Absensi: {
                                  select: {
                                    status: true,
                                    studentProfilId: true,
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    });

    return jurusan;
  } catch (error) {
    console.error("Error fetching form data:", error);
    throw new Error("Gagal mengambil data formulir");
  }
};