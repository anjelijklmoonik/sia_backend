import { Context } from "hono";
import * as nilaiService from "../services/grade";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const addNilaiController = async (c: Context) => {
  try {
    const body = await c.req.json();
    const { studentProfileId, mapelKelasId, skor, capaianKompetensi } = body;

    // Validasi input
    if (!studentProfileId || !mapelKelasId || skor === undefined) {
      return c.json({ message: "Field wajib (studentProfileId, mapelKelasId, skor) harus diisi." }, 400);
    }

    const newNilai = await nilaiService.addNilai(
      studentProfileId,
      mapelKelasId,
      skor,
      capaianKompetensi  // Pass capaianKompetensi to service
    );

    return c.json(
      {
        message: "Nilai berhasil ditambahkan.",
        data: newNilai,
      },
      201
    );
  } catch (error) {
    return c.json({ message: (error as Error).message }, 400);
  }
};

export const getNilaiByKelasDanSemesterController = async (c: Context) => {
  try {
    const kelasId = Number(c.req.param("kelasId"));
    const semester = c.req.param("semester");

    if (!kelasId || !semester) {
      return c.json({ message: "Data tidak lengkap" }, 400);
    }

    const nilai = await nilaiService.fetchNilaiByKelas(kelasId, semester);
    return c.json({ message: "Data nilai berhasil diambil", data: nilai });
  } catch (error) {
    return c.json({ message: (error as Error).message }, 400);
  }
};

export const updateNilaiController = async (c: Context) => {
  try {
    const id = Number(c.req.param("id"));
    const body = await c.req.json();
    const { skor, capaianKompetensi } = body;

    if (skor === undefined) {
      return c.json({ message: "Skor wajib diisi" }, 400);
    }

    const updatedNilai = await nilaiService.modifyNilai(id, skor, capaianKompetensi);
    return c.json(
      {
        message: "Nilai berhasil diupdate",
        data: updatedNilai,
      },
      200
    );
  } catch (error) {
    return c.json({ message: (error as Error).message }, 400);
  }
};

export const getGradesLessonByStudentHandler = async (c: Context) => {
  try {
    const user = c.get("user");
    if (!user || !user.userId) {
      return c.json({ error: "Unauthorized: userId tidak ditemukan" }, 401);
    }

    const userData = await prisma.users.findUnique({
      where: { id: user.userId },
      select: { studentProfilId: true },
    });

    if (!userData || !userData.studentProfilId) {
      return c.json({ error: "Student profile tidak ditemukan" }, 404);
    }

    console.log("studentProfilId:", userData.studentProfilId);

    const grades = await nilaiService.getGradesLessonByStudent(
      userData.studentProfilId
    );

    return c.json(
      {
        message: "Data nilai berhasil diambil",
        data: grades,
      },
      200
    );
  } catch (error: any) {
    return c.json({ error: error.message }, 400);
  }
};

export const getGradesLessonByStudentFromParentHandler = async (c: Context) => {
  try {
    const user = c.get("user");
    if (!user || !user.userId) {
      return c.json({ error: "Unauthorized: userId tidak ditemukan" }, 401);
    }

    const userData = await prisma.users.findUnique({
      where: { id: user.userId },
      select: { studentProfilId: true },
    });

    if (!userData || !userData.studentProfilId) {
      return c.json({ error: "Student profile tidak ditemukan" }, 404);
    }

    console.log("studentProfilId:", userData.studentProfilId);

    const grades = await nilaiService.getGradesLessonByStudent(
      userData.studentProfilId
    );

    return c.json(
      {
        message: "Data nilai berhasil diambil",
        data: grades,
      },
      200
    );
  } catch (error: any) {
    return c.json({ error: error.message }, 400);
  }
};

export const getFormDataHandler = async (c: Context) => {
  try {
    const formData = await nilaiService.getFormData();
    return c.json(
      {
        message: "Data form berhasil diambil",
        data: formData,
      },
      200
    );
  } catch (error: any) {
    return c.json({ error: error.message }, 400);
  }
};