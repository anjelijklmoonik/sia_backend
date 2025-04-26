import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const jurusan = await prisma.jurusan.createMany({
    data: [
      {
        nama: "SMA",
      },
      {
        nama: "Layanan Kesehatan",
      },
      {
        nama: "Akuntasi Keuangan Lembaga",
      },
    ],
  });

  const academicYear = await prisma.academicYear.createMany({
    data: [
      {
        year: 2025,
      },
    ],
  });

// Create mapel (subjects) with proper categorization
await prisma.mapel.createMany({
  data: [
    // SMA UMUM (ALL GRADES)
    { namaMapel: "Pend. Agama Kristen & Budi Pekerti", type: "UMUM", jurusanId: 1 },
    { namaMapel: "Pend. Pancasila", type: "UMUM", jurusanId: 1 },
    { namaMapel: "Bahasa Indonesia", type: "UMUM", jurusanId: 1 },
    { namaMapel: "Matematika", type: "UMUM", jurusanId: 1 },
    { namaMapel: "Bahasa Inggris", type: "UMUM", jurusanId: 1 },
    { namaMapel: "PJOK", type: "UMUM", jurusanId: 1 },
    { namaMapel: "Sejarah", type: "UMUM", jurusanId: 1 },
    { namaMapel: "Seni: Musik", type: "UMUM", jurusanId: 1 },
    { namaMapel: "Mulok", type: "UMUM", jurusanId: 1 },
    { namaMapel: "Mulok: TIK", type: "UMUM", jurusanId: 1 },
    
    // SMA KELAS 10 SPECIFIC
    { namaMapel: "IPA: Fisika", type: "UMUM", jurusanId: 1 },
    { namaMapel: "IPA: Biologi", type: "UMUM", jurusanId: 1 },
    { namaMapel: "IPA: Kimia", type: "UMUM", jurusanId: 1 },
    { namaMapel: "IPS: Sosiologi", type: "UMUM", jurusanId: 1 },
    { namaMapel: "IPS: Sejarah", type: "UMUM", jurusanId: 1 },
    { namaMapel: "IPS: Ekonomi", type: "UMUM", jurusanId: 1 },
    { namaMapel: "IPS: Geografi", type: "UMUM", jurusanId: 1 },
    { namaMapel: "Informatika", type: "UMUM", jurusanId: 1 },
    
    // SMA KELAS 11-12 PILIHAN
    { namaMapel: "Fisika", type: "UMUM", jurusanId: 1 },
    { namaMapel: "Kimia", type: "UMUM", jurusanId: 1 },
    { namaMapel: "Biologi", type: "UMUM", jurusanId: 1 },
    { namaMapel: "Matematika Lanjut", type: "UMUM", jurusanId: 1 },
    { namaMapel: "Sosiologi", type: "UMUM", jurusanId: 1 },
    { namaMapel: "Ekonomi", type: "UMUM", jurusanId: 1 },
    { namaMapel: "Geografi", type: "UMUM", jurusanId: 1 },
    { namaMapel: "Sejarah Dunia", type: "UMUM", jurusanId: 1 },
    { namaMapel: "Bahasa Inggris Tingkat Lanjut", type: "UMUM", jurusanId: 1 },
    
    // SMA KELAS 12 SPECIFIC
    { namaMapel: "Prakarya & Kewirausahaan", type: "UMUM", jurusanId: 1 },

    // SMK UMUM (ALL GRADES - BOTH JURUSAN)
    { namaMapel: "Pend. Agama Kristen & Budi Pekerti", type: "UMUM", jurusanId: null },
    { namaMapel: "Pend. Pancasila", type: "UMUM", jurusanId: null },
    { namaMapel: "Bahasa Indonesia", type: "UMUM", jurusanId: null },
    { namaMapel: "PJOK", type: "UMUM", jurusanId: null },
    { namaMapel: "Sejarah", type: "UMUM", jurusanId: null },
    { namaMapel: "Seni Budaya: Musik", type: "UMUM", jurusanId: null },
    { namaMapel: "Mulok TIK", type: "UMUM", jurusanId: null },
    
    // LAYANAN KESEHATAN - SHARED ACROSS GRADES
    { namaMapel: "Matematika", type: "JURUSAN", jurusanId: 2 },
    { namaMapel: "Bahasa Inggris", type: "JURUSAN", jurusanId: 2 },
    { namaMapel: "Informatika", type: "JURUSAN", jurusanId: 2 },
    { namaMapel: "Project IPAS", type: "JURUSAN", jurusanId: 2 },
    { namaMapel: "KKAKC1-IPU", type: "JURUSAN", jurusanId: 2 },
    { namaMapel: "KKAKC2-KDM", type: "JURUSAN", jurusanId: 2 },
    { namaMapel: "KKAKC3-KDTK", type: "JURUSAN", jurusanId: 2 },
    { namaMapel: "Project Kreatif dan Kewirausahaan", type: "JURUSAN", jurusanId: 2 },
    { namaMapel: "Ilmu Kesehatan Masyarakat", type: "JURUSAN", jurusanId: 2 },
    { namaMapel: "Kimia", type: "JURUSAN", jurusanId: 2 },
    
    // LAYANAN KESEHATAN KELAS 10 - DASAR PROGRAM KEAHLIAN
    { namaMapel: "DDKL1-PB", type: "JURUSAN", jurusanId: 2 },
    { namaMapel: "DDKL2-PT", type: "JURUSAN", jurusanId: 2 },
    { namaMapel: "DDKL3-PHP", type: "JURUSAN", jurusanId: 2 },
    { namaMapel: "DDKL4-ANFIS", type: "JURUSAN", jurusanId: 2 },
    { namaMapel: "DDKL5-TDKL", type: "JURUSAN", jurusanId: 2 },
    { namaMapel: "DDKL6-P2M", type: "JURUSAN", jurusanId: 2 },
    
    // LAYANAN KESEHATAN KELAS 12 SPECIFIC
    { namaMapel: "Praktik Kerja Lapangan", type: "JURUSAN", jurusanId: 2 },
    { namaMapel: "Komunikasi Keperawatan", type: "JURUSAN", jurusanId: 2 },
    
    // AKUNTANSI - SHARED ACROSS GRADES
    { namaMapel: "Matematika", type: "JURUSAN", jurusanId: 3 },
    { namaMapel: "Bahasa Inggris", type: "JURUSAN", jurusanId: 3 },
    { namaMapel: "Informatika", type: "JURUSAN", jurusanId: 3 },
    { namaMapel: "Project IPAS", type: "JURUSAN", jurusanId: 3 },
    { namaMapel: "KKBA1-EB", type: "JURUSAN", jurusanId: 3 },
    { namaMapel: "KKBA2-APJDM", type: "JURUSAN", jurusanId: 3 },
    { namaMapel: "KKBA3-AL/IP", type: "JURUSAN", jurusanId: 3 },
    { namaMapel: "KKBA4-AK", type: "JURUSAN", jurusanId: 3 },
    { namaMapel: "KKBA5-KompAk", type: "JURUSAN", jurusanId: 3 },
    { namaMapel: "KKBA6-PJK", type: "JURUSAN", jurusanId: 3 },
    { namaMapel: "Project Kreatif dan Kewirausahaan", type: "JURUSAN", jurusanId: 3 },
    
    // AKUNTANSI KELAS 10 - DASAR PROGRAM KEAHLIAN
    { namaMapel: "DDAKL V1-PB", type: "JURUSAN", jurusanId: 3 },
    { namaMapel: "DDAKL V1-PT", type: "JURUSAN", jurusanId: 3 },
    { namaMapel: "DDAKL V1-P3", type: "JURUSAN", jurusanId: 3 },
    { namaMapel: "DDAKL V1-LK", type: "JURUSAN", jurusanId: 3 },
    { namaMapel: "DDAKL V2-K3LH", type: "JURUSAN", jurusanId: 3 },
    { namaMapel: "DDAKL V2-EP", type: "JURUSAN", jurusanId: 3 },
    { namaMapel: "DDAKL V2-P2KADPD", type: "JURUSAN", jurusanId: 3 },
    { namaMapel: "DDAKL V2-PAPA", type: "JURUSAN", jurusanId: 3 },
    
    // AKUNTANSI KELAS 11 SPECIFIC
    { namaMapel: "Perbankan", type: "JURUSAN", jurusanId: 3 },
    { namaMapel: "Akuntansi Pembiayaan", type: "JURUSAN", jurusanId: 3 },
    
    // AKUNTANSI KELAS 12 SPECIFIC
    { namaMapel: "Praktik Kerja Lapangan", type: "JURUSAN", jurusanId: 3 },
    { namaMapel: "Manajemen Keuangan", type: "JURUSAN", jurusanId: 3 },
    { namaMapel: "Auditing", type: "JURUSAN", jurusanId: 3 },
  ],
});

  const user1 = await prisma.users.create({
    data: {
      username: "anjeli",
      // password: "$2y$10$dvkvdUNjZxq27VkeD7Iv5.x/kRjScplztpBLx0/CtaL0ztIbMnDxO",
      password: await Bun.password.hash("anjeli123", {
        algorithm: "bcrypt",
        cost: 10,
      }),
      role: "ADMIN",
      studentProfil: {
        create: {
          alamat: "Jl. Kebon Jeruk",
          jenisKelamin: "Perempuan",
          nama: "Anjeli",
          kelas: "X",
          noIndukSiswa: "1374823748",
          sekolah: "SMA",
          ttl: "Manado, 2002-12-09",
          jurusanId: 1,
        },
      },
    },
  });

  const user2 = await prisma.users.create({
    data: {
      username: "Yosep",
      // password: "$2y$10$dvkvdUNjZxq27VkeD7Iv5.x/kRjScplztpBLx0/CtaL0ztIbMnDxO",
      password: await Bun.password.hash("Yosep123", {
        algorithm: "bcrypt",
        cost: 10,
      }),
      role: "STUDENT",
      studentProfil: {
        create: {
          alamat: "Jl. Kebon Jeruk",
          jenisKelamin: "Laki-laki",
          nama: "Yosep",
          kelas: "X",
          noIndukSiswa: "1374823749",
          sekolah: "SMK",
          ttl: "Manado, 2001-12-09",
          jurusanId: 1,
        },
      },
    },
  });

  const user3 = await prisma.users.create({
    data: {
      username: "budi",
      // password: "$2y$10$dvkvdUNjZxq27VkeD7Iv5.x/kRjScplztpBLx0/CtaL0ztIbMnDxO",
      password: await Bun.password.hash("budi123", {
        algorithm: "bcrypt",
        cost: 10,
      }),
      role: "STUDENT",
      studentProfil: {
        create: {
          alamat: "Jl. Kebon Jeruk",
          jenisKelamin: "Laki-laki",
          nama: "Budi",
          kelas: "XI",
          noIndukSiswa: "1374823750",
          sekolah: "SMK",
          ttl: "Manado, 2001-12-09",
          jurusanId: 1,
        },
      },
    },
  });

  const user4 = await prisma.users.create({
    data: {
      username: "Yanto",
      // password: "$2y$10$dvkvdUNjZxq27VkeD7Iv5.x/kRjScplztpBLx0/CtaL0ztIbMnDxO",
      password: await Bun.password.hash("Yanto123", {
        algorithm: "bcrypt",
        cost: 10,
      }),
      role: "STUDENT",
      studentProfil: {
        create: {
          alamat: "Jl. Kebon Jeruk",
          jenisKelamin: "Laki-laki",
          nama: "Yanto",
          kelas: "XII",
          noIndukSiswa: "1374823751",
          sekolah: "SMK",
          ttl: "Manado, 2001-12-09",
          jurusanId: 1,
        },
      },
    },
  });

  const user5 = await prisma.users.create({
    data: {
      username: "Masbro",
      // password: "$2y$10$dvkvdUNjZxq27VkeD7Iv5.x/kRjScplztpBLx0/CtaL0ztIbMnDxO",
      password: await Bun.password.hash("Masbro123", {
        algorithm: "bcrypt",
        cost: 10,
      }),
      role: "STUDENT",
      studentProfil: {
        create: {
          alamat: "Jl. Kebon Jeruk",
          jenisKelamin: "Laki-laki",
          nama: "Masbro",
          kelas: "X",
          noIndukSiswa: "1374823752",
          sekolah: "SMK",
          ttl: "Manado, 2001-12-09",
          jurusanId: 2,
        },
      },
    },
  });

  const user6 = await prisma.users.create({
    data: {
      username: "Nando",
      // password: "$2y$10$dvkvdUNjZxq27VkeD7Iv5.x/kRjScplztpBLx0/CtaL0ztIbMnDxO",
      password: await Bun.password.hash("Nando123", {
        algorithm: "bcrypt",
        cost: 10,
      }),
      role: "STUDENT",
      studentProfil: {
        create: {
          alamat: "Jl. Kebon Jeruk",
          jenisKelamin: "Laki-laki",
          nama: "Nando",
          kelas: "XI",
          noIndukSiswa: "1374823753",
          sekolah: "SMK",
          ttl: "Manado, 2001-12-09",
          jurusanId: 2,
        },
      },
    },
  });

  const user7 = await prisma.users.create({
    data: {
      username: "Nanang",
      // password: "$2y$10$dvkvdUNjZxq27VkeD7Iv5.x/kRjScplztpBLx0/CtaL0ztIbMnDxO",
      password: await Bun.password.hash("Nanang123", {
        algorithm: "bcrypt",
        cost: 10,
      }),
      role: "STUDENT",
      studentProfil: {
        create: {
          alamat: "Jl. Kebon Jeruk",
          jenisKelamin: "Laki-laki",
          nama: "Nanang",
          kelas: "XII",
          noIndukSiswa: "1374823754",
          sekolah: "SMK",
          ttl: "Manado, 2001-12-09",
          jurusanId: 2,
        },
      },
    },
  });

  const user8 = await prisma.users.create({
    data: {
      username: "Rudi",
      // password: "$2y$10$dvkvdUNjZxq27VkeD7Iv5.x/kRjScplztpBLx0/CtaL0ztIbMnDxO",
      password: await Bun.password.hash("Rudi123", {
        algorithm: "bcrypt",
        cost: 10,
      }),
      role: "STUDENT",
      studentProfil: {
        create: {
          alamat: "Jl. Kebon Jeruk",
          jenisKelamin: "Laki-laki",
          nama: "Rudi",
          kelas: "X",
          noIndukSiswa: "1374823755",
          sekolah: "SMK",
          ttl: "Manado, 2001-12-09",
          jurusanId: 3,
        },
      },
    },
  });

  const user9 = await prisma.users.create({
    data: {
      username: "Masdi",
      // password: "$2y$10$dvkvdUNjZxq27VkeD7Iv5.x/kRjScplztpBLx0/CtaL0ztIbMnDxO",
      password: await Bun.password.hash("Masdi123", {
        algorithm: "bcrypt",
        cost: 10,
      }),
      role: "STUDENT",
      studentProfil: {
        create: {
          alamat: "Jl. Kebon Jeruk",
          jenisKelamin: "Laki-laki",
          nama: "Masdi",
          kelas: "XI",
          noIndukSiswa: "1374823756",
          sekolah: "SMK",
          ttl: "Manado, 2001-12-09",
          jurusanId: 3,
        },
      },
    },
  });

  const user10 = await prisma.users.create({
    data: {
      username: "Wawan",
      // password: "$2y$10$dvkvdUNjZxq27VkeD7Iv5.x/kRjScplztpBLx0/CtaL0ztIbMnDxO",
      password: await Bun.password.hash("Wawan123", {
        algorithm: "bcrypt",
        cost: 10,
      }),
      role: "STUDENT",
      studentProfil: {
        create: {
          alamat: "Jl. Kebon Jeruk",
          jenisKelamin: "Laki-laki",
          nama: "Wawan",
          kelas: "XII",
          noIndukSiswa: "1374823757",
          sekolah: "SMK",
          ttl: "Manado, 2001-12-09",
          jurusanId: 3,
        },
      },
    },
  });

  const kelas = await prisma.kelas.createManyAndReturn({
    data: [
      // Semester GENAP
      { noKelas: "X", jurusanId: 1, academicYearId: 1, semester: "GENAP" },
      { noKelas: "XI", jurusanId: 1, academicYearId: 1, semester: "GENAP" },
      { noKelas: "XII", jurusanId: 1, academicYearId: 1, semester: "GENAP" },
      { noKelas: "X", jurusanId: 2, academicYearId: 1, semester: "GENAP" },
      { noKelas: "XI", jurusanId: 2, academicYearId: 1, semester: "GENAP" },
      { noKelas: "XII", jurusanId: 2, academicYearId: 1, semester: "GENAP" },
      { noKelas: "X", jurusanId: 3, academicYearId: 1, semester: "GENAP" },
      { noKelas: "XI", jurusanId: 3, academicYearId: 1, semester: "GENAP" },
      { noKelas: "XII", jurusanId: 3, academicYearId: 1, semester: "GENAP" },
  
      // Semester GANJIL
      { noKelas: "X", jurusanId: 1, academicYearId: 1, semester: "GANJIL" },
      { noKelas: "XI", jurusanId: 1, academicYearId: 1, semester: "GANJIL" },
      { noKelas: "XII", jurusanId: 1, academicYearId: 1, semester: "GANJIL" },
      { noKelas: "X", jurusanId: 2, academicYearId: 1, semester: "GANJIL" },
      { noKelas: "XI", jurusanId: 2, academicYearId: 1, semester: "GANJIL" },
      { noKelas: "XII", jurusanId: 2, academicYearId: 1, semester: "GANJIL" },
      { noKelas: "X", jurusanId: 3, academicYearId: 1, semester: "GANJIL" },
      { noKelas: "XI", jurusanId: 3, academicYearId: 1, semester: "GANJIL" },
      { noKelas: "XII", jurusanId: 3, academicYearId: 1, semester: "GANJIL" },
    ],
  });
  

  const memberKelas = await prisma.memberKelas.createManyAndReturn({
    data: [
      // SEMESTER GANJIL (yang sudah ada)
      {
        kelasId: kelas[9].id,    // X, jurusan 1, GANJIL (index 9)
        studentId: 2,
      },
      {
        kelasId: kelas[10].id,   // XI, jurusan 1, GANJIL (index 10)
        studentId: 3,
      },
      {
        kelasId: kelas[11].id,   // XII, jurusan 1, GANJIL (index 11)
        studentId: 4,
      },
      {
        kelasId: kelas[12].id,   // X, jurusan 2, GANJIL (index 12)
        studentId: 5,
      },
      {
        kelasId: kelas[13].id,   // XI, jurusan 2, GANJIL (index 13)
        studentId: 6,
      },
      {
        kelasId: kelas[14].id,   // XII, jurusan 2, GANJIL (index 14)
        studentId: 7,
      },
      {
        kelasId: kelas[15].id,   // X, jurusan 3, GANJIL (index 15)
        studentId: 8,
      },
      {
        kelasId: kelas[16].id,   // XI, jurusan 3, GANJIL (index 16)
        studentId: 9,
      },
      {
        kelasId: kelas[17].id,   // XII, jurusan 3, GANJIL (index 17)
        studentId: 10,
      },
      
      // SEMESTER GENAP (ditambahkan)
      {
        kelasId: kelas[0].id,    // X, jurusan 1, GENAP (index 0)
        studentId: 2,
      },
      {
        kelasId: kelas[1].id,    // XI, jurusan 1, GENAP (index 1)
        studentId: 3,
      },
      {
        kelasId: kelas[2].id,    // XII, jurusan 1, GENAP (index 2)
        studentId: 4,
      },
      {
        kelasId: kelas[3].id,    // X, jurusan 2, GENAP (index 3)
        studentId: 5,
      },
      {
        kelasId: kelas[4].id,    // XI, jurusan 2, GENAP (index 4)
        studentId: 6,
      },
      {
        kelasId: kelas[5].id,    // XII, jurusan 2, GENAP (index 5)
        studentId: 7,
      },
      {
        kelasId: kelas[6].id,    // X, jurusan 3, GENAP (index 6)
        studentId: 8,
      },
      {
        kelasId: kelas[7].id,    // XI, jurusan 3, GENAP (index 7)
        studentId: 9,
      },
      {
        kelasId: kelas[8].id,    // XII, jurusan 3, GENAP (index 8)
        studentId: 10,
      },
    ],
  });

  const keuangan = await prisma.keuangan.createMany({
    data: [
      {
        lastTransDate: new Date(),
        debit: 0,
        kredit: 0,
        total: 0,
        studentId: 1,
      },
      {
        lastTransDate: new Date(),
        debit: 0,
        kredit: 0,
        total: 0,
        studentId: 2,
      },
      {
        lastTransDate: new Date(),
        debit: 0,
        kredit: 0,
        total: 0,
        studentId: 3,
      },
      {
        lastTransDate: new Date(),
        debit: 0,
        kredit: 0,
        total: 0,
        studentId: 4,
      },
      {
        lastTransDate: new Date(),
        debit: 0,
        kredit: 0,
        total: 0,
        studentId: 5,
      },
      {
        lastTransDate: new Date(),
        debit: 0,
        kredit: 0,
        total: 0,
        studentId: 6,
      },
      {
        lastTransDate: new Date(),
        debit: 0,
        kredit: 0,
        total: 0,
        studentId: 7,
      },
      {
        lastTransDate: new Date(),
        debit: 0,
        kredit: 0,
        total: 0,
        studentId: 8,
      },
      {
        lastTransDate: new Date(),
        debit: 0,
        kredit: 0,
        total: 0,
        studentId: 9,
      },
      {
        lastTransDate: new Date(),
        debit: 0,
        kredit: 0,
        total: 0,
        studentId: 10,
      },
    ],
  });

// Enhanced MapelKelas Seed Creation
const mapelKelas = await prisma.mapelKelas.createMany({
  data: [
    // === SMA CLASSES (Jurusan ID: 1) ===
    
    // KELAS X SMA - SEMESTER GENAP
    // Core subjects for X SMA
    { kelasId: kelas[0].id, mapelId: 1 },  // Pend. Agama Kristen & Budi Pekerti
    { kelasId: kelas[0].id, mapelId: 2 },  // Pend. Pancasila
    { kelasId: kelas[0].id, mapelId: 3 },  // Bahasa Indonesia
    { kelasId: kelas[0].id, mapelId: 4 },  // Matematika
    { kelasId: kelas[0].id, mapelId: 5 },  // Bahasa Inggris
    { kelasId: kelas[0].id, mapelId: 6 },  // PJOK
    { kelasId: kelas[0].id, mapelId: 7 },  // Sejarah
    { kelasId: kelas[0].id, mapelId: 8 },  // Seni: Musik
    { kelasId: kelas[0].id, mapelId: 9 },  // Mulok
    { kelasId: kelas[0].id, mapelId: 10 }, // Mulok: TIK
    // X SMA specific subjects
    { kelasId: kelas[0].id, mapelId: 11 }, // IPA: Fisika
    { kelasId: kelas[0].id, mapelId: 12 }, // IPA: Biologi
    { kelasId: kelas[0].id, mapelId: 13 }, // IPA: Kimia
    { kelasId: kelas[0].id, mapelId: 14 }, // IPS: Sosiologi
    { kelasId: kelas[0].id, mapelId: 15 }, // IPS: Sejarah
    { kelasId: kelas[0].id, mapelId: 16 }, // IPS: Ekonomi
    { kelasId: kelas[0].id, mapelId: 17 }, // IPS: Geografi
    { kelasId: kelas[0].id, mapelId: 18 }, // Informatika

    // KELAS XI SMA - SEMESTER GENAP
    // Core subjects for XI SMA
    { kelasId: kelas[1].id, mapelId: 1 },  // Pend. Agama Kristen & Budi Pekerti
    { kelasId: kelas[1].id, mapelId: 2 },  // Pend. Pancasila
    { kelasId: kelas[1].id, mapelId: 3 },  // Bahasa Indonesia
    { kelasId: kelas[1].id, mapelId: 4 },  // Matematika
    { kelasId: kelas[1].id, mapelId: 5 },  // Bahasa Inggris
    { kelasId: kelas[1].id, mapelId: 6 },  // PJOK
    { kelasId: kelas[1].id, mapelId: 7 },  // Sejarah
    { kelasId: kelas[1].id, mapelId: 8 },  // Seni: Musik
    // XI SMA specific subjects
    { kelasId: kelas[1].id, mapelId: 19 }, // Fisika
    { kelasId: kelas[1].id, mapelId: 20 }, // Kimia
    { kelasId: kelas[1].id, mapelId: 21 }, // Biologi
    { kelasId: kelas[1].id, mapelId: 22 }, // Matematika Lanjut
    { kelasId: kelas[1].id, mapelId: 23 }, // Sosiologi
    { kelasId: kelas[1].id, mapelId: 24 }, // Ekonomi
    { kelasId: kelas[1].id, mapelId: 25 }, // Geografi
    { kelasId: kelas[1].id, mapelId: 26 }, // Sejarah Dunia
    { kelasId: kelas[1].id, mapelId: 27 }, // Bahasa Inggris Tingkat Lanjut

    // KELAS XII SMA - SEMESTER GENAP
    // Core subjects for XII SMA
    { kelasId: kelas[2].id, mapelId: 1 },  // Pend. Agama Kristen & Budi Pekerti
    { kelasId: kelas[2].id, mapelId: 2 },  // Pend. Pancasila
    { kelasId: kelas[2].id, mapelId: 3 },  // Bahasa Indonesia
    { kelasId: kelas[2].id, mapelId: 4 },  // Matematika
    { kelasId: kelas[2].id, mapelId: 5 },  // Bahasa Inggris
    { kelasId: kelas[2].id, mapelId: 6 },  // PJOK
    { kelasId: kelas[2].id, mapelId: 7 },  // Sejarah
    { kelasId: kelas[2].id, mapelId: 8 },  // Seni: Musik
    // XII SMA specific subjects
    { kelasId: kelas[2].id, mapelId: 19 }, // Fisika
    { kelasId: kelas[2].id, mapelId: 20 }, // Kimia
    { kelasId: kelas[2].id, mapelId: 21 }, // Biologi
    { kelasId: kelas[2].id, mapelId: 22 }, // Matematika Lanjut
    { kelasId: kelas[2].id, mapelId: 28 }, // Prakarya & Kewirausahaan

    // === SMK LAYANAN KESEHATAN (Jurusan ID: 2) ===

    // KELAS X LAYANAN KESEHATAN - SEMESTER GENAP
    // SMK Common subjects
    { kelasId: kelas[3].id, mapelId: 29 }, // Pend. Agama Kristen & Budi Pekerti
    { kelasId: kelas[3].id, mapelId: 30 }, // Pend. Pancasila
    { kelasId: kelas[3].id, mapelId: 31 }, // Bahasa Indonesia
    { kelasId: kelas[3].id, mapelId: 32 }, // PJOK
    { kelasId: kelas[3].id, mapelId: 33 }, // Sejarah
    { kelasId: kelas[3].id, mapelId: 34 }, // Seni Budaya: Musik
    { kelasId: kelas[3].id, mapelId: 35 }, // Mulok TIK
    // Layanan Kesehatan common subjects
    { kelasId: kelas[3].id, mapelId: 36 }, // Matematika
    { kelasId: kelas[3].id, mapelId: 37 }, // Bahasa Inggris
    { kelasId: kelas[3].id, mapelId: 38 }, // Informatika
    { kelasId: kelas[3].id, mapelId: 39 }, // Project IPAS
    // Class X Layanan Kesehatan specific subjects
    { kelasId: kelas[3].id, mapelId: 46 }, // DDKL1-PB
    { kelasId: kelas[3].id, mapelId: 47 }, // DDKL2-PT
    { kelasId: kelas[3].id, mapelId: 48 }, // DDKL3-PHP
    { kelasId: kelas[3].id, mapelId: 49 }, // DDKL4-ANFIS
    { kelasId: kelas[3].id, mapelId: 50 }, // DDKL5-TDKL
    { kelasId: kelas[3].id, mapelId: 51 }, // DDKL6-P2M

    // KELAS XI LAYANAN KESEHATAN - SEMESTER GENAP
    // SMK Common subjects
    { kelasId: kelas[4].id, mapelId: 29 }, // Pend. Agama Kristen & Budi Pekerti
    { kelasId: kelas[4].id, mapelId: 30 }, // Pend. Pancasila
    { kelasId: kelas[4].id, mapelId: 31 }, // Bahasa Indonesia
    { kelasId: kelas[4].id, mapelId: 32 }, // PJOK
    { kelasId: kelas[4].id, mapelId: 33 }, // Sejarah
    { kelasId: kelas[4].id, mapelId: 34 }, // Seni Budaya: Musik
    // Layanan Kesehatan common subjects
    { kelasId: kelas[4].id, mapelId: 36 }, // Matematika
    { kelasId: kelas[4].id, mapelId: 37 }, // Bahasa Inggris
    { kelasId: kelas[4].id, mapelId: 38 }, // Informatika
    { kelasId: kelas[4].id, mapelId: 39 }, // Project IPAS
    // Class XI Layanan Kesehatan specific subjects
    { kelasId: kelas[4].id, mapelId: 40 }, // KKAKC1-IPU
    { kelasId: kelas[4].id, mapelId: 41 }, // KKAKC2-KDM
    { kelasId: kelas[4].id, mapelId: 42 }, // KKAKC3-KDTK
    { kelasId: kelas[4].id, mapelId: 43 }, // Project Kreatif dan Kewirausahaan
    { kelasId: kelas[4].id, mapelId: 44 }, // Ilmu Kesehatan Masyarakat
    { kelasId: kelas[4].id, mapelId: 45 }, // Kimia

    // KELAS XII LAYANAN KESEHATAN - SEMESTER GENAP
    // SMK Common subjects
    { kelasId: kelas[5].id, mapelId: 29 }, // Pend. Agama Kristen & Budi Pekerti
    { kelasId: kelas[5].id, mapelId: 30 }, // Pend. Pancasila
    { kelasId: kelas[5].id, mapelId: 31 }, // Bahasa Indonesia
    // Layanan Kesehatan common subjects
    { kelasId: kelas[5].id, mapelId: 36 }, // Matematika
    { kelasId: kelas[5].id, mapelId: 37 }, // Bahasa Inggris
    // Class XII Layanan Kesehatan specific subjects
    { kelasId: kelas[5].id, mapelId: 40 }, // KKAKC1-IPU
    { kelasId: kelas[5].id, mapelId: 41 }, // KKAKC2-KDM
    { kelasId: kelas[5].id, mapelId: 42 }, // KKAKC3-KDTK
    { kelasId: kelas[5].id, mapelId: 43 }, // Project Kreatif dan Kewirausahaan
    { kelasId: kelas[5].id, mapelId: 52 }, // Praktik Kerja Lapangan
    { kelasId: kelas[5].id, mapelId: 53 }, // Komunikasi Keperawatan

    // === SMK AKUNTANSI KEUANGAN LEMBAGA (Jurusan ID: 3) ===

    // KELAS X AKUNTANSI - SEMESTER GENAP
    // SMK Common subjects
    { kelasId: kelas[6].id, mapelId: 29 }, // Pend. Agama Kristen & Budi Pekerti
    { kelasId: kelas[6].id, mapelId: 30 }, // Pend. Pancasila
    { kelasId: kelas[6].id, mapelId: 31 }, // Bahasa Indonesia
    { kelasId: kelas[6].id, mapelId: 32 }, // PJOK
    { kelasId: kelas[6].id, mapelId: 33 }, // Sejarah
    { kelasId: kelas[6].id, mapelId: 34 }, // Seni Budaya: Musik
    { kelasId: kelas[6].id, mapelId: 35 }, // Mulok TIK
    // Akuntansi common subjects
    { kelasId: kelas[6].id, mapelId: 54 }, // Matematika (Akuntansi)
    { kelasId: kelas[6].id, mapelId: 55 }, // Bahasa Inggris (Akuntansi)
    { kelasId: kelas[6].id, mapelId: 56 }, // Informatika (Akuntansi)
    { kelasId: kelas[6].id, mapelId: 57 }, // Project IPAS
    // Class X Akuntansi specific subjects
    { kelasId: kelas[6].id, mapelId: 65 }, // DDAKL V1-PB
    { kelasId: kelas[6].id, mapelId: 66 }, // DDAKL V1-PT
    { kelasId: kelas[6].id, mapelId: 67 }, // DDAKL V1-P3
    { kelasId: kelas[6].id, mapelId: 68 }, // DDAKL V1-LK
    { kelasId: kelas[6].id, mapelId: 69 }, // DDAKL V2-K3LH
    { kelasId: kelas[6].id, mapelId: 70 }, // DDAKL V2-EP
    { kelasId: kelas[6].id, mapelId: 71 }, // DDAKL V2-P2KADPD
    { kelasId: kelas[6].id, mapelId: 72 }, // DDAKL V2-PAPA

    // KELAS XI AKUNTANSI - SEMESTER GENAP
    // SMK Common subjects
    { kelasId: kelas[7].id, mapelId: 29 }, // Pend. Agama Kristen & Budi Pekerti
    { kelasId: kelas[7].id, mapelId: 30 }, // Pend. Pancasila
    { kelasId: kelas[7].id, mapelId: 31 }, // Bahasa Indonesia
    { kelasId: kelas[7].id, mapelId: 32 }, // PJOK
    { kelasId: kelas[7].id, mapelId: 33 }, // Sejarah
    // Akuntansi common subjects
    { kelasId: kelas[7].id, mapelId: 54 }, // Matematika (Akuntansi)
    { kelasId: kelas[7].id, mapelId: 55 }, // Bahasa Inggris (Akuntansi)
    { kelasId: kelas[7].id, mapelId: 56 }, // Informatika (Akuntansi)
    { kelasId: kelas[7].id, mapelId: 57 }, // Project IPAS
    // Class XI Akuntansi specific subjects
    { kelasId: kelas[7].id, mapelId: 58 }, // KKBA1-EB
    { kelasId: kelas[7].id, mapelId: 59 }, // KKBA2-APJDM
    { kelasId: kelas[7].id, mapelId: 60 }, // KKBA3-AL/IP
    { kelasId: kelas[7].id, mapelId: 61 }, // KKBA4-AK
    { kelasId: kelas[7].id, mapelId: 62 }, // KKBA5-KompAk
    { kelasId: kelas[7].id, mapelId: 63 }, // KKBA6-PJK
    { kelasId: kelas[7].id, mapelId: 64 }, // Project Kreatif dan Kewirausahaan
    { kelasId: kelas[7].id, mapelId: 73 }, // Perbankan
    { kelasId: kelas[7].id, mapelId: 74 }, // Akuntansi Pembiayaan

    // KELAS XII AKUNTANSI - SEMESTER GENAP
    // SMK Common subjects
    { kelasId: kelas[8].id, mapelId: 29 }, // Pend. Agama Kristen & Budi Pekerti
    { kelasId: kelas[8].id, mapelId: 30 }, // Pend. Pancasila
    { kelasId: kelas[8].id, mapelId: 31 }, // Bahasa Indonesia
    // Akuntansi common subjects
    { kelasId: kelas[8].id, mapelId: 54 }, // Matematika (Akuntansi)
    { kelasId: kelas[8].id, mapelId: 55 }, // Bahasa Inggris (Akuntansi)
    // Class XII Akuntansi specific subjects
    { kelasId: kelas[8].id, mapelId: 58 }, // KKBA1-EB
    { kelasId: kelas[8].id, mapelId: 59 }, // KKBA2-APJDM
    { kelasId: kelas[8].id, mapelId: 60 }, // KKBA3-AL/IP
    { kelasId: kelas[8].id, mapelId: 61 }, // KKBA4-AK
    { kelasId: kelas[8].id, mapelId: 62 }, // KKBA5-KompAk
    { kelasId: kelas[8].id, mapelId: 63 }, // KKBA6-PJK
    { kelasId: kelas[8].id, mapelId: 64 }, // Project Kreatif dan Kewirausahaan
    { kelasId: kelas[8].id, mapelId: 75 }, // Praktik Kerja Lapangan
    { kelasId: kelas[8].id, mapelId: 76 }, // Manajemen Keuangan
    { kelasId: kelas[8].id, mapelId: 77 }, // Auditing
    
    // === SMA CLASSES - SEMESTER GANJIL ===
    
    // KELAS X SMA - SEMESTER GANJIL
    // Core subjects
    { kelasId: kelas[9].id, mapelId: 1 },  // Pend. Agama Kristen & Budi Pekerti
    { kelasId: kelas[9].id, mapelId: 2 },  // Pend. Pancasila
    { kelasId: kelas[9].id, mapelId: 3 },  // Bahasa Indonesia
    { kelasId: kelas[9].id, mapelId: 4 },  // Matematika
    { kelasId: kelas[9].id, mapelId: 5 },  // Bahasa Inggris
    { kelasId: kelas[9].id, mapelId: 6 },  // PJOK
    { kelasId: kelas[9].id, mapelId: 7 },  // Sejarah
    { kelasId: kelas[9].id, mapelId: 8 },  // Seni: Musik
    { kelasId: kelas[9].id, mapelId: 9 },  // Mulok
    { kelasId: kelas[9].id, mapelId: 10 }, // Mulok: TIK
    // X SMA specific subjects
    { kelasId: kelas[9].id, mapelId: 11 }, // IPA: Fisika
    { kelasId: kelas[9].id, mapelId: 12 }, // IPA: Biologi
    { kelasId: kelas[9].id, mapelId: 13 }, // IPA: Kimia
    { kelasId: kelas[9].id, mapelId: 14 }, // IPS: Sosiologi
    { kelasId: kelas[9].id, mapelId: 15 }, // IPS: Sejarah
    { kelasId: kelas[9].id, mapelId: 16 }, // IPS: Ekonomi
    { kelasId: kelas[9].id, mapelId: 17 }, // IPS: Geografi
    { kelasId: kelas[9].id, mapelId: 18 }, // Informatika

    // KELAS XI SMA - SEMESTER GANJIL
    // Core subjects
    { kelasId: kelas[10].id, mapelId: 1 },  // Pend. Agama Kristen & Budi Pekerti
    { kelasId: kelas[10].id, mapelId: 2 },  // Pend. Pancasila
    { kelasId: kelas[10].id, mapelId: 3 },  // Bahasa Indonesia
    { kelasId: kelas[10].id, mapelId: 4 },  // Matematika
    { kelasId: kelas[10].id, mapelId: 5 },  // Bahasa Inggris
    { kelasId: kelas[10].id, mapelId: 6 },  // PJOK
    { kelasId: kelas[10].id, mapelId: 7 },  // Sejarah
    { kelasId: kelas[10].id, mapelId: 8 },  // Seni: Musik
    // XI SMA specific subjects
    { kelasId: kelas[10].id, mapelId: 19 }, // Fisika
    { kelasId: kelas[10].id, mapelId: 20 }, // Kimia
    { kelasId: kelas[10].id, mapelId: 21 }, // Biologi
    { kelasId: kelas[10].id, mapelId: 22 }, // Matematika Lanjut
    { kelasId: kelas[10].id, mapelId: 23 }, // Sosiologi
    { kelasId: kelas[10].id, mapelId: 24 }, // Ekonomi
    { kelasId: kelas[10].id, mapelId: 25 }, // Geografi
    { kelasId: kelas[10].id, mapelId: 26 }, // Sejarah Dunia
    { kelasId: kelas[10].id, mapelId: 27 }, // Bahasa Inggris Tingkat Lanjut

    // KELAS XII SMA - SEMESTER GANJIL
    // Core subjects
    { kelasId: kelas[11].id, mapelId: 1 },  // Pend. Agama Kristen & Budi Pekerti
    { kelasId: kelas[11].id, mapelId: 2 },  // Pend. Pancasila
    { kelasId: kelas[11].id, mapelId: 3 },  // Bahasa Indonesia
    { kelasId: kelas[11].id, mapelId: 4 },  // Matematika
    { kelasId: kelas[11].id, mapelId: 5 },  // Bahasa Inggris
    { kelasId: kelas[11].id, mapelId: 6 },  // PJOK
    { kelasId: kelas[11].id, mapelId: 7 },  // Sejarah
    { kelasId: kelas[11].id, mapelId: 8 },  // Seni: Musik
    // XII SMA specific subjects
    { kelasId: kelas[11].id, mapelId: 19 }, // Fisika
    { kelasId: kelas[11].id, mapelId: 20 }, // Kimia
    { kelasId: kelas[11].id, mapelId: 21 }, // Biologi
    { kelasId: kelas[11].id, mapelId: 22 }, // Matematika Lanjut
    { kelasId: kelas[11].id, mapelId: 28 }, // Prakarya & Kewirausahaan

    // === SMK LAYANAN KESEHATAN - SEMESTER GANJIL ===

    // KELAS X LAYANAN KESEHATAN - SEMESTER GANJIL
    // SMK Common subjects
    { kelasId: kelas[12].id, mapelId: 29 }, // Pend. Agama Kristen & Budi Pekerti
    { kelasId: kelas[12].id, mapelId: 30 }, // Pend. Pancasila
    { kelasId: kelas[12].id, mapelId: 31 }, // Bahasa Indonesia
    { kelasId: kelas[12].id, mapelId: 32 }, // PJOK
    { kelasId: kelas[12].id, mapelId: 33 }, // Sejarah
    { kelasId: kelas[12].id, mapelId: 34 }, // Seni Budaya: Musik
    { kelasId: kelas[12].id, mapelId: 35 }, // Mulok TIK
    // Layanan Kesehatan common subjects
    { kelasId: kelas[12].id, mapelId: 36 }, // Matematika
    { kelasId: kelas[12].id, mapelId: 37 }, // Bahasa Inggris
    { kelasId: kelas[12].id, mapelId: 38 }, // Informatika
    { kelasId: kelas[12].id, mapelId: 39 }, // Project IPAS
    // Class X Layanan Kesehatan specific subjects
    { kelasId: kelas[12].id, mapelId: 46 }, // DDKL1-PB
    { kelasId: kelas[12].id, mapelId: 47 }, // DDKL2-PT
    { kelasId: kelas[12].id, mapelId: 48 }, // DDKL3-PHP
    { kelasId: kelas[12].id, mapelId: 49 }, // DDKL4-ANFIS
    { kelasId: kelas[12].id, mapelId: 50 }, // DDKL5-TDKL
    { kelasId: kelas[12].id, mapelId: 51 }, // DDKL6-P2M

    // KELAS XI LAYANAN KESEHATAN - SEMESTER GANJIL
    // SMK Common subjects
    { kelasId: kelas[13].id, mapelId: 29 }, // Pend. Agama Kristen & Budi Pekerti
    { kelasId: kelas[13].id, mapelId: 30 }, // Pend. Pancasila
    { kelasId: kelas[13].id, mapelId: 31 }, // Bahasa Indonesia
    { kelasId: kelas[13].id, mapelId: 32 }, // PJOK
    { kelasId: kelas[13].id, mapelId: 33 }, // Sejarah
    { kelasId: kelas[13].id, mapelId: 34 }, // Seni Budaya: Musik
    // Layanan Kesehatan common subjects
    { kelasId: kelas[13].id, mapelId: 36 }, // Matematika
    { kelasId: kelas[13].id, mapelId: 37 }, // Bahasa Inggris
    { kelasId: kelas[13].id, mapelId: 38 }, // Informatika
    { kelasId: kelas[13].id, mapelId: 39 }, // Project IPAS
    // Class XI Layanan Kesehatan specific subjects
    { kelasId: kelas[13].id, mapelId: 40 }, // KKAKC1-IPU
    { kelasId: kelas[13].id, mapelId: 41 }, // KKAKC2-KDM
    { kelasId: kelas[13].id, mapelId: 42 }, // KKAKC3-KDTK
    { kelasId: kelas[13].id, mapelId: 43 }, // Project Kreatif dan Kewirausahaan
    { kelasId: kelas[13].id, mapelId: 44 }, // Ilmu Kesehatan Masyarakat
    { kelasId: kelas[13].id, mapelId: 45 }, // Kimia

    // KELAS XII LAYANAN KESEHATAN - SEMESTER GANJIL
    // SMK Common subjects
    { kelasId: kelas[14].id, mapelId: 29 }, // Pend. Agama Kristen & Budi Pekerti
    { kelasId: kelas[14].id, mapelId: 30 }, // Pend. Pancasila
    { kelasId: kelas[14].id, mapelId: 31 }, // Bahasa Indonesia
    // Layanan Kesehatan common subjects
    { kelasId: kelas[14].id, mapelId: 36 }, // Matematika
    { kelasId: kelas[14].id, mapelId: 37 }, // Bahasa Inggris
    // Class XII Layanan Kesehatan specific subjects
    { kelasId: kelas[14].id, mapelId: 40 }, // KKAKC1-IPU
{ kelasId: kelas[14].id, mapelId: 41 }, // KKAKC2-KDM
{ kelasId: kelas[14].id, mapelId: 42 }, // KKAKC3-KDTK
{ kelasId: kelas[14].id, mapelId: 43 }, // Project Kreatif dan Kewirausahaan
{ kelasId: kelas[14].id, mapelId: 52 }, // Praktik Kerja Lapangan
{ kelasId: kelas[14].id, mapelId: 53 }, // Komunikasi Keperawatan

// === SMK AKUNTANSI KEUANGAN LEMBAGA - SEMESTER GANJIL ===

// KELAS X AKUNTANSI - SEMESTER GANJIL
// SMK Common subjects
{ kelasId: kelas[15].id, mapelId: 29 }, // Pend. Agama Kristen & Budi Pekerti
{ kelasId: kelas[15].id, mapelId: 30 }, // Pend. Pancasila
{ kelasId: kelas[15].id, mapelId: 31 }, // Bahasa Indonesia
{ kelasId: kelas[15].id, mapelId: 32 }, // PJOK
{ kelasId: kelas[15].id, mapelId: 33 }, // Sejarah
{ kelasId: kelas[15].id, mapelId: 34 }, // Seni Budaya: Musik
{ kelasId: kelas[15].id, mapelId: 35 }, // Mulok TIK
// Akuntansi common subjects
{ kelasId: kelas[15].id, mapelId: 54 }, // Matematika (Akuntansi)
{ kelasId: kelas[15].id, mapelId: 55 }, // Bahasa Inggris (Akuntansi)
{ kelasId: kelas[15].id, mapelId: 56 }, // Informatika (Akuntansi)
{ kelasId: kelas[15].id, mapelId: 57 }, // Project IPAS
// Class X Akuntansi specific subjects
{ kelasId: kelas[15].id, mapelId: 65 }, // DDAKL V1-PB
{ kelasId: kelas[15].id, mapelId: 66 }, // DDAKL V1-PT
{ kelasId: kelas[15].id, mapelId: 67 }, // DDAKL V1-P3
{ kelasId: kelas[15].id, mapelId: 68 }, // DDAKL V1-LK
{ kelasId: kelas[15].id, mapelId: 69 }, // DDAKL V2-K3LH
{ kelasId: kelas[15].id, mapelId: 70 }, // DDAKL V2-EP
{ kelasId: kelas[15].id, mapelId: 71 }, // DDAKL V2-P2KADPD
{ kelasId: kelas[15].id, mapelId: 72 }, // DDAKL V2-PAPA

// KELAS XI AKUNTANSI - SEMESTER GANJIL
// SMK Common subjects
{ kelasId: kelas[16].id, mapelId: 29 }, // Pend. Agama Kristen & Budi Pekerti
{ kelasId: kelas[16].id, mapelId: 30 }, // Pend. Pancasila
{ kelasId: kelas[16].id, mapelId: 31 }, // Bahasa Indonesia
{ kelasId: kelas[16].id, mapelId: 32 }, // PJOK
{ kelasId: kelas[16].id, mapelId: 33 }, // Sejarah
// Akuntansi common subjects
{ kelasId: kelas[16].id, mapelId: 54 }, // Matematika (Akuntansi)
{ kelasId: kelas[16].id, mapelId: 55 }, // Bahasa Inggris (Akuntansi)
{ kelasId: kelas[16].id, mapelId: 56 }, // Informatika (Akuntansi)
{ kelasId: kelas[16].id, mapelId: 57 }, // Project IPAS
// Class XI Akuntansi specific subjects
{ kelasId: kelas[16].id, mapelId: 58 }, // KKBA1-EB
{ kelasId: kelas[16].id, mapelId: 59 }, // KKBA2-APJDM
{ kelasId: kelas[16].id, mapelId: 60 }, // KKBA3-AL/IP
{ kelasId: kelas[16].id, mapelId: 61 }, // KKBA4-AK
{ kelasId: kelas[16].id, mapelId: 62 }, // KKBA5-KompAk
{ kelasId: kelas[16].id, mapelId: 63 }, // KKBA6-PJK
{ kelasId: kelas[16].id, mapelId: 64 }, // Project Kreatif dan Kewirausahaan
{ kelasId: kelas[16].id, mapelId: 73 }, // Perbankan
{ kelasId: kelas[16].id, mapelId: 74 }, // Akuntansi Pembiayaan

// KELAS XII AKUNTANSI - SEMESTER GANJIL
// SMK Common subjects
{ kelasId: kelas[17].id, mapelId: 29 }, // Pend. Agama Kristen & Budi Pekerti
{ kelasId: kelas[17].id, mapelId: 30 }, // Pend. Pancasila
{ kelasId: kelas[17].id, mapelId: 31 }, // Bahasa Indonesia
// Akuntansi common subjects
{ kelasId: kelas[17].id, mapelId: 54 }, // Matematika (Akuntansi)
{ kelasId: kelas[17].id, mapelId: 55 }, // Bahasa Inggris (Akuntansi)
// Class XII Akuntansi specific subjects
{ kelasId: kelas[17].id, mapelId: 58 }, // KKBA1-EB
{ kelasId: kelas[17].id, mapelId: 59 }, // KKBA2-APJDM
{ kelasId: kelas[17].id, mapelId: 60 }, // KKBA3-AL/IP
{ kelasId: kelas[17].id, mapelId: 61 }, // KKBA4-AK
{ kelasId: kelas[17].id, mapelId: 62 }, // KKBA5-KompAk
{ kelasId: kelas[17].id, mapelId: 63 }, // KKBA6-PJK
{ kelasId: kelas[17].id, mapelId: 64 }, // Project Kreatif dan Kewirausahaan
{ kelasId: kelas[17].id, mapelId: 75 }, // Praktik Kerja Lapangan
{ kelasId: kelas[17].id, mapelId: 76 }, // Manajemen Keuangan
{ kelasId: kelas[17].id, mapelId: 77 }, // Auditing
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
